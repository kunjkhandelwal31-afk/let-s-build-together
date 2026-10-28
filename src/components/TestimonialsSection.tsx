import { Star } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "इंदौर",
    image: testimonial1,
    text: "लगभग दो साल से एक कोर्ट केस में फँसा हुआ था, मानसिक रूप से बहुत थक चुका था। पंडित जी ने पूरी श्रद्धा से शत्रु नाश हवन कराया और कुछ ही महीनों में फैसला हमारे पक्ष में आ गया। बात करने का तरीका बहुत शांत और भरोसेमंद है।",
    rating: 5,
  },
  {
    name: "Priya Verma",
    location: "जयपुर",
    image: testimonial2,
    text: "घर में हर छोटी बात पर झगड़े होने लगे थे, माहौल बहुत भारी रहता था। माँ बगलामुखी सामान्य हवन के बाद धीरे-धीरे शांति लौट आई। पंडित जी ने फ़ोन पर हर बात अच्छे से समझाई, कोई जल्दी या दबाव नहीं बनाया।",
    rating: 5,
  },
  {
    name: "Amit Verma",
    location: "लखनऊ",
    image: testimonial3,
    text: "बिज़नेस में लगातार रुकावटें आ रही थीं, पेमेंट अटक रही थी। महाविशेष हवन करवाने के कुछ हफ़्तों में ही एक नया कॉन्ट्रैक्ट मिला और चीज़ें पटरी पर लौटीं। पूरी प्रक्रिया विधिवत और साफ़-सुथरी थी।",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 yantra-bg" style={{ background: '#7A0000' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
            भक्तों के अनुभव
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            हमारे भक्तों ने माँ बगलामुखी की कृपा से अपने जीवन में सकारात्मक बदलाव अनुभव किए हैं
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 hover:shadow-golden transition-all"
              style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={`${t.name} - Maa Baglamukhi Nalkheda Havan भक्त समीक्षा`}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover border-2"
                  style={{ borderColor: '#FFD700' }}
                />
                <div>
                  <div className="font-semibold" style={{ color: '#FFD700' }}>{t.name}</div>
                  <div className="text-xs text-white/80">{t.location}</div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        <ContactStrip className="mt-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
