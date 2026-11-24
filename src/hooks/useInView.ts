import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/**
 * Fade-in on scroll. Returns a ref for the element and a class name.
 * The element becomes visible one time, when it scrolls into view.
 * With reduced motion (or no IntersectionObserver) it is visible at once.
 */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (visible || !el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return { ref, revealClass: visible ? 'reveal is-visible' : 'reveal' }
}
