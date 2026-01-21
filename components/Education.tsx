'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    id: 1,
    degree: 'Doctor of Medicine (M.D.)',
    institution: 'Harvard Medical School',
    year: '2015',
    description: 'Specialized in Internal Medicine with honors, thesis on AI applications in diagnostics',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Biomedical Engineering',
    institution: 'Massachusetts Institute of Technology',
    year: '2011',
    description: 'Focus on medical device innovation and computational biology',
  },
]

const certifications = [
  {
    id: 1,
    title: 'Board Certified in Internal Medicine',
    issuer: 'American Board of Internal Medicine',
    year: '2016',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Advanced Aesthetic Medicine Certification',
    issuer: 'International Board of Aesthetic Medicine',
    year: '2017',
    icon: '💉',
  },
  {
    id: 3,
    title: 'Medical AI & Machine Learning Specialization',
    issuer: 'Stanford University',
    year: '2019',
    icon: '🤖',
  },
  {
    id: 4,
    title: 'Certified Anti-Aging Medicine Specialist',
    issuer: 'American Academy of Anti-Aging Medicine',
    year: '2018',
    icon: '✨',
  },
  {
    id: 5,
    title: 'Traditional Thai Massage Therapist',
    issuer: 'Wat Pho Traditional Medical School',
    year: '2015',
    icon: '🙏',
  },
  {
    id: 6,
    title: 'Tibetan Singing Bowl Sound Healing Practitioner',
    issuer: 'International Sound Healing Academy',
    year: '2016',
    icon: '🎵',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section py-24 px-4 bg-gradient-to-b from-medical-accent/30 to-transparent">
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
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-medical-secondary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-medical-dark">{edu.degree}</h4>
                  <span className="inline-block px-4 py-1 bg-medical-secondary/20 text-medical-primary rounded-full text-sm font-semibold mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-medical-primary font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-medical-dark mb-2">{cert.title}</h4>
                <p className="text-sm text-medical-primary mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-medical-accent text-medical-dark rounded-full text-xs font-semibold">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
