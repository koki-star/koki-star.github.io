import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { ResumeLink } from './ResumeLink'
import { Section } from './Section'
import './Resume.css'

export function Resume() {
  const { ref, revealClass } = useInView<HTMLDivElement>()
  return (
    <Section id="resume" num="05" title="Resume">
      <div className="section-body">
        <div ref={ref} className={`resume-card ${revealClass}`}>
          <div>
            <p className="label">{profile.resume.label}</p>
            <p className="resume-text">{profile.resume.text}</p>
          </div>
          <div className="resume-actions">
            <ResumeLink label="Download resume (PDF)" primary />
            <a className="btn btn-ghost" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">See LinkedIn</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
