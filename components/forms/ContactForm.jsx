"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Asad Khan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
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
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
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
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Inquiry Topic / Department
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none bg-white"
              >
                <option value="General Inquiry">General Information</option>
                <option value="Donation & Zakat Verification">Donation &amp; Zakat Inquiries</option>
                <option value="Beneficiary Case Submission">Patient / Student Case Assessment</option>
                <option value="Corporate CSR Collaboration">Corporate CSR Partnerships</option>
                <option value="Media & Press">Media &amp; Public Relations</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Message *
            </label>
            <textarea
              rows={4}
              required
              placeholder="How can we assist you today? Please share any relevant details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#042E3A] hover:bg-[#0F766E] text-white font-black uppercase tracking-wider text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Send size={16} />
            <span>Send Message to Secretariat</span>
          </button>
        </form>
      ) : (
        <div className="py-8 text-center space-y-3">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-black text-[#042E3A]">
            Message Dispatched Successfully
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
            Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to our secretariat. We will reply within 24 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 text-xs font-bold text-[#0F766E] hover:underline"
          >
            Send Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
}
