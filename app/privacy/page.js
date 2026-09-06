import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Privacy Policy – Roysons Trust",
  description:
    "Review how Roysons Trust protects donor records, beneficiary confidentiality, and website visitor privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="LEGAL & PRIVACY"
        title="Privacy & Data Protection Policy"
        description="Roysons Trust is committed to the highest standards of data privacy, ethical confidentiality, and secure handling of donor and beneficiary information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <p className="text-xs text-slate-400">
            Last Updated: January 2026
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">1. Introduction &amp; Commitment</h2>
          <p>
            Roysons Trust ("we", "us", or "our") is dedicated to protecting the privacy, dignity, and confidential personal data of all donors, volunteers, beneficiaries, and website users. This Privacy Policy governs the collection, processing, and safeguarding of information obtained through our website and philanthropic operations.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">2. Information We Collect</h2>
          <p>We may collect information under the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Donor Information:</strong> Name, email address, contact numbers, and contribution allocations necessary for tax receipting and audit compliance.</li>
            <li><strong>Volunteer Information:</strong> Educational background, professional qualifications, availability, and emergency contact details.</li>
            <li><strong>Beneficiary Data:</strong> Strict medical, economic, and identity records collected solely to determine welfare eligibility in accordance with our Safeguarding Policy.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#042E3A]">3. How Information is Used</h2>
          <p>Personal data is used strictly for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing voluntary charitable pledges and issuing verifiable tax deduction receipts.</li>
            <li>Directing Zakat and Sadaqah funds to verified Mustahiqeen in accordance with Shariah protocols.</li>
            <li>Transmitting quarterly impact reports and field updates (only upon explicit subscription).</li>
            <li>Fulfilling statutory reporting obligations to tax authorities and regulatory bodies.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#042E3A]">4. Strict Non-Disclosure &amp; Security</h2>
          <p>
            Roysons Trust maintains a zero-tolerance policy against the sale, lease, or commercial exploitation of donor lists or beneficiary data. All electronic data is secured with industry-standard encryption, firewalls, and restricted employee access protocols.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">5. Contact Us Regarding Data Privacy</h2>
          <p>
            For inquiries regarding your stored information, to request deletion of non-statutory records, or to update your preferences, please contact our Compliance Officer at <strong>privacy@roysonstrust.org</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
