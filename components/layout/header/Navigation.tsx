"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const navigationItems = [
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true
  },
  {
    name: 'Company',
    href: '/company',
    hasDropdown: false
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rottay',
    hasDropdown: false,
    external: true
  }
]

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            target={item.external ? '_blank' : '_self'}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors font-medium"
          >
            <span>{item.name}</span>
            {item.hasDropdown && (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            )}
          </Link>
          
          {item.hasDropdown && (
            <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-800 py-4">
                <Link
                  href="/products/bithire"
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="font-medium">BitHire.ai</div>
                  <div className="text-xs text-gray-600">AI recruitment platform</div>
                </Link>
                <Link
                  href="/products/ticketgenius"
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="font-medium">TicketGenius</div>
                  <div className="text-xs text-gray-600">Smart ticketing system</div>
                </Link>
                <Link
                  href="/products/marketflow"
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="font-medium">MarketFlow</div>
                  <div className="text-xs text-gray-600">Market intelligence</div>
                </Link>
                <Link
                  href="/products/dollarex"
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="font-medium">DollarEx</div>
                  <div className="text-xs text-gray-600">Cross-border payments</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}