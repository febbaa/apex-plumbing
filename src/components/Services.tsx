import {
  ArrowPathIcon,
  FireIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'

const SERVICES = [
  {
    icon: ArrowPathIcon,
    title: 'Drain Cleaning',
    description: 'Clogged drains cleared fast, same day',
  },
  {
    icon: FireIcon,
    title: 'Water Heater Repair',
    description: 'All brands, repair or full replacement',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Leak Detection & Repair',
    description: 'Find and fix leaks before they cost more',
  },
  {
    icon: BoltIcon,
    title: 'Emergency Plumbing',
    description: '24/7 rapid response across Austin',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Pipe Installation',
    description: 'New installs and full repipes done right',
  },
  {
    icon: HomeModernIcon,
    title: 'Bathroom Remodeling',
    description: 'Fixture upgrades and full remodels',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-light-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
          What We Fix
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-navy-light p-6 transition-transform duration-150 hover:-translate-y-1"
            >
              <Icon className="h-8 w-8 text-orange" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
