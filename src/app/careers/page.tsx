import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Building,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Careers & Recruitment Enquiries | Talent & Employer Portals",
  description:
    "Connect with SRD Edu Corporation's placement and recruitment network. Job seeker career enquiries, employer vacancy submissions, and campus recruitment coordination.",
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <PageBanner
        title="Careers & Recruitment Portals"
        description="Whether you are an aspiring graduate seeking career guidance, an educator looking for faculty positions, or an employer looking to source verified candidates—explore our recruitment facilitation pathways."
        backgroundImage="/images/banner/careers-banner.jpg"
        badge={{
          icon: Sparkles,
          label: "Right Talent. Right Opportunities.",
        }}
        breadcrumbs={[{ label: "Careers" }]}
      />


      {/* Two Pathways: Job Seekers vs Employers */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dedicated Portals"
            title="Recruitment Pathways"
            subtitle="Choose your pathway to submit career aspirations or institutional staffing requirements."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pathway 1: For Job Seekers & Graduates */}
            <div className="bg-[#F8F7F5] rounded-2xl p-7 sm:p-8 border border-gray-200 flex flex-col justify-between hover:border-[#F5C64D] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#F5C64D]" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-0.5 rounded">
                    For Aspirants
                  </span>
                  <h3 className="text-xl font-bold text-[#241E20] font-['Poppins'] mt-1">
                    Job Seeker & Candidate Portal
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  Are you a fresh graduate, experienced academic teacher, or working professional? Register your credentials to be considered for verified institutional placement drives, faculty requisitions, and recruitment melas.
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-200 text-xs text-[#241E20]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>Employability & resume assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>Notification for regional campus drives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>No registration fees for candidates</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <a
                  href="#careers-form"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#521D27] hover:bg-[#521D27]/90 text-white text-xs font-bold py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Register as Job Seeker</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C64D]" />
                </a>
              </div>
            </div>

            {/* Pathway 2: For Employers & Campus Recruiters */}
            <div className="bg-[#F8F7F5] rounded-2xl p-7 sm:p-8 border border-gray-200 flex flex-col justify-between hover:border-[#F5C64D] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#F5C64D]" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-0.5 rounded">
                    For Employers
                  </span>
                  <h3 className="text-xl font-bold text-[#241E20] font-['Poppins'] mt-1">
                    Employer & Institutional Sourcing
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  Looking to hire certified teachers, school principals, competitive exam mentors, or collegiate graduates in bulk? Submit your hiring requirements to access pre-screened talent pools.
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-200 text-xs text-[#241E20]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>Pre-evaluated candidate profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>Demonstration lecture scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                    <span>Campus recruitment drive coordination</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <a
                  href="#careers-form"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5C64D] hover:bg-[#DCA42C] text-[#521D27] text-xs font-bold py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Submit Institutional Vacancy</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="careers-form" className="py-16 sm:py-20 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            initialService="Global Placement Services (Institutions & Employers)"
            sourceContext="Recruitment & Career Inquiry Desk"
          />
        </div>
      </section>
    </div>
  );
}
