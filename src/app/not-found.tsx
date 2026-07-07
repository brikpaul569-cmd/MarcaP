import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-space flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-6xl font-bold text-neon-cyan">404</h1>
      <p className="text-light-grey/60 text-lg text-center max-w-md">
        This page doesn&apos;t exist. The signal was lost.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-neon-cyan text-deep-space font-semibold rounded-lg hover:bg-neon-cyan/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
