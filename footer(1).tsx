import { Skull } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Skull className="w-6 h-6 text-primary" />
            <span className="font-[var(--font-display)] text-xl tracking-wider text-foreground">
              TİMARHANE <span className="text-primary">27</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            2016 - {currentYear} Timarhane 27. Tüm hakları saklıdır.
          </p>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm italic">
            Korkunun gerçek adresi
          </p>
        </div>
      </div>
    </footer>
  )
}
