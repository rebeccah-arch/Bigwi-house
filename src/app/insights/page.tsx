import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Database, BarChart3, Brain, Compass } from '@/components/Icons'

const EDITORIAL_AREAS = [
  {
    icon: Database,
    title: 'Data collection and quality',
    description: 'Questions around collection methods, data completeness, validation, and readiness for analysis.',
  },
  {
    icon: BarChart3,
    title: 'Analytics and reporting',
    description: 'How teams define useful measures, communicate findings, and use data in decisions.',
  },
  {
    icon: Brain,
    title: 'Model building and evaluation',
    description: 'Model selection, baseline comparison, limitations, and evaluation in the intended context.',
  },
  {
    icon: Compass,
    title: 'Deployment, monitoring, and strategy',
    description: 'Operational considerations for launching, monitoring, and governing data and AI systems.',
  },
]

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#080a11] dark:text-stone-100">
      <section className="bg-[#080a11] px-4 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-[1100px] space-y-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            DataSphere Consulting Ltd &bull; BIGWI HOUSE
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Perspectives across data and AI
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Our editorial focus spans the full lifecycle, from collecting and understanding data to evaluating and operating models.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {EDITORIAL_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <article key={area.title} className="border border-slate-200 p-6 sm:p-8 dark:border-stone-800">
                <Icon className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                <h2 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{area.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-stone-300">{area.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex items-start gap-4 border-l-2 border-teal-500 bg-slate-50 p-6 dark:bg-stone-900/60">
          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
          <div className="space-y-2">
            <h2 className="font-semibold text-slate-950 dark:text-white">Editorial standard</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-300">
              New articles and research will be published with a named author, publication date, and supporting sources. Earlier material is being reviewed and is not shown here until its authorship and claims can be checked.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-teal-300"
        >
          Discuss a data or AI question
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
