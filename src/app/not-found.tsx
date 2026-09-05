import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 max-w-lg shadow-sm space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-xs text-amber-800 font-semibold">
          <Sparkles className="h-3 w-3" />
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        <h1 className="text-4xl font-display font-bold text-slate-900">
          Page Not Located
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          The requested route does not exist or has been relocated within the DataSphere Consulting website directory.
        </p>

        <div className="pt-2">
          <Link href="/" className="btn btn-primary text-sm">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
