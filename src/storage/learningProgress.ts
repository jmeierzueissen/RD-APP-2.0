export const learningProgressStorageKey = 'app2:learningProgress'

export const defaultLearningProgress = {
  seenCards: [],
  knownCards: [],
  unknownCards: [],
  favoriteCards: [],
  quizScores: {},
  wrongAnswers: [],
}

export function loadLearningProgress() {
  try {
    const stored = window.localStorage.getItem(learningProgressStorageKey)
    return stored ? { ...defaultLearningProgress, ...JSON.parse(stored) } : defaultLearningProgress
  } catch {
    return defaultLearningProgress
  }
}

export function saveLearningProgress(progress) {
  try {
    window.localStorage.setItem(learningProgressStorageKey, JSON.stringify(progress))
  } catch {
    // Keep learning screens usable if local storage is unavailable.
  }
}
