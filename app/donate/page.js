import PageHero from "@/components/ui/PageHero";
import DonationForm from "@/components/forms/DonationForm";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  Building,
  Calendar,
  Layers,
  Handshake,
  Lock,
  PhoneCall,
  FileText,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Donate Now – Your Contribution Can Create Opportunity | ROYSONS TRUST",
  description:
    "Support initiatives that help people and communities move forward. Explore donation options: One-Time, Monthly, Project-Based, and Corporate Partnerships.",
};

export default function DonatePage() {
  const donationOptions = [
    {
      title: "One-Time Donation",
      tagline: "Immediate Emergency & Welfare Relief",
      desc: "Provide immediate assistance to families facing urgent medical emergencies, hunger crises, or school fee arrears.",
      icon: Heart,
      badge: "Flexible Giving",
    },
    {
      title: "Monthly Support",
      tagline: "Sustained Generational Impact",
      desc: "Join our recurring giving circle to fund continuous orphan schooling, chronic patient medications, and monthly rations.",
      icon: Calendar,
      badge: "High Sustainability",
    },
    {
      title: "Project-Based Support",
      tagline: "Dedicated Capital Infrastructure",
      desc: "Sponsor a complete community project such as a solar RO clean water plant, school digital lab, or mobile clinic unit.",
      icon: Layers,
      badge: "Targeted Outcomes",
    },
    {
      title: "Corporate Partnership",
      tagline: "Institutional CSR Alliances",
      desc: "Collaborate with ROYSONS TRUST to implement scalable corporate social responsibility programs with full audit reporting.",
      icon: Handshake,
      badge: "Institutional Scale",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <PageHero
        badge="MAKE A DIFFERENCE"
        title="Your Contribution Can Create Opportunity"
        description="Support initiatives that help people and communities move forward."
        breadcrumbs={[{ label: "Donate Now" }]}
      />

      {/* 2. WHY DONATE SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009688]" />
            Fiduciary Custody
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Why Donate to ROYSONS TRUST?
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            When you contribute to ROYSONS TRUST, you are investing directly in verified, measurable human welfare. Through corporate endowments covering baseline administrative operations, we ensure that public donations flow directly to field execution with uncompromised integrity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#009688] flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Direct Delivery</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Zero administrative cuts on dedicated Zakat funds, deployed with direct Tamleek to verified families.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#00779E] flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Audited Accounts</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Independent statutory audits conducted annually with open financial disclosure.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#059669] flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-bold text-[#111111]">Verified Beneficiaries</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Empirical needs assessments ensure assistance reaches those in genuine acute hardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DONATION OPTIONS (4 ELEGANT CARDS) */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GIVING PATHWAYS"
            title="Donation Options"
            subtitle="Choose the giving model that best aligns with your philanthropic goals and impact vision."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] group-hover:scale-110 flex items-center justify-center transition-transform shadow-xs">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f766e] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                        {opt.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                        {opt.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0f766e] mt-1">
                        {opt.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>

                  <a
                    href="#donation-form"
                    className="pt-4 border-t border-slate-100 inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2563eb] group-hover:underline"
                  >
                    <span>Select Option</span>
                    <span>&darr;</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DONATION FORM EXPERIENCE */}
      <section id="donation-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Donation Form (8 cols) */}
            <div className="lg:col-span-8">
              <DonationForm />
            </div>

            {/* Right: Assurance & Helpline Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Shariah & Zakat Card */}
              <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck size={18} />
                  <span>100% Zakat Tamleek</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Dedicated Zakat Fund
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zakat donations are strictly segregated into verified Shariah-compliant accounts. 100% of your contribution is delivered directly to verified Mustahiqeen for medicine, food, and education with zero administrative deductions.
                </p>
              </div>

              {/* Donor Relations Helpline */}
              <div className="p-6 rounded-3xl bg-black border border-neutral-800 text-white space-y-3">
                <div className="flex items-center gap-2 text-neutral-300 font-semibold text-xs uppercase tracking-wider">
                  <PhoneCall size={16} className="text-[#00A99D]" />
                  <span>Donor Support Helpline</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Need Help with Your Donation?
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  Our donor relations desk can assist you with custom allocations, international wire instructions, or formal tax receipts.
                </p>
                <div className="pt-2 space-y-1 text-xs font-mono">
                  <p className="text-white font-bold text-sm">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-neutral-400">
                    {siteConfig.contact.donationsEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENCY SECTION */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-neutral-800 border border-neutral-200 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009688]" />
            ACCOUNTABILITY GUARANTEE
          </span>

          <h2 className="section-heading text-[#111111]">
            Your Trust Matters
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Donations made to ROYSONS TRUST are handled with utmost institutional responsibility, fiduciary integrity, and strict legal compliance. We are committed to transparent reporting, third-party audit accountability, and providing formal tax-deductible documentation for every verified contribution.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#0f766e]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} />
              <span>Published Annual Reports</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} />
              <span>Independent External Audit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} />
              <span>Tax Exemption Certificates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
