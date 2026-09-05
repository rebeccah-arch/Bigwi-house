import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Building2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Target, 
} from '@/components/Icons'
import { 
  orgStructure, 
  vision, 
  mission, 
  competitiveAdvantage, 
} from '@/content/bigwiContent'

export const metadata: Metadata = {
  title: 'About DataSphere Consulting Ltd',
  description:
    'Learn about DataSphere Consulting Ltd, our corporate structure, data engineering capabilities, and digital solutions division across East Africa.',
}

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 font-mono text-xs text-teal-800 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              <span>Corporate Profile &bull; Enterprise Consulting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Where strategic advisory and software engineering meet.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">DataSphere Consulting Ltd</strong> is a premier software engineering, data analytics, and digital transformation consulting firm based in Kigali, Rwanda. We turn complex organizational challenges and disparate data assets into scalable, resilient digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dual-Tier Corporate Structure */}
      <section id="structure" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Organizational Structure</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Integrated Capabilities &amp; Specialized Units
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              A cohesive architecture combining executive advisory with deep in-house engineering and data intelligence capabilities.
            </p>
          </div>

          <div className="space-y-6">
            {/* Parent Firm: DataSphere Consulting */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{orgStructure.parent.label}</h3>
                    <p className="font-sans text-xs text-teal-700 font-semibold">{orgStructure.parent.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full font-medium">
                  Advisory &amp; Data Intelligence
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.parent.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Flow Arrow */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-sans text-xs text-slate-600 shadow-sm font-medium">
                <span>Direct Strategic Alignment &amp; Engineering Pipeline</span>
                <span className="text-teal-600">&darr;</span>
              </div>
            </div>

            {/* Solutions Division */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-200/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{orgStructure.child.label}</h3>
                    <p className="font-sans text-xs text-teal-800 font-semibold">{orgStructure.child.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-teal-800 border border-teal-200 bg-white px-3 py-1 rounded-full font-medium">
                  Engineering &amp; Product Delivery
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.child.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-teal-100 bg-white p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {vision}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-200">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Philosophy & Innovation Lab */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12 space-y-6 shadow-sm">
            <span className="eyebrow">Engineering Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Reliable Engineering for Real-World Demands
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Every engagement at DataSphere begins with a <strong>business-first diagnosis</strong>: understanding core organizational workflows, compliance standards, and operational constraints before writing architecture. We avoid one-size-fits-all software templates.
              </p>
              <p>
                Our team builds production systems applying modern data pipelines, cloud-native DevOps, and robust API frameworks to concrete institutional priorities across East Africa. We design resilient systems built for high transaction volume, data integrity, and long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Competitive Advantages */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow-navy mb-2">Key Differentiators</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Why Organizations Choose DataSphere
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Measurable outcomes, transparent engineering governance, and dedicated long-term partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantage.map((adv, idx) => (
              <div
                key={adv}
                className="card-enterprise flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-teal-700">0{idx + 1}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-slate-900">{adv}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="font-sans text-xs text-slate-500 font-medium">Guaranteed Execution Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Ready to partner with DataSphere Consulting?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Schedule a discovery consultation with our senior solutions architects to explore how we can architect your next software platform or data pipeline.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal">
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
