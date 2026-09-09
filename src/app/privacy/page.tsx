'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2 } from '@/components/Icons'

export default function PrivacyPage() {
  return (
    <div className="space-y-12 py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-xs font-mono text-teal-800 dark:text-teal-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Privacy Policy &amp; Data Governance
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            Last Updated: August 2026 &bull; DataSphere Consulting Ltd &amp; BIGWI HOUSE
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              1. Institutional Commitment to Data Sovereignty
            </h2>
            <p>
              DataSphere Consulting Ltd (&ldquo;DataSphere&rdquo;) and its specialized consultancy hub, BIGWI HOUSE, operate with strict data sovereignty principles. We recognize that our clients—including financial institutions, public entities, international development partners, and commercial enterprises—entrust us with sensitive operational records, databases, and proprietary workflows.
            </p>
            <div className="rounded-2xl border border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30 p-4 space-y-2">
              <strong className="block text-teal-900 dark:text-teal-200 font-semibold">Core Principle:</strong>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                You retain 100% ownership and intellectual property rights over all raw data, schemas, trained model weights, and custom codebase artifacts created during our engagements. We never pool, resell, or repurpose client data for generic AI training.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              2. Information Collected via the Website
            </h2>
            <p>
              When you interact with our public web portal (datasphere.rw), we collect minimal information necessary to respond to technical inquiries:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <span><strong>Contact Inquiries:</strong> Full name, professional work email, organization name, project scope, and target timelines submitted through inquiry forms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <span><strong>Technical Diagnostics:</strong> Standard anonymized HTTP server logs and performance telemetry to detect broken routes and maintain platform availability.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              3. Non-Disclosure &amp; Engagement Confidentiality
            </h2>
            <p>
              Prior to accessing client databases, field surveys, or API keys, DataSphere executes comprehensive mutual Non-Disclosure Agreements (NDAs). All consulting staff and engineers are bound by strict contractual confidentiality clauses and receive regular training on regional data privacy frameworks (including Rwanda Data Protection Law No. 058/2021 and international standards).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              4. Security Measures &amp; Infrastructure
            </h2>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest) across all API endpoints, cloud environments, and database deployments. We enforce principle-of-least-privilege role-based access control (RBAC) and conduct periodic vulnerability scans.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              5. Contacting the Data Protection Officer
            </h2>
            <p>
              For questions regarding this policy, data processing agreements, or to request record deletion, please contact our team directly:
            </p>
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">DataSphere Consulting Ltd &bull; BIGWI HOUSE</p>
              <p>Email: <a href="mailto:contact@datasphere.rw" className="text-teal-700 dark:text-teal-400 hover:underline">contact@datasphere.rw</a></p>
              <p>Location: Kigali, Rwanda</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
