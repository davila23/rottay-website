"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Users, 
  CreditCard, 
  TrendingUp, 
  DollarSign,
  Phone,
  Workflow,
  Cloud,
  ExternalLink,
  Code,
  Rocket,
  Building
} from 'lucide-react'

const navigationItems = [
  {
    name: 'Solutions',
    href: '#',
    hasDropdown: true
  },
  {
    name: 'About',
    href: '/about',
    hasDropdown: false
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    hasDropdown: false
  },
  {
    name: 'Careers',
    href: '/careers',
    hasDropdown: false
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rottay',
    hasDropdown: false,
    external: true
  }
]

const portfolioSections = [
  {
    title: 'Products',
    items: [
      {
        name: 'BitHire.ai',
        description: 'AI-powered recruitment',
        icon: Users,
        href: 'https://bithire.ai',
        external: true,
        status: 'Live' as const,
        color: 'text-gray-900'
      },
      {
        name: 'TicketGenius',
        description: 'Smart ticketing platform',
        icon: CreditCard,
        href: '#',
        external: false,
        status: 'Beta' as const,
        color: 'text-gray-900'
      },
      {
        name: 'MarketFlow',
        description: 'Market intelligence',
        icon: TrendingUp,
        href: '#',
        external: false,
        status: 'Development' as const,
        color: 'text-gray-900'
      },
      {
        name: 'DollarEx',
        description: 'Cross-border payments',
        icon: DollarSign,
        href: '#',
        external: false,
        status: '2025' as const,
        color: 'text-gray-900'
      }
    ]
  },
  {
    title: 'Services',
    items: [
      {
        name: 'Voice AI Platform',
        description: 'Real-time transcription',
        icon: Phone,
        href: '#',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      },
      {
        name: 'Workflow Automation',
        description: 'No-code automation',
        icon: Workflow,
        href: '#',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      },
      {
        name: 'Cloud Infrastructure',
        description: 'Multi-cloud solutions',
        icon: Cloud,
        href: '#',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      },
      {
        name: 'Custom Development',
        description: 'Tailored solutions',
        icon: Code,
        href: '/contact',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      }
    ]
  },
  {
    title: 'Industries',
    items: [
      {
        name: 'Startups',
        description: 'Launch faster',
        icon: Rocket,
        href: '#',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      },
      {
        name: 'Enterprise',
        description: 'Scale efficiently',
        icon: Building,
        href: '#',
        external: false,
        status: undefined,
        color: 'text-gray-900'
      }
    ]
  }
]

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  let timeoutId: NodeJS.Timeout

  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 200)
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div 
          key={item.name} 
          className="relative"
          onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
          onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
        >
          {item.hasDropdown ? (
            <button
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors font-medium py-2"
            >
              <span>{item.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          ) : (
            <Link
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors font-medium py-2"
            >
              <span>{item.name}</span>
            </Link>
          )}
          
          {/* Mega Dropdown */}
          {item.hasDropdown && (
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[720px] -translate-x-1/4"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-3 gap-0">
                      {portfolioSections.map((section, sectionIndex) => (
                        <div 
                          key={section.title}
                          className={`p-6 ${sectionIndex < portfolioSections.length - 1 ? 'border-r border-gray-100' : ''}`}
                        >
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {section.title}
                          </h3>
                          <div className="space-y-1">
                            {section.items.map((item) => {
                              const Icon = item.icon
                              const isExternal = item.external
                              
                              if (item.href === '#') {
                                return (
                                  <div
                                    key={item.name}
                                    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group cursor-default mb-2"
                                  >
                                    <div className={`p-1.5 rounded-lg bg-gray-50 group-hover:bg-white transition-colors ${item.color}`}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2">
                                        <span className="font-medium text-gray-900 text-sm truncate">
                                          {item.name}
                                        </span>
                                        {item.status && (
                                          <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${
                                            item.status === 'Live' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                                            item.status === 'Development' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-gray-100 text-gray-600'
                                          }`}>
                                            {item.status}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-500 mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                )
                              }
                              
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  target={isExternal ? '_blank' : undefined}
                                  rel={isExternal ? 'noopener noreferrer' : undefined}
                                  className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer mb-2"
                                >
                                  <div className={`p-1.5 rounded-lg bg-gray-50 group-hover:bg-white transition-colors ${item.color}`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                      <span className="font-medium text-gray-900 text-sm truncate">
                                        {item.name}
                                      </span>
                                      <div className="flex items-center gap-1 flex-shrink-0">
                                        {isExternal && (
                                          <ExternalLink className="w-3 h-3 text-gray-400" />
                                        )}
                                        {item.status && (
                                          <span className={`text-xs px-1.5 py-0.5 rounded ${
                                            item.status === 'Live' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                                            item.status === 'Development' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-gray-100 text-gray-600'
                                          }`}>
                                            {item.status}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-gray-50 border-t border-gray-100 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          Need something custom?
                        </p>
                        <Link
                          href="/contact"
                          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          Let's talk →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  )
}