"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { Heart, Filter } from "lucide-react";

const CATEGORIES = ["All", "Education", "Healthcare", "Relief", "Community"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="FIELD INITIATIVES"
        title="Our Active & Completed Projects"
        description="Discover our targeted humanitarian interventions across rural schools, medical clinics, flood rehabilitation zones, and clean water networks."
        breadcrumbs={[{ label: "Our Projects" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 mr-2">
              <Filter size={14} className="text-[#0F766E]" />
              Filter by Sector:
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p className="text-sm">No projects currently found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Direct Project Sponsorship CTA */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-2xl font-black text-[#042E3A]">
            Have a Specific Project You Wish to Sponsor?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Individuals and corporate CSR departments can fully or partially sponsor designated school buildings, water plants, or medical camps with dedicated naming rights and audit logs.
          </p>
          <div className="pt-2">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#0F766E] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <Heart size={14} className="fill-white" />
              <span>Sponsor a Project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
