import { useMemo } from 'react'
import { getEmail } from '../lib/email'

/** The email address, built in the browser. Empty if it cannot be built. */
export function useEmail(): string {
  return useMemo(() => getEmail(), [])
}
