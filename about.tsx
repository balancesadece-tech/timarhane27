import { Clock, Users, Skull, MapPin } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "50",
    label: "Dakika",
    description: "Karanlıkta geçireceğiniz süre"
  },
  {
    icon: Users,
    value: "2-20",
    label: "Kişi",
    description: "Grup kapasitesi"
  },
  {
    icon: Skull,
    value: "∞",
    label: "Korku",
    description: "Sınırsız adrenalin"
  },
  {
    icon: MapPin,
    value: "27",
    label: "Oda",
    description: "Farklı korku senaryosu"
  },
]

export function About() {
  return (
    <section id="hakkimizda" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider">
            HAKKIMIZDA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            2016 yılından bu yana Gaziantep&apos;in ilk ve en korkutucu 
            interaktif korku deneyimidir. Profesyonel oyuncularımız, özel efektlerimiz 
            ve benzersiz senaryolarımızla unutulmaz bir macera yaşayacaksınız.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg p-6 md:p-8 text-center transition-all duration-500 hover:bg-card/80 border-glow"
            >
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-[var(--font-display)] text-4xl md:text-5xl text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary text-sm uppercase tracking-widest font-semibold mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-20 md:mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl text-foreground mb-6 tracking-wider">
              HİKAYEMİZ
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Timarhane 27, şehrin en eski ve en karanlık sırlarını barındıran 
                bir yapıda hayat buldu. Yıllar önce terk edilen bu akıl hastanesinin 
                duvarları, geçmişin acı dolu anılarıyla doluydu.
              </p>
              <p>
                Şimdi ise bu karanlık koridorlar, cesaretini kanıtlamak isteyenlere 
                kapılarını açıyor. Her köşede bir sürpriz, her odada yeni bir korku 
                sizi bekliyor.
              </p>
              <p className="text-primary font-semibold">
                Soru şu: Çıkışı bulabilecek misiniz?
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-card to-primary/10 rounded-lg border border-primary/30 flex items-center justify-center border-glow">
              <Skull className="w-32 h-32 md:w-40 md:h-40 text-primary/50" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
