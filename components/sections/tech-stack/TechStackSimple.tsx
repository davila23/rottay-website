"use client"

import { motion } from 'framer-motion'

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs']
  },
  {
    category: 'AI/ML & RAG',
    technologies: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'ChromaDB']
  },
  {
    category: 'Infrastructure',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Vercel', 'PostgreSQL']
  },
  {
    category: 'Blockchain',
    technologies: ['Ethereum', 'Solana', 'Web3.js', 'Smart Contracts', 'BNB Chain']
  }
]

export function TechStackSimple() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-12">
        {techStack.map((layer, index) => (
          <motion.div
            key={layer.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative p-8 bg-gray-950 rounded-lg border border-gray-900 hover:border-gray-800 transition-all">
              {/* Category */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {layer.category}
                </h3>
                <div className="w-20 h-1 bg-white mt-2" />
              </div>
              
              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {layer.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 bg-black text-center text-sm text-gray-400 rounded border border-gray-800 hover:border-white hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}