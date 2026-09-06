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
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

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
      items: siteConfig.nav.about,
    },
    {
      title: "Our Work",
      items: siteConfig.nav.ourWork,
    },
    {
      title: "Get Involved",
      items: siteConfig.nav.getInvolved,
    },
    {
      title: "Resources",
      items: siteConfig.nav.resources,
    },
  ];

  return (
    <>
      {/* Top Helpline Sub-bar */}
      <div className="bg-[#042E3A] text-white text-xs py-2 px-4 sm:px-8 border-b border-teal-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-teal-100/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="font-semibold text-white">Registered Philanthropic Trust</span>
            </span>
            <span className="hidden sm:inline text-teal-500">•</span>
            <span className="hidden sm:inline">100% Zakat & Sadaqah Compliant</span>
          </div>

          <div className="flex items-center gap-4 text-teal-100/90 ml-auto">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall size={13} className="text-emerald-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-teal-700">|</span>
            <Link href="/transparency" className="hover:text-emerald-300 transition-colors font-medium">
              Audit Reports
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none py-1">
              <div className="relative w-48 h-14 sm:w-60 sm:h-18 md:w-68 md:h-20 lg:w-72 lg:h-20 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/logos/Roysons-02.png"
                  alt="ROYSONS Trust"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 240px, 300px"
                />
              </div>
              <div className="hidden xl:flex flex-col border-l-2 border-[#00A99D]/40 pl-3">
                <span className="text-sm font-black uppercase tracking-widest text-[#042E3A]">
                  TRUST
                </span>
                <span className="text-[11px] text-slate-500 font-medium tracking-tight">
                  Humanitarian &amp; Social Welfare
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                  pathname === "/"
                    ? "text-[#00A99D] bg-teal-50/80 shadow-xs"
                    : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/50"
                }`}
              >
                Home
              </Link>

              {navGroups.map((group) => (
                <div
                  key={group.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(group.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                      activeDropdown === group.title
                        ? "text-[#00A99D] bg-teal-50/80"
                        : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/50"
                    }`}
                  >
                    <span>{group.title}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 text-slate-400 group-hover:text-[#00A99D] ${
                        activeDropdown === group.title ? "rotate-180 text-[#00A99D]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 origin-top-left ${
                      activeDropdown === group.title
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 space-y-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col p-2.5 rounded-lg hover:bg-emerald-50/60 transition-colors group/item"
                        >
                          <span className="text-sm font-bold text-slate-900 group-hover/item:text-[#0F766E] flex items-center justify-between">
                            {item.name}
                            <ArrowRight
                              size={13}
                              className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#16A34A]"
                            />
                          </span>
                          {item.description && (
                            <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                  pathname === "/contact"
                    ? "text-[#00A99D] bg-teal-50/80 shadow-xs"
                    : "text-[#042E3A] hover:text-[#00A99D] hover:bg-teal-50/50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/volunteer"
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#042E3A] bg-teal-50 hover:bg-[#00A99D] hover:text-white rounded-xl border border-[#00A99D]/40 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <Users size={14} />
                Volunteer
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#042E3A] via-[#043e4e] to-[#00A99D] hover:from-[#00A99D] hover:to-[#042E3A] text-white text-sm font-black uppercase tracking-wider shadow-md hover:shadow-[0_8px_25px_rgba(0,169,157,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
              >
                <Heart size={16} className="fill-white animate-pulse" />
                <span>DONATE NOW</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#042E3A] to-[#00A99D] text-white text-xs font-black uppercase tracking-wider shadow-sm"
              >
                <Heart size={14} className="fill-white" />
                <span>Donate</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#0F766E] hover:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Animated Slide-out Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white border-b border-slate-200 shadow-2xl max-h-[80vh] overflow-y-auto z-50">
            <div className="p-5 space-y-4">
              <Link
                href="/"
                className="block text-base font-bold text-slate-900 hover:text-[#16A34A] py-1"
              >
                Home
              </Link>

              {navGroups.map((group) => (
                <div key={group.title} className="border-t border-slate-100 pt-3">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0F766E] mb-2">
                    {group.title}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold text-slate-700 hover:text-[#16A34A] py-1.5 flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ArrowRight size={13} className="text-slate-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-slate-100 pt-3 space-y-2">
                <Link
                  href="/contact"
                  className="block text-sm font-bold text-slate-800 hover:text-[#16A34A] py-1"
                >
                  Contact Us
                </Link>
                <div className="flex gap-2 pt-2">
                  <Link
                    href="/donate"
                    className="flex-1 text-center py-3 rounded-lg bg-[#16A34A] text-white font-black text-sm uppercase tracking-wider shadow-md"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/volunteer"
                    className="flex-1 text-center py-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-sm"
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
