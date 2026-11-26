import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-0 overflow-hidden rounded-none border-t border-zinc-800/80 bg-[#070707] text-white shadow-2xl">
      {/* Main Content Section - Centered */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 items-start">
          {/* 1. Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group no-underline">
              <div className="relative h-16 sm:h-20 w-48 sm:w-60 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <Image
                  src="/logo-datasphere.jpeg"
                  alt="DataSphere Consulting Ltd"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="max-w-xs text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              DataSphere Consulting Ltd is a Data &amp; AI consultancy. BIGWI HOUSE is its delivery unit, working across the data lifecycle from collection and analysis to model development, evaluation, deployment, monitoring, and advisory.
            </p>
          </div>

          {/* 2. SITEMAP */}
          <div className="lg:col-span-3 space-y-4 lg:pl-4">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1 text-sm font-medium">
              <div className="flex flex-col space-y-2.5">
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
                <Link href="/approach" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Approach
                </Link>
                <Link href="/work" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </div>
              <div className="flex flex-col space-y-2.5">
                <Link href="/insights" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Insights
                </Link>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* 3. INSIGHTS, CONTACT & LEGAL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                INSIGHTS
              </h4>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Publishing is paused until an editorial owner and review process are in place.
              </p>
              <Link href="/insights" className="inline-flex text-xs font-semibold text-teal-300 hover:text-white">
                View publication status
              </Link>
            </div>

            {/* Socials & Legal */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-zinc-900">
              <div className="space-y-2">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  CONTACT
                </span>
                <a href="mailto:contact@datasphere.rw" className="text-xs text-zinc-400 hover:text-white">
                  contact@datasphere.rw
                </a>
              </div>

              {/* Legal & Copyright */}
              <div className="space-y-1 sm:text-right">
                <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium sm:justify-end">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <span>&bull;</span>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Consultation
                  </Link>
                </div>
                <p className="text-[11px] font-sans text-zinc-500 font-normal">
                  &copy; {currentYear} DataSphere Consulting Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark at the Bottom - Absolute Ambient Layer */}
      <div className="absolute inset-x-0 bottom-0 select-none pointer-events-none overflow-hidden leading-none text-center z-0">
        <div className="font-display font-black tracking-tighter uppercase text-white/[0.03] text-[14vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] leading-[0.75] translate-y-[20%]">
          DATASPHERE
        </div>
      </div>
    </footer>
  )
}
