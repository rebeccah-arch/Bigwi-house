'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
} from '@/components/Icons'
import { featuredCaseStudies } from '@/content/bigwiContent'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function WorkPage() {
  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Header Banner (Full-Bleed Hero with Curved Bottom) */}
      <section className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 pb-16 sm:pb-24">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/kigali-skyline.jpg"
            alt="DataSphere & BIGWI HOUSE Case Studies and Deployments"
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
              <span>Case Studies &amp; Deployments</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Selected Data Pipelines &amp; Predictive Systems.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              We structure our portfolio around real operational challenges, concrete engineering solutions, and measurable business outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss a similar project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Architectural Grid Frame */}
      <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. Detailed Case Studies List */}
        <section className="relative p-6 sm:p-10 lg:p-14">
          <div className="space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              {featuredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="overflow-hidden rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 shadow-sm hover:border-teal-500/40 transition-all duration-300"
                >
                  {/* Visual Header Banner */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-900">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-center grayscale hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-slate-900 bg-white/95 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                        {study.caseNumber} &bull; {study.sector}
                      </span>
                      <span className="font-mono text-xs text-white bg-stone-900/85 border border-stone-700 px-3 py-1 rounded-full backdrop-blur-sm">
                        {study.clientClassification} &bull; {study.region}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <span className="text-xs text-teal-400 font-mono block mb-1">
                        Client: {study.client}
                      </span>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
                        {study.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-10 space-y-8">
                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="rounded-2xl border border-amber-200/80 dark:border-amber-800/40 bg-amber-50/40 dark:bg-amber-950/20 p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                            1. The Business Challenge
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                          {study.problem}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-teal-200/80 dark:border-teal-800/40 bg-teal-50/50 dark:bg-teal-950/20 p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-teal-600 dark:text-teal-400" />
                          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-900 dark:text-teal-300">
                            2. What BIGWI HOUSE Built
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-stone-200 leading-relaxed font-normal">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Measurable Results & Impact */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-stone-200">
                        3. Measurable Outcomes &amp; Impact
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-slate-200 dark:border-stone-800 bg-slate-50/70 dark:bg-stone-950/60 p-4 sm:p-5 text-center"
                          >
                            <div className="font-display text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-400">
                              {metric.value}
                            </div>
                            <p className="mt-1 font-sans text-xs text-slate-500 dark:text-stone-400 font-medium">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {study.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-950/40 p-3.5 text-xs text-slate-700 dark:text-stone-300 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-stone-800">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-slate-500 dark:text-stone-400 font-semibold">Technologies:</span>
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-2.5 py-1 font-mono text-[11px] text-slate-700 dark:text-stone-300 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-5 py-2.5 text-xs shadow-sm transition-all hover:scale-105"
                      >
                        <span>Discuss similar project</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* 3. Full-Bleed Curved Canopy CTA */}
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
              Have a data or machine learning challenge?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We can help you audit your existing systems, assess feasibility, and structure a phased implementation plan.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss your project</span>
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
