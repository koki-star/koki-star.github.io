import type { TimelineEntry } from '../types'

export const experience: TimelineEntry[] = [
  {
    id: 'codeday',
    when: 'Jun - Aug 2026',
    title: 'Open-source intern, CodeDay Labs',
    where: 'Project: OpenEnergyDashboard',
    text: 'I worked on development, testing and documentation for OpenEnergyDashboard. I kept contributing after the internship ended. My pull request #1698 was merged in October 2026.',
    type: 'work',
    links: [{ label: 'See PR #1698', href: 'https://github.com/OpenEnergyDashboard/OED/pull/1698', srLabel: ' on OpenEnergyDashboard' }],
  },
  {
    id: 'nsc-dev-expo',
    when: '2026 - Now',
    title: 'Student developer, NSC Dev Expo Site',
    where: 'North Seattle College team project',
    text: 'I work with a student team and build components from our Figma design. Four of my pull requests are merged so far.',
    type: 'work',
  },
  {
    id: 'bas',
    when: '2026 - Aug 2027',
    title: 'Bachelor of Applied Science, Application Development',
    where: 'North Seattle College · Seattle, WA · Expected graduation August 2027',
    text: 'This fall I take classes in artificial intelligence, application architecture and software testing.',
    type: 'education',
  },
  {
    id: 'aws',
    when: 'Jan - Feb 2026',
    title: 'AWS Academy Graduate',
    where: 'Amazon Web Services',
    text: 'Machine Learning Foundations (January 2026) and Machine Learning for Natural Language Processing (February 2026).',
    type: 'education',
  },
]
