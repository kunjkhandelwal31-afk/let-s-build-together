import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import v1 from "@/assets/visitor-1-anil-ambani.webp";
import v2 from "@/assets/visitor-2-ajay-devgan-kajol.webp";
import v3 from "@/assets/visitor-3-dhirendra-shastri.webp";
import v4 from "@/assets/visitor-4-jaya-kishori.webp";
import v5 from "@/assets/visitor-5-remo-dsouza.webp";
import v6 from "@/assets/visitor-6-kapil-sharma.webp";
import v7 from "@/assets/visitor-7-honey-singh.webp";
import v8 from "@/assets/visitor-8-nayanthara.webp";
import v9 from "@/assets/maa-baglamukhi-darshan.webp";

// Order must match the sequence in which the images were provided.
const slides = [
  { src: v1, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — अनिल अंबानी" },
  { src: v2, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — अजय देवगन एवं काजोल" },
  { src: v3, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — धीरेंद्र शास्त्री (बागेश्वर धाम)" },
  { src: v4, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारीं विशिष्ट अतिथि — जया किशोरी जी" },
  { src: v5, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — रेमो डिसूजा एवं लिज़ेल डिसूजा" },
  { src: v6, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — कपिल शर्मा" },
  { src: v7, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारे विशिष्ट अतिथि — हनी सिंह" },
  { src: v8, alt: "माँ बगलामुखी धाम नलखेड़ा में पधारीं विशिष्ट अतिथि — नयनतारा" },
  { src: v9, alt: "माँ बगलामुखी मंदिर नलखेड़ा में माँ बगलामुखी की प्रतिमा के दर्शन" },
];

const CelebrityVisitorsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const id = window.setInterval(() => {
      if (document.hidden) return;
      emblaApi.scrollNext();
    }, 4000);
    return () => {
      window.clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="pt-2">
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-5 text-golden-shadow leading-snug"
        style={{ color: "#FFD700" }}
      >
        माँ बगलामुखी धाम में पधारे विशिष्ट अतिथि
      </h2>

      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((s, i) => (
            <div key={s.src} className="flex-[0_0_100%] min-w-0 px-1">
              <div
                className="relative w-full aspect-square overflow-hidden rounded-2xl border-2 shadow-2xl"
                style={{ borderColor: "#FFD700", background: "#4A0000" }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`स्लाइड ${i + 1} देखें`}
            className="h-2 rounded-full transition-all"
            style={{
              width: selected === i ? 20 : 8,
              background: selected === i ? "#FFD700" : "rgba(255,215,0,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CelebrityVisitorsSlider;
