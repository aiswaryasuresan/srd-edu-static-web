import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Globe,
  Compass,
} from "lucide-react";
import { BusinessVertical } from "@/types";
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
        backgroundImage={data.heroImage || "/images/banner/campus-banner.jpg"}
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
            href="#contact-section"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
          >
            <span>Contact Us</span>
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
          FOLD 3: OUR WORK PROCESS (4-Step Brochure Workflow)
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
          FOLD 4: DIRECT CONTACT INFORMATION (Form Removed; Contact & Email Only)
      ========================================================================= */}
      <section id="contact-section" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm text-center">
            
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9A6715] bg-[#FFF7E6] px-3.5 py-1.5 rounded-full border border-[#EFC269]/40 mb-4">
              CONTACT US FOR {data.title.toUpperCase()}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mb-3">
              Let&apos;s Build Together
            </h2>

            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with SRD Edu Corporation for reliable, professional, and result-oriented institutional solutions. Reach out directly to our advisory desk.
            </p>

            {/* Direct Contact Grid: Phone, Email, Website, Office Address */}
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

              {/* Office Address */}
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

            {/* Direct Action Buttons: Call & Email */}
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
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-[#501C29] font-bold text-sm px-7 py-3.5 rounded-xl border border-stone-300 shadow-sm transition-all"
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
