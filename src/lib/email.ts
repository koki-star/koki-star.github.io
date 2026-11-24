import { profile } from '../data/profile'

/** Each part is reversed text, then base64. This turns it back into plain text. */
function decode(value: string): string {
  return atob(value).split('').reverse().join('')
}

/**
 * Builds the email address in the browser, from the encoded parts in profile.ts.
 * The full address is never one plain string in the source or the build, so spam bots cannot read it.
 */
export function getEmail(): string {
  try {
    return `${decode(profile.emailParts.user)}@${decode(profile.emailParts.domain)}`
  } catch {
    return ''
  }
}

/** Copies text. Uses the Clipboard API on secure pages, and an old fallback on other pages. */
export async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return fallbackCopy(text)
    }
  }
  return fallbackCopy(text)
}

function fallbackCopy(text: string): boolean {
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  let ok: boolean
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  document.body.removeChild(area)
  return ok
}
