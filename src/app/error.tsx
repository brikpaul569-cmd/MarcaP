'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-deep-space flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-6xl font-bold text-neon-cyan">500</h1>
      <p className="text-light-grey/60 text-lg text-center max-w-md">
        Something went wrong on our end. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-neon-cyan text-deep-space font-semibold rounded-lg hover:bg-neon-cyan/90 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
