import { Header, Footer } from '@/components/layout'
import { Hero, Products, TechStack } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <Hero />
        <Products />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}