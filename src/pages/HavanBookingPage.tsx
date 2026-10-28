import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import BookingForm from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const HavanBookingPage = () => (
  <>
    <Seo
      title="Havan Booking Online | Baglamukhi Havan & Puja Booking — India & Worldwide"
      description="Online Havan Booking — Baglamukhi Havan, Lal Mirch Havan, Anushthan booking with experienced pandits. Transparent pricing. India + worldwide service."
      path="/havan-booking"
      keywords="havan booking, baglamukhi havan booking, baglamukhi puja booking online, online havan booking, book havan online, pandit for havan"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
          Online Havan Booking — ऑनलाइन हवन बुकिंग
        </h1>
        <p className="text-white/85 text-lg leading-relaxed mb-6">
          <strong style={{ color: '#FFD700' }}>Havan booking</strong> अब आसान है — आप भारत या विश्व के
          किसी भी स्थान से <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link>,{" "}
          <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> एवं{" "}
          <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Anushthan</Link> book कर सकते हैं।
          नलखेड़ा (Nalkheda, Agar Malwa, MP) के सिद्ध बगलामुखी मंदिर में अनुभवी <strong>pandit for havan</strong> द्वारा
          पूर्ण विधि-विधान से अनुष्ठान सम्पन्न होता है।
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          हमारी सेवाएं — Available Havan Services
        </h2>
        <ul className="space-y-2 mb-4">
          {[
            "बगलामुखी हवन — शत्रु नाश, vijay prapti, स्तंभन",
            "लाल मिर्च हवन — tantra nivaran, काला जादू निवारण, nazar dosh",
            "Court Case Havan — कानूनी विवादों एवं मुकदमों में विजय",
            "Shatru Nash Havan — गुप्त एवं प्रत्यक्ष शत्रुओं का नाश",
            "बगलामुखी अनुष्ठान — 36,000 / सवा लाख / पंचलक्षी",
            "नवग्रह शांति हवन — ग्रह दोष निवारण",
            "गृह प्रवेश, वास्तु शांति एवं business growth havan",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Booking कैसे करें — Simple Booking Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-white/85 mb-4">
          <li>नीचे form भरें या <strong>+91 70246 09027</strong> पर कॉल/WhatsApp करें</li>
          <li>हमारी टीम 24 घंटे में आपसे संपर्क करेगी</li>
          <li>अनुष्ठान की तिथि, सामग्री एवं विधि finalise करें</li>
          <li>50% advance payment से <strong>booking confirm</strong></li>
          <li>निर्धारित दिन हवन सम्पन्न — live video/photo proof</li>
          <li>सिद्ध प्रसाद एवं अभिमंत्रित यंत्र कूरियर द्वारा</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          पूजा शुल्क — Puja Donation
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          प्रत्येक हवन एवं अनुष्ठान का शुल्क सेवा के प्रकार, अवधि, ब्राह्मणों की संख्या एवं
          सामग्री के अनुसार भिन्न होता है। सटीक विवरण, मुहूर्त एवं मार्गदर्शन हेतु कृपया{" "}
          <a href="tel:+917024609027" className="underline" style={{ color: '#FFD700' }}>+91 70246 09027</a>{" "}
          पर कॉल या WhatsApp करें — हमारी टीम 24 घंटे में आपकी परिस्थिति समझकर उचित सुझाव देगी।
        </p>
        <p className="text-white/70 text-sm mb-6">
          Please contact us on WhatsApp or call for detailed guidance about the puja donation,
          samagri, muhurat and process — no hidden charges, full transparency.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>
          Why Book With Us
        </h2>
        <ul className="space-y-2 mb-6">
          {[
            "नलखेड़ा (Nalkheda, Agar Malwa, MP) के सिद्ध मंदिर — 15+ वर्षों का अनुभव",
            "India + worldwide service — कहीं से भी book करें",
            "पारदर्शी संवाद — कोई छुपा शुल्क नहीं, पूरा विवरण फोन/WhatsApp पर",
            "हवन का live video / photo proof",
            "सिद्ध प्रसाद एवं अभिमंत्रित यंत्र कूरियर द्वारा",
            "247+ संतुष्ट साधक — 4.9/5 rating",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#FFD700' }} /> {b}
            </li>
          ))}
        </ul>

        <div className="bg-card rounded-xl border border-border p-6 my-6">
          <BookingForm />
        </div>

        <SeoCta headline="अभी कॉल करें या WhatsApp पर संपर्क करें" />

        <p className="text-white/70 text-sm mt-6">
          संबंधित: <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>Baglamukhi Havan</Link> •{" "}
          <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>Lal Mirch Havan</Link> •{" "}
          <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>Anushthan</Link> •{" "}
          <Link to="/havan" className="underline" style={{ color: '#FFD700' }}>सभी हवन सेवाएं</Link>
        </p>
      </article>
    </main>
  </>
);

export default HavanBookingPage;
