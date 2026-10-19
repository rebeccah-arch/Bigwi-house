import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  ExternalLink,
  BadgeCheck,
  ShieldCheck,
  FileText
} from '@/components/Icons'
import { WORK_PROJECTS, WorkProject } from '@/content/workContent'

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = WORK_PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Our Work | DataSphere & BIGWI HOUSE`,
    description: project.subtitle,
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = WORK_PROJECTS.find((p) => p.slug === params.slug)
  if (!project) {
    notFound()
  }

  // Find next and previous projects for navigation
  const currentIndex = WORK_PROJECTS.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? WORK_PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < WORK_PROJECTS.length - 1 ? WORK_PROJECTS[currentIndex + 1] : null

  const getStatusBadge = (status: WorkProject['status']) => {
    switch (status) {
      case 'Client Engagement':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Verified Client Engagement
          </span>
        )
      case 'Demonstration / Prototype':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Technical Demonstration / Prototype
          </span>
        )
      case 'Academic & Research Project':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 text-xs font-mono font-semibold text-purple-700 dark:text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Founder &amp; Applied Research
          </span>
        )
    }
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#07090e] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Masthead Header */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-slate-200 dark:border-stone-800 bg-[#f8fafc] dark:bg-[#0a0e17]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors group"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Our Work</span>
            </Link>

            <span className="text-xs font-mono text-slate-400 dark:text-stone-500 uppercase tracking-widest hidden sm:inline">
              DataSphere Consulting &bull; BIGWI HOUSE
            </span>
          </div>

          {/* Status, Sector & Meta Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              {getStatusBadge(project.status)}
              <span className="text-slate-300 dark:text-stone-700">&bull;</span>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-stone-400 uppercase tracking-wider">
                {project.sector}
              </span>
              <span className="text-slate-300 dark:text-stone-700">&bull;</span>
              <span className="text-xs font-mono text-slate-500 dark:text-stone-400">
                {project.deliveryTimeline}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* Lead Practitioner Attribution */}
          <div className="pt-2 flex items-center gap-3 border-t border-slate-200/80 dark:border-stone-800/80">
            <div className="relative h-11 w-11 rounded-full overflow-hidden border border-slate-300 dark:border-stone-700 shrink-0">
              <Image
                src={project.leadPractitioner.avatar}
                alt={project.leadPractitioner.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-xs space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white">{project.leadPractitioner.name}</span>
                <BadgeCheck className="h-4 w-4 text-blue-600 dark:text-teal-400 shrink-0" />
              </div>
              <p className="text-slate-500 dark:text-stone-400 font-mono">{project.leadPractitioner.role}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Content & Right Sidebar Grid */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">

          {/* Main Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">

            {/* Featured Interface Screenshot / Architecture Visual */}
            <div className="space-y-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-stone-800 bg-slate-950 shadow-xl">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="text-xs font-mono text-slate-500 dark:text-stone-400 text-center pt-1">
                Figure 1: Production architecture interface &amp; real-time operational telemetry console.
              </p>
            </div>

            {/* 1. Problem & Intended Users */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-teal-400" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  1. The Problem &amp; Intended Users
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-stone-300 leading-relaxed">
                {project.problem}
              </p>

              {/* Challenge Details Bulleted List */}
              <div className="bg-slate-50 dark:bg-stone-900/60 rounded-xl p-5 border border-slate-200 dark:border-stone-800 space-y-2.5">
                <span className="font-mono text-xs uppercase font-bold text-slate-900 dark:text-white block tracking-wider">
                  Operational Bottlenecks &amp; Institutional Constraints:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                  {project.challengeDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-teal-400 font-bold shrink-0 mt-0.5">&rsaquo;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intended Users Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-500 dark:text-stone-400 uppercase tracking-wider block">
                  Intended Stakeholders &amp; End Users:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.intendedUsers.map((user, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-stone-800 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-stone-200 border border-slate-200 dark:border-stone-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-teal-400" />
                      {user}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Precise Role & Engineering Contribution */}
            <div className="space-y-4 pt-8 border-t border-slate-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  2. Our Role &amp; Engineering Contribution
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-stone-300 leading-relaxed">
                {project.roleAndContribution}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Architectural Implementation Details:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.architectureDetails.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-teal-400 bg-blue-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md shrink-0">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Data Used & Limitations */}
            <div className="space-y-4 pt-8 border-t border-slate-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  3. Data Profile &amp; Operational Limitations
                </h2>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-stone-900/60 border border-slate-200 dark:border-stone-800 space-y-3">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold uppercase text-slate-900 dark:text-white block">
                    Data Corpus &amp; Ingestion Volumes:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed">
                    {project.dataUsed}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-stone-800 space-y-1.5">
                  <span className="font-mono text-xs font-bold uppercase text-slate-900 dark:text-white block">
                    Acknowledged Constraints &amp; Limitations:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-stone-400">
                    {project.dataLimitations.map((limit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold shrink-0">&bull;</span>
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Results: Actually Measured vs. Expected Benefits */}
            <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  4. Measured Outcomes vs. Expected Benefits
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Column A: Actually Measured Results */}
                <div className="rounded-2xl border border-emerald-300/80 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Actually Measured Results</span>
                  </div>

                  <ul className="space-y-3">
                    {project.results.measured.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-stone-200 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column B: Expected / Projected Future Benefits */}
                <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Expected &amp; Projected Benefits</span>
                  </div>

                  <ul className="space-y-3">
                    {project.results.expected.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                        <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5">&rarr;</span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* 5. Demonstration & Code Access */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-stone-800 bg-slate-50 dark:bg-stone-900/40 space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600 dark:text-teal-400" />
                <span>Demonstration, Code Repository &amp; Review Access</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                {project.accessNote || 'Architecture dossier, test suite, and benchmark fixtures available upon direct institutional inquiry.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-stone-800 hover:bg-slate-800 dark:hover:bg-stone-700 text-white font-mono text-xs px-5 py-2.5 transition-colors"
                  >
                    <span>View Repository Specs</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs px-5 py-2.5 transition-colors"
                >
                  <span>Request Technical Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Previous / Next Project Navigation Bar */}
            <div className="pt-8 border-t border-slate-200 dark:border-stone-800 flex items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="group flex flex-col text-left space-y-1 max-w-[45%]"
                >
                  <span className="text-[11px] font-mono text-slate-400 dark:text-stone-500 flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-teal-400">
                    <ArrowLeft className="h-3 w-3" />
                    Previous Project
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex flex-col text-right space-y-1 max-w-[45%] ml-auto"
                >
                  <span className="text-[11px] font-mono text-slate-400 dark:text-stone-500 flex items-center gap-1 justify-end group-hover:text-blue-600 dark:group-hover:text-teal-400">
                    Next Project
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>

          </div>

          {/* Right Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">

            {/* At a Glance Box */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-stone-800 bg-[#f8fafc] dark:bg-[#0c101a] space-y-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-stone-800">
                Project Profile At A Glance
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-stone-500 block uppercase">
                    Engagement Status
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                    {project.status}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-stone-500 block uppercase">
                    Client / Research Unit
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                    {project.clientOrInitiative}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-stone-500 block uppercase">
                    Practice Domain
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                    {project.sector}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-slate-400 dark:text-stone-500 block uppercase">
                    Engineering Hub
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                    Kigali, Rwanda &bull; BIGWI HOUSE
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-200 dark:border-stone-800 space-y-2">
                <span className="font-mono text-[11px] font-bold uppercase text-slate-400 dark:text-stone-500 block">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-[11px] font-mono text-slate-800 dark:text-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Protection Stamp */}
              <div className="pt-4 border-t border-slate-200 dark:border-stone-800 flex items-start gap-2.5 text-[11px] text-slate-500 dark:text-stone-400 font-mono">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Rwanda Law No. 058/2021 Data Protection &amp; Sovereignty Verified.
                </span>
              </div>
            </div>

            {/* Conversion CTA Box */}
            <div className="p-6 rounded-2xl bg-slate-950 dark:bg-stone-900 text-white space-y-4 shadow-xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-teal-400 font-semibold block">
                Direct Technical Collaboration
              </span>
              <h4 className="font-serif text-xl font-bold leading-snug">
                Explore a tailored architecture for your organization
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Schedule a confidential technical review with our principal data architects to assess data residency, ingestion pipelines, and ML integration.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 font-bold px-6 py-3 text-xs shadow hover:bg-stone-200 transition-colors"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}