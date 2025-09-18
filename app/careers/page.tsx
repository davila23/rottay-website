import { Header, Footer } from '@/components/layout'
import { CareersHero } from '@/components/sections/careers/CareersHero'
import { OpenPositions } from '@/components/sections/careers/OpenPositions'
import { WhyJoinUs } from '@/components/sections/careers/WhyJoinUs'
import { ApplicationForm } from '@/components/sections/careers/ApplicationForm'
import { Chatbot } from '@/components/ui/chatbot'

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-16">
        <CareersHero />
        <WhyJoinUs />
        <OpenPositions />
        <ApplicationForm />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}