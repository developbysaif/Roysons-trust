"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppButton() {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const defaultText = encodeURIComponent("Assalamu Alaikum / Hello, I would like to inquire about Roysons Trust welfare programs and support.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultText}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Roysons Trust"
      className="fixed bottom-20 md:bottom-6 right-5 z-40 group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden group-hover:inline-block text-xs font-bold whitespace-nowrap pr-1 transition-all">
        Need Assistance?
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
      </span>
    </a>
  );
}
