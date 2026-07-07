'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/common/Container'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { easing } from '@/lib/animations/easing-functions'
import releases from '@/content/music/releases.json'
import type { MusicRelease } from '@/types/content'

const typedReleases = releases as MusicRelease[]

gsap.registerPlugin(ScrollTrigger)

export function MusicProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const hasReleases = typedReleases.length > 0

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: easing.cinematic },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8 })

      if (gridRef.current?.children && gridRef.current.children.length > 0) {
        tl.from(gridRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: easing.entrance,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="music"
      aria-label="Music Releases"
      className="relative py-32"
    >
      <Container>
        <p className="font-mono text-sm tracking-[0.1em] text-neon-cyan">
          04 — MUSIC
        </p>
        <h2
          ref={titleRef}
          className="mt-4 font-display text-3xl font-bold tracking-[0.05em] text-light-grey md:text-4xl lg:text-5xl"
        >
          Sounds I Make
        </h2>

        {hasReleases ? (
          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {typedReleases.map((release, index) => (
              <ProjectCard
                key={release.id}
                type="music"
                title={release.title}
                description={`Released ${release.releaseDate}`}
                genre={release.genre}
                bpm={release.bpm}
                scaleKey={release.key}
                link={release.spotifyUrl}
                image={release.artwork}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div ref={gridRef} className="mt-16">
            <p className="text-center text-light-grey/50 py-16 font-mono text-sm">
              No releases yet. Stay tuned.
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}
