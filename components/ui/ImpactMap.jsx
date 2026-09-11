"use client";

import { useState } from "react";
import { MapPin, Users, HeartPulse, GraduationCap, Droplets, CheckCircle2 } from "lucide-react";

const REGIONAL_HUBS = [
  {
    id: "hub-1",
    name: "Lahore & Peri-Urban Zone",
    region: "Central Punjab",
    stats: "15,000+ Beneficiaries",
    initiatives: "Secretariat, Vocational Training Academies, Student Scholarships",
    status: "Active Field Operations",
    coords: { x: "72%", y: "42%" },
    icon: GraduationCap,
  },
  {
    id: "hub-2",
    name: "Kasur District Model Cluster",
    region: "Eastern Punjab",
    stats: "8,500+ Beneficiaries",
    initiatives: "School Modernization, Clean RO Water Plants, Solar Classrooms",
    status: "Multi-Program Hub",
    coords: { x: "74%", y: "46%" },
    icon: Droplets,
  },
  {
    id: "hub-3",
    name: "South Punjab Mobile Health Corridor",
    region: "Muzaffargarh & Layyah",
    stats: "18,500+ Patients Treated",
    initiatives: "Mobile Primary Care Dispensaries, Free Cataract & Surgical Camps",
    status: "Weekly Field Circuits",
    coords: { x: "56%", y: "54%" },
    icon: HeartPulse,
  },
  {
    id: "hub-4",
    name: "Thal Desert Clean Water Belt",
    region: "Southern Belt",
    stats: "25,000+ Daily Consumers",
    initiatives: "8 Solar-Powered Reverse Osmosis Filtration Stations",
    status: "Commissioned & Active",
    coords: { x: "50%", y: "50%" },
    icon: Droplets,
  },
  {
    id: "hub-5",
    name: "Disaster Resilience & Winter Relief Zone",
    region: "Sindh & Balochistan Corridors",
    stats: "14,200+ Individuals Supported",
    initiatives: "Flood Rehabilitation, Emergency Rations, Winter Protection Packs",
    status: "Rapid Response Ready",
    coords: { x: "42%", y: "68%" },
    icon: Users,
  },
];

export default function ImpactMap() {
  const [selectedHub, setSelectedHub] = useState(REGIONAL_HUBS[0]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive SVG Map Representation (7 cols) */}
        <div className="lg:col-span-7 relative bg-gradient-to-br from-slate-900 to-[#0f172a] rounded-2xl p-6 sm:p-8 text-white min-h-[400px] flex flex-col justify-between overflow-hidden">
          {/* Subtle Grid / Lat-Long Lines */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Map Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Verified On-Ground Interventions
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              [Verified Regional Hubs]
            </span>
          </div>

          {/* Visual Interactive Map Area */}
          <div className="relative my-8 h-64 sm:h-72 w-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
            {/* Outline Contour Graphic */}
            <svg
              viewBox="0 0 500 400"
              className="w-full h-full object-contain opacity-40 filter drop-shadow"
              fill="none"
              stroke="#0f766e"
              strokeWidth="1.5"
            >
              <path d="M 120 180 Q 200 90 280 110 T 360 160 Q 400 220 380 280 T 260 360 Q 180 340 140 280 Z" />
              <path d="M 220 160 Q 280 140 320 180 T 310 260 Q 250 300 210 240 Z" fill="#0f766e" fillOpacity="0.15" />
            </svg>

            {/* Pins on the Map */}
            {REGIONAL_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              const Icon = hub.icon;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  style={{ left: hub.coords.x, top: hub.coords.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 ${
                    isSelected ? "scale-125 z-30" : "hover:scale-110"
                  }`}
                  aria-label={`Select ${hub.name}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      isSelected
                        ? "bg-[#2563eb] text-white ring-4 ring-[#2563eb]/40"
                        : "bg-emerald-500 text-white hover:bg-emerald-400"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {hub.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive instruction */}
          <p className="text-xs text-slate-400 text-center relative z-10">
            Click any pin on the map to explore specific regional interventions and metrics.
          </p>
        </div>

        {/* Right Detail Card for Selected Hub (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-bold">
            <MapPin size={14} />
            <span>{selectedHub.region}</span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-[#0f172a] leading-tight">
              {selectedHub.name}
            </h3>
            <p className="text-sm font-semibold text-[#0f766e] mt-1">
              Status: {selectedHub.status}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
              Verified Beneficiary Reach
            </span>
            <p className="text-2xl font-black text-[#2563eb]">
              {selectedHub.stats}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Core Interventions Delivered:
            </span>
            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedHub.initiatives}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
            <span>All initiatives verified by client field teams and third-party audit reports.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
