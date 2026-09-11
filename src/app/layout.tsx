import type { Metadata } from 'next'
import { Poppins, Montserrat, Manrope, Roboto, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/ClientShell'
import { ThemeProvider } from '@/context/ThemeContext'

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
    'DataSphere Consulting Ltd and BIGWI HOUSE deliver data pipelines, machine learning model building, model evaluation, analytics dashboards, and strategic advisory for international organizations and enterprises.',
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
      'Data collection, machine learning models, model evaluation, analytics dashboards, and strategic advisory.',
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
    description: 'Data pipelines, applied machine learning, and business analytics.',
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
      addressLocality: 'Kigali',
      addressCountry: 'Rwanda',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@datasphere.rw',
      contactType: 'technical support and sales',
    },
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${roboto.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#07090E] text-slate-900 dark:text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-teal-100 dark:selection:bg-teal-900/40 selection:text-teal-900 dark:selection:text-teal-200 transition-colors duration-200">
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
