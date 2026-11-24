import type { Project, RichText } from '../types'
import { useInView } from '../hooks/useInView'
import { LinkRow } from './ExternalLink'

function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.map((part, i) => (typeof part === 'string' ? part : <code key={i}>{part.code}</code>))}
    </>
  )
}

/** One project card. The title link covers the whole card, so the card is clickable. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, revealClass } = useInView<HTMLLIElement>()
  const classes = ['project', project.wide ? 'project-wide' : '', project.image ? 'has-media' : '', revealClass].filter(Boolean).join(' ')
  return (
    <li ref={ref} className={classes}>
      {project.image && (
        <div className="project-media">
          <img src={project.image.src} alt={project.image.alt} width={1200} height={750} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="project-top">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>
        <a className="card-link" href={project.href} target="_blank" rel="noopener noreferrer">
          {project.title}
          <span className="card-arrow" aria-hidden="true">↗</span>
        </a>
      </h3>
      <p>{project.summary}</p>
      <p className="project-built">
        <span className="label">{project.detailLabel}</span> <Rich text={project.detail} />
      </p>
      <ul className="tags" aria-label="Tech used">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <LinkRow links={project.links} />
    </li>
  )
}
