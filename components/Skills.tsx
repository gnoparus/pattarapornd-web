'use client'

import { motion } from 'framer-motion'
import { Brain, Lightbulb, Users, Cpu } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      icon: Brain,
      title: 'Aesthetic Precision & Artistry',
      description:
        'Exceptional eye for facial symmetry and aesthetic harmony, combining medical expertise with artistic sensibility for naturally beautiful results.',
    },
    {
      icon: Lightbulb,
      title: 'Holistic Treatment Design',
      description:
        'Creating personalized treatment plans blending aesthetic medicine, anti-aging therapies, and traditional healing for comprehensive wellness.',
    },
    {
      icon: Users,
      title: 'Patient-Centered Communication',
      description:
        'Building trust through empathetic listening and clear communication, ensuring patients feel heard, understood, and confident.',
    },
    {
      icon: Cpu,
      title: 'Advanced Aesthetic Technology',
      description:
        'Mastery of cutting-edge aesthetic devices, laser systems, and FDA-approved treatments for safe, effective beauty enhancement.',
    },
  ]

  return (
    <section id="skills" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Core Competencies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Professional Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-20"
        >
          Essential competencies that drive excellence in modern healthcare and patient care.
        </motion.p>

        {/* Core skills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-[#f5f5f7] rounded-2xl p-7 group cursor-default"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-5">
                <skill.icon className="w-5 h-5 text-[#1d1d1f]" />
              </div>
              <h3 className="text-[#1d1d1f] font-semibold text-[17px] mb-3 group-hover:text-[var(--apple-accent)] transition-colors duration-200">
                {skill.title}
              </h3>
              <p className="text-[#6e6e73] text-[14px] leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
