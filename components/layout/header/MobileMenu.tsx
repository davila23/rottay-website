"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ExternalLink, 
  ChevronRight,
  Users,
  CreditCard,
  TrendingUp,
  DollarSign,
  Phone,
  Workflow,
  Cloud,
  Code,
  Rocket,
  Building,
  Info,
  BookOpen,
  Briefcase,
  Github,
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeView, setActiveView] = useState<'main' | 'products' | 'services'>('main')

  const handleBack = () => {
    setActiveView('main')
  }

  const handleClose = () => {
    setActiveView('main')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={handleClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-[100vw] sm:max-w-md bg-black z-50 overflow-hidden"
          >
            {/* Main View */}
            <AnimatePresence mode="wait">
              {activeView === 'main' && (
                <motion.div
                  key="main"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-5 border-b border-gray-800">
                    <motion.div 
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-sm">R</span>
                      </div>
                      <span className="font-bold text-xl text-white">ROTTAY</span>
                    </motion.div>
                    <button
                      onClick={handleClose}
                      className="p-2 hover:bg-gray-800 rounded-xl transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Main Navigation */}
                  <div className="flex-1 overflow-y-auto">
                    {/* Solutions Section */}
                    <div className="p-5">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Solutions</h3>
                      
                      {/* Products Card */}
                      <button
                        onClick={() => setActiveView('products')}
                        className="w-full mb-3 p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-gray-800 rounded-xl shadow-sm">
                              <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-white">Our Products</div>
                              <div className="text-xs text-gray-400">4 solutions available</div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>

                      {/* Services Card */}
                      <button
                        onClick={() => setActiveView('services')}
                        className="w-full mb-3 p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-gray-800 rounded-xl shadow-sm">
                              <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-white">Our Services</div>
                              <div className="text-xs text-gray-400">Enterprise solutions</div>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    </div>

                    {/* Quick Links */}
                    <div className="px-5 pb-5">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Company</h3>
                      <div className="space-y-1">
                        <Link
                          href="/about"
                          onClick={handleClose}
                          className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-900 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Info className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-white">About</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                          href="/case-studies"
                          onClick={handleClose}
                          className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-900 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <BookOpen className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-white">Case Studies</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                          href="/careers"
                          onClick={handleClose}
                          className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-900 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-white">Careers</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Hiring</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                          href="https://github.com/rottay"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleClose}
                          className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-900 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Github className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-white">GitHub</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="p-5 border-t border-gray-800">
                    <Link
                      href="/contact"
                      onClick={handleClose}
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-white text-black rounded-2xl hover:bg-gray-100 transition-all font-medium shadow-lg shadow-white/10"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Get Started</span>
                    </Link>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Free 30-minute consultation
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Products View */}
              {activeView === 'products' && (
                <motion.div
                  key="products"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 p-5 border-b border-gray-800 bg-gray-900">
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-800 rounded-xl transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180 text-white" />
                    </button>
                    <div>
                      <h2 className="font-bold text-lg text-white">Our Products</h2>
                      <p className="text-xs text-gray-400">Innovative solutions for modern businesses</p>
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="flex-1 overflow-y-auto p-5">
                    <div className="space-y-3">
                      {/* BitHire.ai */}
                      <Link
                        href="https://bithire.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="block p-4 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-white/5 transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Live</span>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-white">BitHire.ai</h3>
                        <p className="text-sm text-gray-400 mb-3">AI-powered recruitment platform that revolutionizes talent acquisition</p>
                        <div className="flex items-center gap-2 text-white font-medium">
                          <span className="text-sm">Visit website</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>

                      {/* TicketGenius */}
                      <div className="block p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Beta</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-white">TicketGenius</h3>
                        <p className="text-sm text-gray-400">Smart ticketing system with AI-powered customer support</p>
                      </div>

                      {/* MarketFlow */}
                      <div className="block p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Dev</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-white">MarketFlow</h3>
                        <p className="text-sm text-gray-400">Real-time market intelligence and analytics platform</p>
                      </div>

                      {/* DollarEx */}
                      <div className="block p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl">
                            <DollarSign className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">2025</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-white">DollarEx</h3>
                        <p className="text-sm text-gray-400">Revolutionary cross-border payment solution</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Services View */}
              {activeView === 'services' && (
                <motion.div
                  key="services"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 p-5 border-b border-gray-800 bg-gray-900">
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-800 rounded-xl transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180 text-white" />
                    </button>
                    <div>
                      <h2 className="font-bold text-lg text-white">Our Services</h2>
                      <p className="text-xs text-gray-400">Enterprise-grade solutions</p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="flex-1 overflow-y-auto p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Voice AI */}
                      <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="p-3 bg-gray-800 rounded-xl mb-3 inline-block">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-white">Voice AI</h4>
                        <p className="text-xs text-gray-400">Real-time transcription</p>
                      </div>

                      {/* Workflow */}
                      <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="p-3 bg-gray-800 rounded-xl mb-3 inline-block">
                          <Workflow className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-white">Automation</h4>
                        <p className="text-xs text-gray-400">No-code builder</p>
                      </div>

                      {/* Cloud */}
                      <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                        <div className="p-3 bg-gray-800 rounded-xl mb-3 inline-block">
                          <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-white">Cloud</h4>
                        <p className="text-xs text-gray-400">Multi-cloud solutions</p>
                      </div>

                      {/* Custom */}
                      <Link
                        href="/contact"
                        onClick={handleClose}
                        className="p-4 bg-gray-900 rounded-2xl border border-gray-800"
                      >
                        <div className="p-3 bg-gray-800 rounded-xl mb-3 inline-block">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-white">Custom</h4>
                        <p className="text-xs text-gray-400">Tailored solutions</p>
                      </Link>
                    </div>

                    {/* Industries Section */}
                    <div className="mt-6">
                      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Industries We Serve</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                          <Rocket className="w-8 h-8 text-red-500 mb-2" />
                          <h4 className="font-semibold text-white">Startups</h4>
                          <p className="text-xs text-gray-400 mt-1">Launch faster with our tech</p>
                        </div>
                        <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                          <Building className="w-8 h-8 text-gray-400 mb-2" />
                          <h4 className="font-semibold text-white">Enterprise</h4>
                          <p className="text-xs text-gray-400 mt-1">Scale with confidence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}