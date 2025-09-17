"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

interface HeaderActionsProps {
  onMobileMenuToggle: () => void
}

export function HeaderActions({ onMobileMenuToggle }: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      {/* Desktop CTA */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden md:block"
      >
        <Link
          href="/contact"
          className="px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium"
        >
          Contact
        </Link>
      </motion.div>

      {/* Mobile menu button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onMobileMenuToggle}
        className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6 text-gray-400" />
      </motion.button>
    </div>
  )
}