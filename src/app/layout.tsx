import type { Metadata } from 'next'
import { Poppins, Montserrat, Manrope, Roboto, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/ClientShell'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DataSphere | BIGWI HOUSE — Data & AI Consultancy',
    template: '%s | DataSphere & BIGWI HOUSE',
  },
  description:
    'DataSphere Consulting Ltd is a Data & AI consultancy, with BIGWI HOUSE as its delivery unit. Explore support across data collection, analysis, model development and evaluation, deployment, monitoring, and advisory.',
  keywords: [
    'DataSphere Consulting',
    'BIGWI HOUSE',
    'Data and AI Consultancy',
    'Machine Learning Models',
    'Model Evaluation and Deployment',
    'Data Pipelines Rwanda',
    'Business Intelligence Dashboards',
    'Field Data Collection Africa',
    'Enterprise Data Strategy',
  ],
  authors: [{ name: 'DataSphere Consulting Ltd' }],
  creator: 'DataSphere Consulting Ltd',
  publisher: 'DataSphere Consulting Ltd',
  metadataBase: new URL('https://datasphere.rw'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datasphere.rw',
    title: 'DataSphere & BIGWI HOUSE — Data & AI Consultancy',
    description:
      'DataSphere Consulting Ltd and its BIGWI HOUSE delivery unit support organizations across the data and AI lifecycle.',
    siteName: 'DataSphere Consulting Ltd',
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
    title: 'DataSphere & BIGWI HOUSE — Data & AI Consultancy',
    description: 'Data collection, analytics, model building and evaluation, deployment, monitoring, and advisory.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DataSphere Consulting Ltd',
    alternateName: 'BIGWI HOUSE',
    url: 'https://datasphere.rw',
    logo: 'https://datasphere.rw/logo-datasphere.jpeg',
    description:
      'Data & AI consultancy delivering data collection pipelines, machine learning models, model evaluation, and analytics dashboards.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NM 155',
      addressLocality: 'Musanze',
      addressCountry: 'Rwanda',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'datasphere250@gmail.com',
        contactType: 'general inquiries',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+250 780 492 224',
        contactType: 'general inquiries',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1 (404) 720 4547',
        contactType: 'general inquiries',
      },
    ],
  }

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${roboto.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
