import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from '@/components/Icons'

const QUICK_LINKS = [
  [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  [
    { href: '/about', label: 'About Us' },
    { href: '/work', label: 'Projects' },
  ],
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#23449e] text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-12 sm:px-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.4fr_1.2fr_1fr] lg:gap-16 lg:px-12 lg:py-14">
        <div className="space-y-5">
          <Link href="/" aria-label="DataSphere Consulting Ltd home" className="inline-block">
            <div className="relative h-20 w-56">
              <Image
                src="/logo-datasphere-light.png"
                alt="DataSphere Consulting Ltd"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-blue-100">
            DataSphere Consulting Ltd is a Data &amp; AI consultancy, with BIGWI HOUSE as its delivery unit. We work across the data lifecycle, from collection and analysis to model development, deployment, and advisory.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="mb-5 text-lg font-bold text-white">Quick Links</h2>
          <div className="grid grid-cols-2 gap-6">
            {QUICK_LINKS.map((column, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                {column.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-blue-100 transition-colors hover:text-white hover:underline sm:text-base"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>

        <section aria-labelledby="footer-contact-heading" className="md:col-span-2 lg:col-span-1">
          <h2 id="footer-contact-heading" className="mb-5 text-lg font-bold text-white">Contact Us</h2>
          <address className="space-y-4 not-italic text-sm leading-relaxed text-blue-100 sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
              <span>NM 155, Musanze, Rwanda</span>
            </div>
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-sky-300">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.06 8.94a16 16 0 0 0 6 6l1.32-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="flex flex-col items-start">
                <a className="hover:text-white hover:underline" href="tel:+250780492224">+250 780 492 224</a>
                <a className="hover:text-white hover:underline" href="tel:+14047204547">+1 (404) 720 4547</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
              <a className="break-all hover:text-white hover:underline" href="mailto:datasphere250@gmail.com">
                datasphere250@gmail.com
              </a>
            </div>
          </address>
        </section>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-4 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>&copy; {currentYear} DataSphere Consulting Ltd. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
