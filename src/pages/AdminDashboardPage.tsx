import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import {
  LogOut,
  Users,
  Eye,
  MousePointerClick,
  Phone,
  MessageCircle,
  Instagram,
  Calendar,
  Smartphone,
  Monitor,
  Tablet,
  Loader2,
  CheckCircle2,
  XCircle,
  Globe,
  Search,
  Download,
  TrendingUp,
  Sparkles,
  Bell,
  Clock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface PageView {
  id: string;
  path: string;
  page_title: string | null;
  device_type: string | null;
  referrer: string | null;
  session_id: string | null;
  user_agent: string | null;
  language: string | null;
  timezone: string | null;
  browser: string | null;
  os: string | null;
  screen_resolution: string | null;
  network_type: string | null;
  is_returning: boolean | null;
  country: string | null;
  city: string | null;
  region: string | null;
  created_at: string;
}
interface Interaction {
  id: string;
  event_type: string;
  source: string | null;
  page_path: string | null;
  device_type: string | null;
  country: string | null;
  city: string | null;
  metadata: any;
  session_id: string | null;
  created_at: string;
}
interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  havan_type: string | null;
  preferred_date: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  accent = "text-primary",
  hint,
}: {
  icon: any;
  label: string;
  value: string | number;
  accent?: string;
  hint?: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
      <Icon className={`h-4 w-4 ${accent}`} />
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    {hint && <div className="text-[11px] text-muted-foreground mt-1">{hint}</div>}
  </div>
);

const isUnknownVal = (v: any) => {
  if (v === null || v === undefined) return true;
  const s = String(v).trim();
  return s === "" || /^unknown$/i.test(s);
};
const normCountry = (v: string | null | undefined) => (isUnknownVal(v) ? "India" : (v as string));
const normRegion = (country: string, v: string | null | undefined) =>
  isUnknownVal(v) ? (country === "India" ? "Madhya Pradesh" : "") : (v as string);
const normCity = (country: string, v: string | null | undefined) =>
  isUnknownVal(v) ? (country === "India" ? "Bhopal" : "") : (v as string);

const STRIP_QUERY_KEYS = /^(force[A-Za-z]*|utm_[a-z_]+|gclid|fbclid|mc_[a-z_]+|ref|source)$/i;
const cleanPath = (path: string): string => {
  if (!path) return path;
  const [base, query] = path.split("?");
  if (!query) return base;
  const params = new URLSearchParams(query);
  const keep: string[] = [];
  params.forEach((val, key) => {
    if (!STRIP_QUERY_KEYS.test(key)) keep.push(`${key}=${val}`);
  });
  return keep.length ? `${base}?${keep.join("&")}` : base;
};

const matchPageGroup = (path: string): string => {
  const p = cleanPath(path);
  if (p === "/") return "Homepage";
  if (p.startsWith("/havan-booking") || p.startsWith("/booking")) return "Booking";
  if (p.startsWith("/havan")) return "Havan";
  if (p.startsWith("/anushthan")) return "Anushthan";
  if (p.startsWith("/blog")) return "Blog";
  if (p.startsWith("/contact")) return "Contact";
  if (p.startsWith("/about")) return "About";
  if (p.startsWith("/shop")) return "Shop";
  if (p.startsWith("/admin")) return "Admin";
  return "Other";
};

const classifyReferrer = (ref: string | null): string => {
  if (!ref) return "Direct";
  try {
    const h = new URL(ref).hostname.replace(/^www\./, "").toLowerCase();
    if (h.includes("google")) return "Google";
    if (h.includes("bing") || h.includes("duckduckgo") || h.includes("yahoo")) return "Search";
    if (h.includes("instagram")) return "Instagram";
    if (h.includes("facebook") || h.includes("fb.com")) return "Facebook";
    if (h.includes("whatsapp") || h.includes("wa.me")) return "WhatsApp";
    if (h.includes("youtube")) return "YouTube";
    if (h.includes("t.co") || h.includes("twitter") || h.includes("x.com")) return "Twitter/X";
    return h;
  } catch {
    return "Direct";
  }
};

const csvEscape = (v: any) => {
  const s = v == null ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const downloadCSV = (filename: string, rows: Record<string, any>[]) => {
  if (rows.length === 0) {
    toast({ title: "Nothing to export" });
    return;
  }
  const headers = Object.keys(rows[0]);
  const body = rows.map((r) => headers.map((h) => csvEscape(r[h])).join(",")).join("\n");
  const blob = new Blob([headers.join(",") + "\n" + body], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const PIE_COLORS = ["hsl(var(--primary))", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#a855f7", "#ec4899"];

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, signOut } = useAdminAuth();
  const [loading, setLoading] = useState(true);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [events, setEvents] = useState<Interaction[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Filters
  const [dateRange, setDateRange] = useState<"24h" | "7d" | "30d" | "all">("7d");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [pageFilter, setPageFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  // Notifications
  const [notifications, setNotifications] = useState<{ id: string; text: string; time: string }[]>([]);
  const pushNotice = (text: string) =>
    setNotifications((prev) => [{ id: crypto.randomUUID(), text, time: new Date().toLocaleTimeString() }, ...prev].slice(0, 12));

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin-login", { replace: true });
    }
  }, [authLoading, user, isAdmin, navigate]);

  useEffect(() => {
    document.title = "Admin Analytics";
    let m = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!m) {
      m = document.createElement("meta");
      m.name = "robots";
      document.head.appendChild(m);
    }
    const prev = m.content;
    m.content = "noindex, nofollow";
    return () => { if (m) m.content = prev || "index, follow"; };
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    const [pv, ev, bk] = await Promise.all([
      supabase.from("page_views").select("*").order("created_at", { ascending: false }).limit(2000),
      supabase.from("interaction_events").select("*").order("created_at", { ascending: false }).limit(2000),
      supabase.from("bookings").select("*").order("created_at", { ascending: false }).limit(500),
    ]);
    if (pv.data) setPageViews(pv.data as PageView[]);
    if (ev.data) setEvents(ev.data as Interaction[]);
    if (bk.data) setBookings(bk.data as Booking[]);
    setLoading(false);
  };

  useEffect(() => {
    if (!user || !isAdmin) return;
    fetchAll();
    const t = setInterval(fetchAll, 20000);
    const channel = supabase
      .channel("admin-analytics")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "page_views" }, (payload) => {
        const row = payload.new as PageView;
        setPageViews((prev) => [row, ...prev].slice(0, 2000));
        if (row.country) {
          const known = pageViews.some((p) => p.country === row.country);
          if (!known) pushNotice(`New visitor from ${row.country}${row.city ? `, ${row.city}` : ""}`);
        }
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "interaction_events" }, (payload) => {
        const row = payload.new as Interaction;
        setEvents((prev) => {
          const next = [row, ...prev].slice(0, 2000);
          if (row.event_type === "whatsapp_click") {
            const last5min = next.filter((e) => e.event_type === "whatsapp_click" && Date.now() - new Date(e.created_at).getTime() < 5 * 60 * 1000).length;
            if (last5min >= 5) pushNotice(`High WhatsApp activity: ${last5min} clicks in last 5 min`);
          }
          return next;
        });
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "bookings" }, (payload) => {
        pushNotice(`New booking from ${(payload.new as Booking).name}`);
        fetchAll();
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "bookings" }, () => fetchAll())
      .subscribe();

    return () => {
      clearInterval(t);
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAdmin]);

  // Date range filter
  const rangeMs = useMemo(() => {
    if (dateRange === "24h") return 24 * 3600 * 1000;
    if (dateRange === "7d") return 7 * 86400 * 1000;
    if (dateRange === "30d") return 30 * 86400 * 1000;
    return Infinity;
  }, [dateRange]);

  const filteredViews = useMemo(() => {
    const now = Date.now();
    return pageViews.filter((p) => {
      if (now - new Date(p.created_at).getTime() > rangeMs) return false;
      if (countryFilter !== "all" && normCountry(p.country) !== countryFilter) return false;
      if (pageFilter !== "all" && matchPageGroup(p.path) !== pageFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = `${p.path} ${p.country || ""} ${p.city || ""} ${p.browser || ""} ${p.os || ""} ${p.session_id || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [pageViews, rangeMs, countryFilter, pageFilter, search]);

  const filteredEvents = useMemo(() => {
    const now = Date.now();
    return events.filter((e) => now - new Date(e.created_at).getTime() <= rangeMs);
  }, [events, rangeMs]);

  // ---- Stats ----
  const stats = useMemo(() => {
    const sessions = new Set(filteredViews.map((p) => p.session_id).filter(Boolean));
    const returning = new Set(filteredViews.filter((p) => p.is_returning).map((p) => p.session_id));
    const newVisitors = sessions.size - returning.size;

    // sessions duration (gap between first/last view per session)
    const sessionTimes: Record<string, { first: number; last: number; views: number }> = {};
    for (const p of filteredViews) {
      if (!p.session_id) continue;
      const t = new Date(p.created_at).getTime();
      const cur = sessionTimes[p.session_id];
      if (!cur) sessionTimes[p.session_id] = { first: t, last: t, views: 1 };
      else {
        cur.first = Math.min(cur.first, t);
        cur.last = Math.max(cur.last, t);
        cur.views += 1;
      }
    }
    const durations = Object.values(sessionTimes).map((s) => (s.last - s.first) / 1000);
    const avgDuration = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
    const bouncedSessions = Object.values(sessionTimes).filter((s) => s.views <= 1).length;
    const bounceRate = sessions.size ? Math.round((bouncedSessions / sessions.size) * 100) : 0;

    const live = new Set(
      filteredViews.filter((p) => Date.now() - new Date(p.created_at).getTime() < 5 * 60 * 1000).map((p) => p.session_id)
    ).size;

    return {
      views: filteredViews.length,
      visitors: sessions.size,
      newVisitors,
      returning: returning.size,
      avgDuration,
      bounceRate,
      live,
    };
  }, [filteredViews]);

  const eventCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const e of filteredEvents) c[e.event_type] = (c[e.event_type] || 0) + 1;
    return c;
  }, [filteredEvents]);

  const conversionRate = useMemo(() => {
    if (!stats.visitors) return 0;
    const conv = bookings.filter((b) => Date.now() - new Date(b.created_at).getTime() <= rangeMs).length;
    return Math.round((conv / stats.visitors) * 1000) / 10;
  }, [bookings, stats.visitors, rangeMs]);

  // Charts data
  const dailySeries = useMemo(() => {
    const days = dateRange === "24h" ? 1 : dateRange === "7d" ? 7 : dateRange === "30d" ? 30 : 30;
    const now = new Date();
    const buckets: { date: string; views: number; visitors: number; bookings: number }[] = [];
    const sessionsPerDay: Record<string, Set<string>> = {};
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      buckets.push({ date: key.slice(5), views: 0, visitors: 0, bookings: 0 });
      sessionsPerDay[key] = new Set();
    }
    const idx: Record<string, number> = {};
    buckets.forEach((b, i) => (idx[`${now.getFullYear()}-${b.date}`] = i));

    filteredViews.forEach((p) => {
      const key = p.created_at.slice(0, 10);
      const i = buckets.findIndex((b) => `${now.getFullYear()}-${b.date}` === key);
      if (i >= 0) {
        buckets[i].views++;
        if (p.session_id) sessionsPerDay[key]?.add(p.session_id);
      }
    });
    Object.entries(sessionsPerDay).forEach(([key, set]) => {
      const i = buckets.findIndex((b) => `${now.getFullYear()}-${b.date}` === key);
      if (i >= 0) buckets[i].visitors = set.size;
    });
    bookings.forEach((b) => {
      const key = b.created_at.slice(0, 10);
      const i = buckets.findIndex((bk) => `${now.getFullYear()}-${bk.date}` === key);
      if (i >= 0) buckets[i].bookings++;
    });

    return buckets;
  }, [filteredViews, bookings, dateRange]);

  const hourly = useMemo(() => {
    const arr = Array.from({ length: 24 }, (_, h) => ({ hour: `${h}:00`, views: 0 }));
    filteredViews.forEach((p) => {
      const h = new Date(p.created_at).getHours();
      arr[h].views++;
    });
    return arr;
  }, [filteredViews]);

  const peakHour = useMemo(() => {
    const max = hourly.reduce((m, x) => (x.views > m.views ? x : m), hourly[0]);
    return max?.views ? max.hour : "—";
  }, [hourly]);

  const pageBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const key = matchPageGroup(pv.path);
      map[key] = (map[key] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).map(([name, value]) => ({ name, value }));
  }, [filteredViews]);

  const topPaths = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const k = cleanPath(pv.path);
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10);
  }, [filteredViews]);

  const exitPages = useMemo(() => {
    const lastPerSession: Record<string, { path: string; t: number }> = {};
    filteredViews.forEach((p) => {
      if (!p.session_id) return;
      const t = new Date(p.created_at).getTime();
      const cur = lastPerSession[p.session_id];
      if (!cur || t > cur.t) lastPerSession[p.session_id] = { path: cleanPath(p.path), t };
    });
    const map: Record<string, number> = {};
    Object.values(lastPerSession).forEach((l) => (map[l.path] = (map[l.path] || 0) + 1));
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [filteredViews]);

  const deviceBreakdown = useMemo(() => {
    const map: Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    for (const pv of filteredViews) {
      const d = pv.device_type || "desktop";
      map[d] = (map[d] || 0) + 1;
    }
    return map;
  }, [filteredViews]);

  const browserBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const k = pv.browser || "Other";
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({ name, value }));
  }, [filteredViews]);

  const osBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const k = pv.os || "Other";
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [filteredViews]);

  const trafficSources = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const s = classifyReferrer(pv.referrer);
      map[s] = (map[s] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).map(([name, value]) => ({ name, value }));
  }, [filteredViews]);

  const countryBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const k = normCountry(pv.country);
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10);
  }, [filteredViews]);

  const cityBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const country = normCountry(pv.country);
      const city = normCity(country, pv.city);
      if (!city) continue;
      map[city] = (map[city] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [filteredViews]);

  const languageBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const pv of filteredViews) {
      const k = pv.language || "Unknown";
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [filteredViews]);

  const buttonClicks = useMemo(() => {
    const map: Record<string, number> = {};
    for (const e of filteredEvents) {
      if (e.event_type !== "button_click") continue;
      const lbl = (e.metadata?.label || "Unlabeled") as string;
      map[lbl] = (map[lbl] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [filteredEvents]);

  const scrollDepthAvg = useMemo(() => {
    const depths = filteredEvents.filter((e) => e.event_type === "scroll_depth").map((e) => e.metadata?.depth || 0);
    if (!depths.length) return 0;
    return Math.round(depths.reduce((a, b) => a + b, 0) / depths.length);
  }, [filteredEvents]);

  const inquiryByPage = useMemo(() => {
    const map: Record<string, number> = {};
    for (const e of filteredEvents) {
      if (e.event_type !== "whatsapp_click" && e.event_type !== "call_click") continue;
      const k = e.page_path || "?";
      map[k] = (map[k] || 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [filteredEvents]);

  // Bookings
  const bookingStats = useMemo(() => {
    const all = bookings;
    const c: Record<string, number> = { total: all.length, pending: 0, accepted: 0, rejected: 0 };
    const byType: Record<string, number> = {};
    for (const b of all) {
      c[b.status] = (c[b.status] || 0) + 1;
      const k = b.havan_type || "Other";
      byType[k] = (byType[k] || 0) + 1;
    }
    const topType = Object.entries(byType).sort((a, b) => b[1] - a[1])[0];
    return {
      total: c.total,
      pending: c.pending,
      accepted: c.accepted,
      rejected: c.rejected,
      topType: topType ? topType[0] : "—",
    };
  }, [bookings]);

  // Country options
  const countryOptions = useMemo(() => {
    const s = new Set<string>();
    pageViews.forEach((p) => s.add(normCountry(p.country)));
    return Array.from(s).sort();
  }, [pageViews]);

  // AI insights (heuristic)
  const aiInsights = useMemo(() => {
    const insights: string[] = [];
    if (topPaths.length) insights.push(`Best performing page: ${topPaths[0][0]} with ${topPaths[0][1]} views.`);
    if (peakHour !== "—") insights.push(`Peak traffic hour: ${peakHour}. Schedule announcements around this time.`);
    if (stats.bounceRate > 60) insights.push(`Bounce rate is high (${stats.bounceRate}%). Consider stronger above-the-fold CTAs.`);
    if (stats.bounceRate <= 40 && stats.visitors > 0) insights.push(`Healthy engagement: bounce rate only ${stats.bounceRate}%.`);
    if (eventCounts.whatsapp_click && stats.visitors)
      insights.push(`WhatsApp conversion: ${Math.round((eventCounts.whatsapp_click / stats.visitors) * 100)}% of visitors clicked WhatsApp.`);
    if (countryBreakdown.length > 1) insights.push(`Top country: ${countryBreakdown[0][0]}. Consider language localisation if non-English audience grows.`);
    if (deviceBreakdown.mobile > deviceBreakdown.desktop) insights.push(`Audience is mobile-first (${deviceBreakdown.mobile} mobile vs ${deviceBreakdown.desktop} desktop).`);
    if (bookingStats.pending > 0) insights.push(`${bookingStats.pending} booking${bookingStats.pending > 1 ? "s" : ""} awaiting your action.`);
    return insights.slice(0, 6);
  }, [topPaths, peakHour, stats, eventCounts, countryBreakdown, deviceBreakdown, bookingStats]);

  const updateBooking = async (id: string, status: "accepted" | "rejected") => {
    const { error } = await supabase.from("bookings").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Failed", description: error.message, variant: "destructive" });
      return;
    }
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    toast({ title: `Booking ${status}` });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin-login", { replace: true });
  };

  if (authLoading || (loading && pageViews.length === 0)) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-6 px-3 md:px-4 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Admin Analytics</h1>
            <p className="text-sm text-muted-foreground">Real-time visitor intelligence · Lovable Cloud</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadCSV(`page_views_${Date.now()}.csv`, filteredViews as any)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent text-sm"
            >
              <Download className="h-4 w-4" /> Export
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm font-medium"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-3 mb-5 flex flex-wrap gap-2 items-center">
          <div className="inline-flex rounded-lg border border-border overflow-hidden">
            {(["24h", "7d", "30d", "all"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setDateRange(r)}
                className={`px-3 py-1.5 text-xs font-medium ${dateRange === r ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-accent"}`}
              >
                {r === "all" ? "All" : r.toUpperCase()}
              </button>
            ))}
          </div>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-lg border border-border bg-card text-foreground"
          >
            <option value="all">All countries</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={pageFilter}
            onChange={(e) => setPageFilter(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-lg border border-border bg-card text-foreground"
          >
            <option value="all">All pages</option>
            {["Homepage", "Havan", "Anushthan", "Booking", "Blog", "Contact", "About", "Shop", "Other"].map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search visitors, pages, browsers..."
              className="w-full pl-7 pr-3 py-1.5 text-xs rounded-lg border border-border bg-card text-foreground"
            />
          </div>
        </div>

        {/* Top stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          <StatCard icon={Eye} label="Page views" value={stats.views} />
          <StatCard icon={Users} label="Visitors" value={stats.visitors} />
          <StatCard icon={Sparkles} label="New" value={stats.newVisitors} accent="text-emerald-500" />
          <StatCard icon={Users} label="Returning" value={stats.returning} accent="text-amber-500" />
          <StatCard icon={Clock} label="Avg session" value={`${stats.avgDuration}s`} />
          <StatCard icon={TrendingUp} label="Bounce rate" value={`${stats.bounceRate}%`} accent="text-rose-500" />
          <StatCard icon={Eye} label="Live (5m)" value={stats.live} accent="text-green-500" />
        </section>

        {/* Charts row */}
        <section className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4 lg:col-span-2 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3">Traffic over time</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailySeries}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" fontSize={11} />
                  <YAxis fontSize={11} />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="visitors" stroke="#22c55e" strokeWidth={2} />
                  <Line type="monotone" dataKey="bookings" stroke="#f59e0b" strokeWidth={2} />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3">Page distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pageBreakdown} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80}>
                    {pageBreakdown.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Hour heatmap as bars */}
        <section className="bg-card border border-border rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Hourly traffic</h2>
            <span className="text-xs text-muted-foreground">Peak: <span className="text-foreground font-medium">{peakHour}</span></span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourly}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="hour" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Interaction stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          <StatCard icon={MessageCircle} label="WhatsApp" value={eventCounts.whatsapp_click || 0} accent="text-green-500" />
          <StatCard icon={Phone} label="Calls" value={eventCounts.call_click || 0} accent="text-blue-500" />
          <StatCard icon={MousePointerClick} label="Booking views" value={eventCounts.booking_page_view || 0} accent="text-orange-500" />
          <StatCard icon={Instagram} label="Instagram" value={eventCounts.instagram_click || 0} accent="text-pink-500" />
          <StatCard icon={TrendingUp} label="Conversion" value={`${conversionRate}%`} accent="text-emerald-500" />
          <StatCard icon={MousePointerClick} label="Avg scroll" value={`${scrollDepthAvg}%`} />
        </section>

        {/* Geo + Sources + Audience */}
        <section className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" /> Top countries
            </h2>
            <ListBars rows={countryBreakdown} />
            <h3 className="text-sm font-medium text-foreground mt-5 mb-2">Top cities</h3>
            <ul className="space-y-1.5 text-sm">
              {cityBreakdown.length === 0 && <li className="text-muted-foreground text-xs">No data yet.</li>}
              {cityBreakdown.map(([k, v]) => (
                <li key={k} className="flex justify-between"><span className="text-foreground">{k}</span><span className="text-muted-foreground">{v}</span></li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-4">Traffic sources</h2>
            <ListBars rows={trafficSources.map((t) => [t.name, t.value]) as [string, number][]} />
            <h3 className="text-sm font-medium text-foreground mt-5 mb-2">Languages</h3>
            <ul className="space-y-1.5 text-sm">
              {languageBreakdown.map(([k, v]) => (
                <li key={k} className="flex justify-between"><span className="text-foreground">{k}</span><span className="text-muted-foreground">{v}</span></li>
              ))}
              {languageBreakdown.length === 0 && <li className="text-muted-foreground text-xs">No data yet.</li>}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-4">Devices & browsers</h2>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <StatCard icon={Smartphone} label="Mobile" value={deviceBreakdown.mobile || 0} />
              <StatCard icon={Monitor} label="Desktop" value={deviceBreakdown.desktop || 0} />
              <StatCard icon={Tablet} label="Tablet" value={deviceBreakdown.tablet || 0} />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-2">Browsers</h3>
            <ListBars rows={browserBreakdown.map((t) => [t.name, t.value]) as [string, number][]} />
            <h3 className="text-sm font-medium text-foreground mt-4 mb-2">Operating systems</h3>
            <ul className="space-y-1.5 text-sm">
              {osBreakdown.map(([k, v]) => (
                <li key={k} className="flex justify-between"><span className="text-foreground">{k}</span><span className="text-muted-foreground">{v}</span></li>
              ))}
              {osBreakdown.length === 0 && <li className="text-muted-foreground text-xs">No data yet.</li>}
            </ul>
          </div>
        </section>

        {/* Pages + Heatmap + Inquiries */}
        <section className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3">Most visited pages</h2>
            <ListBars rows={topPaths} />
          </div>
          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3">Most clicked buttons / CTAs</h2>
            <ListBars rows={buttonClicks} emptyText="No button clicks tracked yet." />
          </div>
          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3">Top exit pages</h2>
            <ListBars rows={exitPages} />
            <h3 className="text-sm font-medium text-foreground mt-5 mb-2">Inquiries by page</h3>
            <ListBars rows={inquiryByPage} emptyText="No inquiries yet." />
          </div>
        </section>

        {/* AI insights + notifications */}
        <section className="grid lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-card border border-border rounded-xl p-5">
            <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> AI Insights
            </h2>
            <ul className="space-y-2 text-sm">
              {aiInsights.length === 0 && <li className="text-muted-foreground">Not enough data to generate insights yet.</li>}
              {aiInsights.map((t, i) => (
                <li key={i} className="text-foreground flex gap-2"><span className="text-primary">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 min-w-0 overflow-hidden">
            <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" /> Notifications
            </h2>
            <ul className="space-y-2 text-sm max-h-56 overflow-y-auto">
              {notifications.length === 0 && <li className="text-muted-foreground">No new notifications.</li>}
              {notifications.map((n) => (
                <li key={n.id} className="flex justify-between gap-3 border-b border-border/40 pb-1.5">
                  <span className="text-foreground">{n.text}</span>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Live activity */}
        <section className="grid lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5 max-w-full overflow-hidden">
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Recent visitors
            </h2>
            <ul className="space-y-2 text-sm max-h-80 overflow-y-auto">
              {filteredViews.slice(0, 25).map((p) => {
                const country = normCountry(p.country);
                const city = normCity(country, p.city);
                return (
                  <li key={p.id} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 border-b border-border/40 pb-1.5 min-w-0">
                    <span className="text-foreground truncate min-w-0">
                      {cleanPath(p.path)}
                      <span className="text-muted-foreground text-xs"> · {country}{city ? `, ${city}` : ""}</span>
                    </span>
                    <span className="text-muted-foreground sm:whitespace-nowrap text-xs truncate">
                      {p.device_type} · {p.browser || "—"} · {new Date(p.created_at).toLocaleTimeString()}
                    </span>
                  </li>
                );
              })}
              {filteredViews.length === 0 && <li className="text-muted-foreground">No visits in this range.</li>}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 max-w-full overflow-hidden">
            <h2 className="font-semibold text-foreground mb-4">Latest interactions</h2>
            <ul className="space-y-2 text-sm max-h-80 overflow-y-auto">
              {filteredEvents.slice(0, 25).map((e) => (
                <li key={e.id} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3 border-b border-border/40 pb-1.5 min-w-0">
                  <span className="text-foreground truncate min-w-0">
                    <span className="font-medium">{e.event_type}</span>
                    {e.page_path && <span className="text-muted-foreground"> · {cleanPath(e.page_path)}</span>}
                  </span>
                  <span className="text-muted-foreground sm:whitespace-nowrap text-xs truncate">
                    {normCountry(e.country)} · {new Date(e.created_at).toLocaleTimeString()}
                  </span>
                </li>
              ))}
              {filteredEvents.length === 0 && <li className="text-muted-foreground">No interactions yet.</li>}
            </ul>
          </div>
        </section>

        {/* Bookings */}
        <section className="bg-card border border-border rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Bookings ({bookingStats.total})
            </h2>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-600">Pending {bookingStats.pending || 0}</span>
              <span className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-600">Accepted {bookingStats.accepted || 0}</span>
              <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-600">Rejected {bookingStats.rejected || 0}</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary">Top: {bookingStats.topType}</span>
              <button
                onClick={() => downloadCSV(`bookings_${Date.now()}.csv`, bookings as any)}
                className="px-2 py-0.5 rounded-full border border-border hover:bg-accent inline-flex items-center gap-1"
              >
                <Download className="h-3 w-3" /> CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  <th className="py-2 pr-3">Date</th>
                  <th className="py-2 pr-3">Name</th>
                  <th className="py-2 pr-3">Phone</th>
                  <th className="py-2 pr-3">Havan</th>
                  <th className="py-2 pr-3">Preferred</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2 pr-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-border/60">
                    <td className="py-2 pr-3 whitespace-nowrap text-muted-foreground">
                      {new Date(b.created_at).toLocaleString()}
                    </td>
                    <td className="py-2 pr-3 text-foreground font-medium">{b.name}</td>
                    <td className="py-2 pr-3">
                      <a href={`tel:${b.phone}`} className="text-primary hover:underline">{b.phone}</a>
                    </td>
                    <td className="py-2 pr-3 text-foreground">{b.havan_type || "-"}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{b.preferred_date || "-"}</td>
                    <td className="py-2 pr-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          b.status === "accepted"
                            ? "bg-green-500/15 text-green-600"
                            : b.status === "rejected"
                            ? "bg-red-500/15 text-red-600"
                            : "bg-yellow-500/15 text-yellow-600"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-2 pr-3">
                      {b.status === "pending" ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => updateBooking(b.id, "accepted")}
                            className="p-1.5 rounded bg-green-500/15 text-green-600 hover:bg-green-500/25"
                            aria-label="Accept"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => updateBooking(b.id, "rejected")}
                            className="p-1.5 rounded bg-red-500/15 text-red-600 hover:bg-red-500/25"
                            aria-label="Reject"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-6 text-center text-muted-foreground">
                      No bookings yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

const ListBars = ({ rows, emptyText = "No data yet." }: { rows: [string, number][]; emptyText?: string }) => {
  const max = Math.max(1, ...rows.map(([, n]) => n));
  if (rows.length === 0) return <p className="text-sm text-muted-foreground">{emptyText}</p>;
  return (
    <div className="space-y-2 w-full max-w-full overflow-hidden">
      {rows.map(([label, count]) => (
        <div key={label} className="w-full max-w-full min-w-0">
          <div className="flex items-center justify-between gap-2 text-sm mb-1 min-w-0">
            <span className="text-foreground truncate min-w-0 flex-1" title={label}>{label}</span>
            <span className="text-muted-foreground text-xs shrink-0">{count}</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${Math.min(100, (count / max) * 100)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardPage;
