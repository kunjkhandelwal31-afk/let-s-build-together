import { MapPin, Navigation } from "lucide-react";

const MandirLocationSection = () => {
  return (
    <section className="py-16 yantra-bg" style={{ background: '#6B0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            मंदिर का स्थान
          </h2>
          <p className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="h-5 w-5" style={{ color: '#FFD700' }} />
            माँ बगलामुखी मंदिर, नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश, भारत
          </p>
          <a href="tel:+919009451897" className="inline-block mt-3 font-semibold hover:underline" style={{ color: '#FFD700' }}>
            📞 +91 90094 51897
          </a>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-golden" style={{ border: '1px solid rgba(255,215,0,0.2)' }}>
          <iframe
            src="https://www.google.com/maps?q=Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="माँ बगलामुखी मंदिर स्थान"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/search/Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold shadow-golden hover:shadow-lg hover:scale-105 transition-all"
          >
            <Navigation className="h-5 w-5" />
            👉 दिशा देखें
          </a>
        </div>
      </div>
    </section>
  );
};

export default MandirLocationSection;
