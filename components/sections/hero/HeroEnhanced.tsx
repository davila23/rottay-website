"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { TextReveal, MagneticButton, GradientText } from '@/components/ui/animations'

const rotatingTexts = [
  "AI-powered solutions",
  "blockchain infrastructure",
  "smart automation",
  "data intelligence",
  "secure payments"
]

export function HeroEnhanced() {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 rounded-full border border-gray-800">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm text-gray-300">Trusted by innovative companies</span>
        </div>
      </motion.div>

      {/* Main Headline with rotating text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <TextReveal text="We build the future" className="block" delay={0.2} />
          <span className="text-4xl md:text-6xl">
            <TextReveal text="with " className="inline" delay={0.5} />
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl inline-block"
            >
              <GradientText>{rotatingTexts[textIndex]}</GradientText>
            </motion.span>
          </AnimatePresence>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 text-center"
      >
        Full-stack development studio specializing in artificial intelligence 
        and blockchain infrastructure for Latin American markets.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <MagneticButton>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded liquid-button hover:bg-gray-200 transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Start Building</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent border border-gray-700 rounded hover:border-gray-500 transition-all glass"
          >
            Explore Products
          </Link>
        </MagneticButton>
      </motion.div>
    </div>
  )
}