import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './icons'

/** A small switch with a moon and a sun. Dark is the default. The choice is saved in localStorage. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      aria-pressed={isLight}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <MoonIcon />
        <SunIcon />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  )
}
