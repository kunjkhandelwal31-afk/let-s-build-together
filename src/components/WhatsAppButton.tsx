import { Phone, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col items-center gap-3">
      <a
        href={PHONE_TEL_HREF}
        onClick={() => trackEvent("call_click", { source: "floating_button", location: "whatsapp_button_group" })}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        aria-label={`पंडित जी को कॉल करें ${PHONE_NUMBER_DISPLAY}`}
        style={{ background: '#FFD700', color: '#1a1a1a' }}
      >
        <Phone className="h-7 w-7" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all overflow-hidden"
        aria-label="WhatsApp पर संपर्क करें"
      >
        <WhatsAppIcon className="h-14 w-14" />
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-white"
        aria-label="Instagram पर फॉलो करें"
        style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
      >
        <Instagram className="h-7 w-7" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
