import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Leadership Team',
  description: 'Meet the executive partners, principal data architects, and applied AI practice directors leading DataSphere Consulting Ltd and BIGWI HOUSE in Kigali, Rwanda.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}