'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full min-h-[640px] lg:min-h-[740px] bg-[#080a11] text-white overflow-hidden flex items-center">

      {/* Right Column: Full-Height Curved Split Image (Matching Exact Sketch Diagram) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] xl:w-[52%] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] xl:rounded-l-[160px]">
          <Image
            src="/images/data-engineer.jpg"
            alt="DataSphere Practitioners"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Subtle gradient overlay on left, top and bottom for seamless blend with header */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a11] via-[#080a11]/40 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080a11]/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080a11] via-[#080a11]/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080a11] to-transparent" />
        </div>
      </div>

      {/* Main Container Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-full lg:max-w-[54%] xl:max-w-[50%] space-y-6 sm:space-y-8">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[60px] tracking-tight leading-[1.08] text-white"
          >
            Enterprise data architecture for complex business challenges
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl"
          >
            We combine high-speed data engineering, applied predictive modeling, and proprietary client records to solve high-stakes challenges and drive measurable commercial outcomes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:bg-stone-200"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Explore capabilities</span>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}