import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { anushthans } from "@/data/anushthans";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, WHATSAPP_URL } from "@/lib/contact";

const sections = [
  {
    title: "बगलामुखी अनुष्ठान का गहन अर्थ",
    hi: "बगलामुखी अनुष्ठान माँ बगलामुखी की दीर्घ और अनुशासित साधना है, जिसमें निश्चित मंत्र संख्या, निर्धारित दिन, शुद्ध नियम, संकल्प, पूजन, हवन, तर्पण और पूर्णाहुति शामिल होते हैं। सामान्य बगलामुखी पूजा जहाँ कम समय में संपन्न हो सकती है, वहीं अनुष्ठान कई दिनों तक मंत्र ऊर्जा को स्थिर और प्रभावी रूप से जागृत करने की प्रक्रिया है। भक्त इसे शत्रु बाधा, कोर्ट केस, व्यापारिक रुकावट, तंत्र बाधा, नज़र दोष, मानसिक भय और जीवन की लगातार कठिनाइयों में आध्यात्मिक सहायता के लिए करवाते हैं। नलखेड़ा, मध्य प्रदेश, भारत में माँ बगलामुखी की साधना का विशेष महत्व है, इसलिए यहाँ से मार्गदर्शित अनुष्ठान भक्तों को परंपरा, श्रद्धा और स्पष्टता से जोड़ता है।",
    en: "Baglamukhi Anushthan is a long and disciplined spiritual practice dedicated to Maa Baglamukhi, including a fixed mantra count, selected days, pure rules, sankalp, puja, havan, tarpan and purnahuti. While a regular Baglamukhi Puja may be completed in a shorter time, an anushthan continues for several days to awaken mantra energy in a steady and focused way. Devotees choose it for spiritual support in enemies, court cases, business obstacles, tantra-related disturbance, nazar dosh, mental fear and repeated life difficulties. Guidance connected with Nalkheda, Madhya Pradesh, India links devotees with tradition, devotion and clarity."
  },
  {
    title: "अवधि और मंत्र साधना",
    hi: "अनुष्ठान की अवधि सामान्यतः 3, 5, 7 या 11 दिनों की हो सकती है। तीन दिन का अनुष्ठान शीघ्र मार्गदर्शन और सामान्य बाधा निवारण के लिए चुना जाता है। पाँच दिन का अनुष्ठान व्यापार, परिवार, नौकरी और आत्मबल से जुड़े संकल्पों के लिए उपयुक्त माना जाता है। सात दिन की साधना कोर्ट केस, विरोध, प्रतिष्ठा और महत्वपूर्ण निर्णयों में धैर्य तथा विजय की प्रार्थना के लिए की जाती है। ग्यारह दिन का अनुष्ठान गंभीर बाधाओं, लंबे समय से चल रही परेशानी, सवा लाख मंत्र जाप या विशेष महाजप के लिए चुना जाता है। अवधि का निर्णय भक्त की परिस्थिति, संकल्प, मुहूर्त और पंडित जी के मार्गदर्शन से किया जाता है।",
    en: "The duration of an anushthan is usually 3, 5, 7 or 11 days. A three-day anushthan is selected for quick guidance and general obstacle removal. A five-day anushthan is considered suitable for sankalps related to business, family, job and confidence. A seven-day practice is performed as a prayer for patience and victory in court cases, opposition, reputation and important decisions. An eleven-day anushthan is chosen for serious obstacles, long-running problems, 1.25 lakh mantra jaap or special mahajaap. The duration is decided according to the devotee's situation, sankalp, muhurat and the guidance of the pandit."
  },
  {
    title: "विस्तृत विधि और पूजा क्रम",
    hi: "अनुष्ठान की विधि संकल्प से आरंभ होती है। भक्त का नाम, गोत्र, जन्म विवरण, स्थान और उद्देश्य लेकर पंडित जी संकल्प करते हैं। इसके बाद गणेश पूजन, गुरु पूजन, कलश स्थापना, नवग्रह शांति और माँ बगलामुखी का आवाहन किया जाता है। निर्धारित मंत्र संख्या प्रतिदिन शुद्ध उच्चारण और नियमों के साथ पूरी की जाती है। साधना के दौरान पीली सामग्री, हल्दी, पुष्प, दीप, नैवेद्य और विशेष पूजन द्रव्य का प्रयोग होता है। अंतिम दिन दशांश हवन, तर्पण, मार्जन, पूर्णाहुति, आरती और प्रसाद अर्पण किया जाता है। यदि भक्त दूर हों, तो भी फोन या व्हाट्सएप से विवरण लेकर बगलामुखी पूजा बुकिंग ऑनलाइन की जा सकती है।",
    en: "The method of anushthan begins with sankalp. The pandit takes the devotee's name, gotra, birth details, location and purpose before making the sankalp. After this, Ganesh Puja, Guru Puja, Kalash Sthapana, Navgrah Shanti and invocation of Maa Baglamukhi are performed. The fixed mantra count is completed each day with pure pronunciation and rules. Yellow materials, turmeric, flowers, lamps, naivedya and special puja items are used during the practice. On the final day, dashansh havan, tarpan, marjan, purnahuti, aarti and prasad offering are performed. If devotees live far away, details can be taken by phone or WhatsApp for online Baglamukhi Puja booking."
  },
  {
    title: "लाभ, परिणाम और आध्यात्मिक प्रभाव",
    hi: "बगलामुखी अनुष्ठान के लाभ केवल बाहरी सफलता तक सीमित नहीं हैं। यह साधना साधक के भीतर धैर्य, वाणी पर नियंत्रण, भय से मुक्ति, निर्णय क्षमता और आत्मविश्वास को मजबूत करने की प्रार्थना है। कोर्ट केस में भक्त न्याय और सही दिशा की कामना करते हैं। शत्रु बाधा में अन्यायपूर्ण विरोध शांत होने की प्रार्थना की जाती है। व्यापार में स्थिरता, नौकरी में सम्मान, राजनीति या प्रतियोगिता में विजय और परिवार में सुरक्षा की भावना के लिए भी यह अनुष्ठान कराया जाता है। आध्यात्मिक रूप से यह मन को एकाग्र करता है, नकारात्मक विचारों को कम करता है और भक्त को माँ बगलामुखी की शरण में संयमित कर्म करने की प्रेरणा देता है।",
    en: "The benefits of Baglamukhi Anushthan are not limited to external success. This practice is a prayer to strengthen patience, control of speech, freedom from fear, decision-making ability and confidence within the devotee. In court cases, devotees pray for justice and the right direction. In enemy-related problems, the prayer is for unfair opposition to calm down. The anushthan is also performed for stability in business, respect in job, victory in politics or competition, and a sense of protection in the family. Spiritually, it focuses the mind, reduces negative thoughts and inspires the devotee to act with discipline under the shelter of Maa Baglamukhi."
  },
  {
    title: "कब और क्यों कराना चाहिए",
    hi: "यह अनुष्ठान तब कराया जा सकता है जब व्यक्ति लगातार रुकावट, विरोध, कानूनी तनाव, व्यापार में नुकसान, आत्मविश्वास की कमी, नज़र दोष, तंत्र बाधा या मानसिक अशांति अनुभव कर रहा हो। यदि कोई महत्वपूर्ण कार्य बार-बार रुक रहा है, गलत लोग प्रतिष्ठा को प्रभावित कर रहे हैं, या निर्णय लेने में भय और भ्रम हो रहा है, तो पंडित जी से सलाह लेकर उचित मंत्र संख्या और दिन चुने जा सकते हैं। अनुष्ठान का उद्देश्य किसी के विरुद्ध दुर्भावना रखना नहीं है; इसका उद्देश्य धर्मसम्मत रक्षा, सत्य की विजय, मन की स्थिरता और सकारात्मक जीवन दिशा की प्रार्थना करना है। श्रद्धा, नियम, सत्य और सत्कर्म इस साधना के आवश्यक आधार हैं।",
    en: "This anushthan may be performed when a person faces repeated obstacles, opposition, legal stress, business loss, low confidence, nazar dosh, tantra-related disturbance or mental unrest. If an important task keeps getting blocked, wrong people are affecting reputation, or fear and confusion are present in decision-making, the right mantra count and duration can be selected after consulting the pandit. The purpose of the anushthan is not ill will against anyone; its purpose is righteous protection, victory of truth, mental steadiness and a positive life direction. Faith, rules, truth and good actions are essential foundations of this practice."
  }
];

const faqs = [
  { qHi: "बगलामुखी अनुष्ठान कितने दिन का होता है?", aHi: "यह सामान्यतः 3, 5, 7 या 11 दिनों का होता है और अवधि संकल्प के अनुसार तय होती है।", qEn: "How many days does Baglamukhi Anushthan take?", aEn: "It usually takes 3, 5, 7 or 11 days, and the duration is decided according to the sankalp." },
  { qHi: "क्या यह कोर्ट केस के लिए उपयोगी है?", aHi: "भक्त कोर्ट केस में धैर्य, न्याय और सही परिणाम की प्रार्थना के लिए यह साधना करवाते हैं।", qEn: "Is it useful for court cases?", aEn: "Devotees perform this practice to pray for patience, justice and the right outcome in court matters." },
  { qHi: "क्या ऑनलाइन बुकिंग हो सकती है?", aHi: "हाँ, फोन या व्हाट्सएप से विवरण भेजकर बुकिंग की जा सकती है।", qEn: "Can it be booked online?", aEn: "Yes, booking can be completed by sending details through phone or WhatsApp." }
];

const AnushthanPage = () => {
  return (
    <main className="py-16 pb-24 yantra-bg" style={{ background: '#8B0000' }}>
      <Seo title="Maa Baglamukhi Mantra Jap Anushthan | Best Pandit" description="Detailed Baglamukhi Anushthan service in Nalkheda with 3, 5, 7 and 11 day mantra jaap, puja, havan and booking guidance." path="/anushthan" keywords="baglamukhi anushthan, baglamukhi puja, baglamukhi puja booking online, pandit for havan, havan booking" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान सेवा</h1>
          <p className="text-white/80 max-w-2xl mx-auto">माँ बगलामुखी की 3, 5, 7 और 11 दिन की मंत्र साधना, हवन और पूर्णाहुति।</p>
          <p className="text-white/70 max-w-2xl mx-auto mt-3">A 3, 5, 7 and 11 day mantra practice, havan and purnahuti dedicated to Maa Baglamukhi.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-shimmer inline-flex items-center justify-center px-5 py-3 rounded-lg font-bold">Book Now</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,215,0,0.16)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
            <a href={PHONE_TEL_HREF} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,215,0,0.16)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}><Phone className="h-5 w-5" /> Call</a>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {anushthans.map((a) => (
            <article key={a.id} className="rounded-xl overflow-hidden" style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
              <div className="relative w-full aspect-[16/9] overflow-hidden"><img src={a.image} alt={`${a.title} - baglamukhi anushthan, mantra jaap, online booking`} loading="lazy" width={768} height={432} className="w-full h-full object-cover" /></div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4"><h2 className="text-xl md:text-2xl font-bold text-golden-outline" style={{ color: '#FFD700' }}>{a.title}</h2><span className="text-sm md:text-base font-semibold px-4 py-1.5 rounded-lg text-golden-outline tracking-wide" style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}>संपर्क करें विवरण हेतु</span></div>
                <div className="flex flex-wrap gap-2 mb-4">{[a.jap, a.pandits, a.duration, ...(a.extraDetails || [])].filter(Boolean).map((d) => <span key={d} className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(139,0,0,0.5)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}>{d}</span>)}</div>
                <p className="text-white text-sm md:text-base leading-relaxed mb-5">{a.intro}</p>
                <div className="mb-5"><h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>मुख्य लाभ:</h3><ul className="space-y-2">{a.benefits.slice(0, 3).map((b) => <li key={b} className="flex items-start gap-2 text-white text-sm md:text-base"><CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#FFD700' }} /><span>{b}</span></li>)}</ul></div>
                <div className="flex flex-col sm:flex-row gap-3"><Link to={`/anushthan/${a.id}`} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105" style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}>विस्तार से देखें <ArrowRight className="h-4 w-4" /></Link><Link to="/booking" className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm md:text-base transition-all hover:scale-105"><BookOpen className="h-4 w-4" /> अभी अनुष्ठान बुक करें</Link></div>
              </div>
            </article>
          ))}
        </div>

        <section className="max-w-4xl mx-auto mt-14 text-white/85 leading-relaxed text-sm md:text-base space-y-7">
          {sections.map((section) => <article key={section.title} className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>{section.title}</h2><p>{section.hi}</p><p className="text-white/75">{section.en}</p></article>)}
          <section className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>मुख्य लाभ</h2><ul className="list-disc pl-6 space-y-2"><li>शत्रु बाधा, विरोध और झूठे आरोपों में आध्यात्मिक सुरक्षा की प्रार्थना।</li><li>Prayer for spiritual protection from enemies, opposition and false accusations.</li><li>कोर्ट केस, व्यापार, नौकरी और प्रतियोगिता में विजय तथा स्थिरता की कामना।</li><li>Prayer for victory and stability in court cases, business, job and competition.</li><li>मंत्र साधना से आत्मविश्वास, संयम और सकारात्मक ऊर्जा की वृद्धि।</li><li>Increase of confidence, discipline and positive energy through mantra practice.</li></ul></section>
          <section className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Frequently Asked Questions</h2>{faqs.map((f) => <div key={f.qHi} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}><h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qHi}</h3><p className="text-white/80 text-sm mb-2">{f.aHi}</p><h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qEn}</h3><p className="text-white/75 text-sm">{f.aEn}</p></div>)}</section>
          <p className="pt-3">पहले <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>हवन के प्रकार</Link> पढ़ें और फिर <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क पेज</Link> से बुकिंग करें।</p>
          <p className="text-white/75">First read the <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>Havan Types</Link> page and then complete booking from the <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>Contact</Link> page.</p>
        </section>
      </div>
    </main>
  );
};

export default AnushthanPage;
