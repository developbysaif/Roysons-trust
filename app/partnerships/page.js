import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import {
  Handshake,
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Partnerships & Corporate CSR – Scalable Social Value",
  description:
    "Collaborate with Roysons Trust through Corporate Social Responsibility (CSR), school adoption, employee giving, and sustainable community infrastructure.",
};

export default function PartnershipsPage() {
  const pillars = [
    {
      title: "Corporate CSR Deployments",
      desc: "Align your company’s statutory or voluntary CSR budgets with high-impact, verified projects in health, clean water, and education.",
      icon: Building2,
    },
    {
      title: "Community School Adoption",
      desc: "Sponsor complete school infrastructure renovation, teacher training, and student STEM labs under corporate co-branding.",
      icon: Award,
    },
    {
      title: "Clean Water Plant Sponsorship",
      desc: "Fund a solar-powered reverse osmosis water purification plant serving 5,000+ villagers with your organization's plaque.",
      icon: FileCheck,
    },
    {
      title: "Employee Giving & Volunteer Days",
      desc: "Engage your workforce through structured workplace giving, blood donation drives, and hands-on community camp volunteerism.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="COLLABORATIVE IMPACT"
        title="Together, We Can Create Greater Impact"
        description="We work with leading corporations, institutional donors, and philanthropic foundations to build scalable, accountable, and sustainable community programs."
        breadcrumbs={[{ label: "Get Involved", href: "/get-involved" }, { label: "Partnerships" }]}
      />

      {/* Why Partner Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY PARTNER WITH ROYSONS TRUST"
            title="Institutional Credibility & Zero Leakage Assurance"
            subtitle="Corporate partners choose Roysons Trust because of our engineering background, logistical agility, and audited governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0F766E] shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#0F766E] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#042E3A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Model Highlights */}
      <section id="corporate" className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Strategic Collaboration
              </span>
              <h2 className="text-3xl font-black text-[#042E3A] leading-tight">
                Complete Corporate CSR Compliance &amp; Reporting
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Roysons Trust provides corporate partners with complete turnkey project execution, including baseline needs assessments, transparent milestone reporting, third-party audit verification, and high-definition photo/video documentation suitable for annual stakeholder reports.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Official FBR tax-exemption acknowledgments for eligible CSR disbursements",
                  "Dedicated project dashboards and quarterly milestone progress reviews",
                  "Comprehensive ESG / SDG metric alignment reports for corporate disclosures",
                  "Permanent institutional recognition plaques and project handover ceremonies",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <h3 className="text-xl font-black text-[#042E3A]">
                  Initiate a Partnership Dialogue
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Connect directly with our Strategic Partnerships Directorate to customize a CSR roadmap aligned with your corporate objectives.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block mb-0.5">Direct CSR Directorate Contact:</span>
                    <span className="font-bold text-slate-800 text-sm">info@roysonstrust.org</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block mb-0.5">Corporate Helpline:</span>
                    <span className="font-bold text-slate-800 text-sm">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#042E3A] hover:bg-[#0F766E] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start a Partnership</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Logos (Real Authentic Alliances Only) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
            Institutional Technical Alliances &amp; Heritage
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="relative w-32 h-12">
              <Image src="/logos/unicef.png" alt="UNICEF Partner" fill className="object-contain" />
            </div>
            <div className="relative w-32 h-12">
              <Image src="/logos/worldhealth.png" alt="WHO Health Partner" fill className="object-contain" />
            </div>
            <div className="relative w-32 h-12">
              <Image src="/logos/siemens.png" alt="Siemens Technical Alliance" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
