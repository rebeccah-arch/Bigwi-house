'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  Cpu,
  Compass,
  CheckCircle2,
  Mail,
} from '@/components/Icons'

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 p-6 sm:p-10 lg:p-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

        {/* Left Column: Asymmetric Visual Composition (Scroll Reveal from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-[540px] lg:max-w-none">

            {/* Visual Grid / Arrangement */}
            <div className="grid grid-cols-12 gap-4 items-start">

              {/* Card 1: Top-Left Rounded Photo */}
              <div className="col-span-7 relative h-56 sm:h-72 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-stone-800 bg-stone-900 group">
                <Image
                  src="/images/data-engineer.jpg"
                  alt="DataSphere Senior Engineer Data Architecture"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              </div>

              {/* Card 2: Top-Right Overlapping Floating Dark Pill */}
              <div className="col-span-5 relative mt-4">
                <div className="rounded-2xl border border-teal-500/30 bg-[#080d1a] p-4 sm:p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-teal-400 font-bold">
                      Live Architecture
                    </span>
                  </div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                    Production-Grade AI
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Engineered for live operations &amp; auditability.
                  </p>
                </div>
              </div>

              {/* Card 3: Floating Bottom-Left Brand Accent Card (DataSphere Teal Gradient) */}
              <div className="col-span-5 relative -mt-4 sm:-mt-6 z-20">
                <div className="rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-4 sm:p-5 text-slate-950 shadow-xl shadow-teal-500/25">
                  <h4 className="font-display text-sm sm:text-base font-extrabold leading-snug tracking-tight">
                    BIGWI HOUSE
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-slate-900/90 leading-relaxed">
                    Data &amp; AI Consultancy Hub under DataSphere.
                  </p>
                </div>
              </div>

              {/* Card 4: Bottom-Right Image Card with Curvature */}
              <div className="col-span-7 relative h-48 sm:h-60 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-stone-800 bg-stone-900 group">
                <Image
                  src="/images/hero-team.jpg"
                  alt="DataSphere Consultancy Team in Kigali Rwanda"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              </div>

            </div>

            {/* Decorative Background Glow */}
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Right Column: Structured Content Narrative (Scroll Reveal from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-6 space-y-6"
        >

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80">
            <Compass className="h-3.5 w-3.5" />
            <span>Who We Are</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            An Implementation Layer for Data Systems &amp; Applied AI
          </h2>

          {/* Narrative Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
            <strong className="text-slate-900 dark:text-white font-semibold">DataSphere Consulting Ltd</strong> operates <strong className="text-teal-600 dark:text-teal-400 font-semibold">BIGWI HOUSE</strong>, our specialized Data &amp; AI consultancy practice. We bridge the gap between organizational records and production-ready machine learning — transforming fragmented databases into reliable pipelines, high-impact predictive models, and intuitive executive dashboards.
          </p>

          {/* Dual Highlight Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/80 dark:bg-stone-900/60 p-3.5 transition-colors hover:border-teal-500/40">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-stone-100">
                  Structured Workflows
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-stone-400 leading-tight mt-0.5">
                  Ingestion, automated validation &amp; warehousing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/80 dark:bg-stone-900/60 p-3.5 transition-colors hover:border-cyan-500/40">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-stone-100">
                  Governed Machine Learning
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-stone-400 leading-tight mt-0.5">
                  Evaluation, scoring &amp; live production monitoring
                </p>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-stone-800/80">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white font-semibold">Direct Senior Engineering:</strong> Direct practitioner delivery — no junior handoffs or theoretical slide decks.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white font-semibold">Continuous Governance:</strong> Rigorous evaluation, model drift detection, and compliance built in.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white font-semibold">Pan-African &amp; Global Delivery:</strong> Headquartered in Kigali, Rwanda with deployments across Africa and internationally.
              </span>
            </div>
          </div>

          {/* CTAs and Contact */}
          <div className="flex flex-wrap items-center gap-5 pt-3">
            <Link
              href="/services"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:from-teal-400 hover:to-teal-500"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="mailto:contact@datasphere.rw"
              className="inline-flex items-center gap-3 text-left group no-underline"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 dark:bg-stone-900 border border-slate-800 text-teal-400 transition-transform duration-300 group-hover:scale-110 shadow-md">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-slate-500 dark:text-stone-400 leading-tight">
                  Direct Inquiries:
                </span>
                <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-teal-400 group-hover:underline">
                  contact@datasphere.rw
                </span>
              </div>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
