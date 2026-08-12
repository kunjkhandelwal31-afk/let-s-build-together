import { useEffect } from "react";
import BookingForm from "@/components/BookingForm";
import { useSearchParams } from "react-router-dom";
import ContactStrip from "@/components/ContactStrip";

const BookingPage = () => {
  const [params] = useSearchParams();
  const preselected = params.get("havan") || undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            📅 हवन <span className="text-gradient-golden">बुकिंग</span>
          </h1>
          <p className="text-muted-foreground">
            नीचे फ़ॉर्म भरें, हम 24 घंटे के भीतर आपसे संपर्क करेंगे
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-8 shadow-golden">
          <BookingForm preselectedHavan={preselected} />
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          ⏰ सीमित स्लॉट उपलब्ध • बुकिंग के समय 50% अग्रिम भुगतान
        </div>
        <ContactStrip className="mt-6" />
      </div>
    </main>
  );
};

export default BookingPage;
