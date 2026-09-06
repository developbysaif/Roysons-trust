import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
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
  title: "Contact Us – Secretariat & Community Helplines",
  description:
    "Get in touch with Roysons Trust. Find office addresses, donor assistance helplines, WhatsApp support, and send an online inquiry.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="GET IN TOUCH"
        title="Let's Make a Difference Together"
        description="Whether you have questions about our ongoing projects, want to verify a donation, or wish to explore a corporate partnership, our team is here for you."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0F766E]">
                    Secretariat Headquarters
                  </span>
                  <h3 className="text-2xl font-black text-[#042E3A] mt-1">
                    Roysons Trust
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-[#16A34A] flex-shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Main Office Address</span>
                      <span className="text-slate-600 leading-relaxed">
                        {siteConfig.contact.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-teal-100 text-[#0F766E] flex-shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Telephone &amp; Helplines</span>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-slate-700 hover:text-[#0F766E] block font-semibold">
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-xs text-slate-500 block">
                        Direct Helpline: {siteConfig.contact.helpline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-[#0284C7] flex-shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Email Inquiries</span>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-700 hover:text-[#0F766E] block font-semibold">
                        {siteConfig.contact.email}
                      </a>
                      <a href={`mailto:${siteConfig.contact.donationsEmail}`} className="text-xs text-slate-500 hover:underline block">
                        Donations: {siteConfig.contact.donationsEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Visiting Hours</span>
                      <span className="text-slate-600">
                        {siteConfig.contact.hours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-500 block mb-2">
                    Official Social Channels:
                  </span>
                  <div className="flex items-center gap-2">
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
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-[#0F766E] flex items-center justify-center transition-all"
                        >
                          <Icon size={14} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps / Location Section */}
      <section className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#042E3A]">
              Secretariat Location Map
            </h3>
            <span className="text-xs text-slate-500">
              Gulberg II, Lahore, Pakistan
            </span>
          </div>

          <div className="h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative">
            <iframe
              title="Roysons Trust Location Map"
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
    </div>
  );
}
