const MANTRA = "ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥";

const StickyTopBar = () => {
  return (
    <div
      className="relative w-full overflow-hidden border-b border-yellow-900/30"
      style={{ background: '#8B0000' }}
      aria-label="Baglamukhi Mantra & Booking CTA"
    >
      <div className="flex items-center gap-3 py-2">
        <div className="mantra-marquee whitespace-nowrap flex-1 overflow-hidden">
          <span
            className="mantra-track inline-block font-semibold text-sm md:text-base"
            style={{ color: '#FFD700' }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="mx-12">
                {MANTRA}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StickyTopBar;
