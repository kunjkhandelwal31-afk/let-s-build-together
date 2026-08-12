import { Link } from "react-router-dom";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>{children}</h2>
);

const HavanRemovesNegativeEnergy = () => (
  <>
    <p>
      हवन हजारों वर्षों से भारतीय संस्कृति का अभिन्न अंग रहा है। यह केवल आध्यात्मिक क्रिया
      नहीं, बल्कि वातावरण-शुद्धि का वैज्ञानिक माध्यम भी है। आइए जानें हवन से नकारात्मक
      ऊर्जा कैसे समाप्त होती है।
    </p>

    <H2>आध्यात्मिक दृष्टिकोण</H2>
    <p>
      वैदिक मंत्रों के उच्चारण से उत्पन्न ध्वनि-तरंगें वातावरण की सूक्ष्म ऊर्जा को शुद्ध
      करती हैं। हवन की अग्नि देव-शक्तियों का माध्यम है — आहुति देव-लोक तक पहुँचती है और
      देवताओं की कृपा साधक एवं उसके स्थान पर बरसती है।
    </p>

    <H2>वैज्ञानिक दृष्टिकोण</H2>
    <p>
      अनेक शोधों में पाया गया है कि हवन के धुएँ में formaldehyde, acetic acid एवं
      propionic aldehyde जैसे तत्व उत्पन्न होते हैं जो हवा में मौजूद bacteria, viruses
      एवं harmful microbes को 94% तक कम कर देते हैं। हवन-कुंड का pyramid-shape एक
      विशेष ऊर्जा-क्षेत्र भी बनाता है।
    </p>

    <H2>बगलामुखी हवन की विशेषता</H2>
    <p>
      <Link to="/baglamukhi-havan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी हवन</Link> में
      उपयोग होने वाली पीली सरसों, हल्दी, गुग्गुल एवं विशेष औषधीय जड़ी-बूटियाँ नकारात्मक
      ऊर्जा को विशेष रूप से तोड़ती हैं। इसलिए यह हवन{" "}
      <Link to="/lal-mirch-havan" className="underline" style={{ color: '#FFD700' }}>tantra nivaran</Link>,
      नज़र दोष एवं ऊपरी हवा के लिए सर्वश्रेष्ठ माना गया है।
    </p>

    <H2>घर में नकारात्मकता के लक्षण</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>परिवार में बिना कारण कलह एवं तनाव</li>
      <li>बार-बार बीमारी, अनिद्रा, बुरे सपने</li>
      <li>धन-हानि, business में रुकावट</li>
      <li>घर में पौधों का बिना कारण सूखना</li>
      <li>अकारण भय, अशांति एवं नकारात्मक विचार</li>
    </ul>

    <H2>समाधान</H2>
    <p>
      ऐसी स्थिति में बगलामुखी हवन या{" "}
      <Link to="/baglamukhi-anushthan" className="underline" style={{ color: '#FFD700' }}>बगलामुखी अनुष्ठान</Link>{" "}
      करवाएँ। नियमित अंतराल पर वास्तु शांति हवन एवं नवग्रह हवन भी लाभकारी हैं।
    </p>

    <H2>निष्कर्ष</H2>
    <p>
      हवन एक complete solution है — आध्यात्मिक भी, वैज्ञानिक भी। आज ही{" "}
      <Link to="/havan-booking" className="underline" style={{ color: '#FFD700' }}>online havan booking</Link>{" "}
      करें और अपने जीवन में सकारात्मक ऊर्जा का प्रवाह आरंभ करें।
    </p>
  </>
);

export default HavanRemovesNegativeEnergy;
