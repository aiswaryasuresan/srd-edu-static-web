import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ChevronRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Institutional Partnerships & Enquiries",
  description:
    "Get in touch with SRD Edu Corporation. Corporate office details, institutional partnership inquiries, placement coordination, HR staffing, and skill program consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <PageBanner
        title="Contact SRD Edu Corporation"
        description="We welcome dialogue with school trustees, college principals, university deans, employers, and educational entrepreneurs. Initiate a partnership conversation today."
        badge={{
          icon: Sparkles,
          label: "Connect With Corporate Advisory",
        }}
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Corporate Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Corporate Directory
                </span>
                <h2 className="text-2xl font-bold text-[#241E20] font-['Poppins'] mt-2">
                  Reach Our Advisory Desk
                </h2>
                <p className="text-xs sm:text-sm text-[#63595C] mt-1 leading-relaxed">
                  Our corporate and regional coordinators are available during standard working hours to discuss institutional needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-[#F8F7F5] p-5 rounded-2xl border border-gray-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#241E20] font-['Poppins']">
                      Telephone / WhatsApp
                    </h3>
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[#4A1525] font-semibold hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.phone}
                    </a>
                    <span className="text-[11px] text-gray-500">
                      Direct Advisory Line & WhatsApp
                    </span>
                  </div>
                </div>

                <div className="bg-[#F8F7F5] p-5 rounded-2xl border border-gray-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#241E20] font-['Poppins']">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-[#4A1525] font-semibold hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.email}
                    </a>
                    <span className="text-[11px] text-gray-500">
                      Corporate response within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="bg-[#F8F7F5] p-5 rounded-2xl border border-gray-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#241E20] font-['Poppins']">
                      Official Website
                    </h3>
                    <a
                      href={`https://${companyInfo.contact.website.replace(/^https?:\/\//, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A1525] font-semibold hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.website}
                    </a>
                    <span className="text-[11px] text-gray-500">
                      Corporate portal & institutional services
                    </span>
                  </div>
                </div>

                <div className="bg-[#F8F7F5] p-5 rounded-2xl border border-gray-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#241E20] font-['Poppins']">
                      Registered Corporate Address
                    </h3>
                    <p className="text-[#63595C] mt-0.5 leading-relaxed">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8F7F5] p-5 rounded-2xl border border-gray-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#F5C64D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#241E20] font-['Poppins']">
                      Working Hours
                    </h3>
                    <p className="text-[#63595C] mt-0.5">
                      {companyInfo.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                initialService="General Institutional Partnership"
                sourceContext="Official Corporate Enquiries"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
