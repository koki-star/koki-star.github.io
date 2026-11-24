import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  note?: string
  className?: string
  children: ReactNode
}

/** A page section with the title and note on the left, and the content on the right. */
export function Section({ id, title, note, className, children }: SectionProps) {
  const titleId = `${id}-title`
  return (
    <section className={className ? `section ${className}` : 'section'} id={id} aria-labelledby={titleId}>
      <div className="wrap section-grid">
        <header className="section-head">
          <h2 id={titleId}>{title}</h2>
          {note && <p className="section-note">{note}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
