'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Calendar,
  Clock
} from '@/components/Icons'
import { insightArticles } from '@/content/bigwiContent'

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

const CATEGORIES = ['All Topics', 'Data Strategy', 'Applied AI', 'Technology Review']

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics')

  const filtered = selectedCategory === 'All Topics'
    ? insightArticles
    : insightArticles.filter((a) => a.category === selectedCategory)

  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/executive-strategy.jpg"
            alt="Data & AI Insights and Research by DataSphere & BIGWI HOUSE"
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
              <BookOpen className="h-3.5 w-3.5" />
              <span>Research &amp; Perspectives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Applied data strategy, research notes &amp; technical perspectives.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Practical observations and architectural patterns drawn from our experience delivering data pipelines, machine learning models, and software across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter & Articles List */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Topic Filters */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {article.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <span className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                      Key Takeaways:
                    </span>
                    <ul className="space-y-1.5">
                      {article.keyTakeaways.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.publishDate}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="font-sans font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <span>Discuss topic</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom Consultation Callout */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Need custom research or data architecture advisory?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
              We work with institutional partners to evaluate technology feasibility, audit data governance, and publish joint case studies.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal text-xs sm:text-sm py-2.5 px-6">
                <span>Inquire with our research team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
