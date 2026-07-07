import { Container } from '@/components/common/Container'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-space">
      <section className="flex min-h-screen items-center justify-center">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-[0.05em] text-light-grey sm:text-5xl md:text-6xl lg:text-7xl">
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
          <p className="mt-6 font-display text-xl tracking-wide text-light-grey/60 md:text-2xl">
            Both, obsessively.
          </p>
          <div className="mt-16 animate-pulse-slow">
            <div className="mx-auto h-10 w-6 rounded-full border-2 border-neon-cyan">
              <div className="mx-auto mt-2 h-2 w-1 animate-float rounded-full bg-neon-cyan" />
            </div>
            <p className="mt-3 font-mono text-xs tracking-[0.1em] text-neon-cyan">
              EXPLORE MY WORLD
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}
