export type DoseProfile = {
  id: string;
  medicationId: string;
  medicationName: string;
  indication: string;
  patientGroup: "adult" | "child" | "all";
  route: string;
  calculationType:
    | "fixed"
    | "mg_per_kg"
    | "mg_per_kg_range"
    | "age_band"
    | "perfusion"
    | "manual_check_required";
  doseMg?: number;
  doseMgPerKg?: number;
  doseMinMgPerKg?: number;
  doseMaxMgPerKg?: number;
  maxDoseMg?: number;
  concentrationMgPerMl?: number;
  requiresWeight: boolean;
  requiresAge: boolean;
  requiresConcentration: boolean;
  lockedUntilVerified: boolean;
  source: string;
  sourcePage?: number | number[];
  notes: string[];
  warnings: string[];
};

export const doseProfiles: DoseProfile[] = [
  {
    id: "adrenalin-cpr-erwachsene",
    medicationId: "adrenalin",
    medicationName: "Adrenalin",
    indication: "CPR Erwachsene",
    patientGroup: "adult",
    route: "i.v. / i.o.",
    calculationType: "fixed",
    doseMg: 1,
    requiresWeight: false,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, CPR Erwachsene / lokal prüfen",
    sourcePage: [19, 20, 21],
    notes: ["Vorhandenes Rechnerprofil aus der bisherigen App-Demo.", "Intervall und Algorithmus nach gültiger SOP prüfen."],
    warnings: ["Reanimation nur nach gültigem Algorithmus und Team-/Monitoringstandard."]
  },
  {
    id: "adrenalin-cpr-kinder",
    medicationId: "adrenalin",
    medicationName: "Adrenalin",
    indication: "CPR Kinder",
    patientGroup: "child",
    route: "i.v. / i.o.",
    calculationType: "mg_per_kg",
    doseMgPerKg: 0.01,
    concentrationMgPerMl: 0.1,
    requiresWeight: true,
    requiresAge: true,
    requiresConcentration: false,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, CPR Kinder / lokal prüfen",
    sourcePage: [25, 26, 27],
    notes: ["Vorhandenes pädiatrisches Rechnerprofil aus der bisherigen App-Demo."],
    warnings: ["Pädiatrische Dosis vor Gabe anhand SOP/Fachinfo prüfen."]
  },
  {
    id: "adrenalin-anaphylaxie",
    medicationId: "adrenalin",
    medicationName: "Adrenalin",
    indication: "Anaphylaxie",
    patientGroup: "all",
    route: "i.m.",
    calculationType: "manual_check_required",
    requiresWeight: false,
    requiresAge: false,
    requiresConcentration: false,
    lockedUntilVerified: true,
    source: "SOP Region Hannover, Allergischer Schock / Fachinfo prüfen",
    sourcePage: [29, 30, 31],
    notes: ["Alters-/gewichtsabhängige i.m.-Dosis vor Aktivierung prüfen."],
    warnings: ["Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden."]
  },
  {
    id: "adrenalin-perfusor-check",
    medicationId: "adrenalin",
    medicationName: "Adrenalin",
    indication: "Perfusor / Katecholamin",
    patientGroup: "all",
    route: "Perfusor",
    calculationType: "perfusion",
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: true,
    source: "Regionale SOP / ärztliche Vorgabe prüfen",
    notes: ["Perfusorprofil vorbereitet, aber nicht automatisch berechnend aktiv."],
    warnings: ["Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden."]
  },
  {
    id: "midazolam-sgtka-erwachsene-in",
    medicationId: "midazolam",
    medicationName: "Midazolam",
    indication: "SGTKA Erwachsene i.n.",
    patientGroup: "adult",
    route: "intranasal / MAD",
    calculationType: "mg_per_kg_range",
    doseMinMgPerKg: 0.2,
    doseMaxMgPerKg: 0.3,
    concentrationMgPerMl: undefined,
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, SGTKA / lokal prüfen",
    sourcePage: [48, 49],
    notes: ["Vorhandenes Rechnerprofil aus der bisherigen App-Demo.", "Fraktionierte Gabe und Wirkungseintritt beachten."],
    warnings: ["Atemweg, Beatmungsbereitschaft und Monitoring sicherstellen."]
  },
  {
    id: "midazolam-sgtka-erwachsene-iv",
    medicationId: "midazolam",
    medicationName: "Midazolam",
    indication: "SGTKA Erwachsene i.v.",
    patientGroup: "adult",
    route: "i.v.",
    calculationType: "mg_per_kg_range",
    doseMinMgPerKg: 0.05,
    doseMaxMgPerKg: 0.1,
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, SGTKA / lokal prüfen",
    sourcePage: [48, 49],
    notes: ["Vorhandenes Rechnerprofil aus der bisherigen App-Demo."],
    warnings: ["Atemdepressionsrisiko, Atemweg und Monitoring beachten."]
  },
  {
    id: "buccolam-kinder-altersband",
    medicationId: "midazolam",
    medicationName: "Midazolam / Buccolam",
    indication: "Buccolam Kinder Altersband",
    patientGroup: "child",
    route: "buccal",
    calculationType: "age_band",
    requiresWeight: false,
    requiresAge: true,
    requiresConcentration: true,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, SGTKA / Fachinfo prüfen",
    sourcePage: [48, 49],
    notes: ["Vorhandenes Altersband-Profil aus der bisherigen App-Demo."],
    warnings: ["Kinder-SOP und Fachinfo vor Gabe prüfen."]
  },
  {
    id: "esketamin-analgesie-iv-io",
    medicationId: "esketamin",
    medicationName: "Esketamin",
    indication: "Analgesie i.v./i.o.",
    patientGroup: "all",
    route: "i.v. / i.o.",
    calculationType: "mg_per_kg",
    doseMgPerKg: 0.25,
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, Medikamentöse Analgesie / lokal prüfen",
    sourcePage: [55, 56, 57],
    notes: ["Vorhandenes Rechnerprofil aus der bisherigen App-Demo."],
    warnings: ["Monitoring, Atemweg und Vigilanz beachten."]
  },
  {
    id: "esketamin-rescue-in",
    medicationId: "esketamin",
    medicationName: "Esketamin",
    indication: "Rescue intranasal",
    patientGroup: "all",
    route: "intranasal / MAD",
    calculationType: "mg_per_kg",
    doseMgPerKg: 1,
    maxDoseMg: 50,
    concentrationMgPerMl: 25,
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: false,
    lockedUntilVerified: false,
    source: "SOP Region Hannover, X-Problem / lokal prüfen",
    notes: ["Vorhandenes Rescue-Profil aus der bisherigen App-Demo."],
    warnings: ["Maximaldosis und lokale Freigabe prüfen."]
  },
  {
    id: "noradrenalin-perfusor-check",
    medicationId: "noradrenalin",
    medicationName: "Noradrenalin",
    indication: "Perfusor / Vasopressor",
    patientGroup: "all",
    route: "Perfusor",
    calculationType: "perfusion",
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: true,
    lockedUntilVerified: true,
    source: "NEF-Medikamentenliste / SOP prüfen",
    notes: ["Perfusorprofil vorbereitet, keine automatische Gabeempfehlung."],
    warnings: ["Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden."]
  },
  {
    id: "urapidil-hypertensiver-notfall-check",
    medicationId: "urapidil",
    medicationName: "Urapidil",
    indication: "Hypertensiver Notfall",
    patientGroup: "adult",
    route: "i.v.",
    calculationType: "manual_check_required",
    requiresWeight: false,
    requiresAge: false,
    requiresConcentration: false,
    lockedUntilVerified: true,
    source: "SOP V6 / Fachinfo prüfen",
    sourcePage: [34, 35],
    notes: ["Blutdruckziel und Indikation anhand SOP prüfen."],
    warnings: ["Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden."]
  },
  {
    id: "glukose20-hypoglykaemie",
    medicationId: "glukose-20",
    medicationName: "Glukose 20 %",
    indication: "Hypoglykämie",
    patientGroup: "all",
    route: "i.v. / i.o.",
    calculationType: "manual_check_required",
    requiresWeight: true,
    requiresAge: false,
    requiresConcentration: false,
    lockedUntilVerified: true,
    source: "SOP V11 / NUN Hypoglykämie / Fachinfo prüfen",
    sourcePage: [46, 47],
    notes: ["Nur mit BZ-Kontext verwenden. Dosis vor Aktivierung prüfen."],
    warnings: ["Rechenprofil vorhanden, Dosierung muss vor Aktivierung anhand SOP/Fachinfo geprüft werden."]
  }
];
