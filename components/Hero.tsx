'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-15 -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Redefining Beauty through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Holistic Medicine
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dr. Pattarapornd Suparcha combines advanced aesthetic science with the healing traditions of Thai wellness for a truly transformative experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl">
                  <a href="#contact">Book Consultation</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl">
                  <a href="#services">Learn More</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent to-card p-8">
              {/* Spa/Aesthetic Image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
                  alt="Elegant aesthetic medicine spa setting"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={90}
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center p-4">
                    <p className="text-xs text-primary font-semibold uppercase mb-1">Experience</p>
                    <p className="text-2xl font-bold">10+ Years</p>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center p-4">
                    <p className="text-xs text-primary font-semibold uppercase mb-1">Licenses</p>
                    <p className="text-2xl font-bold">3 Boards</p>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center p-4">
                    <p className="text-xs text-primary font-semibold uppercase mb-1">Patients</p>
                    <p className="text-2xl font-bold">2k+ Happy</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
