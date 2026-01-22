'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GraduationCap, Award, Brain, Sparkles, Heart, Music } from 'lucide-react'
import { educationImages } from '@/lib/unsplashImages'

const education = [
  {
    id: 1,
    degree: 'Doctor of Medicine (M.D.)',
    institution: 'Rangsit University (Rajavithi Hospital) College of Medicine',
    year: '2015',
    description: 'Emphasized patient-centered care with hands-on training in a clinical environment',
    icon: GraduationCap,
  },
]

const certifications = [
  {
    id: 1,
    title: 'Certificate in Basic Occupational Medicine',
    issuer: 'Chiang Mai University',
    year: '2016',
    icon: Award,
  },
  {
    id: 2,
    title: 'Certificate in Basic Anti-aging and Regenerative Medicine',
    issuer: 'Dhurakij Pundit University',
    year: '2017',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Covid-19 and Epidemiology',
    issuer: 'Kasetsart University (Online Course)',
    year: '2020',
    icon: Brain,
  },
  {
    id: 4,
    title: 'Traditional Thai Massage Therapist',
    issuer: 'Traditional Medical School',
    year: '2015',
    icon: Heart,
  },
  {
    id: 5,
    title: 'Tibetan Singing Bowl Sound Healing Practitioner',
    issuer: 'Traditional Healing Institute',
    year: '2016',
    icon: Music,
  },
  {
    id: 6,
    title: 'Rajavithi Advanced Trauma Course',
    issuer: 'Rajavithi Hospital - Medical Students Program',
    year: '2014',
    icon: Award,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section py-24 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-muted/30 to-transparent relative overflow-hidden">
      {/* 
        Unsplash Background Images - Educational Theme
        To update: Modify images in /lib/unsplashImages.ts -> educationImages array
        Multiple subtle background images create visual interest
      */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      <div className="absolute left-10 top-1/4 w-64 h-64 rounded-lg opacity-10 blur-sm -z-10 overflow-hidden">
        <Image
          src={educationImages[1].url}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={60}
          aria-hidden="true"
        />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously advancing knowledge and expertise through rigorous academic and professional development
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-foreground mb-8 font-display"
          >
            Academic Qualifications
          </motion.h3>
          
          {/* Decorative image banner for academic section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-elevated-lg hover:shadow-2xl transition-shadow duration-500 relative group"
          >
            <div className="relative h-48 md:h-64">
              <Image 
                src={educationImages[0].url}
                alt={educationImages[0].alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent flex items-center px-8">
                <p className="text-primary-foreground text-lg md:text-xl font-semibold max-w-md">
                  Committed to lifelong learning and academic excellence in medical science
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Card className="border-l-4 border-primary hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start flex-1">
                          <motion.div 
                            className="mr-4 mt-1"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-6 h-6 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-foreground mb-2">{edu.degree}</CardTitle>
                            <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                            <CardDescription className="text-muted-foreground">{edu.description}</CardDescription>
                          </div>
                        </div>
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold ml-4">
                          {edu.year}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-foreground mb-8 font-display"
          >
            Professional Certifications
          </motion.h3>
          
          {/* Decorative image for certifications section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-elevated-lg hover:shadow-2xl transition-shadow duration-500 relative group"
          >
            <div className="relative h-40 md:h-48">
              <Image 
                src={educationImages[2].url}
                alt={educationImages[2].alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-l from-primary/80 to-transparent flex items-center justify-end px-8">
                <p className="text-primary-foreground text-lg md:text-xl font-semibold max-w-md text-right">
                  Continuous professional development and specialized certifications
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05, ease: [0.6, -0.05, 0.01, 0.99] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-card/80 backdrop-blur-sm border-muted hover:border-primary">
                    <CardContent className="p-6">
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                      <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-foreground rounded-full text-xs font-semibold">
                        {cert.year}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
