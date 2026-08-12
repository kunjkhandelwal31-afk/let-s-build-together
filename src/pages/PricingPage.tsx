import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ContactStrip from "@/components/ContactStrip";
import Seo from "@/components/Seo";

const packages = [
  {
    name: "बेसिक हवन सेवा",
    tagline: "शांति एवं पारिवारिक सुख के लिए",
    features: ["शांति हवन विधि", "1-2 घंटे की अवधि", "आवश्यक शास्त्रोक्त सामग्री", "अनुभवी पंडित जी", "फ़ोन पर मंत्रणा"],
    popular: false,
  },
  {
    name: "स्टैंडर्ड सेवा",
    tagline: "शत्रु नाश, विजय एवं सर्व कार्य सिद्धि",
    features: ["शत्रु नाश / विजय / सर्व कार्य सिद्धि हवन", "2-3 घंटे की अवधि", "पूर्ण सामग्री सहित", "अनुभवी पंडितों की टोली", "विशेष मंत्र जाप", "Live video / photo proof"],
    popular: true,
  },
  {
    name: "प्रीमियम अनुष्ठान",
    tagline: "काला जादू निवारण / विशेष अनुष्ठान",
    features: ["काला जादू निवारण / महा-अनुष्ठान", "3+ घंटे", "विशिष्ट तांत्रिक सामग्री", "सिद्ध ब्राह्मणों की टोली", "नवग्रह शांति सहित", "Live video / photo proof", "21 दिन अनुवर्ती मार्गदर्शन"],
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <>
      <Seo
        title="हवन सेवा पैकेज | Baglamukhi Havan & Anushthan Packages"
        description="Baglamukhi Havan एवं Anushthan के विभिन्न सेवा पैकेज — शांति, शत्रु नाश, विजय, महा-अनुष्ठान। पूजा शुल्क एवं विवरण हेतु संपर्क करें।"
        path="/pricing"
        keywords="baglamukhi havan, havan booking, anushthan, pandit for havan"
      />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              🕉️ हवन <span className="text-gradient-golden">सेवा पैकेज</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              अपनी आवश्यकता के अनुसार सेवा चुनें। पूजा शुल्क, सामग्री एवं मुहूर्त के विवरण हेतु कृपया संपर्क करें।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border p-8 flex flex-col ${
                  pkg.popular
                    ? "border-accent shadow-golden bg-card relative"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-golden text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    सबसे लोकप्रिय
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
                <div className="text-lg font-bold text-gradient-golden mb-6">
                  संपर्क करें विवरण हेतु
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`text-center py-3 rounded-lg font-bold transition-all ${
                    pkg.popular
                      ? "gradient-golden text-primary-foreground shadow-golden"
                      : "border border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  संपर्क करें
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-8">
            पूजा शुल्क सेवा के प्रकार, अवधि, ब्राह्मणों की संख्या एवं सामग्री पर निर्भर करता है।
            विस्तृत मार्गदर्शन हेतु +91 90094 51897 पर कॉल या WhatsApp करें।
          </p>

          <ContactStrip className="mt-12" />
        </div>
      </main>
    </>
  );
};

export default PricingPage;
