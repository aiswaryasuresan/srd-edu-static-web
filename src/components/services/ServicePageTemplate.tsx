import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Clock,
  Sparkles,
  Award,
  HelpCircle
} from "lucide-react";
import { BusinessVertical } from "@/types";
import FAQAccordion from "@/components/shared/FAQAccordion";
import EnquiryForm from "@/components/forms/EnquiryForm";
import PageBanner from "@/components/shared/PageBanner";

interface ServicePageTemplateProps {
  data: BusinessVertical;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <PageBanner
        title={data.title}
        subtitle={data.tagline}
        description={data.shortDescription}
        badge={{
          icon: Sparkles,
          label: data.corePositioning || "Corporate Vertical",
        }}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
      >
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href="#enquiry-section"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <span>Request Service Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#categories-section"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
          >
            <span>View Service Categories</span>
            <ChevronRight className="w-4 h-4 text-[#EFC269]" />
          </a>
        </div>
      </PageBanner>

      {/* 2. Detailed Introduction & Target Audiences */}
      <section className="py-14 sm:py-16 bg-[#F8F7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#241E20] font-['Poppins']">
                Comprehensive Institutional Value
              </h2>
              <p className="text-sm sm:text-base text-[#63595C] leading-relaxed">
                {data.longDescription}
              </p>

              {data.complianceNote && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>{data.complianceNote}</div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#241E20] font-['Poppins'] border-b border-gray-100 pb-2">
                Target Audiences & Beneficiaries
              </h3>
              <ul className="space-y-2.5">
                {data.targetAudiences.map((aud, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241E20]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A1525] shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Service Categories */}
      <section id="categories-section" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full">
              Structured Modules
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241E20] font-['Poppins'] mt-2">
              Comprehensive Service Disciplines
            </h2>
            <p className="text-sm text-[#63595C] mt-2">
              Every dimension engineered to deliver institutional rigor, transparency, and actionable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.categories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#F8F7F5] rounded-2xl p-6 border border-gray-200 hover:border-[#F5C64D] hover:bg-[#FFFDF5] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#4A1525] text-white flex items-center justify-center font-bold text-xs mb-4">
                    0{cIdx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#241E20] font-['Poppins']">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#63595C] mt-1 mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-200">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-xs text-[#241E20]">
                        <span className="text-[#F5C64D] font-bold shrink-0">✓</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process & Benefits */}
      <section className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Process Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Methodology
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins'] mt-2">
                  Our Execution Framework
                </h3>
              </div>

              <div className="space-y-3">
                {data.process.map((p) => (
                  <div
                    key={p.step}
                    className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-4 shadow-2xs"
                  >
                    <span className="text-lg font-extrabold text-[#4A1525] font-['Poppins'] shrink-0">
                      {p.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#241E20] font-['Poppins']">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#63595C] mt-0.5">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Box */}
            <div className="lg:col-span-5 bg-[#4A1525] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5C64D]">
                  Impact Matrix
                </span>
                <h3 className="text-xl font-bold text-white font-['Poppins'] mt-1 mb-4">
                  Why Institutions Trust This Vertical
                </h3>
                <ul className="space-y-3">
                  {data.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                      <Award className="w-4 h-4 text-[#F5C64D] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/70">
                <p>SRD Edu Corporation — Operating with integrity and documented excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#241E20] font-['Poppins'] mt-2">
              Common Questions Regarding {data.title}
            </h3>
          </div>

          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* 6. Contextual Enquiry Form */}
      <section id="enquiry-section" className="py-16 sm:py-20 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            initialService={data.title}
            sourceContext={`Service Vertical: ${data.title}`}
          />
        </div>
      </section>
    </div>
  );
}
