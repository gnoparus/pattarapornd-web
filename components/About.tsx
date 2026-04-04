'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function About() {
  const services = [
    {
      title: 'Aesthetic Artistry',
      description:
        'Merging medical precision with artistic vision for natural beauty enhancement — advanced injectables, laser treatments, and skin rejuvenation delivered with an artist\'s eye for harmony.',
    },
    {
      title: 'Anti-Aging & Wellness',
      description:
        'Cellular rejuvenation and regenerative medicine that turn back time naturally, combining cutting-edge treatments with traditional healing for holistic vitality.',
    },
    {
      title: 'Holistic Integration',
      description:
        'Drawing, Thai massage, and singing bowl therapy complement medical treatments — a multidimensional approach to physical, emotional, and aesthetic wellbeing.',
    },
  ]

  return (
    <section id="about" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          About the Doctor
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Meet Dr. Pattarapornd (Ploy)
        </motion.h2>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] leading-relaxed text-center max-w-2xl mx-auto mb-20"
        >
          A physician who approaches medicine as an art form — specializing in aesthetic
          medicine, anti-aging treatments, and holistic wellness at Inspire IVF Thailand.
        </motion.p>

        {/* Two-column: image + services */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Doctor image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-apple-lg group">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/studio-photo-1.jpg"
                  alt="Dr. Pattarapornd Suparcha — Professional Portrait"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8">
                  <p className="text-white font-semibold text-[17px] leading-tight">{DOCTOR_NAME_EN}</p>
                  <p lang="th" className="text-white/75 text-sm mt-0.5">{DOCTOR_NAME_TH}</p>
                  <p className="text-white/80 text-sm mt-1">M.D. · Anti-Aging &amp; Aesthetic Physician</p>
                </div>
              </div>
            </div>

            {/* Secondary images */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {['/studio-photo-2.jpg', '/studio-photo-3.jpg'].map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 * (i + 1), ease }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-apple group"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={src}
                      alt="Dr. Pattarapornd Suparcha"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services list */}
          <div className="space-y-8 lg:pt-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease }}
                viewport={{ once: true, margin: '-60px' }}
                className="group"
              >
                {/* Thin top separator */}
                <div className="h-px bg-[#d2d2d7] mb-8" />
                <h3 className="text-[#1d1d1f] font-semibold text-[19px] mb-3 group-hover:text-[#7c3aed] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
            {/* Bottom separator */}
            <div className="h-px bg-[#d2d2d7]" />
          </div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="bg-[#f5f5f7] rounded-3xl px-8 py-16 sm:px-16 text-center"
        >
          <blockquote
            className="text-[#1d1d1f] font-medium leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
          >
            &ldquo;My mission is to help patients feel confident and peaceful in their own skin,
            blending the precision of medical science with the timeless art of healing.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e8e8ed] shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src="/avatar transparent bg.png"
                  alt={DOCTOR_NAME_EN}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-left">
              <p className="text-[#1d1d1f] font-semibold text-[15px]">{DOCTOR_NAME_EN}</p>
              <p lang="th" className="text-[#6e6e73] text-[13px]">{DOCTOR_NAME_TH}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
