'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Heart, Award, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-sm">About the Doctor</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Meet Dr. Pattarapornd
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bridging rigorous medical training with a passion for holistic healing. 
            Dr. Suparcha believes true beauty radiates from a balance of inner health and outer care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Professional Photo with overlay info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Pattarapornd Suparcha"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                quality={90}
                className="group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
              
              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="text-3xl font-bold text-primary-foreground">Dr. Pattarapornd Suparcha</h3>
                  <p className="text-lg text-muted">M.D., Aesthetic Medicine Specialist</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary-foreground border border-primary/30">
                      General Practice
                    </span>
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary-foreground border border-primary/30">
                      Aesthetic Medicine
                    </span>
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary-foreground border border-primary/30">
                      Holistic Wellness
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Aesthetic Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced aesthetic procedures including precision injectables, laser treatments, 
                      and skin rejuvenation techniques. Using only FDA-approved technology 
                      to ensure optimal safety and natural-looking results.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Heart className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Holistic Healing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Integrating traditional Thai massage and Tibetan singing bowl therapy 
                      for deep cellular relaxation and stress relief. Our treatments heal from 
                      within, addressing both body and spirit.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-chart-3">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-chart-3/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-chart-3/30 transition-colors">
                    <Award className="w-7 h-7 text-chart-3" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Evidence-Based Care</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Committed to continuous learning and staying current with the latest 
                      medical research. Every treatment plan is backed by scientific evidence 
                      and tailored to individual patient needs.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 p-12 text-white border-none shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6"
              >
                <Target className="w-16 h-16 mx-auto mb-4 text-white/90" />
              </motion.div>
              <p className="text-2xl md:text-3xl italic mb-6 leading-relaxed font-light">
                "My mission is to help patients feel confident and peaceful in their own 
                skin, blending the precision of medical science with the timeless art of healing."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-16 h-0.5 bg-white/40"></div>
                <p className="font-semibold text-lg">Dr. Pattarapornd Suparcha</p>
                <div className="w-16 h-0.5 bg-white/40"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
