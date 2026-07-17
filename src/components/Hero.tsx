const TRUST_STATS = ['500+ Jobs Completed', '15+ Years Experience', '4.9★ Average Rating']

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 0% 0%, #1a3a5c, transparent)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <span className="inline-flex items-center rounded-full bg-navy-light px-4 py-1.5 text-sm font-medium text-white">
          ⭐ Austin's #1 Rated Plumber
        </span>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          Your Plumbing Emergency Ends Here
        </h1>

        <p className="mt-5 max-w-xl text-lg text-gray-text">
          Licensed & insured plumbers serving Austin, TX. Same-day service, upfront pricing, no
          surprises.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
          <a
            href="tel:+15125550192"
            className="flex h-11 w-full items-center justify-center rounded-md bg-orange px-6 text-sm font-medium text-white transition-colors duration-150 hover:bg-orange-hover sm:w-auto"
          >
            Call (512) 555-0192
          </a>
          <a
            href="#contact"
            className="flex h-11 w-full items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white transition-colors duration-150 hover:bg-white hover:text-navy sm:w-auto"
          >
            Get Free Quote
          </a>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 text-sm font-medium text-gray-text sm:flex-row sm:gap-8">
          {TRUST_STATS.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
