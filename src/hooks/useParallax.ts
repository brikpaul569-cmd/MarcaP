'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseParallaxOptions {
  triggerRef: React.RefObject<HTMLElement | null>
  start?: string
  end?: string
  translateY?: [number, number]
  ease?: string
}

export function useParallax({
  triggerRef,
  start = 'top bottom',
  end = 'bottom top',
  translateY = [-30, 30],
  ease = 'none',
}: UseParallaxOptions) {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        triggerRef.current,
        { y: translateY[0] },
        {
          y: translateY[1],
          ease,
          scrollTrigger: {
            trigger: triggerRef.current,
            start,
            end,
            scrub: true,
          },
        },
      )
    }, triggerRef)

    return () => ctx.revert()
  }, [triggerRef, start, end, translateY, ease])
}
