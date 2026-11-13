import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Layers,
  Phone,
  Mail,
  MapPin,
  Globe,
  Compass,
} from "lucide-react";
import { BusinessVertical } from "@/types";
import EnquiryForm from "@/components/forms/EnquiryForm";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";

interface ServicePageTemplateProps {
  data: BusinessVertical;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const pillars = [
    {
      title: "Quality Talent",
      description: "Skilled, verified & experienced professionals.",
      icon: Users,
    },
    {
      title: "Institution Growth",
      description: "Building stronger, sustainable educational systems.",
      icon: TrendingUp,
    },
    {
      title: "Academic Excellence",
      description: "Supporting measurable learning and institutional outcomes.",
      icon: GraduationCap,
    },
    {
      title: "Long-Term Partnership",
      description: "Growing together for enduring institutional success.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-white">
      {/* =========================================================================
          FOLD 1: HERO BANNER & BROCHURE VISUAL OVERVIEW
      ========================================================================= */}
      <PageBanner
        title={data.title}
        subtitle={data.tagline}
        description={data.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#disciplines"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <span>Explore Key Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#enquiry-section"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
          >
            <span>Partner With SRD</span>
          </a>
        </div>
      </PageBanner>

      {/* Brochure Visual Section: "Together We Build Better Institutions" (4 Greek Pillars Graphic from Brochure) */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Intro Bar */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#501C29]/10 border border-[#501C29]/20 mb-3">
              <Compass className="w-4 h-4 text-[#501C29]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#501C29]">
                SRD COMMITMENT & PILLARS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#501C29] font-['Poppins']">
              Together We Build Better Institutions
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              {data.longDescription}
            </p>
          </div>

          {/* The 4 Greek Architectural Pillars Diagram (Recreated from Official Brochure Page 6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-gradient-to-b from-[#501C29] to-[#36111A] text-white rounded-3xl p-7 border-t-4 border-t-[#EFC269] shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Capital Ornament */}
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#EFC269] flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold font-['Poppins'] text-white group-hover:text-[#EFC269] transition-colors mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Base Fluting Accent */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#EFC269] uppercase tracking-wider">
                    <span>Pillar 0{idx + 1}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlight Quote */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base font-bold text-[#501C29] italic font-serif">
              &ldquo;Skilled People. Strong Institutions. Brighter Future.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FOLD 2: KEY OFFERINGS & SERVICE DISCIPLINES (Brochure Style Cards)
      ========================================================================= */}
      <section id="disciplines" className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#501C29] bg-[#501C29]/10 border border-[#501C29]/20 px-3.5 py-1.5 rounded-full font-['Poppins']">
              STRUCTURED DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241E20] font-['Poppins'] mt-3">
              Comprehensive Service Capabilities
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              Every offering is engineered around institutional rigor, compliance transparency, and measurable educational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.categories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#FAF8F5] rounded-3xl p-7 sm:p-8 border border-stone-200 hover:border-[#501C29] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-[#501C29] text-[#EFC269]">
                      0{cIdx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9A6715] bg-[#FFF7E6] px-2 py-0.5 rounded border border-[#EFC269]/40">
                      Module
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#241E20] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241E20]">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
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

      {/* =========================================================================
          FOLD 3: OUR WORK PROCESS (6-Step Brochure Workflow Timeline)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#501C29] bg-[#501C29]/10 px-3 py-1 rounded-full font-['Poppins']">
              WORK PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241E20] font-['Poppins'] mt-2">
              A Simple Process. Powerful Results.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {data.process.slice(0, 4).map((proc, pIdx) => (
              <div
                key={pIdx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#501C29] font-mono block mb-2">
                    {proc.step}
                  </span>
                  <h3 className="text-base font-bold text-[#241E20] font-['Poppins'] mb-1">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOLD 4: REGISTRATION & DIRECT COMPANY CONTACT BLOCK
      ========================================================================= */}
      <section id="enquiry-section" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Card Directly from Brochure Page 8 */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A6715] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
                  OFFICIAL CONTACT DESK
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241E20] font-['Poppins'] mt-3">
                  Let&apos;s Build Together
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  Partner with SRD Edu Corporation for reliable, professional, and result-oriented institutional solutions.
                </p>
              </div>

              {/* Company Info Box */}
              <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-stone-200 space-y-4">
                <h3 className="text-base font-bold text-[#501C29] font-['Poppins'] uppercase tracking-wider border-b border-stone-200 pb-2">
                  {companyInfo.name}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#241E20]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#501C29] shrink-0" />
                    <div>
                      <span className="text-stone-500 block text-[11px] font-bold uppercase">Phone / WhatsApp</span>
                      <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#501C29] hover:underline">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#501C29] shrink-0" />
                    <div>
                      <span className="text-stone-500 block text-[11px] font-bold uppercase">Official Email</span>
                      <a href={`mailto:${companyInfo.contact.email}`} className="font-semibold text-[#501C29] hover:underline">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#501C29] shrink-0" />
                    <div>
                      <span className="text-stone-500 block text-[11px] font-bold uppercase">Website</span>
                      <a href={`https://${companyInfo.contact.website}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#501C29] hover:underline">
                        {companyInfo.contact.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <MapPin className="w-4 h-4 text-[#501C29] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-500 block text-[11px] font-bold uppercase">Registered Office</span>
                      <p className="text-stone-600 leading-relaxed text-xs">
                        {companyInfo.contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200">
                  <p className="text-xs font-bold text-[#501C29] italic font-serif">
                    &ldquo;Your Success, Our Mission&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Registration / Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#241E20] font-['Poppins']">
                    Request {data.title} Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Complete this brief form to connect directly with our advisory specialists.
                  </p>
                </div>

                <EnquiryForm
                  initialService={data.title}
                  sourceContext={`Service Page: ${data.title}`}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
