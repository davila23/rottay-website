import type { Metadata, Viewport } from 'next'
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/schema-markup'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROTTAY | AI & Blockchain Solutions for Latin America',
  description: 'Build and deploy enterprise AI applications with our powerful infrastructure designed for LATAM markets. Specialized in AI recruitment, smart ticketing, and blockchain payments.',
  keywords: 'AI, Blockchain, Latin America, LATAM, Miami, Software Development, Machine Learning, Web3, BitHire, TicketGenius, MarketFlow, DollarEx',
  authors: [{ name: 'Rottay' }],
  creator: 'Rottay',
  publisher: 'Rottay',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rottay.com',
    siteName: 'Rottay',
    title: 'Rottay | AI & Blockchain Solutions for Latin America',
    description: 'Build and deploy enterprise AI applications with our powerful infrastructure designed for LATAM markets',
    images: [
      {
        url: 'https://rottay.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rottay - AI & Blockchain Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rottay | AI & Blockchain Solutions',
    description: 'Build and deploy enterprise AI applications with our powerful infrastructure',
    creator: '@rottay',
    images: ['https://rottay.com/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="ROTTAY" />
        <meta name="mobile-web-app-capable" content="yes" />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="font-sans antialiased bg-black text-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}