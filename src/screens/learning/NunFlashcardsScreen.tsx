import { nunFlashcards } from "../../data/learning/flashcards/nunFlashcards";

export function getNunFlashcardCategories() {
  return [
    "Grundlagen",
    "Basisversorgung",
    "Atemweg / Atmung",
    "Kreislauf / Schock",
    "Reanimation",
    "Kardiologie",
    "Neurologie",
    "Trauma",
    "Pädiatrie",
    "Medikamente / Analgesie",
    "Organisation",
    "Transport / Übergabe",
  ];
}

export function getNunFlashcards() {
  return nunFlashcards;
}
