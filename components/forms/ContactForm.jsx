"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Asad Khan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Organization (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. CSR Foundation / Enterprise"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Subject
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none bg-white"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Donation & Zakat Verification">Donation &amp; Zakat Verification</option>
              <option value="Corporate CSR Partnership">Corporate CSR Partnership</option>
              <option value="Volunteer Application">Volunteer Application</option>
              <option value="Program Sponsorship">Program Sponsorship</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Message *
            </label>
            <textarea
              required
              rows={4}
              placeholder="How can we assist you or collaborate?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#2563eb] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-4 rounded-xl text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Send size={16} />
            <span>Submit Inquiry</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-black text-[#0f172a]">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. A representative from the ROYSONS TRUST secretariat will contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                organization: "",
                subject: "General Inquiry",
                message: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
}
