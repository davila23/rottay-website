"use client"

import { motion } from 'framer-motion'

export function FooterBrand() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8 md:mb-0"
    >
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
          <span className="font-bold text-white text-sm">R</span>
        </div>
        <span className="font-bold text-xl text-black">ROTTAY</span>
      </div>
      
      <p className="text-gray-600 max-w-sm mb-4">
        Full-stack development studio building the future of AI and blockchain technology.
      </p>
      
      <div className="space-y-1 text-sm text-gray-500">
        <p>Building exceptional software since 2024</p>
      </div>
    </motion.div>
  )
}