export const worktimeStorageKeys = {
  entries: 'app2:worktime:entries',
  settings: 'app2:worktime:settings',
}

export const defaultWorktimeSettings = {
  month: '2026-06',
  monthlyTargetHours: 169,
  totalCarryHours: 0,
}

export const shiftTypes = [
  'Frühdienst',
  'Spätdienst',
  'Tagdienst',
  'Nachtdienst',
  '24h-Dienst',
  'Frei',
  'Urlaub',
  'Krankheit',
  'Fortbildung',
]

export const shiftColors = [
  { id: 'green', label: 'Tagdienst' },
  { id: 'red', label: 'RTW' },
  { id: 'yellow', label: 'Büro' },
  { id: 'blue', label: 'KTW' },
  { id: 'violet', label: 'Bereitschaft' },
  { id: 'orange', label: 'NKTW' },
]

export const nonWorkingShiftTypes = ['Frei', 'Urlaub', 'Krankheit']

export function createDraftShift(date = '2026-06-15') {
  return {
    id: '',
    date,
    startTime: '07:00',
    endTime: '19:00',
    shiftType: 'Tagdienst',
    breakMinutes: 45,
    location: 'RW Mitte',
    plannedHours: 12,
    actualHours: 12,
    breakHours: 0.75,
    countedHours: 11.25,
    manualOverride: false,
    color: 'red',
    notes: '',
  }
}

export function normalizeWorktimeEntries(entries) {
  if (!Array.isArray(entries)) {
    return []
  }

  return entries.map((entry, index) => {
    const fallbackDate = `2026-06-${String(Math.min(index + 15, 28)).padStart(2, '0')}`
    const date = /^\d{4}-\d{2}-\d{2}$/.test(entry.date || '') ? entry.date : fallbackDate
    const normalized = {
      id: entry.id || `shift-local-${index + 1}`,
      date,
      startTime: entry.startTime || entry.time?.split(' - ')[0] || '',
      endTime: entry.endTime || entry.time?.split(' - ')[1] || '',
      shiftType: entry.shiftType || entry.type || 'Tagdienst',
      breakMinutes: Number(entry.breakMinutes ?? 0),
      location: entry.location || entry.detail || '',
      plannedHours: entry.plannedHours ?? '',
      countedHours: entry.countedHours ?? '',
      manualOverride: Boolean(entry.manualOverride),
      color: entry.color || colorForShiftType(entry.shiftType || entry.type),
      notes: entry.notes || '',
    }
    return recalculateEntry(normalized)
  })
}

export function recalculateEntry(entry) {
  const calculatedActualHours = calculateActualHours(entry.startTime, entry.endTime)
  const actualHours = entry.manualOverride ? numberOrZero(entry.actualHours) : calculatedActualHours
  const breakHours = roundHours(Number(entry.breakMinutes || 0) / 60)
  const calculatedCountedHours = nonWorkingShiftTypes.includes(entry.shiftType)
    ? 0
    : roundHours(Math.max(actualHours - breakHours, 0))
  const calculatedPlannedHours = nonWorkingShiftTypes.includes(entry.shiftType) ? 0 : actualHours

  return {
    ...entry,
    actualHours,
    breakHours,
    plannedHours: entry.manualOverride ? numberOrZero(entry.plannedHours) : calculatedPlannedHours,
    countedHours: entry.manualOverride ? numberOrZero(entry.countedHours) : calculatedCountedHours,
  }
}

export function calculateActualHours(startTime, endTime) {
  if (!startTime || !endTime) {
    return 0
  }

  const [startHours, startMinutes] = startTime.split(':').map(Number)
  const [endHours, endMinutes] = endTime.split(':').map(Number)
  if ([startHours, startMinutes, endHours, endMinutes].some((value) => Number.isNaN(value))) {
    return 0
  }

  const startTotal = startHours * 60 + startMinutes
  let endTotal = endHours * 60 + endMinutes
  if (endTotal <= startTotal) {
    endTotal += 24 * 60
  }

  return roundHours((endTotal - startTotal) / 60)
}

export function summarizeWorktime(entries, settings) {
  const recalculated = normalizeWorktimeEntries(entries)
  const monthlyEntries = recalculated.filter((entry) => entry.date.startsWith(settings.month))
  const totals = monthlyEntries.reduce(
    (result, entry) => ({
      plannedHours: result.plannedHours + entry.plannedHours,
      actualHours: result.actualHours + entry.actualHours,
      breakHours: result.breakHours + entry.breakHours,
      countedHours: result.countedHours + entry.countedHours,
      vacationDays: result.vacationDays + (entry.shiftType === 'Urlaub' ? 1 : 0),
      sickDays: result.sickDays + (entry.shiftType === 'Krankheit' ? 1 : 0),
      trainingDays: result.trainingDays + (entry.shiftType === 'Fortbildung' ? 1 : 0),
    }),
    {
      plannedHours: 0,
      actualHours: 0,
      breakHours: 0,
      countedHours: 0,
      vacationDays: 0,
      sickDays: 0,
      trainingDays: 0,
    },
  )

  const monthBalance = roundHours(totals.countedHours - Number(settings.monthlyTargetHours || 0))
  return {
    ...totals,
    plannedHours: roundHours(totals.plannedHours),
    actualHours: roundHours(totals.actualHours),
    breakHours: roundHours(totals.breakHours),
    countedHours: roundHours(totals.countedHours),
    monthBalance,
    totalBalance: roundHours(Number(settings.totalCarryHours || 0) + monthBalance),
  }
}

export function colorForShiftType(shiftType) {
  if (shiftType === 'Nachtdienst') {
    return 'blue'
  }
  if (shiftType === 'Fortbildung') {
    return 'violet'
  }
  if (shiftType === 'Frei' || shiftType === 'Urlaub' || shiftType === 'Krankheit') {
    return 'yellow'
  }
  if (shiftType === '24h-Dienst') {
    return 'orange'
  }
  return 'red'
}

export function formatHours(value) {
  return Number(value || 0).toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function roundHours(value) {
  return Math.round(Number(value || 0) * 100) / 100
}

function numberOrZero(value) {
  const number = Number(String(value).replace(',', '.'))
  return Number.isNaN(number) ? 0 : roundHours(number)
}
