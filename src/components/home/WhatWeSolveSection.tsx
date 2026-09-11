'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'
import { corePillars } from '@/content/bigwiContent'

export default function WhatWeSolveSection() {
  return (
    <section id="what-we-solve" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-slate-50/50 dark:bg-stone-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 sm:p-10 md:p-12 border-b border-slate-200 dark:border-stone-900 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-semibold">
            /02 What We Solve
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-stone-100 tracking-tight mt-1">
            The Data &amp; AI Lifecycle
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 max-w-md">
          From initial field collection to production machine learning and strategic advisory, we support organizations at every stage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-slate-200 dark:bg-stone-900">
        {corePillars.map((pillar, idx) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-white dark:bg-stone-950 p-6 sm:p-7 flex flex-col justify-between transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60"
          >
            <div>
              <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                {pillar.number}
              </span>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-stone-100 mt-2">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* 8th card linking to consultation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-teal-50/40 dark:bg-teal-950/20 p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">
              Next Steps
            </span>
            <h3 className="font-display text-base font-bold text-slate-900 dark:text-stone-100 mt-2">
              Have a specific data challenge?
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
              Our senior consultants will review your data readiness and outline practical technical options.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline"
          >
            <span>Schedule a discovery call</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
