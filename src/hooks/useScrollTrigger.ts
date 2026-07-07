'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseScrollTriggerOptions {
  triggerRef: React.RefObject<HTMLElement | null>
  start?: string
  animation?: gsap.TweenVars
  targets?: React.RefObject<HTMLElement | null>
}

export function useScrollTrigger({
  triggerRef,
  start = 'top 75%',
  animation = { y: 30, opacity: 0, duration: 0.6 },
  targets,
}: UseScrollTriggerOptions) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    // Skip if user prefers reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start,
        },
      })
      tl.from(targets?.current ?? triggerRef.current, animation)
      timelineRef.current = tl
    }, triggerRef)

    return () => {
      ctx.revert()
      timelineRef.current = null
    }
  }, [triggerRef, start, animation, targets])

  return { timelineRef }
}
