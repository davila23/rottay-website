"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cpu, Shield, TrendingUp, DollarSign } from 'lucide-react'
import { Container } from '@/components/ui/container'

const products = [
  {
    name: 'BitHire.ai',
    description: 'AI-powered recruitment platform that streamlines hiring with intelligent candidate matching',
    icon: Cpu,
    href: '/products/bithire',
    status: 'live',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'TicketGenius',
    description: 'Smart ticketing system with automated support and intelligent routing',
    icon: Shield,
    href: '/products/ticketgenius',
    status: 'coming-soon',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'MarketFlow',
    description: 'Advanced analytics and market intelligence for data-driven decisions',
    icon: TrendingUp,
    href: '/products/marketflow',
    status: 'coming-soon',
    color: 'from-green-600 to-teal-600'
  },
  {
    name: 'DollarEx',
    description: 'Seamless cross-border payment solutions for Latin American businesses',
    icon: DollarSign,
    href: '/products/dollarex',
    status: 'coming-soon',
    color: 'from-yellow-600 to-orange-600'
  }
]

export function Products() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful AI and blockchain solutions designed for the Latin American market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={product.href}
                className="group relative block p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${product.color} rounded-xl`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    {product.status === 'live' ? (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                        Live
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-500/10 text-gray-400 text-xs font-medium rounded-full border border-gray-600">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-white group-hover:text-gray-300 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}