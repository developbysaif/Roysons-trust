"use client";

import { useState } from "react";
import { Users, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    areaOfInterest: "Education & Teaching",
    skills: "",
    availability: "Weekends Only",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#042E3A] to-[#0F766E] p-6 sm:p-8 text-white">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Users size={12} className="text-emerald-400" />
          Community Action
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Apply as a Volunteer
        </h2>
        <p className="text-xs sm:text-sm text-slate-100 font-medium mt-1 max-w-lg">
          Join our network of compassionate changemakers dedicating time, medical skills, teaching, and relief operations.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Fatima Tariq"
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
                placeholder="fatima@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+92 300 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                City / Province *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Lahore, Karachi, Rawalpindi"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Area of Interest *
              </label>
              <select
                value={formData.areaOfInterest}
                onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none bg-white"
              >
                <option value="Education & Teaching">Education &amp; Student Tutoring</option>
                <option value="Healthcare & Medical Camps">Healthcare &amp; Free Medical Camps</option>
                <option value="Disaster Relief & Food Distribution">Disaster Relief &amp; Food Drives</option>
                <option value="Digital Media & Photography">Digital Media, Photography &amp; IT</option>
                <option value="Logistics & Event Support">Logistics &amp; Field Support</option>
                <option value="Community Outreach">Community Outreach &amp; Counseling</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Availability *
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none bg-white"
              >
                <option value="Weekends Only">Weekends Only</option>
                <option value="Flexible (Few Hours Weekly)">Flexible (A Few Hours Weekly)</option>
                <option value="Full-Time Student Volunteer">Full-Time Student Volunteer</option>
                <option value="Emergency Disaster Call Only">Emergency Disaster Callout Only</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Skills, Profession &amp; Experience
            </label>
            <input
              type="text"
              placeholder="e.g. Doctor, Software Engineer, Teacher, First-Aid Certified..."
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Why do you want to volunteer with Roysons Trust? (Brief message)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what motivates you to serve our community..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#16A34A] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#0F766E] hover:from-[#15803D] hover:to-[#0D9488] text-white font-black uppercase tracking-wider text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Send size={16} />
            <span>Apply as a Volunteer</span>
          </button>
        </form>
      ) : (
        <div className="p-8 sm:p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-black text-[#042E3A]">
            Application Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our Volunteer Coordination Team will review your background and reach out to you at <strong>{formData.email}</strong> ahead of our upcoming community camp.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Submit Another Application
          </button>
        </div>
      )}
    </div>
  );
}
