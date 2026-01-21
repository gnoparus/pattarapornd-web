'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-medical-primary">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <span className="inline-block px-4 py-1 bg-medical-accent text-medical-primary rounded-full text-sm font-semibold mb-3">
              {experience.period}
            </span>
            <h3 className="text-2xl font-bold text-medical-dark mb-2 font-display">
              {experience.title}
            </h3>
            <p className="text-medical-primary font-semibold mb-3">
              {experience.organization}
            </p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold text-medical-dark mb-2">Key Achievements:</h4>
          {experience.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start">
              <span className="text-medical-primary mr-2 mt-1">✓</span>
              <span className="text-gray-600">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section py-24 px-4">
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

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
