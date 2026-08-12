import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactStrip from "@/components/ContactStrip";

const faqs = [
  { q: "माँ बगलामुखी कौन हैं?", a: "माँ बगलामुखी दस महाविद्याओं में से एक हैं। ये शत्रुओं की वाणी और कार्यों को स्तंभित (रोकने) की शक्ति रखती हैं। पीला रंग इनका प्रिय रंग है।" },
  { q: "हवन कितने समय में प्रभावी होता है?", a: "हवन का प्रभाव व्यक्ति की श्रद्धा और समस्या की गंभीरता पर निर्भर करता है। सामान्यतः 21 से 41 दिनों में प्रभाव दिखने लगता है।" },
  { q: "क्या ऑनलाइन हवन कराया जा सकता है?", a: "हाँ, हम लाइव वीडियो के माध्यम से ऑनलाइन हवन की सुविधा प्रदान करते हैं। आप घर बैठे हवन में भाग ले सकते हैं।" },
  { q: "हवन सामग्री कौन प्रदान करता है?", a: "सभी हवन सामग्री पंडित जी द्वारा उपलब्ध कराई जाती है। आपको अलग से कुछ लाने की आवश्यकता नहीं है।" },
  { q: "क्या हवन में भौतिक उपस्थिति आवश्यक है?", a: "नहीं, यदि आप उपस्थित नहीं हो सकते तो संकल्प लेकर हवन कराया जा सकता है। आपका नाम और गोत्र पर्याप्त है।" },
  { q: "भुगतान कैसे करें?", a: "आप UPI, बैंक ट्रांसफर, या ऑनलाइन पेमेंट गेटवे से भुगतान कर सकते हैं। बुकिंग के समय 50% अग्रिम भुगतान आवश्यक है।" },
];

const AboutPage = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            🙏 माँ बगलामुखी का <span className="text-gradient-golden">महत्व</span>
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">माँ बगलामुखी की शक्ति</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              माँ बगलामुखी दस महाविद्याओं में आठवीं महाविद्या हैं। इन्हें "स्तम्भन देवी" भी कहा जाता है
              क्योंकि ये शत्रुओं की वाणी, बुद्धि और कार्यों को स्तंभित (रोकने) की शक्ति रखती हैं।
              पीला रंग इनका प्रिय रंग है और हल्दी इनकी प्रिय सामग्री है।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              माँ बगलामुखी की उपासना से शत्रुओं का नाश, कोर्ट-कचहरी में विजय, राजनीतिक सफलता,
              और जीवन के हर क्षेत्र में विजय प्राप्त होती है। तंत्र शास्त्र में इनकी साधना को
              सबसे शक्तिशाली माना गया है।
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">कब और क्यों करें हवन?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                जब शत्रु परेशान कर रहे हों या कोर्ट केस चल रहा हो
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                चुनाव या किसी प्रतियोगिता में विजय पाने के लिए
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                काला जादू या टोने-टोटके से पीड़ित होने पर
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                व्यापार में बाधाएं आ रही हों या आर्थिक समस्या हो
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                मानसिक अशांति या पारिवारिक कलह हो
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              अक्सर पूछे जाने वाले <span className="text-gradient-golden">प्रश्न</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <ContactStrip className="mt-10" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
