import { useState } from "react";
import { products, type Product } from "@/data/products";
import { ShoppingCart, Star, Truck, Shield, CheckCircle, Minus, Plus, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ContactStrip from "@/components/ContactStrip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const categories = ["सभी", "ताबीज", "यंत्र", "प्रसाद", "किट"] as const;

interface CartItem {
  product: Product;
  quantity: number;
}

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("सभी");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const { toast } = useToast();

  const filtered = products.filter(
    (p) => selectedCategory === "सभी" || p.category === selectedCategory,
  );

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.product.id === product.id);
      if (existing)
        return prev.map((c) =>
          c.product.id === product.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      return [...prev, { product, quantity: 1 }];
    });
    toast({ title: "🛒 कार्ट में जोड़ा गया", description: product.name });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) =>
        c.product.id === id ? { ...c, quantity: Math.max(1, c.quantity + delta) } : c,
      ),
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((c) => c.product.id !== id));
  };

  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  const buyNow = (product: Product) => {
    const msg = `नमस्ते, मुझे "${product.name}" के बारे में जानकारी चाहिए। कृपया विवरण भेजें।`;
    window.open(`https://wa.me/917024609027?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const enquireViaWhatsApp = () => {
    const items = cart.map((c) => `• ${c.product.name} x${c.quantity}`).join("\n");
    const msg = `नमस्ते, मुझे इन उत्पादों के बारे में जानकारी चाहिए:\n${items}\n\nकृपया विवरण एवं मार्गदर्शन भेजें।`;
    window.open(`https://wa.me/917024609027?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const tagColor = (tag: string) => {
    if (tag === "Best Seller") return "bg-accent text-accent-foreground";
    if (tag === "Most Powerful") return "bg-secondary text-secondary-foreground";
    return "bg-destructive text-destructive-foreground";
  };

  return (
    <main className="py-12">
      <section className="container mx-auto px-4 mb-12">
        <div className="gradient-golden rounded-2xl p-8 text-center shadow-golden">
          <p className="text-xl md:text-2xl font-bold text-primary-foreground">
            🙏 "जहाँ माँ बगलामुखी की कृपा होती है, वहाँ हर बाधा समाप्त होती है।"
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            🔱 दिव्य पूजन सामग्री एवं <span className="text-gradient-golden">आध्यात्मिक उत्पाद</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            पंडित जी द्वारा अभिमंत्रित एवं सिद्ध उत्पाद — 100% प्रामाणिक। विवरण हेतु संपर्क करें।
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { icon: <Shield className="h-5 w-5" />, text: "100% प्रामाणिक" },
            { icon: <CheckCircle className="h-5 w-5" />, text: "पंडित द्वारा सिद्ध" },
            { icon: <Truck className="h-5 w-5" />, text: "भारत भर में डिलीवरी" },
            { icon: <Star className="h-5 w-5" />, text: "3-7 दिन डिलीवरी" },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full text-sm font-semibold"
            >
              <span className="text-accent">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === cat
                  ? "gradient-golden text-primary-foreground shadow-golden"
                  : "bg-muted text-muted-foreground hover:bg-accent/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-golden transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${tagColor(
                      product.tag,
                    )}`}
                  >
                    {product.tag === "Best Seller"
                      ? "⭐ बेस्ट सेलर"
                      : product.tag === "Most Powerful"
                      ? "🔥 सबसे शक्तिशाली"
                      : "⏰ सीमित स्टॉक"}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews.length} रिव्यू)
                  </span>
                </div>
                <p className="text-accent font-semibold text-base mb-4">
                  पूजा शुल्क जानने हेतु संपर्क करें
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => addToCart(product)}
                    variant="outline"
                    className="flex-1 text-sm border-accent/40 hover:bg-accent/10"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" /> कार्ट में डालें
                  </Button>
                  <Button
                    onClick={() => buyNow(product)}
                    className="flex-1 text-sm gradient-golden text-primary-foreground hover:opacity-90"
                  >
                    संपर्क करें
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            ⭐ ग्राहकों के <span className="text-gradient-golden">अनुभव</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products
              .flatMap((p) => p.reviews.map((r) => ({ ...r, product: p.name })))
              .slice(0, 6)
              .map((review, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm mb-2">"{review.text}"</p>
                  <p className="text-xs text-muted-foreground">
                    — {review.name} ({review.product})
                  </p>
                </div>
              ))}
          </div>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            ❓ अक्सर पूछे जाने वाले <span className="text-gradient-golden">प्रश्न</span>
          </h2>
          {[
            { q: "डिलीवरी में कितना समय लगता है?", a: "भारत में सामान्यतः 3-7 कार्य दिवस लगते हैं। विवरण हेतु कृपया संपर्क करें।" },
            { q: "क्या ये उत्पाद प्रामाणिक हैं?", a: "हाँ, सभी उत्पाद पंडित जी द्वारा विधिवत अभिमंत्रित एवं सिद्ध किए जाते हैं।" },
            { q: "उत्पाद का उपयोग कैसे करें?", a: "हर उत्पाद के साथ विस्तृत उपयोग विधि दी जाती है। WhatsApp पर भी मार्गदर्शन मिलता है।" },
            { q: "अधिक जानकारी कैसे प्राप्त करें?", a: "कृपया +91 70246 09027 पर कॉल या WhatsApp करें — हमारी टीम मार्गदर्शन प्रदान करेगी।" },
          ].map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5 mb-3">
              <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </section>

        <ContactStrip className="mb-8" />
      </div>

      {cartCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-44 right-6 z-50 gradient-golden text-primary-foreground p-4 rounded-full shadow-golden"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {cartCount}
          </span>
        </button>
      )}

      {showCart && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="relative bg-background w-full max-w-md h-full overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">🛒 आपकी सूची</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-center py-10">सूची खाली है</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 mb-4 bg-card p-3 rounded-lg border border-border"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.product.name}</h4>
                      <p className="text-muted-foreground text-xs">
                        विवरण हेतु संपर्क करें
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 bg-muted rounded"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 bg-muted rounded"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="ml-auto text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-border pt-4 mt-4">
                  <Button
                    onClick={enquireViaWhatsApp}
                    className="w-full gradient-golden text-primary-foreground text-base py-6"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" /> WhatsApp पर विवरण मंगवाएं
                  </Button>
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span>🔒 सुरक्षित संपर्क</span>
                    <span>🙏 विवरण हेतु WhatsApp</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ShopPage;
