const TRUST_STATS = ['500+ Jobs Completed', '15+ Years Experience', '4.9★ Average Rating']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="inline-flex items-center rounded-full bg-navy-light px-4 py-1.5 text-sm font-medium text-white">
          ⭐ Austin's #1 Rated Plumber
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          Your Plumbing Emergency Ends Here
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-text">
          Licensed & insured plumbers serving Austin, TX. Same-day service, upfront pricing, no
          surprises.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        <div className="mt-12 flex flex-col items-center gap-3 text-sm font-medium text-gray-text sm:flex-row sm:justify-center sm:gap-8">
          {TRUST_STATS.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
