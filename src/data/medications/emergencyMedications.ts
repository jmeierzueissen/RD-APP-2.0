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
  }
];
