import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackEvent } from "@/lib/analytics";

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();
  const enterTime = useRef<number>(Date.now());
  const maxScroll = useRef<number>(0);
  const reportedDepths = useRef<Set<number>>(new Set());

  // Track route changes + scroll depth reset + send time-on-page on unmount
  useEffect(() => {
    const fullPath = pathname + search;
    enterTime.current = Date.now();
    maxScroll.current = 0;
    reportedDepths.current = new Set();
    trackPageView(fullPath);

    if (pathname.includes("booking") || pathname === "/havan-booking") {
      trackEvent("booking_page_view", { page_path: fullPath });
    }

    return () => {
      const seconds = Math.round((Date.now() - enterTime.current) / 1000);
      if (seconds > 1 && seconds < 3600) {
        trackEvent("page_time", {
          page_path: fullPath,
          seconds,
          max_scroll: maxScroll.current,
        });
      }
    };
  }, [pathname, search]);

  // Scroll depth (25, 50, 75, 100)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = Math.min(100, Math.round((h.scrollTop / total) * 100));
      if (pct > maxScroll.current) maxScroll.current = pct;
      [25, 50, 75, 100].forEach((d) => {
        if (pct >= d && !reportedDepths.current.has(d)) {
          reportedDepths.current.add(d);
          trackEvent("scroll_depth", { depth: d, page_path: pathname });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Global click delegation: track call / WhatsApp / Instagram / generic CTA buttons
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const label = (anchor.getAttribute("aria-label") || anchor.innerText || "").trim().slice(0, 80);
        if (href.startsWith("tel:")) {
          trackEvent("call_click", { link_url: href, link_text: label, page_path: pathname });
          return;
        }
        if (href.includes("wa.me") || href.includes("api.whatsapp.com") || href.includes("whatsapp://")) {
          trackEvent("whatsapp_click", { link_url: href, link_text: label, page_path: pathname });
          return;
        }
        if (href.includes("instagram.com")) {
          trackEvent("instagram_click", { link_url: href, link_text: label, page_path: pathname });
          return;
        }
      }

      const button = target.closest("button, [role='button']") as HTMLElement | null;
      if (button) {
        const label = (button.getAttribute("aria-label") || button.innerText || "").trim().slice(0, 80);
        if (label) {
          trackEvent("button_click", { label, page_path: pathname });
        }
      }
    };
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true } as any);
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
