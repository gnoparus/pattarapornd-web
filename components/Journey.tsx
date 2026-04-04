'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Download, Award } from 'lucide-react'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

export default function Journey() {
  const education = [
    {
      year: '2025 – 2027',
      title: 'Master of Science in Medicine',
      institution: 'Dhurakij Pundit University (DPU)',
      description:
        'Currently pursuing a Master of Science degree in Medicine, furthering clinical research and medical expertise in Anti-Aging and Regenerative Science.',
      icon: GraduationCap,
      current: true,
    },
    {
      year: '2023',
      title: 'Fundamental Occupational Medicine',
      institution: 'Chiang Mai University',
      description:
        'Specialized certification in occupational medicine fundamentals, workplace health, and safety protocols.',
      icon: Award,
      current: false,
    },
    {
      year: '2015',
      title: 'Doctor of Medicine (M.D.)',
      institution: 'Rangsit University, College of Medicine',
      description:
        "Graduated with comprehensive clinical training, focusing on internal medicine and patient-centered care across Thailand's top teaching hospitals.",
      icon: GraduationCap,
      current: false,
    },
  ]

  return (
    <section id="education" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Curriculum Vitae
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          The Journey to Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-2xl mx-auto mb-10"
        >
          From rigorous medical foundations to the forefront of aesthetic and anti-aging medicine.
        </motion.p>

        {/* Download CV link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <a
            href="/cv-dr-pattarapornd-suparcha-md-2026.pdf"
            download="CV Dr. Pattarapornd Suparcha, M.D. 2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#d2d2d7] text-[#1d1d1f] text-[14px] font-medium hover:bg-[#f5f5f7] active:scale-95 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download Full CV
          </a>
        </motion.div>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-20 rounded-3xl overflow-hidden shadow-apple group"
        >
          <div className="relative min-h-[200px]" style={{ aspectRatio: '16/5' }}>
            <Image
              src="/pattarapornd-group-surgeons-wearing-safety-masks-performing-operation-medicine-concept-surgery-medicine-people-concept-group-surgeons-operation-operating-room-hospital.jpg"
              alt="Surgeons performing operation in operating room"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1f]/70 via-[#1d1d1f]/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-14">
              <div className="text-white max-w-lg">
                <h3 className="font-bold leading-tight mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                  Academic Excellence
                </h3>
                <p className="text-white/80 text-[15px]">
                  From rigorous medical training to the forefront of aesthetic and anti-aging medicine
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean timeline */}
        <div className="space-y-0">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-40px' }}
              className="relative"
            >
              {/* Separator */}
              <div className="h-px bg-[#d2d2d7]" />
              <div className="py-10 grid sm:grid-cols-[180px_1fr] gap-6 items-start">
                {/* Year + icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    item.current ? 'bg-[var(--apple-accent)]' : 'bg-[#e8e8ed]'
                  }`}>
                    <item.icon className={`w-4 h-4 ${item.current ? 'text-white' : 'text-[#6e6e73]'}`} />
                  </div>
                  <span className={`text-[14px] font-semibold ${item.current ? 'text-[var(--apple-accent)]' : 'text-[#6e6e73]'}`}>
                    {item.year}
                  </span>
                  {item.current && (
                    <span className="px-2 py-0.5 bg-[var(--apple-accent)]/10 text-[var(--apple-accent)] text-[11px] font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[#1d1d1f] font-semibold text-[19px] mb-1">{item.title}</h3>
                  <p className="text-[#6e6e73] text-[14px] font-medium mb-3">{item.institution}</p>
                  <p className="text-[#6e6e73] text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="h-px bg-[#d2d2d7]" />
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 text-center"
        >
          <p
            className="text-[#1d1d1f] font-medium leading-relaxed max-w-3xl mx-auto mb-6"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
          >
            "True aesthetic medicine isn't just about correcting flaws — it's about
            understanding each patient's unique biology and helping them thrive."
          </p>
          <p className="text-[#6e6e73] text-[14px]">
            {DOCTOR_NAME_EN} · M.D., Aesthetic Physician
          </p>
        </motion.div>
      </div>
    </section>
  )
}
