'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Award, Users, GraduationCap } from 'lucide-react'
import { heroImages } from '@/lib/unsplashImages'

export default function Hero() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: GraduationCap, label: 'Certifications', value: '6' },
    { icon: Users, label: 'Happy Patients', value: '155k+' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-violet-50 via-white to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Art Meets </span>
                  <span className="bg-linear-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent font-display">Aesthetic Medicine</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Where Medical Science Becomes Artistry
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-muted-foreground leading-relaxed max-w-xl"
              >
                Dr. Pattarapornd Suparcha combines aesthetic medicine expertise, anti-aging treatments, and artistic sensibility with traditional Thai healing for naturally beautiful results.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-base">
                <a href="#contact">Book Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Card className="overflow-hidden bg-white border-violet-100 shadow-elevated-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="aspect-4/3 relative overflow-hidden group">
                <Image
                  src={heroImages[2].url}
                  alt={heroImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-violet-900/20 to-purple-900/20" />
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-violet-600 text-xs font-semibold uppercase tracking-wider mb-2">Experience</div>
                    <div className="text-3xl font-bold text-foreground">10+ Years</div>
                  </div>
                  <div>
                    <div className="text-violet-600 text-xs font-semibold uppercase tracking-wider mb-2">Licenses</div>
                    <div className="text-3xl font-bold text-foreground">3 Board</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-violet-600 text-xs font-semibold uppercase tracking-wider mb-2">Patients</div>
                    <div className="text-3xl font-bold text-foreground">155k+ Happy</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-violet-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Board Certified</div>
                  <div className="text-sm font-semibold">Licensed Professional</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
