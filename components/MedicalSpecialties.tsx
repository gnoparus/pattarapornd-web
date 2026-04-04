'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Stethoscope, Sparkles, Activity, Wind, Music, Palette } from 'lucide-react'

export default function MedicalSpecialties() {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Practice',
      description:
        'Comprehensive primary care with preventive medicine, evidence-based treatment, and patient-centered approach. Experienced in SSO and check-up departments.',
    },
    {
      icon: Activity,
      title: 'Occupational Health',
      description:
        'Specialized in occupational health and safety protocols, workplace health assessments, and ensuring employee health standards compliance.',
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Medicine',
      description:
        'Expert in filler techniques and aesthetic procedures. Teaching Assistant for hands-on aesthetic training at CMC Training Center and Academy Aesthetic Training.',
    },
    {
      icon: Wind,
      title: 'Anti-Aging & Regenerative',
      description:
        'Currently pursuing M.Sc. in Anti-Aging and Regenerative Science, applying cutting-edge regenerative medicine approaches for holistic wellness.',
    },
    {
      icon: Music,
      title: 'Traditional Healing',
      description:
        'Certified in Traditional Thai Massage and Tibetan Singing Bowl Sound Healing, integrating ancient techniques with modern medical practice.',
    },
    {
      icon: Palette,
      title: 'Digital Commercial Art',
      description:
        'Passionate Digital Commercial Artist, bringing a unique blend of scientific precision and creative vision to every project.',
    },
  ]

  return (
    <section id="services" className="bg-[#f5f5f7] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Our Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Comprehensive Care
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-16"
        >
          Bridging clinical practice with education and creative artistry.
        </motion.p>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-16 rounded-3xl overflow-hidden shadow-apple group"
        >
          <div className="relative min-h-[200px]" style={{ aspectRatio: '16/5' }}>
            <Image
              src="/pattarapornd-team-doctors-standing-conference-hospital-room-senior-doctor-discussing-about-treatment-patient-looking-laptop-coworkers-white-coats-working-together-analysing-symptoms-disease.jpg"
              alt="Team of doctors in conference room"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1f]/70 via-[#1d1d1f]/40 to-transparent" />
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center px-8 sm:px-14"
            >
              <div className="text-white max-w-lg pr-8 sm:pr-0">
                <h3 className="font-bold leading-tight mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                  Expert Medical Care
                </h3>
                <p className="text-white/80 text-[15px]">
                  Combining modern medical science with traditional healing for complete wellness
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-white rounded-2xl p-7 shadow-apple cursor-default group"
            >
              <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8e8ed] transition-colors duration-200">
                <service.icon className="w-5 h-5 text-[#1d1d1f]" />
              </div>
              <h3 className="text-[#1d1d1f] font-semibold text-[17px] mb-2 group-hover:text-[var(--apple-accent)] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[#6e6e73] text-[14px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
