'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
}

/** Syncs GSAP ScrollTrigger with Lenis on each scroll frame. */
function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update()
  })
  return null
}

/**
 * Wraps the page with Lenis smooth scrolling.
 * Respects `prefers-reduced-motion` — falls back to native scroll when active.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // SSR / reduced-motion: native scroll, no wrapper
  if (reducedMotion === null || reducedMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        smoothWheel: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}
