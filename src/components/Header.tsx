'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronRight,
  Layers,
  Cpu,
  BarChart3,
  Smartphone,
  Cloud,
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
          ? 'border-b border-line/80 bg-bg/90 backdrop-blur-xl py-3.5 shadow-glass'
          : 'border-b border-transparent bg-bg/40 backdrop-blur-md py-4 md:py-5'
        }`}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 no-underline focus:outline-none">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-lineLight bg-bgRaised transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-500">
            <Image
              src="/logo-datasphere.jpeg"
              alt="DataSphere / BIGWI HOUSE Logo"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-bold tracking-tight text-ink group-hover:text-brand-300 transition-colors">
                BIGWI HOUSE
              </span>
              <span className="hidden sm:inline-block rounded-md bg-brand-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand-300 border border-brand-500/30">
                DataSphere
              </span>
            </div>
            <span className="hidden xs:inline-block font-mono text-[11px] text-muted tracking-tight">
              Digital Innovation &amp; Product Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-lineLight/60 bg-bgRaised/60 px-4 py-1.5 backdrop-blur-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${isActive
                    ? 'text-bg font-semibold bg-gradient-to-r from-brand-400 to-cyanAccent shadow-glow-teal'
                    : 'text-muted hover:text-ink hover:bg-white/5'
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
            className="btn btn-primary text-xs sm:text-sm py-2 px-4 sm:px-5 font-semibold"
          >
            <Sparkles className="h-4 w-4 hidden sm:inline-block" />
            <span>Request a Proposal</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-line bg-bgRaised text-ink hover:border-brand-500 hover:text-brand-300 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 lg:hidden border-b border-line bg-bg/95 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-muted uppercase tracking-wider px-3 pb-1 border-b border-line/60">
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
                      ? 'bg-brand-500/15 text-brand-300 border border-brand-500/30'
                      : 'text-ink hover:bg-bgRaised'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-brand-300' : 'text-muted'}`} />
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-line/60 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onOpenProposal()
                }}
                className="btn btn-primary w-full py-3 justify-center text-sm"
              >
                <Sparkles className="h-4 w-4" />
                <span>Request a Proposal</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-muted font-mono">
                <span>DataSphere Consulting Ltd.</span>
                <span>Kigali, Rwanda &bull; East Africa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}