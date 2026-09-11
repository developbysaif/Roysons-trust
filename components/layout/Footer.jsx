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
    <footer className="bg-black text-white border-t border-neutral-800 relative overflow-hidden">
      {/* Top Pre-Footer Newsletter Bar */}
      <div className="border-b border-neutral-800 bg-[#0a0a0a] py-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A99D]">
              Stay Connected With Our Impact
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Subscribe to Roysons Trust Field Dispatches
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Receive quarterly updates on scholarships funded, medical camps, and community water projects.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex rounded-full overflow-hidden border border-neutral-700 bg-neutral-900/80 p-1.5 focus-within:border-[#00A99D] transition-all">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-2 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-gradient px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg flex-shrink-0 cursor-pointer"
              >
                <Send size={13} />
                <span>Subscribe</span>
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-[#00A99D] mt-2 font-medium">
                ✓ Thank you for subscribing to our transparent community updates.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Organization Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-64 h-16 sm:w-72 sm:h-18 lg:w-80 lg:h-20">
                <Image
                  src="/trust/Roysons-05.png"
                  alt="ROYSONS TRUST"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="340px"
                />
              </div>
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md font-normal">
              Roysons Trust is a registered, non-profit humanitarian institution dedicated to advancing human dignity through sustainable education, healthcare access, nutrition security, and community infrastructure.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#00A99D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#00A99D] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-neutral-300 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#00A99D] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-neutral-300 hover:text-white transition-colors">
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
                    className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/mission-vision" className="hover:text-white hover:underline transition-colors">Mission &amp; Vision</Link>
              </li>
              <li>
                <Link href="/leadership-trustees" className="hover:text-white hover:underline transition-colors">Leadership &amp; Trustees</Link>
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
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <Link href="/success-stories" className="hover:text-white hover:underline transition-colors">Stories of Change</Link>
              </li>
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
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">Contact &amp; Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
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
                <Link href="/donate" className="hover:text-white hover:underline transition-colors">Make a Donation</Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/donate"
                  className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Heart size={13} className="fill-white" />
                  <span>Support Our Mission</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-neutral-800 bg-[#050505] py-5 px-4 sm:px-6 lg:px-8 text-xs text-neutral-400 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p suppressHydrationWarning className="text-center sm:text-left text-neutral-400">
            &copy; {new Date().getFullYear()} Roysons Trust. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/safeguarding" className="text-neutral-400 hover:text-white transition-colors">
              Safeguarding Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
