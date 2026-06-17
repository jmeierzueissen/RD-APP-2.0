export type NunFlashcard = {
  id: string;
  category: string;
  topic: string;
  front: string;
  back: string;
  linkedAlgorithmId?: string;
  source: string;
  sourcePage: number | number[];
  difficulty: "basic" | "advanced" | "expert";
  tags: string[];
};

export const nunFlashcards: NunFlashcard[] = [
  {
    id: "nun-card-001-legende",
    category: "Grundlagen",
    topic: "NUN Legende",
    front: "Wozu dient die Legende der NUN-Algorithmen?",
    back: "Die Legende erklärt Symbole, Hervorhebungen und Hinweise, die in den NUN-Versorgungspfaden verwendet werden. Sie hilft, die Diagramme einheitlich zu lesen.",
    linkedAlgorithmId: "nun-legende",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 7,
    difficulty: "basic",
    tags: ["Legende", "Grundlagen", "Symbole"]
  },
  {
    id: "nun-card-002-definitionen",
    category: "Grundlagen",
    topic: "NUN Definitionen",
    front: "Warum sind Definitionen und Begriffserklärungen bei den NUN wichtig?",
    back: "Sie sorgen dafür, dass Begriffe wie Basismaßnahmen, Monitoring, Notarzt-/Telenotarzt-Einbindung und Transportziele einheitlich verstanden werden.",
    linkedAlgorithmId: "nun-definitionen",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 8,
    difficulty: "basic",
    tags: ["Definitionen", "Grundlagen", "Begriffe"]
  },
  {
    id: "nun-card-003-abcde",
    category: "Basisversorgung",
    topic: "NUN ABCDE",
    front: "Welches Grundprinzip liegt den NUN-Versorgungspfaden zugrunde?",
    back: "Die Versorgung folgt einer strukturierten Ersteinschätzung und prioritätenorientierten Behandlung lebensbedrohlicher Probleme nach ABCDE bzw. xABCDE.",
    linkedAlgorithmId: "nun-abcde",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 11,
    difficulty: "basic",
    tags: ["ABCDE", "Basisversorgung", "Ersteinschätzung"]
  },
  {
    id: "nun-card-004-x-problem",
    category: "Basisversorgung",
    topic: "NUN X-Problem",
    front: "Was steht beim X-Problem im Vordergrund?",
    back: "Das frühzeitige Erkennen und Behandeln lebensbedrohlicher externer Blutungen. Die Blutstillung wird vor ABC priorisiert.",
    linkedAlgorithmId: "nun-x-problem",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 10,
    difficulty: "basic",
    tags: ["X-Problem", "Blutung", "Tourniquet", "Trauma"]
  },
  {
    id: "nun-card-005-a-problem",
    category: "Atemweg / Atmung",
    topic: "NUN A-Problem",
    front: "Welche Fragestellung steht beim A-Problem im Mittelpunkt?",
    back: "Ob der Atemweg frei, sicher und ausreichend geschützt ist. Bei Problemen werden Maßnahmen zur Atemwegsfreimachung und Atemwegssicherung eingeleitet.",
    linkedAlgorithmId: "nun-a-problem",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 13,
    difficulty: "basic",
    tags: ["Atemweg", "A-Problem", "Stridor", "Atemwegssicherung"]
  },
  {
    id: "nun-card-006-schwieriger-atemweg",
    category: "Atemweg / Atmung",
    topic: "Schwieriger Atemweg",
    front: "Warum ist der Versorgungspfad schwieriger Atemweg besonders wichtig?",
    back: "Weil bei drohender oder bestehender Atemwegsproblematik Zeitmanagement, Oxygenierung, einfache Techniken und ggf. erweiterte Atemwegssicherung entscheidend sind.",
    linkedAlgorithmId: "nun-schwieriger-atemweg",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 14,
    difficulty: "advanced",
    tags: ["Atemweg", "schwieriger Atemweg", "Oxygenierung", "Beatmung"]
  },
  {
    id: "nun-card-007-bolus",
    category: "Atemweg / Atmung",
    topic: "Bolusgeschehen",
    front: "Was ist das Ziel beim Versorgungspfad Bolusgeschehen?",
    back: "Eine relevante Fremdkörper- oder Bolusverlegung des Atemwegs zu erkennen und geeignete Maßnahmen zur Atemwegsbefreiung einzuleiten.",
    linkedAlgorithmId: "nun-bolusgeschehen",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 15,
    difficulty: "basic",
    tags: ["Bolus", "Fremdkörper", "Atemwegsverlegung", "Ersticken"]
  },
  {
    id: "nun-card-008-b-problem",
    category: "Atemweg / Atmung",
    topic: "NUN B-Problem",
    front: "Welche Probleme werden im B-Abschnitt beurteilt?",
    back: "Belüftung, Atemfrequenz, Atemarbeit, Oxygenierung, Atemgeräusche und Hinweise auf respiratorische Insuffizienz oder Spannungspneumothorax.",
    linkedAlgorithmId: "nun-b-problem",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 16,
    difficulty: "basic",
    tags: ["B-Problem", "Atmung", "Atemnot", "ARI"]
  },
  {
    id: "nun-card-009-ari-niv",
    category: "Atemweg / Atmung",
    topic: "ARI / NIV Erwachsene",
    front: "Wofür steht ARI im NUN-Kontext?",
    back: "ARI steht für akute respiratorische Insuffizienz. Der NUN-Pfad unterstützt die strukturierte Beurteilung und Therapie, inklusive möglicher NIV/Beatmungsstrategie.",
    linkedAlgorithmId: "nun-ari-niv-erwachsene",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 17,
    difficulty: "advanced",
    tags: ["ARI", "NIV", "Atemnot", "Beatmung"]
  },
  {
    id: "nun-card-010-c-problem",
    category: "Kreislauf / Schock",
    topic: "NUN C-Problem",
    front: "Welche zentrale Frage stellt sich beim C-Problem?",
    back: "Ob Kreislauf und Perfusion ausreichend sind oder Hinweise auf Schock, Blutung, Rhythmusstörung oder kritische Hypotonie bestehen.",
    linkedAlgorithmId: "nun-c-problem",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 18,
    difficulty: "basic",
    tags: ["C-Problem", "Kreislauf", "Schock", "Perfusion"]
  },
  {
    id: "nun-card-011-reanimation",
    category: "Reanimation",
    topic: "NUN Reanimation",
    front: "Welche NUN-Seiten gehören zum Versorgungspfad Reanimation?",
    back: "Der NUN-Versorgungspfad Reanimation ist als mehrseitiger Algorithmus angelegt und soll in der App über den Notfallmodus direkt erreichbar sein.",
    linkedAlgorithmId: "nun-reanimation",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [19, 20, 21],
    difficulty: "basic",
    tags: ["Reanimation", "CPR", "Kreislaufstillstand", "ROSC"]
  },
  {
    id: "nun-card-012-erkrankte-person",
    category: "Basisversorgung",
    topic: "Erkrankte Person",
    front: "Wann ist der Basis-Versorgungspfad erkrankte Person relevant?",
    back: "Bei internistischen oder unklar erkrankten Patient*innen, bei denen eine strukturierte Ersteinschätzung, ABCDE-Bewertung und Arbeitshypothese erforderlich ist.",
    linkedAlgorithmId: "nun-erkrankte-person",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [22, 23],
    difficulty: "basic",
    tags: ["Erkrankte Person", "internistisch", "ABCDE", "Basisversorgung"]
  },
  {
    id: "nun-card-013-verletzte-person",
    category: "Trauma",
    topic: "Verletzte Person",
    front: "Wann wird der Basis-Versorgungspfad verletzte Person genutzt?",
    back: "Bei Unfall- oder Traumapatient*innen zur strukturierten Einschätzung, Priorisierung und Versorgung nach Trauma- und ABCDE-Prinzipien.",
    linkedAlgorithmId: "nun-verletzte-person",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [24, 25, 26, 27],
    difficulty: "basic",
    tags: ["Trauma", "verletzte Person", "Unfall", "ABCDE"]
  },
  {
    id: "nun-card-014-notarzt",
    category: "Organisation",
    topic: "Notärztliche Unterstützung",
    front: "Was soll der NUN-Pfad notärztliche Unterstützung strukturieren?",
    back: "Die situationsabhängige Entscheidung, wann notärztliche oder telenotärztliche Unterstützung sinnvoll oder erforderlich ist.",
    linkedAlgorithmId: "nun-notaerztliche-unterstuetzung",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [28, 29],
    difficulty: "basic",
    tags: ["Notarzt", "Telenotarzt", "Nachforderung", "Organisation"]
  },
  {
    id: "nun-card-015-telenotfallmedizin",
    category: "Organisation",
    topic: "Telenotfallmedizin",
    front: "Welche Rolle kann Telenotfallmedizin in den NUN spielen?",
    back: "Sie kann bei bestimmten Situationen eine ärztliche Unterstützung ermöglichen, wenn regionale Vorgaben und technische Voraussetzungen erfüllt sind.",
    linkedAlgorithmId: "nun-telenotfallmedizin",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [30, 31],
    difficulty: "basic",
    tags: ["Telenotarzt", "Telenotfallmedizin", "Telemedizin"]
  },
  {
    id: "nun-card-016-analgesie",
    category: "Medikamente / Analgesie",
    topic: "Medikamentöse Analgesie",
    front: "Was ist das Ziel des NUN-Pfades medikamentöse Analgesie?",
    back: "Schmerzen strukturiert zu erfassen, nicht-medikamentöse Maßnahmen zu berücksichtigen und eine medikamentöse Analgesie nach Vorgaben sicher einzusetzen.",
    linkedAlgorithmId: "nun-analgesie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [32, 33],
    difficulty: "basic",
    tags: ["Analgesie", "Schmerz", "Medikamente", "NRS"]
  },
  {
    id: "nun-card-017-anaphylaxie",
    category: "Kreislauf / Schock",
    topic: "Anaphylaktischer Schock",
    front: "Welche Leitsymptome führen in der App zum NUN-Pfad Anaphylaxie?",
    back: "Allergische Reaktion, Atemwegsprobleme, Hautsymptome, Kreislaufprobleme oder Schockzeichen nach möglichem Allergenkontakt.",
    linkedAlgorithmId: "nun-anaphylaxie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [34, 35],
    difficulty: "basic",
    tags: ["Anaphylaxie", "Allergie", "Schock", "Adrenalin"]
  },
  {
    id: "nun-card-018-bradykardie",
    category: "Kardiologie",
    topic: "Bradykardie",
    front: "Wann ist der NUN-Pfad Bradykardie relevant?",
    back: "Bei bedrohlicher Bradykardie mit Hinweisen auf Kreislaufinstabilität oder Minderperfusion.",
    linkedAlgorithmId: "nun-bradykardie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [36, 37],
    difficulty: "basic",
    tags: ["Bradykardie", "Kreislauf", "Atropin", "Schrittmacher"]
  },
  {
    id: "nun-card-019-hypertonie",
    category: "Kardiologie",
    topic: "Hypertensiver Notfall",
    front: "Was unterscheidet eine hypertensive Krise vom hypertensiven Notfall?",
    back: "Beim hypertensiven Notfall bestehen zusätzlich klinische Zeichen einer akuten Organschädigung oder vitalen Gefährdung. Die App soll hier zur Originalseite führen.",
    linkedAlgorithmId: "nun-hypertensiver-notfall",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [38, 39],
    difficulty: "advanced",
    tags: ["Hypertonie", "hypertensiver Notfall", "Blutdruck", "Urapidil"]
  },
  {
    id: "nun-card-020-hypoglykaemie",
    category: "Neurologie / Stoffwechsel",
    topic: "Hypoglykämie",
    front: "Welche Messung ist bei Verdacht auf Hypoglykämie zentral?",
    back: "Die Blutzuckermessung. Bei niedrigem BZ und passender Symptomatik führt die App zum NUN-Pfad Hypoglykämie.",
    linkedAlgorithmId: "nun-hypoglykaemie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [40, 41],
    difficulty: "basic",
    tags: ["Hypoglykämie", "BZ", "Glukose", "Diabetes"]
  },
  {
    id: "nun-card-021-lungenoedem",
    category: "Kardiologie",
    topic: "Kardiales Lungenödem",
    front: "Welche Leitsymptome passen zum NUN-Pfad kardiales Lungenödem?",
    back: "Akute Atemnot, feuchte Atemgeräusche, Zeichen kardialer Dekompensation und ggf. hypertensive Begleitsituation.",
    linkedAlgorithmId: "nun-kardiales-lungenoedem",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [42, 43],
    difficulty: "basic",
    tags: ["Lungenödem", "Atemnot", "Herzinsuffizienz", "Kardiologie"]
  },
  {
    id: "nun-card-022-lungenembolie",
    category: "Atemweg / Atmung",
    topic: "Lungenarterienembolie",
    front: "Welche Symptome können zum NUN-Pfad Lungenarterienembolie führen?",
    back: "Akute Dyspnoe, Thoraxschmerz, Kreislaufinstabilität, Tachykardie oder Verdacht auf thromboembolisches Ereignis.",
    linkedAlgorithmId: "nun-lungenarterienembolie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [44, 45],
    difficulty: "advanced",
    tags: ["Lungenembolie", "LAE", "Dyspnoe", "Thoraxschmerz"]
  },
  {
    id: "nun-card-023-obstruktive-atemnot",
    category: "Atemweg / Atmung",
    topic: "Obstruktive Atemnot",
    front: "Welche Krankheitsbilder passen zum NUN-Pfad obstruktive Atemnot?",
    back: "Vor allem Asthma bronchiale, COPD-Exazerbation oder bronchospastische Atemnot mit obstruktiven Atemgeräuschen.",
    linkedAlgorithmId: "nun-obstruktive-atemnot",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [46, 47],
    difficulty: "basic",
    tags: ["Atemnot", "Asthma", "COPD", "Salbutamol", "Ipratropium"]
  },
  {
    id: "nun-card-024-schlaganfall",
    category: "Neurologie",
    topic: "Schlaganfall",
    front: "Welche Suchbegriffe sollen in der App zum NUN-Pfad Schlaganfall führen?",
    back: "Schlaganfall, Stroke, FAST, G-FAST, LVO, Aphasie, Parese, Gesichtslähmung und neurologisches Defizit.",
    linkedAlgorithmId: "nun-schlaganfall",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 48,
    difficulty: "basic",
    tags: ["Schlaganfall", "Stroke", "FAST", "LVO", "Neurologie"]
  },
  {
    id: "nun-card-025-sepsis",
    category: "Infekt / Sepsis",
    topic: "Sepsis",
    front: "Welche Begriffe sollen den NUN-Pfad Sepsis auffindbar machen?",
    back: "Sepsis, Infekt, Fieber, qSOFA, NEWS, Vigilanzminderung, Tachypnoe und Schockzeichen.",
    linkedAlgorithmId: "nun-sepsis",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [49, 50],
    difficulty: "basic",
    tags: ["Sepsis", "Infekt", "Fieber", "NEWS", "qSOFA"]
  },
  {
    id: "nun-card-026-krampfanfall",
    category: "Neurologie",
    topic: "Krampfanfall / SGTKA",
    front: "Wann führt die App zum NUN-Pfad Krampfanfall?",
    back: "Bei generalisiertem tonisch-klonischem Anfall, Status epilepticus, anhaltendem Krampfanfall oder entsprechender neurologischer Notfallsituation.",
    linkedAlgorithmId: "nun-krampfanfall",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [52, 53],
    difficulty: "basic",
    tags: ["Krampfanfall", "SGTKA", "Epilepsie", "Midazolam"]
  },
  {
    id: "nun-card-027-tachykardie",
    category: "Kardiologie",
    topic: "Tachykardie",
    front: "Wann ist der NUN-Pfad Tachykardie relevant?",
    back: "Bei lebensbedrohlicher Tachykardie mit Zeichen kardialer Ursache oder Kreislaufinstabilität.",
    linkedAlgorithmId: "nun-tachykardie",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [54, 55],
    difficulty: "basic",
    tags: ["Tachykardie", "Kardioversion", "Rhythmusstörung", "Kardiologie"]
  },
  {
    id: "nun-card-028-thermischer-schaden",
    category: "Trauma",
    topic: "Thermischer Schaden",
    front: "Welche Einsätze passen zum NUN-Pfad thermischer Schaden?",
    back: "Verbrennungen, Verbrühungen oder andere relevante thermische Verletzungen mit Bedarf an strukturierter Einschätzung und Versorgung.",
    linkedAlgorithmId: "nun-thermischer-schaden",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [56, 57],
    difficulty: "basic",
    tags: ["Verbrennung", "Verbrühung", "thermischer Schaden", "Trauma"]
  },
  {
    id: "nun-card-029-thoraxschmerz",
    category: "Kardiologie",
    topic: "Akuter Thoraxschmerz",
    front: "Welche Suchbegriffe sollen zum NUN-Pfad akuter Thoraxschmerz führen?",
    back: "Thoraxschmerz, Brustschmerz, ACS, Herzinfarkt, STEMI, NSTEMI und Kardiologie.",
    linkedAlgorithmId: "nun-akuter-thoraxschmerz",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [58, 59],
    difficulty: "basic",
    tags: ["Thoraxschmerz", "Brustschmerz", "ACS", "Herzinfarkt"]
  },
  {
    id: "nun-card-030-kind-transportverzicht",
    category: "Pädiatrie",
    topic: "Kind / Transportverzicht",
    front: "Warum sollte der NUN-Pfad Kind / Transportverzicht besonders vorsichtig genutzt werden?",
    back: "Weil Kinder und betreute Personen besondere Schutz- und Entscheidungsaspekte haben. Transportverzicht muss fachlich, rechtlich und organisatorisch sehr sauber bewertet werden.",
    linkedAlgorithmId: "nun-kind-transportverzicht",
    source: "NUN Versorgungspfade 2026",
    sourcePage: [60, 61],
    difficulty: "advanced",
    tags: ["Kind", "Pädiatrie", "Transportverzicht", "Dokumentation"]
  },
  {
    id: "nun-card-031-uebergabe",
    category: "Transport / Übergabe",
    topic: "Übergabe an Klinik",
    front: "Was ist das Ziel einer strukturierten Übergabe an die Klinik?",
    back: "Relevante Patienteninformationen vollständig, verständlich und priorisiert an die weiterbehandelnde Klinik zu übergeben.",
    linkedAlgorithmId: "nun-uebergabe-klinik",
    source: "NUN Versorgungspfade 2026",
    sourcePage: 62,
    difficulty: "basic",
    tags: ["Übergabe", "Klinik", "Notaufnahme", "Transport"]
  }
];
