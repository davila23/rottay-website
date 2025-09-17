"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'

const companies = [
  { name: 'Mayo Clinic' },
  { name: 'Cisco' },
  { name: 'TIME' },
  { name: 'Ola Piper' },
  { name: 'Global Atlantic' },
  { name: 'Howard Hughes' },
  { name: 'Cengage' },
  { name: 'Shore Capital' },
]

export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 bg-black border-t border-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8">
            Trusted by the world's most ambitious enterprises.{' '}
            <Link href="/customers" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
              Meet our customers
              <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}