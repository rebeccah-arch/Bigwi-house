'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'
import LeadershipTeamSection from '@/components/about/LeadershipTeamSection'

export default function TeamPage() {
  return (
    <div className="w-full bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Full-Height Curved Split Dark Hero (Matching About page layout) */}
      <section className="relative z-10 w-full min-h-[680px] lg:min-h-[780px] bg-[#080a11] text-white overflow-hidden flex items-center">

        {/* Right Column: Full-Height Curved Split Image (Matching About page hero) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] xl:w-[52%] h-full z-0 pointer-events-none">
          <div className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] xl:rounded-l-[160px]">
            <Image
              src="/images/hero-team.jpg"
              alt="DataSphere Leadership in Kigali"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            {/* Subtle gradient overlay on left, top and bottom for seamless blend with header and dark background */}
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
              className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.08] text-white"
            >
              Our Leadership &amp; Engineering Faculty
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl"
            >
              <strong className="text-white font-semibold">DataSphere Consulting Ltd</strong> and our dedicated delivery hub, <strong className="text-white font-semibold">BIGWI HOUSE</strong>, are led by seasoned enterprise architects, machine learning scientists, and institutional technology directors steering high-impact data systems across Africa.
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
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <span>About DataSphere</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Reusable Leadership & Delivery Team Component */}
      <LeadershipTeamSection standalone={true} />

      {/* Consultation CTA */}
      <section className="bg-[#080a11] text-white py-20 sm:py-24 text-center border-t border-stone-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Direct Partner Collaboration
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Work directly with our senior practice leads
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Schedule a confidential technical discovery session with our practice directors to evaluate your data systems architecture.
          </p>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-stone-200 text-slate-950 font-bold px-8 py-3.5 text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}