import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Sparkles,
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | SRD Edu Corporation",
  description:
    "Get in touch with SRD Edu Corporation. Corporate office details, institutional partnership inquiries, placement coordination, HR staffing, and skill program consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner with Burgundy & Gold */}
      <PageBanner
        title="Contact SRD Edu Corporation"
        subtitle="Let's Build a Brighter Future Together"
        description="We welcome dialogue with school trustees, college principals, university deans, employers, and educational leaders. Partner with SRD for reliable, professional, and result-oriented solutions."
        backgroundImage="/images/banner/contact-banner.jpg"
        badge={{
          icon: Sparkles,
          label: "SRD EDU CORPORATION | OFFICIAL CONTACT DESK",
        }}
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Main Registration & Company Information Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Registration / Consultation Form */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A6715] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
                    REGISTRATION & INQUIRY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241E20] font-['Poppins'] mt-3">
                    Institutional Partnership Form
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Fill out the form below and our institutional coordinators will connect with you directly.
                  </p>
                </div>

                <EnquiryForm
                  initialService="General Institutional Partnership"
                  sourceContext="Official Corporate Enquiries"
                />
              </div>
            </div>

            {/* Right: Company Information Block Directly from Brochure Page 8 */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#521D27] bg-[#521D27]/10 px-3 py-1 rounded-full font-['Poppins']">
                  COMPANY DETAILS
                </span>
                <h3 className="text-2xl font-extrabold text-[#521D27] font-['Poppins'] mt-3">
                  SRD EDU CORPORATION
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  THE COMPLETE EDUCATIONAL SERVICES PARTNER
                </p>
              </div>

              {/* Contact Cards in Brochure Burgundy & Gold Palette */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Telephone */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5 hover:border-[#521D27] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241E20] font-['Poppins']">
                      Telephone / WhatsApp
                    </h4>
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[#521D27] font-extrabold text-base hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.phone}
                    </a>
                    <span className="text-[11px] text-stone-500">
                      Direct Institutional Line
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5 hover:border-[#521D27] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241E20] font-['Poppins']">
                      Official Email
                    </h4>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-[#521D27] font-extrabold hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.email}
                    </a>
                    <span className="text-[11px] text-stone-500">
                      Response within 24 business hours
                    </span>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5 hover:border-[#521D27] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241E20] font-['Poppins']">
                      Official Website
                    </h4>
                    <a
                      href={`https://${companyInfo.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#521D27] font-extrabold hover:underline block mt-0.5"
                    >
                      {companyInfo.contact.website}
                    </a>
                    <span className="text-[11px] text-stone-500">
                      Corporate portal & 12 services
                    </span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5 hover:border-[#521D27] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241E20] font-['Poppins']">
                      Office Address
                    </h4>
                    <p className="text-stone-700 mt-1 leading-relaxed text-xs">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241E20] font-['Poppins']">
                      Working Hours
                    </h4>
                    <p className="text-stone-700 mt-1 text-xs">
                      {companyInfo.contact.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Tagline */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#521D27] to-[#732736] text-white text-center shadow-lg">
                <p className="text-sm font-bold font-serif italic text-[#EFC269]">
                  &ldquo;Your Success, Our Mission&rdquo;
                </p>
                <p className="text-[11px] text-stone-200 mt-1">
                  Skilled People • Strong Institutions • Brighter Future
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
