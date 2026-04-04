'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Linkedin, Facebook } from 'lucide-react'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

export default function Contact() {
  const contactLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Pattarapornd Suparcha',
      detail: 'Connect professionally',
      href: 'https://www.linkedin.com/in/pattarapornd-suparcha-914858392',
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Bangkok, Thailand',
      detail: 'Professional practice location',
      href: undefined,
    },
    {
      icon: Facebook,
      title: 'Facebook',
      subtitle: 'Pattarapornd Suparcha',
      detail: 'Follow on Facebook',
      href: 'https://www.facebook.com/ploy.soiynnarak/',
    },
  ]

  return (
    <section id="contact" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-20"
        >
          Reach out through any of these channels — I'd love to hear from you.
        </motion.p>

        {/* Two column: photo + contact */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative rounded-3xl overflow-hidden shadow-apple-lg group"
          >
            <div className="relative" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/studio-photo-203.jpg"
                alt="Dr. Pattarapornd Suparcha"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-semibold text-[17px] mb-1">Dr. Pattarapornd</p>
                <p lang="th" className="text-white/75 text-[13px] mb-2">{DOCTOR_NAME_TH}</p>
                <p className="text-white/80 text-[13px] leading-relaxed">
                  General Practitioner · Occupational Health · Aesthetic Medicine · Anti-Aging Science
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact cards */}
          <div className="space-y-4">
            {contactLinks.map((link, index) => {
              const CardInner = (
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="flex items-center gap-5 bg-[#f5f5f7] rounded-2xl p-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <link.icon className="w-5 h-5 text-[#1d1d1f]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1d1d1f] font-semibold text-[15px] mb-0.5">{link.title}</p>
                    <p className="text-[var(--apple-accent)] text-[13px] font-medium mb-0.5">{link.subtitle}</p>
                    <p className="text-[#6e6e73] text-[12px]">{link.detail}</p>
                  </div>
                  {link.href && (
                    <svg
                      className="w-4 h-4 text-[#86868b] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </motion.div>
              )

              return link.href ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${link.title}: ${link.subtitle}`}
                >
                  {CardInner}
                </a>
              ) : (
                <div key={link.title}>{CardInner}</div>
              )
            })}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#d2d2d7] px-6 py-5"
            >
              <p className="text-[#6e6e73] text-[13px] text-center leading-relaxed">
                Open to collaborations in healthcare, wellness, and aesthetic medicine.
                Feel free to connect through any channel above.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-[#d2d2d7]"
      >
        <div className="max-w-[980px] mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            {/* Brand */}
            <div>
              <p className="text-[#1d1d1f] font-semibold text-[15px] mb-1">{DOCTOR_NAME_EN}</p>
              <p lang="th" className="text-[#6e6e73] text-[13px] mb-1">{DOCTOR_NAME_TH}</p>
              <p className="text-[#6e6e73] text-[12px] max-w-xs leading-relaxed">
                General Practitioner specializing in Occupational Health, Aesthetic Medicine, and Anti-Aging Science.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-16 text-[13px]">
              <div>
                <p className="text-[#1d1d1f] font-semibold mb-3">Menu</p>
                <ul className="space-y-2">
                  {['#home', '#services', '#about', '#contact'].map((href) => (
                    <li key={href}>
                      <a href={href} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 capitalize">
                        {href.replace('#', '')}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#1d1d1f] font-semibold mb-3">Legal</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d2d2d7] pt-6">
            <p className="text-[#6e6e73] text-[12px] text-center">
              Copyright © 2026 Dr. Pattarapornd Suparcha. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}
