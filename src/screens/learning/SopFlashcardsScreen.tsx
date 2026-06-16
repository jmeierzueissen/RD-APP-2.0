import { sopFlashcards } from "../../data/learning/flashcards/sopFlashcards";

export function getSopFlashcardCategories() {
  return [
    "Basisversorgung",
    "Reanimation",
    "Kardiologie",
    "Neurologie",
    "Atemweg / Atmung",
    "Schock / Allergie",
    "Infekt / Sepsis",
    "Analgesie",
    "Stoffwechsel",
  ];
}

export function getSopFlashcards() {
  return sopFlashcards;
}
