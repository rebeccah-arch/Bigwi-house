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

const CASE_IMAGES: Record<string, string> = {
  'case-01': '/images/hero-team.jpg',
  'case-02': '/images/mobile-banking.jpg',
  'case-03': '/images/logistics-terminal.jpg',
}

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
      {/* 1. Header Banner with Full Cover Background Image */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kigali-skyline.jpg"
            alt="DataSphere Deployments &amp; Case Studies"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Selected projects &amp; enterprise transformations.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white/60 backdrop-blur-xs p-1 rounded-lg">
              We focus on measurable commercial outcomes, system uptime, and data integrity. Explore how we architect, engineer, and deploy high-concurrency systems across critical economic sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Case Studies List with Real Photography */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            {featuredCaseStudies.map((study, idx) => {
              const imageSrc = CASE_IMAGES[study.id] || '/images/hero-team.jpg'

              return (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Photo & Header Banner */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={imageSrc}
                      alt={study.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-900 bg-white/95 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm">
                        Case 0{idx + 1} • {study.sector}
                      </span>
                      <span className="font-mono text-xs text-white bg-slate-900/80 px-3 py-1 rounded-md backdrop-blur-sm">
                        {study.clientType}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                        {study.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-10 space-y-8">
                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-600" />
                          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                            The Operational Challenge
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                          {study.problem}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-teal-600" />
                          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-900">
                            The Engineering Solution
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Quantified Business Impact & Metrics */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                        Quantified Business Impact
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                          >
                            <div className="font-display text-3xl font-extrabold text-teal-800">
                              {metric.value}
                            </div>
                            <p className="mt-1 font-sans text-xs text-slate-500 font-medium">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                        {study.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack & Action Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-sans text-xs text-slate-500 font-semibold">Engineered With:</span>
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-slate-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="btn btn-teal text-xs py-2.5 px-5 flex items-center gap-1.5"
                      >
                        <span>Build A Similar Platform</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Ready to achieve measurable enterprise transformation?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Talk with our senior engineering architects about your organization&apos;s digital roadmap.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal py-3 px-7">
                <span>Start Technical Discovery</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
