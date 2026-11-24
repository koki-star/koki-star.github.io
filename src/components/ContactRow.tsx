import type { ReactNode } from 'react'

interface ContactRowProps {
  icon: ReactNode
  label: string
  labelId?: string
  /** Rows with a link get the hover style and the arrow. */
  isLink?: boolean
  className?: string
  children: ReactNode
  /** Extra content at the end of the row, like the copy button. */
  action?: ReactNode
}

export function ContactRow({ icon, label, labelId, isLink, className, children, action }: ContactRowProps) {
  const classes = ['contact-row', isLink ? 'is-link' : '', className ?? ''].filter(Boolean).join(' ')
  return (
    <li className={classes}>
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <span className="contact-text">
        <span className="label" id={labelId}>{label}</span>
        {children}
      </span>
      {isLink && <span className="row-arrow" aria-hidden="true">↗</span>}
      {action}
    </li>
  )
}
