import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Compass,
  ArrowRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Sparkles,
  Briefcase,
  Megaphone,
  UserCheck
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { companyInfo } from "@/data/company";
import { primaryServices } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | Complete Human Resource & Institutional Solutions",
  description:
    "Learn about SRD Edu Corporation, founded and led by Suhani Raj D (Founder & CEO). Complete human resource management solutions, academic staffing, operational support, and institutional development.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <PageBanner
        title="About SRD Edu Corporation"
        subtitle={companyInfo.tagline}
        description="SRD Edu Corporation is an educational services and institutional development enterprise offering integrated human resource management, faculty recruitment, operational staffing, global placement, skill programs, and regulatory documentation."
        badge={{
          icon: ShieldCheck,
          label: "Corporate Profile & Executive Leadership",
        }}
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 2. Executive Leadership & Founder Spotlight (Suhani Raj D) */}
      <section id="leadership" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF7F5] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Founder Photo & Profile Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                {/* Decorative Background Accent Glow */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#521D27] via-[#EFC269]/40 to-[#521D27]/80 rounded-[32px] blur-xl opacity-30 -z-10" />

                {/* Photo Frame Container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#521D27]">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/about/suhani-raj-d.jpg"
                      alt="Suhani Raj D - Founder & CEO, SRD Edu Corporation"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      priority
                      className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Gradient Overlay at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#260B12] via-[#260B12]/80 to-transparent p-6 text-white text-center">
                    <span className="inline-block px-3 py-1 bg-[#EFC269] text-[#29252A] text-[11px] font-bold uppercase tracking-wider rounded-full mb-1.5 shadow-sm">
                      Founder & CEO
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] tracking-tight">
                      SUHANI RAJ D
                    </h3>
                    <p className="text-xs text-white/80 font-medium">
                      SRD Edu Corporation Private Limited
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Vision & HR Solutions Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-md border border-[#EFC269]/40">
                  Founder & CEO Message
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] font-['Poppins'] mt-3 leading-tight">
                  Complete Human Resource Management Solutions for Educational Institutions
                </h2>
              </div>

              {/* Founder Statement Blocks with Prominent Highlight */}
              <div className="space-y-4 text-sm sm:text-base text-[#4A4245] leading-relaxed">
                <p className="p-4 rounded-xl bg-[#F8F5F0] border-l-4 border-[#521D27] font-semibold text-[#29252A] italic">
                  &ldquo;At SRD, we provide complete human resource management solutions for educational institutions.&rdquo;
                </p>

                <p>
                  We supply highly qualified and experienced professionals, including <strong>School Management Experts</strong>, <strong>Faculties</strong>, <strong>Educators</strong>, <strong>Competitive Exam Trainers</strong>, <strong>Skill Trainers</strong>, <strong>Counsellors</strong>, and <strong>Mentors</strong>, to ensure academic excellence and overall institutional growth.
                </p>

                <p>
                  Beyond academics, we also provide strong operational support with <strong>Marketing Experts</strong>, <strong>Media Management Teams</strong>, and dedicated <strong>Institution Working Staff</strong>. Our goal is to build a skilled and committed team that drives your institution towards success.
                </p>
              </div>

              {/* Two Core Human Resource Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Pillar 1: Academic Excellence */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm space-y-2 hover:border-[#EFC269] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27]/10 text-[#521D27] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#521D27]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1C1917] font-['Poppins']">
                    Academic & Pedagogical Talent
                  </h4>
                  <ul className="text-xs text-[#63595C] space-y-1 pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> School Management Experts
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Senior Faculties & Educators
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Competitive Exam & Skill Trainers
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Student Counsellors & Mentors
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Operational Support */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm space-y-2 hover:border-[#EFC269] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#521D27]/10 text-[#521D27] flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-[#521D27]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1C1917] font-['Poppins']">
                    Operational & Institutional Support
                  </h4>
                  <ul className="text-xs text-[#63595C] space-y-1 pt-1">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Institutional Marketing Experts
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Media & Communications Teams
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Dedicated Institution Working Staff
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#EFC269] font-bold">✓</span> Retention Audits & Staff Stability
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  href="/contact?intent=register"
                  className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <UserCheck className="w-4 h-4 text-[#29252A]" />
                  <span>Request Staffing & HR Consultation</span>
                </Link>
                <Link
                  href="/services#hr-management"
                  className="inline-flex items-center gap-2 bg-[#521D27] hover:bg-[#682431] text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all"
                >
                  <span>Explore HR Management Division</span>
                  <ArrowRight className="w-4 h-4 text-[#EFC269]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Section: Who We Are & Core Positioning */}
      <section id="overview" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#63595C] leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#241E20] font-['Poppins']">
                The Complete Educational Services Partner
              </h2>
              <p>
                The modern educational ecosystem is multifaceted. Schools, colleges, and universities do not operate in a vacuum—they require skilled educators, strategic admissions campaigns, state-of-the-art skill development programs, and compliant regulatory structures to succeed.
              </p>
              <p>
                Rather than acting merely as an isolated recruitment agency or a conventional school, <strong>SRD Edu Corporation</strong> operates as a unified institutional partner. We connect educational institutions, students, professionals, and corporate employers through structured, research-backed solutions.
              </p>
              <div className="p-4 rounded-xl bg-[#F8F7F5] border border-gray-200 text-xs text-[#241E20] font-medium space-y-1">
                <p><strong>Primary Headline:</strong> {companyInfo.headline}</p>
                <p><strong>Supporting Positioning:</strong> {companyInfo.subheadline}</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8F7F5] p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#F8D481]/50 shadow shrink-0">
                  <Image
                    src="/images/logo/srd-logo.jpg"
                    alt="SRD Logo"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#241E20] font-['Poppins']">
                    SRD EDU CORPORATION
                  </h3>
                  <p className="text-xs text-[#521D27] font-semibold">
                    {companyInfo.corePositioning}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#63595C] leading-relaxed">
                Our emblem unites the <strong>fountain pen nib</strong> (symbolizing academic inquiry, documentation, and research rigor) with the <strong>torch flame</strong> (symbolizing guidance, enlightenment, and vocational vision).
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-200 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                  <span>Complete HR & Talent Management Backbone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                  <span>Comprehensive 11-Service Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#521D27]" />
                  <span>Transparent Merit-Based Ethics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Vision & Mission */}
      <section id="vision-mission" className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Guiding Lights"
            title="Vision & Mission"
            subtitle="The enduring principles guiding every institutional collaboration, staffing placement, and student initiative at SRD Edu Corporation."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:border-[#EFC269] transition-all duration-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#EFC269]" />
              </div>
              <h3 className="text-xl font-bold text-[#241E20] font-['Poppins']">
                Our Vision
              </h3>
              <p className="text-sm text-[#63595C] leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:border-[#EFC269] transition-all duration-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-[#EFC269]" />
              </div>
              <h3 className="text-xl font-bold text-[#241E20] font-['Poppins']">
                Our Mission
              </h3>
              <p className="text-sm text-[#63595C] leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Our Approach (6 Steps) */}
      <section id="our-approach" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Execution Discipline"
            title="Our Approach"
            subtitle="Understand → Research → Plan → Connect → Implement → Support"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: "01", name: "Understand", desc: "Clarify institutional objectives & human resource requirements." },
              { num: "02", name: "Research", desc: "Audit regional talent pipelines, standards & requisitions." },
              { num: "03", name: "Plan", desc: "Formulate recruitment roadmaps, faculty profiles & timelines." },
              { num: "04", name: "Connect", desc: "Source verified candidates, faculties & operational experts." },
              { num: "05", name: "Implement", desc: "Deploy academic personnel, conduct onboarding & skill modules." },
              { num: "06", name: "Support", desc: "Provide continuous HR advisory, mentorship & retention audits." },
            ].map((st) => (
              <div key={st.num} className="bg-[#F8F7F5] p-5 rounded-xl border border-gray-200 text-center space-y-2">
                <span className="text-2xl font-black text-[#521D27] font-['Poppins']">{st.num}</span>
                <h4 className="text-sm font-bold text-[#241E20] font-['Poppins']">{st.name}</h4>
                <p className="text-xs text-[#63595C]">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: Business Ecosystem */}
      <section id="business-ecosystem" className="py-16 sm:py-20 bg-[#F8F7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Synergistic Model"
            title="Our Business Ecosystem"
            subtitle="How each vertical interacts to create an enduring institutional development and staffing fly-wheel."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service, idx) => (
              <div key={service.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#EFC269] hover:shadow-md transition-all">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded uppercase">
                    Ecosystem Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#241E20] font-['Poppins']">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#63595C] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#521D27] hover:text-[#B8821B] transition-colors"
                  >
                    <span>View Pillar Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EFC269]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-16 bg-[#521D27] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins']">
            Partner With SRD Edu Corporation
          </h2>
          <p className="text-xs sm:text-sm text-white/80">
            Let’s collaborate to build sustainable educational excellence, qualified staffing teams, and bright career pathways.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=register"
              className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Initiate Institutional Dialogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
