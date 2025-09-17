"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const linkGroups = [
  {
    title: 'Products',
    links: [
      { name: 'BitHire.ai', href: '/products/bithire' },
      { name: 'TicketGenius', href: '/products/ticketgenius' },
      { name: 'MarketFlow', href: '/products/marketflow' },
      { name: 'DollarEx', href: '/products/dollarex' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'GitHub', href: 'https://github.com/rottay', external: true },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/rottay', external: true },
      { name: 'Email', href: 'mailto:hello@rottay.ai' },
      { name: '+1 (305) 555-0123', href: 'tel:+13055550123' }
    ]
  }
]

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {linkGroups.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-4">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={'external' in link && link.external ? '_blank' : '_self'}
                  rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <span className="flex-1">{link.name}</span>
                  {'external' in link && link.external && (
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}