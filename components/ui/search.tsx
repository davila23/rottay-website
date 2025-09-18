"use client"

import { useState, useRef, useEffect } from 'react'
import { Search, X, ArrowRight, FileText, Hash, Package } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'page' | 'product' | 'doc'
  href: string
}

const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'BitHire.ai',
    description: 'AI-powered recruitment platform for Latin America',
    type: 'product',
    href: '/products/bithire'
  },
  {
    id: '2',
    title: 'Notarix',
    description: 'Blockchain-based digital notary system',
    type: 'product',
    href: '/products/notarix'
  },
  {
    id: '3',
    title: 'VozIA',
    description: 'Advanced AI voice synthesis platform',
    type: 'product',
    href: '/products/vozia'
  },
  {
    id: '4',
    title: 'PayMerchant',
    description: 'Cryptocurrency payment infrastructure',
    type: 'product',
    href: '/products/paymerchant'
  },
  {
    id: '5',
    title: 'API Documentation',
    description: 'Complete guide to our REST APIs',
    type: 'doc',
    href: '/docs/api'
  },
  {
    id: '6',
    title: 'Getting Started',
    description: 'Quick start guide for developers',
    type: 'doc',
    href: '/docs/getting-started'
  },
  {
    id: '7',
    title: 'About Us',
    description: 'Learn more about ROTTAY',
    type: 'page',
    href: '/about'
  },
  {
    id: '8',
    title: 'Contact',
    description: 'Get in touch with our team',
    type: 'page',
    href: '/contact'
  },
  {
    id: '9',
    title: 'Pricing',
    description: 'View our pricing plans',
    type: 'page',
    href: '/pricing'
  }
]

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Open search with Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search logic
  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      setSelectedIndex(0)
      return
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      handleSelect(results[selectedIndex])
    }
  }

  const handleSelect = (result: SearchResult) => {
    setIsOpen(false)
    setQuery('')
    // Navigate to the selected page
    window.location.href = result.href
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <Package className="w-4 h-4" />
      case 'doc':
        return <FileText className="w-4 h-4" />
      default:
        return <Hash className="w-4 h-4" />
    }
  }

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search</span>
        <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-gray-800 rounded">⌘K</kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50"
            >
              <div className="bg-gray-950 border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center px-4 py-3 border-b border-gray-800">
                  <Search className="w-5 h-5 text-gray-500 mr-3" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products, docs, pages..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-500 hover:text-white transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Results */}
                {results.length > 0 && (
                  <div className="max-h-96 overflow-y-auto py-2">
                    {results.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => handleSelect(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-900 transition-colors ${
                          index === selectedIndex ? 'bg-gray-900' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded ${
                            result.type === 'product' ? 'bg-white text-black' :
                            result.type === 'doc' ? 'bg-gray-800 text-gray-400' :
                            'bg-gray-900 text-gray-500'
                          }`}>
                            {getIcon(result.type)}
                          </div>
                          <div className="text-left">
                            <p className="text-white font-medium">{result.title}</p>
                            <p className="text-sm text-gray-500">{result.description}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {query && results.length === 0 && (
                  <div className="px-4 py-8 text-center">
                    <p className="text-gray-500">No results found for "{query}"</p>
                  </div>
                )}

                {/* Footer */}
                <div className="px-4 py-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 bg-gray-900 rounded">↑↓</kbd> Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 bg-gray-900 rounded">↵</kbd> Select
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 bg-gray-900 rounded">ESC</kbd> Close
                    </span>
                  </div>
                  <span>{results.length} results</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}