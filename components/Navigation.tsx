'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo — Apple-style wordmark */}
          <motion.a
            href="#home"
            className="text-[15px] font-semibold tracking-tight text-[#1d1d1f] hover:opacity-70 transition-opacity duration-200"
            whileTap={{ scale: 0.97 }}
            aria-label="Dr. Pattarapornd — home"
          >
            Dr. Pattarapornd
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[13px] font-medium text-white bg-[#1d1d1f] rounded-full px-4 py-1.5 hover:bg-[#1d1d1f]/80 transition-colors duration-200"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2.5 text-[15px] text-[#1d1d1f] hover:bg-black/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block text-center py-2.5 text-[15px] font-medium text-white bg-[#1d1d1f] rounded-xl hover:bg-[#1d1d1f]/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
