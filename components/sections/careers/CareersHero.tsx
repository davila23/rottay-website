"use client"

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function CareersHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full filter blur-[128px] animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full border border-gray-700 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">We're hiring!</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join Our
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"> Mission</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us in building cutting-edge voice AI and automation solutions. 
            We're looking for talented engineers who thrive on complex challenges and want to shape the future of technology.
          </p>

        </motion.div>
      </div>
    </section>
  )
}