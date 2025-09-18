import { Phone, Bot, Cloud, Workflow } from 'lucide-react'

export const productsData = [
  {
    name: 'Voice AI Platform',
    description: 'Enterprise-grade voice automation with real-time transcription, sentiment analysis, and custom AI agents for contact centers.',
    icon: Phone,
    status: 'AVAILABLE',
    href: '/contact',
    features: [
      'Real-time speech-to-text with 98% accuracy',
      'Multi-language support (English, Spanish, Portuguese)',
      'Custom voice agent training',
      'Telephony integration (Twilio, Amazon Connect)'
    ]
  },
  {
    name: 'Workflow Automation',
    description: 'Intelligent process automation that connects your existing tools and automates repetitive tasks with AI-powered decision making.',
    icon: Workflow,
    status: 'AVAILABLE',
    href: '/contact',
    features: [
      'No-code workflow builder',
      'API integrations with 200+ platforms',
      'AI-powered decision nodes',
      'Real-time monitoring and alerts'
    ]
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Managed cloud services optimized for AI workloads. Multi-cloud deployment with auto-scaling and cost optimization.',
    icon: Cloud,
    status: 'AVAILABLE',
    href: '/contact',
    features: [
      'Multi-cloud orchestration (AWS, GCP, Azure)',
      'GPU-optimized compute for ML workloads',
      'Auto-scaling and load balancing',
      'Cost optimization and monitoring'
    ]
  },
  {
    name: 'Custom AI Solutions',
    description: 'Tailored AI implementations for your specific business needs. From proof of concept to production deployment.',
    icon: Bot,
    status: 'CONSULTATION',
    href: '/contact',
    features: [
      'Custom model development and training',
      'Legacy system integration',
      'End-to-end implementation',
      'Ongoing support and optimization'
    ]
  }
]