/** A piece of rich text: plain text, or a short code span. */
export type RichText = ReadonlyArray<string | { code: string }>

export interface Link {
  label: string
  href: string
  /** Extra words for screen readers, for example " on GitHub". */
  srLabel?: string
}

export interface Project {
  id: string
  title: string
  /** The main link. The whole card opens it. */
  href: string
  summary: string
  detailLabel: string
  detail: RichText
  tags: string[]
  links: Link[]
  /** A real screenshot of the project, shown at the top of the card. */
  image?: { src: string; alt: string }
  /** Wide cards take the full row on tablet and desktop. */
  wide?: boolean
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface TimelineEntry {
  id: string
  when: string
  title: string
  where: string
  text: string
  type: 'work' | 'education'
  links?: Link[]
}

export interface MetaItem {
  label: string
  value: string
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  role: string
  goal: string
  meta: MetaItem[]
  about: { lead: string; paragraphs: string[] }
  linkedin: { href: string; display: string }
  github: { href: string; display: string }
  location: string
  resume: { href: string; fileName: string; label: string; text: string }
  photo: { jpg: string; webp: string; alt: string; width: number; height: number }
  contactLead: string
  /** The email address is stored in encoded parts and built at runtime. */
  emailParts: { user: string; domain: string }
}

export type Theme = 'dark' | 'light'
