'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Compass, ArrowRight } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 sm:p-12 max-w-lg shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 px-3.5 py-1 font-mono text-xs text-teal-800 dark:text-teal-300 font-semibold">
          <Compass className="h-3.5 w-3.5" />
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Route Not Located
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          The requested page does not exist or has been relocated within the DataSphere &amp; BIGWI HOUSE directory.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/" className="btn btn-primary text-xs sm:text-sm py-2 px-4">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link href="/services" className="btn btn-ghost text-xs sm:text-sm py-2 px-4">
            <span>Explore Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
