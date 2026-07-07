'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/common/Container'
import { easing } from '@/lib/animations/easing-functions'
import rawTimelineData from '@/content/timeline.json'
import type { TimelineEvent } from '@/types/content'

const timelineData = rawTimelineData as TimelineEvent[]

gsap.registerPlugin(ScrollTrigger)

const typeColors: Record<TimelineEvent['type'], string> = {
  code: 'text-neon-cyan border-neon-cyan',
  music: 'text-warm-amber border-warm-amber',
  ai: 'text-pulsing-magenta border-pulsing-magenta',
  milestone: 'text-accent-blue border-accent-blue',
}

const typeLabels: Record<TimelineEvent['type'], string> = {
  code: 'CODE',
  music: 'MUSIC',
  ai: 'AI',
  milestone: 'MILESTONE',
}

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const pointsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8, ease: easing.cinematic })
        .from(lineRef.current, { scaleX: 0, transformOrigin: 'left center', duration: 1, ease: easing.slowEntry })
        .from(pointsRef.current?.children ?? [], {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: easing.entrance,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="timeline"
      aria-label="Timeline"
      className="relative py-32"
    >
      <Container>
        <p className="font-mono text-sm tracking-[0.1em] text-neon-cyan">
          02 — TIMELINE
        </p>
        <h2
          ref={titleRef}
          className="mt-4 font-display text-3xl font-bold tracking-[0.05em] text-light-grey md:text-4xl lg:text-5xl"
        >
          The Evolution
        </h2>

        <div ref={lineRef} className="relative mt-16 h-0.5 w-full bg-dark-grey">
          <div className="absolute inset-0 bg-gradient-to-r from-warm-amber via-neon-cyan to-pulsing-magenta opacity-60" />
        </div>

        <div
          ref={pointsRef}
          className="relative mt-[-5px] grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-7"
        >
          {timelineData.map((event) => (
            <div
              key={event.year}
              className="group relative pt-8"
            >
              <div className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-[7px] rounded-full border-2 border-neon-cyan bg-deep-space group-hover:shadow-[0_0_12px_rgba(0,217,255,0.6)]" />
              <span className="font-mono text-xs tracking-[0.1em] text-neon-cyan">
                {event.year}
              </span>
              <h3 className="mt-2 font-display text-sm font-bold text-light-grey">
                {event.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-light-grey/60">
                {event.description}
              </p>
              <span
                className={`mt-2 inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.05em] ${typeColors[event.type]}`}
              >
                {typeLabels[event.type]}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
