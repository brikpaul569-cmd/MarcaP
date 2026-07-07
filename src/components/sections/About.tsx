'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from '@/components/common/Container'
import { easing } from '@/lib/animations/easing-functions'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: easing.cinematic },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8 })
        .from(bodyRef.current?.children ?? [], {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32"
    >
      <Container>
        <p className="font-mono text-sm tracking-[0.1em] text-neon-cyan">
          01 — ABOUT
        </p>
        <h2
          ref={titleRef}
          className="mt-4 font-display text-3xl font-bold tracking-[0.05em] text-light-grey md:text-4xl lg:text-5xl"
        >
          Who is Brikman Paul Morales?
        </h2>
        <div
          ref={bodyRef}
          className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-light-grey/80 md:text-lg"
        >
          <p>
            I have come to realize that architecture lives everywhere. In code.
            In composition. In the spaces between moments.
          </p>
          <p>
            By day, I architect distributed systems — Spring Boot backends,
            Next.js frontends, AI pipelines that process data at scale. By night,
            I architect soundscapes — Progressive House tracks where every synth
            layer and drum hit is a deliberate structural choice.
          </p>
          <div className="border-l-4 border-neon-cyan bg-dark-grey/50 py-4 pl-6">
            <p className="font-display text-lg italic tracking-wide text-light-grey">
              &ldquo;Code and music are not two different disciplines. They are the
              same instinct — structuring chaos into something worth experiencing.&rdquo;
            </p>
          </div>
          <p>
            This site is the intersection. Every section is designed to feel like
            a track building up. Every transition is a drop. Every interaction is
            a note in a larger composition.
          </p>
        </div>
      </Container>
    </section>
  )
}
