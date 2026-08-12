import { Link } from "react-router-dom";
import { Crown, Flame, Users, Clock, HandHeart, ShieldCheck, Star } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";
import heroImg from "@/assets/vip-hero.webp";

const benefits = [
  { icon: Users, text: "भीड़ से मुक्त दर्शन" },
  { icon: Flame, text: "पंडित जी द्वारा विशेष पूजा" },
  { icon: HandHeart, text: "गर्भ गृह के अंदर प्रवेश" },
  { icon: Star, text: "व्यक्तिगत आशीर्वाद" },
  { icon: Clock, text: "समय की बचत" },
];

const services = [
  { name: "VIP दर्शन", features: ["गर्भ गृह प्रवेश", "विशेष पूजा", "प्रसाद"], cta: "vip-darshan" },
  { name: "VIP + हवन कॉम्बो", features: ["गर्भ गृह प्रवेश", "विशेष हवन", "व्यक्तिगत मंत्र जाप", "प्रसाद + आशीर्वाद"], cta: "vip-combo", featured: true },
];

const VipDarshanPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="VIP गर्भ गृह" className="absolute inset-0 w-full h-full object-cover" width={1920} height={640} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 gradient-golden text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Crown className="h-4 w-4" /> VIP सेवा
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            VIP <span className="text-gradient-golden">गर्भ गृह प्रवेश</span>
          </h1>
          <p className="text-white/80 text-lg">माँ के निकट से करें विशेष दर्शन</p>
          <ContactStrip compact className="mt-4 text-white" />
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Crown className="h-10 w-10 mx-auto mb-4 text-accent" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            VIP गर्भ गृह प्रवेश सेवा के माध्यम से आप माँ बगलामुखी के अत्यंत निकट जाकर विशेष दर्शन कर सकते हैं। इस सेवा में आपको भीड़ से अलग VIP सुविधा दी जाती है, जिससे आप शांत वातावरण में माँ की पूजा और आशीर्वाद प्राप्त कर सकते हैं।
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            VIP सेवा की <span className="text-gradient-golden">विशेषताएं</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <div key={b.text} className="text-center p-5 rounded-xl border border-border bg-background shadow-golden hover:scale-105 transition-transform">
                <b.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <p className="font-semibold text-sm text-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            VIP <span className="text-gradient-golden">सेवाएं</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {services.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-8 text-center transition-all hover:shadow-golden ${
                  p.featured ? "border-accent bg-card shadow-golden scale-105" : "border-border bg-background"
                }`}
              >
                {p.featured && (
                  <span className="inline-block gradient-golden text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    लोकप्रिय
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-base font-semibold text-gradient-golden mb-4">
                  संपर्क करें विवरण हेतु
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f}>✔ {f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 gradient-golden text-primary-foreground px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  👉 संपर्क करें
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">भक्तों ने सेवा का लाभ लिया</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">संतुष्टि गारंटी</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm font-medium gradient-red text-secondary-foreground inline-block w-full py-2 rounded-lg">
            ⏰ सीमित स्लॉट उपलब्ध — जल्दी बुक करें!
          </p>
          <ContactStrip className="mt-6" />
        </div>
      </section>
    </main>
  );
};

export default VipDarshanPage;
