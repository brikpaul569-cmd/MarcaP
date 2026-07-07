'use client'

import type { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ── Props ─────────────────────────────────────────── */

interface ProjectCardBaseProps {
  title: string
  description: string
  link?: string
  image?: string
  index: number
}

interface SoftwareCardProps extends ProjectCardBaseProps {
  type: 'software'
  technologies: string[]
}

interface MusicCardProps extends ProjectCardBaseProps {
  type: 'music'
  genre: string
  bpm: number
  scaleKey: string
}

type ProjectCardProps = SoftwareCardProps | MusicCardProps

/* ── Component ─────────────────────────────────────── */

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, description, link, image, index, type } = props

  const imageArea = type === 'software' ? (
    <div className="aspect-video w-full bg-gradient-to-br from-neon-cyan/20 to-deep-magenta/20" />
  ) : (
    <div className="aspect-video w-full bg-gradient-to-br from-warm-amber/20 to-neon-cyan/20" />
  )

  const metadataRow: ReactNode = type === 'software' ? (
    <div className="flex flex-wrap gap-2">
      {props.technologies.map((tech) => (
        <span
          key={tech}
          className="border border-neon-cyan/30 text-neon-cyan text-xs rounded-full px-2 py-0.5"
        >
          {tech}
        </span>
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap gap-3 text-xs text-warm-amber">
      <span>{props.genre}</span>
      <span>{props.bpm} BPM</span>
      <span>Key: {props.scaleKey}</span>
    </div>
  )

  return (
    <article
      className={cn(
        'group flex flex-col bg-dark-grey/50 border border-light-grey/10 rounded-lg overflow-hidden',
        'transition-transform duration-300 hover:scale-[1.03]',
        'hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]',
      )}
      style={{ '--card-index': index } as React.CSSProperties}
    >
      {/* Image area */}
      {imageArea}

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold tracking-wide text-light-grey">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-light-grey/80 line-clamp-3">
          {description}
        </p>

        {metadataRow}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-xs text-neon-cyan/70 transition-colors duration-200 hover:text-neon-cyan"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            View project
          </a>
        )}
      </div>
    </article>
  )
}
