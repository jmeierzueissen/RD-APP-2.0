export function calculateMgFromMgPerKg(weightKg, doseMgPerKg) {
  return round(Number(weightKg) * Number(doseMgPerKg))
}

export function calculateMgRangeFromMgPerKg(weightKg, min, max) {
  return {
    minMg: calculateMgFromMgPerKg(weightKg, min),
    maxMg: calculateMgFromMgPerKg(weightKg, max),
  }
}

export function calculateMlFromMg(mg, concentrationMgPerMl) {
  if (!Number(concentrationMgPerMl)) {
    return null
  }
  return round(Number(mg) / Number(concentrationMgPerMl))
}

export function applyMaxDose(mg, maxDoseMg) {
  if (!maxDoseMg || Number(mg) <= Number(maxDoseMg)) {
    return { mg: round(mg), capped: false }
  }
  return { mg: round(maxDoseMg), capped: true }
}

export function calculateAgeBandDose(ageMonths, ageYears, rules) {
  const totalMonths = Number(ageMonths || 0) + Number(ageYears || 0) * 12
  return rules.find((rule) => totalMonths >= rule.minMonths && totalMonths < rule.maxMonthsExclusive) || null
}

export function calculateMedicationDose({ rule, weightKg, ageYears, ageMonths, concentrationMgPerMl, rangeMode }) {
  const warnings = []
  const effectiveConcentration = Number(concentrationMgPerMl || rule.concentrationMgPerMl)
  const calculationType = rule.calculationType || rule.doseType
  const isLocked = Boolean(
    rule.lockedUntilVerified
    || rule.locked
    || calculationType === 'manual_check_required'
    || calculationType === 'perfusion'
    || calculationType === 'check_required',
  )

  if (isLocked) {
    return {
      blocked: true,
      warnings: [
        'Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden.',
        ...(rule.warnings || []),
        ...(rule.notes || []),
      ],
    }
  }

  if (!Number(weightKg) && ['mg_per_kg', 'mg_per_kg_range'].includes(calculationType)) {
    return { blocked: true, warnings: ['Gewicht muss > 0 kg sein.'] }
  }

  if ((rule.requiresConcentration || rule.requiresConcentrationInput) && !effectiveConcentration) {
    warnings.push('Konzentration mg/ml muss > 0 sein, damit ml berechnet werden können.')
  }

  let doseMg = null
  let doseRange = null
  let doseLabel = ''
  let ageBand = null

  if (calculationType === 'fixed' || calculationType === 'fixed_mg') {
    doseMg = Number(rule.doseMg ?? rule.fixedDoseMg)
    doseLabel = `${formatNumber(doseMg)} mg fix`
  }

  if (calculationType === 'mg_per_kg') {
    doseMg = calculateMgFromMgPerKg(weightKg, rule.doseMgPerKg)
    doseLabel = `${formatNumber(rule.doseMgPerKg)} mg/kg`
  }

  if (calculationType === 'mg_per_kg_range') {
    doseRange = calculateMgRangeFromMgPerKg(weightKg, rule.doseMinMgPerKg, rule.doseMaxMgPerKg)
    const selectedDose = rangeMode === 'max'
      ? rule.doseMaxMgPerKg
      : rangeMode === 'min'
        ? rule.doseMinMgPerKg
        : rule.defaultDoseMgPerKg || rule.doseMinMgPerKg
    doseMg = calculateMgFromMgPerKg(weightKg, selectedDose)
    doseLabel = `${formatNumber(rule.doseMinMgPerKg)}-${formatNumber(rule.doseMaxMgPerKg)} mg/kg`
  }

  if (calculationType === 'age_band' || calculationType === 'age_band_fixed_mg') {
    ageBand = calculateAgeBandDose(ageMonths, ageYears, rule.ageBands || defaultBuccolamAgeBands)
    if (!ageBand) {
      return { blocked: true, warnings: ['Kein passendes Altersband gefunden. Kinder-SOP prüfen.'] }
    }
    doseMg = Number(ageBand.fixedDoseMg)
    doseLabel = ageBand.label
  }

  const capped = applyMaxDose(doseMg, rule.maxDoseMg)
  if (capped.capped) {
    warnings.push(`Maximaldosis überschritten. Ausgabe auf ${formatNumber(rule.maxDoseMg)} mg begrenzt.`)
  }

  return {
    blocked: false,
    doseMg: capped.mg,
    doseRange,
    volumeMl: calculateMlFromMg(capped.mg, effectiveConcentration),
    concentrationMgPerMl: effectiveConcentration || null,
    doseLabel,
    ageBand,
    warnings,
  }
}

export function formatNumber(value) {
  if (value === null || value === undefined || value === '') {
    return '-'
  }
  return Number(value).toLocaleString('de-DE', {
    maximumFractionDigits: 2,
  })
}

const defaultBuccolamAgeBands = [
  { minMonths: 3, maxMonthsExclusive: 12, fixedDoseMg: 2.5, label: '3 Monate bis < 1 Jahr' },
  { minMonths: 12, maxMonthsExclusive: 60, fixedDoseMg: 5, label: '1 Jahr bis < 5 Jahre' },
  { minMonths: 60, maxMonthsExclusive: 120, fixedDoseMg: 7.5, label: '5 Jahre bis < 10 Jahre' },
  { minMonths: 120, maxMonthsExclusive: 216, fixedDoseMg: 10, label: '10 bis 18 Jahre' },
]

function round(value) {
  return Math.round(Number(value || 0) * 100) / 100
}
