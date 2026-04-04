'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden bg-[#f5f5f7]"
    >
      {/* Background image with scroll-driven parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src="/studio-photo-202.jpg"
          alt="Dr. Pattarapornd Suparcha"
          fill
          className="object-cover object-[center_10%] md:object-[center_25%]"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay — transparent at top on mobile so face shows, stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/85 md:from-black/10 md:via-black/30 md:to-black/80" />
      </motion.div>

      {/* Text content — centered on mobile, bottom-left on desktop */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-[980px] mx-auto px-6 sm:px-8 pb-14 md:pb-20 text-center md:text-left"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/80 text-[15px] sm:text-[17px] font-medium tracking-wide mb-4"
        >
          Anti-Aging &amp; Aesthetic Medicine · Bangkok, Thailand
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white font-bold leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 9vw, 5rem)' }}
        >
          Art Meets<br />
          <span className="text-white/90">Aesthetic Medicine.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/75 text-[17px] sm:text-[19px] leading-relaxed max-w-2xl md:mx-0 mx-auto mb-8"
        >
          Dr. Pattarapornd Suparcha blends medical precision with artistic vision —
          delivering naturally beautiful results through evidence-based aesthetic care.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center md:justify-start gap-8 sm:gap-12 mb-8 pb-8 border-b border-white/20"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '6', label: 'Certifications' },
            { value: '55k+', label: 'Happy Patients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-white text-2xl sm:text-3xl font-bold leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-[10px] sm:text-[11px] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-white text-[#1d1d1f] text-[15px] font-medium hover:bg-white/90 active:scale-95 transition-all duration-200"
          >
            Book Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/50 text-white text-[15px] font-medium hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-8 md:right-10 z-10"
        aria-hidden="true"
      >
        <div className="animate-scroll-pulse">
          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            fill="none"
            aria-hidden="true"
          >
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
            <rect x="8.5" y="6" width="3" height="7" rx="1.5" fill="white" fillOpacity="0.7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
