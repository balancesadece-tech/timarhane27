import { 
  Zap, 
  Users, 
  Lock, 
  Volume2, 
  Eye, 
  Shield 
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Gerçekçi Efektler",
    description: "Profesyonel ses, ışık ve özel efektlerle tamamen korkuya dalın"
  },
  {
    icon: Users,
    title: "Canlı Oyuncular",
    description: "Eğitimli oyuncularımız sizinle etkileşime girerek korkuyu yaşatır"
  },
  {
    icon: Lock,
    title: "Kaçış Yok",
    description: "Bir kez girdiniz mi, çıkışı bulmak size kalmış"
  },
  {
    icon: Volume2,
    title: "360° Ses Sistemi",
    description: "Her yönden gelen seslerle tam bir atmosfer deneyimi"
  },
  {
    icon: Eye,
    title: "Karanlık Koridorlar",
    description: "Gözlerinize güvenmeyin, karanlık sizi kandırabilir"
  },
  {
    icon: Shield,
    title: "Güvenli Macera",
    description: "Tüm korkuya rağmen, güvenliğiniz bizim önceliğimiz"
  },
]

export function Features() {
  return (
    <section id="ozellikler" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider">
            DENEYİM
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Timarhane 27&apos;yi benzersiz kılan özellikler
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg p-8 transition-all duration-500 hover:bg-card/60"
            >
              {/* Icon container */}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
