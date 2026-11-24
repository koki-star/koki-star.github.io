import { experience } from '../data/experience'
import { Section } from './Section'
import { TimelineItem } from './TimelineItem'
import './Experience.css'

export function Experience() {
  return (
    <Section id="experience" num="04" title="Experience and education">
      <div className="section-body">
        <ol className="timeline">
          {experience.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
