"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqsData";
import { Search, HelpCircle, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(faqsData.map((f) => f.category))];

  const filteredFaqs = faqsData.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || f.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="NEED HELP?"
        title="Frequently Asked Questions"
        description="Find clear answers to common questions about our charitable programs, Zakat eligibility, donation receipts, and volunteering opportunities."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by keyword (e.g. Zakat, Donate, Volunteer, Audit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#16A34A] focus:outline-none text-sm transition-all shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#042E3A] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Component */}
          {filteredFaqs.length > 0 ? (
            <Accordion items={filteredFaqs} />
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              No answers matching your search. Please reach out to our team directly below.
            </div>
          )}

          {/* Still Have Questions Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-50 to-emerald-50/60 border border-teal-200 text-center space-y-4">
            <h3 className="text-xl font-black text-[#042E3A]">
              Still Have Unanswered Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Our donor relations and community support desk is here to provide personalized guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#042E3A] text-white text-xs font-bold"
              >
                <PhoneCall size={14} />
                <span>Call Helpline</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50"
              >
                <Mail size={14} />
                <span>Submit Inquiry Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
