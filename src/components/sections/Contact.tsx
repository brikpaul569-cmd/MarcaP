'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from '@/components/common/Container'
import { easing } from '@/lib/animations/easing-functions'
import { contactSchema, type ContactFormData, type ContactApiResponse } from '@/lib/validations/contact'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: easing.cinematic },
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      tl.from(titleRef.current, { y: 40, opacity: 0, duration: 0.8 }).from(
        formRef.current,
        { y: 30, opacity: 0, duration: 0.6 },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json: ContactApiResponse = await res.json()
      if (json.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
        reset()
      } else {
        setSubmitStatus({ type: 'error', message: json.error || 'Something went wrong.' })
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-32">
      <Container>
        <p className="font-mono text-sm tracking-[0.1em] text-neon-cyan">05 — CONTACT</p>
        <h2
          ref={titleRef}
          className="mt-4 font-display text-3xl font-bold tracking-[0.05em] text-light-grey md:text-4xl lg:text-5xl"
        >
          Get In Touch
        </h2>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="mt-16 max-w-xl space-y-6" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-light-grey/60 mb-2">
              Name
            </label>
            <input
              id="name"
              {...register('name')}
              className="w-full bg-dark-grey/50 border border-light-grey/10 rounded-lg px-4 py-3 text-light-grey font-mono text-sm focus:outline-none focus:border-neon-cyan/50 transition-colors"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400 font-mono">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-light-grey/60 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full bg-dark-grey/50 border border-light-grey/10 rounded-lg px-4 py-3 text-light-grey font-mono text-sm focus:outline-none focus:border-neon-cyan/50 transition-colors"
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-light-grey/60 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message')}
              className="w-full bg-dark-grey/50 border border-light-grey/10 rounded-lg px-4 py-3 text-light-grey font-mono text-sm focus:outline-none focus:border-neon-cyan/50 transition-colors resize-y"
              placeholder="Your message..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400 font-mono">{errors.message.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono text-sm rounded-lg px-6 py-3 transition-all duration-300 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status */}
          {submitStatus && (
            <div
              className={`p-4 rounded-lg font-mono text-sm ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}
