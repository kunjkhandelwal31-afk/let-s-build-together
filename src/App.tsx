import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import StickyTopBar from "@/components/StickyTopBar";
import ScrollToTop from "@/components/ScrollToTop";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import HavanTypes from "./pages/HavanTypes";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LiveDarshanPage from "./pages/LiveDarshanPage";
import HavanDetailPage from "./pages/HavanDetailPage";
import AnushthanPage from "./pages/AnushthanPage";
import AnushthanDetailPage from "./pages/AnushthanDetailPage";
import BaglamukhiHavanPage from "./pages/BaglamukhiHavanPage";
import LalMirchHavanPage from "./pages/LalMirchHavanPage";
import BaglamukhiAnushthanPage from "./pages/BaglamukhiAnushthanPage";
import HavanBookingPage from "./pages/HavanBookingPage";
import CourtCaseHavanPage from "./pages/CourtCaseHavanPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminAuthProvider>
          <ScrollToTop />
          <AnalyticsTracker />
          <StickyTopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/havan" element={<HavanTypes />} />
            <Route path="/havan-types" element={<HavanTypes />} />
            <Route path="/live-darshan" element={<LiveDarshanPage />} />
            <Route path="/havan/:id" element={<HavanDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/anushthan" element={<AnushthanPage />} />
            <Route path="/anushthan/:id" element={<AnushthanDetailPage />} />
            {/* SEO landing pages */}
            <Route path="/baglamukhi-havan" element={<BaglamukhiHavanPage />} />
            <Route path="/lal-mirch-havan" element={<LalMirchHavanPage />} />
            <Route path="/baglamukhi-anushthan" element={<BaglamukhiAnushthanPage />} />
            <Route path="/havan-booking" element={<HavanBookingPage />} />
            <Route path="/court-case-havan" element={<CourtCaseHavanPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Admin (hidden) */}
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <BottomNav />
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
