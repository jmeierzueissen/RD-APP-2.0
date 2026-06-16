export const userProfileStorageKey = 'app2:userProfile'

export const defaultUserProfile = {
  id: 'local-user',
  displayName: 'Max Mustermann',
  firstName: 'Max',
  lastName: 'Mustermann',
  username: 'max.mustermann',
  role: 'Rettungsdienst',
  station: 'RW Mitte',
  phone: '',
  email: '',
  address: {
    street: '',
    zip: '',
    city: '',
    state: '',
    country: 'Deutschland',
  },
  avatarUri: '',
  notes: '',
  lastUpdated: '',
}

export const profileRoleOptions = [
  'Notfallsanitäter',
  'Rettungssanitäter',
  'Auszubildende/r',
  'Praxisanleiter',
  'Teamleiter',
  'Sonstiges',
]

export function loadUserProfile() {
  try {
    const stored = window.localStorage.getItem(userProfileStorageKey)
    return stored ? normalizeUserProfile(JSON.parse(stored)) : defaultUserProfile
  } catch {
    return defaultUserProfile
  }
}

export function saveUserProfile(profile) {
  try {
    window.localStorage.setItem(userProfileStorageKey, JSON.stringify(profile))
  } catch {
    // Local storage can fail when private mode or quotas block writes.
  }
}

export function resetUserProfile() {
  try {
    window.localStorage.removeItem(userProfileStorageKey)
  } catch {
    // Keep the app usable even when storage is unavailable.
  }
  return defaultUserProfile
}

export function normalizeUserProfile(profile) {
  return {
    ...defaultUserProfile,
    ...profile,
    address: {
      ...defaultUserProfile.address,
      ...(profile?.address || {}),
    },
  }
}
