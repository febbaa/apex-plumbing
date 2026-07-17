import { PhoneIcon } from '@heroicons/react/24/solid'
import WrenchIcon from './WrenchIcon'

export default function Footer() {
  return (
    <footer className="border-t border-navy-light bg-navy px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <WrenchIcon className="h-6 w-6 shrink-0 text-orange" />
          <div>
            <p className="font-heading font-bold text-white">Apex Plumbing Co.</p>
            <p className="text-sm text-gray-text">© 2025 Apex Plumbing Co. All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 sm:items-end">
          <a href="tel:+15125550192" className="flex items-center gap-2 font-bold text-white">
            <PhoneIcon className="h-5 w-5 text-orange" aria-hidden="true" />
            (512) 555-0192
          </a>
          <p className="text-sm text-gray-text">Licensed & Insured | Austin, TX</p>
        </div>
      </div>
    </footer>
  )
}
