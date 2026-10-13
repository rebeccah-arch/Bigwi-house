'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronRight
} from '@/components/Icons'

interface HeaderProps {
  onOpenProposal?: () => void
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header({ onOpenProposal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isDarkHero = pathname === '/' || pathname === '/about' || pathname === '/approach' || pathname === '/contact'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a11]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40 border-b border-zinc-800/80'
          : isDarkHero
          ? 'bg-transparent py-3.5 md:py-4 border-b border-white/5'
          : 'bg-[#080a11] py-3.5 md:py-4 border-b border-zinc-800/80'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left: Real Brand Logo */}
        <Link href="/" className="group flex items-center no-underline focus:outline-none">
          <div className="relative h-14 sm:h-16 md:h-18 w-40 sm:w-48 md:w-56 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
            <Image
              src="/logo-datasphere.jpeg"
              alt="DataSphere Consulting Ltd"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-teal-400 pb-0.5'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right: "Discuss your project" Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 text-white px-5 py-2 text-xs sm:text-sm font-medium tracking-wide hover:bg-white hover:text-zinc-950 transition-all duration-200 backdrop-blur-sm"
          >
            Discuss your project
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[68px] z-40 lg:hidden border-b border-zinc-800 bg-[#080a11]/98 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Menu
              </span>
              <span className="font-mono text-[11px] text-teal-400 font-semibold">
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
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-800/80 text-white font-bold border-l-2 border-teal-400'
                      : 'text-zinc-300 hover:bg-zinc-900/80 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-teal-400' : 'text-zinc-500'}`} />
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-full bg-white text-zinc-950 py-2.5 text-center text-sm font-medium hover:bg-zinc-200 transition-all block"
              >
                Discuss your project
              </Link>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-zinc-500 font-mono">
                <span>DataSphere Consulting Ltd</span>
                <span>Kigali &bull; Global</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}