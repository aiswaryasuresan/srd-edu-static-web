import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Building,
  Landmark,
  Award,
  Wrench,
  Briefcase,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { industrySectors } from "@/data/industries";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Industries & Sectors We Serve | Institutional Solutions",
  description:
    "Tailored educational, branding, staffing, and compliance solutions for K-12 schools, colleges, universities, coaching academies, training centers, and corporate employers.",
};

export default function IndustriesPage() {
  const iconMap: Record<string, any> = {
    GraduationCap: GraduationCap,
    Building: Building,
    Landmark: Landmark,
    Award: Award,
    Wrench: Wrench,
    Briefcase: Briefcase,
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <PageBanner
        title="Industries & Sectors We Serve"
        description="Every educational segment has distinct operational realities, regulatory frameworks, and student aspirations. We deliver customized solutions tailored to schools, colleges, universities, and corporate recruiters."
        badge={{
          icon: Sparkles,
          label: "Multi-Sector Educational Impact",
        }}
        breadcrumbs={[{ label: "Industries" }]}
      />

      {/* Industry Sectors Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Target Sectors"
            title="Tailored Institutional Support by Sector"
            subtitle="Explore how SRD Edu Corporation addresses the distinct strategic needs of each educational entity."
            align="center"
          />

          <div className="mt-12 space-y-8">
            {industrySectors.map((sector, idx) => {
              const Icon = iconMap[sector.icon] || Building;

              return (
                <div
                  key={sector.id}
                  id={sector.id}
                  className="bg-[#F8F7F5] rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#F5C64D] hover:shadow-lg transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#4A1525] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-6 h-6 text-[#F5C64D]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#B8821B] bg-[#FFF7E6] px-2 py-0.5 rounded uppercase">
                          Sector 0{idx + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins']">
                          {sector.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#4A1525] uppercase tracking-wide">
                      Focus: {sector.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                      {sector.description}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs font-bold text-[#241E20] mb-2 uppercase tracking-wider">
                        Tailored SRD Solutions:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {sector.solutions.map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-[#241E20]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C64D] shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-200 text-center space-y-3">
                    <span className="text-[11px] font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded block">
                      {sector.impactMetrics}
                    </span>
                    <p className="text-xs text-gray-500">
                      Partner with SRD for specialized interventions in your sector.
                    </p>
                    <Link
                      href={`/contact?sector=${encodeURIComponent(sector.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#4A1525] hover:bg-[#6B1F35] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow transition-colors"
                    >
                      <span>Inquire for {sector.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5C64D]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 sm:py-20 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            initialService="General Institutional Partnership"
            sourceContext="Sector Solutions Enquiry"
          />
        </div>
      </section>
    </div>
  );
}
