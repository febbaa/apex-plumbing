import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

const TRUST_POINTS = [
  {
    icon: ShieldCheckIcon,
    title: 'Licensed & Fully Insured',
    description: 'Work done to code, every time',
  },
  {
    icon: ClockIcon,
    title: 'Same-Day Service',
    description: 'We show up when you need us, not next week',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Upfront Pricing',
    description: 'You get the full quote before we start',
  },
  {
    icon: MapPinIcon,
    title: '15+ Years in Austin',
    description: 'Local experts who know Austin homes',
  },
]

export default function WhyUs() {
  const fadeIn = useScrollFadeIn<HTMLElement>()

  return (
    <section
      id="why-us"
      ref={fadeIn.ref}
      style={fadeIn.style}
      className="bg-navy px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-white sm:text-4xl">
          Why Austin Homeowners Trust Apex
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {TRUST_POINTS.map(({ icon: Icon, title, description }) => (
            <div key={title}>
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
