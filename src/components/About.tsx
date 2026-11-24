import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { Section } from './Section'

export function About() {
  const { ref, revealClass } = useInView<HTMLDivElement>()
  return (
    <Section id="about" num="01" title="About me">
      <div ref={ref} className={`section-body prose ${revealClass}`}>
        <p className="lead">{profile.about.lead}</p>
        {profile.about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Section>
  )
}
