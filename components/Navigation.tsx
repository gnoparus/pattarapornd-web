'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setIsMenuOpen(false)
      // Small delay so menu close animation can start before scroll
      const id = href.replace('#', '')
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 80)
      })
    },
    []
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-[980px] mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-[52px]">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[13px] text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-[13px] font-medium text-white bg-[#1d1d1f] rounded-full px-4 py-1.5 hover:bg-[#1d1d1f]/80 transition-colors duration-200"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 rounded-lg text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors touch-manipulation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — fullscreen overlay underneath nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: '52px' }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-white/98 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu content */}
            <div className="relative flex flex-col h-full px-6 pt-8 pb-12 overflow-y-auto">
              <nav className="flex-1" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-center justify-between px-4 py-4 text-[18px] font-medium text-[#1d1d1f] rounded-2xl hover:bg-black/5 active:bg-black/10 transition-colors touch-manipulation"
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 text-[#86868b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-[#d2d2d7] mx-4 my-6" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block text-center py-4 text-[17px] font-semibold text-white bg-[#1d1d1f] rounded-2xl hover:bg-[#1d1d1f]/80 active:scale-[0.98] transition-all touch-manipulation"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
