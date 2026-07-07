'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/common/Container'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { easing } from '@/lib/animations/easing-functions'
import projects from '@/content/projects.json'
import type { Project } from '@/types/content'

const typedProjects = projects as Project[]

gsap.registerPlugin(ScrollTrigger)

export function SoftwareProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
        .from(gridRef.current?.children ?? [], {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: easing.entrance,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="software"
      aria-label="Software Projects"
      className="relative py-32"
    >
      <Container>
        <p className="font-mono text-sm tracking-[0.1em] text-neon-cyan">
          03 — SOFTWARE
        </p>
        <h2
          ref={titleRef}
          className="mt-4 font-display text-3xl font-bold tracking-[0.05em] text-light-grey md:text-4xl lg:text-5xl"
        >
          What I Build
        </h2>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {typedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              type="software"
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
