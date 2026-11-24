import { useCallback, useEffect, useRef, useState } from 'react'
import type { Theme } from '../types'
import { prefersReducedMotion } from '../lib/motion'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#121310', light: '#f3f1ea' }

/** The inline script in index.html sets data-theme before the first paint. React reads it from there. */
function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    if (!prefersReducedMotion()) {
      // A short class so colors fade during the switch, and not on every hover.
      root.classList.add('theme-anim')
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => root.classList.remove('theme-anim'), 400)
    }
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked. The theme still changes for this visit.
    }
    setTheme(next)
  }, [theme])

  return { theme, toggleTheme }
}
