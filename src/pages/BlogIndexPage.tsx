import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogIndexPage = () => (
  <>
    <Seo
      title="Blog | Baglamukhi Havan & Anushthan — आध्यात्मिक लेख"
      description="Baglamukhi Havan, Lal Mirch Havan, tantra nivaran एवं पूजा सेवा से जुड़े आध्यात्मिक लेख एवं spiritual guides पढ़ें।"
      path="/blog"
      keywords="baglamukhi havan blog, lal mirch havan, tantra nivaran, spiritual blog, hindu havan"
    />
    <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-golden-shadow text-center" style={{ color: '#FFD700' }}>
          📿 Spiritual Blog
        </h1>
        <p className="text-white/80 text-center mb-10">
          बगलामुखी हवन, अनुष्ठान एवं आध्यात्मिक ज्ञान से जुड़े लेख
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-golden block"
              style={{ background: 'rgba(255,140,0,0.18)', border: '1px solid rgba(255,215,0,0.4)' }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#FFD700' }}>{p.title}</h2>
              <p className="text-white/85 text-sm mb-4">{p.description}</p>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                </span>
                <span className="flex items-center gap-1 font-semibold" style={{ color: '#FFD700' }}>
                  पढ़ें <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default BlogIndexPage;
