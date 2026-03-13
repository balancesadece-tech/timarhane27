"use client"

import { useState, useEffect } from "react"
import { Menu, X, Skull } from "lucide-react"

const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Rezervasyon", href: "#rezervasyon" },
  { label: "İletişim", href: "#iletisim" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollTo("#anasayfa")}
            className="flex items-center gap-3 group"
          >
            <Skull className="w-8 h-8 text-primary group-hover:animate-pulse transition-all" />
            <span className="font-[var(--font-display)] text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
              TİMARHANE <span className="text-primary">27</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm uppercase tracking-widest font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 border-b border-primary/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-black/95 backdrop-blur-md px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-foreground/70 hover:text-primary transition-colors py-3 text-left uppercase tracking-widest text-sm border-b border-border/30 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
