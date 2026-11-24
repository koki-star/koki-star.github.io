import type { ReactNode } from 'react'
import { useEmail } from '../hooks/useEmail'

interface EmailLinkProps {
  className?: string
  /** Text to show. If it is not set, the link shows the email address. */
  children?: ReactNode
  /** Where the link goes if the email cannot be built. */
  fallbackHref?: string
  describedBy?: string
}

/** A mailto link. The address is built in the browser, so it is not in the HTML source. */
export function EmailLink({ className, children, fallbackHref = '#contact', describedBy }: EmailLinkProps) {
  const email = useEmail()
  return (
    <a className={className} href={email ? `mailto:${email}` : fallbackHref} aria-describedby={describedBy}>
      {children ?? email}
    </a>
  )
}
