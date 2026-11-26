import Link from 'next/link'
import { ArrowRight, BookOpen } from '@/components/Icons'

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#080a11] dark:text-stone-100">
      <section className="bg-[#080a11] px-4 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-[1100px] space-y-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            DataSphere Consulting Ltd &bull; BIGWI HOUSE
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Insights publishing is paused
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            We will resume publishing when an editorial owner and review process are in place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex items-start gap-4 border-l-2 border-teal-500 bg-slate-50 p-6 dark:bg-stone-900/60">
          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-400" />
          <div className="space-y-2">
            <h2 className="font-semibold text-slate-950 dark:text-white">Publication status</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-300">
              No new articles or research are being published at this time. Material will be reviewed for authorship, sourcing, and substantiation before it is made available.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-teal-300"
        >
          Discuss a data or AI project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
