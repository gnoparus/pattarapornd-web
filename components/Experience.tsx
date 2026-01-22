'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

const experiences = [
  {
    id: 1,
    period: '2018 - Present',
    title: 'General Practitioner',
    organization: 'Phyathai Nawamin Hospital',
    description: 'Provided holistic medical care, diagnosing complex cases and applying evidence-based medicine. Collaborated with a multidisciplinary team to implement data-driven treatment plans.',
    achievements: [
      'Delivered comprehensive patient-centered care across diverse medical cases',
      'Collaborated with multidisciplinary teams on data-driven treatment protocols',
      'Fostered understanding of healthcare data workflows for improved patient outcomes',
    ],
  },
  {
    id: 2,
    period: '2016 - 2018',
    title: 'General Practitioner',
    organization: 'Bangson General Clinic',
    description: 'Delivered efficient outpatient care and built strong patient relationships through empathetic communication. Developed an acute ability to make quick decisions under pressure.',
    achievements: [
      'Provided efficient and compassionate outpatient care',
      'Built lasting patient relationships through empathetic communication',
      'Developed critical decision-making skills in high-pressure situations',
    ],
  },
  {
    id: 3,
    period: '2015 - 2016',
    title: 'General Practitioner',
    organization: 'Oboun Family Clinic (UC Clinic)',
    description: "Managed comprehensive care under Thailand's Universal Coverage Scheme, demonstrating experience in delivering quality healthcare with limited resources.",
    achievements: [
      'Delivered quality care within Universal Coverage Scheme constraints',
      'Managed comprehensive family medicine services efficiently',
      'Developed expertise in resource-optimized healthcare delivery',
    ],
  },
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="relative"
    >
      <Card className="border-l-4 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <motion.span 
                className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {experience.period}
              </motion.span>
              <CardTitle className="text-2xl text-foreground mb-2 font-display">
                {experience.title}
              </CardTitle>
              <p className="text-primary font-semibold mb-3">
                {experience.organization}
              </p>
            </div>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed text-base">
            {experience.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
            Key Achievements:
          </h4>
          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                className="flex items-start group"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              >
                <span className="text-primary mr-2 mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-muted-foreground">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section py-24 px-6 sm:px-8 lg:px-12 relative">
      {/* 
        Unsplash Background Images - Professional Experience Theme
        To update: Modify images in /lib/unsplashImages.ts -> experienceImages array
      */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      <div className="absolute right-10 bottom-1/4 w-80 h-80 rounded-lg opacity-10 blur-sm -z-10 overflow-hidden">
        <Image
          src={experienceImages[1].url}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={60}
          aria-hidden="true"
        />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and dedication to advancing healthcare excellence
          </p>
        </motion.div>

        {/* Hero image for experience section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="relative h-64 md:h-80">
            <Image 
              src={experienceImages[0].url}
              alt={experienceImages[0].alt}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex items-end justify-center pb-10">
              <p className="text-primary-foreground text-xl md:text-2xl font-bold text-center max-w-3xl px-6">
                Delivering exceptional patient care through innovation and expertise
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
