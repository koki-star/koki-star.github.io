import type { Project } from '../types'

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    id: 'oed',
    title: 'OpenEnergyDashboard: confirmation modals',
    href: 'https://github.com/OpenEnergyDashboard/OED/pull/1698',
    summary:
      'OpenEnergyDashboard (OED) is an open-source web app that shows energy use data. I contributed to it through CodeDay Labs.',
    detailLabel: 'My part',
    detail: [
      'My pull request replaced the seven remaining ',
      { code: 'window.confirm' },
      " pop-ups with OED's own confirmation modal. The old behavior, permissions and download logic stay the same. I tested Cancel and Confirm by hand and ran the project's Docker test suite. The PR changed 7 files and was merged in October 2026.",
    ],
    tags: ['React', 'TypeScript', 'Redux', 'Docker'],
    links: [
      { label: 'Merged PR #1698', href: 'https://github.com/OpenEnergyDashboard/OED/pull/1698', srLabel: ' on OpenEnergyDashboard' },
    ],
    wide: true,
  },
  {
    id: 'nsc-dev-expo',
    title: 'NSC Dev Expo Site',
    href: 'https://github.com/SeattleColleges/NSC-Dev-Expo-Site/pulls?q=is%3Apr+author%3Akoki-star+is%3Amerged',
    summary:
      'A student team project at North Seattle College. The repo belongs to Seattle Colleges. Our team builds the site from a Figma design.',
    detailLabel: 'My part',
    detail: [
      'I had four pull requests merged: a refactor of the IndustryStats component with Storybook, a map and contact section, a current student preview section, and a step card for the client framework. Each one is a reusable component with a Storybook story.',
    ],
    tags: ['TypeScript', 'React Native', 'Storybook', 'Git and GitHub'],
    links: [
      {
        label: 'My merged PRs',
        href: 'https://github.com/SeattleColleges/NSC-Dev-Expo-Site/pulls?q=is%3Apr+author%3Akoki-star+is%3Amerged',
        srLabel: ' on NSC Dev Expo Site',
      },
      { label: 'Team repo', href: 'https://github.com/SeattleColleges/NSC-Dev-Expo-Site', srLabel: ' for NSC Dev Expo Site' },
    ],
    wide: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    href: 'https://koki-star.github.io/Weather_App/',
    summary:
      'Type a city name to see city and country search suggestions, a photo of the city, the current weather, the next 24 hours and a 7-day forecast. Seattle loads first.',
    detailLabel: 'How it works',
    detail: [
      'As you type, the app shows city and country search suggestions so you can pick the right place, including cities that share a name. It then calls the Open-Meteo geocoding API to get the city\'s location, and the forecast API for the current weather, the next 24 hours and a 7-day forecast. City photos come from Wikimedia Commons, with a credit line under each photo. It shows a loading state and clear errors for a blank input, an unknown city or a failed request.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    links: [
      { label: 'Live demo', href: 'https://koki-star.github.io/Weather_App/', srLabel: ' of Weather App' },
      { label: 'Code', href: 'https://github.com/koki-star/Weather_App', srLabel: ' for Weather App on GitHub' },
    ],
    image: {
      src: `${base}projects/weather-app.webp`,
      alt: 'Weather App: a city photo of Seattle with the current temperature on top, weather detail cards, a 24-hour forecast and a 7-day forecast.',
    },
  },
  {
    id: 'dog-query-app',
    title: 'Dog Query App',
    href: 'https://koki-star.github.io/dog-query-app/',
    summary: 'A React app to search dog breeds from the Dog API. Pick a breed to see a free-license photo, details, dog facts and groups.',
    detailLabel: 'Focus',
    detail: [
      'The app uses TanStack Query to show loading, empty and error states clearly. As you type a breed name, typo-tolerant search suggestions help you find the right breed. When you pick a breed, you also see a free-license photo, dog facts and groups.',
    ],
    tags: ['React', 'Vite', 'TanStack Query', 'REST API'],
    links: [
      { label: 'Live demo', href: 'https://koki-star.github.io/dog-query-app/', srLabel: ' of Dog Query App' },
      { label: 'Code', href: 'https://github.com/koki-star/dog-query-app', srLabel: ' for Dog Query App on GitHub' },
    ],
    image: {
      src: `${base}projects/dog-query-app.webp`,
      alt: 'Dog Query App: a searchable list of dog breeds, a free-license dog photo with a credit line, breed details, dog facts and groups.',
    },
  },
]
