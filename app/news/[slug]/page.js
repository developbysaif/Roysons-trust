import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  Clock,
  Share2,
  ArrowLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import NewsCard from "@/components/ui/NewsCard";
import { newsData } from "@/data/newsData";

export async function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} – Roysons Trust News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsData.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge={`NEWS / ${article.category.toUpperCase()}`}
        title={article.title}
        breadcrumbs={[
          { label: "News & Updates", href: "/news" },
          { label: article.title },
        ]}
      />

      {/* Article Content Section */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                <Calendar size={14} className="text-[#0F766E]" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <User size={14} className="text-[#0F766E]" />
                <span>{article.author}</span>
              </span>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" />
                    <span>{article.readTime}</span>
                  </span>
                </>
              )}
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                <Share2 size={13} /> Share:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://roysonstrust.org/news/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#1877f2] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
              >
                <FacebookIcon size={13} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://roysonstrust.org/news/${article.slug}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#1da1f2] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
              >
                <TwitterIcon size={13} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://roysonstrust.org/news/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#0a66c2] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
              >
                <LinkedinIcon size={13} />
              </a>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 mb-10">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="prose prose-slate max-w-none space-y-5 text-sm sm:text-base leading-relaxed text-slate-700">
            {article.content.trim().split("\n\n").map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Donation Support Box */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#042E3A] to-[#0F766E] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#2DD4BF]">
                Support Field Work
              </span>
              <h4 className="text-xl font-bold text-white">
                Help Us Keep These Initiatives Running
              </h4>
              <p className="text-xs text-teal-100/80">
                Your donation sustains our doctors, teachers, and emergency relief convoys.
              </p>
            </div>
            <Link
              href="/donate"
              className="px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex-shrink-0"
            >
              Donate Now
            </Link>
          </div>

          {/* Back to News link */}
          <div className="pt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E] hover:text-[#16A34A]"
            >
              <ArrowLeft size={14} />
              <span>Back to All News Dispatches</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#F8FAFC] border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-black text-[#042E3A] mb-6">
              More News from the Field
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <NewsCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
