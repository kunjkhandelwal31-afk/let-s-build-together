import { Home, Flame, BookOpen, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PHONE_TEL_HREF } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { id: "home", label: "होम", icon: Home, action: "scroll", target: "hero-section" },
  { id: "hawan", label: "हवन", icon: Flame, action: "scroll", target: "hawan-section" },
  { id: "anushthan", label: "अनुष्ठान", icon: BookOpen, action: "scroll", target: "anushthan-section" },
  { id: "call", label: "कॉल करें", icon: Phone, action: "call", target: PHONE_TEL_HREF },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item: typeof navItems[0]) => {
    if (item.action === "call") {
      trackEvent("call_click", { source: "bottom_nav" });
      window.location.href = item.target;
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.target);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      if (item.target === "hero-section") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(item.target);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[70] border-t border-yellow-900/30"
         style={{ background: '#8B0000' }}>
      <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all hover:bg-white/10 active:scale-95 min-w-[60px]"
          >
            <item.icon className="h-5 w-5" style={{ color: '#FFD700' }} />
            <span className="text-[10px] font-semibold" style={{ color: '#FFD700' }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
