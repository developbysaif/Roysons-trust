"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Heart,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  BookOpen,
  Briefcase,
  HelpCircle,
  FileText,
  Image as ImageIcon,
  Building2,
  Compass,
  Target,
  HandHeart,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const DROPDOWN_ICONS = {
  // About
  "About Roysons Trust": Building2,
  "Mission & Vision": Target,
  "Leadership & Trustees": Users,
  // Our Work
  "Our Programs": BookOpen,
  "Our Projects": Briefcase,
  "Our Impact": Sparkles,
  "Success Stories": Heart,
  // Get Involved
  "Donate Now": Heart,
  "Volunteer With Us": Users,
  "Corporate Partnerships / CSR": HandHeart,
  // Resources
  "News & Updates": FileText,
  "Media Gallery": ImageIcon,
  "Transparency & Reports": ShieldCheck,
  "Frequently Asked Questions": HelpCircle,
};

const DROPDOWN_FOOTERS = {
  "Our Work": {
    badge: "Measurable Reach",
    text: "Explore Our Live 2026 Impact Dashboard",
    href: "/impact",
    icon: Sparkles,
  },
  "Get Involved": {
    badge: "Direct Giving",
    text: "100% Direct Zakat Delivery Guarantee",
    href: "/donate",
    icon: Heart,
  },
  Resources: {
    badge: "Financial Stewardship",
    text: "Download Published Annual Audit Statements",
    href: "/transparency",
    icon: FileText,
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navGroups = [
    {
      title: "About",
      subtitle: "Heritage & Governance",
      items: siteConfig.nav.about,
    },
    {
      title: "Our Work",
      subtitle: "Strategic Initiatives",
      items: siteConfig.nav.ourWork,
    },
    {
      title: "Get Involved",
      subtitle: "Support Our Mission",
      items: siteConfig.nav.getInvolved,
    },
    {
      title: "Resources",
      subtitle: "Audits & Field News",
      items: siteConfig.nav.resources,
    },
  ];

  return (
    <>
      {/* Top Helpline Sub-bar */}
      <div className="bg-[#042E3A] text-white text-xs py-2 px-4 sm:px-8 border-b border-teal-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-200 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#00A99D]" />
              <span className="font-semibold text-white">Registered Philanthropic Trust</span>
            </span>
            <span className="hidden sm:inline text-teal-500">•</span>
            <span className="hidden sm:inline text-slate-100">100% Zakat &amp; Sadaqah Compliant</span>
          </div>

          <div className="flex items-center gap-4 text-slate-100 font-medium ml-auto">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-slate-100 hover:text-white transition-colors"
            >
              <PhoneCall size={13} className="text-[#00A99D]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-teal-700">|</span>
            <Link href="/transparency" className="text-teal-300 hover:text-white transition-colors font-medium">
              Audit Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
            : "bg-white/95 backdrop-blur-sm py-3.5 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none py-1 shrink-0">
              <div className="relative w-52 h-14 sm:w-60 sm:h-16 lg:w-68 lg:h-[72px] xl:w-76 xl:h-20 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/trust/Roysons-05.png"
                  alt="ROYSONS Trust"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (Strictly Single Line) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap">
              <Link
                href="/"
                className={`whitespace-nowrap px-3 py-2 text-[15px] xl:text-base font-bold rounded-xl transition-all duration-200 ${
                  pathname === "/"
                    ? "text-[#00A99D] bg-teal-50/90 shadow-xs"
                    : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/60"
                }`}
              >
                Home
              </Link>

              {navGroups.map((group) => {
                const footerData = DROPDOWN_FOOTERS[group.title];
                const isGroupActive = group.items.some((i) => pathname === i.href);
                const isDropdownOpen = activeDropdown === group.title;

                return (
                  <div
                    key={group.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(group.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-[15px] xl:text-base font-bold rounded-xl transition-all duration-200 ${
                        isDropdownOpen || isGroupActive
                          ? "text-[#00A99D] bg-teal-50/90 shadow-xs"
                          : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/60"
                      }`}
                    >
                      <span className="whitespace-nowrap">{group.title}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 text-slate-400 group-hover:text-[#00A99D] shrink-0 ${
                          isDropdownOpen ? "rotate-180 text-[#00A99D]" : ""
                        }`}
                      />
                    </button>

                    {/* Rich Functional Mega-Dropdown */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-[380px] xl:w-[410px] transition-all duration-300 origin-top-left z-50 ${
                        isDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-2"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
                        {/* Dropdown Header Badge */}
                        <div className="bg-slate-50/90 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-widest text-[#00A99D]">
                            {group.title} — {group.subtitle}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">
                            {group.items.length} sections
                          </span>
                        </div>

                        {/* Dropdown Items List */}
                        <div className="p-2 space-y-1">
                          {group.items.map((item) => {
                            const ItemIcon = DROPDOWN_ICONS[item.name] || Sparkles;
                            const isCurrent = pathname === item.href;

                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                                  isCurrent
                                    ? "bg-[#00A99D]/10 border border-[#00A99D]/30"
                                    : "hover:bg-teal-50/70 border border-transparent"
                                }`}
                              >
                                {/* Gradient Icon Box Matching Image 2 */}
                                <div className="w-10 h-10 rounded-xl trust-gradient-primary flex items-center justify-center text-white shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:shadow-[0_4px_14px_rgba(0,169,157,0.4)] transition-all">
                                  <ItemIcon size={18} />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-[#042E3A] group-hover/item:text-[#00A99D] transition-colors truncate">
                                      {item.name}
                                    </span>
                                    <ArrowRight
                                      size={14}
                                      className="text-[#00A99D] opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all shrink-0 ml-1"
                                    />
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Functional Action Footer */}
                        {footerData && (
                          <div className="bg-gradient-to-r from-[#042E3A]/5 via-[#00A99D]/10 to-transparent p-3 border-t border-slate-100">
                            <Link
                              href={footerData.href}
                              className="flex items-center justify-between text-xs font-bold text-[#042E3A] hover:text-[#00A99D] transition-colors p-1"
                            >
                              <div className="flex items-center gap-2">
                                <footerData.icon size={15} className="text-[#00A99D]" />
                                <span>{footerData.text}</span>
                              </div>
                              <ArrowRight size={13} className="text-[#00A99D]" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Link
                href="/contact"
                className={`whitespace-nowrap px-3 py-2 text-[15px] xl:text-base font-bold rounded-xl transition-all duration-200 ${
                  pathname === "/contact"
                    ? "text-[#00A99D] bg-teal-50/90 shadow-xs"
                    : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/60"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA (Single Line Strictly) */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              <Link
                href="/volunteer"
                className="whitespace-nowrap hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-black uppercase tracking-wider text-[#042E3A] bg-teal-50/80 hover:bg-[#00A99D] hover:text-white rounded-xl border border-[#00A99D]/40 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 shrink-0"
              >
                <Users size={14} className="shrink-0" />
                <span className="whitespace-nowrap">VOLUNTEER</span>
              </Link>

              <Link
                href="/donate"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl trust-btn-gradient text-white text-xs xl:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-[0_8px_25px_rgba(0,169,157,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 shrink-0"
              >
                <Heart size={15} className="fill-white animate-pulse shrink-0" />
                <span className="whitespace-nowrap">DONATE NOW</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <Link
                href="/donate"
                className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-2 rounded-xl trust-btn-gradient text-white text-xs font-black uppercase tracking-wider shadow-sm"
              >
                <Heart size={14} className="fill-white" />
                <span className="whitespace-nowrap">Donate</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#00A99D] hover:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Animated Slide-out Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[98px] bg-white border-b border-slate-200 shadow-2xl max-h-[82vh] overflow-y-auto z-50">
            <div className="p-5 space-y-4">
              <Link
                href="/"
                className="block text-base font-bold text-slate-900 hover:text-[#00A99D] py-1"
              >
                Home
              </Link>

              {navGroups.map((group) => (
                <div key={group.title} className="border-t border-slate-100 pt-3">
                  <div className="text-xs font-black uppercase tracking-widest text-[#00A99D] mb-2 flex items-center justify-between">
                    <span>{group.title}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{group.subtitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                    {group.items.map((item) => {
                      const ItemIcon = DROPDOWN_ICONS[item.name] || Sparkles;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2.5 p-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#00A99D] hover:bg-teal-50/60 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg trust-gradient-primary flex items-center justify-center text-white shrink-0">
                            <ItemIcon size={14} />
                          </div>
                          <span className="truncate">{item.name}</span>
                          <ArrowRight size={13} className="text-slate-300 ml-auto" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="border-t border-slate-100 pt-3 space-y-3">
                <Link
                  href="/contact"
                  className="block text-sm font-bold text-slate-800 hover:text-[#00A99D] py-1"
                >
                  Contact Us
                </Link>
                <div className="flex gap-2 pt-1">
                  <Link
                    href="/donate"
                    className="flex-1 text-center py-3 rounded-xl trust-btn-gradient text-white font-black text-sm uppercase tracking-wider shadow-md whitespace-nowrap"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/volunteer"
                    className="flex-1 text-center py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm whitespace-nowrap"
                  >
                    Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
