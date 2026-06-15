export const nunPdfFile = 'NUN-Algorithmen-2026.pdf'

export const nunIndex = [
  nun('nun-legende', 'Legende', 'Legende', 'Grundlagen', ['Legende', 'Symbole', 'Erklärung'], [7]),
  nun('nun-definitionen', 'Definitionen', 'Definitionen / Begriffserklärung', 'Grundlagen', ['Definitionen', 'Begriffe', 'Erklärung'], [8]),
  nun('nun-grundstruktur', 'Grundstruktur', 'Grundstruktur / Zielebene der NUN', 'Grundlagen', ['Grundstruktur', 'NUN', 'Zielebene'], [9]),
  nun('nun-x-problem', 'X', 'Basis-Versorgungspfad X-Problem / externe Blutung', 'Basisversorgung', ['X-Problem', 'Blutung', 'externe Blutung', 'Tourniquet'], [10]),
  nun('nun-abcde', 'ABCDE', 'Ersteinschätzung und ABCDE', 'Basisversorgung', ['ABCDE', 'Ersteinschätzung', 'Eintreffen', 'Untersuchung'], [11]),
  nun('nun-a-problem', 'A', 'Sofortmaßnahmen A-Problem', 'Basisversorgung', ['A-Problem', 'Atemweg', 'Stridor', 'Atemwegsproblem'], [13]),
  nun('nun-schwieriger-atemweg', 'Atemweg', 'Versorgungspfad schwieriger Atemweg', 'Atemweg / Atmung', ['schwieriger Atemweg', 'Atemweg', 'Intubation', 'Larynxtubus'], [14]),
  nun('nun-bolusgeschehen', 'Bolus', 'Versorgungspfad Bolusgeschehen', 'Atemweg / Atmung', ['Bolus', 'Fremdkörper', 'Atemwegsverlegung', 'Erstickung'], [15]),
  nun('nun-b-problem', 'B', 'Sofortmaßnahmen B-Problem', 'Atemweg / Atmung', ['B-Problem', 'Atmung', 'Atemnot', 'Belüftung'], [16]),
  nun('nun-ari-niv-erwachsene', 'ARI/NIV', 'Versorgungspfad ARI / NIV Erwachsene', 'Atemweg / Atmung', ['ARI', 'NIV', 'Atemnot', 'respiratorische Insuffizienz'], [17]),
  nun('nun-c-problem', 'C', 'Sofortmaßnahmen C-Problem', 'Kreislauf / Schock', ['C-Problem', 'Kreislauf', 'Schock', 'Hypotonie'], [18]),
  nun('nun-reanimation', 'Reanimation', 'Versorgungspfad Reanimation', 'Reanimation', ['Reanimation', 'CPR', 'Kreislaufstillstand', 'ROSC'], [19, 20, 21]),
  nun('nun-erkrankte-person', 'Erkrankte Person', 'Basis-Versorgungspfad erkrankte Person', 'Basisversorgung', ['erkrankte Person', 'internistisch', 'ABCDE'], [22, 23]),
  nun('nun-verletzte-person', 'Verletzte Person', 'Basis-Versorgungspfad verletzte Person', 'Trauma', ['verletzte Person', 'Trauma', 'Unfall', 'Verletzung'], [24, 25, 26, 27]),
  nun('nun-notaerztliche-unterstuetzung', 'NA-Unterstützung', 'Basis-Versorgungspfad notärztliche Unterstützung', 'Organisation', ['Notarzt', 'NA', 'Nachforderung', 'Unterstützung'], [28, 29]),
  nun('nun-telenotfallmedizin', 'Telenotfallmedizin', 'Basis-Versorgungspfad Telenotfallmedizin', 'Organisation', ['Telenotarzt', 'Telenotfallmedizin', 'Telemedizin'], [30, 31]),
  nun('nun-analgesie', 'Analgesie', 'Basis-Versorgungspfad medikamentöse Analgesie', 'Medikamente / Analgesie', ['Analgesie', 'Schmerz', 'Esketamin', 'Nalbuphin'], [32, 33]),
  nun('nun-anaphylaxie', 'Anaphylaxie', 'Versorgungspfad anaphylaktischer Schock Grad 2-3', 'Kreislauf / Schock', ['Anaphylaxie', 'allergischer Schock', 'Adrenalin', 'Allergie'], [34, 35]),
  nun('nun-bradykardie', 'Bradykardie', 'Versorgungspfad Bradykardie / lebensbedrohlich', 'Kardiologie', ['Bradykardie', 'Atropin', 'Schrittmacher', 'Kreislauf'], [36, 37]),
  nun('nun-hypertensiver-notfall', 'Hypertonie', 'Versorgungspfad hypertensiver Notfall', 'Kardiologie', ['Hypertonie', 'hypertensiver Notfall', 'Blutdruck', 'Urapidil'], [38, 39]),
  nun('nun-hypoglykaemie', 'Hypoglykämie', 'Versorgungspfad Hypoglykämie', 'Neurologie / Stoffwechsel', ['Hypoglykämie', 'BZ', 'Glukose', 'Diabetes'], [40, 41]),
  nun('nun-kardiales-lungenoedem', 'Lungenödem', 'Versorgungspfad kardiales Lungenödem', 'Kardiologie', ['Lungenödem', 'Atemnot', 'Herzinsuffizienz', 'Nitro'], [42, 43]),
  nun('nun-lungenarterienembolie', 'LAE', 'Versorgungspfad Lungenarterienembolie', 'Atemweg / Atmung', ['Lungenembolie', 'LAE', 'Dyspnoe', 'Thoraxschmerz'], [44, 45]),
  nun('nun-obstruktive-atemnot', 'Obstruktive Atemnot', 'Versorgungspfad obstruktive Atemnot', 'Atemweg / Atmung', ['Atemnot', 'Asthma', 'COPD', 'obstruktiv', 'Salbutamol'], [46, 47]),
  nun('nun-schlaganfall', 'Schlaganfall', 'Versorgungspfad Schlaganfall', 'Neurologie', ['Schlaganfall', 'Stroke', 'FAST', 'LVO', 'Neurologie'], [48]),
  nun('nun-sepsis', 'Sepsis', 'Versorgungspfad Sepsis', 'Infekt / Sepsis', ['Sepsis', 'Infekt', 'NEWS', 'qSOFA', 'Fieber'], [49, 50]),
  nun('nun-krampfanfall', 'Krampfanfall', 'Versorgungspfad Status generalisierter tonisch-klonischer Anfall', 'Neurologie', ['Krampfanfall', 'SGTKA', 'Epilepsie', 'Midazolam'], [52, 53]),
  nun('nun-tachykardie', 'Tachykardie', 'Versorgungspfad Tachykardie / lebensbedrohlich', 'Kardiologie', ['Tachykardie', 'Kardioversion', 'Herzrhythmus'], [54, 55]),
  nun('nun-thermischer-schaden', 'Thermischer Schaden', 'Versorgungspfad thermischer Schaden', 'Trauma', ['Verbrennung', 'Verbrühung', 'thermischer Schaden', 'Trauma'], [56, 57]),
  nun('nun-akuter-thoraxschmerz', 'Thoraxschmerz', 'Versorgungspfad akuter Thoraxschmerz', 'Kardiologie', ['Thoraxschmerz', 'Brustschmerz', 'ACS', 'Herzinfarkt'], [58, 59]),
  nun('nun-kind-transportverzicht', 'Kind / Transportverzicht', 'Versorgungspfad Kind / Voraussetzung Transportverzicht', 'Pädiatrie', ['Kind', 'Pädiatrie', 'Transportverzicht'], [60, 61]),
  nun('nun-uebergabe-klinik', 'Übergabe', 'Übergabe von Notfallpatienten an die Klinik', 'Transport / Übergabe', ['Übergabe', 'Klinik', 'Notaufnahme', 'Transport'], [62]),
]

export const nunEmergencyLinks = {
  resuscitation: ['nun-reanimation'],
  airway: ['nun-schwieriger-atemweg'],
  anaphylaxis: ['nun-anaphylaxie'],
  seizure: ['nun-krampfanfall'],
  stroke: ['nun-schlaganfall'],
  sepsis: ['nun-sepsis'],
  acs: ['nun-akuter-thoraxschmerz'],
  dyspnea: ['nun-obstruktive-atemnot', 'nun-ari-niv-erwachsene'],
}

function nun(id, label, title, category, keywords, pages) {
  return {
    id,
    label,
    title,
    category,
    keywords,
    pages,
    primaryPage: pages[0],
    source: 'NUN',
    pdfFile: nunPdfFile,
    version: 'NUN Versorgungspfade 2026',
    lastUpdated: '2026',
    displayMode: 'pdf-page',
  }
}
