export const userSecurityStorageKey = 'app2:userSecurity'

export const defaultUserSecurity = {
  pinHash: '',
  appLockEnabled: false,
  biometricEnabled: false,
  autoLockAfter: '5',
  lastUnlockedAt: '',
}

export const autoLockOptions = [
  ['immediate', 'sofort'],
  ['1', 'nach 1 Minute'],
  ['5', 'nach 5 Minuten'],
  ['15', 'nach 15 Minuten'],
]

export function loadUserSecurity() {
  try {
    const stored = window.localStorage.getItem(userSecurityStorageKey)
    return stored ? normalizeUserSecurity(JSON.parse(stored)) : defaultUserSecurity
  } catch {
    return defaultUserSecurity
  }
}

export function saveUserSecurity(security) {
  try {
    window.localStorage.setItem(userSecurityStorageKey, JSON.stringify(normalizeUserSecurity(security)))
  } catch {
    // Keep the demo usable when local storage is unavailable.
  }
}

export function normalizeUserSecurity(security) {
  return {
    ...defaultUserSecurity,
    ...security,
  }
}

export async function hashPin(pin) {
  const source = `app2-local-pin:${pin}`
  const bytes = new TextEncoder().encode(source)
  const digest = await window.crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function isValidPin(pin) {
  return /^\d{4,6}$/.test(pin)
}
