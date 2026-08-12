import { Phone, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

const CallSection = () => {
  return (
    <section className="py-16" style={{ background: '#8B0000' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFD700' }}>
          पंडित जी से सीधे बात करें
        </h2>
        <p className="mb-2 max-w-xl mx-auto text-white/80">
          हवन बुकिंग, पूजा विधि या किसी भी प्रश्न के लिए अभी कॉल करें
        </p>
        <p className="mb-8 max-w-xl mx-auto text-white/60 text-sm">
          यहाँ आप हवन पंडित का नंबर प्राप्त कर सकते हैं • baglamukhi pandit near me
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            style={{ background: '#FF8C00', color: '#FFD700', textShadow: '1px 1px 3px rgba(0,0,0,0.85), 0 0 6px rgba(0,0,0,0.5)' }}
          >
            <Phone className="h-6 w-6" />
            {PHONE_NUMBER_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform text-white"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <Instagram className="h-6 w-6" />
            Instagram
          </a>
        </div>

        <p className="text-white/60 text-sm">
          ⏰ सुबह 7:00 बजे से रात 9:00 बजे तक उपलब्ध
        </p>
        <p className="text-white/50 text-xs mt-2">
          मध्य प्रदेश में हवन पंडित सेवा • near me hawan booking available
        </p>
      </div>
    </section>
  );
};

export default CallSection;
