"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
  "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
]

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Merhaba, Timarhane 27 için rezervasyon yapmak istiyorum.

Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
E-posta: ${formData.email}
Tarih: ${formData.date}
Saat: ${formData.time}
Kişi Sayısı: ${formData.guests}`

    const whatsappUrl = `https://wa.me/905452001001?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="rezervasyon" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-12 border-glow">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h3 className="font-[var(--font-display)] text-3xl text-foreground mb-4 tracking-wider">
              REZERVASYON TALEBİNİZ ALINDI
            </h3>
            <p className="text-muted-foreground mb-8">
              WhatsApp üzerinden sizinle iletişime geçeceğiz. Korkunun tadını çıkarmaya hazır olun!
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              Yeni Rezervasyon
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rezervasyon" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider">
            REZERVASYON
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Korku deneyiminiz için hemen yerinizi ayırtın
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider">
                Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Adınız Soyadınız"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="05XX XXX XX XX"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="ornek@email.com"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Tarih
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Saat
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="">Saat Seçin</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Kişi Sayısı
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg bg-input border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                {Array.from({ length: 19 }, (_, i) => i + 2).map((num) => (
                  <option key={num} value={num.toString()}>
                    {num} Kişi
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-6 text-lg uppercase tracking-widest font-semibold animate-pulse-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Rezervasyon Oluştur
            </Button>
            <p className="text-center text-muted-foreground text-sm mt-4">
              WhatsApp üzerinden hızlı onay alacaksınız
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
