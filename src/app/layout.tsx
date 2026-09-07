import type { Metadata } from 'next'
import { Poppins, Montserrat, Manrope, Roboto, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from '@/components/ClientShell'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
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
    default: 'DataSphere Consulting Ltd  Enterprise Software & Data Engineering',
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
    title: 'DataSphere Consulting Ltd  Transforming Enterprise Data Into Value',
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
    title: 'DataSphere Consulting Ltd  Enterprise Software & Data Engineering',
    description: 'Transforming enterprise data and operations with scalable software solutions.',
    images: ['/logo-datasphere.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { ThemeProvider } from '@/context/ThemeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable} ${manrope.variable} ${roboto.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
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
