"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { 
  Building2, ShoppingCart, Heart, GraduationCap,
  Banknote, Truck, Factory, Briefcase 
} from 'lucide-react'

const solutions = [
  {
    icon: Banknote,
    title: 'Financial Services',
    description: 'AI-powered fraud detection, risk assessment, and automated compliance for banks and fintech.',
    image: '/api/placeholder/600/400',
    stats: '99.9% accuracy'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Predictive diagnostics, patient monitoring, and treatment optimization powered by AI.',
    image: '/api/placeholder/600/400',
    stats: '45% faster diagnosis'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Personalized recommendations, inventory optimization, and dynamic pricing strategies.',
    image: '/api/placeholder/600/400',
    stats: '3x conversion rate'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    image: '/api/placeholder/600/400',
    stats: '60% less downtime'
  }
]

export function Solutions() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Accelerate Knowledge Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our adaptive learning agents can continuously improve the more employees interact with them.
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="space-y-6">
                    <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-600/30">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white">
                      {solution.title}
                    </h3>
                    
                    <p className="text-lg text-gray-400">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                        <span className="text-green-400 font-semibold">
                          {solution.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className={`relative ${isEven ? '' : 'lg:col-start-1'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}