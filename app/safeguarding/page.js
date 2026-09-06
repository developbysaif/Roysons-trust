import PageHero from "@/components/ui/PageHero";
import { ShieldCheck, Heart, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Safeguarding Policy – Child & Beneficiary Protection",
  description:
    "Roysons Trust policy on the ethical protection, dignity, and safeguarding of vulnerable children, patients, and marginalized communities.",
};

export default function SafeguardingPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="ETHICS & PROTECTION"
        title="Beneficiary &amp; Child Safeguarding Policy"
        description="We uphold the highest ethical standards to ensure that every child, patient, and vulnerable beneficiary is protected from harm, exploitation, or loss of human dignity."
        breadcrumbs={[{ label: "Safeguarding Policy" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-[#042E3A] flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Zero-Tolerance Principle:</strong> Roysons Trust maintains zero tolerance for any form of physical abuse, neglect, psychological mistreatment, or emotional exploitation of beneficiaries by employees, trustees, or registered volunteers.
            </span>
          </div>

          <h2 className="text-xl font-bold text-[#042E3A]">1. Scope &amp; Purpose</h2>
          <p>
            This policy applies to all trustees, officers, full-time staff, contract personnel, and field volunteers representing Roysons Trust during mobile medical camps, scholarship ceremonies, flood relief operations, and educational tutoring sessions.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">2. Child Protection Mandates</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>No child under 18 may be photographed, interviewed, or recorded without prior written consent from their parent or legal guardian.</li>
            <li>No child’s exact home address, full legal name, or sensitive family circumstances may be publicly published on marketing or social channels.</li>
            <li>Adult staff and volunteers are never permitted to remain one-on-one with a minor behind closed doors; all interactions must take place in open, monitored settings.</li>
            <li>Children participating in scholarship programs receive continuous psychological safety and anti-bullying monitoring.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#042E3A]">3. Patient &amp; Medical Privacy Protocols</h2>
          <p>
            Patients receiving free treatment or surgery subsidies through Roysons Trust are entitled to absolute medical confidentiality under international doctor-patient privilege standards. Clinical diagnostic records and surgical photographs are handled exclusively by registered healthcare practitioners.
          </p>

          <h2 className="text-xl font-bold text-[#042E3A]">4. Safe Reporting &amp; Whistleblowing Hotline</h2>
          <p>
            Any beneficiary, parent, volunteer, or member of the public who observes or suspects a violation of our Safeguarding Policy is urged to report it immediately through our confidential whistleblowing email: <strong>safeguarding@roysonstrust.org</strong> or by calling our designated Safeguarding Officer at <strong>+92 42 3571 2345</strong>. All reports are investigated with absolute impartiality and confidentiality.
          </p>
        </div>
      </section>
    </div>
  );
}
