import { useState } from 'react'
import { profile } from '../data/profile'
import { useEmail } from '../hooks/useEmail'
import { useInView } from '../hooks/useInView'
import { ContactRow } from './ContactRow'
import { CopyEmailButton } from './CopyEmailButton'
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons'
import { ResumeLink } from './ResumeLink'

export function ContactCard() {
  const { ref, revealClass } = useInView<HTMLDivElement>()
  const email = useEmail()
  const [status, setStatus] = useState('')

  return (
    <div ref={ref} className={`contact-card ${revealClass}`}>
      <div className="contact-card-head">
        <h3>Contact details</h3>
      </div>
      <ul className="contact-list">
        <ContactRow
          icon={<MailIcon />}
          label="Email"
          labelId="email-label"
          className="contact-email"
          action={email ? <CopyEmailButton email={email} onStatus={setStatus} /> : null}
        >
          {email ? (
            <a className="email-address" href={`mailto:${email}`} aria-describedby="email-label">{email}</a>
          ) : (
            <a className="email-address" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer" aria-describedby="email-label">
              Message me on LinkedIn
            </a>
          )}
        </ContactRow>
        <ContactRow icon={<LinkedInIcon />} label="LinkedIn" isLink>
          <a className="row-link" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">{profile.linkedin.display}</a>
        </ContactRow>
        <ContactRow icon={<GitHubIcon />} label="GitHub" isLink>
          <a className="row-link" href={profile.github.href} target="_blank" rel="noopener noreferrer">{profile.github.display}</a>
        </ContactRow>
        <ContactRow icon={<PinIcon />} label="Location">
          <span className="contact-plain">{profile.location}</span>
        </ContactRow>
      </ul>
      <p className="copy-status" role="status" aria-live="polite">{status}</p>
      <div className="contact-card-foot">
        <ResumeLink label="Download resume (PDF)" primary />
      </div>
    </div>
  )
}
