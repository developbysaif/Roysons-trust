import PageHero from "@/components/ui/PageHero";
import ProgramCard from "@/components/ui/ProgramCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { programsData } from "@/data/programsData";
import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Our Programs – Areas of Humanitarian Impact",
  description:
    "Explore the 6 core pillars of Roysons Trust: Education, Healthcare, Food Security, Emergency Relief, Clean Water, and Women Empowerment.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="STRATEGIC INTERVENTIONS"
        title="Our Areas of Impact"
        description="We design and deliver high-impact, community-owned humanitarian programs that address urgent needs while building lasting resilience and self-sufficiency."
        breadcrumbs={[{ label: "Our Programs" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PORTFOLIO OF CHANGE"
            title="Comprehensive Community Empowerment"
            subtitle="Each program is backed by direct field tracking, verified beneficiaries, and independent third-party audit oversight."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Support Banner */}
      <section className="py-16 bg-gradient-to-r from-[#042E3A] to-[#0F766E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Support a Dedicated Cause
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/80 max-w-lg mx-auto">
            You can direct your Zakat or Sadaqah donation to any specific program of your choice with complete transparency.
          </p>
          <div className="pt-2">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Heart size={15} className="fill-white" />
              <span>Donate to a Program</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
