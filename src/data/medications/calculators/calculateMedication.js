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

  if (rule.locked || rule.doseType === 'check_required') {
    return {
      blocked: true,
      warnings: ['Dieses Profil ist als zu prüfen markiert. Keine automatische Berechnung aktiv.', ...rule.notes],
    }
  }

  if (!Number(weightKg) && ['mg_per_kg', 'mg_per_kg_range'].includes(rule.doseType)) {
    return { blocked: true, warnings: ['Gewicht muss > 0 kg sein.'] }
  }

  if (rule.requiresConcentrationInput && !effectiveConcentration) {
    warnings.push('Konzentration mg/ml muss > 0 sein, damit ml berechnet werden können.')
  }

  let doseMg = null
  let doseRange = null
  let doseLabel = ''
  let ageBand = null

  if (rule.doseType === 'fixed_mg') {
    doseMg = Number(rule.fixedDoseMg)
    doseLabel = `${formatNumber(rule.fixedDoseMg)} mg fix`
  }

  if (rule.doseType === 'mg_per_kg') {
    doseMg = calculateMgFromMgPerKg(weightKg, rule.doseMgPerKg)
    doseLabel = `${formatNumber(rule.doseMgPerKg)} mg/kg`
  }

  if (rule.doseType === 'mg_per_kg_range') {
    doseRange = calculateMgRangeFromMgPerKg(weightKg, rule.doseMinMgPerKg, rule.doseMaxMgPerKg)
    const selectedDose = rangeMode === 'max' ? rule.doseMaxMgPerKg : rule.defaultDoseMgPerKg
    doseMg = calculateMgFromMgPerKg(weightKg, selectedDose)
    doseLabel = `${formatNumber(rule.doseMinMgPerKg)}-${formatNumber(rule.doseMaxMgPerKg)} mg/kg`
  }

  if (rule.doseType === 'age_band_fixed_mg') {
    ageBand = calculateAgeBandDose(ageMonths, ageYears, rule.ageBands)
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

function round(value) {
  return Math.round(Number(value || 0) * 100) / 100
}
