import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/ClientShell'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DataSphere Consulting Ltd — Enterprise Software & Data Engineering',
    template: '%s | DataSphere Consulting Ltd',
  },
  description:
    'DataSphere Consulting Ltd delivers enterprise software engineering, robust data pipelines, analytics & business intelligence, cloud architecture, and digital transformation for organizations across East Africa and beyond.',
  keywords: [
    'DataSphere Consulting',
    'Data Engineering Rwanda',
    'Enterprise Software Kigali',
    'Data Analytics BI East Africa',
    'Custom Software Development',
    'Cloud DevOps Africa',
    'SaaS Engineering',
    'Digital Transformation',
  ],
  authors: [{ name: 'DataSphere Consulting Ltd' }],
  creator: 'DataSphere Consulting Ltd',
  publisher: 'DataSphere Consulting Ltd',
  metadataBase: new URL('https://datasphere.rw'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datasphere.rw',
    title: 'DataSphere Consulting Ltd — Transforming Enterprise Data Into Value',
    description:
      'Enterprise Software, Data Engineering, Business Intelligence, and Digital Consulting.',
    siteName: 'DataSphere Consulting',
    images: [
      {
        url: '/logo-datasphere.jpeg',
        width: 800,
        height: 800,
        alt: 'DataSphere Consulting Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataSphere Consulting Ltd — Enterprise Software & Data Engineering',
    description: 'Transforming enterprise data and operations with scalable software solutions.',
    images: ['/logo-datasphere.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
