import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { reportsData } from "@/data/reportsData";
import {
  ShieldCheck,
  FileText,
  Download,
  Eye,
  CheckCircle2,
  PieChart,
  Building2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Transparency & Reports – Audited Financials & Governance",
  description:
    "Review Roysons Trust audited annual statements, fund expenditure breakdowns, Shariah compliance reports, and legal governance charters.",
};

export default function TransparencyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="ETHICAL STEWARDSHIP"
        title="Transparency Builds Trust"
        description="We believe that uncompromising accountability, independent audits, and transparent reporting are the bedrock of public confidence in charitable work."
        breadcrumbs={[{ label: "Transparency & Reports" }]}
      />

      {/* Governance & Fiduciary Commitment */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#16A34A] flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-bold text-[#042E3A]">
                Statutory Independent Audits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our financial accounts are audited annually by certified chartered accountants in accordance with statutory non-profit standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#0F766E] flex items-center justify-center">
                <PieChart size={24} />
              </div>
              <h3 className="text-base font-bold text-[#042E3A]">
                Zero Zakat Deduction Model
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core overheads are underwritten by corporate endowments, guaranteeing 100% direct Tamleek transfer of Zakat contributions to beneficiaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0284C7] flex items-center justify-center">
                <Building2 size={24} />
              </div>
              <h3 className="text-base font-bold text-[#042E3A]">
                FBR &amp; Trust Act Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered non-profit entity with regular annual tax filings and compliance certificates from competent regulatory bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Downloads Section */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PUBLIC DISCLOSURES"
            title="Annual Reports &amp; Financial Statements"
            subtitle="Explore our annual reporting records. All documents are available for verification and public inspection."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {reportsData.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-[#0F766E] font-bold">
                      {doc.year}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-semibold">{doc.type}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-400">{doc.size}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#042E3A]">
                    {doc.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {doc.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] text-amber-700 font-medium pt-1">
                    {doc.placeholderNotice}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Request for Document Copy: ${encodeURIComponent(doc.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <Eye size={14} />
                    <span>Request Copy</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Download Inquiries: ${encodeURIComponent(doc.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#042E3A] hover:bg-[#0F766E] text-white text-xs font-bold transition-colors"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 max-w-4xl mx-auto flex items-start gap-3 text-xs text-slate-600">
            <AlertCircle size={18} className="text-[#0F766E] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Note on Public Records:</strong> In adherence to non-profit verification standards, certified physical and digital copies of all financial statements and registration documents can also be reviewed in person at our secretariat in Lahore.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
