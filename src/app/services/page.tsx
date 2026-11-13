import type { Metadata } from "next";
import Link from "next/link";
import {
  Microscope,
  BarChart3,
  GraduationCap,
  Users,
  Layers,
  Target,
  Megaphone,
  Laptop,
  Compass,
  FileCheck2,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import { primaryServices } from "@/data/services";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "All Educational Services | SRD Edu Corporation",
  description:
    "Explore SRD Edu Corporation's complete portfolio of 12 educational services: Research & Development, Data & Analytics, Academic Programmes, HR Management, Skill Development, Competitive Exam Support, Branding, Tech Support, Consultancy, Legal, Finance, and Placement Assistance.",
};

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  BarChart3,
  GraduationCap,
  Users,
  Layers,
  Target,
  Megaphone,
  Laptop,
  Compass,
  FileCheck2,
  Building2,
  Briefcase,
};

export default function MasterServicesPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <PageBanner
        title="Comprehensive Services for the Education Ecosystem"
        subtitle="RESEARCH | EDUCATION | PLACEMENT | GOVERNANCE"
        description="SRD Edu Corporation delivers complete institutional solutions across academics, administration, talent, legal compliance, and technological infrastructure. Discover our 12 specialized service divisions below."
        badge={{
          icon: Sparkles,
          label: "12 Specialized Institutional Divisions",
        }}
        breadcrumbs={[{ label: "Services Directory" }]}
      />

      {/* 2. 12 Services Directory Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              Institutional Solutions Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              Explore Our 12 Specialized Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Select any service division to view its dedicated page, scope of capabilities, methodologies, and institutional advisory solutions.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 12-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, idx) => {
              const IconComponent = iconMap[service.iconName] || Briefcase;
              const formattedNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#EFC269] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Top Header: Icon & Division Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center p-3 shadow-sm">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-bold text-[#B8821B] font-['Poppins'] bg-[#FFF7E6] px-2.5 py-1 rounded-full border border-[#EFC269]/30">
                        Division {formattedNum}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] leading-snug">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-[#B8821B] font-['Poppins'] line-clamp-1">
                      {service.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Scope Highlights Preview */}
                    <div className="pt-3 border-t border-gray-100 space-y-1.5">
                      {service.categories.slice(0, 2).map((cat, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#501C29] shrink-0" />
                          <span className="truncate">{cat.title.replace(/^\d+\.\s*/, "")}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#501C29] group-hover:text-[#B8821B] transition-colors bg-[#FAF7F5] group-hover:bg-[#501C29] group-hover:!text-white px-4 py-2.5 rounded-xl"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Direct Contact Section (Form Removed) */}
      <section id="enquiry" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9A6715] bg-[#FFF7E6] px-3.5 py-1.5 rounded-full border border-[#EFC269]/40 mb-4">
              CONNECT WITH OUR ADVISORY TEAM
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mb-3">
              Request an Institutional Service Consultation
            </h2>

            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect directly with our leadership advisory team to discuss custom institutional partnerships, staffing, accreditation, branding, or digital solutions.
            </p>

            {/* Direct Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {/* Phone */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Phone / WhatsApp</span>
                  <a
                    href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-bold text-base text-[#501C29] hover:underline"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Official Email</span>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="font-bold text-sm text-[#501C29] hover:underline block truncate max-w-[200px]"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Website</span>
                  <a
                    href={`https://${companyInfo.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-[#501C29] hover:underline"
                  >
                    {companyInfo.contact.website}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Office Address</span>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 bg-[#501C29] hover:bg-[#3d141f] text-[#EFC269] font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>

              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#501C29] font-bold text-sm px-7 py-3.5 rounded-xl border border-stone-300 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Our Team</span>
              </a>
            </div>

            {/* Tagline */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs sm:text-sm font-bold text-[#501C29] italic font-serif">
                &ldquo;Your Success, Our Mission — Skilled People • Strong Institutions • Brighter Future&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
