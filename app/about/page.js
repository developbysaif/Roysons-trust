import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  Heart,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Building2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us – Purpose-Driven Institutional Stewardship",
  description:
    "Learn about the mission, vision, founding history, and humanitarian principles guiding Roysons Trust across Pakistan.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Human Dignity (Izzat)",
      desc: "Every individual is served with compassion, honor, and confidentiality, never reducing beneficiaries to mere statistics.",
      icon: Heart,
    },
    {
      title: "Absolute Transparency (Amanat)",
      desc: "We maintain unyielding fiduciary integrity with independently audited financial accounts and direct field tracking.",
      icon: ShieldCheck,
    },
    {
      title: "Sustainable Self-Reliance",
      desc: "We don't merely distribute temporary aid; we equip students with literacy and women with vocational livelihoods.",
      icon: Target,
    },
    {
      title: "Strict Shariah Governance",
      desc: "Dedicated Zakat accounts governed by qualified Shariah scholars ensure 100% direct Tamleek to verified Mustahiqeen.",
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="ABOUT ROYSONS TRUST"
        title="Purpose-Driven Welfare for Generational Change"
        description="Roysons Trust is a non-profit humanitarian foundation established to empower vulnerable communities through high-impact initiatives in education, healthcare, clean water, and disaster relief."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Mission Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Target size={24} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#16A34A]">
                  Our Enduring Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#042E3A]">
                  To uplift underprivileged lives through sustainable, dignity-first human empowerment.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We strive to eliminate systemic barriers in elementary education, universal healthcare access, emergency hunger relief, and vocational capability, enabling individuals to achieve self-sufficiency and thrive in healthy, resilient communities.
                </p>
              </div>

              <div className="pt-6 border-t border-emerald-200/60 flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                <CheckCircle2 size={16} />
                <span>Action-Oriented Grassroots Programs</span>
              </div>
            </div>

            {/* Vision Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-teal-50/60 border border-teal-200/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F766E] text-white flex items-center justify-center">
                  <Compass size={24} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0F766E]">
                  Our Future Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#042E3A]">
                  A nation where every child can learn, every patient is healed, and every family lives with dignity.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We envision an equitable Pakistan where quality schooling is accessible in every remote village, where no life is lost for lack of essential medicine, and where sustainable social development creates lasting intergenerational prosperity.
                </p>
              </div>

              <div className="pt-6 border-t border-teal-200/60 flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                <CheckCircle2 size={16} />
                <span>Long-Term Systemic Value Creation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & History Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/trust/roysons_trust_hero.jpg"
                  alt="Roysons Trust Community Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Our Genesis
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#042E3A] tracking-tight">
                Born From a Deep Sense of Stewardship
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Roysons Trust was conceived by the leadership of ROYSONS Group as an independent, institutionalized philanthropic vehicle to channel meaningful corporate social responsibility and community welfare directly to the grassroots.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                What began as localized winter food relief and primary school stipends has evolved into a multidisciplinary trust executing regular rural diagnostic clinics, full intermediate scholarships, solar-powered reverse osmosis clean water plants, and emergency flood relief deployments across Punjab, Sindh, and Khyber Pakhtunkhwa.
              </p>

              <div className="pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0F766E] hover:text-[#16A34A] transition-colors"
                >
                  <span>Meet Our Board of Trustees</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR GUIDING COMPASS"
            title="The Core Values That Drive Every Project"
            subtitle="Our programs are executed according to strict ethical standards, ensuring transparent stewardship of public trust."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0F766E] shadow-sm hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#042E3A]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#042E3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Join Hands With Roysons Trust
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/80 max-w-xl mx-auto">
            Discover how you can contribute as an individual donor, corporate CSR partner, or community volunteer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/donate"
              className="px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
