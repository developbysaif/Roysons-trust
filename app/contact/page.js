import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us – Let's Create Meaningful Change Together | ROYSONS TRUST",
  description:
    "Whether you want to support our mission, collaborate with us or learn more about our programs, connect with ROYSONS TRUST.",
};

const CONTACT_FAQS = [
  {
    question: "How can I support ROYSONS TRUST?",
    answer:
      "You can support ROYSONS TRUST through one-time or monthly donations, dedicating Zakat or Sadaqah to verified programs, sponsoring a student's annual education, or partnering with us through corporate CSR allocations. Visit our /donate page for transparent banking instructions.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "We welcome passionate volunteers including medical practitioners, nurses, educators, university students, and logistics specialists. You can participate in mobile clinical camps, book drives, and emergency ration distribution. Contact our volunteer coordination team via email or our volunteer portal.",
  },
  {
    question: "How can my organization partner with the Trust?",
    answer:
      "ROYSONS TRUST regularly forms institutional alliances with corporate CSR departments, non-governmental organizations, and municipal authorities. We provide tailored project proposals, joint monitoring frameworks, and comprehensive statutory audit reports for all corporate funding.",
  },
  {
    question: "How can I support a specific program?",
    answer:
      "When making a donation or inquiry, you can designate your contribution to any of our 6 core focus areas: Education & Skills, Healthcare & Wellbeing, Community Development, Youth Empowerment, Humanitarian Support, or Sustainable Development. Your funds will be restricted exclusively to that cause.",
  },
  {
    question: "How can I learn about ongoing projects?",
    answer:
      "You can explore our active field operations on our /projects page, which features live status indicators, beneficiary reach, and photo galleries. We also publish quarterly dispatches and audited impact summaries on our /impact page.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach our secretariat headquarters in Lahore via telephone at +92 42 3571 2345, send an inquiry via email to info@roysonstrust.org, or submit the digital inquiry form below. Our donor support desk operates Monday through Saturday from 9:00 AM to 6:00 PM PKT.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <PageHero
        badge="CONNECT WITH US"
        title="Let's Create Meaningful Change Together"
        description="Whether you want to support our mission, collaborate with us or learn more about our programs, connect with ROYSONS TRUST."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 2. Contact Information & Form Layout */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Official Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0f766e]">
                    Secretariat Headquarters
                  </span>
                  <h3 className="text-2xl font-black text-[#0f172a] mt-1">
                    ROYSONS TRUST
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Office Address */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-[#0f766e] shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Office Address
                      </span>
                      <span className="text-slate-600 leading-relaxed">
                        {siteConfig.contact.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563eb] shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Phone &amp; Helplines
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                        className="text-slate-700 hover:text-[#2563eb] block font-semibold"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-xs text-slate-500 block">
                        Helpline: {siteConfig.contact.helpline}
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-[#16a34a] shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Email Inquiries
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-700 hover:text-[#0f766e] block font-semibold"
                      >
                        {siteConfig.contact.email}
                      </a>
                      <a
                        href={`mailto:${siteConfig.contact.donationsEmail}`}
                        className="text-xs text-slate-500 hover:underline block"
                      >
                        Donations: {siteConfig.contact.donationsEmail}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Working Hours
                      </span>
                      <span className="text-slate-600">
                        {siteConfig.contact.hours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-500 block mb-3">
                    Official Verified Social Channels:
                  </span>
                  <div className="flex items-center gap-2.5">
                    {[
                      { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                      { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                      { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                      { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                      { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
                    ].map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={idx}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-[#0f766e] flex items-center justify-center transition-all shadow-2xs"
                        >
                          <Icon size={15} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0f766e]">
                Location Coordinates
              </span>
              <h3 className="text-xl font-bold text-[#0f172a]">
                Secretariat Location Map
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              [Verified Office Location: Gulberg II, Lahore, Pakistan]
            </span>
          </div>

          <div className="h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
            <iframe
              title="ROYSONS TRUST Verified Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.736021295325!2d74.3312!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a55555555%3A0x1111111111111111!2sGulberg%2C%20Lahore!5e0!3m2!1sen!2spk!4v1600000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION (6 SPECIFIED QUESTIONS) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FREQUENT QUESTIONS"
            title="Frequently Asked Questions"
            subtitle="Clear, verified answers regarding donations, governance, volunteering, and program partnerships."
          />

          <Accordion items={CONTACT_FAQS} />
        </div>
      </section>
    </div>
  );
}
