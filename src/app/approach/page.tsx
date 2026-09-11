'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
} from '@/components/Icons'
import { growthPhases } from '@/content/bigwiContent'
import ProcessTimeline from '@/components/ProcessTimeline'
import TechRadar from '@/components/TechRadar'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ApproachPage() {
  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Header Banner (Full-Bleed Hero with Curved Bottom) */}
      <section className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 pb-16 sm:pb-24">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/executive-strategy.jpg"
            alt="DataSphere & BIGWI HOUSE Engineering Strategy and Delivery"
            fill
            priority
            className="object-cover object-center opacity-60 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/20" />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/30">
              <span>Delivery Methodology</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              A Disciplined, Transparent Delivery Framework.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              We publish our delivery process so enterprise partners, governments, and commercial clients know exactly what to expect from initial discovery to live system monitoring.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Architectural Grid Frame */}
      <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. 3-Phase Delivery Roadmap */}
        <section className="relative p-6 sm:p-10 lg:p-14 border-b border-slate-200 dark:border-stone-900">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Phase Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Phased Implementation Methodology
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                How we reduce implementation risk and ensure system stability before deployment.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {growthPhases.map((phase, idx) => (
                <motion.div
                  key={phase.name}
                  variants={itemVariants}
                  className="flex flex-col justify-between p-7 relative overflow-hidden bg-white dark:bg-stone-900/60 border border-slate-200 dark:border-stone-800/80 rounded-3xl shadow-sm hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60 font-mono text-xs font-bold text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-slate-600 dark:text-stone-300 bg-slate-100 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-2.5 py-0.5 rounded-full font-medium">
                        {phase.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {phase.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-stone-400 font-medium mt-1">{phase.subtitle}</p>
                    </div>

                    <ul className="mt-4 space-y-2.5 pt-3 border-t border-slate-100 dark:border-stone-800">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-stone-800">
                    <span className="font-sans text-xs text-slate-400 dark:text-stone-500 font-medium block">
                      Focus: {idx === 0 ? 'Diagnosis & Feasibility' : idx === 1 ? 'Architecture & Validation' : 'Production & Monitoring'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. 6-Stage Engineering Process */}
        <section className="relative p-6 sm:p-10 lg:p-14 border-b border-slate-200 dark:border-stone-900">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                End-to-End Delivery Lifecycle
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                Structured sprints from requirement diagnosis to ongoing SLA support and model drift monitoring.
              </p>
            </div>

            <ProcessTimeline />
          </div>
        </section>

        {/* 4. Technology Toolchains */}
        <section className="relative p-6 sm:p-10 lg:p-14">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Toolchains
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Technology Stack &amp; Infrastructure
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                Production-hardened databases, data engineering tools, machine learning frameworks, and secure cloud environments.
              </p>
            </div>

            <TechRadar />
          </div>
        </section>
      </div>

      {/* 5. Full-Bleed Curved Canopy CTA */}
      <div className="relative w-full bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* Top Arch Canopy Curve */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 L0,65 Q35,32 90,26 L450,14 Q600,0 720,0 Q840,0 990,14 L1350,26 Q1405,32 1440,65 L1440,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <section className="relative z-10 w-full bg-[#080d1a] text-white py-16 sm:py-24 text-center overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-teal-500/10 blur-[120px]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              Get Started
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to structure your data roadmap?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Connect with our technical team to discuss your current data challenges, timelines, and deliverable milestones.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Arch Canopy Curve */}
        <div className="w-full overflow-hidden leading-none -mt-[1px]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L0,35 Q35,68 90,74 L450,86 Q600,100 720,100 Q840,100 990,86 L1350,74 Q1405,68 1440,35 L1440,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
