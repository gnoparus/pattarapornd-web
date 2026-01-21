'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-medical-dark mb-6">
            Medical Excellence
            <br />
            <span className="text-medical-primary">& Aesthetic Mastery</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Integrating cutting-edge medical technology with holistic wellness practices
          to deliver comprehensive healthcare solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#specialties"
            className="px-8 py-4 bg-medical-primary text-white rounded-full font-semibold hover:bg-medical-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Specialties
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-medical-primary border-2 border-medical-primary rounded-full font-semibold hover:bg-medical-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20"
        >
          <div className="inline-block animate-bounce">
            <svg
              className="w-8 h-8 text-medical-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-medical-accent rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-medical-secondary rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
    </section>
  )
}
