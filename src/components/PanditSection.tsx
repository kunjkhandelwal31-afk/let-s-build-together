import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Award, CheckCircle, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";
import slideAarti from "@/assets/pandit-havan-aarti.webp";
import slideSankalp from "@/assets/pandit-sankalp.webp";
import slideDhyan from "@/assets/pandit-dhyan.webp";

const slides = [
  {
    src: slideAarti.url,
    alt: "पंडित राहुल शर्मा जी द्वारा माँ बगलामुखी हवन — हवन कुंड में आहुति एवं पवित्र अग्नि-आराधना, नलखेड़ा",
  },
  {
    src: slideSankalp.url,
    alt: "पंडित राहुल शर्मा जी हवन कुंड के समक्ष माँ बगलामुखी के धर्मसम्मत संकल्प सहित आराधना करते हुए",
  },
  {
    src: slideDhyan.url,
    alt: "पंडित राहुल शर्मा जी नदी तट पर ध्यान एवं माँ बगलामुखी की उपासना में मग्न",
  },
];

const features = [
  "10+ वर्षों का अनुभव",
  "शुद्ध वैदिक विधि",
  "घर पर एवं मंदिर में सेवा",
  "सम्पूर्ण सामग्री उपलब्ध",
  "विशेष आशीर्वाद",
];

const trustBadges = [
  { icon: Award, label: "10+ वर्ष अनुभव" },
  { icon: Shield, label: "प्रमाणित पंडित" },
  { icon: Star, label: "100% संतुष्टि" },
];

const PanditSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance the slideshow
  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <section ref={ref} className="py-20 yantra-bg" style={{ background: '#7A0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            पंडित जी के बारे में जानें
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white">पंडित राहुल शर्मा</p>
        </div>

        <div
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Photo slideshow */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-2 group"
            style={{ borderColor: '#FFD700' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
            aria-label="पंडित राहुल शर्मा जी की झलकियाँ"
          >
            <div className="relative aspect-[3/4] w-full">
              {slides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== current}
                />
              ))}
            </div>

            {slides.length > 1 && (
              <>
                {/* Prev / Next controls */}
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  aria-label="पिछली तस्वीर"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 opacity-80 transition-opacity hover:opacity-100 focus:outline-none"
                  style={{ background: 'rgba(122,0,0,0.65)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(current + 1)}
                  aria-label="अगली तस्वीर"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 opacity-80 transition-opacity hover:opacity-100 focus:outline-none"
                  style={{ background: 'rgba(122,0,0,0.65)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Pagination dots */}
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {slides.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`तस्वीर ${i + 1} देखें`}
                      aria-current={i === current}
                      className="h-2.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 22 : 10,
                        background: i === current ? '#FFD700' : 'rgba(255,215,0,0.45)',
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div>
            <p className="text-white/85 leading-relaxed mb-6">
              पंडित राहुल शर्मा जी वैदिक अनुष्ठानों और विशेष रूप से माँ बगलामुखी साधना में 10+ वर्षों का गहरा अनुभव रखते हैं। उन्होंने अनेक सफल हवन और अनुष्ठान सम्पन्न कराए हैं, जिससे हजारों भक्तों को शांति, सुरक्षा और सफलता प्राप्त हुई है।
            </p>
            <p className="text-white/85 leading-relaxed mb-6">
              पंडित राहुल शर्मा जी शास्त्रों के अनुसार पूरी विधि-विधान से हवन सम्पन्न कराते हैं, जिससे हर अनुष्ठान का पूर्ण फल प्राप्त होता है। उनकी साधना, मंत्र शक्ति और अनुभव उन्हें विशेष बनाते हैं।
            </p>

            <h3 className="text-lg font-bold mb-3" style={{ color: '#FFD700' }}>विशेषताएं</h3>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#FFD700' }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm"
                  style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)' }}
                >
                  <b.icon className="h-5 w-5" style={{ color: '#FFD700' }} />
                  <span className="text-sm font-medium text-white">{b.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="btn-shimmer px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all text-base hover:scale-105"
            >
              👉 अभी हवन बुक करें
              <ArrowRight className="h-4 w-4" />
            </Link>

            <ContactStrip compact className="mt-4 justify-start" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditSection;
