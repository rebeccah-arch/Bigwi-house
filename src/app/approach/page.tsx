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
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/executive-strategy.jpg"
            alt="DataSphere & BIGWI HOUSE Engineering Strategy and Delivery"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 dark:from-[#07090E] dark:via-[#07090E]/95 dark:to-[#07090E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 dark:from-[#07090E] dark:via-transparent dark:to-[#07090E]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-xs font-mono text-teal-800 dark:text-teal-300">
              <span>Delivery Methodology</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              A disciplined, transparent delivery framework.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              We publish our delivery process so enterprise partners, governments, and commercial clients know exactly what to expect from initial discovery to live system monitoring.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact" className="btn btn-primary text-xs sm:text-sm py-2.5 px-5">
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 3-Phase Delivery Roadmap */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Phase Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
              Phased Implementation Methodology
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
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
                className="card-enterprise flex flex-col justify-between p-7 relative overflow-hidden bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60 font-mono text-xs font-bold text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-full font-medium">
                      {phase.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {phase.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">{phase.subtitle}</p>
                  </div>

                  <ul className="mt-4 space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-sans text-xs text-slate-400 dark:text-slate-500 font-medium block">
                    Focus: {idx === 0 ? 'Diagnosis & Feasibility' : idx === 1 ? 'Architecture & Validation' : 'Production & Monitoring'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. 6-Stage Engineering Process */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
              End-to-End Delivery Lifecycle
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Structured sprints from requirement diagnosis to ongoing SLA support and model drift monitoring.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 4. Technology Toolchains */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Toolchains
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
              Technology Stack &amp; Infrastructure
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Production-hardened databases, data engineering tools, machine learning frameworks, and secure cloud environments.
            </p>
          </div>

          <TechRadar />
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Ready to structure your data roadmap?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
              Connect with our technical team to discuss your current data challenges, timelines, and deliverable milestones.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal text-xs sm:text-sm py-2.5 px-6">
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
