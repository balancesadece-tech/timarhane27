import { AlertTriangle, Ban, Heart, Camera, Phone, Clock } from "lucide-react"

const rules = [
  {
    icon: Ban,
    title: "18 Yaş Sınırı",
    description: "18 yaş altı katılımcılar kabul edilmemektedir"
  },
  {
    icon: Heart,
    title: "Sağlık Durumu",
    description: "Kalp, tansiyon ve epilepsi hastaları için uygun değildir"
  },
  {
    icon: Camera,
    title: "Kayıt Yasak",
    description: "İçeride fotoğraf ve video çekimi yasaktır"
  },
  {
    icon: Phone,
    title: "Telefonlar Kapalı",
    description: "Deneyim süresince telefonlar kapalı tutulmalıdır"
  },
  {
    icon: Clock,
    title: "Zamanında Gelin",
    description: "Rezervasyon saatinizden 15 dakika önce burada olun"
  },
  {
    icon: AlertTriangle,
    title: "Sorumluluk",
    description: "Katılımcılar kendi sorumluluklarını kabul etmiş sayılır"
  },
]

export function Rules() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider">
            KURALLAR & UYARILAR
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Güvenliğiniz ve en iyi deneyim için lütfen kurallara uyunuz
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <rule.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {rule.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="mt-12 bg-primary/10 border border-primary/30 rounded-lg p-6 md:p-8 text-center">
          <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-foreground font-semibold text-lg mb-2">
            Bu deneyim gerçek korku içerir!
          </p>
          <p className="text-muted-foreground">
            Timarhane 27, yüksek seviyede korku ve gerilim içerir. Katılım tamamen gönüllülük esasına dayanır.
          </p>
        </div>
      </div>
    </section>
  )
}
