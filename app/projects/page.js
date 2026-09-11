"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { Heart, Filter } from "lucide-react";

const CATEGORIES = [
  "All",
  "Education",
  "Healthcare",
  "Community",
  "Humanitarian",
  "Youth",
  "Development",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <PageHero
        badge="ON-GROUND ACTION"
        title="Projects That Turn Vision Into Action"
        description="Explore our field-tested initiatives delivering measurable community transformation across education, clinical healthcare, clean water, and disaster resilience."
        breadcrumbs={[{ label: "Our Projects" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-2">
              <Filter size={14} className="text-[#0f766e]" />
              <span>Filter by Sector:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0f172a] text-white shadow-md"
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
        </div>
      </section>

      {/* Direct Project Support Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Support a Dedicated Community Project
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Direct your donation to fund clean water filtration, school digital labs, or emergency medical units with zero leakage and complete verification.
          </p>
          <div className="pt-2">
            <Link
              href="/donate"
              className="btn-emerald inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-lg"
            >
              <Heart size={15} className="fill-white" />
              <span>Sponsor a Project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
