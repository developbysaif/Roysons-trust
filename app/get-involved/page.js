import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { Users, Handshake, Building2, ArrowRight, Heart } from "lucide-react";

export const metadata = {
  title: "Get Involved – Volunteer, Partner, or Support Roysons Trust",
  description:
    "Join Roysons Trust as a passionate volunteer, philanthropic partner, or corporate CSR collaborator to create scalable, lasting social impact.",
};

export default function GetInvolvedPage() {
  const pathways = [
    {
      title: "Volunteer",
      tagline: "Give your time, skills and energy to support meaningful community initiatives.",
      icon: Users,
      href: "/volunteer",
      cta: "Volunteer Now",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      accent: "text-[#16A34A]",
      features: [
        "Participate in rural diagnostic medical camps",
        "Tutor scholarship students in STEM subjects",
        "Mobilize emergency flood and disaster relief kits",
        "Contribute professional photography & IT skills",
      ],
    },
    {
      title: "Partner With Us",
      tagline: "Collaborate with Roysons Trust to create sustainable social impact.",
      icon: Handshake,
      href: "/partnerships",
      cta: "Become a Partner",
      bgGradient: "from-teal-500/10 to-cyan-500/10",
      accent: "text-[#0F766E]",
      features: [
        "Co-sponsor community clean water filtration plants",
        "Adopt underprivileged schools for infrastructure overhaul",
        "Fund hospital surgical and maternal healthcare wings",
        "Deploy joint grassroots research & capacity workshops",
      ],
    },
    {
      title: "Corporate Partnership",
      tagline: "Work with us through CSR and community development initiatives.",
      icon: Building2,
      href: "/partnerships#corporate",
      cta: "Explore CSR",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      accent: "text-[#0284C7]",
      features: [
        "Tax-deductible institutional CSR disbursements",
        "Structured corporate employee volunteer days",
        "Transparent third-party audit reports & impact analytics",
        "Dedicated corporate recognition & naming options",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="JOIN THE MOVEMENT"
        title="Be Part of the Transformational Change"
        description="Whether through your professional skills, community service, or corporate partnership, your involvement magnifies our capacity to uplift lives."
        breadcrumbs={[{ label: "Get Involved" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENGAGEMENT PATHWAYS"
            title="Three Meaningful Ways to Collaborate"
            subtitle="Choose how you wish to make an enduring impact with Roysons Trust."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/80 hover:border-[#0F766E] shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#16A34A] flex items-center justify-center">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-2xl font-black text-[#042E3A]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.tagline}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#042E3A] hover:bg-[#0F766E] text-white font-black text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Donation Banner */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center mx-auto">
            <Heart size={20} className="fill-emerald-600" />
          </div>
          <h3 className="text-2xl font-black text-[#042E3A]">
            Prefer to Support Financially?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Every contribution enables us to reach another school, equip another health camp, or build a clean water plant.
          </p>
          <div className="pt-2">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#0F766E] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>Make a Donation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
