import type { Profile } from '../types'

const base = import.meta.env.BASE_URL

export const profile: Profile = {
  name: 'Kokob Haile',
  firstName: 'Kokob',
  lastName: 'Haile',
  role: 'Application Development student in Seattle. I build web apps with JavaScript, TypeScript and React, and I am moving toward full-stack development.',
  goal: 'I am looking for a software development internship or a junior developer role.',
  meta: [
    { label: 'School', value: 'North Seattle College, BAS' },
    { label: 'Graduating', value: 'August 2027' },
    { label: 'Location', value: 'Seattle area or remote' },
  ],
  about: {
    lead: "Hi, I'm Kokob. I study Application Development (BAS) at North Seattle College.",
    paragraphs: [
      'I work mostly with JavaScript and TypeScript, and I use React for the front end. Now I am moving toward full-stack work. In my classes I also build small back ends with Node.js and Express, and AI tools with Python.',
      'I learn best by working on real code. I contribute to OpenEnergyDashboard, an open-source project. This work began with my CodeDay Labs internship in summer 2026. In college I also work on a team website with other students, with pull requests and code review.',
      'I am looking for a software development internship or a junior developer role in the Seattle area or remote.',
    ],
  },
  linkedin: { href: 'https://www.linkedin.com/in/kokob-haile/', display: 'linkedin.com/in/kokob-haile' },
  github: { href: 'https://github.com/koki-star', display: 'github.com/koki-star' },
  location: 'Seattle, WA · open to remote',
  resume: {
    href: `${base}Kokob-Haile-Resume.pdf`,
    fileName: 'Kokob-Haile-Resume.pdf',
    label: 'PDF · 1 page',
    text: 'One page with my education, open-source work and projects. PDF, updated November 2026.',
  },
  photo: {
    jpg: `${base}photo.jpg`,
    webp: `${base}photo.webp`,
    alt: 'Photo of Kokob Haile',
    width: 720,
    height: 720,
  },
  contactLead:
    'Do you have an internship or a junior developer role? I would like to hear from you. Send me an email or a message on LinkedIn.',
  // Reversed text, then base64. See src/lib/email.ts.
  emailParts: { user: 'dmVkLmVsaWFoLmJva29r', domain: 'bW9jLmxpYW1n' },
}
