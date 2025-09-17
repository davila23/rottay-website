"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function MockupPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
          🎨 ROTTAY - UX/UI Design Mockup
        </h1>
        
        {/* ASCII Art Representation */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg mb-12 border border-[#2A2A2A]">
          <pre className="text-xs text-[#D3C3A7] overflow-x-auto">
{`
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ROTTAY                                     Solutions ▼  Products  About  [Contact]│
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                    │
│                          BUILDING TOMORROW'S                                      │
│                        【 AI-POWERED SOLUTIONS 】                                  │
│                                                                                    │
│                    Transforming LATAM from Miami 🌴                               │
│                                                                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ Full Stack  │  │  Mobile     │  │ Blockchain  │  │   DevOps    │            │
│  │     AI      │  │    Apps     │  │   Crypto    │  │    Cloud    │            │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                                    │
└──────────────────────────────────────────────────────────────────────────────────┘
`}</pre>
        </div>

        {/* Opción A: Tech Matrix (Scale.com style) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#E5D4B6]">
            Opción A: Tech Matrix Grid 📊
          </h2>
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 rounded-xl border border-[#2A2A2A]">
            <div className="grid grid-cols-12 gap-4 mb-8">
              {/* Header */}
              <div className="col-span-12 bg-[#0A0A0A]/60 backdrop-blur p-4 rounded-lg border border-[#3A3A3A]">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">ROTTAY</span>
                  <div className="flex gap-6 text-sm">
                    <span>Solutions</span>
                    <span>Products</span>
                    <span>About</span>
                    <button className="bg-[#D3C3A7] text-black px-4 py-1 rounded">Contact</button>
                  </div>
                </div>
              </div>
              
              {/* Hero Section */}
              <div className="col-span-8 bg-[#1A1A1A] p-8 rounded-lg border border-[#3A3A3A] h-64">
                <h3 className="text-3xl font-bold mb-4">AI-Powered Development</h3>
                <p className="text-[#9A9A9A] mb-4">From Miami to all LATAM</p>
                <div className="flex gap-4">
                  <button className="bg-[#D3C3A7] text-black px-6 py-2 rounded">Get Started</button>
                  <button className="border border-[#D3C3A7] px-6 py-2 rounded">View Work</button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="col-span-4 grid grid-rows-2 gap-4">
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                  <div className="text-2xl font-bold text-[#D3C3A7]">500+</div>
                  <div className="text-sm text-[#9A9A9A]">Enterprise Clients</div>
                </div>
                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                  <div className="text-2xl font-bold text-[#D3C3A7]">25+</div>
                  <div className="text-sm text-[#9A9A9A]">Countries LATAM</div>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="col-span-3 bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                <h4 className="font-bold mb-2">Full Stack + AI</h4>
                <p className="text-xs text-[#9A9A9A]">Custom LLMs, RAG, Agents</p>
              </div>
              <div className="col-span-3 bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                <h4 className="font-bold mb-2">Mobile Apps</h4>
                <p className="text-xs text-[#9A9A9A]">iOS, Android, React Native</p>
              </div>
              <div className="col-span-3 bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                <h4 className="font-bold mb-2">Blockchain</h4>
                <p className="text-xs text-[#9A9A9A]">Multi-chain, Tokenization</p>
              </div>
              <div className="col-span-3 bg-[#1A1A1A] p-4 rounded-lg border border-[#3A3A3A]">
                <h4 className="font-bold mb-2">DevOps</h4>
                <p className="text-xs text-[#9A9A9A]">K8s, CI/CD, Cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opción B: Bento Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#E5D4B6]">
            Opción B: Bento Grid Layout 🍱 (RECOMENDADO)
          </h2>
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 rounded-xl border border-[#2A2A2A]">
            <div className="grid grid-cols-6 gap-4">
              {/* Large Hero Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-[#D3C3A7]/20 to-[#1A1A1A] p-8 rounded-2xl border border-[#3A3A3A] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D3C3A7]/10 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold mb-4 relative z-10">
                  AI + Blockchain
                  <br />Development
                </h3>
                <p className="text-[#9A9A9A] mb-6 relative z-10">
                  Leading digital transformation across LATAM from our Miami headquarters
                </p>
                <div className="flex gap-4 relative z-10">
                  <button className="bg-[#D3C3A7] text-black px-6 py-3 rounded-lg font-semibold">
                    Start Building →
                  </button>
                  <button className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                    View BitHire.ai
                  </button>
                </div>
              </motion.div>
              
              {/* Stats Cards */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="col-span-2 bg-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-3xl font-bold text-[#D3C3A7] mb-2">500+</div>
                <div className="text-sm text-[#9A9A9A]">Enterprise Clients</div>
                <div className="text-xs text-[#7A7A7A] mt-2">across 25+ countries</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -4 }}
                className="col-span-2 bg-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-3xl font-bold text-[#D3C3A7] mb-2">100M+</div>
                <div className="text-sm text-[#9A9A9A]">Transactions</div>
                <div className="text-xs text-[#7A7A7A] mt-2">Multi-chain processed</div>
              </motion.div>
              
              {/* Service Cards - Different Sizes */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-3 row-span-2 bg-gradient-to-br from-purple-900/20 to-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-xl font-bold mb-3">Full Stack + AI</h4>
                <ul className="space-y-2 text-sm text-[#9A9A9A]">
                  <li>• Custom LLM Development</li>
                  <li>• Multi-tenant Architecture</li>
                  <li>• RAG Implementation</li>
                  <li>• AI Agents & Automation</li>
                </ul>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-3 bg-gradient-to-br from-blue-900/20 to-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-4xl mb-4">⛓️</div>
                <h4 className="text-xl font-bold mb-3">Blockchain & Crypto</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Ethereum</span>
                  <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Polygon</span>
                  <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Solana</span>
                  <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Tokenization</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-2 bg-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-bold">Mobile Apps</h4>
                <p className="text-xs text-[#9A9A9A] mt-2">Native & Cross-platform</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-2 bg-[#1A1A1A] p-6 rounded-2xl border border-[#3A3A3A]"
              >
                <div className="text-3xl mb-3">☁️</div>
                <h4 className="font-bold">DevOps</h4>
                <p className="text-xs text-[#9A9A9A] mt-2">K8s, CI/CD, IaC</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-2 bg-gradient-to-br from-[#D3C3A7]/30 to-[#1A1A1A] p-6 rounded-2xl border border-[#D3C3A7]/50"
              >
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-[#D3C3A7]">BitHire.ai</h4>
                <p className="text-xs text-[#9A9A9A] mt-2">AI Recruiting Platform</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#2A2A2A]">
          <h2 className="text-2xl font-bold mb-6 text-[#E5D4B6]">
            🚀 Features Incluidas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '✅ Command Palette (CMD+K)',
              '✅ Multi-idioma (ES/EN/PT)',
              '✅ Dark/Light Mode',
              '✅ Interactive Service Selector',
              '✅ AI Chat Assistant',
              '✅ Live Code Demos',
              '✅ 3D Animations (Three.js)',
              '✅ Tech Stack Cloud',
              '✅ Case Studies Carousel',
              '✅ Project Estimator AI',
              '✅ Client Portal',
              '✅ API Playground'
            ].map((feature, i) => (
              <div key={i} className="text-sm text-[#9A9A9A]">{feature}</div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-xl border border-[#2A2A2A]">
          <h2 className="text-2xl font-bold mb-6 text-[#E5D4B6]">
            🎮 Interacciones Propuestas
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D3C3A7]/20 rounded-lg flex items-center justify-center">
                <span>⌘K</span>
              </div>
              <div>
                <p className="font-bold">Command Palette</p>
                <p className="text-sm text-[#9A9A9A]">Navegación rápida estilo Spotlight</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D3C3A7]/20 rounded-lg flex items-center justify-center">
                <span>🌐</span>
              </div>
              <div>
                <p className="font-bold">Auto-detect LATAM</p>
                <p className="text-sm text-[#9A9A9A]">Detecta ubicación y cambia idioma</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D3C3A7]/20 rounded-lg flex items-center justify-center">
                <span>💬</span>
              </div>
              <div>
                <p className="font-bold">AI Assistant</p>
                <p className="text-sm text-[#9A9A9A]">Chat con contexto de servicios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}