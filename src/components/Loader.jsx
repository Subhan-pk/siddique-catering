export default function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream" role="status" aria-label="Loading">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon font-display text-xl font-bold text-gold">
          S
        </span>
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-maroon">
        Siddique Sons
      </p>
    </div>
  );
}
