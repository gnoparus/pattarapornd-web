# Unsplash Image Integration Guide

This document explains how the Unsplash image integration works and how to update or replace images in the application.

## Overview

The application uses pre-selected Unsplash images to enhance the visual appeal of various sections:
- **Hero Section**: Background image for the main landing area
- **Education Section**: Images showcasing academic excellence and learning
- **Experience Section**: Professional medical practice imagery
- **Contact Section**: Welcoming and inviting communication visuals

All images are carefully selected to align with the medical professional theme.

## Architecture

### Image Configuration Module
All Unsplash images are centrally managed in `/lib/unsplashImages.ts`. This module contains:
- Pre-selected image URLs with optimization parameters
- Helper functions for responsive image handling
- Metadata including alt text and photographer attribution

### Next.js Image Component
The application uses Next.js's built-in `Image` component for:
- Automatic image optimization
- Responsive loading
- Better performance
- Proper SEO with alt text

### Configuration
Unsplash images are configured in `next.config.js` with:
```javascript
images: {
  unoptimized: true,  // Required for static export
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
  ],
}
```

## How to Update Images

### Step 1: Find New Images on Unsplash

1. Visit [Unsplash.com](https://unsplash.com)
2. Search for medical-themed images (e.g., "medical professional", "healthcare", "doctor", "hospital")
3. Select high-quality, professional images that match the section's purpose
4. Click on an image and copy its URL

### Step 2: Get the Optimized Image URL

Unsplash provides URL parameters for optimization:
- `?auto=format` - Automatically serves the best format (WebP, JPEG, etc.)
- `&fit=crop` - Crops the image to fit specified dimensions
- `&w=WIDTH` - Sets the width (e.g., `&w=1920` for full-width backgrounds)
- `&q=QUALITY` - Sets quality (1-100, recommended: 80)

Example optimized URL:
```
https://images.unsplash.com/photo-1234567890?auto=format&fit=crop&w=1920&q=80
```

### Step 3: Update the Image Configuration

Open `/lib/unsplashImages.ts` and update the relevant image array:

#### For Hero Section:
```typescript
export const heroImages: UnsplashImage[] = [
  {
    url: 'YOUR_NEW_UNSPLASH_URL_HERE',
    alt: 'Descriptive alt text for accessibility',
    photographer: 'Photographer Name',
    photographerUrl: 'https://unsplash.com/@photographerusername'
  }
]
```

#### For Education Section:
```typescript
export const educationImages: UnsplashImage[] = [
  // Image index 0: Main banner for academic qualifications
  // Image index 1: Background decoration
  // Image index 2: Professional certifications banner
]
```

#### For Experience Section:
```typescript
export const experienceImages: UnsplashImage[] = [
  // Image index 0: Hero image for experience section
  // Image index 1: Background decoration
]
```

#### For Contact Section:
```typescript
export const contactImages: UnsplashImage[] = [
  // Image index 0: Background image
  // Image index 1: Decorative banner
]
```

### Step 4: Test Your Changes

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Navigate to the section you updated and verify:
   - Image loads correctly
   - Image is relevant to the content
   - Text is readable over the image (check overlay gradients)
   - Image looks good on mobile and desktop

4. Build the application to ensure no errors:
   ```bash
   npm run build
   ```

## Image Optimization Tips

### Choosing the Right Quality
- **Background images**: Use `q=60` to `q=80` (balance between quality and file size)
- **Hero images**: Use `q=80` to `q=90` (higher quality for main visuals)
- **Decorative/blurred images**: Use `q=60` or lower (they're often blurred anyway)

### Choosing the Right Size
- **Full-width backgrounds**: `w=1920` or `w=2560` for retina displays
- **Section banners**: `w=1200` to `w=1600`
- **Decorative elements**: `w=800` or smaller

### Responsive Images
The `getOptimizedImageUrl` and `getResponsiveSrcSet` helper functions in `/lib/unsplashImages.ts` can generate optimized URLs for different screen sizes.

## Image Attribution

Unsplash images are free to use under the [Unsplash License](https://unsplash.com/license). While attribution is not required, it's appreciated and good practice. The application includes hidden attribution in the code.

## Troubleshooting

### Images Not Loading
1. Check the Unsplash URL is correct and accessible
2. Verify `images.unsplash.com` is in the `remotePatterns` in `next.config.js`
3. Clear browser cache and rebuild: `npm run build`
4. Check browser console for specific error messages

### Images Look Blurry
1. Increase the `&w=` parameter in the URL
2. Increase the `&q=` parameter (max 100)
3. Ensure the image source on Unsplash is high resolution

### Text Not Readable Over Image
1. Adjust the gradient overlay opacity in the component
2. Choose an image with better contrast
3. Modify the gradient direction (from-color/to-color)

## Component Reference

### Hero Component (`/components/Hero.tsx`)
- Uses `heroImages[0]` as background
- Full-screen background with white gradient overlay
- Priority loading for optimal LCP (Largest Contentful Paint)

### Education Component (`/components/Education.tsx`)
- `educationImages[0]`: Academic qualifications banner
- `educationImages[1]`: Subtle background decoration
- `educationImages[2]`: Professional certifications banner

### Experience Component (`/components/Experience.tsx`)
- `experienceImages[0]`: Main hero image for the section
- `experienceImages[1]`: Background decoration

### Contact Component (`/components/Contact.tsx`)
- `contactImages[0]`: Full background image (20% opacity)
- `contactImages[1]`: Decorative banner with call-to-action

## Best Practices

1. **Always use descriptive alt text** for accessibility
2. **Choose high-quality images** that are at least 1920px wide for backgrounds
3. **Test on multiple devices** to ensure images look good on all screen sizes
4. **Keep file sizes reasonable** by using appropriate quality settings
5. **Maintain thematic consistency** - all images should align with the medical professional theme
6. **Credit photographers** when possible (already included in code)

## Additional Resources

- [Unsplash API Documentation](https://unsplash.com/documentation)
- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)
- [Web Performance Best Practices](https://web.dev/fast/)
