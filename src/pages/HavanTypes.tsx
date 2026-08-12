import HavanCard from "@/components/HavanCard";
import { havans } from "@/data/havans";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { PHONE_TEL_HREF, WHATSAPP_URL } from "@/lib/contact";

const sections = [
  {
    title: "माँ बगलामुखी हवन का गहन अर्थ",
    hi: "माँ बगलामुखी हवन एक पवित्र अग्नि साधना है जिसमें संकल्प, मंत्र, आहुति और श्रद्धा के माध्यम से जीवन की बाधाओं को शांत करने की प्रार्थना की जाती है। माँ बगलामुखी को दस महाविद्याओं में स्तंभन शक्ति की अधिष्ठात्री माना गया है। स्तंभन का अर्थ किसी व्यक्ति को हानि पहुँचाना नहीं, बल्कि नकारात्मक वाणी, अन्यायपूर्ण विरोध, झूठे आरोप, भय और अशुभ प्रभावों को रोकने की दिव्य भावना है। यह हवन उन भक्तों के लिए विशेष माना जाता है जो शत्रु बाधा, न्यायालय संबंधी तनाव, व्यापारिक रुकावट, घर की अशांति या आत्मविश्वास की कमी से जूझ रहे हों। नलखेड़ा, मध्य प्रदेश, भारत में माँ बगलामुखी की उपासना को गहरी श्रद्धा से देखा जाता है, इसलिए यहाँ किया गया पूजन भक्तों को आस्था, अनुशासन और मानसिक स्थिरता देता है।",
    en: "Maa Baglamukhi Havan is a sacred fire ritual in which a devotee prays to calm life obstacles through sankalp, mantra, offerings and devotion. Maa Baglamukhi is revered among the ten Mahavidyas as the divine power of stillness and control. This power does not mean harming anyone; it means stopping negative speech, unfair opposition, false accusations, fear and harmful influences through a sacred devotional process. This havan is considered meaningful for devotees facing enemies, legal stress, business blocks, family unrest or loss of confidence. Worship connected with Nalkheda, Madhya Pradesh, India carries deep faith, and the ritual gives devotees devotion, discipline and mental steadiness."
  },
  {
    title: "आध्यात्मिक महत्व और पौराणिक दृष्टि",
    hi: "शास्त्रीय मान्यता के अनुसार जब जीवन में अन्याय, भ्रम और विरोध की तीव्रता बढ़ती है, तब माँ बगलामुखी की साधना साधक को संयम, साहस और विजय की दिशा में आगे बढ़ाती है। अग्नि को देवताओं तक प्रार्थना पहुँचाने वाला माध्यम माना गया है। जब पंडित जी शुद्ध उच्चारण से मंत्र जाप करते हैं और आहुति दी जाती है, तब साधक का संकल्प दिव्य ऊर्जा के साथ जुड़ता है। यह प्रक्रिया भक्त को अंधविश्वास की ओर नहीं, बल्कि संयमित कर्म, सत्य, धैर्य और आत्मबल की ओर प्रेरित करती है। बगलामुखी पूजा में पीले वस्त्र, हल्दी, चने की दाल, घी, नारियल, पुष्प और विशेष सामग्री का उपयोग किया जाता है, क्योंकि पीला रंग माँ बगलामुखी की तेजस्वी शक्ति से जुड़ा माना जाता है।",
    en: "According to spiritual tradition, when injustice, confusion and opposition become intense, the worship of Maa Baglamukhi guides the devotee toward patience, courage and victory. Fire is regarded as a medium that carries prayers to the divine. When the pandit chants mantras with correct pronunciation and offerings are placed in the sacred fire, the devotee's sankalp connects with spiritual energy. This process does not promote superstition; it inspires disciplined action, truth, patience and inner strength. Baglamukhi Puja uses yellow cloth, turmeric, gram lentils, ghee, coconut, flowers and special materials because the yellow color is associated with the radiant power of Maa Baglamukhi."
  },
  {
    title: "हवन के प्रमुख प्रकार",
    hi: "भक्त अपनी आवश्यकता के अनुसार अलग-अलग प्रकार के हवन चुनते हैं। लाल मिर्च हवन तीव्र नकारात्मकता, तंत्र बाधा, नज़र दोष और अचानक बढ़े विरोध की स्थिति में कराया जाता है। विजय हवन महत्वपूर्ण कार्य, राजनीति, प्रतियोगिता, व्यापारिक निर्णय और नेतृत्व से जुड़े प्रयासों में सफलता की प्रार्थना के लिए कराया जाता है। शत्रु नाश हवन का उद्देश्य किसी को हानि पहुँचाना नहीं, बल्कि अन्यायपूर्ण विरोध, झूठे आरोप और मानसिक भय से सुरक्षा की भावना प्राप्त करना है। कोर्ट केस से जुड़े संकल्प में साधक न्याय, धैर्य, सही निर्णय और सम्मानजनक परिणाम की प्रार्थना करता है। सामान्य बगलामुखी हवन परिवार की शांति, आत्मविश्वास, आध्यात्मिक सुरक्षा और मनोबल के लिए भी कराया जा सकता है।",
    en: "Devotees select different types of havan according to their needs. Lal Mirch Havan is performed for intense negativity, tantra-related disturbance, nazar dosh and sudden opposition. Vijay Havan is performed for success in important work, politics, competition, business decisions and leadership efforts. Shatru Nash Havan does not aim to harm anyone; its purpose is to pray for protection from unfair opposition, false allegations and mental fear. In a court case sankalp, the devotee prays for justice, patience, correct decisions and a respectful outcome. A general Baglamukhi Havan may also be performed for family peace, confidence, spiritual protection and emotional strength."
  },
  {
    title: "लाभ, उपयोग और जीवन से जुड़े उदाहरण",
    hi: "माँ बगलामुखी हवन के लाभ भक्त की श्रद्धा, संकल्प, कर्म और परिस्थिति के अनुसार अनुभव किए जाते हैं। कोई व्यक्ति न्यायालय के मामले में भय और भ्रम कम करने के लिए यह साधना करवाता है, कोई व्यापारी लगातार रुकावट और विरोध से राहत की प्रार्थना करता है, कोई परिवार नकारात्मक वातावरण और अशांति से मुक्ति चाहता है, और कोई विद्यार्थी या प्रतियोगी आत्मबल तथा एकाग्रता के लिए पूजा करवाता है। इस हवन में शत्रु बाधा से रक्षा, वाणी के दोषों से बचाव, नकारात्मक ऊर्जा की शांति, साहस, स्पष्टता और सफलता की कामना की जाती है। भक्तों को यह भी समझाया जाता है कि पूजा के साथ सत्य, धैर्य, सही सलाह और सत्कर्म भी आवश्यक हैं।",
    en: "The benefits of Maa Baglamukhi Havan are experienced according to the devotee's faith, sankalp, actions and situation. One person may perform this ritual to reduce fear and confusion in a legal matter, a business owner may pray for relief from repeated blocks and opposition, a family may seek peace from a negative atmosphere, and a student or competitor may seek confidence and focus. This havan includes prayers for protection from enemies, control of harmful speech, calming of negative energy, courage, clarity and success. Devotees are also guided that worship should be supported by truth, patience, proper advice and righteous action."
  },
  {
    title: "हवन की चरणबद्ध विधि",
    hi: "हवन की प्रक्रिया पवित्रता और स्पष्ट संकल्प से शुरू होती है। सबसे पहले भक्त का नाम, गोत्र, स्थान और उद्देश्य लेकर संकल्प किया जाता है। इसके बाद गणेश पूजन, गुरु वंदना, कलश स्थापना, नवग्रह शांति और माँ बगलामुखी का आवाहन किया जाता है। निर्धारित मंत्रों का जाप शुद्ध उच्चारण से किया जाता है और फिर अग्नि में घी, हल्दी, पीली सामग्री तथा अन्य पूजन द्रव्य की आहुति दी जाती है। अंत में पूर्णाहुति, आरती, क्षमा प्रार्थना और प्रसाद अर्पण होता है। यदि भक्त दूर रहते हैं, तो फोन या व्हाट्सएप से जानकारी लेकर ऑनलाइन बुकिंग की जा सकती है और पूजा के बाद अपडेट साझा किए जा सकते हैं।",
    en: "The havan process begins with purity and a clear sankalp. First, the devotee's name, gotra, location and purpose are taken for the sankalp. After this, Ganesh Puja, Guru Vandana, Kalash Sthapana, Navgrah Shanti and invocation of Maa Baglamukhi are performed. The selected mantras are chanted with correct pronunciation, and offerings of ghee, turmeric, yellow materials and other sacred items are placed in the fire. The ritual ends with purnahuti, aarti, forgiveness prayer and prasad offering. If devotees live far away, details can be shared by phone or WhatsApp for online booking, and updates may be shared after the puja."
  },
  {
    title: "किसे यह हवन कराना चाहिए",
    hi: "यह हवन उन भक्तों के लिए उपयुक्त है जो जीवन में बार-बार बाधा, विरोध, अपमान, गलत आरोप, कानूनी तनाव, व्यापारिक अस्थिरता, नज़र दोष या मानसिक असुरक्षा अनुभव कर रहे हों। जिन लोगों को महत्वपूर्ण निर्णय लेने हैं, प्रतियोगिता या चुनाव में उतरना है, नई शुरुआत करनी है या परिवार की रक्षा के लिए विशेष प्रार्थना करनी है, वे भी पंडित जी से मार्गदर्शन लेकर यह साधना चुन सकते हैं। पूजा का चयन डर के कारण नहीं, बल्कि सही समझ, श्रद्धा और आवश्यक मार्गदर्शन के आधार पर होना चाहिए। इसी कारण अनुभवी पंडित पहले भक्त की स्थिति सुनते हैं और फिर उचित हवन, सामग्री, दिन और विधि बताते हैं।",
    en: "This havan is suitable for devotees who repeatedly experience obstacles, opposition, humiliation, false accusations, legal stress, business instability, nazar dosh or mental insecurity. People who need to make important decisions, enter competition or elections, begin a new venture or pray for family protection may also choose this ritual after guidance from the pandit. The selection of puja should not be based on fear; it should be based on understanding, faith and proper guidance. Therefore, an experienced pandit first listens to the devotee's situation and then suggests the right havan, materials, day and method."
  }
];

const faqs = [
  { qHi: "क्या यह हवन शत्रुओं के लिए कराया जाता है?", aHi: "यह हवन अन्यायपूर्ण विरोध, झूठे आरोप और भय से रक्षा की प्रार्थना के लिए कराया जाता है।", qEn: "Is this havan performed for enemies?", aEn: "This havan is performed as a prayer for protection from unfair opposition, false accusations and fear." },
  { qHi: "क्या नलखेड़ा आए बिना बुकिंग हो सकती है?", aHi: "हाँ, भक्त फोन या व्हाट्सएप द्वारा जानकारी देकर बुकिंग कर सकते हैं।", qEn: "Can booking be done without visiting Nalkheda?", aEn: "Yes, devotees can share details by phone or WhatsApp and complete the booking process." },
  { qHi: "कौन सा हवन मेरे लिए सही है?", aHi: "पंडित जी आपकी समस्या, संकल्प और परिस्थिति समझकर उपयुक्त हवन बताते हैं।", qEn: "Which havan is right for me?", aEn: "The pandit suggests the suitable havan after understanding your problem, sankalp and situation." }
];

const HavanTypes = () => {
  return (
    <main className="pb-16">
      <Seo
        title="Baglamukhi Havan Booking | Havan Types in Nalkheda"
        description="Detailed Baglamukhi Havan services in Nalkheda for protection, court case, enemies, lal mirch havan, shatru nash and victory."
        path="/havan"
        keywords="baglamukhi havan, baglamukhi havan booking, lal mirch havan, court case havan, shatru nash havan, pandit for havan"
      />

      <section className="py-16 pb-8 yantra-bg" style={{ background: '#8B0000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              हवन के प्रकार और माँ बगलामुखी हवन विवरण
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">माँ बगलामुखी हवन, लाल मिर्च हवन, विजय हवन और शत्रु नाश हवन की विस्तृत जानकारी।</p>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">Detailed guidance for Maa Baglamukhi Havan, Lal Mirch Havan, Vijay Havan and Shatru Nash Havan.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-shimmer inline-flex items-center justify-center px-5 py-3 rounded-lg font-bold">Book Now</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,215,0,0.16)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
              <a href={PHONE_TEL_HREF} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,215,0,0.16)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}><Phone className="h-5 w-5" /> Call</a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {havans.map((h) => <HavanCard key={h.id} havan={h} />)}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-4xl text-white/85 leading-relaxed text-sm md:text-base space-y-7">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>{section.title}</h2>
              <p>{section.hi}</p>
              <p className="text-white/75">{section.en}</p>
            </article>
          ))}

          <section className="space-y-3">
            <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>मुख्य लाभ</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>शत्रु बाधा, झूठे आरोप और अनावश्यक विरोध से सुरक्षा की प्रार्थना।</li>
              <li>Protection prayer from enemies, false accusations and unnecessary opposition.</li>
              <li>कोर्ट केस, व्यापार, प्रतियोगिता और महत्वपूर्ण निर्णयों में विजय की कामना।</li>
              <li>Prayer for victory in court matters, business, competition and important decisions.</li>
              <li>नकारात्मक ऊर्जा, नज़र दोष और भय से मानसिक शांति की साधना।</li>
              <li>Spiritual practice for peace from negative energy, nazar dosh and fear.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Frequently Asked Questions</h2>
            {faqs.map((f) => (
              <div key={f.qHi} className="rounded-lg p-4" style={{ background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,215,0,0.25)' }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qHi}</h3>
                <p className="text-white/80 text-sm mb-2">{f.aHi}</p>
                <h3 className="font-bold mb-1 text-sm" style={{ color: '#FFD700' }}>{f.qEn}</h3>
                <p className="text-white/75 text-sm">{f.aEn}</p>
              </div>
            ))}
          </section>

          <p className="pt-3">आगे बढ़ने के लिए <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>अनुष्ठान सेवा</Link> पढ़ें और फिर <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क पेज</Link> से बुकिंग करें।</p>
          <p className="text-white/75">To continue, read the <Link to="/anushthan" className="underline" style={{ color: '#FFD700' }}>Anushthan service</Link> page and then complete booking from the <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>contact page</Link>.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl"><SeoCta /></div>
    </main>
  );
};

export default HavanTypes;
