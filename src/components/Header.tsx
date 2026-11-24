import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'
import './Header.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume', className: 'nav-resume' },
  { id: 'contact', label: 'Contact' },
] as const

const NAV_IDS = NAV.map((item) => item.id)

export function Header() {
  const active = useActiveSection(NAV_IDS)
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="Main">
          <ul>
            {NAV.map((item) => (
              <li key={item.id} className={'className' in item ? item.className : undefined}>
                <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
