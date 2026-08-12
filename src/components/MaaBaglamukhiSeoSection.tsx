import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface SeoBlock {
  hindiHeading: string;
  hindiContent: string;
  englishHeading: string;
  englishContent: string;
}

const blocks: SeoBlock[] = [
  {
    hindiHeading: "माँ बगलामुखी महत्व — धार्मिक एवं आध्यात्मिक",
    hindiContent:
      "माँ बगलामुखी को दस महाविद्याओं में अत्यंत शक्तिशाली देवी माना जाता है। माँ पीतांबरा के रूप में पूजी जाने वाली माँ बगलामुखी अपने भक्तों को शत्रुओं, नकारात्मक शक्तियों, भय, मानसिक तनाव और जीवन की बाधाओं से रक्षा प्रदान करती हैं। माँ बगलामुखी पूजा, माँ बगलामुखी हवन एवं माँ बगलामुखी अनुष्ठान न्यायालय संबंधी समस्याएं, शत्रु बाधा, व्यापार में रुकावट, वैवाहिक जीवन की कठिनाइयों तथा मानसिक अशांति दूर करने हेतु अत्यंत प्रभावी माने जाते हैं। नलखेड़ा स्थित माँ बगलामुखी धाम भारत के प्रमुख शक्ति पीठों में से एक है जहाँ देश-विदेश से श्रद्धालु माँ बगलामुखी मंदिर के दर्शन एवं हवन कराने आते हैं।",
    englishHeading: "Maa Baglamukhi Mahatva — Religious and Spiritual Importance",
    englishContent:
      "Maa Baglamukhi, also worshipped as Maa Pitambara, is one of the most powerful goddesses among the ten Mahavidyas in Sanatan Dharma. Devotees believe Maa Baglamukhi protects her followers from enemies, negative energies, fear, mental stress, and life obstacles. Maa Baglamukhi Puja, Maa Baglamukhi Havan, and Maa Baglamukhi Anushthan are considered highly effective for court-related matters, enemy protection, business obstacles, marriage problems, and spiritual stability. The famous Maa Baglamukhi Mandir Nalkheda is regarded as one of India's most sacred Baglamukhi temples where devotees from around the world visit for havan, puja, and anushthan.",
  },
  {
    hindiHeading: "माँ बगलामुखी इतिहास",
    hindiContent:
      "माँ बगलामुखी का इतिहास प्राचीन हिंदू धर्म एवं तांत्रिक परंपराओं से जुड़ा है। उन्हें दस महाविद्याओं में आठवीं महाविद्या माना जाता है। पौराणिक कथाओं के अनुसार जब सम्पूर्ण ब्रह्मांड में विनाशकारी तूफान और नकारात्मक शक्तियों का प्रभाव बढ़ गया, तब भगवान विष्णु ने हरिद्रा सरोवर के समीप कठोर तपस्या की। उनकी तपस्या से प्रसन्न होकर माँ बगलामुखी प्रकट हुईं और समस्त नकारात्मक शक्तियों का नाश किया। तभी से माँ बगलामुखी को शत्रु स्तंभन, वाणी नियंत्रण एवं रक्षा की देवी माना जाता है। प्राचीन काल से राजा-महाराजा, योद्धा एवं साधक विजय प्राप्ति, शत्रु नाश एवं राज्य सुरक्षा हेतु माँ बगलामुखी साधना करते रहे हैं।",
    englishHeading: "Maa Baglamukhi Itihas — History",
    englishContent:
      "The history of Maa Baglamukhi is deeply rooted in ancient Hindu scriptures and tantric traditions. She is regarded as the eighth Mahavidya among the ten Mahavidyas. According to mythology, when destructive storms and negative forces disturbed the cosmic balance, Lord Vishnu performed intense penance near the sacred Haridra Sarovar. Pleased by his devotion, Maa Baglamukhi appeared and destroyed all negative powers. Since then she has been worshipped as the goddess of protection, enemy stambhan, and speech control. Throughout history, kings, warriors, and spiritual practitioners performed Maa Baglamukhi Sadhna for victory, shatru nash, and divine protection.",
  },
  {
    hindiHeading: "माँ बगलामुखी धाम — नलखेड़ा",
    hindiContent:
      "मध्यप्रदेश के आगर मालवा जिले में स्थित माँ बगलामुखी धाम नलखेड़ा देशभर के श्रद्धालुओं के लिए अत्यंत प्रसिद्ध तीर्थ है। यह माँ बगलामुखी मंदिर नलखेड़ा त्रेतायुग से स्थापित माना जाता है और भारत के तीन प्रमुख बगलामुखी मंदिरों में से एक है। यहाँ माँ बगलामुखी हवन, माँ बगलामुखी अनुष्ठान, जाप, साधना एवं विशेष पूजा सम्पन्न कराई जाती है। माना जाता है कि सच्चे मन से नलखेड़ा माँ बगलामुखी धाम में की गई प्रार्थना अवश्य पूर्ण होती है। लाखों भक्त प्रतिवर्ष यहाँ शत्रु नाश, कोर्ट केस विजय, व्यापार सफलता एवं नकारात्मक ऊर्जा निवारण हेतु अनुष्ठान कराते हैं।",
    englishHeading: "Maa Baglamukhi Dhaam — Nalkheda Temple",
    englishContent:
      "Located in the Agar Malwa district of Madhya Pradesh, Maa Baglamukhi Dhaam Nalkheda is among the most revered Baglamukhi temples in India, believed to have been established in the Treta Yuga. The Maa Baglamukhi Mandir Nalkheda is one of the three principal Baglamukhi temples in the country. Devotees come here for Maa Baglamukhi Havan, Maa Baglamukhi Anushthan, jaap, sadhna, and special pujas. It is believed that sincere prayers offered at Maa Baglamukhi Nalkheda always bear fruit. Every year lakhs of devotees perform anushthan here for shatru nash, court case victory, business success, and removal of negative energy.",
  },
  {
    hindiHeading: "माँ बगलामुखी हवन के लाभ",
    hindiContent:
      "माँ बगलामुखी हवन वैदिक विधि से किया जाने वाला अत्यंत प्रभावशाली तांत्रिक हवन है। बगलामुखी हवन शत्रु बाधा निवारण, कोर्ट केस में विजय, नकारात्मक शक्तियों से रक्षा, व्यापार वृद्धि, मानसिक शांति तथा पारिवारिक सुख-समृद्धि के लिए कराया जाता है। योग्य ब्राह्मणों द्वारा वैदिक मंत्रों एवं विशेष सामग्री के साथ सम्पन्न माँ बगलामुखी हवन शत्रु नाश हवन के रूप में भी जाना जाता है। नियमित बगलामुखी हवन से जीवन में सकारात्मक परिवर्तन, आत्मविश्वास एवं माँ की कृपा प्राप्त होती है।",
    englishHeading: "Maa Baglamukhi Havan Benefits",
    englishContent:
      "Maa Baglamukhi Havan is a powerful Vedic tantrik havan performed for enemy protection, court case victory, business growth, removal of negative energies, mental peace, and family prosperity. Baglamukhi Havan, also known as Shatru Nash Havan, is carried out by experienced priests using authentic Vedic rituals and sacred ingredients. Regular Maa Baglamukhi Havan brings positive transformation, confidence, and the divine blessings of Maa Baglamukhi into the devotee's life.",
  },
  {
    hindiHeading: "माँ बगलामुखी अनुष्ठान के लाभ",
    hindiContent:
      "माँ बगलामुखी अनुष्ठान एक दीर्घ एवं अत्यंत शक्तिशाली साधना है जिसमें सवा लाख से पंचलक्षी तक मंत्र जाप एवं दशांश हवन सम्पन्न किया जाता है। बगलामुखी अनुष्ठान से कठिन से कठिन समस्याओं — गहरी तांत्रिक बाधा, लम्बित कोर्ट केस, असाध्य शत्रु बाधा, व्यापार में निरंतर हानि, मांगलिक दोष एवं ग्रह दोष — का स्थायी समाधान होता है। माँ बगलामुखी अनुष्ठान साधक के चारों ओर एक दिव्य रक्षा कवच निर्मित करता है जो जीवन भर साधक की रक्षा करता है।",
    englishHeading: "Maa Baglamukhi Anushthan Benefits",
    englishContent:
      "Maa Baglamukhi Anushthan is an extended and extremely powerful spiritual ritual involving 1.25 lakh to 5 lakh mantra recitations followed by dashansh havan. Baglamukhi Anushthan provides permanent solutions to the most difficult problems — deep tantric obstacles, pending court cases, persistent enemies, ongoing business losses, manglik dosh, and graha dosh. Maa Baglamukhi Anushthan builds a divine protective shield around the sadhak that safeguards the devotee throughout life.",
  },
  {
    hindiHeading: "माँ बगलामुखी तंत्र साधना",
    hindiContent:
      "माँ बगलामुखी तंत्र साधना दस महाविद्या साधनाओं में अत्यंत गुप्त एवं फलदायी मानी जाती है। यह तांत्रिक हवन एवं साधना मानसिक शक्ति, आत्मविश्वास, आध्यात्मिक उन्नति, शत्रु स्तंभन तथा गहरी नकारात्मक ऊर्जा निवारण हेतु की जाती है। योग्य गुरु एवं सिद्ध ब्राह्मणों के मार्गदर्शन में की गई माँ बगलामुखी साधना विशेष फलदायी होती है। साधना के दौरान बीज मंत्र जाप, यंत्र पूजन, ध्यान एवं वैदिक हवन सम्मिलित होते हैं।",
    englishHeading: "Maa Baglamukhi Tantra Sadhna",
    englishContent:
      "Maa Baglamukhi Tantra Sadhna is considered one of the most secret and result-oriented practices among the ten Mahavidya sadhanas. This tantrik havan and sadhna is performed for inner strength, confidence, spiritual growth, enemy stambhan, and removal of deep negative energy. Under the guidance of accomplished gurus and siddh brahmins, Maa Baglamukhi Sadhna yields powerful results, combining beej mantra jaap, yantra pujan, dhyan, and Vedic havan.",
  },
  {
    hindiHeading: "माँ बगलामुखी जाप महिमा",
    hindiContent:
      "माँ बगलामुखी जाप का महत्व शास्त्रों में विस्तार से वर्णित है। बगलामुखी बीज मंत्र — ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा — का नियमित जाप साधक की वाणी को प्रभावी बनाता है, शत्रुओं की बुद्धि स्तंभित करता है तथा जीवन में निर्णय शक्ति प्रदान करता है। माँ बगलामुखी जाप पीतांबर वस्त्र धारण कर पीले आसन पर बैठकर हल्दी की माला से करना सर्वश्रेष्ठ माना गया है।",
    englishHeading: "Maa Baglamukhi Jaap Mahima",
    englishContent:
      "The glory of Maa Baglamukhi Jaap is described extensively in the scriptures. Regular chanting of the Baglamukhi beej mantra — Om Hleem Baglamukhi Sarvadushtanam Vacham Mukham Padam Stambhaya Jihvam Keelaya Buddhim Vinashaya Hleem Om Swaha — empowers the devotee's speech, stambhans the intellect of enemies, and grants decisive power. Maa Baglamukhi Jaap is best performed wearing yellow attire, seated on a yellow asan, using a turmeric (haldi) mala.",
  },
  {
    hindiHeading: "माँ बगलामुखी शत्रु नाश के लिए",
    hindiContent:
      "माँ बगलामुखी शत्रु नाश की देवी मानी जाती हैं। जब सामान्य उपायों से शत्रु बाधा शांत न हो, तब शत्रु नाश हवन एवं लाल मिर्च हवन विशेष रूप से प्रभावी होते हैं। माँ बगलामुखी हवन से विरोधी पक्ष की वाणी, बुद्धि एवं षड्यंत्र स्तंभित होते हैं तथा साधक के विरुद्ध किया गया प्रत्येक प्रहार निष्फल हो जाता है। यही कारण है कि सदियों से राजा-महाराजा एवं साधक शत्रु बाधा निवारण के लिए माँ बगलामुखी की शरण में आते हैं।",
    englishHeading: "Maa Baglamukhi for Shatru Nash",
    englishContent:
      "Maa Baglamukhi is revered as the goddess of Shatru Nash (enemy destruction). When ordinary remedies fail to pacify enemy troubles, Shatru Nash Havan and Lal Mirch Havan become especially effective. Maa Baglamukhi Havan stambhans the speech, intellect, and conspiracies of the opposition, rendering every attack against the devotee ineffective. This is why kings and sadhaks across centuries have sought refuge at the feet of Maa Baglamukhi for enemy protection.",
  },
  {
    hindiHeading: "माँ बगलामुखी कोर्ट केस विजय के लिए",
    hindiContent:
      "लम्बित न्यायालय मामले, कानूनी पेचीदगियाँ एवं विरोधी पक्ष की मजबूत स्थिति — इन सबमें माँ बगलामुखी हवन अद्वितीय फल देता है। बगलामुखी अनुष्ठान से विरोधी पक्ष की दलीलें कमजोर होती हैं, गवाह स्तंभित होते हैं तथा निर्णय साधक के पक्ष में आता है। अनेक भक्तों ने माँ बगलामुखी मंदिर नलखेड़ा में हवन कराकर वर्षों से अटके केस जीते हैं।",
    englishHeading: "Maa Baglamukhi for Court Case Victory",
    englishContent:
      "For pending court cases, legal complications, and a strong opposition, Maa Baglamukhi Havan delivers unmatched results. Baglamukhi Anushthan weakens the arguments of the opposing party, stambhans witnesses, and turns judgments in favour of the devotee. Many devotees have won cases pending for years after performing havan at the Maa Baglamukhi Mandir Nalkheda.",
  },
  {
    hindiHeading: "माँ बगलामुखी व्यापार सफलता के लिए",
    hindiContent:
      "व्यापार में बार-बार हानि, ग्राहकों का टूटना, साझेदारों से धोखा, धन की रुकावट — इन सब समस्याओं में माँ बगलामुखी पूजा एवं हवन से ग्रह दोष शांत होते हैं और व्यापार में स्थायित्व आता है। बगलामुखी हवन व्यवसाय में आ रही बाधाओं को दूर करता है तथा लक्ष्मी कृपा एवं सतत वृद्धि का मार्ग प्रशस्त करता है।",
    englishHeading: "Maa Baglamukhi for Business Success",
    englishContent:
      "Recurring losses in business, loss of customers, betrayal by partners, and blockages in cash flow — Maa Baglamukhi Puja and Havan pacify the underlying graha doshas and bring stability to the business. Baglamukhi Havan removes obstacles in trade and opens the path of Lakshmi kripa and steady growth.",
  },
  {
    hindiHeading: "माँ बगलामुखी सुरक्षा कवच",
    hindiContent:
      "माँ बगलामुखी अपने भक्तों के चारों ओर एक दिव्य रक्षा कवच का निर्माण करती हैं। नियमित माँ बगलामुखी जाप, यंत्र पूजन एवं अनुष्ठान साधक को दुर्घटना, अकाल मृत्यु, तांत्रिक प्रहार, काला जादू एवं समस्त भय से सुरक्षित रखते हैं। यही कारण है कि माँ बगलामुखी को 'पीतांबरा माँ' एवं 'रक्षा की देवी' कहा जाता है।",
    englishHeading: "Maa Baglamukhi for Protection",
    englishContent:
      "Maa Baglamukhi creates a divine protective shield around her devotees. Regular Maa Baglamukhi Jaap, yantra worship, and anushthan safeguard the sadhak from accidents, untimely death, tantric attacks, black magic, and all forms of fear. This is why she is reverently called 'Pitambara Maa' and the 'Goddess of Protection'.",
  },
  {
    hindiHeading: "माँ बगलामुखी नकारात्मक ऊर्जा निवारण",
    hindiContent:
      "घर में अशांति, बार-बार बीमारी, बच्चों की पढ़ाई में बाधा, नींद न आना तथा अकारण भय — ये सभी नकारात्मक ऊर्जा के लक्षण हैं। माँ बगलामुखी हवन एवं लाल मिर्च हवन से घर, व्यक्ति एवं वातावरण की समस्त नकारात्मक ऊर्जा का नाश होता है तथा सकारात्मक दिव्य ऊर्जा का संचार होता है।",
    englishHeading: "Maa Baglamukhi for Negative Energy Removal",
    englishContent:
      "Unrest in the home, recurring illness, obstacles in children's studies, sleeplessness, and unexplained fear are all signs of negative energy. Maa Baglamukhi Havan and Lal Mirch Havan destroy all negative energies from the home, the person, and the surroundings, replacing them with positive divine vibrations.",
  },
  {
    hindiHeading: "माँ बगलामुखी की आध्यात्मिक शक्ति",
    hindiContent:
      "माँ बगलामुखी की आध्यात्मिक शक्ति अकल्पनीय है। वे साधक को न केवल भौतिक सफलता बल्कि गहन आध्यात्मिक अनुभूति भी प्रदान करती हैं। नियमित बगलामुखी साधना से साधक की कुंडलिनी जाग्रत होती है, ध्यान की गहराई बढ़ती है, मन शांत होता है तथा आत्मिक उन्नति होती है। माँ पीतांबरा की कृपा से साधक मोह, भय एवं अहंकार से मुक्त होकर परम चेतना की ओर अग्रसर होता है।",
    englishHeading: "Maa Baglamukhi Spiritual Power",
    englishContent:
      "The spiritual power of Maa Baglamukhi is beyond imagination. She grants the sadhak not only material success but also deep spiritual realisation. Regular Baglamukhi Sadhna awakens kundalini, deepens meditation, calms the mind, and elevates the soul. By the grace of Maa Pitambara, the devotee transcends attachment, fear, and ego, moving toward supreme consciousness.",
  },
  {
    hindiHeading: "माँ बगलामुखी धाम का महत्व",
    hindiContent:
      "माँ बगलामुखी धाम नलखेड़ा का महत्व इसलिए विशेष है क्योंकि यहाँ माँ बगलामुखी की स्वयंभू प्रतिमा विराजमान है। यहाँ कराया गया प्रत्येक हवन एवं अनुष्ठान सहस्र गुणा फल देने वाला माना जाता है। माँ बगलामुखी मंदिर नलखेड़ा में आज भी प्राचीन वैदिक परंपरा का पूर्ण पालन किया जाता है — यही इस धाम की प्रामाणिकता एवं चमत्कारी शक्ति का रहस्य है।",
    englishHeading: "Maa Baglamukhi Dhaam Importance",
    englishContent:
      "The importance of Maa Baglamukhi Dhaam Nalkheda is unique because it houses the swayambhu (self-manifested) idol of Maa Baglamukhi. Every havan and anushthan performed here is believed to yield a thousand-fold result. The Maa Baglamukhi Mandir Nalkheda continues to follow the complete ancient Vedic tradition — this is the secret of its authenticity and miraculous power.",
  },
];

const faqs = [
  {
    q: "माँ बगलामुखी हवन क्या है?",
    a: "माँ बगलामुखी हवन दस महाविद्याओं में आठवीं शक्ति माँ बगलामुखी की वैदिक उपासना का सिद्ध तांत्रिक अनुष्ठान है। इसमें बीज मंत्र जाप एवं दशांश हवन शत्रु नाश, कोर्ट केस विजय, तंत्र बाधा निवारण एवं रक्षा हेतु किया जाता है।",
  },
  {
    q: "माँ बगलामुखी अनुष्ठान कैसे किया जाता है?",
    a: "माँ बगलामुखी अनुष्ठान योग्य ब्राह्मणों द्वारा 36,000 से 5 लाख तक बीज मंत्र जाप एवं दशांश हवन के माध्यम से किया जाता है। अनुष्ठान की अवधि 3 दिन से 21 दिन तक हो सकती है।",
  },
  {
    q: "लाल मिर्च हवन के लाभ क्या हैं?",
    a: "लाल मिर्च हवन गहन तांत्रिक बाधा, काला जादू, ऊपरी हवा, नज़र दोष एवं उग्र शत्रु बाधा के निवारण हेतु अत्यंत प्रभावी है। यह माँ बगलामुखी की उग्र साधना मानी जाती है।",
  },
  {
    q: "माँ बगलामुखी साधना का महत्व क्या है?",
    a: "माँ बगलामुखी साधना साधक को शत्रु स्तंभन, वाणी सिद्धि, निर्भयता, आत्मविश्वास तथा आध्यात्मिक उन्नति प्रदान करती है। यह दस महाविद्या साधनाओं में अत्यंत फलदायी मानी जाती है।",
  },
  {
    q: "माँ बगलामुखी धाम कहाँ स्थित है?",
    a: "माँ बगलामुखी धाम मध्यप्रदेश के आगर मालवा जिले के नलखेड़ा में स्थित है। यह त्रेतायुगीन माँ बगलामुखी मंदिर भारत के तीन प्रमुख बगलामुखी तीर्थों में से एक है।",
  },
  {
    q: "What is Maa Baglamukhi Havan?",
    a: "Maa Baglamukhi Havan is a Vedic tantrik ritual dedicated to the eighth Mahavidya, Maa Baglamukhi. It combines beej mantra chanting and dashansh havan, performed for enemy destruction, court case victory, removal of tantric obstacles, and divine protection.",
  },
  {
    q: "What are the benefits of Baglamukhi Havan?",
    a: "Baglamukhi Havan grants protection from enemies, success in court cases, removal of negative energy, business growth, mental peace, removal of black magic, and the blessings of Maa Pitambara for overall life success.",
  },
  {
    q: "Why is Maa Baglamukhi worship powerful?",
    a: "Maa Baglamukhi is the goddess of stambhan — she stambhans the speech, intellect, and actions of enemies. Her worship is considered uniquely powerful for protection, victory, and decisive results when other remedies fail.",
  },
  {
    q: "What is Lal Mirch Havan?",
    a: "Lal Mirch Havan is an ugra (fierce) form of Maa Baglamukhi Havan in which red chillies are offered into the sacred fire. It is performed for deep tantric obstacles, black magic, evil eye, and severe enemy troubles.",
  },
  {
    q: "What is the importance of Maa Baglamukhi Dham?",
    a: "Maa Baglamukhi Dham Nalkheda houses a self-manifested (swayambhu) idol of the goddess and is one of the three principal Baglamukhi temples in India. Havans and anushthans performed here are believed to yield thousand-fold results.",
  },
  {
    q: "माँ बगलामुखी हवन के लिए सही पंडित कैसे चुनें?",
    a: "देखें कि पंडित जी माँ बगलामुखी साधना में कितने अनुभवी हैं, संकल्प एवं मंत्र संख्या स्पष्ट बताते हैं या नहीं, सामग्री एवं शुल्क पारदर्शी है या नहीं, तथा हवन का वीडियो/फोटो प्रमाण एवं प्रसाद उपलब्ध कराते हैं या नहीं। कोई भी विद्वान पंडित परिणाम की गारंटी नहीं देता, बल्कि विधि की शुद्धता पर बल देता है।",
  },
  {
    q: "क्या दूर बैठे भक्त भी बगलामुखी हवन करवा सकते हैं?",
    a: "हाँ। यजमान का नाम एवं गोत्र लेकर संकल्प किया जाता है और हवन नलखेड़ा में सम्पन्न कराया जाता है। हवन के पश्चात वीडियो/फोटो एवं प्रसाद भक्त तक भेजा जाता है। भारत एवं विदेश दोनों जगह से बुकिंग संभव है।",
  },
  {
    q: "बगलामुखी हवन में कितना समय लगता है?",
    a: "सामान्य बगलामुखी हवन प्रायः 2–4 घंटे में सम्पन्न होता है, जबकि अनुष्ठान में मंत्र संख्या के अनुसार 3 दिन से 21 दिन तक का समय लग सकता है। अंत में दशांश हवन एवं पूर्णाहुति की जाती है।",
  },
  {
    q: "बगलामुखी हवन के लिए कौन-सा दिन शुभ माना जाता है?",
    a: "मंगलवार, शुक्रवार तथा नवरात्रि एवं गुप्त नवरात्रि के दिन माँ बगलामुखी उपासना हेतु विशेष शुभ माने जाते हैं। परंतु आवश्यकता होने पर पंचांग एवं संकल्प के अनुसार अन्य तिथि भी निर्धारित की जा सकती है।",
  },
  {
    q: "हवन के समय यजमान को क्या तैयारी करनी चाहिए?",
    a: "यजमान अपना नाम एवं गोत्र तैयार रखें, संभव हो तो पीले वस्त्र धारण करें, सात्विक आहार लें तथा पूजा के दिन संयम एवं श्रद्धा बनाए रखें। सामग्री की सूची पंडित जी पहले ही उपलब्ध करा देते हैं।",
  },
  {
    q: "बगलामुखी पूजा और बगलामुखी हवन में क्या अंतर है?",
    a: "पूजा में मुख्यतः यंत्र/प्रतिमा पूजन, मंत्र जाप एवं अर्चना होती है, जबकि हवन में अग्नि को साक्षी मानकर मंत्रों के साथ आहुति दी जाती है। गंभीर बाधाओं में जाप के बाद दशांश हवन आवश्यक माना जाता है।",
  },
  {
    q: "How to choose the best Maa Baglamukhi pandit?",
    a: "Look for genuine experience in Baglamukhi sadhna, clarity about the sankalp and mantra count, transparent details of samagri and dakshina, and proof of the completed havan such as video, photos and prasad. A knowledgeable pandit explains the vidhi rather than promising guaranteed outcomes.",
  },
  {
    q: "Can Baglamukhi Havan be booked online from abroad?",
    a: "Yes. The sankalp is taken with the devotee's name and gotra, the havan is performed at Nalkheda, and photos or video along with prasad are shared afterwards. Devotees in India and overseas can book by phone, WhatsApp or the booking form.",
  },
];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

interface MaaBaglamukhiSeoSectionProps {
  hideFaq?: boolean;
}

const MaaBaglamukhiSeoSection = ({ hideFaq = false }: MaaBaglamukhiSeoSectionProps) => {
  return (
    <section
      className="py-16"
      style={{ background: "#5A0000" }}
      aria-label="Maa Baglamukhi spiritual information"
    >
      {!hideFaq && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      )}

      <div className="container mx-auto px-4 max-w-3xl">
        <header className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-golden-shadow leading-tight"
            style={{ color: "#FFD700" }}
          >
            माँ बगलामुखी — सम्पूर्ण आध्यात्मिक जानकारी
          </h2>
          <p className="text-white/85 mt-4 text-base md:text-xl leading-relaxed">
            Maa Baglamukhi — Complete Spiritual Guide, History, Worship, Havan, Anushthan & Sadhna
          </p>
        </header>

        <div className="space-y-12 text-white/90 leading-[1.9] text-[17px] md:text-[19px]">
          {blocks.map((b, i) => (
            <article key={i} className="space-y-5">
              <h3
                className="text-2xl md:text-3xl font-bold leading-snug"
                style={{ color: "#FFD700" }}
              >
                {b.hindiHeading}
              </h3>
              <p className="text-[17px] md:text-[19px] leading-[1.95]">{b.hindiContent}</p>

              <h3
                className="text-2xl md:text-3xl font-bold pt-3 leading-snug"
                style={{ color: "#FFD700" }}
              >
                {b.englishHeading}
              </h3>
              <p className="text-[17px] md:text-[19px] leading-[1.95]">{b.englishContent}</p>
            </article>
          ))}

          {!hideFaq && (
            <section className="pt-8 space-y-6" aria-label="Maa Baglamukhi FAQ">
              <h3
                className="text-2xl md:text-4xl font-extrabold text-center leading-snug"
                style={{ color: "#FFD700" }}
              >
                अक्सर पूछे जाने वाले प्रश्न / Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 md:p-6"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,215,0,0.25)",
                    }}
                  >
                    <h4
                      className="text-lg md:text-2xl font-bold mb-3 leading-snug"
                      style={{ color: "#FFD700" }}
                    >
                      {f.q}
                    </h4>
                    <p className="text-[17px] md:text-[19px] leading-[1.9] text-white/90">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div
            className="rounded-xl p-6 md:p-8 mt-8 text-center"
            style={{
              background: "rgba(255,140,0,0.15)",
              border: "1px solid rgba(255,215,0,0.35)",
            }}
          >
            <p className="text-white/95 text-base md:text-xl leading-relaxed">
              अधिक जानकारी एवं बुकिंग के लिए —{" "}
              <Link to="/havan-booking" className="underline font-semibold" style={{ color: "#FFD700" }}>हवन बुकिंग</Link>{" "}•{" "}
              <Link to="/baglamukhi-havan" className="underline font-semibold" style={{ color: "#FFD700" }}>बगलामुखी हवन</Link>{" "}•{" "}
              <Link to="/lal-mirch-havan" className="underline font-semibold" style={{ color: "#FFD700" }}>लाल मिर्च हवन</Link>{" "}•{" "}
              <Link to="/baglamukhi-anushthan" className="underline font-semibold" style={{ color: "#FFD700" }}>बगलामुखी अनुष्ठान</Link>{" "}•{" "}
              <Link to="/contact" className="underline font-semibold" style={{ color: "#FFD700" }}>संपर्क करें</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MaaBaglamukhiFaqSection = () => {
  return (
    <section
      className="py-16"
      style={{ background: "#5A0000" }}
      aria-label="Maa Baglamukhi FAQ"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-golden-shadow leading-tight"
            style={{ color: "#FFD700" }}
          >
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <p className="text-white/85 mt-3 text-base md:text-lg">
            Frequently Asked Questions — Maa Baglamukhi Havan & Anushthan
          </p>
        </header>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl p-5 md:p-6"
              style={{
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,215,0,0.25)",
              }}
            >
              <h3
                className="text-lg md:text-2xl font-bold mb-3 leading-snug"
                style={{ color: "#FFD700" }}
              >
                {f.q}
              </h3>
              <p className="text-[17px] md:text-[19px] leading-[1.9] text-white/90">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaBaglamukhiSeoSection;

