"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  BookOpen,
  Briefcase,
  HelpCircle,
  Mail,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "Leadership", href: "/leadership-trustees" },
    { name: "Programs", href: "/programs" },
    { name: "Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Stories", href: "/success-stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Helpline Bar */}
      <div className="text-xs md:text-[13px] lg:text-sm py-2 px-4 sm:px-8 border-b bg-[#0a0a0a] text-neutral-300 border-neutral-800 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 font-medium">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#00A99D]" />
              <span className="font-semibold text-white">ROYSONS TRUST</span>
              <span className="text-neutral-400">— Registered Global Humanitarian Foundation</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-[#00A99D] transition-colors"
            >
              <PhoneCall size={14} className="text-[#00A99D]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-[#00A99D] transition-colors"
            >
              <Mail size={14} className="text-[#00A99D]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <Link href="/donate" className="text-[#00A99D] hover:text-white font-bold transition-colors">
              Direct Zakat &amp; Welfare Giving
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - White background, black text across Home and all interior pages */}
      <header className="sticky top-0 z-[1000] w-full bg-white/95 backdrop-blur-md text-[#111111] shadow-xs border-b border-neutral-200/80 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-20 lg:h-[82px] xl:h-[88px] gap-4">
            {/* Left: Brand Logo & Navigation grouped closely */}
            <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 min-w-0">
              {/* Brand Logo - Crisp natural colors on white background */}
              <Link href="/" className="flex items-center shrink-0 group focus:outline-none">
                <div className="flex items-center transition-transform group-hover:scale-[1.02]">
                  <Image
                    src="/trust/royson-trust.png"
                    alt="ROYSONS TRUST"
                    width={320}
                    height={64}
                    priority
                    className="h-11 sm:h-12 md:h-13 lg:h-[54px] xl:h-[60px] w-auto object-contain transition-all duration-300"
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links with Times New Roman & Black Text */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 flex-nowrap">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      className={`relative whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] tracking-normal transition-all duration-200 ${
                        isActive
                          ? "text-[#111111] font-bold"
                          : "text-[#2b2b2b] hover:text-[#000000] font-medium hover:bg-neutral-100/80 rounded-lg"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-[#00779E] via-[#009688] to-[#059669]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Make an Impact CTA with clear gap from Contact */}
            <div className="flex items-center gap-3 shrink-0 ml-4 sm:ml-6 lg:ml-8 xl:ml-10">
              <Link
                href="/donate"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
                className="btn-gradient hidden sm:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-sm sm:text-base font-bold tracking-wide shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
              >
                <span>Make an Impact</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-0.5 transition-transform"
                />
              </Link>

              {/* Hamburger Button for Mobile/Tablet (< 1024px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border transition-colors lg:hidden text-[#111111] border-neutral-200 bg-neutral-50 hover:bg-neutral-100"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Animated Slide-in Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[80px] z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-w-sm ml-auto h-full bg-white text-[#111111] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#009688]">
                    Navigation Menu
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Links List */}
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                          isActive
                            ? "bg-neutral-100 text-[#111111] font-bold border-l-4 border-[#009688]"
                            : "text-[#333333] hover:text-[#111111] hover:bg-neutral-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowRight size={14} className="text-neutral-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Footer with Quick Contact & Make an Impact */}
              <div className="pt-6 border-t border-neutral-100 space-y-4">
                <Link
                  href="/donate"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  className="btn-gradient w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-bold text-sm tracking-wide shadow-md"
                >
                  <span>Make an Impact</span>
                  <ArrowRight size={14} />
                </Link>

                <div className="text-center space-y-1 text-xs text-neutral-500">
                  <p className="font-semibold text-neutral-800">Official Helpline:</p>
                  <p className="font-mono text-[#009688]">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
