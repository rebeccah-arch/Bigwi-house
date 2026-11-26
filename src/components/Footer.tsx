import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, MapPin } from '@/components/Icons'

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
    <footer className="border-t border-teal-500/30 bg-[#071b3a] text-white">
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
          <p className="max-w-md text-sm leading-relaxed text-slate-200">
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
                    className="text-sm text-slate-200 transition-colors hover:text-teal-300 hover:underline sm:text-base"
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
          <address className="space-y-4 not-italic text-sm leading-relaxed text-slate-200 sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
              <span>NM 155, Musanze, Rwanda</span>
            </div>
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-teal-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.06 8.94a16 16 0 0 0 6 6l1.32-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="flex flex-col items-start">
                <a className="hover:text-teal-300 hover:underline" href="tel:+250780492224">+250 780 492 224</a>
                <a className="hover:text-teal-300 hover:underline" href="tel:+14047204547">+1 (404) 720 4547</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
              <a className="break-all hover:text-teal-300 hover:underline" href="mailto:datasphere250@gmail.com">
                datasphere250@gmail.com
              </a>
            </div>
          </address>
          <div className="mt-6 space-y-4">
            <a
              href="https://wa.me/250780492224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.34.14 11.91c0 2.1.55 4.15 1.6 5.96L.05 24l6.3-1.65a11.97 11.97 0 0 0 5.72 1.46h.01c6.57 0 11.93-5.35 11.93-11.92 0-3.18-1.24-6.17-3.49-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.85 9.85 0 0 1-1.52-5.27c0-5.48 4.47-9.94 9.96-9.94a9.87 9.87 0 0 1 7.03 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.47 9.94-9.99 9.94Zm5.46-7.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.28-.2-.58-.35Z" />
              </svg>
              Chat on WhatsApp
            </a>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-300">Follow:</span>
              <a
                href="https://www.linkedin.com/in/eric-niyigena-business-analytics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-600 bg-slate-800/70 text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-teal-500/20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-4 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>&copy; {currentYear} DataSphere Consulting Ltd. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-teal-300 hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-teal-300 hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
