import { Briefcase, Ticket, ChartBar, DollarSign } from 'lucide-react'

export const productsData = [
  {
    name: 'BitHire.ai',
    description: 'AI-powered recruitment platform that streamlines hiring with intelligent candidate matching and automated screening processes.',
    icon: Briefcase,
    status: 'LIVE',
    href: 'https://bithire.ai',
    preview: 'https://bithire.ai',
    features: [
      'AI-powered candidate matching',
      'Automated resume screening',
      'Interview scheduling',
      'Analytics dashboard'
    ]
  },
  {
    name: 'TicketGenius',
    description: 'Smart ticketing system with automated support routing, AI-powered responses, and real-time analytics dashboard.',
    icon: Ticket,
    status: 'COMING SOON',
    href: '/products/ticketgenius',
    features: [
      'Automated ticket routing',
      'AI-powered responses',
      'Real-time analytics'
    ]
  },
  {
    name: 'MarketFlow',
    description: 'Advanced analytics and market intelligence platform for data-driven investment decisions and market analysis.',
    icon: ChartBar,
    status: 'COMING SOON',
    href: '/products/marketflow',
    features: [
      'Market intelligence',
      'Investment analytics',
      'Real-time data feeds'
    ]
  },
  {
    name: 'DollarEx',
    description: 'Cross-border payment solution leveraging blockchain for fast, secure, and cost-effective international transactions.',
    icon: DollarSign,
    status: 'COMING SOON',
    href: '/products/dollarex',
    features: [
      'Blockchain payments',
      'Cross-border transfers',
      'Low transaction fees'
    ]
  }
]