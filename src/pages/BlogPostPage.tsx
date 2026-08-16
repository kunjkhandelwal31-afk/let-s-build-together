import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import SeoCta from "@/components/SeoCta";
import { blogPosts } from "@/data/blogPosts";
import BaglamukhiHavanBenefits from "@/content/blog/BaglamukhiHavanBenefits";
import LalMirchHavanImportance from "@/content/blog/LalMirchHavanImportance";
import HavanRemovesNegativeEnergy from "@/content/blog/HavanRemovesNegativeEnergy";
import BestBaglamukhiPanditGuide from "@/content/blog/BestBaglamukhiPanditGuide";
import NalkhedaBaglamukhiMandirGuide from "@/content/blog/NalkhedaBaglamukhiMandirGuide";
import BaglamukhiAnushthanVsHavan from "@/content/blog/BaglamukhiAnushthanVsHavan";
import MaaBaglamukhiBestPanditKyon from "@/content/blog/MaaBaglamukhiBestPanditKyon";
import CourtCaseMeinBaglamukhiHavan from "@/content/blog/CourtCaseMeinBaglamukhiHavan";
import BaglamukhiHavanSamagriAurTaiyari from "@/content/blog/BaglamukhiHavanSamagriAurTaiyari";

const contentMap = {
  "maa-baglamukhi-best-pandit-kyon": MaaBaglamukhiBestPanditKyon,
  "court-case-mein-baglamukhi-havan": CourtCaseMeinBaglamukhiHavan,
  "baglamukhi-havan-samagri-taiyari": BaglamukhiHavanSamagriAurTaiyari,
  "baglamukhi-havan-benefits": BaglamukhiHavanBenefits,
  "lal-mirch-havan-importance": LalMirchHavanImportance,
  "havan-removes-negative-energy": HavanRemovesNegativeEnergy,
  "best-baglamukhi-pandit-kaise-chune": BestBaglamukhiPanditGuide,
  "nalkheda-baglamukhi-mandir-guide": NalkhedaBaglamukhiMandirGuide,
  "baglamukhi-anushthan-vs-havan": BaglamukhiAnushthanVsHavan,
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const Content = contentMap[post.contentKey];

  return (
    <>
      <Seo
        title={`${post.title} | Baglamukhi Havan Blog`}
        description={post.description}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        type="article"
      />
      <main className="py-14" style={{ background: '#6B0000', color: 'white' }}>
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm mb-6 hover:underline" style={{ color: '#FFD700' }}>
            <ArrowLeft className="h-4 w-4" /> सभी लेख
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-golden-shadow" style={{ color: '#FFD700' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70 mb-8">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
          <div className="prose-blog space-y-4 text-white/90 leading-relaxed">
            <Content />
          </div>
          <SeoCta />
          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="font-bold mb-3" style={{ color: '#FFD700' }}>और पढ़ें</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {blogPosts.filter((p) => p.slug !== post.slug).map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="hover:underline" style={{ color: '#FFD700' }}>
                  {p.title} →
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;
