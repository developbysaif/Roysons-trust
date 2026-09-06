"use client";

import { useState } from "react";
import {
  Heart,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  CreditCard,
  Smartphone,
  Globe,
  ShieldCheck,
  Download,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const CAUSES = [
  "General Welfare Fund",
  "Zakat (100% Direct Tamleek)",
  "Sadaqah / Voluntary Charity",
  "Education & Student Scholarships",
  "Medical Treatment & Surgeries",
  "Food Security & Family Rations",
  "Emergency Disaster Relief",
];

const PRESETS = [1000, 2500, 5000, 10000, 25000];

const PAYMENT_METHODS = [
  { id: "bank", label: "Bank Transfer / Raast", icon: Building2, desc: "Instant direct account transfer" },
  { id: "mobile", label: "JazzCash / Easypaisa", icon: Smartphone, desc: "Fast mobile wallet transfer" },
  { id: "international", label: "International Wire / SWIFT", icon: Globe, desc: "Foreign currency transfer" },
];

export default function DonationForm() {
  const [selectedCause, setSelectedCause] = useState("General Welfare Fund");
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [copiedField, setCopiedField] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePreset = (val) => {
    setAmount(val);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    setIsCustom(true);
    setAmount(val ? parseInt(val, 10) : 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Generate random mock reference ID
    const ref = `ROY-DON-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);

    // Trigger confetti if available
    try {
      if (typeof window !== "undefined") {
        import("canvas-confetti").then((confetti) => {
          confetti.default({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        });
      }
    } catch {
      // non-critical
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#042E3A] via-[#022028] to-[#00A99D] p-6 sm:p-8 text-white relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart size={12} className="fill-[#00A99D] text-[#00A99D]" />
              Transparent Welfare Giving
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Make Your Donation
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/80 mt-1 max-w-lg">
              Every single rupee directly empowers vulnerable children, sick patients, and distressed families.
            </p>
          </div>

          <div className="hidden sm:flex flex-col items-end text-xs text-teal-200/90 font-medium">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#00A99D]" />
              100% Audited
            </span>
            <span>Zero Zakat Administrative Cuts</span>
          </div>
        </div>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Step 1: Select Cause */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-3">
              1. Select Giving Category / Cause
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {CAUSES.map((cause) => {
                const isSelected = selectedCause === cause;
                return (
                  <button
                    key={cause}
                    type="button"
                    onClick={() => setSelectedCause(cause)}
                    className={`text-left p-3.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                      isSelected
                        ? "border-[#00A99D] bg-[#00A99D]/10 text-[#042E3A] shadow-sm ring-2 ring-[#00A99D]"
                        : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{cause}</span>
                    {isSelected && <CheckCircle2 size={16} className="text-[#00A99D] flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Amount */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A]">
                2. Select Donation Amount (PKR)
              </label>
              <span className="text-xs text-slate-500 font-semibold">
                Chosen: <strong className="text-[#00A99D]">PKR {amount ? amount.toLocaleString() : 0}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {PRESETS.map((val) => {
                const isSelected = !isCustom && amount === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handlePreset(val)}
                    className={`py-3.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      isSelected
                        ? "bg-[#042E3A] text-white shadow-lg ring-2 ring-[#00A99D]"
                        : "bg-slate-100 text-slate-800 hover:bg-[#00A99D]/10 hover:text-[#042E3A]"
                    }`}
                  >
                    PKR {val.toLocaleString()}
                  </button>
                );
              })}

              <div className="col-span-2 sm:col-span-1 md:col-span-1">
                <input
                  type="text"
                  placeholder="Custom PKR"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className={`w-full py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold border text-center transition-all ${
                    isCustom
                      ? "border-[#00A99D] bg-[#00A99D]/10 text-[#042E3A] ring-2 ring-[#00A99D]"
                      : "border-slate-300 bg-white text-slate-800 placeholder-slate-400"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Verified Account Details Box */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-[#0F766E]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#042E3A]">
                  Verified Roysons Trust Bank &amp; Account Details
                </span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full font-bold">
                Direct Trust Account
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-medium block">Account Title:</span>
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-800 text-sm">
                    {siteConfig.bankDetails.accountTitle}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.bankDetails.accountTitle, "title")}
                    className="p-1 rounded text-slate-400 hover:text-slate-800"
                    title="Copy Title"
                  >
                    {copiedField === "title" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 font-medium block">Account Number:</span>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-800 text-sm">
                    {siteConfig.bankDetails.accountNumber}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.bankDetails.accountNumber, "acc")}
                    className="p-1 rounded text-slate-400 hover:text-slate-800"
                    title="Copy Account Number"
                  >
                    {copiedField === "acc" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1 md:col-span-2">
                <span className="text-slate-400 font-medium block">International IBAN:</span>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-800 text-sm">
                    {siteConfig.bankDetails.iban}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.bankDetails.iban, "iban")}
                    className="p-1 rounded text-slate-400 hover:text-slate-800"
                    title="Copy IBAN"
                  >
                    {copiedField === "iban" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1 md:col-span-2">
                <span className="text-slate-400 font-medium block">Mobile Wallets (JazzCash / Easypaisa):</span>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-slate-800 text-sm">
                    {siteConfig.bankDetails.jazzCashEasypaisa}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(siteConfig.bankDetails.jazzCashEasypaisa, "wallet")}
                    className="p-1 rounded text-slate-400 hover:text-slate-800"
                    title="Copy Wallet Details"
                  >
                    {copiedField === "wallet" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              * Note: {siteConfig.bankDetails.note}
            </p>
          </div>

          {/* Step 4: Donor Details Form */}
          <div className="space-y-4">
            <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A]">
              3. Donor &amp; Tax Receipt Details
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name / Entity Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ahsan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (For Tax Receipt) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Transfer Mode / Bank Used
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none bg-white"
                >
                  <option value="bank">Online Bank Transfer / Raast</option>
                  <option value="mobile">JazzCash / Easypaisa</option>
                  <option value="international">International Wire / SWIFT</option>
                  <option value="other">Cash / Cheque at Secretariat</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Special Allocation Instructions / Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please dedicate this toward flood relief or a specific school..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
              />
            </div>
          </div>

          {/* Submission Notice & Button */}
          <div className="pt-2 space-y-4">
            <div className="flex items-start gap-2.5 p-3.5 bg-[#00A99D]/10 border border-[#00A99D]/30 rounded-xl text-xs text-slate-700">
              <ShieldCheck size={16} className="text-[#00A99D] flex-shrink-0 mt-0.5" />
              <span>
                Every contribution is handled with transparency and directed toward meaningful community support. You will receive an official tax deductible acknowledgment once verified.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#042E3A] via-[#022028] to-[#00A99D] hover:opacity-95 text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-lg hover:shadow-xl shadow-[#042E3A]/30 transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <Heart size={18} className="fill-[#00A99D] text-[#00A99D] animate-pulse" />
              <span>CONFIRM DONATION PLEDGE (PKR {amount ? amount.toLocaleString() : 0})</span>
            </button>
          </div>
        </form>
      ) : (
        /* Success State & Receipt View */
        <div className="p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 bg-[#00A99D]/15 text-[#00A99D] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={36} />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-2xl font-black text-[#042E3A]">
              JazakAllah Khair! Donation Pledged
            </h3>
            <p className="text-sm text-slate-600">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your generous pledge has been registered with Roysons Trust.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-semibold">Reference ID:</span>
              <span className="font-mono font-bold text-slate-900">{referenceId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-semibold">Allocated Cause:</span>
              <span className="font-bold text-[#00A99D]">{selectedCause}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-semibold">Amount Pledged:</span>
              <span className="font-black text-slate-900 text-sm">PKR {amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-semibold">Receipt Sent To:</span>
              <span className="font-medium text-slate-700">{formData.email}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Make Another Donation
            </button>
            <a
              href={`mailto:${siteConfig.contact.donationsEmail}?subject=Donation Receipt Verification ${referenceId}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#042E3A] hover:bg-[#00A99D] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Email Bank Slip / Confirmation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
