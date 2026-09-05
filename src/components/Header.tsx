'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronRight,
  Sparkles,
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
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header({ onOpenProposal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'border-b border-slate-200 bg-white/95 backdrop-blur-xl py-3 shadow-md'
        : 'border-b border-slate-200/40 bg-white/80 backdrop-blur-md py-4 md:py-5'
        }`}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3.5 no-underline focus:outline-none">
          <Image
            src="/logo-datasphere.jpeg"
            alt="DataSphere Consulting Ltd Logo"
            width={58}
            height={58}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 backdrop-blur-lg shadow-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${isActive
                  ? 'text-white font-semibold bg-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenProposal}
            className="btn btn-primary text-xs sm:text-sm py-2.5 px-4 sm:px-5 font-semibold"
          >
            <span>Request Proposal</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider px-3 pb-1 border-b border-slate-100">
              Navigation Menu
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                    ? 'bg-teal-50 text-teal-900 border border-teal-200 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onOpenProposal()
                }}
                className="btn btn-primary w-full py-3 justify-center text-sm"
              >
                <Sparkles className="h-4 w-4 text-teal-400" />
                <span>Request a Proposal</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-500 font-mono">
                <span>DataSphere Consulting Ltd</span>
                <span>Kigali &bull; East Africa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}