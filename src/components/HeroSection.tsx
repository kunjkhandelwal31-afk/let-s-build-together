import heroVideo from "@/assets/hero-video.mp4";
import CelebrityVisitorsSlider from "@/components/CelebrityVisitorsSlider";


const HeroSection = () => {
  return (
    <section id="hero-section">
      {/* Video Banner */}
      <div className="w-full" style={{ background: '#4A0000' }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block mx-auto"
        />
      </div>

      {/* Content Below Video */}
      <div className="py-10 md:py-14" style={{ background: '#6B0000' }}>
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-5">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-golden-shadow"
            style={{ color: '#FFD700' }}
          >
            मां बगलामुखी हवन सेवा{" "}
            <span className="text-white block text-xl md:text-2xl lg:text-3xl mt-2 font-bold">Maa Baglamukhi Best Pandit</span>
          </h1>
          <p className="text-sm text-white/70">नलखेड़ा के अनुभवी बगलामुखी पंडित जी • हवन बुकिंग • विश्वभर में ऑनलाइन सेवा</p>


          <p className="text-base md:text-lg leading-relaxed text-white/85">
            अनुभवी पंडित जी द्वारा बगलामुखी पूजा, हवन एवं अनुष्ठान बुक करें।
            माँ बगलामुखी की कृपा से शत्रुओं का नाश, कोर्ट-कचहरी में विजय और जीवन में सफलता प्राप्त करें।
          </p>

          <CelebrityVisitorsSlider />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
