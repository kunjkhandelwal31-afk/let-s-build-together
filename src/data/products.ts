import productTabiz from "@/assets/product-tabiz.webp";
import productPrasad from "@/assets/product-prasad.webp";
import productKavach from "@/assets/product-kavach.webp";
import productYantra from "@/assets/product-yantra.webp";
import productPattika from "@/assets/product-pattika.webp";
import productPitambar from "@/assets/product-pitambar.webp";
import productPujaKit from "@/assets/product-puja-kit.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  /** Contact-only label — no monetary values exposed sitewide. */
  priceRange: string;
  image: string;
  category: "ताबीज" | "यंत्र" | "प्रसाद" | "किट";
  tag?: "Best Seller" | "Most Powerful" | "Limited Stock";
  reviews: { name: string; text: string; stars: number }[];
}

const CONTACT_LABEL = "संपर्क करें विवरण हेतु";

export const products: Product[] = [
  {
    id: "tabiz",
    name: "दिव्य सुरक्षा ताबीज",
    description: "नकारात्मक शक्तियों से रक्षा करने वाला सिद्ध ताबीज",
    priceRange: CONTACT_LABEL,
    image: productTabiz,
    category: "ताबीज",
    tag: "Best Seller",
    reviews: [
      { name: "राजेश शर्मा", text: "बहुत शक्तिशाली ताबीज है, मेरी समस्या दूर हुई।", stars: 5 },
      { name: "सुनीता देवी", text: "पंडित जी ने विधिवत अभिमंत्रित किया, बहुत अच्छा अनुभव।", stars: 5 },
    ],
  },
  {
    id: "prasad",
    name: "माँ बगलामुखी कृपा प्रसाद",
    description: "विशेष पूजा के बाद अभिमंत्रित प्रसाद",
    priceRange: CONTACT_LABEL,
    image: productPrasad,
    category: "प्रसाद",
    reviews: [
      { name: "अमित वर्मा", text: "माँ का प्रसाद लेकर बहुत शांति मिली।", stars: 5 },
    ],
  },
  {
    id: "kavach",
    name: "अद्भुत रक्षा कवच",
    description: "जीवन में सुरक्षा और सफलता के लिए शक्तिशाली कवच",
    priceRange: CONTACT_LABEL,
    image: productKavach,
    category: "ताबीज",
    tag: "Most Powerful",
    reviews: [
      { name: "विकास पटेल", text: "कवच पहनने के बाद जीवन में सकारात्मक बदलाव आया।", stars: 5 },
      { name: "प्रीति गुप्ता", text: "बहुत शक्तिशाली कवच, सुरक्षा का अनुभव होता है।", stars: 4 },
    ],
  },
  {
    id: "yantra",
    name: "सिद्ध शक्तिशाली बगलामुखी यंत्र",
    description: "घर और कार्यस्थल में सकारात्मक ऊर्जा के लिए",
    priceRange: CONTACT_LABEL,
    image: productYantra,
    category: "यंत्र",
    tag: "Best Seller",
    reviews: [
      { name: "संजय मिश्रा", text: "यंत्र स्थापित करने के बाद व्यापार में बढ़त हुई।", stars: 5 },
    ],
  },
  {
    id: "pattika",
    name: "पवित्र मंत्र सिद्ध पट्टिका",
    description: "मंत्र ऊर्जा से अभिमंत्रित पवित्र पट्टिका",
    priceRange: CONTACT_LABEL,
    image: productPattika,
    category: "यंत्र",
    tag: "Limited Stock",
    reviews: [
      { name: "दीपक तिवारी", text: "मंत्र पट्टिका से घर में शांति आई।", stars: 5 },
    ],
  },
  {
    id: "pitambar",
    name: "शुभ पीतांबर वस्त्र",
    description: "माँ बगलामुखी को अर्पित करने हेतु विशेष वस्त्र",
    priceRange: CONTACT_LABEL,
    image: productPitambar,
    category: "प्रसाद",
    reviews: [
      { name: "कविता शर्मा", text: "बहुत सुंदर और शुद्ध वस्त्र, पूजा में उपयोग किया।", stars: 5 },
    ],
  },
  {
    id: "puja-kit",
    name: "सम्पूर्ण दिव्य अनुष्ठान किट",
    description: "सभी आवश्यक सामग्री के साथ पूर्ण पूजा किट",
    priceRange: CONTACT_LABEL,
    image: productPujaKit,
    category: "किट",
    tag: "Most Powerful",
    reviews: [
      { name: "रमेश यादव", text: "पूर्ण किट मिली, सब कुछ शामिल था। बहुत संतुष्ट।", stars: 5 },
      { name: "अनिता सिंह", text: "घर बैठे पूजा किट मिल गई, बहुत अच्छी सेवा।", stars: 5 },
    ],
  },
];
