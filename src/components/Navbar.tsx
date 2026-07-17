import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import WrenchIcon from './WrenchIcon'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-white">
          <WrenchIcon className="h-7 w-7 text-orange" />
          <span className="font-heading text-lg font-bold">Apex Plumbing Co.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-text transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15125550192"
            className="flex h-11 items-center rounded-md bg-orange px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-orange-hover"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-white md:hidden"
        >
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-200 ease-in-out md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-navy-light px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-11 items-center text-sm font-medium text-gray-text transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15125550192"
            className="mt-2 flex h-11 items-center justify-center rounded-md bg-orange px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-orange-hover"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
