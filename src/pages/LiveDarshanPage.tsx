import { Link } from "react-router-dom";
import { Eye, Flame, Volume2 } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";
import Seo from "@/components/Seo";
import darshan1 from "@/assets/darshan-1.webp";
import darshan2 from "@/assets/darshan-2.webp";
import darshan3 from "@/assets/darshan-3.webp";
import darshan4 from "@/assets/darshan-4.webp";
import heroImg from "@/assets/darshan-hero.webp";

const gallery = [
  { src: darshan1, alt: "माँ बगलामुखी दिव्य दर्शन" },
  { src: darshan2, alt: "माँ बगलामुखी मंदिर पूजा" },
  { src: darshan3, alt: "माँ बगलामुखी हवन अनुष्ठान" },
  { src: darshan4, alt: "माँ बगलामुखी मंदिर दर्शन" },
];

const LiveDarshanPage = () => {
  return (
    <main>
      <Seo
        title="लाइव दर्शन | माँ बगलामुखी मंदिर नलखेड़ा"
        description="माँ बगलामुखी मंदिर नलखेड़ा (म.प्र.) के दिव्य दर्शन एवं हवन की झलकियाँ — ऑनलाइन दर्शन और हवन बुकिंग की जानकारी।"
        path="/live-darshan"
        breadcrumbs={[{ name: "होम", path: "/" }, { name: "लाइव दर्शन", path: "/live-darshan" }]}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="माँ बगलामुखी मंदिर" className="absolute inset-0 w-full h-full object-cover" width={1920} height={640} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-destructive/90 text-destructive-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4 animate-pulse">
            <Eye className="h-4 w-4" /> लाइव दर्शन
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            माँ बगलामुखी <span className="text-gradient-golden">लाइव दर्शन</span>
          </h1>
          <p className="text-white/80 text-lg">घर बैठे करें माँ के दिव्य दर्शन</p>
          <ContactStrip compact className="mt-4 text-white" />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            माँ के <span className="text-gradient-golden">दिव्य दर्शन</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {gallery.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-golden border border-border">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  🙏 जय माँ बगलामुखी
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Flame className="h-10 w-10 mx-auto mb-4 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            माँ बगलामुखी <span className="text-gradient-golden">मंत्र</span>
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-golden">
            <p className="text-xl md:text-2xl font-bold text-gradient-golden leading-relaxed">
              "ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा"
            </p>
            <button className="mt-6 inline-flex items-center gap-2 gradient-golden text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
              <Volume2 className="h-4 w-4" /> मंत्र सुनें
            </button>
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
            माँ बगलामुखी का <span className="text-gradient-golden">महत्व</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg mb-8">
            माँ बगलामुखी दस महाविद्याओं में से एक हैं और इन्हें शत्रु नाश तथा विजय की देवी माना जाता है। इनकी उपासना करने से नकारात्मक शक्तियों का नाश होता है और जीवन में सफलता प्राप्त होती है। माँ की कृपा से शत्रु शांत होते हैं और व्यक्ति को हर कार्य में विजय मिलती है।
          </p>
          <div className="text-center">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 gradient-golden text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-lg shadow-golden hover:shadow-lg transition-all"
            >
              👉 हवन बुक करें
            </Link>
            <ContactStrip className="mt-6" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LiveDarshanPage;
