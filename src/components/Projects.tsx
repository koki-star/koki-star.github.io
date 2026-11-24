import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'
import './Projects.css'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      note="Selected web apps and open-source work. Each repository includes a README and source code."
    >
      <div className="section-body">
        <ol className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
