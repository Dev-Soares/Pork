export function getFirstName(name?: string | null, fallback = 'convidado'): string {
  if (!name) return fallback
  return name.split(' ')[0] || fallback
}

export function getInitials(name?: string | null, fallback = '?'): string {
  if (!name) return fallback
  return name.charAt(0).toUpperCase() || fallback
}

export function isNameValid(name?: string | null): boolean {
  return typeof name === 'string' && name.trim().length > 0
}
