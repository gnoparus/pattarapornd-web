import type { Metadata } from 'next'
import './globals.css'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'
import { SITE_URL } from '@/lib/site'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DOCTOR_NAME_EN} - Aesthetic & Anti-Aging Physician`,
    template: `%s | ${DOCTOR_NAME_EN} - Aesthetic & Anti-Aging Physician`,
  },
  description:
    'Professional medical portfolio of Dr. Pattarapornd Suparcha, an aesthetic and anti-aging physician in Bangkok specializing in wellness, preventive care, and regenerative medicine.',
  keywords: [
    'Dr. Pattarapornd Suparcha',
    'Aesthetic physician Bangkok',
    'Anti-aging physician Bangkok',
    'Wellness doctor Bangkok',
    'Preventive medicine',
    'Regenerative medicine',
    'Medical portfolio',
    DOCTOR_NAME_TH,
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: DOCTOR_NAME_EN,
    title: `${DOCTOR_NAME_EN} - Aesthetic & Anti-Aging Physician`,
    description:
      'Discover the medical portfolio of Dr. Pattarapornd Suparcha, aesthetic and anti-aging physician based in Bangkok, Thailand.',
    locale: 'en_US',
    images: [
      {
        url: '/studio-photo-202-16-9.jpg',
        width: 1792,
        height: 2388,
        alt: `${DOCTOR_NAME_EN} medical portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${DOCTOR_NAME_EN} - Aesthetic & Anti-Aging Physician`,
    description:
      'Professional portfolio of Dr. Pattarapornd Suparcha, aesthetic and anti-aging physician in Bangkok.',
    images: ['/studio-photo-202-16-9.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white">
        <SchemaMarkup />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
