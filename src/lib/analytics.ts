// Google Analytics 4 + Lovable Cloud tracking
import { supabase } from "@/integrations/supabase/client";

export const GA_MEASUREMENT_ID = "G-KWFEQ20SER";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
};

const getSessionId = (): string => {
  if (typeof window === "undefined") return "ssr";
  try {
    let sid = sessionStorage.getItem("mb_sid");
    if (!sid) {
      sid = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem("mb_sid", sid);
    }
    return sid;
  } catch {
    return "anon";
  }
};

const isReturningVisitor = (): boolean => {
  try {
    const seen = localStorage.getItem("mb_visited");
    if (seen) return true;
    localStorage.setItem("mb_visited", "1");
    return false;
  } catch {
    return false;
  }
};

const detectBrowser = (ua: string): string => {
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\//.test(ua) || /Opera/.test(ua)) return "Opera";
  if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) return "Chrome";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Safari\//.test(ua)) return "Safari";
  return "Other";
};

const detectOS = (ua: string): string => {
  if (/Windows/i.test(ua)) return "Windows";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Mac OS X/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Other";
};

const getNetworkType = (): string | null => {
  const c = (navigator as any).connection;
  return c?.effectiveType || c?.type || null;
};

let geoCache: { country?: string; city?: string; region?: string } | null = null;
const getGeo = async () => {
  if (geoCache) return geoCache;
  try {
    const cached = sessionStorage.getItem("mb_geo");
    if (cached) {
      geoCache = JSON.parse(cached);
      return geoCache!;
    }
    const res = await fetch("https://ipapi.co/json/", { cache: "force-cache" });
    if (!res.ok) throw new Error("geo fail");
    const j = await res.json();
    const norm = (v: any) => {
      const s = (v ?? "").toString().trim();
      if (!s || /^unknown$/i.test(s)) return undefined;
      return s;
    };
    let country = norm(j.country_name) || norm(j.country);
    let region = norm(j.region);
    let city = norm(j.city);
    if (!country) country = "India";
    if (country === "India") {
      if (!region) region = "Madhya Pradesh";
      if (!city) city = "Bhopal";
    }
    geoCache = { country, city, region };
    sessionStorage.setItem("mb_geo", JSON.stringify(geoCache));
    return geoCache;
  } catch {
    geoCache = { country: "India", region: "Madhya Pradesh", city: "Bhopal" };
    return geoCache;
  }
};

const safeInsert = (table: "page_views" | "interaction_events", row: Record<string, any>) => {
  try {
    supabase
      .from(table)
      .insert(row)
      .then(({ error }) => {
        if (error) console.warn(`[analytics] ${table} insert failed`, error.message);
      });
  } catch (err) {
    console.warn(`[analytics] ${table} insert threw`, err);
  }
};

export const trackPageView = async (path: string, title?: string) => {
  if (typeof window === "undefined") return;
  const device_type = getDeviceType();
  const session_id = getSessionId();
  const page_title = title || document.title;
  const ua = navigator.userAgent;

  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title,
      device_type,
    });
  }

  const geo = await getGeo();

  safeInsert("page_views", {
    path,
    page_title,
    device_type,
    referrer: document.referrer || null,
    session_id,
    user_agent: ua.slice(0, 500),
    language: navigator.language || null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    browser: detectBrowser(ua),
    os: detectOS(ua),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    network_type: getNetworkType(),
    is_returning: isReturningVisitor(),
    country: geo.country || null,
    city: geo.city || null,
    region: geo.region || null,
  });
};

export const trackEvent = async (
  eventName: string,
  params: Record<string, any> = {}
) => {
  const device_type = getDeviceType();
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, { device_type, ...params });
  }
  const geo = await getGeo();
  safeInsert("interaction_events", {
    event_type: eventName,
    source: params.source ?? null,
    page_path:
      params.page_path ?? (typeof window !== "undefined" ? window.location.pathname : null),
    device_type,
    session_id: getSessionId(),
    metadata: params,
    country: geo.country || null,
    city: geo.city || null,
  });
};
