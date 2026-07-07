export default function Loading() {
  return (
    <div className="min-h-screen bg-deep-space flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
        <p className="text-light-grey/60 text-sm">Loading...</p>
      </div>
    </div>
  )
}
