"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, MapPin, Clock, DollarSign, Plus, Minus, TrendingUp, Heart, Laptop, Globe2, Trophy, Users } from 'lucide-react'
import Link from 'next/link'

const positions = [
  {
    id: 'sr-ai-engineer',
    title: 'Senior Software Engineer - AI',
    department: 'Engineering',
    location: 'Remote (Americas)',
    type: 'Full-time',
    salary: '$150,000 - $220,000 USD/year',
    equity: '0.25% - 0.5%',
    level: 'Senior (L4-L5)',
    description: 'Lead the development of cutting-edge AI solutions for our products. You will architect and implement machine learning systems that power millions of transactions across Latin America.',
    requirements: [
      '5+ years of professional software engineering experience',
      'Deep expertise in Python, with production experience in TensorFlow or PyTorch',
      'Strong background in LLMs, RAG architectures, and vector databases (Pinecone, Weaviate)',
      'Experience deploying ML models at scale using MLOps best practices',
      'Proficiency with cloud platforms (AWS/GCP/Azure) and containerization (Docker, K8s)',
      'Strong understanding of distributed systems and microservices architecture',
      'Experience with real-time inference optimization and model quantization',
      'Bachelor\'s degree in CS, Engineering, or equivalent practical experience',
      'Excellent communication skills in English (Spanish is a plus)'
    ],
    responsibilities: [
      'Design and implement AI-powered features across our product suite',
      'Build scalable ML pipelines handling millions of daily predictions',
      'Lead technical design reviews and mentor junior engineers',
      'Collaborate with product teams to identify and implement AI opportunities',
      'Research and implement state-of-the-art NLP and computer vision techniques',
      'Optimize model performance, reducing latency by 10x while maintaining accuracy',
      'Establish MLOps best practices and automated testing frameworks',
      'Contribute to open-source projects and represent ROTTAY at conferences'
    ],
    benefits: [
      'Top-tier health, dental, and vision insurance (100% covered)',
      '$2,000/year professional development budget',
      'Latest MacBook Pro or equivalent Linux machine',
      'Flexible PTO and sabbatical options',
      'Annual company retreats in Latin America',
      'Stock options with 4-year vesting',
      'Home office stipend ($1,500)',
      'Mental health and wellness programs'
    ]
  },
  {
    id: 'lead-recruiting',
    title: 'Lead of Recruiting',
    department: 'People & Culture',
    location: 'Remote (Americas)',
    type: 'Full-time',
    salary: '$120,000 - $160,000 USD/year',
    equity: '0.15% - 0.3%',
    level: 'Lead/Principal',
    description: 'Build and lead our recruiting function as we scale from 50 to 200+ employees. You will be instrumental in shaping our company culture and building world-class engineering and product teams across Latin America.',
    requirements: [
      '8+ years of recruiting experience, with 5+ years in technical recruiting',
      'Proven track record of building recruiting teams from scratch',
      'Experience hiring for AI/ML, blockchain, and full-stack engineering roles',
      'Deep understanding of the Latin American tech talent market',
      'Expertise with modern ATS systems (Greenhouse, Lever) and recruiting analytics',
      'Experience managing recruiting budgets of $500K+',
      'Strong project management and stakeholder management skills',
      'Fluent in English and Spanish (Portuguese is a plus)',
      'Bachelor\'s degree or equivalent experience'
    ],
    responsibilities: [
      'Build and lead a team of 5+ recruiters and sourcers',
      'Develop and execute recruiting strategies to meet aggressive hiring goals',
      'Partner with C-level executives on workforce planning and talent strategy',
      'Establish employer brand and recruiting marketing initiatives',
      'Design and implement inclusive hiring practices and diversity programs',
      'Negotiate with agencies and manage vendor relationships',
      'Create data-driven recruiting processes and performance metrics',
      'Build talent pipelines for critical roles and future needs',
      'Represent ROTTAY at recruiting events and universities'
    ],
    benefits: [
      'Comprehensive health benefits for family',
      'Annual budget for recruiting tools and software',
      '4 weeks PTO + company holidays',
      'Professional coaching and leadership development',
      'Equity compensation package',
      'Flexible work schedule',
      '$1,000 home office setup',
      'Access to exclusive recruiting networks'
    ]
  },
  {
    id: 'frontend-ux',
    title: 'Frontend Engineer - UX Specialist',
    department: 'Engineering',
    location: 'Remote (Americas)',
    type: 'Full-time',
    salary: '$90,000 - $140,000 USD/year',
    equity: '0.1% - 0.25%',
    level: 'Mid-Senior (L3-L4)',
    description: 'Create exceptional user experiences for our AI and blockchain products. You will work closely with design and product teams to build beautiful, performant interfaces that delight users.',
    requirements: [
      '4+ years of frontend development experience',
      'Expert proficiency in React, Next.js 14+, and TypeScript',
      'Strong portfolio demonstrating exceptional UI/UX work',
      'Deep understanding of modern CSS, animations, and responsive design',
      'Experience with Framer Motion, GSAP, or similar animation libraries',
      'Proficiency with design tools (Figma, Sketch) and design systems',
      'Knowledge of accessibility standards (WCAG 2.1) and SEO best practices',
      'Experience with performance optimization and Core Web Vitals',
      'Understanding of user research and A/B testing methodologies',
      'Strong visual design sense and attention to detail'
    ],
    responsibilities: [
      'Build pixel-perfect, accessible, and performant user interfaces',
      'Collaborate with designers to create intuitive user experiences',
      'Develop and maintain our design system and component library',
      'Implement complex animations and micro-interactions',
      'Optimize frontend performance achieving 95+ Lighthouse scores',
      'Conduct user research and usability testing',
      'Contribute to product strategy and design decisions',
      'Mentor junior developers on frontend best practices',
      'Stay current with emerging frontend technologies and trends'
    ],
    benefits: [
      'Health, dental, and vision coverage',
      '$1,500 annual learning budget',
      'Top-spec development equipment',
      'Flexible working hours',
      'Quarterly team offsites',
      'Equity participation',
      'Remote work stipend',
      '20 days PTO + holidays'
    ]
  }
]

const benefitIcons = {
  'Health': Heart,
  'Equipment': Laptop,
  'Remote': Globe2,
  'Growth': TrendingUp,
  'Team': Users,
  'Equity': Trophy
}

export function OpenPositions() {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null)

  const togglePosition = (id: string) => {
    setExpandedPosition(expandedPosition === id ? null : id)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our mission to transform industries with AI and blockchain
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all hover-lift">
                <button
                  onClick={() => togglePosition(position.id)}
                  className="w-full p-6 lg:p-8 text-left"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                            {position.title}
                          </h3>
                          <p className="text-gray-400 mb-4">{position.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center text-gray-500">
                              <MapPin className="w-4 h-4 mr-1" />
                              {position.location}
                            </span>
                            <span className="flex items-center text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {position.type}
                            </span>
                            <span className="flex items-center text-green-400 font-medium">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {position.salary}
                            </span>
                            {position.equity && (
                              <span className="flex items-center text-purple-400">
                                <Trophy className="w-4 h-4 mr-1" />
                                {position.equity} equity
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 text-sm rounded-full">
                        {position.level}
                      </span>
                      <span className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full">
                        {position.department}
                      </span>
                      <div className="p-2 bg-gray-900 rounded-lg">
                        {expandedPosition === position.id ? (
                          <Minus className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedPosition === position.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-800"
                    >
                      <div className="p-6 lg:p-8 space-y-8">
                        {/* Requirements */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-white to-gray-600 mr-3" />
                            Requirements
                          </h4>
                          <ul className="space-y-3">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="flex items-start text-gray-400">
                                <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-600" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-white to-gray-600 mr-3" />
                            Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {position.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start text-gray-400">
                                <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-600" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-white to-gray-600 mr-3" />
                            Benefits & Perks
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {position.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start text-gray-400">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                          <Link
                            href={`#apply?position=${position.id}`}
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            Apply for this position
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Link>
                          <a
                            href={`mailto:careers@rottay.ai?subject=Application for ${position.title}`}
                            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:border-gray-500 transition-colors"
                          >
                            Email us directly
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}