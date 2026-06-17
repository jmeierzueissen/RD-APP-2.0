export type EmergencyMedication = {
  id: string;
  name: string;
  tradeNames: string[];
  category: string;
  indications: string[];
  effect: string;
  sideEffects: string[];
  contraindications: string[];
  warnings: string[];
  appNotes: string[];
  calculatorEnabled: boolean;
  calculatorProfiles: string[];
  sopLinks?: string[];
  nunLinks?: string[];
  poisonCenterLinks?: string[];
  source: string;
  lastUpdated: string;
};

export const emergencyMedications: EmergencyMedication[] = [
  {
    id: "adrenalin",
    name: "Adrenalin",
    tradeNames: ["Suprarenin"],
    category: "Katecholamin / Reanimation / Anaphylaxie",
    indications: [
      "Reanimation",
      "Anaphylaxie / allergischer Schock",
      "schwere Bradykardie / Schockzustände nach SOP"
    ],
    effect: "Alpha- und Beta-Sympathomimetikum. Steigert Herzfrequenz, Kontraktilität und Blutdruck, zusätzlich bronchodilatatorische Wirkung.",
    sideEffects: [
      "Tachykardie",
      "Hypertonie",
      "Herzrhythmusstörungen",
      "Tremor",
      "Unruhe",
      "Myokardischämie möglich"
    ],
    contraindications: [
      "Im vitalen Notfall keine absolute Kontraindikation",
      "Außerhalb vitaler Notfälle streng indikationsabhängig"
    ],
    warnings: [
      "Indikation und Applikationsweg klar trennen",
      "CPR, Anaphylaxie und Perfusor/Bradykardie nicht als ein gemeinsames Rechenprofil behandeln"
    ],
    appNotes: [
      "Getrennte Rechnerprofile für CPR Erwachsene, CPR Kinder, Anaphylaxie und ggf. Perfusor vorbereiten",
      "Immer Quelle/SOP-Version anzeigen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: [
      "adrenalin-cpr-erwachsene",
      "adrenalin-cpr-kinder",
      "adrenalin-anaphylaxie",
      "adrenalin-perfusor"
    ],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "amiodaron",
    name: "Amiodaron",
    tradeNames: ["Cordarex"],
    category: "Antiarrhythmikum",
    indications: [
      "VF / pVT im Rahmen der Reanimation",
      "lebensbedrohliche tachykarde Rhythmusstörungen nach SOP"
    ],
    effect: "Antiarrhythmikum Klasse III. Verlängert die Refraktärzeit und stabilisiert den Herzrhythmus.",
    sideEffects: [
      "Hypotonie",
      "Bradykardie",
      "QT-Verlängerung",
      "Übelkeit",
      "proarrhythmische Effekte möglich"
    ],
    contraindications: [
      "Bradykardie",
      "höhergradiger AV-Block",
      "QT-Verlängerung",
      "bekannte Unverträglichkeit",
      "Schilddrüsenerkrankungen/Jodproblematik prüfen"
    ],
    warnings: [
      "EKG-/Monitoringpflicht",
      "Im Reanimationsfall gelten besondere SOP-Regeln"
    ],
    appNotes: [
      "Unter Reanimation und Tachykardie verknüpfen",
      "Warnkarte für Monitoring anzeigen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["amiodaron-cpr", "amiodaron-tachykardie"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "atropin",
    name: "Atropin",
    tradeNames: ["Atropinsulfat"],
    category: "Parasympatholytikum / Antidot",
    indications: [
      "symptomatische Bradykardie",
      "cholinerge Intoxikation nach SOP/ärztlicher Anordnung"
    ],
    effect: "Hemmt parasympathische/vagale Wirkung am Herzen und kann die Herzfrequenz steigern.",
    sideEffects: [
      "Tachykardie",
      "Mundtrockenheit",
      "Mydriasis",
      "Unruhe",
      "Harnverhalt",
      "Verwirrtheit möglich"
    ],
    contraindications: [
      "Engwinkelglaukom",
      "Prostatahyperplasie mit Harnverhalt",
      "tachykarde Rhythmusstörungen",
      "im vitalen Notfall relativ"
    ],
    warnings: [
      "Bradykardie-Profil und Antidot-Profil trennen",
      "EKG-Monitoring beachten"
    ],
    appNotes: [
      "Mit SOP Bradykardie und Antidotbereich verknüpfen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["atropin-bradykardie", "atropin-antidot"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "noradrenalin",
    name: "Noradrenalin",
    tradeNames: ["Arterenol"],
    category: "Katecholamin / Vasopressor",
    indications: [
      "kritische Hypotonie",
      "Schockzustände nach Volumenprüfung und SOP/ärztlicher Anordnung"
    ],
    effect: "Starker Alpha-Agonist. Erhöht den Gefäßtonus und damit den Blutdruck.",
    sideEffects: [
      "Hypertonie",
      "Bradykardie",
      "Rhythmusstörungen",
      "periphere Minderperfusion",
      "Ischämie",
      "Extravasationsschäden möglich"
    ],
    contraindications: [
      "unkorrigierter Volumenmangel",
      "schwere periphere Ischämie",
      "Anwendung streng indikationsabhängig"
    ],
    warnings: [
      "Perfusor-Rechner erforderlich",
      "Konzentration und Laufrate klar anzeigen",
      "Kontinuierliches Monitoring"
    ],
    appNotes: [
      "Als Perfusor-Profil vorbereiten",
      "Nicht als einfacher Bolus-Rechner darstellen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["noradrenalin-perfusor"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "magnesiumsulfat",
    name: "Magnesiumsulfat",
    tradeNames: ["Magnesiumsulfat"],
    category: "Elektrolyt / Antiarrhythmikum / Bronchodilatation",
    indications: [
      "Torsade-de-pointes",
      "Eklampsie nach SOP/ärztlicher Anordnung",
      "schwere bronchospastische Zustände nach SOP"
    ],
    effect: "Membranstabilisierend, antiarrhythmisch, relaxierend und bronchodilatatorisch.",
    sideEffects: [
      "Hypotonie",
      "Bradykardie",
      "Flush",
      "Übelkeit",
      "Atemdepression bei Überdosierung"
    ],
    contraindications: [
      "schwere Niereninsuffizienz",
      "AV-Block",
      "Myasthenia gravis"
    ],
    warnings: [
      "Langsame Gabe und Monitoring beachten",
      "Indikation klar auswählen"
    ],
    appNotes: [
      "Unter Kardiologie, Atemweg und Sondermedikamente auffindbar machen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["magnesium-torsade", "magnesium-bronchospasmus"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "urapidil",
    name: "Urapidil",
    tradeNames: ["Ebrantil"],
    category: "Antihypertensivum",
    indications: [
      "hypertensiver Notfall",
      "Blutdruckmanagement bei Schlaganfall nach SOP"
    ],
    effect: "Blutdrucksenkung durch Alpha-1-Blockade und zentrale Regulation.",
    sideEffects: [
      "Hypotonie",
      "Schwindel",
      "Kopfschmerz",
      "Übelkeit",
      "Tachykardie oder Bradykardie möglich"
    ],
    contraindications: [
      "Aortenisthmusstenose",
      "AV-Shunt",
      "Schwangerschaft/Fachinfo prüfen",
      "relative Kontraindikationen nach SOP prüfen"
    ],
    warnings: [
      "Nicht blind Blutdruck senken",
      "Zielwerte nach SOP/Schlaganfall-Konzept beachten"
    ],
    appNotes: [
      "Mit hypertensivem Notfall und Schlaganfall verknüpfen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["urapidil-hypertensiver-notfall", "urapidil-schlaganfall"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "tranexamsaeure",
    name: "Tranexamsäure",
    tradeNames: ["Cyclocapron"],
    category: "Antifibrinolytikum / Trauma",
    indications: [
      "starke Blutung",
      "Trauma mit Verdacht auf relevante Blutung nach SOP"
    ],
    effect: "Hemmt die Fibrinolyse und stabilisiert Blutgerinnsel.",
    sideEffects: [
      "Übelkeit",
      "Erbrechen",
      "Hypotonie bei schneller Gabe",
      "selten thromboembolische Ereignisse",
      "Krampfanfälle bei hoher Dosis möglich"
    ],
    contraindications: [
      "akute Thrombose oder Embolie",
      "schwere Niereninsuffizienz",
      "Krampfanamnese vorsichtig prüfen"
    ],
    warnings: [
      "Indikation Trauma/Blutung klar anzeigen",
      "Zeitfaktor beachten"
    ],
    appNotes: [
      "Mit X-Problem, Trauma und Blutung verknüpfen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["txa-trauma-blutung"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "esketamin",
    name: "Esketamin",
    tradeNames: ["Ketanest S"],
    category: "Analgetikum / Anästhetikum",
    indications: [
      "starke Schmerzen",
      "Traumaanalgesie",
      "Rescue-Medikation nach SOP"
    ],
    effect: "NMDA-Antagonist mit starker analgetischer und dissoziativer Wirkung. Häufig kreislaufstabil bzw. sympathikoton.",
    sideEffects: [
      "Halluzinationen",
      "Unruhe",
      "Übelkeit",
      "Erbrechen",
      "Blutdruckanstieg",
      "Pulsanstieg",
      "Hypersalivation"
    ],
    contraindications: [
      "schwere Hypertonie",
      "relevante KHK",
      "Aneurysma",
      "Präeklampsie/Eklampsie prüfen",
      "psychiatrische Besonderheiten beachten"
    ],
    warnings: [
      "Monitoring, Atemweg und Vigilanz beachten",
      "Kombination mit Benzodiazepinen nur nach SOP/Indikation",
      "Kinder/Erwachsene getrennt prüfen"
    ],
    appNotes: [
      "Mit Analgesie, X-Problem und Trauma verknüpfen",
      "Rechnerprofil nach mg/kg und Applikationsweg"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["esketamin-analgesie-iv-io", "esketamin-rescue-in"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "midazolam",
    name: "Midazolam",
    tradeNames: ["Dormicum", "Buccolam"],
    category: "Benzodiazepin / Antikonvulsivum / Sedativum",
    indications: [
      "Krampfanfall / SGTKA",
      "Sedierung nach SOP",
      "Narkoseeinleitung nach ärztlicher Anordnung/SOP"
    ],
    effect: "Benzodiazepin. Sedierend, anxiolytisch, antikonvulsiv, muskelrelaxierend und amnestisch.",
    sideEffects: [
      "Atemdepression",
      "Hypotonie",
      "Vigilanzminderung",
      "paradoxe Reaktion",
      "Atemwegsverlegung möglich"
    ],
    contraindications: [
      "schwere Ateminsuffizienz ohne Sicherung",
      "Myasthenia gravis",
      "Schockzustand vorsichtig prüfen",
      "Überempfindlichkeit"
    ],
    warnings: [
      "Atemweg und Beatmungsbereitschaft sicherstellen",
      "Erwachsene und Kinder getrennt behandeln",
      "Bei Kindern lokale Buccolam-Regel prüfen"
    ],
    appNotes: [
      "Mit Krampfanfall/SGTKA verknüpfen",
      "Rechnerprofile für Erwachsene und Kinder streng trennen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["midazolam-sgtka-erwachsene-in", "midazolam-sgtka-erwachsene-iv", "buccolam-kinder-altersband"],
    source: "NEF-Medikamentenliste Region Hannover / SOP prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "fentanyl",
    name: "Fentanyl",
    tradeNames: ["Fentanyl"],
    category: "Opioid-Analgetikum / Analgesie / BtM / NEF ärztlich prüfen",
    indications: [
      "starke akute Schmerzen nach SOP/ärztlicher Anordnung",
      "Traumaanalgesie nach lokaler Freigabe",
      "Analgesie im Rahmen ärztlich geführter Maßnahmen"
    ],
    effect: "Potentes Opioid-Analgetikum. Wirkt stark schmerzlindernd und sedierend über Opioidrezeptoren.",
    sideEffects: [
      "Atemdepression",
      "Sedierung",
      "Übelkeit",
      "Erbrechen",
      "Bradykardie möglich",
      "Hypotonie möglich",
      "Thoraxrigidität bei schneller Gabe möglich"
    ],
    contraindications: [
      "schwere Ateminsuffizienz ohne Sicherung",
      "fehlende Monitoring- oder Atemwegsbereitschaft",
      "bekannte Überempfindlichkeit",
      "Indikation streng nach SOP/ärztlicher Freigabe prüfen"
    ],
    warnings: [
      "BtM deutlich dokumentieren und lokale Vorgaben beachten",
      "Opioid: Atemweg, SpO₂, Kreislauf und Vigilanz eng überwachen",
      "Naloxon- und Beatmungsbereitschaft vorhalten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Als Analgesie- und BtM-Medikament kennzeichnen",
      "Rechnerprofil erst nach geprüfter Dosierungsfreigabe aktivieren",
      "Mit Analgesie, Trauma und NEF/ärztlich verknüpfen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["fentanyl-analgesie"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "morphin",
    name: "Morphin",
    tradeNames: ["Morphin"],
    category: "Opioid-Analgetikum / Analgesie / BtM",
    indications: [
      "starke akute Schmerzen nach SOP",
      "Analgesie bei Trauma oder internistischen Schmerzen nach lokaler Freigabe"
    ],
    effect: "Opioid-Analgetikum mit starker schmerzlindernder und sedierender Wirkung.",
    sideEffects: [
      "Atemdepression",
      "Sedierung",
      "Übelkeit",
      "Erbrechen",
      "Hypotonie",
      "Bradykardie möglich",
      "Juckreiz"
    ],
    contraindications: [
      "schwere Ateminsuffizienz ohne Sicherung",
      "akute Bewusstseinsstörung unklarer Ursache streng prüfen",
      "bekannte Überempfindlichkeit",
      "Indikation und Freigabe nach SOP prüfen"
    ],
    warnings: [
      "BtM deutlich dokumentieren und lokale Vorgaben beachten",
      "Opioid: Atemweg, SpO₂, Kreislauf und Vigilanz überwachen",
      "Naloxon- und Beatmungsbereitschaft vorhalten",
      "Keine Dosierung ohne geprüfte Quelle ergänzen"
    ],
    appNotes: [
      "Unter Analgesie, BtM und NEF/ärztlich auffindbar machen",
      "Rechnerprofil erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["morphin-analgesie"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "nalbuphin",
    name: "Nalbuphin",
    tradeNames: ["Nalbuphin"],
    category: "Opioid-Analgetikum / Analgesie",
    indications: [
      "mittelstarke bis starke akute Schmerzen nach SOP",
      "Traumaanalgesie",
      "Frakturen, Verbrennungen oder kolikartige Schmerzen nach lokaler Freigabe"
    ],
    effect: "Opioid-Analgetikum mit κ-agonistischer und μ-antagonistischer Wirkung. Schmerzlindernd und sedierend.",
    sideEffects: [
      "Schwindel",
      "Müdigkeit",
      "Sedierung",
      "Übelkeit",
      "Erbrechen",
      "Schwitzen",
      "Blutdruckabfall",
      "Atemdepression möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "schwere Ateminsuffizienz",
      "schwere Leberinsuffizienz",
      "Vorsicht bei opioidabhängigen Patienten"
    ],
    warnings: [
      "Opioid: Atemweg, Atmung, Kreislauf und Bewusstseinslage überwachen",
      "Kann bei opioidabhängigen Patienten Entzugssymptome auslösen",
      "Kann die Wirkung anderer Opioide abschwächen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit Analgesie, Schmerztherapie, Trauma und Fraktur verknüpfen",
      "SOP- und NUN-Verknüpfung später mit regionaler Freigabe ergänzen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["nalbuphin-analgesie"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "metamizol",
    name: "Metamizol",
    tradeNames: ["Novalgin"],
    category: "Nichtopioid-Analgetikum / Analgesie",
    indications: [
      "akute Schmerzen nach SOP",
      "kolikartige Schmerzen nach lokaler Freigabe",
      "Fieber oder Schmerzen nach Fachinformation/SOP prüfen"
    ],
    effect: "Nichtopioid-Analgetikum mit analgetischer, antipyretischer und spasmolytischer Wirkung.",
    sideEffects: [
      "Hypotonie",
      "allergische Reaktionen",
      "Übelkeit",
      "Hautreaktionen",
      "Agranulozytose als seltene, schwere Nebenwirkung"
    ],
    contraindications: [
      "bekannte Metamizol-Unverträglichkeit",
      "Analgetika-Asthma oder schwere Analgetika-Intoleranz prüfen",
      "Blutbildungsstörungen prüfen",
      "Schwangerschaft/Fachinfo prüfen"
    ],
    warnings: [
      "Hypotonie-Risiko beachten, insbesondere bei schneller Gabe oder instabilem Kreislauf",
      "Agranulozytose-Hinweis sichtbar anzeigen",
      "Indikation und Applikationsweg nach SOP prüfen"
    ],
    appNotes: [
      "Unter Analgesie sichtbar machen",
      "Warnkarte für Hypotonie und Agranulozytose anzeigen",
      "Rechner erst nach geprüfter Dosierungsquelle aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["metamizol-analgesie"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "paracetamol",
    name: "Paracetamol",
    tradeNames: ["Perfalgan", "Ben-u-ron"],
    category: "Nichtopioid-Analgetikum / Analgesie / Kinder prüfen",
    indications: [
      "leichte bis mittelstarke Schmerzen nach SOP",
      "Fieber oder Schmerzen nach Fachinformation/SOP",
      "pädiatrische Anwendung nur nach geprüfter Alters- und Gewichtsfreigabe"
    ],
    effect: "Nichtopioid-Analgetikum mit analgetischer und antipyretischer Wirkung.",
    sideEffects: [
      "Übelkeit",
      "allergische Reaktionen",
      "Lebertoxizität bei Überdosierung",
      "Hautreaktionen selten möglich"
    ],
    contraindications: [
      "schwere Leberfunktionsstörung",
      "bekannte Überempfindlichkeit",
      "Überdosierungsrisiko durch Vor-/Dauermedikation prüfen"
    ],
    warnings: [
      "Keine Dosierung ohne geprüfte Alters-, Gewichts- und Maximaldosisquelle anzeigen",
      "Leberfunktion und bereits eingenommene Paracetamol-Menge prüfen",
      "Kinderprofil getrennt vorbereiten"
    ],
    appNotes: [
      "Unter Analgesie und Kinder auffindbar machen",
      "Rechnerprofile erst nach geprüfter pädiatrischer und erwachsener Dosierung aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["paracetamol-erwachsene", "paracetamol-kinder"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    tradeNames: ["Nurofen", "Ibuflam"],
    category: "NSAR / Nichtopioid-Analgetikum / Analgesie / Kinder prüfen",
    indications: [
      "leichte bis mittelstarke Schmerzen nach SOP/Fachinformation",
      "Fieber oder Schmerzen nach lokaler Freigabe",
      "pädiatrische Anwendung nur nach geprüfter Freigabe"
    ],
    effect: "Nichtsteroidales Antirheumatikum mit analgetischer, antipyretischer und antiphlogistischer Wirkung.",
    sideEffects: [
      "Magen-Darm-Beschwerden",
      "Übelkeit",
      "Blutungsrisiko",
      "Nierenfunktionsverschlechterung",
      "Bronchospasmus bei entsprechender Disposition möglich"
    ],
    contraindications: [
      "aktive Blutung oder Ulkus prüfen",
      "schwere Nierenfunktionsstörung",
      "NSAR-Unverträglichkeit",
      "fortgeschrittene Schwangerschaft/Fachinfo prüfen"
    ],
    warnings: [
      "Nierenfunktion, Blutungsrisiko und Asthma/NSAR-Intoleranz prüfen",
      "Kinderprofil getrennt vorbereiten",
      "Keine Dosierung ohne geprüfte Quelle anzeigen"
    ],
    appNotes: [
      "Unter Analgesie und Kinder auffindbar machen",
      "Rechner erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["ibuprofen-kinder", "ibuprofen-erwachsene"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "diazepam",
    name: "Diazepam",
    tradeNames: ["Valium", "Diazepam Desitin"],
    category: "Benzodiazepin / Sedierung / Antikonvulsivum / BtM-Dokumentation prüfen / Kinder prüfen",
    indications: [
      "Krampfanfall nach SOP",
      "Sedierung nach ärztlicher Anordnung/SOP",
      "pädiatrische Anwendung nur nach lokaler Freigabe"
    ],
    effect: "Benzodiazepin. Sedierend, anxiolytisch, antikonvulsiv, muskelrelaxierend und amnestisch.",
    sideEffects: [
      "Atemdepression",
      "Sedierung",
      "Hypotonie",
      "Vigilanzminderung",
      "paradoxe Reaktionen möglich",
      "Atemwegsverlegung möglich"
    ],
    contraindications: [
      "schwere Ateminsuffizienz ohne Sicherung",
      "Myasthenia gravis",
      "Bewusstseinsstörung streng prüfen",
      "Überempfindlichkeit"
    ],
    warnings: [
      "Benzodiazepin: Atemdepressionswarnung deutlich anzeigen",
      "Atemweg und Beatmungsbereitschaft sicherstellen",
      "BtM-/Dokumentationspflicht nach lokaler Regelung prüfen",
      "Kinder und Erwachsene getrennt behandeln"
    ],
    appNotes: [
      "Unter Sedierung, Krampfanfall, Kinder und BtM/Dokumentation auffindbar machen",
      "Rechner erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["diazepam-krampfanfall", "diazepam-kinder"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "lorazepam",
    name: "Lorazepam",
    tradeNames: ["Tavor"],
    category: "Benzodiazepin / Sedierung / Antikonvulsivum / BtM-Dokumentation prüfen",
    indications: [
      "Krampfanfall nach SOP/ärztlicher Anordnung",
      "Sedierung oder Anxiolyse nach lokaler Freigabe"
    ],
    effect: "Benzodiazepin. Sedierend, anxiolytisch, antikonvulsiv und muskelrelaxierend.",
    sideEffects: [
      "Atemdepression",
      "Sedierung",
      "Hypotonie",
      "Vigilanzminderung",
      "paradoxe Reaktionen möglich"
    ],
    contraindications: [
      "schwere Ateminsuffizienz ohne Sicherung",
      "Myasthenia gravis",
      "Überempfindlichkeit",
      "Indikation nach SOP/ärztlicher Freigabe prüfen"
    ],
    warnings: [
      "Benzodiazepin: Atemdepressionswarnung deutlich anzeigen",
      "Atemweg, Monitoring und Beatmungsbereitschaft beachten",
      "BtM-/Dokumentationspflicht nach lokaler Regelung prüfen",
      "Keine Dosierung ohne geprüfte Quelle anzeigen"
    ],
    appNotes: [
      "Unter Sedierung und Antikonvulsivum auffindbar machen",
      "Rechnerprofil erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["lorazepam-sedierung", "lorazepam-krampfanfall"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "propofol",
    name: "Propofol",
    tradeNames: ["Disoprivan", "Propofol"],
    category: "Hypnotikum / Sedierung / NEF ärztlich / Atemwegssicherung",
    indications: [
      "Narkoseeinleitung nach ärztlicher Anordnung/SOP",
      "Sedierung im Rahmen Atemwegssicherung nach NEF/ärztlicher Freigabe"
    ],
    effect: "Intravenöses Hypnotikum mit sedierender und narkotischer Wirkung.",
    sideEffects: [
      "Atemdepression bis Apnoe",
      "Hypotonie",
      "Bradykardie möglich",
      "Injektionsschmerz",
      "Vigilanzverlust"
    ],
    contraindications: [
      "fehlende Atemwegs- oder Beatmungsbereitschaft",
      "hämodynamische Instabilität streng prüfen",
      "Überempfindlichkeit",
      "Anwendung nur nach lokaler ärztlicher Freigabe"
    ],
    warnings: [
      "NEF/ärztlich und Atemwegssicherung deutlich markieren",
      "Atemweg, Beatmung, Kreislauf und Monitoring müssen vorbereitet sein",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Sedierung, Atemweg und NEF/ärztlich auffindbar machen",
      "Rechnerprofil erst nach geprüfter ärztlicher Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["propofol-narkoseeinleitung", "propofol-sedierung-atemweg"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "granisetron",
    name: "Granisetron",
    tradeNames: ["Kevatril"],
    category: "Antiemetikum / Antiemese",
    indications: [
      "Übelkeit und Erbrechen nach SOP/ärztlicher Freigabe",
      "Antiemese bei geeigneter Indikation nach Fachinformation prüfen"
    ],
    effect: "5-HT3-Rezeptorantagonist mit antiemetischer Wirkung.",
    sideEffects: [
      "Kopfschmerz",
      "Obstipation",
      "Schwindel",
      "QT-Veränderungen möglich",
      "Überempfindlichkeitsreaktionen selten möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "QT-Problematik und Interaktionen prüfen",
      "Indikation nach SOP/Fachinformation prüfen"
    ],
    warnings: [
      "EKG/QT-Risiken und Begleitmedikation prüfen",
      "Keine Dosierung ohne geprüfte Quelle anzeigen"
    ],
    appNotes: [
      "Unter Antiemese auffindbar machen",
      "Rechner nur nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["granisetron-antiemese"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "dimenhydrinat",
    name: "Dimenhydrinat",
    tradeNames: ["Vomex A"],
    category: "Antiemetikum / Antihistaminikum / Antiemese / Kinder prüfen",
    indications: [
      "Übelkeit und Erbrechen nach SOP/Fachinformation",
      "Kinetose oder vestibuläre Übelkeit nach lokaler Freigabe",
      "pädiatrische Anwendung nur nach geprüfter Altersfreigabe"
    ],
    effect: "H1-Antihistaminikum mit antiemetischer und sedierender Wirkung.",
    sideEffects: [
      "Müdigkeit",
      "Sedierung",
      "Mundtrockenheit",
      "Schwindel",
      "anticholinerge Effekte",
      "paradoxe Erregung möglich"
    ],
    contraindications: [
      "Überempfindlichkeit",
      "Engwinkelglaukom prüfen",
      "Prostatahyperplasie/Harnverhalt prüfen",
      "Krampfneigung und pädiatrische Besonderheiten prüfen"
    ],
    warnings: [
      "Sedierende Wirkung und Verkehrstüchtigkeit/Überwachung beachten",
      "Kinderprofil getrennt vorbereiten",
      "Keine Dosierung ohne geprüfte Quelle anzeigen"
    ],
    appNotes: [
      "Unter Antiemese und Kinder auffindbar machen",
      "Rechner erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["dimenhydrinat-antiemese", "dimenhydrinat-kinder"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "salbutamol",
    name: "Salbutamol",
    tradeNames: ["Salbutamol", "Sultanol"],
    category: "Atemweg / Bronchodilatation / Asthma / COPD",
    indications: [
      "obstruktive Atemnot nach SOP",
      "Asthma bronchiale nach lokaler Freigabe",
      "COPD-Exazerbation nach SOP"
    ],
    effect: "Kurz wirksames Beta-2-Sympathomimetikum mit bronchodilatatorischer Wirkung.",
    sideEffects: [
      "Tachykardie",
      "Tremor",
      "Unruhe",
      "Palpitationen",
      "Hypokaliämie möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "tachykarde Rhythmusstörungen streng prüfen",
      "Indikation nach SOP/Fachinformation prüfen"
    ],
    warnings: [
      "Herzfrequenz, SpO₂ und Atemarbeit überwachen",
      "Bei schwerer Atemnot frühzeitig Eskalation und SOP beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V10 Obstruktive Atemnot verknüpfen",
      "Mit NUN Obstruktive Atemnot verknüpfen",
      "Unter Atemweg, Asthma und COPD auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["salbutamol-obstruktive-atemnot"],
    sopLinks: ["SOP V10 Obstruktive Atemnot"],
    nunLinks: ["NUN Obstruktive Atemnot"],
    source: "SOP V10 / NUN Obstruktive Atemnot / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "ipratropiumbromid",
    name: "Ipratropiumbromid",
    tradeNames: ["Atrovent"],
    category: "Atemweg / Bronchodilatation / Asthma / COPD",
    indications: [
      "obstruktive Atemnot nach SOP",
      "COPD-Exazerbation nach lokaler Freigabe",
      "schwere bronchospastische Beschwerden nach SOP"
    ],
    effect: "Anticholinergikum mit bronchodilatatorischer Wirkung durch Hemmung muskarinerger Rezeptoren.",
    sideEffects: [
      "Mundtrockenheit",
      "Hustenreiz",
      "Tachykardie möglich",
      "Kopfschmerz",
      "Augenreizungen bei Fehlapplikation möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "Engwinkelglaukom-Risiko beachten",
      "Prostatahyperplasie/Harnverhalt prüfen"
    ],
    warnings: [
      "Vernebelung nicht in die Augen gelangen lassen",
      "Atemarbeit, SpO₂ und klinischen Verlauf überwachen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V10 verknüpfen",
      "Mit NUN Obstruktive Atemnot verknüpfen",
      "Unter Atemweg, Asthma und COPD auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["ipratropium-obstruktive-atemnot"],
    sopLinks: ["SOP V10 Obstruktive Atemnot"],
    nunLinks: ["NUN Obstruktive Atemnot"],
    source: "SOP V10 / NUN Obstruktive Atemnot / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "reproterol",
    name: "Reproterol",
    tradeNames: ["Bronchospasmin"],
    category: "Atemweg / Bronchodilatation / Schweres Asthma / NEF ärztlich prüfen",
    indications: [
      "schweres Asthma nach SOP/ärztlicher Freigabe",
      "schwere bronchospastische Zustände nach lokaler Freigabe"
    ],
    effect: "Beta-2-Sympathomimetikum mit bronchodilatatorischer Wirkung.",
    sideEffects: [
      "Tachykardie",
      "Tremor",
      "Unruhe",
      "Palpitationen",
      "Rhythmusstörungen möglich",
      "Hypokaliämie möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "tachykarde Rhythmusstörungen streng prüfen",
      "Anwendung nach SOP/ärztlicher Freigabe prüfen"
    ],
    warnings: [
      "Atemweg, SpO₂, Herzfrequenz und Kreislauf eng überwachen",
      "Schweres Asthma als Hochrisikosituation behandeln",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Atemweg und Schweres Asthma auffindbar machen",
      "NEF/ärztliche Freigabe lokal prüfen",
      "Rechnerprofil erst nach geprüfter Dosierungsfreigabe aktivieren"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["reproterol-schweres-asthma"],
    sopLinks: ["Atemweg / Schweres Asthma nach lokaler SOP prüfen"],
    nunLinks: ["NUN Obstruktive Atemnot prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "prednisolon",
    name: "Prednisolon",
    tradeNames: ["Prednisolon", "Solu-Decortin"],
    category: "Glukokortikoid / Atemweg / Allergie / Anaphylaxie / Asthma / COPD",
    indications: [
      "allergischer Schock nach SOP",
      "Anaphylaxie nach lokaler Freigabe",
      "Asthma oder COPD-Exazerbation nach SOP"
    ],
    effect: "Glukokortikoid mit antientzündlicher und antiallergischer Wirkung.",
    sideEffects: [
      "Blutzuckeranstieg",
      "Blutdruckanstieg möglich",
      "Unruhe",
      "Übelkeit",
      "Immunsuppression bei wiederholter Anwendung"
    ],
    contraindications: [
      "im vitalen Notfall meist keine absolute Kontraindikation",
      "Überempfindlichkeit prüfen",
      "Diabetes und Infektionslage im Verlauf beachten"
    ],
    warnings: [
      "Wirkeintritt nicht mit Sofortwirkung von Adrenalin oder Bronchodilatatoren verwechseln",
      "Indikation Allergie, Asthma oder COPD klar dokumentieren",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit Allergischer Schock, Asthma und COPD verknüpfen",
      "Unter Atemweg, Allergie und Anaphylaxie auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["prednisolon-allergie-asthma-copd"],
    sopLinks: ["SOP V4 Allergischer Schock", "SOP V10 Obstruktive Atemnot prüfen"],
    nunLinks: ["NUN Allergischer Schock prüfen", "NUN Obstruktive Atemnot prüfen"],
    source: "SOP Allergischer Schock / SOP V10 / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "clemastin",
    name: "Clemastin",
    tradeNames: ["Tavegil"],
    category: "Antihistaminikum / Allergie / Anaphylaxie",
    indications: [
      "allergischer Schock nach SOP",
      "Anaphylaxie nach lokaler Freigabe",
      "allergische Reaktion nach SOP/Fachinformation"
    ],
    effect: "H1-Antihistaminikum mit antiallergischer Wirkung.",
    sideEffects: [
      "Müdigkeit",
      "Sedierung",
      "Mundtrockenheit",
      "Schwindel",
      "Tachykardie möglich",
      "anticholinerge Effekte möglich"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit",
      "Engwinkelglaukom prüfen",
      "Prostatahyperplasie/Harnverhalt prüfen",
      "Säuglinge/Kinder nur nach geprüfter Fachinformation/SOP"
    ],
    warnings: [
      "Sedierende Wirkung beachten",
      "Bei Anaphylaxie nicht als Ersatz für prioritäre SOP-Maßnahmen verstehen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit Allergischer Schock und Anaphylaxie verknüpfen",
      "Unter Allergie und Anaphylaxie auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["clemastin-allergie-anaphylaxie"],
    sopLinks: ["SOP V4 Allergischer Schock"],
    nunLinks: ["NUN Allergischer Schock / Anaphylaxie prüfen"],
    source: "SOP Allergischer Schock / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "ass",
    name: "ASS",
    tradeNames: ["Aspirin", "Acetylsalicylsäure"],
    category: "Thrombozytenaggregationshemmer / Kardiologie / ACS",
    indications: [
      "ACS / Brustschmerz nach SOP",
      "akuter Thoraxschmerz nach NUN/SOP-Konzept",
      "kardiologischer Notfall nach lokaler Freigabe"
    ],
    effect: "Hemmt die Thrombozytenaggregation und wirkt damit gerinnungshemmend auf die Plättchenfunktion.",
    sideEffects: [
      "Blutungen",
      "Magen-Darm-Beschwerden",
      "Übelkeit",
      "allergische Reaktionen",
      "Bronchospasmus bei entsprechender Disposition möglich"
    ],
    contraindications: [
      "aktive Blutung",
      "bekannte ASS-/NSAR-Unverträglichkeit",
      "schwere Gerinnungsstörung prüfen",
      "Ulkus- oder Blutungsanamnese prüfen"
    ],
    warnings: [
      "Blutungsrisiko deutlich anzeigen",
      "Allergie, aktive Blutung und Vormedikation prüfen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V5 ACS / Brustschmerz verknüpfen",
      "Mit NUN akuter Thoraxschmerz verknüpfen",
      "Unter Kardiologie und ACS auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["ass-acs"],
    sopLinks: ["SOP V5 ACS / Brustschmerz"],
    nunLinks: ["NUN akuter Thoraxschmerz"],
    source: "SOP V5 ACS / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "heparin",
    name: "Heparin",
    tradeNames: ["Heparin"],
    category: "Antikoagulans / Kardiologie / ACS / NEF ärztlich prüfen",
    indications: [
      "ACS / Brustschmerz nach SOP/ärztlicher Vorgabe",
      "akuter Thoraxschmerz nach NUN/SOP-Konzept",
      "Antikoagulation nach lokaler Freigabe"
    ],
    effect: "Antikoagulans. Hemmt die Blutgerinnung über Antithrombin-vermittelte Mechanismen.",
    sideEffects: [
      "Blutungen",
      "Hämatome",
      "Thrombozytopenie möglich",
      "allergische Reaktionen möglich"
    ],
    contraindications: [
      "aktive Blutung",
      "schwere Gerinnungsstörung",
      "HIT-Anamnese prüfen",
      "frische Operation oder Trauma streng prüfen"
    ],
    warnings: [
      "Blutungsrisiko deutlich anzeigen",
      "Antikoagulation, Trauma, Operationen und Kontraindikationen prüfen",
      "NEF/ärztliche Vorgabe lokal beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V5 ACS / Brustschmerz verknüpfen",
      "Mit NUN akuter Thoraxschmerz verknüpfen",
      "Unter Kardiologie, ACS und NEF/ärztlich auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["heparin-acs"],
    sopLinks: ["SOP V5 ACS / Brustschmerz"],
    nunLinks: ["NUN akuter Thoraxschmerz"],
    source: "SOP V5 ACS / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "glyceroltrinitrat",
    name: "Glyceroltrinitrat / Nitroglycerin",
    tradeNames: ["Nitrolingual", "Nitroglycerin", "Glyceroltrinitrat"],
    category: "Nitrat / Kardiologie / ACS / Kardiales Lungenödem",
    indications: [
      "ACS / Brustschmerz nach SOP",
      "kardiales Lungenödem nach SOP",
      "akuter Thoraxschmerz nach NUN"
    ],
    effect: "Vasodilatator mit venöser und arterieller Gefäßerweiterung. Kann Vorlast und Blutdruck senken.",
    sideEffects: [
      "Hypotonie",
      "Kopfschmerz",
      "Schwindel",
      "Flush",
      "reflektorische Tachykardie möglich"
    ],
    contraindications: [
      "Hypotonie",
      "PDE-5-Hemmer-Einnahme prüfen",
      "rechtsventrikulärer Infarkt prüfen",
      "schwere Aortenstenose oder relevante hämodynamische Instabilität prüfen"
    ],
    warnings: [
      "Hypotonie-Warnung deutlich anzeigen",
      "PDE-5-Hemmer-Warnung deutlich anzeigen",
      "Blutdruck vor und nach Anwendung eng überwachen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V5 ACS / Brustschmerz verknüpfen",
      "Mit SOP V7 Kardiales Lungenödem verknüpfen",
      "Mit NUN akuter Thoraxschmerz und NUN kardiales Lungenödem verknüpfen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["nitroglycerin-acs", "nitroglycerin-lungenoedem"],
    sopLinks: ["SOP V5 ACS / Brustschmerz", "SOP V7 Kardiales Lungenödem"],
    nunLinks: ["NUN akuter Thoraxschmerz", "NUN kardiales Lungenödem"],
    source: "SOP V5 / SOP V7 / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "metoprolol",
    name: "Metoprolol",
    tradeNames: ["Beloc", "Metoprolol"],
    category: "Betablocker / Kardiologie / Rhythmusstörung / NEF ärztlich prüfen",
    indications: [
      "Tachykardie nach SOP/ärztlicher Vorgabe",
      "ACS-Kontext nach SOP/ärztlicher Vorgabe",
      "kardiologische Indikation nach lokaler Freigabe"
    ],
    effect: "Selektiver Beta-1-Blocker. Senkt Herzfrequenz, Kontraktilität und myokardialen Sauerstoffbedarf.",
    sideEffects: [
      "Bradykardie",
      "Hypotonie",
      "AV-Block",
      "Bronchospasmus möglich",
      "Schwindel",
      "Verschlechterung einer Herzinsuffizienz möglich"
    ],
    contraindications: [
      "Bradykardie",
      "höhergradiger AV-Block",
      "dekompensierte Herzinsuffizienz",
      "schwerer Bronchospasmus oder schweres Asthma prüfen",
      "Hypotonie"
    ],
    warnings: [
      "Bradykardie-/AV-Block-Warnung deutlich anzeigen",
      "Bronchospasmus-Warnung deutlich anzeigen",
      "EKG, Blutdruck und klinischen Verlauf überwachen",
      "NEF/ärztliche Vorgabe beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Kardiologie, Rhythmusstörung, Tachykardie und NEF/ärztlich auffindbar machen",
      "ACS-Kontext nur nach SOP/ärztlicher Vorgabe anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["metoprolol-tachykardie", "metoprolol-acs-kontext"],
    sopLinks: ["Kardiologie / Tachykardie / ACS-Kontext nach SOP prüfen"],
    nunLinks: ["NUN Kardiologie / Rhythmusstörung prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "cafedrin-theodrenalin",
    name: "Cafedrin/Theodrenalin",
    tradeNames: ["Akrinor"],
    category: "Kreislauf / Vasopressor / Hypotonie / NEF ärztlich",
    indications: [
      "Hypotonie nach ärztlicher Vorgabe",
      "Kreislaufunterstützung nach NEF/ärztlicher Freigabe",
      "periinterventionelle Kreislaufinstabilität nach lokaler Regelung"
    ],
    effect: "Kreislaufwirksame Kombination mit blutdrucksteigernder Wirkung.",
    sideEffects: [
      "Tachykardie",
      "Hypertonie",
      "Herzrhythmusstörungen möglich",
      "Unruhe",
      "Myokardbelastung möglich"
    ],
    contraindications: [
      "unklare oder unbehandelte Ursache der Hypotonie streng prüfen",
      "tachykarde Rhythmusstörungen prüfen",
      "schwere Hypertonie prüfen",
      "Anwendung nur nach lokaler ärztlicher Freigabe"
    ],
    warnings: [
      "NEF/ärztlich deutlich markieren",
      "Kreislaufursache, Volumenstatus und Monitoring beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Kreislauf, Hypotonie und NEF/ärztlich auffindbar machen",
      "Nicht als einfacher Standard-Bolus ohne Freigabe darstellen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["cafedrin-theodrenalin-hypotonie"],
    sopLinks: ["Kreislauf / Hypotonie nach lokaler SOP prüfen"],
    nunLinks: ["NUN Kreislauf / Hypotonie prüfen"],
    source: "NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "furosemid",
    name: "Furosemid",
    tradeNames: ["Lasix", "Furosemid"],
    category: "Diuretikum / Kardiologie / Kardiales Lungenödem",
    indications: [
      "kardiales Lungenödem nach SOP",
      "Volumenüberladung nach ärztlicher Vorgabe/SOP",
      "kardiologische Indikation nach lokaler Freigabe"
    ],
    effect: "Schleifendiuretikum mit diuretischer Wirkung. Fördert Natrium- und Wasserausscheidung.",
    sideEffects: [
      "Hypotonie",
      "Elektrolytstörungen",
      "Exsikkose",
      "Nierenfunktionsverschlechterung möglich",
      "Schwindel"
    ],
    contraindications: [
      "Hypovolämie oder Exsikkose",
      "schwere Elektrolytstörung prüfen",
      "Anurie oder schwere Nierenfunktionsstörung prüfen",
      "Überempfindlichkeit"
    ],
    warnings: [
      "Blutdruck, Volumenstatus und Nierenfunktion beachten",
      "Beim kardialen Lungenödem SOP-Prioritäten beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V7 Kardiales Lungenödem verknüpfen",
      "Mit NUN kardiales Lungenödem verknüpfen",
      "Unter Kardiologie und Lungenödem auffindbar machen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["furosemid-lungenoedem"],
    sopLinks: ["SOP V7 Kardiales Lungenödem"],
    nunLinks: ["NUN kardiales Lungenödem"],
    source: "SOP V7 / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "glukose-20",
    name: "Glukose 20 %",
    tradeNames: ["Glukose 20 %", "Glucose 20 %"],
    category: "Glukose / Hypoglykämie / Stoffwechsel",
    indications: [
      "Hypoglykämie nach SOP",
      "niedriger Blutzucker mit passender Klinik",
      "BZ-Kontext muss vor Anwendung geprüft und dokumentiert sein"
    ],
    effect: "Kohlenhydratlösung zur Anhebung des Blutzuckers bei Hypoglykämie.",
    sideEffects: [
      "Hyperglykämie",
      "Venenreizung",
      "Extravasationsschäden möglich",
      "Übelkeit möglich"
    ],
    contraindications: [
      "fehlender Hypoglykämie-/BZ-Kontext",
      "unklare Bewusstseinsstörung ohne BZ-Prüfung",
      "Anwendung nach SOP/Fachinformation prüfen"
    ],
    warnings: [
      "Glukose nur mit BZ-Kontext anzeigen und anwenden",
      "Blutzucker messen, Verlauf kontrollieren und dokumentieren",
      "Extravasation vermeiden und Zugang kontrollieren",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit SOP V11 Hypoglykämie verknüpfen",
      "Mit NUN Hypoglykämie verknüpfen",
      "Unter Hypoglykämie und Stoffwechsel auffindbar machen"
    ],
    calculatorEnabled: true,
    calculatorProfiles: ["glukose20-hypoglykaemie"],
    sopLinks: ["SOP V11 Hypoglykämie"],
    nunLinks: ["NUN Hypoglykämie"],
    source: "SOP V11 Hypoglykämie / Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "naloxon",
    name: "Naloxon",
    tradeNames: ["Naloxon", "Narcanti"],
    category: "Antidot / Toxikologie / Opioidintoxikation",
    indications: [
      "Verdacht auf Opioidintoxikation nach SOP/ärztlicher Freigabe",
      "Atemdepression im Opioid-Kontext",
      "Intoxikation mit Opioiden nach klinischer Prüfung"
    ],
    effect: "Opioidantagonist. Kann die Wirkung von Opioiden an Opioidrezeptoren aufheben.",
    sideEffects: [
      "Entzugssymptome",
      "Unruhe",
      "Übelkeit",
      "Erbrechen",
      "Tachykardie",
      "Blutdruckanstieg möglich"
    ],
    contraindications: [
      "im vitalen Notfall meist keine absolute Kontraindikation",
      "Indikation und Opioid-Kontext prüfen",
      "Überempfindlichkeit prüfen"
    ],
    warnings: [
      "Entzugssymptomatik deutlich hervorheben",
      "Rebound beachten: Wirkdauer des Opioids kann länger als die Antidotwirkung sein",
      "Atemweg, Atmung und Monitoring weiter eng überwachen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Mit Antidotliste, Intoxikation und Giftnotruf & Toxikologie verknüpfen",
      "Bei unklarem Verlauf toxikologische Rücksprache vorbereiten"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["naloxon-opioidintoxikation"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung bei Intoxikation"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "flumazenil",
    name: "Flumazenil",
    tradeNames: ["Anexate", "Flumazenil"],
    category: "Antidot / Toxikologie / Benzodiazepinintoxikation / NEF ärztlich prüfen",
    indications: [
      "Benzodiazepinwirkung oder -intoxikation nach ärztlicher Vorgabe",
      "diagnostische oder therapeutische Antagonisierung nach lokaler Freigabe"
    ],
    effect: "Benzodiazepinantagonist. Kann Benzodiazepinwirkungen am GABA-A-Rezeptor antagonisieren.",
    sideEffects: [
      "Krampfanfall",
      "Unruhe",
      "Angst",
      "Übelkeit",
      "Erbrechen",
      "Entzugssymptome möglich"
    ],
    contraindications: [
      "Krampfanamnese oder Mischintoxikation streng prüfen",
      "Benzodiazepinabhängigkeit prüfen",
      "trizyklische Antidepressiva oder prokonvulsive Mischintoxikation prüfen",
      "Anwendung nur nach SOP/ärztlicher Freigabe"
    ],
    warnings: [
      "Krampfanfallsrisiko deutlich hervorheben",
      "Mischintoxikation und Benzodiazepinabhängigkeit kritisch prüfen",
      "NEF/ärztlich und toxikologische Rücksprache markieren",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Antidot, Intoxikation, Toxikologie und NEF/ärztlich auffindbar machen",
      "Warnkarte Krampfanfall priorisiert anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["flumazenil-benzodiazepinintoxikation"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung bei Benzodiazepin- oder Mischintoxikation"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "biperiden",
    name: "Biperiden",
    tradeNames: ["Akineton"],
    category: "Antidot / Toxikologie / Anticholinergikum",
    indications: [
      "extrapyramidale Symptome nach Medikamentengabe nach SOP/ärztlicher Freigabe",
      "akute Dystonie nach lokaler Freigabe",
      "toxikologischer Kontext nach Rücksprache prüfen"
    ],
    effect: "Zentral wirksames Anticholinergikum. Kann extrapyramidale Symptome lindern.",
    sideEffects: [
      "Mundtrockenheit",
      "Tachykardie",
      "Mydriasis",
      "Harnverhalt",
      "Verwirrtheit",
      "Unruhe"
    ],
    contraindications: [
      "Engwinkelglaukom",
      "Harnverhalt oder Prostatahyperplasie prüfen",
      "tachykarde Rhythmusstörungen prüfen",
      "anticholinerges Toxidrom streng prüfen"
    ],
    warnings: [
      "Anticholinerge Nebenwirkungen und Toxidrom-Abgrenzung beachten",
      "Indikation und Ursache der Symptome prüfen",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Antidot, Intoxikation und Toxikologie auffindbar machen",
      "Giftnotruf-Rücksprache bei unklarer Intoxikation vorbereiten"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["biperiden-extrapyramidale-symptome"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung bei unklarer Intoxikation"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "calciumgluconat",
    name: "Calciumgluconat",
    tradeNames: ["Calciumgluconat"],
    category: "Antidot / Toxikologie / Elektrolyt / NEF ärztlich prüfen",
    indications: [
      "toxikologischer oder elektrolytischer Sonderfall nach SOP/ärztlicher Vorgabe",
      "Flusssäure-Exposition nach toxikologischer Rücksprache prüfen",
      "Kalziumkanalblocker-Intoxikation nach toxikologischer/ärztlicher Vorgabe prüfen"
    ],
    effect: "Calciumsalz zur Substitution oder spezifischen Therapie in ausgewählten toxikologischen/elektrolytischen Situationen.",
    sideEffects: [
      "Bradykardie möglich",
      "Rhythmusstörungen möglich",
      "Venenreizung",
      "Gewebeschäden bei Fehlapplikation möglich",
      "Hyperkalzämie möglich"
    ],
    contraindications: [
      "Hyperkalzämie prüfen",
      "Digitalistherapie oder Rhythmusstörungen streng prüfen",
      "Indikation nur nach SOP/ärztlicher/toxikologischer Freigabe"
    ],
    warnings: [
      "EKG- und Kreislaufmonitoring beachten",
      "Toxikologische Rücksprache bei Sonderindikationen vorbereiten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Antidot, Toxikologie und NEF/ärztlich auffindbar machen",
      "Verknüpfung zur Antidotliste und Giftnotruf vorbereiten"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["calciumgluconat-toxikologie"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung bei Sonderindikationen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "4-dmap",
    name: "4-DMAP",
    tradeNames: ["4-DMAP"],
    category: "Antidot / Toxikologie / Cyanidintoxikation / NEF ärztlich",
    indications: [
      "Verdacht auf Cyanidintoxikation nach toxikologischer/ärztlicher Rücksprache",
      "Sonderantidot nach lokaler Antidotliste und Freigabe"
    ],
    effect: "Methämoglobinbildner zur Bindung von Cyanid in ausgewählten Vergiftungssituationen.",
    sideEffects: [
      "Methämoglobinämie",
      "Hypoxieverschlechterung möglich",
      "Hypotonie möglich",
      "Übelkeit",
      "Kopfschmerz"
    ],
    contraindications: [
      "fehlende toxikologische Indikation",
      "unklare Rauchgasexposition ohne Freigabe streng prüfen",
      "schwere Hypoxie oder relevante Anämie prüfen",
      "Anwendung nur nach toxikologischer/ärztlicher Rücksprache"
    ],
    warnings: [
      "Anwendung nur nach toxikologischer Rücksprache markieren",
      "NEF/ärztlich deutlich kennzeichnen",
      "Methämoglobinbildung und Sauerstofftransport beachten",
      "Keine Dosierung ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Antidot, Toxikologie, Intoxikation und Giftnotruf auffindbar machen",
      "Warnhinweis vor Anwendung priorisiert anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["4-dmap-cyanidintoxikation"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Rücksprache vor Anwendung"],
    source: "Antidotliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "medizinische-kohle",
    name: "Medizinische Kohle",
    tradeNames: ["Aktivkohle", "Medizinische Kohle"],
    category: "Antidot / Toxikologie / Dekontamination / Intoxikation",
    indications: [
      "ausgewählte orale Intoxikationen nach toxikologischer Rücksprache",
      "Dekontamination nach Antidotliste/Fachinformation prüfen",
      "nur bei geeigneter Substanz, Zeitfenster und sicherem Atemweg"
    ],
    effect: "Adsorbens. Kann bestimmte oral aufgenommene Substanzen im Gastrointestinaltrakt binden.",
    sideEffects: [
      "Erbrechen",
      "Obstipation",
      "Aspiration",
      "schwarzer Stuhl",
      "Atemwegsverlegung bei Aspiration möglich"
    ],
    contraindications: [
      "nicht geschützter Atemweg bei Aspirationsrisiko",
      "Bewusstseinsstörung ohne Schutzreflexe",
      "nicht adsorbierbare Substanzen oder ungeeignete Intoxikation prüfen",
      "ätzende Substanzen oder Ileus-Verdacht prüfen"
    ],
    warnings: [
      "Aspirationsrisiko deutlich hervorheben",
      "Nur bei passender Substanz, Zeitfenster und sicherem Atemweg",
      "Giftnotruf-Rücksprache vor Anwendung vorbereiten",
      "Keine Dosierung ohne geprüfte Fachinformation/Giftnotruf-Empfehlung anzeigen"
    ],
    appNotes: [
      "Unter Antidot, Intoxikation, Toxikologie und Häufige Vergiftungen auffindbar machen",
      "Atemwegssicherheit vor Gabe als Warnhinweis anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["medizinische-kohle-intoxikation"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung vor Anwendung"],
    source: "Antidotliste/Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "dimeticon",
    name: "Dimeticon",
    tradeNames: ["Sab Simplex", "Dimeticon"],
    category: "Toxikologie / Entschäumer / Intoxikation",
    indications: [
      "Schaumbildner- oder Tensidaufnahme nach toxikologischer Rücksprache",
      "Vergiftungsverdacht mit schäumenden Substanzen nach Giftnotruf-Empfehlung"
    ],
    effect: "Entschäumer. Kann Schaumbildung im Gastrointestinaltrakt reduzieren.",
    sideEffects: [
      "Übelkeit möglich",
      "Erbrechen möglich",
      "selten Überempfindlichkeit"
    ],
    contraindications: [
      "fehlende toxikologische Indikation",
      "unklare Substanz ohne Rücksprache",
      "Aspirationsrisiko und Bewusstseinslage prüfen"
    ],
    warnings: [
      "Nur nach passender Substanz- und Giftnotruf-Empfehlung verwenden",
      "Atemweg und Aspirationsrisiko beachten",
      "Keine Dosierung ohne geprüfte Fachinformation/Giftnotruf-Empfehlung anzeigen"
    ],
    appNotes: [
      "Unter Toxikologie, Intoxikation und Häufige Vergiftungen auffindbar machen",
      "Giftnotruf-Verknüpfung sichtbar anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["dimeticon-schaumbildner"],
    poisonCenterLinks: ["Giftnotruf / toxikologische Beratung bei Schaumbildnern"],
    source: "Fachinfo/Giftnotruf prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "nacl-0-9",
    name: "NaCl 0,9 %",
    tradeNames: ["Natriumchlorid 0,9 %", "NaCl 0,9 %"],
    category: "Infusionen & Trägerlösungen / Elektrolyte / Medikamententräger",
    indications: [
      "Medikamententräger nach Fachinformation/SOP",
      "Spül- oder Verdünnungslösung nach lokaler Vorgabe",
      "Volumentherapie nur nach Indikation und lokaler Freigabe prüfen"
    ],
    effect: "Isotone Natriumchlorid-Lösung. Dient häufig als Träger-, Spül- oder Verdünnungslösung.",
    sideEffects: [
      "Volumenbelastung möglich",
      "Elektrolytverschiebungen bei relevanter Menge möglich",
      "lokale Reizung oder Paravasat möglich"
    ],
    contraindications: [
      "unklare oder fehlende Indikation",
      "relevante Volumenüberlastung prüfen",
      "Elektrolyt- und Flüssigkeitsstatus beachten"
    ],
    warnings: [
      "Medikamententräger deutlich markieren",
      "Nicht automatisch als Volumentherapie interpretieren",
      "Keine Mengen- oder Laufratenangaben ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Infusionen, Trägerlösung und Elektrolyte auffindbar machen",
      "Als Standard-Trägerlösung kennzeichnen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["nacl-traegerloesung"],
    sopLinks: ["Trägerlösung / Volumentherapie nach lokaler SOP prüfen"],
    nunLinks: ["NUN Volumentherapie / Medikamentengabe prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "vollelektrolytloesung",
    name: "Vollelektrolytlösung",
    tradeNames: ["Jonosteril", "Sterofundin", "Ringerfundin"],
    category: "Infusionen & Trägerlösungen / Volumentherapie / Elektrolyte / balancierte Lösung",
    indications: [
      "Volumentherapie nach SOP",
      "Schock oder Flüssigkeitsdefizit nach klinischer Prüfung",
      "Trägerlösung nach lokaler Vorgabe prüfen"
    ],
    effect: "Balancierte kristalloide Elektrolytlösung zur Volumen- und Flüssigkeitstherapie.",
    sideEffects: [
      "Volumenüberlastung",
      "Ödembildung möglich",
      "Elektrolytverschiebungen möglich",
      "Verdünnungseffekte bei relevanter Menge möglich"
    ],
    contraindications: [
      "relevante Volumenüberlastung",
      "dekompensierte Herzinsuffizienz prüfen",
      "schwere Nierenfunktionsstörung oder Elektrolytstörung prüfen"
    ],
    warnings: [
      "Balancierte Lösung deutlich kennzeichnen",
      "Volumenstatus, Kreislauf und Lungenödemzeichen überwachen",
      "Keine Mengen- oder Laufratenangaben ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Infusionen, Volumentherapie, Elektrolyte und Schock auffindbar machen",
      "Mit Volumentherapie-Pfaden später verknüpfen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["vollelektrolytloesung-volumentherapie"],
    sopLinks: ["Volumentherapie / Schock nach lokaler SOP prüfen"],
    nunLinks: ["NUN Kreislauf / Volumentherapie prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "glukose-5",
    name: "Glukose 5 %",
    tradeNames: ["Glukose 5 %", "Glucose 5 %"],
    category: "Infusionen & Trägerlösungen / Glukose / Trägerlösung",
    indications: [
      "Trägerlösung nach Fachinformation/SOP",
      "Verdünnungslösung nach lokaler Vorgabe",
      "nicht mit Glukose 20 % zur Hypoglykämietherapie verwechseln"
    ],
    effect: "Glukosehaltige Lösung, häufig als Träger- oder Verdünnungslösung verwendet.",
    sideEffects: [
      "Hyperglykämie möglich",
      "Volumenbelastung möglich",
      "Venenreizung oder Paravasat möglich"
    ],
    contraindications: [
      "fehlende Indikation als Träger- oder Verdünnungslösung",
      "relevante Hyperglykämie prüfen",
      "Flüssigkeitsstatus beachten"
    ],
    warnings: [
      "Deutlich von Glukose 20 % unterscheiden",
      "Nicht als gleichwertige Hypoglykämie-Therapie darstellen",
      "Keine Mengen- oder Laufratenangaben ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Infusionen und Trägerlösung auffindbar machen",
      "Verwechslungswarnung zu Glukose 20 % anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["glukose-5-traegerloesung"],
    sopLinks: ["Trägerlösung nach lokaler SOP prüfen"],
    nunLinks: ["NUN Medikamentengabe / Trägerlösung prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "gelafundin-4",
    name: "Gelafundin 4 %",
    tradeNames: ["Gelafundin 4 %"],
    category: "Infusionen & Trägerlösungen / Volumentherapie / Kolloid / Schock",
    indications: [
      "Volumentherapie nach SOP/ärztlicher Vorgabe",
      "Schockzustand nach lokaler Freigabe prüfen",
      "Kolloidale Volumenexpansion nur nach geprüfter Indikation"
    ],
    effect: "Kolloidale Infusionslösung zur Volumenexpansion.",
    sideEffects: [
      "Anaphylaxie",
      "allergische Reaktionen",
      "Volumenüberlastung",
      "Gerinnungseinfluss möglich",
      "Nierenfunktionsprobleme prüfen"
    ],
    contraindications: [
      "bekannte Überempfindlichkeit gegen Gelatinepräparate",
      "Volumenüberlastung",
      "schwere Gerinnungsstörung prüfen",
      "schwere Nierenfunktionsstörung prüfen"
    ],
    warnings: [
      "Anaphylaxie-Warnung deutlich anzeigen",
      "Volumenwarnung und enges Kreislaufmonitoring beachten",
      "Anwendung nach lokaler SOP/ärztlicher Vorgabe prüfen",
      "Keine Mengen- oder Laufratenangaben ohne geprüfte SOP/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Infusionen, Volumentherapie und Schock auffindbar machen",
      "Warnkarte für Anaphylaxie und Volumenüberlastung anzeigen"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["gelafundin-volumentherapie"],
    sopLinks: ["Volumentherapie / Schock nach lokaler SOP prüfen"],
    nunLinks: ["NUN Kreislauf / Schock prüfen"],
    source: "SOP/NEF-Medikamentenliste/Fachinfo prüfen",
    lastUpdated: "2026-06-16"
  },
  {
    id: "wasser-injektionszwecke",
    name: "Wasser für Injektionszwecke",
    tradeNames: ["Aqua ad iniectabilia", "Wasser für Injektionszwecke"],
    category: "Infusionen & Trägerlösungen / Lösungsmittel / Trägerlösung",
    indications: [
      "Lösungsmittel zur Herstellung oder Verdünnung von Arzneimitteln nach Fachinformation",
      "nicht zur alleinigen Infusion verwenden",
      "Anwendung nur entsprechend Arzneimittel- und Fachinformation"
    ],
    effect: "Steriles Wasser als Lösungsmittel zur Rekonstitution oder Verdünnung geeigneter Arzneimittel.",
    sideEffects: [
      "Hämolysegefahr bei ungeeigneter direkter Anwendung",
      "lokale Reizung möglich",
      "Fehlanwendung kann schwere Komplikationen verursachen"
    ],
    contraindications: [
      "alleinige intravenöse Infusion",
      "Anwendung ohne geeignete Arzneimittel- oder Fachinformation",
      "unklare Verdünnungsvorgaben"
    ],
    warnings: [
      "Nur als Lösungsmittel kennzeichnen",
      "Nicht als Infusions- oder Volumentherapie darstellen",
      "Fachinformation des zu lösenden Medikaments prüfen",
      "Keine Mengenangaben ohne geprüfte Herstellungs-/Fachinformation anzeigen"
    ],
    appNotes: [
      "Unter Trägerlösung und Infusionen auffindbar machen",
      "Klare Warnung: nur Lösungsmittel, keine eigenständige Therapie"
    ],
    calculatorEnabled: false,
    calculatorProfiles: ["wasser-injektionszwecke-loesungsmittel"],
    sopLinks: ["Lösungsmittel nach Fachinformation prüfen"],
    nunLinks: ["NUN Medikamentengabe / Trägerlösung prüfen"],
    source: "Fachinformation prüfen",
    lastUpdated: "2026-06-16"
  }
];
