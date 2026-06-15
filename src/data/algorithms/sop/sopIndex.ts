export const sopPdfFile = 'SOP_Region_Hannover_2023_Update_IVENA.pdf'

export const sopSections = [
  {
    id: 'basis',
    title: 'Basisversorgungspfade',
    category: 'Basisversorgungspfad',
    entries: [
      sop('sop-bv1-ersteindruck-xabcde', 'BV1', 'Ersteindruck und Erstuntersuchung / xABCDE', [9], ['Ersteindruck', 'Erstuntersuchung', 'xABCDE', 'ABCDE']),
      sop('sop-bv2-x-problem-blutung', 'BV2', 'X-Problem / lebensbedrohliche externe Blutung', [10], ['X-Problem', 'Blutung', 'externe Blutung', 'Trauma']),
      sop('sop-bv3-a-problem-atemweg', 'BV3', 'A-Problem / Atemweg', [11], ['A-Problem', 'Atemweg', 'Airway']),
      sop('sop-zv1-atemwegssicherung-erwachsene', 'ZV1', 'Atemwegssicherung Erwachsene', [12], ['Atemwegssicherung', 'Erwachsene', 'Intubation', 'Larynxtubus']),
      sop('sop-zv2-atemwegssicherung-kinder', 'ZV2', 'Atemwegssicherung Kinder', [13], ['Atemwegssicherung', 'Kinder', 'Pädiatrie']),
      sop('sop-zv3-fremdkoerperentfernung', 'ZV3', 'Fremdkörperentfernung', [14], ['Fremdkörper', 'Atemwegsverlegung']),
      sop('sop-bv4-b-problem-belueftung', 'BV4', 'B-Problem / Belüftung', [15], ['B-Problem', 'Belüftung', 'Breathing', 'Atemnot']),
      sop('sop-bv5-c-problem-kreislauf', 'BV5', 'C-Problem / Kreislauf', [16], ['C-Problem', 'Kreislauf', 'Circulation']),
      sop('sop-bv6-d-problem-neurologie', 'BV6', 'D-Problem / Neurologie', [17], ['D-Problem', 'Neurologie', 'Disability']),
      sop('sop-bv7-e-problem-exposure', 'BV7', 'E-Problem / Exposure / Untersuchung', [18], ['E-Problem', 'Exposure', 'Untersuchung']),
    ],
  },
  {
    id: 'versorgung',
    title: 'Versorgungspfade',
    category: 'Versorgungspfad',
    entries: [
      sop('sop-v1-cpr-erwachsene', 'V1', 'CPR Erwachsene', [19, 20, 21], ['CPR', 'Reanimation', 'ALS', 'Erwachsene', 'Kreislaufstillstand']),
      sop('sop-zv4-transport-lucas', 'ZV4', 'Transport unter LUCAS', [22, 23, 24], ['LUCAS', 'Transport', 'Reanimation']),
      sop('sop-v2-cpr-kinder', 'V2', 'CPR Kinder', [25, 26, 27], ['CPR', 'Reanimation', 'Kinder', 'Pädiatrie']),
      sop('sop-v3-neugeborenenversorgung', 'V3', 'Neugeborenenversorgung', [28], ['Neugeborene', 'Geburt', 'Pädiatrie']),
      sop('sop-v4-allergischer-schock', 'V4', 'Allergischer Schock', [29, 30, 31], ['Allergie', 'Anaphylaxie', 'Allergischer Schock']),
      sop('sop-v5-acs', 'V5', 'Akutes Koronarsyndrom / ACS', [32, 33], ['ACS', 'Brustschmerz', 'STEMI', 'NSTEMI', 'Koronarsyndrom']),
      sop('sop-v6-hypertensiver-notfall', 'V6', 'Hypertensiver Notfall', [34, 35], ['Hypertonie', 'Hypertensiv']),
      sop('sop-v7-kardiales-lungenoedem', 'V7', 'Kardiales Lungenödem', [36, 37], ['Lungenödem', 'kardial', 'Atemnot']),
      sop('sop-v8-tachykardie', 'V8', 'Lebensbedrohliche Tachykardie', [38, 39], ['Tachykardie', 'Rhythmusstörung']),
      sop('sop-v9-bradykardie', 'V9', 'Lebensbedrohliche Bradykardie', [40, 41], ['Bradykardie', 'Kreislaufzusammenbruch']),
      sop('sop-v10-obstruktive-atemnot', 'V10', 'Obstruktive Atemnot', [42, 43], ['Atemnot', 'obstruktiv', 'Asthma', 'COPD']),
      sop('sop-zv5-ari', 'ZV5', 'Akute respiratorische Insuffizienz / ARI', [44, 45], ['ARI', 'Atemnot', 'respiratorische Insuffizienz']),
      sop('sop-v11-hypoglykaemie', 'V11', 'Hypoglykämie', [46, 47], ['Hypoglykämie', 'Diabetes', 'BZ']),
      sop('sop-v12-krampfanfall-sgtka', 'V12', 'Krampfanfall / SGTKA', [48, 49], ['Krampfanfall', 'SGTKA', 'Status epilepticus']),
      sop('sop-v13-schlaganfall-lvo', 'V13', 'Schlaganfall / LVO', [50, 51, 52], ['Schlaganfall', 'Stroke', 'LVO', 'Neurologie']),
      sop('sop-v14-sepsis', 'V14', 'Sepsis', [53, 54], ['Sepsis', 'Infektion']),
      sop('sop-v15-analgesie', 'V15', 'Medikamentöse Analgesie', [55, 56, 57], ['Analgesie', 'Schmerz', 'X-Problem']),
      sop('sop-v16-uebelkeit-erbrechen', 'V16', 'Übelkeit / Erbrechen', [58, 59], ['Übelkeit', 'Erbrechen', 'Antiemetikum']),
      sop('sop-v17-ivena-pzc-klinikauswahl', 'V17', 'IVENA / PZC Plus / Klinikauswahl', [60, 61, 62], ['IVENA', 'PZC', 'Klinikauswahl', 'Ampel']),
      sop('sop-v18-strukturierte-uebergabe', 'V18', 'Strukturierte Übergabe', [63, 64], ['Übergabe', 'SAMPLER', 'MIST', 'Struktur']),
    ],
  },
  {
    id: 'procedures',
    title: 'Prozeduren',
    category: 'Prozedur',
    entries: [
      sop('sop-p1-larynxtubus', 'P1', 'Larynxtubus', [65], ['Larynxtubus', 'Atemweg']),
      sop('sop-p2-rettungsintubation', 'P2', 'Direkte Laryngoskopie / Rettungsintubation', [66], ['Laryngoskopie', 'Rettungsintubation', 'Intubation']),
      sop('sop-p3-intravenoeser-zugang', 'P3', 'Intravenöser Zugang', [67], ['i.v.', 'iv', 'Zugang', 'Vene']),
      sop('sop-p4-intraossaerer-zugang', 'P4', 'Intraossärer Zugang / EZ-IO', [68, 69], ['i.o.', 'io', 'intraossär', 'EZ-IO', 'Zugang']),
      sop('sop-p5-thoraxentlastungspunktion', 'P5', 'Thoraxentlastungspunktion', [70, 71], ['Thorax', 'Entlastung', 'Punktion', 'Spannungspneumothorax']),
      sop('sop-p6-intramuskulaere-injektion', 'P6', 'Intramuskuläre Injektion', [72], ['i.m.', 'im', 'intramuskulär', 'Injektion']),
      sop('sop-p7-kardioversion', 'P7', 'Kardioversion', [73], ['Kardioversion', 'Tachykardie']),
      sop('sop-p8-transkutane-schrittmachertherapie', 'P8', 'Transkutane Schrittmachertherapie', [74], ['Schrittmacher', 'transkutan', 'Bradykardie']),
    ],
  },
]

export const sopIndex = sopSections.flatMap((section) =>
  section.entries.map((entry) => ({ ...entry, category: section.category })),
)

export const emergencySopLinks = {
  adultResuscitation: ['sop-v1-cpr-erwachsene'],
  childResuscitation: ['sop-v2-cpr-kinder'],
  anaphylaxis: ['sop-v4-allergischer-schock'],
  acs: ['sop-v5-acs'],
  dyspnea: ['sop-v10-obstruktive-atemnot', 'sop-zv5-ari'],
  seizure: ['sop-v12-krampfanfall-sgtka'],
  stroke: ['sop-v13-schlaganfall-lvo'],
  sepsis: ['sop-v14-sepsis'],
}

function sop(id, label, title, pages, keywords) {
  return {
    id,
    label,
    title,
    keywords,
    pdfFile: sopPdfFile,
    pages,
    primaryPage: pages[0],
    source: 'SOP Region Hannover',
    version: 'Version 2.0 mit Update IVENA-Ampel',
    lastUpdated: '2024-07-02',
  }
}
