'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { heroImages } from '@/lib/unsplashImages'

export default function Hero() {
  // Use the first hero image as the background
  const heroImage = heroImages[0]
  
  return (
    <section className="section min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* 
        Unsplash Background Image
        To update: Change the image in /lib/unsplashImages.ts -> heroImages array
        The image is overlaid with a gradient for better text readability
      */}
      <div className="absolute inset-0">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={80}
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-medical-dark mb-6">
            Medical Excellence
            <br />
            <span className="text-medical-primary bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              & Aesthetic Mastery
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Integrating cutting-edge medical technology with holistic wellness practices
          to deliver comprehensive healthcare solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#specialties"
            className="px-8 py-4 bg-medical-primary text-white rounded-full font-semibold hover:bg-medical-dark transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Specialties
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-white text-medical-primary border-2 border-medical-primary rounded-full font-semibold hover:bg-medical-accent transition-all duration-300 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-medical-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-medical-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-medical-accent rounded-full blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-medical-secondary rounded-full blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Image credit (hidden visually but accessible for attribution) */}
      <span className="sr-only">
        Photo by {heroImage.photographer} on Unsplash
      </span>
    </section>
  )
}
