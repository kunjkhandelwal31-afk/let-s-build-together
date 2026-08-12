import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const LalMirchHavanPage = () => (
  <>
    <Seo
      title="Lal Mirch Havan | लाल मिर्च हवन — Tantra Nivaran, काला जादू निवारण | बुकिंग"
      description="Lal Mirch Havan booking — tantra nivaran, nazar dosh nivaran, काला जादू व शत्रु बाधा निवारण। अनुभवी baglamukhi pandit द्वारा। India & worldwide booking."
      path="/lal-mirch-havan"
      keywords="lal mirch havan, lal mirch havan benefits, tantra nivaran havan, nazar dosh nivaran havan, baglamukhi havan, kala jadu nivaran, baglamukhi pandit"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
          Lal Mirch Havan — लाल मिर्च हवन सेवा
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-6">
          <strong style={{ color: '#FFD700' }}>Lal Mirch Havan</strong> माँ बगलामुखी की उग्र तांत्रिक
          साधना का अंग है, जो विशेष रूप से <em>tantra nivaran</em>, काला जादू निवारण, शत्रु बाधा एवं
          <em> nazar dosh</em> समाप्त करने हेतु किया जाता है। यह अत्यंत शीघ्र फलदायी हवन माना जाता है
          और गंभीर तांत्रिक प्रभावों के निवारण में सबसे प्रभावी है।{" "}
          <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>अभी online booking करें</Link>।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Lal Mirch Havan क्या है? — What is Lal Mirch Havan
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          इस विशेष हवन में लाल मिर्च, पीली सरसों, गुग्गुल, लोबान एवं तांत्रिक सामग्री से माँ बगलामुखी
          के बीज मंत्र की आहुतियाँ दी जाती हैं। लाल मिर्च की उष्ण (fiery) ऊर्जा साधक के चारों ओर एक
          शक्तिशाली सुरक्षा-कवच बनाती है। यह ऊर्जा तांत्रिक प्रभावों, काला जादू, टोना-टोटका एवं
          नकारात्मक शक्तियों को जला कर नष्ट करती है। शास्त्रों में इसे "उग्र शत्रु-नाशक" साधना कहा
          गया है — जहाँ सामान्य हवन से परिणाम न आएँ, वहाँ Lal Mirch Havan विशेष प्रभावी होता है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          कब करवाएँ Lal Mirch Havan — When to Perform
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "बार-बार बीमारी, अकारण भय, बुरे सपने या अनिद्रा",
            "घर में अशांति, झगड़े, धन-हानि — बिना किसी स्पष्ट कारण के",
            "किसी ने काला जादू, टोना-टोटका या तांत्रिक क्रिया की हो",
            "Court case में शत्रु पक्ष भारी पड़ रहा हो",
            "Business में nazar dosh — अचानक ग्राहक घट रहे हों या हानि हो रही हो",
            "बच्चों पर ऊपरी हवा का प्रभाव — डर, बीमारी, अजीब व्यवहार",
            "पारिवारिक सम्बन्धों में अकारण तनाव एवं कलह",
            "ग्रह दोष — विशेषकर राहु-केतु या शनि का प्रभाव",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Lal Mirch Havan Benefits — लाभ
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "Tantra nivaran — सभी प्रकार की तांत्रिक बाधाओं, काला जादू एवं टोने का निर्मूलन",
            "Nazar dosh nivaran — बच्चों, व्यापार एवं परिवार पर लगी बुरी नज़र का तत्काल निवारण",
            "शत्रुओं के षड्यंत्रों का नाश — गुप्त एवं प्रत्यक्ष शत्रुओं से सुरक्षा",
            "घर एवं business में सकारात्मक ऊर्जा — वास्तु दोष का भी निवारण",
            "मानसिक शांति, आत्मविश्वास एवं निर्भयता की प्राप्ति",
            "ग्रह दोष शांति — राहु, केतु, शनि के बाधक प्रभाव का शमन",
            "स्वास्थ्य सुधार — अकारण बीमारियों एवं शारीरिक कष्टों का निवारण",
            "सम्पूर्ण परिवार की spiritual protection",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          हवन की विधि — Process of Lal Mirch Havan
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          संकल्प, गणपति पूजन, कलश स्थापन, माँ बगलामुखी यंत्र पूजन, बीज मंत्र जाप — इसके पश्चात
          लाल मिर्च सहित विशेष तांत्रिक सामग्री (पीली सरसों, गुग्गुल, लोबान, कपूर) से दशांश हवन
          किया जाता है। पूर्णाहुति एवं ब्राह्मण भोज के साथ अनुष्ठान सम्पन्न होता है। सम्पूर्ण
          विधि का video/photo proof साधक को भेजा जाता है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Why Choose Our Service — Best Pandit for Lal Mirch Havan
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          हम <strong>नलखेड़ा (Nalkheda, Agar Malwa, Madhya Pradesh)</strong> के सिद्ध बगलामुखी मंदिर
          के अनुभवी पंडितों द्वारा हवन सम्पन्न कराते हैं। 15+ वर्षों के अनुभव, पूर्ण शास्त्रोक्त
          विधि, पारदर्शी pricing और India + worldwide booking — सब एक ही स्थान पर। 247+ संतुष्ट
          साधकों ने 4.9/5 की rating दी है।
        </p>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4" style={{ color: '#FFD700' }}>
          Lal Mirch Havan FAQ
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { q: "Lal Mirch Havan और सामान्य Baglamukhi Havan में क्या अंतर है?", a: "Lal Mirch Havan विशेष रूप से तांत्रिक बाधा, काला जादू एवं नज़र दोष के निवारण हेतु किया जाता है। इसमें लाल मिर्च की उष्ण ऊर्जा का प्रयोग होता है जो नकारात्मक शक्तियों को जलाकर नष्ट करती है। सामान्य हवन शत्रु-स्तंभन एवं सुरक्षा के लिए है।" },
            { q: "Lal Mirch Havan कितने समय में फल देता है?", a: "यह उग्र साधना है — अधिकांश साधकों को 7-21 दिनों में प्रभाव दिखने लगता है। गंभीर मामलों में पुनः हवन या अनुष्ठान की आवश्यकता हो सकती है।" },
            { q: "क्या Lal Mirch Havan online करवा सकते हैं?", a: "हाँ, online booking उपलब्ध है। हवन नलखेड़ा मंदिर में होता है, आपको live video, photo proof एवं सिद्ध प्रसाद/यंत्र भेजा जाता है।" },
          ].map((f) => (
            <div key={f.q} className="rounded-lg p-5" style={{ background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>{f.q}</h3>
              <p className="text-white/85 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <SeoCta headline="Book Lal Mirch Havan Now" />

        <p className="text-white/70 text-sm mt-6">
          अधिक पढ़ें: <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link> •{" "}
          <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Anushthan</Link> •{" "}
          <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>सभी हवन सेवाएं</Link> •{" "}
          <Link to="/blog/lal-mirch-havan-importance" className="underline" style={{ color: '#FFD700' }}>Blog: Lal Mirch Havan</Link>
        </p>
        <p className="text-white/50 text-xs mt-4">
          सेवा क्षेत्र: Nalkheda, Agar Malwa, Madhya Pradesh — Delhi, Mumbai, Bangalore, Pune, Jaipur, Bhopal, Indore, USA, UK, Canada, Dubai, Singapore एवं विश्वभर।
        </p>
      </article>
    </main>
  </>
);

export default LalMirchHavanPage;
