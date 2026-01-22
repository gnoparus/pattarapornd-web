'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2, Building2, Calendar } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

const experiences = [
  {
    id: 1,
    period: '2018 - Present',
    title: 'General Practitioner',
    organization: 'Phyathai Nawamin Hospital',
    location: 'Bangkok, Thailand',
    description: 'Providing holistic medical care in one of Bangkok\'s premier hospitals, diagnosing complex cases and applying evidence-based medicine in a multidisciplinary environment.',
    achievements: [
      'Delivered comprehensive patient-centered care across 500+ diverse medical cases annually',
      'Collaborated with multidisciplinary teams on data-driven treatment protocols',
      'Implemented healthcare data workflows that improved patient outcomes by 25%',
    ],
    borderColor: 'border-l-primary'
  },
  {
    id: 2,
    period: '2016 - 2018',
    title: 'General Practitioner',
    organization: 'Bangson General Clinic',
    location: 'Bangkok, Thailand',
    description: 'Delivered efficient outpatient care in a fast-paced clinic environment, building strong patient relationships through empathetic communication.',
    achievements: [
      'Provided efficient and compassionate outpatient care to 3000+ patients',
      'Built lasting patient relationships through empathetic communication',
      'Developed critical decision-making skills in high-pressure emergency situations',
    ],
    borderColor: 'border-l-accent'
  },
  {
    id: 3,
    period: '2015 - 2016',
    title: 'General Practitioner',
    organization: 'Oboun Family Clinic (UC Clinic)',
    location: 'Thailand',
    description: "Managed comprehensive care under Thailand's Universal Coverage Scheme, delivering quality healthcare with optimized resources.",
    achievements: [
      'Delivered quality care within Universal Coverage Scheme constraints',
      'Managed comprehensive family medicine services for diverse patient populations',
      'Developed expertise in resource-optimized healthcare delivery',
    ],
    borderColor: 'border-l-chart-3'
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
      <Card className={`${experience.borderColor} border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm group`}>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <motion.span 
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
                    experience.id === 1 ? 'bg-primary/10 text-primary' :
                    experience.id === 2 ? 'bg-accent/20 text-accent-foreground' :
                    'bg-chart-3/20 text-chart-3'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="w-4 h-4" />
                  {experience.period}
                </motion.span>
              </div>
              <CardTitle className="text-2xl text-foreground mb-2 font-display group-hover:text-primary transition-colors">
                {experience.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <Building2 className="w-4 h-4" />
                <span>{experience.organization}</span>
              </div>
              <p className="text-sm text-muted-foreground">{experience.location}</p>
            </div>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed text-base">
            {experience.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <h4 className="font-semibold text-foreground mb-4 flex items-center text-lg">
            <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
            Key Achievements
          </h4>
          <div className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                className="flex items-start group/item"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
              >
                <span className="text-primary mr-3 mt-1 text-lg group-hover/item:scale-125 transition-transform">✓</span>
                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
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
    <section id="experience" className="section py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <Image
          src={experienceImages[0].url}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          quality={60}
        />
      </div>
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-sm">Career Journey</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of dedication to advancing healthcare excellence and patient care
          </p>
        </motion.div>

        {/* Hero image for experience section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative group"
        >
          <div className="relative h-72 md:h-96">
            <Image 
              src={experienceImages[0].url}
              alt={experienceImages[0].alt}
              fill
              style={{ objectFit: 'cover' }}
              quality={85}
              className="group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent flex items-end justify-center pb-12">
              <motion.p 
                className="text-primary-foreground text-2xl md:text-3xl font-bold text-center max-w-3xl px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Delivering exceptional patient care through innovation, compassion, and expertise
              </motion.p>
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
