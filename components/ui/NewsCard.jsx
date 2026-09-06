import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default function NewsCard({ article }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden hover:border-[#0F766E]/40">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-black uppercase tracking-wider text-[#0F766E] shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} className="text-slate-400" />
              <span>{article.date}</span>
            </span>
            {article.readTime && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={13} className="text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
              </>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#042E3A] group-hover:text-[#0F766E] transition-colors mb-2.5 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0F766E] group-hover:text-[#16A34A] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
