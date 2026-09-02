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
    default: 'BIGWI HOUSE — Digital Innovation & Product Development Division',
    template: '%s | BIGWI HOUSE — DataSphere Consulting Ltd.',
  },
  description:
    'BIGWI HOUSE is the engineering and digital innovation division of DataSphere Consulting Ltd. We turn ideas into digital businesses through enterprise software, web and mobile apps, AI & machine learning, and data intelligence.',
  keywords: [
    'Digital Transformation Rwanda',
    'Enterprise Software Kigali',
    'DataSphere Consulting',
    'BIGWI HOUSE',
    'AI Solutions East Africa',
    'Mobile App Development Rwanda',
    'Data Analytics BI',
    'Cloud Architecture',
    'SaaS Engineering Africa',
  ],
  authors: [{ name: 'DataSphere Consulting Ltd.' }],
  creator: 'BIGWI HOUSE',
  publisher: 'DataSphere Consulting Ltd.',
  metadataBase: new URL('https://bigwihouse.datasphere.rw'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bigwihouse.datasphere.rw',
    title: 'BIGWI HOUSE — We Turn Ideas Into Digital Businesses',
    description:
      'Digital Innovation and Product Development Division of DataSphere Consulting Ltd. Strategy, engineering, AI, and scalable digital platforms.',
    siteName: 'BIGWI HOUSE',
    images: [
      {
        url: '/logo-datasphere.jpeg',
        width: 800,
        height: 800,
        alt: 'DataSphere BIGWI HOUSE Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIGWI HOUSE — Digital Innovation & Engineering',
    description: 'We turn business strategy into working software and scalable digital products.',
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
      <body className="min-h-screen bg-bg text-ink font-sans antialiased overflow-x-hidden">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
