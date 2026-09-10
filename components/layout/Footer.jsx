"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#042E3A] text-white border-t border-teal-800/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Newsletter Bar */}
      <div className="border-b border-teal-800/40 bg-[#03232c] py-5 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#2DD4BF]">
              Stay Connected With Our Impact
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Subscribe to Roysons Trust Field Dispatches
            </h3>
            <p className="text-xs sm:text-sm text-slate-100 mt-1">
              Receive quarterly updates on scholarships funded, medical camps, and community water projects.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex rounded-xl overflow-hidden border border-teal-700/50 bg-[#053744] p-1.5 focus-within:border-teal-300 transition-all">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-3 py-2 bg-transparent text-sm text-white placeholder:text-teal-300/50 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00A99D] to-[#042E3A] hover:from-[#042E3A] hover:to-[#00A99D] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg flex-shrink-0 cursor-pointer"
              >
                <Send size={14} />
                <span>Subscribe</span>
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-[#2DD4BF] mt-2 font-medium">
                ✓ Thank you for subscribing to our transparent community updates.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Column 1: Organization Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-18 sm:w-68 sm:h-22">
                <Image
                  src="/trust/Roysons-05.png"
                  alt="ROYSONS Trust"
                  fill
                  className="object-contain object-left"
                  sizes="280px"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-md font-normal">
              Roysons Trust is a registered, non-profit humanitarian institution dedicated to advancing human dignity through sustainable education, healthcare access, nutrition security, and community infrastructure.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#00A99D] flex-shrink-0 mt-0.5" />
                <span className="text-slate-100">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#00A99D] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-slate-100 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#00A99D] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-100 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-8 h-8 rounded-lg bg-[#063b49] border border-teal-700/40 flex items-center justify-center text-teal-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white hover:underline transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:underline transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white hover:underline transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white hover:underline transition-colors">Donate Now</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-300">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
              <li>
                <Link href="/news" className="hover:text-white hover:underline transition-colors">News &amp; Updates</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition-colors">Media Gallery</Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-white hover:underline transition-colors">Annual Reports</Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white hover:underline transition-colors">Registrations &amp; Certifications</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white hover:underline transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-300">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200 font-medium">
              <li>
                <Link href="/volunteer" className="hover:text-white hover:underline transition-colors">Become a Volunteer</Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white hover:underline transition-colors">Corporate CSR Partnerships</Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white hover:underline transition-colors">Ways to Help</Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white hover:underline transition-colors">Stories of Change</Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Heart size={13} className="fill-white" />
                  Support Our Mission
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-teal-800/40 bg-[#021c23] py-5 px-4 sm:px-6 lg:px-8 text-xs text-slate-300 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p suppressHydrationWarning className="text-center sm:text-left text-slate-300">
            &copy; {new Date().getFullYear()} Roysons Trust. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-teal-700">•</span>
            <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-teal-700">•</span>
            <Link href="/safeguarding" className="text-slate-300 hover:text-white transition-colors">
              Safeguarding Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
