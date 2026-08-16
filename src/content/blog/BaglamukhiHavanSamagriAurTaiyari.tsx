import { Link } from "react-router-dom";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3" style={{ color: '#FFD700' }}>{children}</h2>
);

const BaglamukhiHavanSamagriAurTaiyari = () => (
  <>
    <p>
      हवन का फल विधि एवं सामग्री की शुद्धता पर निर्भर माना जाता है। यहाँ{" "}
      <strong style={{ color: '#FFD700' }}>बगलामुखी हवन सामग्री</strong> एवं यजमान की तैयारी की
      पूरी सूची दी गई है, ताकि अनुष्ठान के दिन कोई कमी न रहे।
    </p>

    <H2>मुख्य सामग्री</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>पीत वस्त्र, पीत पुष्प एवं हल्दी की माला</li>
      <li>शुद्ध गाय का घी, आम की समिधा एवं हवन कुंड</li>
      <li>हवन सामग्री (जौ, तिल, गुग्गुल, चंदन चूरा आदि)</li>
      <li>कलश, नारियल, आम पल्लव, अक्षत, रोली एवं कुशा</li>
      <li>माँ बगलामुखी यंत्र एवं पीत आसन</li>
      <li>विशेष अनुष्ठान हेतु औषधीय सामग्री (21 या 36 प्रकार)</li>
    </ul>

    <H2>यजमान की तैयारी</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>अनुष्ठान से पूर्व स्नान एवं स्वच्छ वस्त्र (संभव हो तो पीले)</li>
      <li>सात्विक आहार एवं संयम</li>
      <li>नाम, गोत्र एवं संकल्प का विवरण पहले से तैयार रखें</li>
      <li>मन में स्पष्ट, धर्मसम्मत कामना रखें</li>
    </ul>

    <H2>यदि आप उपस्थित न हो सकें</H2>
    <p>
      दूरस्थ यजमानों हेतु नाम-गोत्र के आधार पर संकल्प लेकर हवन सम्पन्न किया जाता है और
      फोटो/वीडियो सहित प्रसाद भेजा जाता है। इस व्यवस्था में भी विधि में कोई कटौती नहीं होती।
    </p>

    <H2>बुकिंग</H2>
    <p>
      सामग्री सहित पूर्ण व्यवस्था हेतु देखें{" "}
      <Link to="/havan-types" className="underline" style={{ color: '#FFD700' }}>हवन के प्रकार</Link> अथवा सीधे{" "}
      <Link to="/booking" className="underline font-semibold" style={{ color: '#FFD700' }}>बुकिंग करें</Link>।
    </p>
  </>
);

export default BaglamukhiHavanSamagriAurTaiyari;
