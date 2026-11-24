import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { ContactCard } from './ContactCard'
import { Section } from './Section'
import './Contact.css'

export function Contact() {
  const { ref, revealClass } = useInView<HTMLParagraphElement>()
  return (
    <Section id="contact" num="06" title="Contact" className="section-contact">
      <div className="section-body">
        <p ref={ref} className={`contact-lead ${revealClass}`}>{profile.contactLead}</p>
        <ContactCard />
      </div>
    </Section>
  )
}
