import { profile } from '../data/profile'

/** A button that downloads the resume PDF. */
export function ResumeLink({ label, primary = false }: { label: string; primary?: boolean }) {
  return (
    <a
      className={primary ? 'btn btn-primary' : 'btn'}
      href={profile.resume.href}
      download={profile.resume.fileName}
    >
      {label}
    </a>
  )
}
