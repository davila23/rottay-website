import { Cpu, MessageSquare, TrendingUp, DollarSign } from 'lucide-react'

export const productsData = [
  {
    name: 'BitHire.ai',
    description: 'AI-powered recruitment platform that streamlines hiring with intelligent candidate matching and automated screening processes.',
    icon: Cpu,
    status: 'LIVE',
    href: 'https://bithire.ai'
  },
  {
    name: 'TicketGenius',
    description: 'Smart ticketing system with automated support routing, AI-powered responses, and real-time analytics dashboard.',
    icon: MessageSquare,
    status: 'COMING 2025',
    href: '/products/ticketgenius'
  },
  {
    name: 'MarketFlow',
    description: 'Advanced analytics and market intelligence platform for data-driven investment decisions and market analysis.',
    icon: TrendingUp,
    status: 'COMING 2025',
    href: '/products/marketflow'
  },
  {
    name: 'DollarEx',
    description: 'Cross-border payment solution leveraging blockchain for fast, secure, and cost-effective international transactions.',
    icon: DollarSign,
    status: 'COMING 2025',
    href: '/products/dollarex'
  }
]