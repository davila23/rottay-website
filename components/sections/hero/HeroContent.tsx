"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Voice AI Infrastructure
          <br />
          for Enterprise
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl text-gray-400 mb-10"
        >
          Enterprise voice AI and automation platform. Transform customer interactions 
          with intelligent workflows and cloud-native infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded hover:bg-gray-200 transition-colors"
          >
            Schedule Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="https://docs.rottay.ai"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent border-2 border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            API Documentation
          </Link>
        </motion.div>

        {/* Location */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-gray-400"
        >
        </motion.p>
      </motion.div>
    </div>
  )
}