/**
 * Site Image Configuration
 * 
 * Stock images for use throughout the application.
 * All images are stored locally in the /public directory.
 */

export interface UnsplashImage {
  url: string
  alt: string
  photographer: string
  photographerUrl: string
}

/**
 * Hero Section Images
 * Theme: Medical excellence, modern healthcare, professionalism
 */
export const heroImages: UnsplashImage[] = [
  {
    // Main hero background - Elegant blurred lobby setting
    url: '/pattarapornd-abstract-blur-defocused-shopping-mall.jpg',
    alt: 'Elegant modern medical facility lobby',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Cosmetic botox treatment
    url: '/pattarapornd-cosmetic-botox-injection-female-forehead.jpg',
    alt: 'Professional cosmetic injection treatment',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Spa concept with stone therapy - warm and inviting for hero card
    url: '/pattarapornd-spa-concept-with-sideview-woman-with-long-dark-hair.jpg',
    alt: 'Spa stone therapy and holistic wellness treatment',
    photographer: '',
    photographerUrl: ''
  }
]

/**
 * Education Section Images
 * Theme: Academic excellence, learning, medical education
 */
export const educationImages: UnsplashImage[] = [
  {
    // Team of doctors conferencing - academic/professional
    url: '/pattarapornd-team-doctors-standing-conference-hospital-room-senior-doctor-discussing-about-treatment-patient-looking-laptop-coworkers-white-coats-working-together-analysing-symptoms-disease.jpg',
    alt: 'Medical team discussing patient treatment in hospital conference room',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Cosmetology studio - professional procedures
    url: '/pattarapornd-female-cosmetology-studio-procedures.jpg',
    alt: 'Professional cosmetology studio procedures',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Singing bowl / candle prayer - holistic healing
    url: '/pattarapornd-side-view-candles-prayer-being-lit.jpg',
    alt: 'Singing bowl and candle healing ceremony',
    photographer: '',
    photographerUrl: ''
  }
]

/**
 * Experience Section Images
 * Theme: Professional practice, medical expertise, patient care
 */
export const experienceImages: UnsplashImage[] = [
  {
    // Phayathai Nawamin Hospital - actual workplace
    url: '/pattarapornd-phayathai-navamin-hospital101.png',
    alt: 'Phayathai Nawamin Hospital interior',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Botox injection - aesthetic treatment expertise
    url: '/pattarapornd-cosmetic-botox-injection-female-forehead.jpg',
    alt: 'Professional cosmetic botox injection treatment',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Woman in therapy - close-up treatment
    url: '/pattarapornd-close-up-blurry-woman-therapy.jpg',
    alt: 'Woman relaxing during wellness therapy session',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Female cosmetology studio procedures
    url: '/pattarapornd-female-cosmetology-studio-procedures.jpg',
    alt: 'Professional cosmetology studio setting',
    photographer: '',
    photographerUrl: ''
  }
]

/**
 * Contact Section Images
 * Theme: Communication, connection, invitation to reach out
 */
export const contactImages: UnsplashImage[] = [
  {
    // Welcoming environment - elegant blurred lobby
    url: '/pattarapornd-abstract-blur-defocused-shopping-mall.jpg',
    alt: 'Welcoming modern medical facility',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Spa massage - relaxing wellness
    url: '/pattarapornd-young-beautiful-woman-relaxing-massage-spa-salon.jpg',
    alt: 'Relaxing spa and wellness experience',
    photographer: '',
    photographerUrl: ''
  }
]

/**
 * Medical Specialties / Services Section Images
 * Theme: Treatment procedures, patient care, modern aesthetics
 */
export const medicalSpecialtiesImages: UnsplashImage[] = [
  {
    // Cosmetic treatment - showcasing aesthetic procedures
    url: '/pattarapornd-cosmetic-botox-injection-female-forehead.jpg',
    alt: 'Professional cosmetic injection treatment',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Relaxing spa massage - massage therapy service
    url: '/pattarapornd-young-beautiful-woman-relaxing-massage-spa-salon.jpg',
    alt: 'Relaxing spa and wellness massage experience',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Singing bowl / candle healing - sound healing service
    url: '/pattarapornd-side-view-candles-prayer-being-lit.jpg',
    alt: 'Singing bowl and candle healing ceremony',
    photographer: '',
    photographerUrl: ''
  },
]

/**
 * Journey / CV Section Images
 * Theme: Academic, professional growth, healing arts
 */
export const journeyImages: UnsplashImage[] = [
  {
    // Team of doctors - academic/professional setting
    url: '/pattarapornd-team-doctors-standing-conference-hospital-room-senior-doctor-discussing-about-treatment-patient-looking-laptop-coworkers-white-coats-working-together-analysing-symptoms-disease.jpg',
    alt: 'Medical team discussing patient treatment in hospital conference room',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Cosmetology studio - professional procedures
    url: '/pattarapornd-female-cosmetology-studio-procedures.jpg',
    alt: 'Professional cosmetology studio procedures',
    photographer: '',
    photographerUrl: ''
  },
]

/**
 * Skills Section Images
 * Theme: Professional expertise, precision, patient care  
 */
export const skillsImages: UnsplashImage[] = [
  {
    // Close-up therapy - patient care expertise
    url: '/pattarapornd-close-up-blurry-woman-therapy.jpg',
    alt: 'Close-up of professional therapy session',
    photographer: '',
    photographerUrl: ''
  },
  {
    // Spa concept - holistic skills
    url: '/pattarapornd-spa-concept-with-sideview-woman-with-long-dark-hair.jpg',
    alt: 'Spa stone therapy and holistic wellness treatment',
    photographer: '',
    photographerUrl: ''
  },
]

/**
 * Helper function to get optimized image URL with custom dimensions
 * For local images, returns the URL as-is since Next.js Image handles optimization
 */
export function getOptimizedImageUrl(
  image: UnsplashImage,
  width: number,
  quality: number = 80
): string {
  return image.url
}

/**
 * Helper function to get responsive image srcset
 * For local images, Next.js Image component handles responsive sizing automatically
 */
export function getResponsiveSrcSet(
  image: UnsplashImage,
  widths: number[] = [640, 1024, 1920]
): string {
  return widths
    .map(width => `${image.url} ${width}w`)
    .join(', ')
}
