'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full bg-[#080a11] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 border-b border-slate-900/80 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Bold Headline & Commercial Value Proposition (Quantium Exact Style) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[58px] tracking-tight leading-[1.08] text-white">
              Enterprise AI for complex business challenges
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl">
              We combine advanced data science, applied machine learning, and proprietary client data to solve high-stakes challenges and drive measurable commercial outcomes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:bg-stone-200"
              >
                <span>Talk to us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                <span>Explore capabilities</span>
              </Link>
            </div>

            {/* Clean Metrics Row */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  4 Pillars
                </div>
                <div className="text-xs text-[#8A92A0] mt-1 font-normal">
                  End-to-end Data &amp; AI delivery
                </div>
              </div>

              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  100%
                </div>
                <div className="text-xs text-[#8A92A0] mt-1 font-normal">
                  Client IP &amp; data ownership
                </div>
              </div>

              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  Kigali &bull; Global
                </div>
                <div className="text-xs text-[#8A92A0] mt-1 font-normal">
                  Direct senior practitioner practice
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Team / Modern Office Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-stone-900">
              <Image
                src="/images/data-engineer.jpg"
                alt="DataSphere Consulting Ltd & BIGWI HOUSE practitioners"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
