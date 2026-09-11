'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full min-h-[100svh] sm:min-h-screen overflow-hidden rounded-b-[36px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-center items-center pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Full-Bleed Atmospheric Background Image Across 100% Viewport */}
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
        <Image
          src="/images/kigali-skyline.jpg"
          alt="DataSphere & BIGWI HOUSE — Data & AI Consultancy"
          fill
          priority
          className="object-cover object-center opacity-60 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Cinematic Centered Gradient Fade */}
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/40" />
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950/70" />
      </div>

      {/* Hero Content Overlay (Aligned to 1400px grid & Centered) */}
      <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-white space-y-4 sm:space-y-6 flex flex-col items-center text-center mx-auto"
        >
          <div className="space-y-2 sm:space-y-3">
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] sm:leading-[1.05] text-white text-center">
              Data, Machine Learning &amp; Practical Implementation.
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-xs sm:text-base md:text-lg text-stone-300 leading-relaxed font-normal text-center mx-auto"
          >
            We build data pipelines, machine learning models, and custom software that help organizations make better decisions, automate field operations, and scale with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 pt-2 sm:pt-4 mx-auto"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-teal-500 px-3.5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400 whitespace-nowrap shrink-0"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-stone-600/60 bg-stone-900/70 px-3.5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-stone-400 hover:bg-stone-800/80 whitespace-nowrap shrink-0"
            >
              <span>View our capabilities</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
