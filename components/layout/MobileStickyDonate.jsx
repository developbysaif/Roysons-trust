"use client";

import Link from "next/link";
import { Heart, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function MobileStickyDonate() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          className="p-3 rounded-lg bg-slate-100 text-[#042E3A] border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
          aria-label="Call Roysons Trust Helpline"
        >
          <PhoneCall size={18} />
        </a>

        <Link
          href="/donate"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#16A34A] to-[#0F766E] text-white font-black text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all"
        >
          <Heart size={16} className="fill-white animate-pulse" />
          <span>Donate to Roysons Trust</span>
        </Link>
      </div>
    </div>
  );
}
