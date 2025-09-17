import Link from 'next/link'
import { Container } from '@/components/ui/container'

const footerLinks = {
  PRODUCTS: [
    { name: 'Data Engine', href: '/products/data-engine' },
    { name: 'GenAI Platform', href: '/products/genai' },
    { name: 'Shield', href: '/products/shield' },
  ],
  COMPANY: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Security', href: '/security' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ],
  RESOURCES: [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Customers', href: '/customers' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Community', href: '/community' },
  ],
  GUIDES: [
    { name: 'Data Labeling', href: '/guides/data-labeling' },
    { name: 'ML Model Training', href: '/guides/ml-training' },
    { name: 'Diffusion Models', href: '/guides/diffusion' },
    { name: 'Computer Vision', href: '/guides/computer-vision' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-900">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Rottay. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}