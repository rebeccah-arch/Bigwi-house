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
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-[#080a11]/95 backdrop-blur-md py-3 shadow-lg'
        : 'bg-[#080a11] py-4 md:py-5'
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left: Brand Logo & Title */}
        <Link href="/" className="group flex items-center gap-3 no-underline focus:outline-none">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-datasphere.jpeg"
              alt="DataSphere Consulting Ltd"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-none">
              DataSphere
            </span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase leading-none mt-1">
              Consulting Ltd
            </span>
          </div>
        </Link>

        {/* Center: Desktop Clean Navigation Links (Aimpoint Digital Style - No Box Borders) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'text-white font-semibold'
                  : 'text-stone-300 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right: Aimpoint Digital Style "Meet an Expert" Pill Outline Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white text-white px-5 py-2 text-xs sm:text-sm font-medium tracking-wide hover:bg-white hover:text-[#080a11] transition-all duration-200"
          >
            Meet an Expert
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full border border-stone-700 bg-stone-900/80 text-white hover:bg-stone-800 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-40 lg:hidden border-b border-stone-800 bg-[#080a11]/98 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                Menu
              </span>
              <span className="font-mono text-[11px] text-blue-400">
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
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-blue-400' : 'text-stone-500'}`} />
                </Link>
              )
            })}

            <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-full border border-white text-white py-2.5 text-center text-sm font-medium hover:bg-white hover:text-[#080a11] transition-all block"
              >
                Meet an Expert
              </Link>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-stone-500 font-mono">
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