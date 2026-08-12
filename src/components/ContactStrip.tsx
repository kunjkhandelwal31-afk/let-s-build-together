import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

interface ContactStripProps {
  className?: string;
  compact?: boolean;
}

const ContactStrip = ({ className = "", compact = false }: ContactStripProps) => {
  if (compact) {
    return (
      <div className={`flex items-center justify-center gap-4 flex-wrap ${className}`}>
        <a
          href={PHONE_TEL_HREF}
          className="inline-flex items-center gap-1.5 font-semibold hover:underline text-sm"
          style={{ color: '#FFD700' }}
        >
          <Phone className="h-4 w-4" />
          {PHONE_NUMBER_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold hover:underline text-sm"
          style={{ color: '#FFD700' }}
        >
          <WhatsAppIcon className="h-6 w-6" />
          WhatsApp करें
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
      <a
        href={PHONE_TEL_HREF}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-80 transition-colors"
        style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)', color: '#FFD700' }}
      >
        <Phone className="h-4 w-4" />
        📞 {PHONE_NUMBER_DISPLAY}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-80 transition-colors"
        style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.3)', color: '#FFD700' }}
      >
        <WhatsAppIcon className="h-6 w-6" />
        WhatsApp करें
      </a>
    </div>
  );
};

export default ContactStrip;
