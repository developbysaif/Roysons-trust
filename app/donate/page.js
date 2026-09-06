import PageHero from "@/components/ui/PageHero";
import DonationForm from "@/components/forms/DonationForm";
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  HelpCircle,
  PhoneCall,
  Lock,
  Building2,
  Award,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Donate – Support Education, Healthcare & Humanitarian Relief",
  description:
    "Make your secure Zakat or Sadaqah donation to Roysons Trust. 100% direct Tamleek, zero administrative deductions on Zakat, and full audited transparency.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="MAKE AN IMPACT"
        title="Your Support Can Change a Life"
        description="Every contribution is handled with utmost fiduciary responsibility, transparency, and directed toward meaningful community relief and empowerment."
        breadcrumbs={[{ label: "Donate" }]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Main Interactive Donation Experience (8 cols) */}
            <div className="lg:col-span-8">
              <DonationForm />
            </div>

            {/* Right: Trust & Assurance Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Zakat Compliance Card */}
              <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-[#16A34A] font-bold text-xs uppercase tracking-wider">
                  <Award size={18} />
                  <span>100% Shariah Compliant Zakat</span>
                </div>
                <h3 className="text-lg font-black text-[#042E3A]">
                  Dedicated Zakat Fund
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zakat donations are strictly segregated into dedicated bank accounts. Funds are transferred with direct Tamleek to verified Mustahiq (eligible) families for medical care, food, and education, with 0% administrative deductions.
                </p>
                <div className="pt-2 border-t border-emerald-200/60 text-xs font-semibold text-[#0F766E] flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>Shariah Advisory Oversight</span>
                </div>
              </div>

              {/* Tax Credit Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-[#0F766E] font-bold text-xs uppercase tracking-wider">
                  <Building2 size={18} />
                  <span>Tax Exemption &amp; Credits</span>
                </div>
                <h3 className="text-lg font-black text-[#042E3A]">
                  Official Tax Receipts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Roysons Trust issues formal non-profit acknowledgment receipts for individual and corporate donors, eligible for prescribed tax benefits under relevant income tax laws.
                </p>
                <Link
                  href="/certifications"
                  className="text-xs font-bold text-[#0F766E] hover:underline inline-block pt-1"
                >
                  View Non-Profit NTN &amp; Approvals →
                </Link>
              </div>

              {/* Helpline Card */}
              <div className="p-6 rounded-3xl bg-[#042E3A] text-white space-y-3">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
                  <PhoneCall size={16} />
                  <span>Donor Support Helpline</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Need Help with Your Donation?
                </h3>
                <p className="text-xs text-teal-100/75 leading-relaxed">
                  Our donor relations desk is available to assist you with wire instructions, custom allocations, or cash collections:
                </p>
                <div className="pt-2 space-y-1 text-xs">
                  <p className="font-mono text-emerald-400 font-bold text-sm">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-teal-200/80">
                    {siteConfig.contact.donationsEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
