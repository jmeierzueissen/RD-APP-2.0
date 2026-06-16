export type SopFlashcard = {
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

export const sopFlashcards: SopFlashcard[] = [
  {
    id: "sop-card-001-xabcde",
    category: "Basisversorgung",
    topic: "BV1 xABCDE",
    front: "Wofür steht das xABCDE-Schema in der SOP-Erstuntersuchung?",
    back: "x = lebensbedrohliche externe Blutung, A = Atemweg, B = Belüftung/Atmung, C = Kreislauf/Zirkulation, D = Neurologie/Disability, E = Exposure/Umgebung/erweiterte Untersuchung.",
    linkedAlgorithmId: "sop-bv1-ersteindruck-xabcde",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 9,
    difficulty: "basic",
    tags: ["xABCDE", "Ersteindruck", "Basisversorgung"]
  },
  {
    id: "sop-card-002-x-problem",
    category: "Basisversorgung",
    topic: "BV2 X-Problem",
    front: "Welche Priorität hat eine lebensbedrohliche externe Blutung im xABCDE-Schema?",
    back: "Sie wird als X-Problem vorgezogen. Blutstillung hat Priorität vor A-B-C und kann parallel durch Teamdelegation erfolgen.",
    linkedAlgorithmId: "sop-bv2-x-problem-blutung",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 10,
    difficulty: "basic",
    tags: ["Blutung", "Tourniquet", "X-Problem", "Trauma"]
  },
  {
    id: "sop-card-003-a-problem",
    category: "Basisversorgung",
    topic: "BV3 A-Problem",
    front: "Welche Zeichen können auf ein A-Problem hinweisen?",
    back: "Zyanose, Stridor, Husten, Tachypnoe, Dyspnoe, Apnoe, inverse Atmung, Bewusstseinsstörung oder Panik. Bei allergischem Schock ist frühzeitig Adrenalin i.m. zu beachten.",
    linkedAlgorithmId: "sop-bv3-a-problem-atemweg",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 11,
    difficulty: "basic",
    tags: ["Atemweg", "Stridor", "A-Problem", "Anaphylaxie"]
  },
  {
    id: "sop-card-004-b-problem",
    category: "Basisversorgung",
    topic: "BV4 B-Problem",
    front: "Welche Probleme werden im B-Abschnitt primär beurteilt?",
    back: "Belüftung, Atemfrequenz, Atemarbeit, Sauerstoffsättigung, Atemgeräusche, Apnoe/Schnappatmung, Aspiration, Spannungspneumothorax und Zeichen respiratorischer Insuffizienz.",
    linkedAlgorithmId: "sop-bv4-b-problem-belueftung",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 15,
    difficulty: "basic",
    tags: ["Atmung", "Atemnot", "B-Problem", "ARI"]
  },
  {
    id: "sop-card-005-c-problem",
    category: "Basisversorgung",
    topic: "BV5 C-Problem",
    front: "Welche Ersteindruck-Zeichen sprechen für ein C-Problem?",
    back: "Blässe, schnelle Atmung, Verwirrtheit, Kaltschweißigkeit und zunehmender Vigilanzabfall als Dekompensationszeichen.",
    linkedAlgorithmId: "sop-bv5-c-problem-kreislauf",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 16,
    difficulty: "basic",
    tags: ["Kreislauf", "Schock", "C-Problem"]
  },
  {
    id: "sop-card-006-d-problem",
    category: "Basisversorgung",
    topic: "BV6 D-Problem",
    front: "Welche typischen Situationen führen im D-Problem zu speziellen Versorgungspfaden?",
    back: "Generalisierter Krampfanfall führt zu SGTKA/Krampfanfall, motorische Störung oder Aphasie zu Schlaganfall, BZ < 60 mg/dl zu Hypoglykämie, Fieber/Infekt mit passenden Kriterien zu Sepsis.",
    linkedAlgorithmId: "sop-bv6-d-problem-neurologie",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: 17,
    difficulty: "basic",
    tags: ["Neurologie", "Krampfanfall", "Schlaganfall", "Hypoglykämie", "Sepsis"]
  },
  {
    id: "sop-card-007-cpr-erwachsene",
    category: "Reanimation",
    topic: "V1 CPR Erwachsene",
    front: "Welche Seiten gehören zum SOP-Versorgungspfad CPR Erwachsene?",
    back: "V1 CPR Erwachsene umfasst Ablauf, Begleittext und Teammanagement auf den Seiten 19 bis 21.",
    linkedAlgorithmId: "sop-v1-cpr-erwachsene",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [19, 20, 21],
    difficulty: "basic",
    tags: ["CPR", "Reanimation", "Erwachsene"]
  },
  {
    id: "sop-card-008-acs",
    category: "Kardiologie",
    topic: "V5 ACS",
    front: "Welche SOP wird bei ACS / Brustschmerz geöffnet?",
    back: "V5 Akutes Koronarsyndrom / ACS. In der App soll sie über ACS, STEMI, NSTEMI, Herzinfarkt und Brustschmerz auffindbar sein.",
    linkedAlgorithmId: "sop-v5-acs",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [32, 33],
    difficulty: "basic",
    tags: ["ACS", "Brustschmerz", "STEMI", "NSTEMI", "Kardiologie"]
  },
  {
    id: "sop-card-009-schlaganfall",
    category: "Neurologie",
    topic: "V13 Schlaganfall",
    front: "Welche SOP ist bei Schlaganfallzeichen relevant?",
    back: "V13 Schlaganfall und Zuweisungskonzept LVO. In der App soll sie über Schlaganfall, Stroke, FAST, G-FAST, LVO und Neurologie auffindbar sein.",
    linkedAlgorithmId: "sop-v13-schlaganfall-lvo",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [50, 51, 52],
    difficulty: "basic",
    tags: ["Schlaganfall", "Stroke", "LVO", "Neurologie"]
  },
  {
    id: "sop-card-010-sepsis",
    category: "Infekt / Sepsis",
    topic: "V14 Sepsis",
    front: "Welche SOP wird bei Sepsis-Verdacht geöffnet?",
    back: "V14 Sepsis. In der App soll sie über Sepsis, Infekt, Fieber, NEWS und qSOFA auffindbar sein.",
    linkedAlgorithmId: "sop-v14-sepsis",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [53, 54],
    difficulty: "basic",
    tags: ["Sepsis", "Infekt", "NEWS", "qSOFA"]
  },
  {
    id: "sop-card-011-krampfanfall",
    category: "Neurologie",
    topic: "V12 Krampfanfall / SGTKA",
    front: "Welche SOP ist bei generalisiertem Krampfanfall relevant?",
    back: "V12 Krampfanfall / SGTKA. In der App soll sie über Krampfanfall, SGTKA, Epilepsie, Midazolam und Buccolam auffindbar sein.",
    linkedAlgorithmId: "sop-v12-krampfanfall-sgtka",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [48, 49],
    difficulty: "basic",
    tags: ["Krampfanfall", "SGTKA", "Midazolam", "Buccolam"]
  },
  {
    id: "sop-card-012-anaphylaxie",
    category: "Schock / Allergie",
    topic: "V4 Allergischer Schock",
    front: "Welche SOP wird bei Anaphylaxie / allergischem Schock geöffnet?",
    back: "V4 Allergischer Schock. In der App soll sie über Anaphylaxie, Allergie, allergischer Schock und Adrenalin auffindbar sein.",
    linkedAlgorithmId: "sop-v4-allergischer-schock",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [29, 30, 31],
    difficulty: "basic",
    tags: ["Anaphylaxie", "Allergie", "Adrenalin", "Schock"]
  },
  {
    id: "sop-card-013-obstruktive-atemnot",
    category: "Atemweg / Atmung",
    topic: "V10 Obstruktive Atemnot",
    front: "Welche SOP ist bei obstruktiver Atemnot relevant?",
    back: "V10 Obstruktive Atemnot. Sie soll über Atemnot, Asthma, COPD, Salbutamol, Ipratropium und obstruktiv auffindbar sein.",
    linkedAlgorithmId: "sop-v10-obstruktive-atemnot",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [42, 43],
    difficulty: "basic",
    tags: ["Atemnot", "Asthma", "COPD", "Salbutamol"]
  },
  {
    id: "sop-card-014-hypoglykaemie",
    category: "Stoffwechsel",
    topic: "V11 Hypoglykämie",
    front: "Welche SOP ist bei niedrigem Blutzucker relevant?",
    back: "V11 Hypoglykämie. Sie soll über Hypoglykämie, BZ, Glukose, Diabetes und Bewusstseinsstörung auffindbar sein.",
    linkedAlgorithmId: "sop-v11-hypoglykaemie",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [46, 47],
    difficulty: "basic",
    tags: ["Hypoglykämie", "BZ", "Glukose", "Diabetes"]
  },
  {
    id: "sop-card-015-analgesie",
    category: "Analgesie",
    topic: "V15 Medikamentöse Analgesie",
    front: "Welche SOP ist für medikamentöse Schmerztherapie relevant?",
    back: "V15 Medikamentöse Analgesie. Sie soll über Schmerz, Analgesie, Esketamin, Nalbuphin und Paracetamol auffindbar sein.",
    linkedAlgorithmId: "sop-v15-analgesie",
    source: "SOP Region Hannover 2023 / Update 02.07.2024",
    sourcePage: [55, 56, 57],
    difficulty: "basic",
    tags: ["Schmerz", "Analgesie", "Esketamin", "Nalbuphin"]
  }
];
