'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { easing } from '@/lib/animations/easing-functions'
import { useParallax } from '@/hooks/useParallax'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useParallax({
    triggerRef: bgRef,
    translateY: [-20, 20],
  })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: easing.entrance } })

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
      })
        .from(
          subtitleRef.current,
          { opacity: 0, duration: 0.8 },
          '-=0.3',
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.6 },
          '-=0.2',
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-space"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#00D9FF] to-[#0088FF] bg-clip-text text-transparent">
            Brikman Paul Morales
          </span>
          <br />
          <span className="text-light-grey">
            Software Architect &amp; Electronic Composer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 font-display text-xl tracking-wide text-light-grey/60 md:text-2xl"
        >
          Both, obsessively.
        </p>

        <div ref={scrollIndicatorRef} className="mt-16">
          <div className="mx-auto h-10 w-6 animate-pulse-slow rounded-full border-2 border-neon-cyan">
            <div className="mx-auto mt-2 h-2 w-1 animate-float rounded-full bg-neon-cyan" />
          </div>
          <p className="mt-3 font-mono text-xs tracking-[0.1em] text-neon-cyan">
            EXPLORE MY WORLD
          </p>
        </div>
      </div>
    </section>
  )
}
