"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const mobileLinks = [
  { name: 'Products', href: '/products' },
  { name: 'BitHire.ai', href: '/products/bithire', isSubItem: true },
  { name: 'TicketGenius', href: '/products/ticketgenius', isSubItem: true },
  { name: 'MarketFlow', href: '/products/marketflow', isSubItem: true },
  { name: 'DollarEx', href: '/products/dollarex', isSubItem: true },
  { name: 'Company', href: '/company' },
  { name: 'GitHub', href: 'https://github.com/rottay', external: true },
  { name: 'Contact', href: '/contact' }
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-bold text-xl">Menu</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="p-6">
              <div className="space-y-1">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors ${
                      link.isSubItem ? 'ml-4 text-gray-600 text-sm' : 'text-black font-medium'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-4 h-4" />}
                  </Link>
                ))}
              </div>
              
              {/* CTA in mobile */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full py-3 px-4 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}