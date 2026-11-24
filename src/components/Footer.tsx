import { profile } from '../data/profile'
import { EmailLink } from './EmailLink'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React and TypeScript</p>
        <p className="footer-links">
          <EmailLink>Email</EmailLink>
          <a href={profile.linkedin.href} rel="noopener">LinkedIn</a>
          <a href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  )
}
