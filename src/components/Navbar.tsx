import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import AudioToggle from "./AudioToggle";
import logo from "@/assets/logo-baglamukhi.webp";
import { PHONE_TEL_HREF, PHONE_NUMBER_DISPLAY } from "@/lib/contact";

const navItems = [
  { path: "/", label: "होम" },
  { path: "/havan", label: "हवन के प्रकार" },
  { path: "/anushthan", label: "📿 अनुष्ठान के प्रकार" },
  { path: "/live-darshan", label: "🔴 लाइव दर्शन" },
  { path: "/blog", label: "📝 ब्लॉग" },
  { path: "/contact", label: "संपर्क" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b"
         style={{ background: 'rgba(90,0,0,0.95)', borderColor: 'rgba(255,215,0,0.15)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="माँ बगलामुखी" className="h-9 w-9 rounded-full object-contain" />
            <span className="text-lg font-bold" style={{ color: '#FFD700' }}>
              माँ बगलामुखी हवन सेवा
            </span>
          </Link>

          {/* Header phone number - always visible */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <AudioToggle />
            <LanguageToggle />
            <a
              href="tel:+919009451897"
              className="flex items-center gap-1.5 font-semibold text-sm"
              style={{ color: '#FFD700' }}
            >
              <Phone className="h-4 w-4" />
              +91 90094 51897
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? ""
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                style={location.pathname === item.path ? { background: '#FF8C00', color: '#FFD700' } : {}}
              >
                {item.label}
              </Link>
            ))}
            <AudioToggle />
            <LanguageToggle />
            <a
              href="tel:+919009451897"
              className="ml-3 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: '#FF8C00', color: '#FFD700' }}
            >
              <Phone className="h-4 w-4" />
              +91 90094 51897
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <AudioToggle />
            <div className="md:hidden">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-3 space-y-1" style={{ borderTop: '1px solid rgba(255,215,0,0.15)' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? ""
                    : "text-white/80 hover:bg-white/10"
                }`}
                style={location.pathname === item.path ? { background: '#FF8C00', color: '#FFD700' } : {}}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919009451897"
              className="flex items-center gap-2 mx-4 mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold justify-center"
              style={{ background: '#FF8C00', color: '#FFD700' }}
            >
              <Phone className="h-4 w-4" />
              +91 90094 51897
            </a>
            <Link
              to="/admin-login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 mt-2 text-xs text-white/40 hover:text-white/70"
              rel="nofollow"
            >
              🔒 Admin Panel
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
