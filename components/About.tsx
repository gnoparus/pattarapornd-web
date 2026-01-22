'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Heart } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-purple-600 font-semibold uppercase tracking-wide mb-3">About the Doctor</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Dr. Pattarapornd
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From a foundation in rigorous medical training to a passion for holistic healing, 
            Dr. Suparcha bridges the gap between science and serenity. She believes 
            that true beauty radiates from a balance of inner health and outer care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Pattarapornd Suparcha"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={90}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Aesthetic Artistry</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Precision injectables, laser treatments, and advanced skin rejuvenation 
                    techniques tailored to your unique features. We use only FDA-approved 
                    technology to ensure safety and results.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Holistic Wellness</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Integrating singing bowl therapy and therapeutic Thai massage for 
                    deep cellular relaxation and stress relief. Our treatments go beyond 
                    the surface to heal from within.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl shadow-xl text-white"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-lg italic mb-4 leading-relaxed">
                "My mission is to help patients feel confident and peaceful in their own 
                skin, blending the precision of science with the art of healing."
              </p>
              <p className="font-semibold">— Dr. Pattarapornd Suparcha</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
