"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { HeaderActions } from './HeaderActions'
import { MobileMenu } from './MobileMenu'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-900' 
            : 'bg-black/80 backdrop-blur-sm'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Primary navigation">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <Navigation />
            <HeaderActions onMobileMenuToggle={() => setMobileMenuOpen(true)} />
          </div>
        </nav>
      </motion.header>
      
      <ScrollProgress />

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  )
}