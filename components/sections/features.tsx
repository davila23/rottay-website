"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { 
  Zap, Shield, Globe, Code2, Database, Cloud,
  Lock, BarChart3, Cpu, Layers, GitBranch, Terminal,
  Sparkles, Gauge, Users, FileCheck
} from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-50ms response times' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC2 & ISO certified' },
  { icon: Globe, title: 'Global Scale', description: '15+ regions worldwide' },
  { icon: Code2, title: 'Developer First', description: 'RESTful APIs & SDKs' },
  { icon: Database, title: 'Real-time Sync', description: 'Instant data updates' },
  { icon: Cloud, title: 'Auto-scaling', description: 'Scales with demand' },
  { icon: Lock, title: 'Compliance', description: 'GDPR & LGPD ready' },
  { icon: BarChart3, title: 'Analytics', description: 'Real-time insights' },
  { icon: Cpu, title: 'AI Powered', description: 'Built-in ML models' },
  { icon: Layers, title: 'Multi-tenant', description: 'Isolated environments' },
  { icon: GitBranch, title: 'Version Control', description: 'Full API versioning' },
  { icon: Terminal, title: 'CLI Tools', description: 'Developer tools' },
  { icon: Sparkles, title: 'Smart Caching', description: 'Edge optimization' },
  { icon: Gauge, title: 'Performance', description: '99.99% uptime SLA' },
  { icon: Users, title: 'Team Collab', description: 'Real-time sharing' },
  { icon: FileCheck, title: 'Audit Logs', description: 'Complete tracking' },
]

export function Features() {
  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to scale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for developers, trusted by enterprises. Our platform provides everything you need to build and deploy AI at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-600/50 hover:bg-gray-900/80 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                  
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}