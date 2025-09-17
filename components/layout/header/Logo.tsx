"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:bg-gray-100 transition-all">
          <span className="font-bold text-black text-sm">R</span>
        </div>
        <span className="font-bold text-xl text-white tracking-tight">
          Rottay
        </span>
      </Link>
    </motion.div>
  )
}