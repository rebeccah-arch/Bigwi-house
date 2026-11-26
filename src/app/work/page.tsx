import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from '@/components/Icons'
import { PUBLIC_WORK_PROJECTS } from '@/content/workContent'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#080a11] dark:text-stone-100">
      <section className="bg-[#080a11] px-4 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-[1240px] space-y-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Project profiles
          </p>
          <h1 className="max-w-3xl font-sans text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Data and AI work, with context
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Explore internal prototypes and applied research from DataSphere Consulting Ltd and BIGWI HOUSE. Client case studies are not published until engagement details, results, and permissions have been reviewed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {PUBLIC_WORK_PROJECTS.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_WORK_PROJECTS.map((project) => {
              const isPrototype = project.status === 'Demonstration / Prototype'
              const label = isPrototype ? 'Internal prototype' : 'Applied research'

              return (
                <article key={project.id} className="group border border-slate-200 bg-white dark:border-stone-800 dark:bg-stone-900/50">
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-stone-900">
                      <Image
                        src={project.featuredImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-teal-300">
                        <span>{label}</span>
                        <span aria-hidden="true">&bull;</span>
                        <span>{project.sector}</span>
                      </div>
                      <h2 className="text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-teal-300">
                        {project.title}
                      </h2>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-teal-300">
                        Read project profile
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="border border-slate-200 p-6 text-slate-600 dark:border-stone-800 dark:text-stone-300">
            Project profiles are being prepared for publication.
          </p>
        )}

        <div className="mt-14 border-t border-slate-200 pt-8 dark:border-stone-800">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-stone-300">
            These profiles describe prototypes or research, not client deployments. No customer outcomes or performance figures are presented here. Any future case study should identify its evidence, measurement context, and publication approval.
          </p>
          <Link
            href="/services"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-teal-300"
          >
            Explore our data lifecycle capabilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
