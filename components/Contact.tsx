'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

export default function Contact() {
  const clinics = [
    {
      name: 'Izee Clinic',
      role: 'Aesthetic Physician',
      phone: '097 923 4455',
      phoneHref: 'tel:+66979234455',
      email: 'izeeclinic@gmail.com',
      facebookHref: 'https://www.facebook.com/profile.php?id=61591016570239&mibextid=wwXIfr',
      mapsHref: 'https://maps.app.goo.gl/gGCs3Dvgx5avhPfU8?g_st=ic',
    },
    {
      name: 'NURA Bangkok',
      role: 'General Practitioner',
      phone: '02-056-6999 / 088-989-8666',
      phoneHref: 'tel:+6620566999',
      email: 'hello@nurathailand.com',
      facebookHref: 'https://www.facebook.com/nurabangkok/',
      websiteHref: 'https://nurathailand.com/',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Pattarapornd Suparcha',
      detail: 'Connect professionally',
      href: 'https://www.linkedin.com/in/dr-pattarapornd-suparcha-914858392',
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
          She practices across two clinics on different days of the week —
          reach out to whichever fits your schedule.
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
            {clinics.map((clinic, index) => (
              <motion.div
                key={clinic.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: '-40px' }}
                className="bg-[#f5f5f7] rounded-2xl p-6"
              >
                <p className="text-[#1d1d1f] font-semibold text-[16px] mb-0.5">{clinic.name}</p>
                <p className="text-[var(--apple-accent)] text-[13px] font-medium mb-4">{clinic.role}</p>

                <div className="space-y-2 mb-4">
                  <a
                    href={clinic.phoneHref}
                    className="flex items-center gap-3 min-h-11 text-[#1d1d1f] text-[14px] hover:text-[var(--apple-accent)] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                  >
                    <Phone className="w-4 h-4 text-[#6e6e73] shrink-0" />
                    {clinic.phone}
                  </a>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="flex items-center gap-3 min-h-11 text-[#1d1d1f] text-[14px] hover:text-[var(--apple-accent)] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                  >
                    <Mail className="w-4 h-4 text-[#6e6e73] shrink-0" />
                    {clinic.email}
                  </a>
                </div>

                <div className="flex gap-4 text-[13px]">
                  <a
                    href={clinic.facebookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    Facebook
                  </a>
                  {clinic.mapsHref && (
                    <a
                      href={clinic.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Directions
                    </a>
                  )}
                  {clinic.websiteHref && (
                    <a
                      href={clinic.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                    >
                      Website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#f5f5f7] rounded-2xl p-6 group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]"
                aria-label={`${link.title}: ${link.subtitle}`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <link.icon className="w-5 h-5 text-[#1d1d1f]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#1d1d1f] font-semibold text-[15px] mb-0.5">{link.title}</p>
                  <p className="text-[var(--apple-accent)] text-[13px] font-medium mb-0.5">{link.subtitle}</p>
                  <p className="text-[#6e6e73] text-[12px]">{link.detail}</p>
                </div>
              </a>
            ))}
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
            <div className="max-w-xs">
              <p className="text-[#1d1d1f] font-semibold text-[15px] mb-1">{DOCTOR_NAME_EN}</p>
              <p lang="th" className="text-[#6e6e73] text-[13px] mb-1">{DOCTOR_NAME_TH}</p>
              <p className="text-[#6e6e73] text-[12px] leading-relaxed">
                General Practitioner specializing in Occupational Health, Aesthetic Medicine, and Anti-Aging Science.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-8 sm:gap-12 text-[13px]">
              <div>
                <p className="text-[#1d1d1f] font-semibold mb-3">Menu</p>
                <ul className="space-y-2">
                  {[
                    { href: '#home', label: 'Home' },
                    { href: '#about', label: 'About' },
                    { href: '#services', label: 'Services' },
                    { href: '#education', label: 'Education' },
                    { href: '#experience', label: 'Experience' },
                    { href: '#skills', label: 'Skills' },
                    { href: '#achievements', label: 'Achievements' },
                    { href: '#contact', label: 'Contact' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#1d1d1f] font-semibold mb-3">Legal</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]">Privacy Policy</a></li>
                  <li><a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-accent)]">Terms of Service</a></li>
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
