import { MapPin, Phone, Clock, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Yeşilsu, Şehitlik Anıtı Yanı, Gaziantep"
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "0545 200 10 01"
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Her gün 08:00 - 00:00"
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@timarhane27"
  },
]

export function Contact() {
  return (
    <section id="iletisim" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider">
            İLETİŞİM
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg p-6 text-center transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-foreground font-medium">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Gaziantep/Yeşilsu
          </h3>
          <p className="text-muted-foreground">
            Şehitlik Anıtı Yanı
          </p>
        </div>
      </div>
    </section>
  )
}
