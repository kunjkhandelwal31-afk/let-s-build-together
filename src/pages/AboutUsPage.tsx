import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { Award, Users, Star, Shield } from "lucide-react";

const AboutUsPage = () => {
  return (
    <>
      <Seo
        title="About Us | Baglamukhi Best Pandit — पंडित जी परिचय"
        description="15+ वर्षों का अनुभव — नलखेड़ा (Nalkheda, Agar Malwa, MP) के सिद्ध बगलामुखी मंदिर से Baglamukhi Havan एवं Anushthan सेवा। अनुभवी पंडित जी, 247+ संतुष्ट साधक, India + worldwide booking।"
        path="/about-us"
        keywords="about baglamukhi pandit, nalkheda pandit, baglamukhi mandir pandit, best pandit for baglamukhi havan, pandit ji credentials"
      />
      <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
        <article className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
            About Us — हमारा परिचय
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-6">
            <strong style={{ color: '#FFD700' }}>Maa Baglamukhi Havan & Anushthan Service</strong> मध्य प्रदेश के
            आगर मालवा जिले के <strong>नलखेड़ा (Nalkheda)</strong> स्थित विश्वप्रसिद्ध माँ बगलामुखी मंदिर से
            जुड़ी एक श्रद्धा-केंद्रित सेवा है। हमारा उद्देश्य दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी की
            शास्त्रोक्त उपासना, हवन एवं अनुष्ठान को हर श्रद्धालु तक — चाहे वह भारत में हो या विदेश में —
            पूर्ण विधि-विधान के साथ पहुँचाना है।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            नलखेड़ा बगलामुखी मंदिर — Our Sacred Origin
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            नलखेड़ा का माँ बगलामुखी मंदिर लगभग 5,000 वर्ष पुराना माना जाता है। शास्त्रों के अनुसार इस
            मंदिर की स्थापना स्वयं महाराज युधिष्ठिर ने महाभारत युद्ध से पूर्व माँ बगलामुखी की कृपा एवं
            विजय प्राप्ति के लिए की थी। तब से यह स्थान शत्रु नाश, विजय प्राप्ति, court case, tantra
            nivaran एवं समस्त बाधाओं के निवारण के लिए भारत का सर्वाधिक सिद्ध शक्तिपीठ माना जाता है।
            हमारे पंडित जी इसी पवित्र मंदिर परिसर में समस्त हवन एवं अनुष्ठान सम्पन्न कराते हैं।
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            पंडित जी का परिचय — Pandit Ji Credentials
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            हमारे प्रधान पंडित जी वेद, तंत्र एवं कर्मकांड के गहन जानकार हैं। उन्होंने काशी हिन्दू विश्वविद्यालय
            एवं परम्परागत गुरु-शिष्य परम्परा से वैदिक कर्मकांड, तांत्रिक साधना एवं ज्योतिष शास्त्र का
            अध्ययन किया है। पिछले <strong>15+ वर्षों</strong> से वे नलखेड़ा मंदिर में बगलामुखी उपासना, विशेष
            हवन एवं महा-अनुष्ठान सम्पन्न करा रहे हैं। उनके नेतृत्व में एक अनुभवी ब्राह्मण-मंडल है — कुल
            21+ विद्वान पंडित — जो बड़े अनुष्ठानों (सवा लाख, पंचलक्षी) में सहभागी होते हैं।
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="p-4 rounded-lg flex gap-3" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <Award className="w-8 h-8 shrink-0" style={{ color: '#FFD700' }} />
              <div>
                <div className="font-bold" style={{ color: '#FFD700' }}>15+ वर्ष</div>
                <div className="text-sm text-white/80">वैदिक कर्मकांड एवं तांत्रिक अनुभव</div>
              </div>
            </div>
            <div className="p-4 rounded-lg flex gap-3" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <Users className="w-8 h-8 shrink-0" style={{ color: '#FFD700' }} />
              <div>
                <div className="font-bold" style={{ color: '#FFD700' }}>247+ साधक</div>
                <div className="text-sm text-white/80">भारत एवं विदेश से संतुष्ट भक्त</div>
              </div>
            </div>
            <div className="p-4 rounded-lg flex gap-3" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <Star className="w-8 h-8 shrink-0" style={{ color: '#FFD700' }} />
              <div>
                <div className="font-bold" style={{ color: '#FFD700' }}>4.9 / 5 Rating</div>
                <div className="text-sm text-white/80">Google एवं WhatsApp reviews</div>
              </div>
            </div>
            <div className="p-4 rounded-lg flex gap-3" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <Shield className="w-8 h-8 shrink-0" style={{ color: '#FFD700' }} />
              <div>
                <div className="font-bold" style={{ color: '#FFD700' }}>पारदर्शी संवाद</div>
                <div className="text-sm text-white/80">कोई छुपा शुल्क नहीं, video/photo proof</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            हमारी सेवाएँ — Our Services
          </h2>
          <p className="text-white/85 leading-relaxed mb-3">
            हम निम्न सेवाएँ प्रदान करते हैं — प्रत्येक सेवा शास्त्रोक्त विधि से एवं पूर्ण पारदर्शिता के साथ
            सम्पन्न होती है:
          </p>
          <ul className="space-y-2 mb-6 text-white/90 list-disc list-inside">
            <li><Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> — शत्रु नाश, विजय, सर्व-कार्य सिद्धि</li>
            <li><Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>लाल मिर्च हवन</Link> — तंत्र निवारण, काला जादू निवारण, नज़र दोष</li>
            <li><Link to="/court-case-havan" className="underline" style={{ color: '#FFD700' }}>Court Case Vijay Havan</Link> — legal victory, न्याय प्राप्ति</li>
            <li><Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Anushthan</Link> — 36,000 / सवा लाख / पंचलक्षी</li>
            <li>Live Darshan, VIP दर्शन एवं विशेष पूजा</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
            हमारा वादा — Our Promise
          </h2>
          <p className="text-white/85 leading-relaxed mb-4">
            हम केवल शास्त्रोक्त विधि से हवन एवं अनुष्ठान कराते हैं। कोई short-cut, कोई अधूरी विधि नहीं।
            प्रत्येक साधक को अनुष्ठान से पूर्व, दौरान एवं बाद में व्यक्तिगत मार्गदर्शन दिया जाता है।
            सम्पूर्ण हवन का video / photo proof, अभिमंत्रित बगलामुखी यंत्र एवं प्रसाद कूरियर द्वारा
            सुरक्षित रूप से भेजा जाता है। पूजा शुल्क पूर्णतः पारदर्शी है — विवरण हेतु कृपया संपर्क करें।
          </p>

          <div className="mt-8 p-4 rounded-xl text-center" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
            <p className="text-white/90 mb-3">अधिक जानकारी हेतु —</p>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg font-bold mr-2" style={{ background: '#FFD700', color: '#6B0000' }}>
              📞 Contact Us
            </Link>
            <Link to="/havan-booking" className="inline-block px-6 py-3 rounded-lg font-bold mt-2 sm:mt-0" style={{ background: 'transparent', color: '#FFD700', border: '2px solid #FFD700' }}>
              🕉️ अभी बुक करें
            </Link>
          </div>

          <SeoCta />
        </article>
      </main>
    </>
  );
};

export default AboutUsPage;
