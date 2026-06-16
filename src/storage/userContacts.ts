export const userContactsStorageKey = 'app2:userContacts'
export const contactFavoritesStorageKey = 'app2:contactFavorites'

export function loadUserContacts() {
  try {
    const stored = window.localStorage.getItem(userContactsStorageKey)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveUserContacts(contacts) {
  window.localStorage.setItem(userContactsStorageKey, JSON.stringify(contacts))
}

export function loadContactFavorites() {
  try {
    const stored = window.localStorage.getItem(contactFavoritesStorageKey)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveContactFavorites(ids) {
  window.localStorage.setItem(contactFavoritesStorageKey, JSON.stringify(ids))
}
