'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight
} from '@/components/Icons'

interface HeaderProps {
  onOpenProposal: () => void
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/work', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header({ onOpenProposal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'border-b border-slate-200/80 bg-white/95 backdrop-blur-xl py-2.5 shadow-md dark:border-stone-900/80 dark:bg-stone-950/95 dark:shadow-black/50'
        : isHome
          ? 'border-none bg-transparent py-4 md:py-5'
          : 'border-b border-slate-200/60 bg-white/85 backdrop-blur-md py-3.5 md:py-4 dark:border-stone-900/60 dark:bg-stone-950/85'
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo (No white border box) */}
        <Link href="/" className="group flex items-center gap-3 no-underline focus:outline-none">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-datasphere.jpeg"
              alt="DataSphere Consulting Ltd"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-1 rounded-full px-3 py-1.5 backdrop-blur-lg shadow-sm transition-colors ${!scrolled && isHome
            ? 'border border-white/20 bg-stone-950/40'
            : 'border border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-900/80'
            }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${isActive
                  ? 'text-slate-950 font-bold bg-teal-400 shadow-sm'
                  : !scrolled && isHome
                    ? 'text-stone-200 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onOpenProposal}
            className="btn btn-primary text-xs sm:text-sm py-2 px-3.5 sm:px-4.5 font-semibold dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
          >
            <span>Discuss Project</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className={`flex lg:hidden h-9 w-9 items-center justify-center rounded-xl border transition-colors shadow-sm ${!scrolled && isHome
              ? 'border-white/20 bg-stone-950/60 text-white hover:bg-stone-900'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white'
              }`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-40 lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200 dark:border-slate-800 dark:bg-[#07090E]/98 dark:shadow-black/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Directory
              </span>
              <span className="font-mono text-[11px] text-teal-700 dark:text-teal-400">
                DataSphere &bull; BIGWI HOUSE
              </span>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                    ? 'bg-teal-50 text-teal-900 border border-teal-200 font-semibold dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 dark:text-slate-600'}`} />
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onOpenProposal()
                }}
                className="btn btn-primary w-full py-2.5 justify-center text-sm dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-500 font-mono">
                <span>DataSphere Consulting Ltd</span>
                <span>Kigali &bull; International</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}