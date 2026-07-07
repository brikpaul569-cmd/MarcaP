'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { easing } from '@/lib/animations/easing-functions'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-space"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="font-display text-4xl font-bold tracking-[0.05em] text-light-grey sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Software Architect
          <br />
          <span className="bg-gradient-to-r from-neon-cyan to-pulsing-magenta bg-clip-text text-transparent">
            by day.
          </span>
        </h1>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-[0.05em] text-light-grey sm:text-5xl md:text-6xl lg:text-7xl">
          Electronic Composer
          <br />
          <span className="bg-gradient-to-r from-warm-amber to-neon-cyan bg-clip-text text-transparent">
            by night.
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
