import { useState } from "react";
import { havans } from "@/data/havans";
import { anushthans } from "@/data/anushthans";
import { toast } from "@/hooks/use-toast";
import { Shield, Star, Users } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_MESSAGE } from "@/lib/contact";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

const BookingForm = ({ preselectedHavan }: { preselectedHavan?: string }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    havanType: preselectedHavan || "",
    date: "",
    gotra: "",
    nakshatra: "",
  });
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.havanType || !form.date) {
      toast({ title: "कृपया सभी आवश्यक फ़ील्ड भरें", variant: "destructive" });
      return;
    }

    const selectedHavan = havans.find((h) => h.id === form.havanType);
    const selectedAnushthan = anushthans.find((a) => `anushthan-${a.id}` === form.havanType);
    const havanName = selectedHavan?.name || selectedAnushthan?.shortTitle || form.havanType;

    // Save to backend
    await supabase.from("bookings").insert({
      name: form.name,
      phone: form.phone,
      havan_type: havanName,
      preferred_date: form.date,
      message: `स्थान: ${form.location || "N/A"} | गोत्र: ${form.gotra || "N/A"} | नक्षत्र: ${form.nakshatra || "N/A"}`,
      status: "pending",
    });
    trackEvent("booking_submitted", { havan: havanName, source: "booking_form" });

    const message = `${WHATSAPP_MESSAGE}\n\n🙏 *नई हवन बुकिंग*\n\n👤 नाम: ${form.name}\n📞 मोबाइल: ${form.phone}\n📍 स्थान: ${form.location || "N/A"}\n🔥 हवन: ${havanName}\n📅 तिथि: ${form.date}\n🪷 गोत्र: ${form.gotra || "N/A"}\n⭐ नक्षत्र: ${form.nakshatra || "N/A"}\n\nपूजा शुल्क एवं विवरण हेतु कृपया संपर्क करें।`;

    const waURL = `https://wa.me/919009451897?text=${encodeURIComponent(message)}`;
    window.open(waURL, "_blank");

    toast({
      title: "बुकिंग दर्ज हो गई! 🙏",
      description: "हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setForm({ name: "", phone: "", location: "", havanType: "", date: "", gotra: "", nakshatra: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base font-medium"; 

  const selectClass =
    "w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base font-medium appearance-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-white shadow-lg border-2 border-yellow-500">
      <input
        type="text"
        placeholder="आपका नाम *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
        maxLength={100}
      />
      <input
        type="tel"
        placeholder="मोबाइल नंबर *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClass}
        maxLength={15}
      />
      <input
        type="text"
        placeholder="स्थान / शहर"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className={inputClass}
        maxLength={100}
      />
      <select
        value={form.havanType}
        onChange={(e) => setForm({ ...form, havanType: e.target.value })}
        className={selectClass}
      >
        <option value="">हवन / सेवा का प्रकार चुनें *</option>
        <optgroup label="हवन सेवाएं">
          {havans.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name}
            </option>
          ))}
        </optgroup>
        <optgroup label="अनुष्ठान सेवाएं">
          {anushthans.map((a) => (
            <option key={a.id} value={`anushthan-${a.id}`}>
              {a.shortTitle}
            </option>
          ))}
        </optgroup>
      </select>
      <div>
        <label className="block text-sm font-bold mb-2" style={{ color: '#8B0000' }}>हवन की तिथि *</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        placeholder="गोत्र (वैकल्पिक)"
        value={form.gotra}
        onChange={(e) => setForm({ ...form, gotra: e.target.value })}
        className={inputClass}
        maxLength={50}
      />
      <input
        type="text"
        placeholder="नक्षत्र (वैकल्पिक)"
        value={form.nakshatra}
        onChange={(e) => setForm({ ...form, nakshatra: e.target.value })}
        className={inputClass}
        maxLength={50}
      />
      <button
        type="submit"
        className="btn-shine-visible w-full py-3.5 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
      >
        <WhatsAppIcon className="h-6 w-6" />
        बुकिंग कन्फर्म करें
      </button>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-600 font-medium">
        <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-yellow-600" /> सुरक्षित</span>
        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-600" /> 1000+ हवन</span>
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-yellow-600" /> संतुष्ट ग्राहक</span>
      </div>
    </form>
  );
};

export default BookingForm;
