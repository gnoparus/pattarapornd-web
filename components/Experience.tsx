'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

const experiences = [
  {
    id: 1,
    period: '2020 - Present',
    title: 'Medical AI Integration Specialist',
    organization: 'Advanced Healthcare Systems',
    description: 'Leading implementation of AI-driven diagnostic systems, improving accuracy by 40% and reducing diagnosis time by 60%',
    achievements: [
      'Deployed machine learning models for early disease detection',
      'Trained medical staff on AI-assisted diagnosis',
      'Published research on predictive healthcare analytics',
    ],
  },
  {
    id: 2,
    period: '2018 - 2020',
    title: 'Senior General Practitioner',
    organization: 'Metropolitan Medical Center',
    description: 'Provided comprehensive primary care to diverse patient population, specializing in preventive medicine and chronic disease management',
    achievements: [
      'Managed patient caseload of 2000+ individuals',
      'Implemented holistic treatment protocols',
      'Achieved 95% patient satisfaction rating',
    ],
  },
  {
    id: 3,
    period: '2016 - 2018',
    title: 'Aesthetic Medicine Consultant',
    organization: 'Elite Wellness & Beauty Clinic',
    description: 'Specialized in non-invasive aesthetic procedures, skin rejuvenation, and anti-aging treatments',
    achievements: [
      'Performed 1000+ successful aesthetic procedures',
      'Developed personalized treatment plans',
      'Achieved excellence in patient outcomes',
    ],
  },
  {
    id: 4,
    period: '2015 - 2016',
    title: 'Holistic Wellness Practitioner',
    organization: 'Traditional Healing & Wellness Center',
    description: 'Integrated traditional Thai massage and sound therapy into modern medical practice',
    achievements: [
      'Certified in traditional Thai massage techniques',
      'Trained in Tibetan singing bowl therapy',
      'Treated 500+ patients with holistic approaches',
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
      <Card className="border-l-4 border-medical-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <motion.span 
                className="inline-block px-4 py-1 bg-medical-accent text-medical-primary rounded-full text-sm font-semibold mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {experience.period}
              </motion.span>
              <CardTitle className="text-2xl text-medical-dark mb-2 font-display">
                {experience.title}
              </CardTitle>
              <p className="text-medical-primary font-semibold mb-3">
                {experience.organization}
              </p>
            </div>
          </div>
          <CardDescription className="text-gray-700 leading-relaxed text-base">
            {experience.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <h4 className="font-semibold text-medical-dark mb-3 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-medical-primary" />
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
                <span className="text-medical-primary mr-2 mt-1 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-600">{achievement}</span>
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
    <section id="experience" className="section py-24 px-4 relative">
      {/* 
        Unsplash Background Images - Professional Experience Theme
        To update: Modify images in /lib/unsplashImages.ts -> experienceImages array
      */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-medical-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      <div 
        className="absolute right-10 bottom-1/4 w-80 h-80 rounded-lg opacity-10 blur-sm -z-10"
        style={{
          backgroundImage: `url('${experienceImages[1].url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-medical-dark mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
            <img 
              src={experienceImages[0].url}
              alt={experienceImages[0].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/90 via-medical-dark/50 to-transparent flex items-end justify-center pb-10">
              <p className="text-white text-xl md:text-2xl font-bold text-center max-w-3xl px-6">
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
