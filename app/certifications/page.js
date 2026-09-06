import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { certsData } from "@/data/certsData";
import { ShieldCheck, FileCheck, Award, Eye, Download, AlertCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Registration & Certifications – Accountability & Legal Standing",
  description:
    "Verify the legal non-profit standing, Trust Deed registration, FBR NTN, tax exemptions, and Shariah compliance certificates of Roysons Trust.",
};

export default function CertificationsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="LEGAL & REGULATORY STANDING"
        title="Building Trust Through Accountability"
        description="Roysons Trust operates in full conformity with the statutory legal requirements of the Government of Pakistan and international non-profit transparency codes."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Certifications" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="STATUTORY CREDENTIALS"
            title="Official Registrations &amp; Authorizations"
            subtitle="Every certificate and registration is verifiable with the relevant issuing regulatory bodies."
          />

          <div className="space-y-5">
            {certsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      {item.status}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-semibold">{item.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#042E3A]">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#0F766E]">
                    Issuing Authority: {item.authority}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 text-xs font-mono font-bold text-slate-800">
                    Reference: {item.registrationNo}
                  </div>

                  <p className="text-[11px] text-amber-700 italic pt-1">
                    {item.notice}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Inquiry on Credential: ${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <Eye size={14} />
                    <span>View Public Filing</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Request Certified Copy: ${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#042E3A] hover:bg-[#0F766E] text-white text-xs font-bold transition-colors"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#0F766E]">
              <AlertCircle size={16} />
              <span>Official Verification Protocol</span>
            </div>
            <p className="leading-relaxed">
              Donors and institutional partners seeking certified verified true copies of our Trust Deed, FBR 80G tax exemption notifications, or Shariah Fatwas may inspect original records at the Trust’s Head Secretariat or email our Legal Compliance Desk at <strong>compliance@roysonstrust.org</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
