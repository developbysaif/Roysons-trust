"use client";

import Image from "next/image";

const partners = [
  { name: "UNICEF Partnership Support", logo: "/logos/unicef.png" },
  { name: "World Health Initiative", logo: "/logos/worldhealth.png" },
  { name: "Siemens Technical Support", logo: "/logos/siemens.png" },
  { name: "National Welfare Alliance", logo: "/logos/pak.png" },
  { name: "Agricultural Development Partner", logo: "/logos/fangrow.jpg.jpeg" },
  { name: "Relief & Rehabilitation Council", logo: "/logos/r&r.png" },
  { name: "Verified Foundation Trust", logo: "/logos/roysons-main.png" },
];

export default function PartnersMarquee() {
  const displayList = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Side Fade Masks for Seamless Marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 sm:gap-16">
        {displayList.map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 px-4 py-2 bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-xs hover:shadow-md cursor-pointer group"
          >
            <div className="relative h-12 w-28 sm:h-14 sm:w-36">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
