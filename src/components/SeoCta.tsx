import { Link } from "react-router-dom";
import { Phone, BookOpen, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const SeoCta = ({ headline = "अभी हवन बुक करें — Book Havan Now" }: { headline?: string }) => (
  <div
    className="rounded-xl p-6 md:p-8 my-8"
    style={{ background: 'rgba(255,140,0,0.18)', border: '1px solid rgba(255,215,0,0.4)' }}
  >
    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#FFD700' }}>
      {headline}
    </h3>
    <p className="text-white/85 mb-5 text-sm md:text-base">
      अनुभवी पंडित जी द्वारा विधिवत हवन एवं अनुष्ठान। 24 घंटे में संपर्क की गारंटी।
      Worldwide service available — call, WhatsApp या online form से बुकिंग करें।
    </p>
    <div className="flex flex-wrap gap-3">
      <Link
        to="/booking"
        className="btn-shimmer inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold"
      >
        <BookOpen className="h-5 w-5" /> Book Havan Now
      </Link>
      <a
        href={PHONE_TEL_HREF}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold"
        style={{ background: '#FFD700', color: '#5A0000' }}
      >
        <Phone className="h-5 w-5" /> Call {PHONE_NUMBER_DISPLAY}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white"
        style={{ background: '#25D366' }}
      >
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
    </div>
    <div className="mt-5 flex flex-wrap gap-3 text-sm">
      <Link to="/baglamukhi-havan" className="hover:underline" style={{ color: '#FFD700' }}>
        बगलामुखी हवन <ArrowRight className="h-3 w-3 inline" />
      </Link>
      <Link to="/lal-mirch-havan" className="hover:underline" style={{ color: '#FFD700' }}>
        लाल मिर्च हवन <ArrowRight className="h-3 w-3 inline" />
      </Link>
      <Link to="/baglamukhi-anushthan" className="hover:underline" style={{ color: '#FFD700' }}>
        बगलामुखी अनुष्ठान <ArrowRight className="h-3 w-3 inline" />
      </Link>
      <Link to="/havan-booking" className="hover:underline" style={{ color: '#FFD700' }}>
        Havan Booking <ArrowRight className="h-3 w-3 inline" />
      </Link>
    </div>
  </div>
);

export default SeoCta;
