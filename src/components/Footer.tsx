import { Link } from "react-router-dom";
import { Flame, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 pb-24" style={{ background: '#5A0000', color: 'rgba(255,255,255,0.8)' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6" style={{ color: '#FFD700' }} />
              <span className="text-lg font-bold" style={{ color: '#FFD700' }}>माँ बगलामुखी हवन सेवा</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              अनुभवी पंडित जी द्वारा विधिवत माँ बगलामुखी हवन सेवा। शत्रु नाश, विजय प्राप्ति और जीवन में सफलता के लिए संपर्क करें।
            </p>
            <p className="text-xs text-white/50 mt-3">
              ऑनलाइन हवन बुकिंग की सुविधा उपलब्ध • बगलामुखी पूजा सेवा • Baglamukhi pandit near me service available
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#FFD700' }}>त्वरित लिंक</h4>
            <div className="space-y-2 text-sm">
              <Link to="/baglamukhi-havan" className="block hover:text-yellow-400 transition-colors">Baglamukhi Havan</Link>
              <Link to="/lal-mirch-havan" className="block hover:text-yellow-400 transition-colors">Lal Mirch Havan</Link>
              <Link to="/baglamukhi-anushthan" className="block hover:text-yellow-400 transition-colors">Baglamukhi Anushthan</Link>
              <Link to="/court-case-havan" className="block hover:text-yellow-400 transition-colors">Court Case Havan</Link>
              <Link to="/about-us" className="block hover:text-yellow-400 transition-colors">About Us</Link>
              <Link to="/havan-booking" className="block hover:text-yellow-400 transition-colors">Havan Booking</Link>
              <Link to="/havan-types" className="block hover:text-yellow-400 transition-colors">हवन के प्रकार</Link>
              <Link to="/anushthan" className="block hover:text-yellow-400 transition-colors">अनुष्ठान के प्रकार</Link>
              <Link to="/blog" className="block hover:text-yellow-400 transition-colors">ब्लॉग</Link>
              <Link to="/contact" className="block hover:text-yellow-400 transition-colors">संपर्क करें</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#FFD700' }}>संपर्क</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+919009451897" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4" /> +91 90094 51897
              </a>
              <a href="mailto:info@baglamukhihavan.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail className="h-4 w-4" /> info@baglamukhihavan.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>मां बगलामुखी मंदिर, नलखेड़ा<br/>जिला आगर मालवा, मध्यप्रदेश</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 pt-6 text-center text-xs space-y-2">
          <p>© 2026 माँ बगलामुखी हवन सेवा। सर्वाधिकार सुरक्षित। 🙏</p>
          <p className="text-white/50">
            वेबसाइट निर्माता: <span className="text-white/70 font-semibold">Kunj Khandelwal</span> •{" "}
            <a href="tel:+919009451897" className="hover:text-yellow-400 transition-colors">📞 9009451897</a>
            {" "}• वेबसाइट बनवाने के लिए संपर्क करें
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
