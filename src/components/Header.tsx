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
import ThemeToggle from '@/components/ThemeToggle'

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
        ? 'border-b border-slate-200 bg-white/95 backdrop-blur-xl py-3 shadow-md dark:border-stone-900 dark:bg-stone-950/95 dark:shadow-black/50'
        : 'border-b border-slate-200/60 bg-white/80 backdrop-blur-md py-4 md:py-5 dark:border-stone-900/60 dark:bg-stone-950/80'
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] border-x border-slate-200/60 dark:border-stone-900 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3.5 no-underline focus:outline-none">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-white">
            <Image
              src="/logo-datasphere.jpeg"
              alt="DataSphere Consulting Ltd Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 backdrop-blur-lg shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${isActive
                  ? 'text-white font-semibold bg-slate-900 shadow-sm dark:bg-teal-500 dark:text-slate-950'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={onOpenProposal}
            className="btn btn-primary text-xs sm:text-sm py-2.5 px-4 sm:px-5 font-semibold dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
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
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 transition-colors shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200 dark:border-slate-800 dark:bg-[#07090E]/98 dark:shadow-black/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Navigation Menu
              </span>
              <ThemeToggle showLabel />
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
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
                className="btn btn-primary w-full py-3 justify-center text-sm dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                <Sparkles className="h-4 w-4 text-teal-400 dark:text-slate-900" />
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