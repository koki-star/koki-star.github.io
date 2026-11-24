import { skillGroups } from '../data/skills'
import { useInView } from '../hooks/useInView'
import type { SkillGroup as SkillGroupData } from '../types'
import { Section } from './Section'
import { SkillTag } from './SkillTag'
import './Skills.css'

function SkillGroup({ group }: { group: SkillGroupData }) {
  const { ref, revealClass } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`skill-group ${revealClass}`}>
      <h3 className="label">{group.label}</h3>
      <ul className="tags tags-lg">
        {group.skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      note="Tools I have used in real projects. Each one is in my code on GitHub."
    >
      <div className="section-body skills">
        {skillGroups.map((group) => (
          <SkillGroup key={group.label} group={group} />
        ))}
      </div>
    </Section>
  )
}
