import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const bookingSteps = [
  { step: "1", title: "संपर्क करें", desc: "कॉल या व्हाट्सएप पर अपना नाम, शहर और पूजा का उद्देश्य बताएं।", enTitle: "Contact Us", enDesc: "Share your name, city and puja purpose by call or WhatsApp." },
  { step: "2", title: "मार्गदर्शन लें", desc: "पंडित जी आपकी स्थिति समझकर उचित हवन या अनुष्ठान बताते हैं।", enTitle: "Receive Guidance", enDesc: "The pandit understands your situation and suggests the right havan or anushthan." },
  { step: "3", title: "बुकिंग पक्की करें", desc: "तिथि, मुहूर्त, सामग्री और सेवा की पुष्टि के बाद बुकिंग पूरी करें।", enTitle: "Confirm Booking", enDesc: "Complete booking after confirming date, muhurat, materials and service." }
];

const sections = [
  {
    title: "बगलामुखी हवन बुकिंग कैसे करें",
    hi: "माँ बगलामुखी हवन, बगलामुखी अनुष्ठान और बगलामुखी पूजा की बुकिंग सरल, स्पष्ट और श्रद्धापूर्ण प्रक्रिया से की जाती है। भक्त सबसे पहले फोन या व्हाट्सएप पर संपर्क करके अपनी समस्या, उद्देश्य, नाम, गोत्र और स्थान बताते हैं। यदि मामला कोर्ट केस, शत्रु बाधा, व्यापारिक रुकावट, नज़र दोष, तंत्र बाधा, पारिवारिक अशांति या विजय प्राप्ति से जुड़ा है, तो पंडित जी परिस्थिति को ध्यान से सुनते हैं और उचित पूजा का मार्गदर्शन देते हैं। नलखेड़ा, मध्य प्रदेश, भारत से जुड़ी यह सेवा उन भक्तों के लिए उपयोगी है जो मंदिर आकर पूजा करवाना चाहते हैं या दूर से बगलामुखी पूजा बुकिंग ऑनलाइन करना चाहते हैं। हमारा उद्देश्य भक्त को डराना नहीं, बल्कि सही जानकारी, स्पष्ट विधि और भरोसेमंद आध्यात्मिक मार्गदर्शन देना है।",
    en: "Booking Maa Baglamukhi Havan, Baglamukhi Anushthan and Baglamukhi Puja is done through a simple, clear and devotional process. The devotee first contacts by phone or WhatsApp and shares the problem, purpose, name, gotra and location. If the matter is related to a court case, enemies, business obstacles, nazar dosh, tantra-related disturbance, family unrest or victory, the pandit listens carefully and suggests the suitable puja. This service connected with Nalkheda, Madhya Pradesh, India is useful for devotees who want to visit the temple for puja or complete online Baglamukhi Puja booking from a distance. Our purpose is not to create fear, but to provide correct information, a clear process and trustworthy spiritual guidance."
  },
  {
    title: "बुकिंग के लिए आवश्यक जानकारी",
    hi: "बुकिंग को सही ढंग से पूरा करने के लिए भक्त को कुछ मूल जानकारी साझा करनी चाहिए। इसमें नाम, गोत्र, जन्म विवरण यदि उपलब्ध हो, शहर, संपर्क नंबर और पूजा का उद्देश्य शामिल है। यदि उद्देश्य शत्रु बाधा से सुरक्षा, कोर्ट केस में धैर्य और विजय, व्यापार में सफलता, लाल मिर्च हवन, शतru नाश हवन, या सामान्य परिवारिक शांति से जुड़ा है, तो उसे साफ शब्दों में बताना चाहिए। इससे पंडित जी सही मंत्र संख्या, दिन, सामग्री और मुहूर्त का सुझाव दे पाते हैं। भक्त यदि नलखेड़ा नहीं आ सकते, तो भी हवन बुकिंग फोन या व्हाट्सएप से पूरी की जा सकती है और पूजा सम्पन्न होने के बाद आवश्यक अपडेट साझा किए जा सकते हैं।",
    en: "To complete the booking correctly, the devotee should share some basic information. This includes name, gotra, birth details if available, city, contact number and the purpose of the puja. If the purpose is protection from enemies, patience and victory in a court case, business success, Lal Mirch Havan, Shatru Nash Havan or general family peace, it should be explained clearly. This helps the pandit suggest the right mantra count, duration, materials and muhurat. If devotees cannot visit Nalkheda, havan booking can still be completed by phone or WhatsApp, and necessary updates may be shared after the puja is completed."
  },
  {
    title: "फोन और व्हाट्सएप सहायता",
    hi: "तेज़ उत्तर के लिए भक्त सीधे कॉल कर सकते हैं या व्हाट्सएप पर संदेश भेज सकते हैं। संदेश में केवल ‘हवन बुकिंग’ लिखने के बजाय अपना उद्देश्य भी लिखें, जैसे कोर्ट केस हवन, बगलामुखी हवन फॉर एनिमीज, व्यापार वृद्धि, नज़र दोष निवारण, तंत्र बाधा निवारण या बगलामुखी अनुष्ठान। स्पष्ट जानकारी से परामर्श तेज और सटीक होता है। फोन पर पंडित जी पूजा की विधि, अनुमानित समय, सामग्री, तिथि और आगे की प्रक्रिया समझाते हैं। यह संपर्क पेज इसलिए बनाया गया है ताकि भक्त बिना भ्रम के सही स्थान पर पहुँच सकें और माँ बगलामुखी की साधना के लिए भरोसेमंद मार्गदर्शन प्राप्त कर सकें।",
    en: "For a faster response, devotees can call directly or send a WhatsApp message. Instead of writing only ‘havan booking,’ mention the purpose, such as court case havan, Baglamukhi Havan for enemies, business growth, nazar dosh nivaran, tantra badha nivaran or Baglamukhi Anushthan. Clear information makes the consultation faster and more accurate. On the phone, the pandit explains the puja method, approximate time, materials, date and next steps. This contact page is created so devotees can reach the right channel without confusion and receive reliable guidance for the worship of Maa Baglamukhi."
  },
  {
    title: "विश्वास, पारदर्शिता और सेवा दृष्टि",
    hi: "आध्यात्मिक सेवा में विश्वास सबसे महत्वपूर्ण है। इसलिए भक्त को पूजा, सामग्री, संकल्प, तिथि और प्रक्रिया के बारे में स्पष्ट जानकारी दी जाती है। माँ बगलामुखी की साधना को भय या लालच का विषय नहीं बनाया जाना चाहिए। यह श्रद्धा, नियम, मंत्र शक्ति और सत्य कर्म से जुड़ी परंपरा है। अनुभवी पंडित जी भक्त की स्थिति को सम्मानपूर्वक सुनते हैं और केवल वही सेवा बताते हैं जो परिस्थिति के अनुसार उपयुक्त हो। चाहे भक्त भारत में हों या विदेश में, हमारा प्रयास रहता है कि उन्हें नलखेड़ा, मध्य प्रदेश की पवित्र परंपरा से जुड़ा भरोसेमंद मार्गदर्शन मिले और वे शांति, सुरक्षा और आत्मबल के साथ पूजा करवा सकें।",
    en: "Trust is the most important part of spiritual service. Therefore, devotees are given clear information about the puja, materials, sankalp, date and process. The worship of Maa Baglamukhi should not be made a matter of fear or greed. It is a tradition connected with devotion, rules, mantra shakti and truthful actions. The experienced pandit listens to the devotee's situation respectfully and suggests only the service that is suitable for the circumstances. Whether devotees are in India or abroad, our effort is to provide reliable guidance connected with the sacred tradition of Nalkheda, Madhya Pradesh, so they can perform puja with peace, protection and confidence."
  },
  {
    title: "स्थान और स्थानीय महत्व",
    hi: "हमारी सेवा माँ बगलामुखी की उपासना के लिए प्रसिद्ध नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश, भारत से जुड़ी है। स्थानीय SEO के लिए यह जानकारी इसलिए महत्वपूर्ण है क्योंकि अनेक भक्त ‘बगलामुखी हवन इन नलखेड़ा’, ‘बगलामुखी हवन नियर मी’ या ‘पंडित फॉर हवन’ जैसे शब्दों से सही मार्गदर्शन खोजते हैं। नलखेड़ा की आध्यात्मिक पहचान भक्तों को परंपरा और आस्था से जोड़ती है। यदि आप स्वयं आना चाहते हैं, तो पहले फोन पर समय, तिथि और उपलब्धता की पुष्टि कर लें। यदि आप दूर रहते हैं, तो व्हाट्सएप पर अपनी जानकारी भेजकर पूजा और अनुष्ठान के लिए मार्गदर्शन प्राप्त कर सकते हैं।",
    en: "Our service is connected with Nalkheda, District Agar Malwa, Madhya Pradesh, India, a place known for the worship of Maa Baglamukhi. This information is important for local SEO because many devotees search for the right guidance using phrases such as Baglamukhi Havan in Nalkheda, Baglamukhi Havan near me or pandit for havan. The spiritual identity of Nalkheda connects devotees with tradition and faith. If you want to visit personally, confirm the time, date and availability by phone first. If you live far away, you can send your details on WhatsApp and receive guidance for puja and anushthan."
  }
];

const faqs = [
  { qHi: "बुकिंग के लिए फोन नंबर क्या है?", aHi: `आप सीधे ${PHONE_NUMBER_DISPLAY} पर कॉल कर सकते हैं या व्हाट्सएप द्वारा संपर्क कर सकते हैं।`, qEn: "What is the phone number for booking?", aEn: `You can call directly at ${PHONE_NUMBER_DISPLAY} or contact through WhatsApp.` },
  { qHi: "क्या ऑनलाइन बगलामुखी पूजा बुकिंग हो सकती है?", aHi: "हाँ, भक्त फोन या व्हाट्सएप से अपनी जानकारी भेजकर ऑनलाइन बुकिंग कर सकते हैं।", qEn: "Can Baglamukhi Puja be booked online?", aEn: "Yes, devotees can send their details by phone or WhatsApp and complete online booking." },
  { qHi: "सेवा कहाँ से जुड़ी है?", aHi: "सेवा नलखेड़ा, मध्य प्रदेश, भारत में माँ बगलामुखी उपासना से जुड़ी है।", qEn: "Where is the service connected from?", aEn: "The service is connected with Maa Baglamukhi worship in Nalkheda, Madhya Pradesh, India." }
];

const ContactPage = () => {
  return (
    <main className="pb-16">
      <Seo title="Contact for Baglamukhi Havan Booking in Nalkheda" description="Call or WhatsApp for Baglamukhi Havan, Puja and Anushthan booking in Nalkheda, Madhya Pradesh, India with clear guidance." path="/contact" keywords="baglamukhi havan booking, baglamukhi puja booking online, contact pandit, havan booking, pandit for havan" />

      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>संपर्क और बगलामुखी हवन बुकिंग</h1>
          <p className="text-white/80 max-w-2xl mx-auto">माँ बगलामुखी हवन, अनुष्ठान और पूजा बुकिंग के लिए कॉल या व्हाट्सएप करें।</p>
          <p className="text-white/70 max-w-2xl mx-auto mt-3">Call or WhatsApp for Maa Baglamukhi Havan, Anushthan and Puja booking.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href={PHONE_TEL_HREF} className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold"><Phone className="h-5 w-5" /> Call Now</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,215,0,0.16)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href={PHONE_TEL_HREF} className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}><Phone className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ color: '#FFD700' }} /><h2 className="font-bold mb-1" style={{ color: '#FFD700' }}>कॉल करें</h2><p className="text-white/80">{PHONE_NUMBER_DISPLAY}</p><p className="text-white/60 text-sm mt-1">Call for booking guidance</p></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group" style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.4)' }}><WhatsAppIcon className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" /><h2 className="font-bold mb-1" style={{ color: '#25D366' }}>WhatsApp</h2><p className="text-white/80">अभी चैट करें</p><p className="text-white/60 text-sm mt-1">Chat for quick response</p></a>
          <a href="mailto:info@baglamukhihavan.com" className="rounded-xl p-8 text-center hover:scale-[1.02] transition-all group" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}><Mail className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ color: '#FFD700' }} /><h2 className="font-bold mb-1" style={{ color: '#FFD700' }}>ईमेल</h2><p className="text-white/80">info@baglamukhihavan.com</p></a>
          <div className="rounded-xl p-8 text-center" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}><MapPin className="h-10 w-10 mx-auto mb-3" style={{ color: '#FFD700' }} /><h2 className="font-bold mb-1" style={{ color: '#FFD700' }}>स्थान</h2><p className="text-white/80">मां बगलामुखी मंदिर, नलखेड़ा<br/>जिला आगर मालवा, मध्यप्रदेश, भारत</p></div>
        </div>

        <section className="mb-12"><h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#FFD700' }}>हवन बुकिंग प्रक्रिया</h2><div className="grid md:grid-cols-3 gap-4 mb-6">{bookingSteps.map((s) => <div key={s.step} className="rounded-lg p-5 text-center" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}><span className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg mb-3" style={{ background: '#FFD700', color: '#5A0000' }}>{s.step}</span><h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>{s.title}</h3><p className="text-white/80 text-sm mb-3">{s.desc}</p><h3 className="font-bold mb-1" style={{ color: '#FFD700' }}>{s.enTitle}</h3><p className="text-white/70 text-sm">{s.enDesc}</p></div>)}</div><div className="flex flex-wrap gap-2 mb-6">{["स्पष्ट मार्गदर्शन", "Online Booking", "अनुभवी पंडित", "Nalkheda, MP"].map((t) => <span key={t} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}><CheckCircle className="h-3 w-3" /> {t}</span>)}</div></section>

        <section className="text-white/85 leading-relaxed text-sm md:text-base mb-12 space-y-7">
          {sections.map((section) => <article key={section.title} className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>{section.title}</h2><p>{section.hi}</p><p className="text-white/75">{section.en}</p></article>)}
          <section className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>बुकिंग के लिए क्या भेजें</h2><ul className="list-disc pl-6 space-y-2"><li>अपना नाम, गोत्र, शहर और संपर्क नंबर भेजें।</li><li>Send your name, gotra, city and contact number.</li><li>समस्या या उद्देश्य स्पष्ट करें, जैसे कोर्ट केस हवन या शत्रु नाश हवन।</li><li>Explain the purpose clearly, such as court case havan or shatru nash havan.</li><li>यदि कोई विशेष तिथि या मुहूर्त चाहिए तो पहले से बताएं।</li><li>If you need a specific date or muhurat, mention it in advance.</li></ul></section>
          <section className="space-y-3"><h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Frequently Asked Questions</h2>{faqs.map((f) => <div key={f.qHi} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}><h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qHi}</h3><p className="text-white/80 text-sm mb-2">{f.aHi}</p><h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qEn}</h3><p className="text-white/75 text-sm">{f.aEn}</p></div>)}</section>
          <p className="pt-3">पहले <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>हवन के प्रकार</Link> देखें, फिर <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>अनुष्ठान सेवा</Link> पढ़ें और अंत में इस पेज से बुकिंग पूरी करें।</p>
          <p className="text-white/75">First view the <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>Havan Types</Link> page, then read the <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>Anushthan Service</Link> page, and finally complete booking from this page.</p>
          <h2 className="text-xl font-bold pt-4" style={{ color: '#FFD700' }}>सेवा समय</h2><div className="flex items-start gap-2"><Clock className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#FFD700' }} /><p>हमारी सेवा प्रातः 6:00 बजे से रात्रि 10:00 बजे तक उपलब्ध है। आपात स्थिति में व्हाट्सएप पर संदेश भेज सकते हैं।<br/><span className="text-white/75">Our service is available from 6:00 AM to 10:00 PM. In urgent situations, you may send a WhatsApp message.</span></p></div>
        </section>

        <SeoCta headline="अभी हवन बुक करें — Book Baglamukhi Havan Now" />
        <div className="rounded-xl overflow-hidden mt-8" style={{ border: '1px solid rgba(255,215,0,0.3)' }}><iframe title="माँ बगलामुखी मंदिर, नलखेड़ा — Baglamukhi Temple Location" src="https://www.google.com/maps?q=Maa+Baglamukhi+Temple+Nalkheda+Agar+Malwa+Madhya+Pradesh&output=embed" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </main>
  );
};

export default ContactPage;
