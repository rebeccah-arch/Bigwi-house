import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from '@/components/Icons'
import { PUBLIC_WORK_PROJECTS } from '@/content/workContent'

interface PageProps {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return PUBLIC_WORK_PROJECTS.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PUBLIC_WORK_PROJECTS.find((item) => item.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Project Profile`,
    description: `An internal ${project.status === 'Demonstration / Prototype' ? 'prototype' : 'research'} profile from DataSphere Consulting Ltd and BIGWI HOUSE.`,
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = PUBLIC_WORK_PROJECTS.find((item) => item.slug === params.slug)
  if (!project) notFound()

  const label = project.status === 'Demonstration / Prototype'
    ? 'Internal prototype'
    : 'Applied research'

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#080a11] dark:text-stone-100">
      <section className="bg-[#080a11] px-4 pb-14 pt-32 text-white sm:pt-40">
        <div className="mx-auto max-w-[1100px] space-y-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-stone-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to project profiles
          </Link>
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              {label} <span aria-hidden="true">&bull;</span> {project.sector}
            </p>
            <h1 className="max-w-4xl font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <div className="space-y-6">
          <div className="relative aspect-[16/9] overflow-hidden border border-slate-200 bg-slate-100 dark:border-stone-800 dark:bg-stone-900">
            <Image
              src={project.featuredImage}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </div>
          <div className="border-l-2 border-teal-500 bg-slate-50 p-5 dark:bg-stone-900/70">
            <h2 className="font-semibold text-slate-950 dark:text-white">
              How to read this profile
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-stone-300">
              This is an internal {label.toLowerCase()}, not a client deployment or endorsement. Customer outcomes and performance figures are intentionally omitted. A public result should be added only after its evidence, measurement context, and publication permissions have been reviewed.
            </p>
          </div>
        </div>

        <aside className="h-fit border border-slate-200 p-6 dark:border-stone-800">
          <h2 className="font-semibold text-slate-950 dark:text-white">Profile details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-stone-400">Type</dt>
              <dd className="mt-1 text-slate-800 dark:text-stone-200">{label}</dd>
            </div>
            <div>
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-stone-400">Area</dt>
              <dd className="mt-1 text-slate-800 dark:text-stone-200">{project.sector}</dd>
            </div>
            <div>
              <dt className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-stone-400">Technology references</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="border border-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:border-stone-700 dark:text-stone-300">
                    {technology}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-teal-300"
            >
              View public repository
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 dark:border-stone-800 dark:bg-stone-950">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm text-slate-600 dark:text-stone-300">
            Discuss a data collection, analytics, modeling, deployment, monitoring, or advisory challenge with DataSphere and BIGWI HOUSE.
          </p>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
