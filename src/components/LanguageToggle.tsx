import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Add Google Translate script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "hi",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const triggerTranslation = (lang: string) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  const handleToggle = () => {
    if (isEnglish) {
      triggerTranslation("hi");
      setIsEnglish(false);
    } else {
      triggerTranslation("en");
      setIsEnglish(true);
    }
  };

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" className="hidden" />
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-muted transition-colors"
        title={isEnglish ? "हिंदी में देखें" : "Translate to English"}
      >
        <Languages className="h-4 w-4" />
        {isEnglish ? "हिंदी" : "EN"}
      </button>
    </>
  );
};

export default LanguageToggle;
