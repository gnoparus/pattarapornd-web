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
    institution: 'Harvard Medical School',
    year: '2015',
    description: 'Specialized in Internal Medicine with honors, thesis on AI applications in diagnostics',
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Biomedical Engineering',
    institution: 'Massachusetts Institute of Technology',
    year: '2011',
    description: 'Focus on medical device innovation and computational biology',
    icon: GraduationCap,
  },
]

const certifications = [
  {
    id: 1,
    title: 'Board Certified in Internal Medicine',
    issuer: 'American Board of Internal Medicine',
    year: '2016',
    icon: Award,
  },
  {
    id: 2,
    title: 'Advanced Aesthetic Medicine Certification',
    issuer: 'International Board of Aesthetic Medicine',
    year: '2017',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Medical AI & Machine Learning Specialization',
    issuer: 'Stanford University',
    year: '2019',
    icon: Brain,
  },
  {
    id: 4,
    title: 'Certified Anti-Aging Medicine Specialist',
    issuer: 'American Academy of Anti-Aging Medicine',
    year: '2018',
    icon: Heart,
  },
  {
    id: 5,
    title: 'Traditional Thai Massage Therapist',
    issuer: 'Wat Pho Traditional Medical School',
    year: '2015',
    icon: Heart,
  },
  {
    id: 6,
    title: 'Tibetan Singing Bowl Sound Healing Practitioner',
    issuer: 'International Sound Healing Academy',
    year: '2016',
    icon: Music,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section py-24 px-4 bg-gradient-to-b from-medical-accent/30 to-transparent relative overflow-hidden">
      {/* 
        Unsplash Background Images - Educational Theme
        To update: Modify images in /lib/unsplashImages.ts -> educationImages array
        Multiple subtle background images create visual interest
      */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-medical-secondary rounded-full blur-3xl opacity-5 -z-10"></div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-medical-dark mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Continuously advancing knowledge and expertise through rigorous academic and professional development
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-medical-dark mb-8 font-display"
          >
            Academic Qualifications
          </motion.h3>
          
          {/* Decorative image banner for academic section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div className="relative h-48 md:h-64">
              <Image 
                src={educationImages[0].url}
                alt={educationImages[0].alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/80 to-transparent flex items-center px-8">
                <p className="text-white text-lg md:text-xl font-semibold max-w-md">
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
                  <Card className="border-l-4 border-medical-secondary hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start flex-1">
                          <motion.div 
                            className="mr-4 mt-1"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-8 h-8 text-medical-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-medical-dark mb-2">{edu.degree}</CardTitle>
                            <p className="text-medical-primary font-semibold mb-2">{edu.institution}</p>
                            <CardDescription className="text-gray-600">{edu.description}</CardDescription>
                          </div>
                        </div>
                        <span className="inline-block px-4 py-1 bg-medical-secondary/20 text-medical-primary rounded-full text-sm font-semibold ml-4">
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
            className="text-3xl font-bold text-medical-dark mb-8 font-display"
          >
            Professional Certifications
          </motion.h3>
          
          {/* Decorative image for certifications section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div className="relative h-40 md:h-48">
              <Image 
                src={educationImages[2].url}
                alt={educationImages[2].alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-medical-secondary/80 to-transparent flex items-center justify-end px-8">
                <p className="text-white text-lg md:text-xl font-semibold max-w-md text-right">
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
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white/80 backdrop-blur-sm border-medical-accent hover:border-medical-secondary">
                    <CardContent className="p-6">
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-10 h-10 text-medical-primary" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-medical-dark mb-2 group-hover:text-medical-primary transition-colors">{cert.title}</h4>
                      <p className="text-sm text-medical-primary mb-2">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-medical-accent text-medical-dark rounded-full text-xs font-semibold">
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
