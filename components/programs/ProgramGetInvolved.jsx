"use client";

import Link from "next/link";
import { Heart, Handshake, Users, Share2, ArrowRight } from "lucide-react";

export default function ProgramGetInvolved({ programTitle }) {
  const ways = [
    {
      title: "Donate",
      tagline: "Direct Welfare Sponsorship",
      desc: "Fund scholarships, mobile clinic supplies, clean water wells, or emergency food relief with 100% audited integrity.",
      icon: Heart,
      btnLabel: "Donate Now →",
      href: "/donate",
      btnClass: "btn-gradient text-white",
    },
    {
      title: "Partner With Us",
      tagline: "Institutional & CSR Alliances",
      desc: "Collaborate with ROYSONS TRUST to implement scalable corporate social responsibility programs with transparent milestone reporting.",
      icon: Handshake,
      btnLabel: "Partner With Us →",
      href: "/partnerships",
      btnClass: "bg-neutral-900 text-white hover:bg-neutral-800",
    },
    {
      title: "Volunteer",
      tagline: "Field & Community Service",
      desc: "Lend your time, clinical expertise, or teaching skills to support on-ground welfare camps and youth workshops.",
      icon: Users,
      btnLabel: "Get Involved →",
      href: "/volunteer",
      btnClass: "bg-neutral-900 text-white hover:bg-neutral-800",
    },
    {
      title: "Share Our Mission",
      tagline: "Advocacy & Social Voice",
      desc: "Help amplify verified stories of community transformation and connect vulnerable causes with compassionate champions.",
      icon: Share2,
      btnLabel: "Share Our Mission →",
      href: "/success-stories",
      btnClass: "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-800 border border-neutral-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009688]" />
            Take Meaningful Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            There Are Many Ways to Make an Impact
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Whether through personal philanthropy, corporate alignment, or on-ground volunteering, your support transforms compassion into lasting opportunity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((w, idx) => {
            const Icon = w.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-900 group-hover:scale-108 flex items-center justify-center transition-transform duration-300 shadow-2xs">
                    <Icon size={26} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#009688] block">
                      {w.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111] mt-1">
                      {w.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {w.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <Link
                    href={w.href}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all ${w.btnClass}`}
                  >
                    <span>{w.btnLabel}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
