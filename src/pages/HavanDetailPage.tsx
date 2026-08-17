import React from "react";
import { useParams, Link } from "react-router-dom";
import { havans } from "@/data/havans";
import { Clock, CheckCircle, ArrowRight, Shield, Star, Users, ChevronLeft } from "lucide-react";
import NotFound from "./NotFound";
import ContactStrip from "@/components/ContactStrip";
import Seo from "@/components/Seo";


const HavanDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const havan = havans.find((h) => h.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!havan) return <NotFound />;

  return (
    <main className="pb-16">
      <Seo
        title={`${havan.name} | विधि, अवधि एवं बुकिंग`}
        description={`${havan.description} नलखेड़ा (म.प्र.) के अनुभवी पंडितों द्वारा ${havan.name} की विधि, अवधि एवं बुकिंग की पूरी जानकारी।`.slice(0, 158)}
        path={`/havan/${havan.id}`}
        type="article"
        breadcrumbs={[
          { name: "होम", path: "/" },
          { name: "हवन प्रकार", path: "/havan-types" },
          { name: havan.name, path: `/havan/${havan.id}` },
        ]}
      />
      {/* Hero Image - clean, no overlay */}
      <section className="w-full">
        <img
          src={havan.image}
          alt={`${havan.name} — नलखेड़ा में माँ बगलामुखी हवन विधि`}
          className="w-full h-auto max-h-[60vh] object-cover block"
        />
      </section>

      {/* Title & Price below image */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <Link
            to="/havan-types"
            className="inline-flex items-center gap-1 text-primary mb-3 text-sm font-medium hover:underline"
          >
            <ChevronLeft className="h-4 w-4" /> सभी हवन
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2">
                {havan.icon} {havan.name}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {havan.description}
              </p>
            </div>
            <span
              className="text-sm md:text-base font-semibold px-4 py-2 rounded-lg tracking-wide whitespace-nowrap text-golden-outline"
              style={{ background: '#F57C00', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}
            >
              {havan.dakshina ? `दक्षिणा: ${havan.dakshina}` : "संपर्क करें विवरण हेतु"}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                परिचय एवं <span className="text-gradient-golden">महत्व</span>
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>{havan.longDescription || havan.description}</p>
                {havan.purpose && <p>{havan.purpose}</p>}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {havan.duration && (
                  <span className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground">
                    <Clock className="h-4 w-4 text-accent" /> अवधि: <strong>{havan.duration}</strong>
                  </span>
                )}
                {havan.dakshina && (
                  <span className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground">
                    🪔 दक्षिणा: <strong>{havan.dakshina}</strong>
                  </span>
                )}
              </div>
            </section>

            {/* What is it */}
            {havan.whatIsIt && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  यह हवन <span className="text-gradient-golden">क्या है?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">{havan.whatIsIt}</p>
              </section>
            )}

            {/* Why performed */}
            {havan.whyPerformed && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  किस उद्देश्य से <span className="text-gradient-golden">कराया जाता है?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">{havan.whyPerformed}</p>
              </section>
            )}

            {/* Features */}
            {havan.features && havan.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  मुख्य <span className="text-gradient-golden">विशेषताएँ</span>
                </h2>
                <ul className="space-y-3">
                  {havan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                प्रमुख <span className="text-gradient-golden">उद्देश्य</span>
              </h2>
              <ul className="space-y-3">
                {havan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
                {havan.extraBenefits?.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Samagri & notes */}
            {(havan.samagri || havan.notes) && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  हवन सामग्री एवं <span className="text-gradient-golden">महत्वपूर्ण बातें</span>
                </h2>
                <ul className="space-y-3">
                  {[...(havan.samagri || []), ...(havan.notes || [])].map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm md:text-base">{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Vidhi — plain content, always visible */}
            {havan.vidhiDetails && havan.vidhiDetails.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  🔥 हवन <span className="text-gradient-golden">विधि</span>
                </h2>
                <div className="space-y-4">
                  {havan.vidhiDetails.map((step, i) => (
                    <div key={step.title} className="bg-card border border-border rounded-xl p-4">
                      <h3 className="font-bold text-foreground mb-2">
                        <span className="text-accent mr-2">{String(i + 1).padStart(2, "0")}</span>
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Yajman info */}
            {havan.yajmanInfo && havan.yajmanInfo.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  यजमान के लिए <span className="text-gradient-golden">विशेष जानकारी</span>
                </h2>
                <ul className="space-y-3">
                  {havan.yajmanInfo.map((y) => (
                    <li key={y} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm md:text-base">{y}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}


            {/* Mobile CTA */}
            <section className="md:hidden">
              <Link
                to={`/booking?havan=${havan.id}`}
                className="w-full gradient-golden text-primary-foreground py-3.5 rounded-lg font-bold text-base shadow-golden flex items-center justify-center gap-2"
              >
                {havan.ctaLabel || "हवन बुक करें"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </section>

            {/* Common information (once per page) */}
            <section className="bg-card border border-border rounded-xl p-5">
              <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" /> सामान्य जानकारी
              </h2>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>प्रत्येक हवन/अनुष्ठान यजमान के नाम, गोत्र एवं धर्मसम्मत संकल्प के अनुसार विधिपूर्वक संपन्न किया जाता है।</li>
                <li>हवन सामग्री का चयन हवन के प्रकार एवं यजमान के संकल्प के अनुसार किया जाता है।</li>
                <li>आध्यात्मिक अनुष्ठान श्रद्धा एवं धार्मिक आस्था का विषय हैं। किसी निश्चित कानूनी, आर्थिक अथवा व्यक्तिगत परिणाम की गारंटी नहीं दी जाती।</li>
              </ul>
            </section>
          </div>

          {/* Right sidebar - Pricing & CTA */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-primary/30 rounded-xl p-6 shadow-golden md:sticky md:top-24">
              <div className="text-center mb-4">
                <div className="text-sm text-muted-foreground mb-1">{havan.dakshina ? "दक्षिणा" : "पूजा विवरण"}</div>
                <div className="text-lg font-bold text-gradient-golden">
                  {havan.dakshina || "संपर्क करें विवरण हेतु"}
                </div>
                {havan.duration && (
                  <div className="text-xs text-muted-foreground mt-1">अवधि: {havan.duration}</div>
                )}
              </div>

              <div className="bg-accent/10 text-accent-foreground text-center text-sm font-semibold py-2 rounded-lg mb-4">
                ⭐ पूर्ण विधि — शास्त्रोक्त सामग्री सहित
              </div>

              <Link
                to={`/booking?havan=${havan.id}`}
                className="w-full gradient-golden text-primary-foreground py-3.5 rounded-lg font-bold text-base shadow-golden hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {havan.ctaLabel || "अभी हवन बुक करें"}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-3">
                ⏰ सीमित स्लॉट • विवरण हेतु संपर्क करें
              </p>

              <ContactStrip compact className="mt-4" />
            </div>

            {/* Trust */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="font-bold text-foreground text-center">हम पर भरोसा करें</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">5000+ हवन सम्पन्न</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">1000+ संतुष्ट भक्तगण</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground">100% शास्त्रोक्त विधि</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HavanDetailPage;
