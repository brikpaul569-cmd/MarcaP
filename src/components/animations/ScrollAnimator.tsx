'use client'

import { useRef, type ReactNode, type ElementType } from 'react'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'

interface ScrollAnimatorProps {
  as?: ElementType
  className?: string
  stagger?: number
  start?: string
  children: ReactNode
}

export function ScrollAnimator({
  as: Tag = 'div',
  className,
  stagger,
  start,
  children,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useScrollTrigger({
    triggerRef: ref,
    start,
    animation: stagger
      ? { y: 30, opacity: 0, duration: 0.6, stagger }
      : undefined,
    targets: stagger ? childrenRef : undefined,
  })

  return (
    <Tag ref={ref} className={className}>
      {stagger ? <div ref={childrenRef}>{children}</div> : children}
    </Tag>
  )
}
