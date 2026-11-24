import type { TimelineEntry } from '../types'
import { useInView } from '../hooks/useInView'
import { LinkRow } from './ExternalLink'

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const { ref, revealClass } = useInView<HTMLLIElement>()
  const classes = ['entry', entry.type === 'education' ? 'entry-edu' : '', revealClass].filter(Boolean).join(' ')
  return (
    <li ref={ref} className={classes}>
      <p className="entry-when">{entry.when}</p>
      <div className="entry-body">
        <h3>{entry.title}</h3>
        <p className="entry-where">{entry.where}</p>
        <p>{entry.text}</p>
        {entry.links && <LinkRow links={entry.links} />}
      </div>
    </li>
  )
}
