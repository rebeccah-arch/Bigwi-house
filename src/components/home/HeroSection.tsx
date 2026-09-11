'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full h-screen min-h-screen overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28">
      {/* Full-Bleed Atmospheric Background Image Across 100% Viewport */}
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
        <Image
          src="/images/kigali-skyline.jpg"
          alt="DataSphere & BIGWI HOUSE — Data & AI Consultancy"
          fill
          priority
          className="object-cover object-center opacity-65 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Cinematic Gradient Fade */}
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/20" />
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
      </div>

      {/* Hero Content Overlay (Aligned to 1400px grid) */}
      <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-white space-y-6"
        >
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
              Data, Machine Learning &amp; Practical Implementation.
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-base sm:text-lg text-stone-300 leading-relaxed font-normal"
          >
            We build data pipelines, machine learning models, and custom software that help organizations make better decisions, automate field operations, and scale with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-stone-600/60 bg-stone-900/70 px-7 py-3.5 text-sm font-semibold text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-stone-400 hover:bg-stone-800/80"
            >
              View our capabilities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
