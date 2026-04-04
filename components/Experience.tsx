'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: 'Feb 2026 — Present',
      title: 'Anti-Aging, Aesthetics & General Practitioner',
      organization: 'Inspire IVF Thailand — Wellness Department',
      location: 'Bangkok, Thailand',
      description:
        'Dr. Pattarapornd (Ploy) offers personalized one-on-one care in the Wellness Department of Bangkok\'s premier fertility and wellness centre, combining anti-aging medicine, aesthetic treatments, and general practice with a holistic approach.',
      achievements: [
        'Delivering specialized anti-aging and aesthetic medicine in a world-class fertility and wellness center',
        'Providing comprehensive general practice care to international and local clients',
        'Integrating holistic wellness approaches with cutting-edge medical technology',
      ],
      image: '/inspire_ivf_clinic101.webp',
      current: true,
    },
    {
      period: 'Jun 2025 — Present',
      title: 'Teacher Assistant',
      organization: 'CMC Training Center',
      location: 'Bangkok, Thailand',
      description:
        'Assisting in hands-on training sessions for medical professionals seeking to learn and refine aesthetic procedures.',
      achievements: [
        'Facilitating Basic Aesthetic Hands-on training courses',
        'Guiding trainees through practical aesthetic techniques and procedures',
      ],
      image: '/pattarapornd-female-cosmetology-studio-procedures.jpg',
      current: true,
    },
    {
      period: 'May 2025 — Present',
      title: 'Training Assistant',
      organization: 'Academy Aesthetic Training',
      location: 'Bangkok, Thailand',
      description:
        'Supporting advanced aesthetic training programs for medical practitioners expanding their expertise in facial aesthetics.',
      achievements: [
        'Assisting in Basic Aesthetic and Advanced Filler Hands-on training',
        'Helping trainees develop precision techniques in injectable treatments',
      ],
      image: '/pattarapornd-cosmetic-botox-injection-female-forehead.jpg',
      current: true,
    },
    {
      period: 'Dec 2023 — Jan 2026',
      title: 'General Practitioner & Occupational Health Physician',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description:
        'Served in multiple capacities over 2 years at one of Bangkok\'s premier hospitals, including general practice, occupational health & safety, and founding the Tele Care Center.',
      achievements: [
        'Occupational Health and Safety Physician, Check-up Department (Nov 2025 – Jan 2026)',
        'General Practitioner, Check-up Department (Jul 2025 – Jan 2026)',
        'Founding member of the Tele Care Center, SSO Department (Dec 2023 – Jan 2026)',
      ],
      image: '/pattarapornd-phayathai-navamin-hospital101.png',
      current: false,
    },
    {
      period: 'Jan 2022 — Present',
      title: 'Digital Commercial Artist',
      organization: 'Tomodachi T-shirt',
      location: 'Thailand',
      description:
        'Creating digital commercial artwork and designs for a creative apparel brand, combining artistic sensibility with commercial design.',
      achievements: [
        'Producing original digital artwork for commercial merchandise',
        'Blending artistic creativity with commercial brand identity',
      ],
      image: '/avatar with bg.JPG',
      current: true,
    },
  ]

  return (
    <section id="experience" className="bg-[#f5f5f7] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Career Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-20"
        >
          A decade of dedication to advancing healthcare excellence and patient care.
        </motion.p>

        {/* Experience cards */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-40px' }}
              className="bg-white rounded-2xl overflow-hidden shadow-apple group"
            >
              {/* Card image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
                <Image
                  src={exp.image}
                  alt={exp.organization}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <div>
                    <span className="text-white/80 text-[12px] font-medium">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full border border-white/30">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-white/70 text-[12px]">{exp.location}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-7">
                <h3 className="text-[#1d1d1f] font-semibold text-[19px] mb-1 group-hover:text-[#7c3aed] transition-colors duration-200">
                  {exp.title}
                </h3>
                <p className="text-[#7c3aed] text-[14px] font-medium mb-4">{exp.organization}</p>
                <p className="text-[#6e6e73] text-[14px] leading-relaxed mb-5">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#6e6e73] shrink-0 mt-0.5" />
                      <span className="text-[#6e6e73] text-[13px] leading-snug">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
