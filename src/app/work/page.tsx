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
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kigali-skyline.jpg"
            alt="DataSphere & BIGWI HOUSE Case Studies and Deployments"
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
              <span>Case Studies &amp; Deployments</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Selected data pipelines, predictive models &amp; field systems.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              We structure our portfolio around real operational challenges, concrete engineering solutions, and measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
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
                className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm"
              >
                {/* Visual Header Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 bg-white/95 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm">
                      {study.caseNumber} &bull; {study.sector}
                    </span>
                    <span className="font-mono text-xs text-white bg-slate-900/85 border border-slate-700 px-3 py-1 rounded-md backdrop-blur-sm">
                      {study.clientClassification} &bull; {study.region}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <span className="text-xs text-teal-300 font-mono block mb-1">
                      Client: {study.client}
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
                      {study.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-8">
                  {/* Problem / Solution Grid (Outcome First Hierarchy) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-amber-200 dark:border-amber-800/80 bg-amber-50/40 dark:bg-amber-950/30 p-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                          1. The Business Challenge
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {study.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/50 dark:bg-teal-950/30 p-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-teal-600 dark:text-teal-400" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-900 dark:text-teal-300">
                          2. What BIGWI HOUSE Built
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Measurable Results & Impact */}
                  <div className="space-y-4">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      3. Measurable Outcomes &amp; Impact
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-5 text-center"
                        >
                          <div className="font-display text-2xl sm:text-3xl font-extrabold text-teal-800 dark:text-teal-400">
                            {metric.value}
                          </div>
                          <p className="mt-1 font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      {study.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-3.5 text-xs text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies (Not Engineered With) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">Technologies:</span>
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-700 dark:text-slate-300 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="btn btn-teal text-xs py-2.5 px-4 flex items-center gap-1.5 self-start sm:self-auto"
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

      {/* 3. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Have a data or machine learning challenge?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
              We can help you audit your existing systems, assess feasibility, and structure a phased implementation plan.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal text-xs sm:text-sm py-2.5 px-6">
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
