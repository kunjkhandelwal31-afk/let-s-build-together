import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import BackgroundAudio from "@/components/BackgroundAudio";
import HavanCard from "@/components/HavanCard";
import PanditSection from "@/components/PanditSection";
import CallSection from "@/components/CallSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MandirLocationSection from "@/components/MandirLocationSection";
import MaaBaglamukhiSeoSection, { MaaBaglamukhiFaqSection } from "@/components/MaaBaglamukhiSeoSection";
import BookingForm from "@/components/BookingForm";
import { havans } from "@/data/havans";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import anushthan36000 from "@/assets/anushthan-36000.webp";
import anushthanSavalakh from "@/assets/anushthan-savalakh.webp";
import anushthanPanchlakshi from "@/assets/anushthan-panchlakshi.webp";

const anushthanTypes = [
  {
    id: "36000",
    title: "36 हजार मंत्र-जप अनुष्ठान",
    description: "12 विद्वान पंडितों द्वारा यजमान के नाम, गोत्र एवं संकल्प के साथ 36 हजार मंत्रों का सामूहिक जप। बाधाओं के शमन एवं अनुकूलता की प्रार्थना हेतु।",
    duration: "लगभग 3 घंटे",
    details: ["36,000 मंत्र-जप", "12 विद्वान पंडित", "अवधि — लगभग 3 घंटे"],
    image: anushthan36000,
  },
  {
    id: "savalakh",
    title: "सवा लाख मंत्र-जप विशेष अनुष्ठान",
    description: "36 विद्वान पंडितों द्वारा यजमान के विशेष संकल्प के साथ सवा लाख मंत्रों का सामूहिक जप। विशेष धर्मसम्मत मनोकामना हेतु प्रार्थना।",
    duration: "लगभग 5 घंटे",
    details: ["1,25,000 मंत्र-जप", "36 विद्वान पंडित", "अवधि — लगभग 5 घंटे"],
    image: anushthanSavalakh,
  },
  {
    id: "panchlakshi",
    title: "पाँच लाख मंत्र-जप महाअनुष्ठान",
    description: "21 विद्वान पंडितों द्वारा निरंतर 5 दिवस, प्रतिदिन लगभग 5 घंटे मंत्र-जप। गंभीर एवं दीर्घकालिक परिस्थितियों हेतु विस्तृत आराधना।",
    duration: "निरंतर 5 दिवस",
    details: ["5,00,000 मंत्र-जप", "21 विद्वान पंडित", "निरंतर 5 दिवस", "साधना — प्रतिदिन लगभग 5 घंटे"],
    image: anushthanPanchlakshi,
  },
];

// Show only these 4 havans on home page in this order
const homeHavanIds = ["lal-mirch", "shanti", "vijay-prapti", "dhan-prapti"];
const homeHavans = homeHavanIds
  .map((id) => havans.find((h) => h.id === id))
  .filter(Boolean) as typeof havans;

const Index = () => {
  return (
    <main className="pb-16">
      <Helmet>
        <title>माँ बगलामुखी हवन एवं अनुष्ठान | Best Pandit</title>
        <meta name="description" content="माँ बगलामुखी हवन, पूजा एवं मंत्र-जप अनुष्ठान अनुभवी पंडितों द्वारा। ऑनलाइन एवं प्रत्यक्ष हवन बुक करें और माँ बगलामुखी की आराधना से जुड़ें।" />
        <meta property="og:title" content="माँ बगलामुखी हवन एवं अनुष्ठान | Best Pandit" />
        <meta property="og:description" content="माँ बगलामुखी हवन, पूजा एवं मंत्र-जप अनुष्ठान अनुभवी पंडितों द्वारा। ऑनलाइन एवं प्रत्यक्ष हवन बुक करें और माँ बगलामुखी की आराधना से जुड़ें।" />
        <meta property="og:url" content="https://maabaglamukhibestpandit.com/" />
        <link rel="canonical" href="https://maabaglamukhibestpandit.com/" />
      </Helmet>
      <HeroSection />

      {/* SEO H1 — sits below hero, semantic for Google */}
      <section className="py-8" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-golden-shadow" style={{ color: '#FFD700' }}>
            Baglamukhi Havan & Anushthan Booking | Maa Baglamukhi Puja Services
          </h1>
          <p className="text-white/85 mt-3 text-sm md:text-base">
            अनुभवी पंडितों द्वारा <strong>baglamukhi havan</strong>, <strong>lal mirch havan</strong>, <strong>baglamukhi anushthan</strong> एवं
            tantra nivaran हवन — India एवं worldwide booking उपलब्ध।
          </p>
        </div>
      </section>

      <BackgroundAudio />

      {/* Top Havans */}
      <section id="hawan-section" className="py-20 yantra-bg" style={{ background: '#8B0000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              🔥 हवन सेवाएं
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              माँ बगलामुखी की कृपा से जीवन की हर समस्या का समाधान — अनुभवी पंडित जी द्वारा विधिवत हवन
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeHavans.map((h, i) => (
              <div key={h.id} className="relative">
                {i === 0 && (
                  <span className="absolute -top-3 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
                        style={{ background: '#FFD700', color: '#8B0000' }}>
                    🔥 सबसे लोकप्रिय
                  </span>
                )}
                <HavanCard havan={h} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/havan-types"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#FFD700' }}
            >
              सभी हवन देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Anushthan Section */}
      <section id="anushthan-section" className="py-20 yantra-bg" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
              📿 अनुष्ठान सेवाएं
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              गहन साधना और विशेष अनुष्ठान — माँ बगलामुखी की शक्ति से जीवन की हर कठिनाई का समाधान।
              पूर्ण विधि-विधान, मंत्र जाप, हवन और तर्पण सहित।
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {anushthanTypes.map((a) => (
              <div
                key={a.title}
                className="rounded-xl overflow-hidden hover:shadow-golden transition-all group flex flex-col"
                style={{ background: '#F57C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.title} - baglamukhi anushthan, online booking`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-golden-outline" style={{ color: '#FFD700' }}>{a.title}</h3>
                  <p className="text-white text-sm mb-4 leading-relaxed flex-1">{a.description}</p>
                  <ul className="mb-4 space-y-1.5 rounded-lg p-3" style={{ background: 'rgba(139,0,0,0.45)', border: '1px solid rgba(255,215,0,0.3)' }}>
                    {a.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-white">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: '#FFD700' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/90 text-sm">⏱️ {a.duration}</span>
                    <span className="font-semibold text-sm md:text-base text-golden-outline" style={{ color: '#FFD700' }}>संपर्क करें विवरण हेतु</span>
                  </div>
                  <div className="space-y-2 mt-auto">
                    <Link
                      to={`/anushthan/${a.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                      style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
                    >
                      विस्तार से देखें <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/booking"
                      className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                    >
                      <BookOpen className="h-4 w-4" /> अभी अनुष्ठान बुक करें
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/anushthan"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
              style={{ color: '#FFD700' }}
            >
              सभी अनुष्ठान देखें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PanditSection />

      {/* 1️⃣ Complete SEO + theory content (grouped) */}
      <MaaBaglamukhiSeoSection hideFaq />

      {/* Long-form SEO content — strict Hindi block then English block */}
      <section className="py-14" style={{ background: '#5A0000' }}>
        <div className="container mx-auto px-4 max-w-3xl text-white/85 leading-relaxed text-sm md:text-base space-y-10">

            {/* 1. Introduction */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>माँ बगलामुखी हवन — सम्पूर्ण परिचय</h2>
              <p>
                माँ बगलामुखी दस महाविद्याओं में आठवीं शक्ति हैं और इन्हें स्तंभन की देवी कहा जाता है। ये शत्रुओं की वाणी, बुद्धि और
                षड्यंत्रों को स्तंभित करने वाली परम शक्ति हैं। बगलामुखी हवन इनकी उपासना का सबसे प्रभावी माध्यम है, जो वैदिक एवं
                तांत्रिक दोनों परम्पराओं में सिद्ध माना गया है। यह अनुष्ठान विशेष रूप से शत्रु नाश, मुकदमे में विजय, तांत्रिक बाधा निवारण,
                नज़र दोष और जीवन की विभिन्न समस्याओं के समाधान हेतु किया जाता है। नलखेड़ा (आगर मालवा, मध्यप्रदेश) का प्रसिद्ध
                बगलामुखी मंदिर इस साधना का सबसे सिद्ध स्थान माना जाता है।
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Maa Baglamukhi Havan — Complete Introduction</h2>
              <p>
                Maa Baglamukhi is the eighth power among the ten Mahavidyas and is known as the Goddess of Stambhan (paralysis of
                opposing forces). She is the supreme energy that stills the speech, intellect and conspiracies of enemies.
                Baglamukhi Havan is the most effective form of her worship, established in both Vedic and Tantric traditions.
                The ritual is performed for enemy protection, court case victory, tantra removal, nazar dosh and many life
                difficulties. The famous Baglamukhi Mandir at Nalkheda (Agar Malwa, Madhya Pradesh, India) is considered the
                most powerful seat of this sadhana.
              </p>
            </article>

            {/* 2. Significance */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>बगलामुखी हवन का आध्यात्मिक महत्व</h2>
              <p>
                शास्त्रों के अनुसार माँ बगलामुखी की आराधना से साधक को वाक्-सिद्धि एवं स्तंभन-शक्ति की प्राप्ति होती है। पीताम्बरा देवी के
                रूप में इनकी पूजा पीले वस्त्र, पीले पुष्प, हल्दी एवं पीली सरसों से की जाती है। हवन में विशेष मंत्रों की आहुतियाँ दी जाती हैं
                जो साधक के चारों ओर एक अदृश्य रक्षा-कवच बनाती हैं। यह ऊर्जा शत्रुओं के दुष्प्रभाव को निष्क्रिय करती है और साधक को
                मानसिक शांति, आत्मविश्वास तथा सकारात्मक दिशा प्रदान करती है।
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Spiritual Significance of Baglamukhi Havan</h2>
              <p>
                According to the scriptures, the worship of Maa Baglamukhi grants the devotee the powers of Vak-Siddhi (mastery
                of speech) and Stambhan-Shakti (the power to stop opposing forces). As the Pitambara Devi, she is worshipped
                with yellow cloth, yellow flowers, turmeric and yellow mustard. During the havan, special mantras and offerings
                form an invisible shield of protection around the devotee, neutralising negative influences and bringing mental
                peace, confidence and positive direction.
              </p>
            </article>

            {/* 3. Benefits */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>बगलामुखी हवन के लाभ</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>शत्रु नाश एवं स्तंभन — गुप्त एवं प्रत्यक्ष शत्रुओं की वाणी, बुद्धि एवं षड्यंत्रों का स्तंभन।</li>
                <li>कोर्ट केस विजय — मुकदमे, कानूनी विवाद एवं सम्पत्ति झगड़ों में अनुकूल निर्णय।</li>
                <li>तांत्रिक बाधा निवारण — काला जादू, टोना-टोटका एवं ऊपरी हवा से मुक्ति।</li>
                <li>नज़र दोष निवारण — परिवार, बच्चों, व्यापार पर लगी बुरी नज़र का निवारण।</li>
                <li>विजय प्राप्ति — चुनाव, परीक्षा, साक्षात्कार एवं प्रतियोगिता में सफलता।</li>
                <li>धन एवं समृद्धि — आर्थिक बाधाओं का निवारण एवं व्यापार में वृद्धि।</li>
                <li>ग्रह दोष शांति — शनि, राहु, केतु एवं अन्य ग्रह बाधाओं का निवारण।</li>
                <li>मानसिक शांति — भय, चिंता, अनिद्रा एवं नकारात्मक विचारों से मुक्ति।</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Benefits of Baglamukhi Havan</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enemy stambhan — paralysing the speech, intellect and conspiracies of hidden and visible enemies.</li>
                <li>Court case victory — favourable outcomes in legal disputes, lawsuits and property matters.</li>
                <li>Tantra removal — relief from black magic, tona-totka and negative energies.</li>
                <li>Nazar dosh removal — protection of family, children and business from the evil eye.</li>
                <li>Success and victory — favourable results in elections, exams, interviews and competitions.</li>
                <li>Wealth and prosperity — removal of financial blocks and growth in business.</li>
                <li>Planetary peace — relief from doshas of Saturn, Rahu, Ketu and other planets.</li>
                <li>Mental peace — freedom from fear, anxiety, insomnia and negative thoughts.</li>
              </ul>
            </article>

            {/* 4. Types */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>हवन सेवाओं के प्रकार</h2>
              <p>हम विभिन्न प्रकार की बगलामुखी पूजा एवं हवन सेवाएं प्रदान करते हैं — प्रत्येक साधना का उद्देश्य एवं विधि भिन्न है।</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु स्तंभन एवं सुरक्षा</li>
                <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन</Link> — तंत्र निवारण एवं उग्र शत्रु नाश</li>
                <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link> — 36,000 / सवा लाख / पंचलक्षी मंत्र महा-साधना</li>
                <li>शत्रु नाश हवन, विजय प्राप्ति हवन, धन प्राप्ति हवन, नवग्रह शांति हवन एवं वास्तु शांति हवन।</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Types of Havan Services</h2>
              <p>We offer several types of Baglamukhi puja and havan services — each with a distinct purpose and method.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link> — enemy stambhan and protection.</li>
                <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> — tantra removal and powerful enemy nash.</li>
                <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Anushthan</Link> — 36,000 / 1.25 lakh / Panchlakshi mantra mahasadhana.</li>
                <li>Shatru Nash, Vijay Prapti, Dhan Prapti, Navagraha Shanti and Vastu Shanti havans.</li>
              </ul>
            </article>

            {/* 5. Who should perform */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>किसे बगलामुखी हवन करवाना चाहिए</h2>
              <p>
                जिन व्यक्तियों को लंबे समय से कोर्ट केस में पराजय, व्यापार में अकारण हानि, गुप्त शत्रुओं का भय, तांत्रिक बाधा, बार-बार
                बीमारी, बुरे सपने, प्रतियोगिता में असफलता, विवाह में बाधा अथवा ग्रह दोष का अनुभव हो रहा है, उन्हें बगलामुखी हवन अवश्य
                करवाना चाहिए। यह हवन पुरुष, स्त्री, बालक एवं संपूर्ण परिवार के निमित्त सम्पन्न कराया जा सकता है।
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Who Should Perform Baglamukhi Havan</h2>
              <p>
                People facing repeated losses in court cases, unexplained business loss, fear of hidden enemies, tantra-related
                disturbances, frequent illness, bad dreams, failure in competitions, marriage obstacles or planetary doshas
                should perform Baglamukhi Havan. The ritual can be performed for men, women, children and the entire family.
              </p>
            </article>

            {/* 6. Process */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>हवन की विस्तृत विधि</h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li>संकल्प — साधक के नाम, गोत्र एवं कामना के अनुसार।</li>
                <li>गणपति-कलश पूजन एवं नवग्रह पूजन।</li>
                <li>माँ बगलामुखी यंत्र स्थापन एवं आवाहन।</li>
                <li>बीज मंत्र जाप — निर्धारित संख्या में।</li>
                <li>दशांश हवन — पीली सरसों, हल्दी, गुग्गुल एवं विशेष सामग्री से आहुतियाँ।</li>
                <li>तर्पण, मार्जन एवं पूर्णाहुति।</li>
                <li>ब्राह्मण भोज एवं प्रसाद वितरण।</li>
                <li>सिद्ध प्रसाद एवं अभिमंत्रित यंत्र साधक को कूरियर द्वारा।</li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Detailed Havan Process</h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Sankalp — based on the devotee's name, gotra and wish.</li>
                <li>Ganpati-Kalash puja and Navagraha puja.</li>
                <li>Installation and invocation of the Maa Baglamukhi Yantra.</li>
                <li>Beej mantra jaap — for the prescribed count.</li>
                <li>Dashansh havan — with yellow mustard, turmeric, guggul and special items.</li>
                <li>Tarpan, marjan and purnahuti.</li>
                <li>Brahmin bhoj and prasad distribution.</li>
                <li>Blessed prasad and energised yantra couriered to the devotee.</li>
              </ol>
            </article>

            {/* 7. Why choose */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>हमारी सेवा क्यों चुनें</h2>
              <p>
                हम नलखेड़ा (आगर मालवा, मध्यप्रदेश) के प्रसिद्ध बगलामुखी मंदिर से सेवा प्रदान करते हैं। हमारे विद्वान पंडितों को 15+ वर्षों
                का अनुभव है। पूर्ण शास्त्रोक्त विधि, पारदर्शी संवाद, सम्पूर्ण हवन का video/photo proof, सिद्ध प्रसाद एवं अभिमंत्रित यंत्र
                कूरियर द्वारा भेजना हमारी विशेषताएँ हैं। 247+ संतुष्ट साधकों ने 4.9/5 की rating दी है।
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Why Choose Our Service</h2>
              <p>
                We serve from the famous Baglamukhi Mandir at Nalkheda (Agar Malwa, Madhya Pradesh). Our learned pandits carry
                15+ years of experience. Complete Vedic procedure, transparent communication, full video and photo documentation,
                blessed prasad and an energised yantra couriered to the devotee are our key strengths. 247+ satisfied devotees
                have rated us 4.9/5.
              </p>
            </article>

            {/* 8. Online booking */}
            <article className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#FFD700' }}>ऑनलाइन हवन बुकिंग</h2>
              <p>
                हम भारत एवं विश्वभर में बगलामुखी हवन, पूजा एवं अनुष्ठान सेवा प्रदान करते हैं। बुकिंग के लिए{" "}
                <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online booking page</Link> पर जाएँ या{" "}
                <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>संपर्क पेज</Link> से जुड़ें। +91 90094 51897 पर कॉल या
                WhatsApp भी कर सकते हैं — 24 घंटे में हमारी टीम आपसे संपर्क करेगी।
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2" style={{ color: '#FFD700' }}>Online Havan Booking</h2>
              <p>
                We provide Baglamukhi Havan, Puja and Anushthan services across India and worldwide. To book, visit our{" "}
                <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online booking page</Link> or use the{" "}
                <Link to="/contact" className="underline" style={{ color: '#FFD700' }}>contact page</Link>. You may also call or
                WhatsApp +91 90094 51897 — our team will respond within 24 hours.
              </p>
              <p className="text-white/70 text-xs">
                Service areas: Nalkheda, Agar Malwa, Madhya Pradesh, India — Delhi, Mumbai, Bangalore, Hyderabad, Kolkata,
                Chennai, Pune, Jaipur, Lucknow, Ahmedabad, Bhopal, Indore, USA, UK, Canada, Australia, Dubai, Singapore and
                worldwide.
              </p>
            </article>
        </div>
      </section>

      {/* 2️⃣ Contact / Pandit Ji CTA */}
      <CallSection />

      {/* 3️⃣ Map / Temple location */}
      <MandirLocationSection />

      {/* 4️⃣ Booking section */}
      <section className="py-20 yantra-bg" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFD700' }}>
                अभी बुकिंग करें
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                माँ बगलामुखी की कृपा से अपने जीवन की हर समस्या का समाधान पाएं।
                फ़ॉर्म भरें, हम 24 घंटे में आपसे संपर्क करेंगे।
              </p>
              <div className="p-4 rounded-lg text-sm font-medium" style={{ background: '#FF8C00', color: '#FFD700' }}>
                ⏰ सीमित स्लॉट उपलब्ध — जल्दी बुक करें!
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 5️⃣ FAQ section (grouped) */}
      <section className="py-14" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#FFD700' }}>
            अक्सर पूछे जाने वाले प्रश्न — Baglamukhi Havan FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "बगलामुखी हवन क्या है? (What is Baglamukhi Havan?)",
                a: "बगलामुखी हवन दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी की उपासना का सिद्ध वैदिक अनुष्ठान है। इसमें माँ बगलामुखी के बीज मंत्र का जाप एवं दशांश हवन किया जाता है — यह शत्रु-स्तंभन, कोर्ट केस विजय, तांत्रिक बाधा निवारण और जीवन की समस्याओं के समाधान के लिए प्रसिद्ध है।",
              },
              {
                q: "Baglamukhi Havan कैसे बुक करें? (How to book Havan?)",
                a: "आप हमारी वेबसाइट पर ऑनलाइन बुकिंग फ़ॉर्म भरकर या +91 90094 51897 पर कॉल / WhatsApp करके हवन बुक कर सकते हैं। भारत एवं विश्व के किसी भी स्थान से booking उपलब्ध है। 24 घंटे में हमारी टीम संपर्क करेगी।",
              },
              {
                q: "लाल मिर्च हवन किसके लिए होता है? (Who needs Lal Mirch Havan?)",
                a: "Lal Mirch Havan विशेष रूप से तांत्रिक बाधा, काला जादू, नज़र दोष, ऊपरी हवा और शत्रुओं के षड्यंत्र से पीड़ित व्यक्तियों के लिए किया जाता है। यह अत्यंत उग्र एवं शीघ्र फलदायी माना जाता है।",
              },
              {
                q: "क्या हवन ऑनलाइन करवा सकते हैं? (Is online havan possible?)",
                a: "हाँ, ऑनलाइन हवन बुकिंग की पूर्ण सुविधा उपलब्ध है। हवन नलखेड़ा (Nalkheda, Agar Malwa, Madhya Pradesh) के सिद्ध बगलामुखी मंदिर में अनुभवी पंडितों द्वारा सम्पन्न होता है और आपको live video, photo proof एवं प्रसाद/यंत्र भेजा जाता है।",
              },
              {
                q: "बगलामुखी अनुष्ठान और हवन में क्या अंतर है?",
                a: "बगलामुखी हवन एक छोटी अवधि की पूजा है (1-3 घंटे), जबकि अनुष्ठान में 36,000 से 5,00,000 तक मंत्रों का जाप एवं दशांश हवन शामिल है। अनुष्ठान अधिक शक्तिशाली एवं स्थायी फल प्रदान करता है — जटिल समस्याओं जैसे लम्बे court case, गंभीर शत्रु बाधा या व्यापार में बड़ी हानि के लिए अनुष्ठान विशेष प्रभावी है।",
              },
              {
                q: "पूजा शुल्क कैसे जानें? (How to know the puja donation?)",
                a: "पूजा एवं अनुष्ठान का शुल्क सेवा के प्रकार, अवधि, ब्राह्मणों की संख्या एवं सामग्री पर निर्भर करता है। सटीक विवरण एवं मार्गदर्शन हेतु कृपया +91 90094 51897 पर कॉल या WhatsApp करें।",
              },
              {
                q: "हवन के बाद क्या मिलता है?",
                a: "हवन / अनुष्ठान के बाद सम्पूर्ण विधि का video और photo proof, सिद्ध प्रसाद, माँ बगलामुखी का अभिमंत्रित यंत्र और ब्राह्मणों का आशीर्वाद — सब कुछ कूरियर द्वारा आपके घर पहुँचाया जाता है।",
              },
              {
                q: "Best pandit for Baglamukhi Havan कहाँ मिलेंगे?",
                a: "नलखेड़ा (जिला आगर मालवा, मध्यप्रदेश) के सिद्ध बगलामुखी मंदिर के विद्वान एवं अनुभवी पंडित हमारी सेवा में हैं। 247+ संतुष्ट साधकों ने 4.9/5 की rating दी है।",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-lg p-5"
                style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}
              >
                <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>{f.q}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended FAQ (Hindi + English) with FAQPage schema */}
      <MaaBaglamukhiFaqSection />

      {/* 6️⃣ Reviews / Testimonials */}
      <TestimonialsSection />
    </main>
  );
};

export default Index;
