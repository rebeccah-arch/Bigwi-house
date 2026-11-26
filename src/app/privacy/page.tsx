'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, CheckCircle2 } from '@/components/Icons'

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
        <div className="space-y-3 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-xs font-mono text-teal-800 dark:text-teal-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            Privacy Policy &amp; Data Governance
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            Last Updated: November 2026 &bull; DataSphere Consulting Ltd &amp; BIGWI HOUSE
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              1. Scope of this notice
            </h2>
            <p>
              This notice describes information submitted through the contact form on this website. It is not a substitute for project-specific data-processing, confidentiality, or intellectual-property terms, which should be reviewed and agreed separately before any engagement.
            </p>
            <div className="rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 p-4 space-y-2">
              <strong className="block text-teal-900 dark:text-teal-200 font-semibold">Please do not submit sensitive information:</strong>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Use the form for a brief introduction to your organization and inquiry. Do not include confidential business information, credentials, or sensitive personal data.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              2. Information Collected via the Website
            </h2>
            <p>
              The contact form asks for your name, email address, organization, job title, organization type, project message, and referral source. The proposal form asks for your name, email address, organization, organization type, area of interest, timeline, budget range, and project context. When submitted, the website sends these fields to its API routes. The current routes write inquiry details to application logs; this code does not configure a database, CRM, or email delivery service. Hosting-provider log access and retention depend on the deployment configuration.
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <span><strong>Contact and proposal inquiries:</strong> The fields listed above, submitted voluntarily through either form.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <span><strong>Application logs:</strong> The API routes currently log inquiry details to the server runtime. Do not submit confidential or sensitive information through either form.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              3. Engagement information
            </h2>
            <p>
              Do not send project datasets, credentials, or confidential material through this website. If an engagement proceeds, agree in writing on applicable confidentiality, data access, processing, ownership, retention, and security terms before sharing project information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              4. Retention and service providers
            </h2>
            <p>
              This application does not define a retention period for server logs. The website is hosted by a third-party deployment provider; its processing and log-retention practices are governed by that provider&apos;s terms and configuration. Confirm the current provider and retention settings before relying on this notice for compliance decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              5. Questions
            </h2>
            <p>
              For questions about this notice or a contact-form submission, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">DataSphere Consulting Ltd &bull; BIGWI HOUSE</p>
              <p>Email: <a href="mailto:datasphere250@gmail.com" className="text-teal-700 dark:text-teal-400 hover:underline">datasphere250@gmail.com</a></p>
              <p>Location: NM 155, Musanze, Rwanda</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
