import { StarIcon } from '@heroicons/react/24/solid'

const REVIEWS = [
  {
    quote:
      'Called at 7am for a burst pipe — they were here by 9am. Absolute lifesavers. Will never use another plumber.',
    name: 'James R.',
    neighborhood: 'South Austin',
  },
  {
    quote:
      'Honest pricing, no upselling, clean work. Fixed our water heater in under 2 hours. Highly recommend.',
    name: 'Maria T.',
    neighborhood: 'Round Rock',
  },
  {
    quote: "Been using Apex for 3 years now. They're the only plumbers I trust to give me straight answers.",
    name: 'David K.',
    neighborhood: 'Cedar Park',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-light-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
          What Our Customers Say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REVIEWS.map(({ quote, name, neighborhood }) => (
            <div key={name} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-orange" />
                ))}
              </div>
              <p className="mt-4 text-navy">"{quote}"</p>
              <p className="mt-4 font-bold text-navy">{name}</p>
              <p className="text-sm text-gray-text">{neighborhood}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
