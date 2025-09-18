"use client"

import { motion } from 'framer-motion'
import { 
  Cpu, Database, Shield, Zap, Globe, Code2, 
  GitBranch, Activity, Lock, Cloud, Layers, Gauge
} from 'lucide-react'

const techCategories = [
  {
    title: 'Voice & AI Core',
    icon: Cpu,
    description: 'Production-grade AI infrastructure',
    techs: [
      { name: 'OpenAI GPT-4', detail: 'LLM orchestration' },
      { name: 'Whisper', detail: 'Speech recognition' },
      { name: 'Amazon Polly', detail: 'Text-to-speech' },
      { name: 'LangChain', detail: 'AI workflows' },
      { name: 'Pinecone', detail: 'Vector database' },
      { name: 'HuggingFace', detail: 'Model hosting' }
    ],
    metrics: '< 200ms latency • 99.9% accuracy'
  },
  {
    title: 'Telephony & Communications',
    icon: Globe,
    description: 'Enterprise voice infrastructure',
    techs: [
      { name: 'Twilio', detail: 'Voice API' },
      { name: 'Amazon Connect', detail: 'Contact center' },
      { name: 'WebRTC', detail: 'Real-time comms' },
      { name: 'SIP Protocol', detail: 'VoIP standard' },
      { name: 'Asterisk', detail: 'PBX system' },
      { name: 'FreeSWITCH', detail: 'Media server' }
    ],
    metrics: '10K+ concurrent calls • 47 countries'
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Multi-cloud architecture',
    techs: [
      { name: 'AWS', detail: 'Primary cloud' },
      { name: 'Kubernetes', detail: 'Container orchestration' },
      { name: 'Terraform', detail: 'Infrastructure as code' },
      { name: 'Redis', detail: 'Caching layer' },
      { name: 'PostgreSQL', detail: 'Primary database' },
      { name: 'Kafka', detail: 'Event streaming' }
    ],
    metrics: '99.99% uptime • Auto-scaling'
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    description: 'Enterprise-grade protection',
    techs: [
      { name: 'OAuth 2.0', detail: 'Authentication' },
      { name: 'Vault', detail: 'Secrets management' },
      { name: 'CloudFlare', detail: 'DDoS protection' },
      { name: 'DataDog', detail: 'Security monitoring' },
      { name: 'AWS KMS', detail: 'Key management' },
      { name: 'OWASP', detail: 'Security standards' }
    ],
    metrics: 'SOC 2 Type II • HIPAA compliant'
  }
]

const performanceMetrics = [
  { label: 'API Response Time', value: '45ms', icon: Zap },
  { label: 'Voice Processing', value: '180ms', icon: Activity },
  { label: 'Deployment Frequency', value: '50+/week', icon: GitBranch },
  { label: 'Error Rate', value: '< 0.01%', icon: Gauge }
]

export function TechStackNew() {
  return (
    <div className="space-y-16">
      {/* Tech Categories Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full p-6 bg-gradient-to-b from-gray-950 to-black rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-900 rounded-lg">
                    <category.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col">
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    <span className="text-xs text-gray-600">{tech.detail}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-3 border-t border-gray-800">
                <p className="text-xs text-gray-500">{category.metrics}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800"
      >
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Real-Time Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {performanceMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <metric.icon className="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
          <Layers className="w-6 h-6 text-gray-400 mb-2" />
          <h4 className="text-sm font-semibold text-white mb-1">Microservices Architecture</h4>
          <p className="text-xs text-gray-500">Distributed system with independent scaling</p>
        </div>
        <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
          <Database className="w-6 h-6 text-gray-400 mb-2" />
          <h4 className="text-sm font-semibold text-white mb-1">Event-Driven Design</h4>
          <p className="text-xs text-gray-500">Real-time processing with message queues</p>
        </div>
        <div className="p-4 bg-gray-950 rounded-lg border border-gray-800">
          <Lock className="w-6 h-6 text-gray-400 mb-2" />
          <h4 className="text-sm font-semibold text-white mb-1">Zero-Trust Security</h4>
          <p className="text-xs text-gray-500">End-to-end encryption and authentication</p>
        </div>
      </motion.div>
    </div>
  )
}