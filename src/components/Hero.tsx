import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'
import { Photo } from './Photo'
import { ResumeLink } from './ResumeLink'
import './Hero.css'

/**
 * One word of the hero name, split into letters so each can rise in on load.
 * Screen readers read the full name from the hidden span instead.
 */
function AnimatedWord({ word, start }: { word: string; start: number }) {
  return (
    <span className="name-word" aria-hidden="true">
      {[...word].map((letter, i) => (
        <span key={i} className="name-letter" style={{ '--i': start + i } as CSSProperties}>
          {letter}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-name">
            <span className="sr-only">{profile.name}</span>
            <AnimatedWord word={profile.firstName} start={0} />
            <br />
            <AnimatedWord word={profile.lastName} start={profile.firstName.length} />
          </h1>

          <p className="hero-role">{profile.role}</p>
          <p className="hero-goal">{profile.goal}</p>

          <dl className="hero-meta">
            {profile.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">See my work</a>
            <ResumeLink label="Resume (PDF)" />
            <div className="hero-social">
              <a className="btn btn-icon" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="btn btn-icon" href={profile.github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <Photo />
      </div>
    </section>
  )
}
