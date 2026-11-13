"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/company";

interface EnquiryFormProps {
  initialService?: string;
  sourceContext?: string;
  className?: string;
}

export default function EnquiryForm({
  initialService = "General Institutional Partnership",
  sourceContext = "General Enquiry",
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institutionName: "",
    role: "Institutional Leader / Management",
    serviceInterest: initialService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceOptions = [
    "Institutional & Candidate Registration",
    "General Institutional Partnership",
    "Global Placement Services (Institutions & Employers)",
    "Candidate Career & Placement Counselling",
    "Institution Branding & Marketing",
    "Admission Campaign & Call Centre Support",
    "Human Resource & Faculty Staffing",
    "Global Skill Opportunities & Campus Workshops",
    "Documentation & Regulatory Affiliation Support",
    "Research & Development Advisory",
    "Institutional Finance & Master Planning",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please provide a contact phone number.");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8 ${className}`}
    >
      <div className="mb-6">
        <span className="text-[11px] font-bold text-[#B8821B] uppercase tracking-wider bg-[#FFF7E6] px-2.5 py-1 rounded-md">
          {sourceContext}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins'] mt-2">
          Request Consultation & Services
        </h3>
        <p className="text-xs sm:text-sm text-[#63595C] mt-1">
          Connect directly with SRD Edu Corporation’s educational development and institutional advisory team.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#FFFDF5] border border-[#F5C64D] rounded-xl p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-[#F5C64D]/20 text-[#B8821B] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#B8821B]" />
          </div>
          <h4 className="text-base font-bold text-[#241E20] font-['Poppins']">
            Enquiry Prepared Successfully
          </h4>
          <p className="text-xs text-[#63595C] leading-relaxed max-w-md mx-auto">
            Thank you, <strong>{formData.fullName}</strong>. Your consultation request has been received. Our advisory team will review your requirements and get back to you shortly. For immediate corporate assistance, you may reach us directly via the contact channels below.
          </p>

          <div className="pt-3 border-t border-[#F5C64D]/30 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 bg-[#4A1525] text-white text-xs px-3.5 py-2 rounded-lg font-medium hover:bg-[#6B1F35] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5C64D]" />
              Call Corporate Desk
            </a>
            <a
              href={`mailto:${companyInfo.contact.email}?subject=Consultation Enquiry from ${encodeURIComponent(formData.fullName)}&body=Institution: ${encodeURIComponent(formData.institutionName)}%0D%0AService: ${encodeURIComponent(formData.serviceInterest)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}
              className="inline-flex items-center gap-1.5 bg-[#F5C64D] text-[#330B17] text-xs px-3.5 py-2 rounded-lg font-semibold hover:bg-[#DCA42C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Send Pre-filled Email
            </a>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-[11px] text-[#4A1525] underline pt-2 block mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Dr. / Prof. / Mr. / Ms."
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                Official Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@institution.edu"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 90360 41206"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                Institution or Organization
              </label>
              <input
                type="text"
                placeholder="School / College / Company Name"
                value={formData.institutionName}
                onChange={(e) =>
                  setFormData({ ...formData, institutionName: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                You are representing:
              </label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              >
                <option value="School / College Management">School / College Management</option>
                <option value="Principal / Dean / HoD">Principal / Dean / HoD</option>
                <option value="Placement Officer / Cell">Placement Officer / Cell</option>
                <option value="Corporate Employer / HR">Corporate Employer / HR</option>
                <option value="Educational Entrepreneur / Trustee">Educational Entrepreneur / Trustee</option>
                <option value="Student / Job Seeker / Professional">Student / Job Seeker / Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#241E20] mb-1">
                Primary Service Required
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) =>
                  setFormData({ ...formData, serviceInterest: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#241E20] mb-1">
              Brief Requirement Details
            </label>
            <textarea
              rows={3}
              placeholder="Outline your institutional requirements, student batch size, faculty positions, or timeline..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5C64D] focus:border-[#4A1525]"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#521D27] hover:bg-[#6B1F35] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg shadow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-[#F8D481]" />
              <span>Submit Consultation Request</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
