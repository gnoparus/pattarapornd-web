/**
 * Unsplash Image Configuration
 * 
 * This module contains pre-selected Unsplash images for use throughout the application.
 * All images are carefully chosen to align with the medical professional theme.
 * 
 * HOW TO UPDATE IMAGES:
 * 1. Visit https://unsplash.com to find new medical-themed images
 * 2. Select high-quality, professional images that match the section's purpose
 * 3. Use Unsplash's URL API to specify size parameters for optimization:
 *    - &w=WIDTH: Set width (e.g., &w=1920 for full width backgrounds)
 *    - &h=HEIGHT: Set height
 *    - &fit=crop: Crop to fit dimensions
 *    - &q=80: Set quality (80 is good balance between quality and file size)
 * 4. Update the relevant image URL below
 * 5. Test the page to ensure images load properly and look good
 * 
 * RESPONSIVE IMAGES:
 * - Use smaller images for mobile by adjusting the &w parameter
 * - Utilize Next.js Image component for automatic optimization
 * 
 * IMAGE ATTRIBUTION:
 * Unsplash photos are free to use under the Unsplash License.
 * Attribution is appreciated but not required.
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
    // Main hero background - Modern medical facility
    url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern medical facility with professional atmosphere',
    photographer: 'Olga Guryanova',
    photographerUrl: 'https://unsplash.com/@designer4u'
  },
  {
    // Alternative: Medical professional in modern setting
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80',
    alt: 'Medical professional in modern healthcare setting',
    photographer: 'Mufid Majnun',
    photographerUrl: 'https://unsplash.com/@mufidpwt'
  }
]

/**
 * Education Section Images
 * Theme: Academic excellence, learning, medical education
 */
export const educationImages: UnsplashImage[] = [
  {
    // Medical education and learning
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Medical education and academic excellence',
    photographer: 'National Cancer Institute',
    photographerUrl: 'https://unsplash.com/@nci'
  },
  {
    // Medical textbooks and research
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    alt: 'Medical research and academic study',
    photographer: 'Yudi Ela Lesnussa',
    photographerUrl: 'https://unsplash.com/@yudiela'
  },
  {
    // Graduation and achievement
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Academic achievement and graduation',
    photographer: 'Joshua Hoehne',
    photographerUrl: 'https://unsplash.com/@mrthetrain'
  }
]

/**
 * Experience Section Images
 * Theme: Professional practice, medical expertise, patient care
 */
export const experienceImages: UnsplashImage[] = [
  {
    // Medical professional at work
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    alt: 'Medical professional providing patient care',
    photographer: 'Jair Lázaro',
    photographerUrl: 'https://unsplash.com/@jairlazaro'
  },
  {
    // Healthcare technology and innovation
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Advanced medical technology and innovation',
    photographer: 'National Cancer Institute',
    photographerUrl: 'https://unsplash.com/@nci'
  },
  {
    // Medical consultation and expertise
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    alt: 'Medical consultation and professional expertise',
    photographer: 'Tima Miroshnichenko',
    photographerUrl: 'https://unsplash.com/@tima_photographer'
  },
  {
    // Holistic healthcare approach
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Holistic healthcare and wellness',
    photographer: 'Toa Heftiba',
    photographerUrl: 'https://unsplash.com/@heftiba'
  }
]

/**
 * Contact Section Images
 * Theme: Communication, connection, invitation to reach out
 */
export const contactImages: UnsplashImage[] = [
  {
    // Welcoming medical facility
    url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    alt: 'Welcoming medical facility entrance',
    photographer: 'Martha Dominguez de Gouveia',
    photographerUrl: 'https://unsplash.com/@mdominguezfoto'
  },
  {
    // Professional communication
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional healthcare communication',
    photographer: 'Toa Heftiba',
    photographerUrl: 'https://unsplash.com/@heftiba'
  }
]

/**
 * Helper function to get optimized image URL with custom dimensions
 * @param image - The Unsplash image object
 * @param width - Desired width in pixels
 * @param quality - Image quality (1-100, default: 80)
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  image: UnsplashImage,
  width: number,
  quality: number = 80
): string {
  const url = new URL(image.url)
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', quality.toString())
  url.searchParams.set('auto', 'format')
  url.searchParams.set('fit', 'crop')
  return url.toString()
}

/**
 * Helper function to get responsive image srcset
 * @param image - The Unsplash image object
 * @param widths - Array of widths for responsive images
 * @returns srcset string for responsive images
 */
export function getResponsiveSrcSet(
  image: UnsplashImage,
  widths: number[] = [640, 1024, 1920]
): string {
  return widths
    .map(width => `${getOptimizedImageUrl(image, width)} ${width}w`)
    .join(', ')
}
