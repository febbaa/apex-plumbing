import { useForm } from '@formspree/react'
import { PhoneIcon } from '@heroicons/react/24/solid'

const inputClasses =
  'w-full rounded-md bg-navy-light px-4 py-3 text-white placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-orange'

export default function Contact() {
  const [state, submit] = useForm('xrenpqod')

  return (
    <section id="contact" className="bg-navy px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-gray-text">
            Fill out the form or call us directly. We respond within the hour.
          </p>

          <a
            href="tel:+15125550192"
            className="mt-8 flex items-center gap-3 text-2xl font-bold text-white transition-colors duration-150 hover:text-orange"
          >
            <PhoneIcon className="h-7 w-7 text-orange" aria-hidden="true" />
            (512) 555-0192
          </a>

          <p className="mt-4 text-sm text-gray-text">Mon–Sat 7am–8pm | Emergency: 24/7</p>
        </div>

        <div>
          {state.succeeded ? (
            <p className="rounded-md bg-navy-light p-6 text-white">
              Thanks! We'll call you within the hour.
            </p>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className={inputClasses}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className={inputClasses}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="h-11 w-full rounded-md bg-orange text-sm font-medium text-white transition-colors duration-150 hover:bg-orange-hover disabled:opacity-60"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
