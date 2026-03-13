"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Skull } from "lucide-react"

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Fog effect */}
      <div className="absolute inset-0 fog-overlay animate-fog opacity-60" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* Red vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_70%,rgba(20,0,0,0.95)_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Skull className="w-20 h-20 md:w-24 md:h-24 text-primary animate-float" />
            <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-4 tracking-wider animate-flicker text-glow">
          TİMARHANE <span className="text-primary">27</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-6 tracking-wide">
          Gaziantep&apos;te 50 Dakikalık Psikolojik Korku Deneyimi
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Terk edilmiş tımarhanenin karanlık koridorlarında kaybolmaya hazır mısınız? 
          Geçmişin izleri, unutulmuş hastalar ve karanlık sırlar sizi bekliyor...
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollTo("#rezervasyon")}
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-6 text-lg uppercase tracking-widest font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105"
          >
            Rezervasyon Yap
          </Button>
          <Button
            onClick={() => scrollTo("#hakkimizda")}
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-10 py-6 text-lg uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105"
          >
            Daha Fazla
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Keşfet</span>
        <ChevronDown className="w-6 h-6 text-primary animate-scroll-down" />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
