'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { heroImages } from '@/lib/unsplashImages'
import { Award, Users, Sparkles, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[2].url}
          alt={heroImages[2].alt}
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
          priority
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-primary/60 to-foreground/80" />
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary-foreground">Excellence in Holistic Medicine</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Every Life Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                World-Class Care
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Dr. Pattarapornd Suparcha bridges advanced aesthetic medicine with traditional Thai healing for transformative, compassionate care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-2xl hover:shadow-primary/50">
                  <a href="#contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Book Consultation
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/20 hover:border-primary shadow-xl">
                  <a href="#services">Explore Services</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Stats - Horizontal */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-foreground mb-1">10+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div className="text-center border-l border-r border-primary-foreground/20">
                <p className="text-4xl font-bold text-primary-foreground mb-1">6</p>
                <p className="text-sm text-muted">Certifications</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-foreground mb-1">2k+</p>
                <p className="text-sm text-muted">Happy Patients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative space-y-6"
          >
            {/* Main Image Card */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={heroImages[0].url}
                  alt={heroImages[0].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={90}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
                
                {/* Bottom overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    Aesthetic Excellence
                  </h3>
                  <p className="text-muted text-lg">
                    Where science meets artistry in modern medicine
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all border-primary/20 hover:border-primary/40 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Board Certified</h4>
                      <p className="text-sm text-muted-foreground">Licensed Professional</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all border-primary/20 hover:border-primary/40 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Patient-Centered</h4>
                      <p className="text-sm text-muted-foreground">Compassionate Care</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
