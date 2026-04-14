import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: DOCTOR_NAME_EN,
  alternateName: DOCTOR_NAME_TH,
  url: 'https://pattarapornd.com',
  image: 'https://pattarapornd.com/studio-photo-1.jpg',
  description:
    'Aesthetic and anti-aging physician based in Bangkok, Thailand, focused on wellness, preventive care, and regenerative medicine.',
  medicalSpecialty: ['Aesthetic Medicine', 'Preventive Medicine', 'Anti-Aging Medicine'],
  areaServed: {
    '@type': 'City',
    name: 'Bangkok',
  },
  availableLanguage: ['th', 'en'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangkok',
    addressCountry: 'TH',
  },
}

export default function SchemaMarkup() {
  const safeJsonLd = JSON.stringify(physicianSchema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd }}
    />
  )
}
