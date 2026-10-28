import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Havan } from "@/data/havans";

const HavanCard = ({ havan }: { havan: Havan }) => {
  return (
    <div
      className="rounded-xl overflow-hidden hover:shadow-golden transition-all duration-300 group flex flex-col"
      style={{ background: '#FF8C00', border: '1px solid rgba(255,215,0,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
    >
      <Link to={`/havan/${havan.id}`} className="relative h-48 overflow-hidden block">
        <img
          src={havan.image}
          alt={`${havan.name} - baglamukhi hawan pandit, online hawan booking service, हवन पूजा पंडित बुकिंग मध्य प्रदेश`}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <Link to={`/havan/${havan.id}`} className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold transition-colors text-golden-outline" style={{ color: '#FFD700' }}>
              {havan.name}
            </h3>
          </Link>
          <span
            className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg text-golden-outline tracking-wide whitespace-nowrap"
            style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
          >
            संपर्क करें विवरण हेतु
          </span>
        </div>
        <p className="text-sm text-white mb-4 leading-relaxed flex-1">
          {havan.description}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {havan.benefits.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(139,0,0,0.5)', color: '#FFD700' }}
              >
                {b}
              </span>
            ))}
          </div>

          {havan.duration && (
            <ul className="space-y-1.5 rounded-lg p-3" style={{ background: 'rgba(139,0,0,0.45)', border: '1px solid rgba(255,215,0,0.3)' }}>
              <li className="flex items-center gap-2 text-sm text-white">
                <Clock className="h-4 w-4 flex-shrink-0" style={{ color: '#FFD700' }} />
                <span>अवधि: {havan.duration}</span>
              </li>
            </ul>
          )}

          <div className="space-y-2 pt-3" style={{ borderTop: '1px solid rgba(255,215,0,0.25)' }}>
            <Link
              to={`/havan/${havan.id}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'rgba(139,0,0,0.55)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.4)' }}
            >
              विस्तार से देखें <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={`/booking?havan=${havan.id}`}
              className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm shadow-golden hover:shadow-lg hover:scale-105 transition-all"
            >
              👉 {havan.ctaLabel || "अभी हवन बुक करें"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HavanCard;
