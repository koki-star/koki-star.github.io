import type { ReactNode } from 'react'
import type { Link } from '../types'

/** A link with extra words for screen readers. */
export function TextLink({ link, className }: { link: Link; className?: string }) {
  return (
    <a className={className} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
      {link.srLabel && <span className="sr-only">{link.srLabel}</span>}
    </a>
  )
}

/** A row of small text links under a card or timeline entry. */
export function LinkRow({ links }: { links: Link[] }): ReactNode {
  return (
    <p className="project-links">
      {links.map((link) => (
        <TextLink key={link.href + link.label} link={link} />
      ))}
    </p>
  )
}
