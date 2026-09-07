'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
      setEmail('')
    }, 600)
  }

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-zinc-900 bg-[#070707] text-white">
      {/* Top / Main Navigation Section */}
      <div className="relative z-10 mx-auto max-w-[1400px] border-x border-zinc-900/80 px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* 1. Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group no-underline">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-datasphere.jpeg"
                  alt="DataSphere Consulting Ltd"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-xl font-extrabold tracking-wider text-white group-hover:text-teal-400 transition-colors uppercase">
                  DataSphere
                </span>
                <p className="font-sans text-[11px] text-zinc-400 font-medium tracking-wide">
                  Consulting Ltd
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Enterprise software engineering, scalable cloud architecture &amp; data intelligence for high-growth African enterprises.
            </p>

            <div className="text-[11px] font-mono text-zinc-500 pt-1">
              Kigali, Rwanda &bull; Delivery Across Africa
            </div>
          </div>

          {/* 2. SITEMAP */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              SITEMAP
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1 text-sm font-medium">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
                <Link href="/approach" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Our Story
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <Link href="/work" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Work
                </Link>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* 3. SUBSCRIBE, SOCIALS & LEGAL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Newsletter Subscription Field */}
            <div className="space-y-3">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                SUBSCRIBE
              </h4>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Stay updated on enterprise data architectures, tech whitepapers, and engineering insights.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 rounded-xl border border-teal-500/30 bg-teal-950/40 px-3.5 py-2.5 text-xs text-teal-300">
                  <svg className="h-4 w-4 flex-shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thank you for subscribing to DataSphere briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 pr-28 text-xs text-white placeholder:text-zinc-500 focus:border-teal-500 focus:bg-zinc-900 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-lg bg-white px-3.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-teal-400 hover:text-zinc-950 disabled:opacity-50"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>

            {/* Socials & Legal */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-zinc-900">
              {/* Social Icons */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  CONNECT
                </span>
                <div className="flex items-center gap-2.5">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.88a1.62 1.62 0 1 0 .01 3.24 1.62 1.62 0 0 0-.01-3.24Z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Legal & Copyright */}
              <div className="space-y-1 sm:text-right">
                <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium sm:justify-end">
                  <Link href="/about" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <span>&bull;</span>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </div>
                <p className="text-[11px] font-sans text-zinc-500 font-normal">
                  &copy; {currentYear} DataSphere Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Typography Watermark at the Bottom */}
      <div className="relative w-full select-none pointer-events-none overflow-hidden leading-none text-center">
        <div className="font-display font-black tracking-tighter uppercase text-white/[0.045] text-[15vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] leading-[0.8] translate-y-[10%]">
          DATASPHERE
        </div>
      </div>
    </footer>
  )
}
