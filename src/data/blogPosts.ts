export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string;
  // JSX content rendered by the post page
  contentKey:
    | "baglamukhi-havan-benefits"
    | "lal-mirch-havan-importance"
    | "havan-removes-negative-energy"
    | "best-baglamukhi-pandit-kaise-chune"
    | "nalkheda-baglamukhi-mandir-guide"
    | "baglamukhi-anushthan-vs-havan";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-baglamukhi-pandit-kaise-chune",
    title: "Best Baglamukhi Pandit कैसे चुनें — 5 व्यावहारिक कसौटियाँ",
    description: "Maa Baglamukhi best pandit कैसे चुनें? अनुभव, विधि की शुद्धता, संकल्प, शुल्क पारदर्शिता और हवन प्रमाण — पूरी व्यावहारिक गाइड।",
    date: "2026-05-12",
    readTime: "6 मिनट",
    keywords: "maa baglamukhi best pandit, best maa baglamukhi pandit, baglamukhi best pandit, best baglamukhi pandit, baglamukhi pandit",
    contentKey: "best-baglamukhi-pandit-kaise-chune",
  },
  {
    slug: "nalkheda-baglamukhi-mandir-guide",
    title: "Nalkheda Baglamukhi Mandir — दर्शन, मार्ग एवं हवन की पूरी जानकारी",
    description: "माँ बगलामुखी मंदिर नलखेड़ा कैसे पहुँचें, दर्शन का समय, कौन-से अनुष्ठान होते हैं और यात्रा की तैयारी — श्रद्धालुओं के लिए उपयोगी गाइड।",
    date: "2026-05-10",
    readTime: "5 मिनट",
    keywords: "nalkheda baglamukhi, baglamukhi mandir, maa baglamukhi mandir nalkheda, baglamukhi puja, maa baglamukhi pandit",
    contentKey: "nalkheda-baglamukhi-mandir-guide",
  },
  {
    slug: "baglamukhi-anushthan-vs-havan",
    title: "Baglamukhi Anushthan और Havan में अंतर — कौन-सा आपके लिए सही है",
    description: "बगलामुखी हवन और बगलामुखी अनुष्ठान में क्या फर्क है, मंत्र संख्या, अवधि और किस समस्या में कौन-सा कराना चाहिए — सरल तुलना।",
    date: "2026-05-08",
    readTime: "5 मिनट",
    keywords: "baglamukhi anushthan, baglamukhi havan, maa baglamukhi havan, baglamukhi puja, baglamukhi pandit",
    contentKey: "baglamukhi-anushthan-vs-havan",
  },
  {
    slug: "baglamukhi-havan-benefits",
    title: "Baglamukhi Havan Benefits — बगलामुखी हवन के 10 चमत्कारी लाभ",
    description: "बगलामुखी हवन के 10 बड़े लाभ — शत्रु नाश, court case विजय, tantra nivaran और जीवन की बाधाओं का समाधान। पूरा spiritual guide।",
    date: "2026-04-15",
    readTime: "6 मिनट",
    keywords: "baglamukhi havan benefits, baglamukhi havan, baglamukhi puja, vijay prapti havan",
    contentKey: "baglamukhi-havan-benefits",
  },
  {
    slug: "lal-mirch-havan-importance",
    title: "Lal Mirch Havan Importance — लाल मिर्च हवन का महत्व एवं विधि",
    description: "Lal Mirch Havan क्यों किया जाता है? जानें इस tantra nivaran havan का पूर्ण महत्व, विधि और किसे करवाना चाहिए।",
    date: "2026-04-10",
    readTime: "5 मिनट",
    keywords: "lal mirch havan, tantra nivaran havan, nazar dosh havan, baglamukhi havan",
    contentKey: "lal-mirch-havan-importance",
  },
  {
    slug: "havan-removes-negative-energy",
    title: "How Havan Removes Negative Energy — हवन से नकारात्मक ऊर्जा का नाश कैसे होता है",
    description: "हवन की अग्नि एवं वैदिक मंत्रों से वातावरण की नकारात्मक ऊर्जा कैसे समाप्त होती है — वैज्ञानिक एवं आध्यात्मिक दृष्टिकोण।",
    date: "2026-04-05",
    readTime: "7 मिनट",
    keywords: "havan negative energy, baglamukhi havan, tantra nivaran havan, nazar dosh havan",
    contentKey: "havan-removes-negative-energy",
  },
];
