import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import StoryCard from "@/components/ui/StoryCard";
import { storiesData } from "@/data/storiesData";
import { Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Success Stories – Dignity & Transformation",
  description:
    "Explore respectful, human-centered narratives illustrating the generational impact of Roysons Trust education, healthcare, and livelihood interventions.",
};

export default function StoriesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="VOICES OF HOPE"
        title="Stories of Change &amp; Dignity"
        description="Behind every statistic is a human being with aspirations, resilience, and boundless potential. These verified transformation stories show the life-changing ripple effect of your generosity."
        breadcrumbs={[{ label: "Success Stories" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="TRANSFORMATIONAL IMPACT"
            title="Real Journeys of Growth &amp; Self-Reliance"
            subtitle="To protect the privacy and human honor of beneficiaries, aliases and dignified portraits are respectfully utilized."
          />

          <div className="space-y-8">
            {storiesData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-slate-600 flex items-start gap-3">
            <ShieldCheck size={18} className="text-[#0F766E] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Dignity &amp; Ethical Safeguarding Note:</strong> Roysons Trust complies strictly with global humanitarian child and beneficiary safeguarding standards. Real identities and sensitive personal documentation are never publicly broadcast.
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#042E3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Help Us Write the Next Story of Hope
          </h3>
          <p className="text-xs sm:text-sm text-slate-100 font-medium max-w-lg mx-auto">
            Your single contribution could be the turning point in a child’s education or a mother’s path to self-sufficiency.
          </p>
          <div className="pt-2">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Heart size={14} className="fill-white" />
              <span>Support a Life Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
