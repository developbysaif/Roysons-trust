"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { galleryData } from "@/data/galleryData";
import { Filter, Eye, Tag, MapPin } from "lucide-react";

const CATEGORIES = [
  "All",
  "Education",
  "Healthcare",
  "Food Distribution",
  "Community",
  "Relief",
  "Volunteers",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="VISUAL ARCHIVE"
        title="Field Dispatches &amp; Media Gallery"
        description="A photographic record of our community medical camps, scholarship ceremonies, clean water installations, and relief convoys."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 mr-2">
              <Filter size={14} className="text-[#0F766E]" />
              Filter Gallery:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#042E3A] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-teal-300">
                      {item.category}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <Eye size={16} />
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold line-clamp-2">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="text-[11px] text-slate-300 flex items-center gap-1">
                        <MapPin size={11} className="text-emerald-400" />
                        <span>{item.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Always-Visible Category Tag on Mobile */}
                <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity lg:hidden">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-bold text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No gallery images found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
