import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Rules } from "@/components/rules"
import { Reservation } from "@/components/reservation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Rules />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
