import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Terms & Conditions – Roysons Trust",
  description:
    "Review the operational terms, donation terms, and governance policies governing the use of the Roysons Trust platform.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="LEGAL & TERMS"
        title="Terms &amp; Conditions of Use"
        description="Please review the foundational terms, conditions, and charitable guidelines governing your interaction with the Roysons Trust website."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <p className="text-xs text-slate-400">
            Effective Date: January 2026
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">1. Agreement to Terms</h2>
          <p>
            By accessing or utilizing the digital platform of Roysons Trust, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, you should discontinue use of the platform immediately.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">2. Voluntary Nature of Donations</h2>
          <p>
            All monetary contributions made to Roysons Trust are voluntary gifts dedicated to public welfare and charitable purposes. Donations designated as Zakat are segregated and distributed strictly according to Shariah rules. Because donations are immediately committed to field procurement, education fees, or surgical interventions, donations are considered irrevocable unless transferred in manifest error.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">3. Intellectual Property &amp; Trademarks</h2>
          <p>
            All content, brand insignias, logos, photographs, text, and visual media displayed on this site are the exclusive property of Roysons Trust or ROYSONS Group, protected under applicable intellectual property laws. Unauthorized reproduction or commercial use is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">4. Volunteer &amp; Partnership Disclaimers</h2>
          <p>
            Submission of an application for volunteering or partnership does not constitute a binding employment contract or commercial agreement. The Trust reserves the right to accept or decline volunteer or partnership requests based on internal vetting criteria and safety standards.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in Lahore, Pakistan.
          </p>
        </div>
      </section>
    </div>
  );
}
