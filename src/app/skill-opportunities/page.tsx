import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Award,
  Wrench,
  CheckCircle2,
  Calendar,
  Clock,
  Building,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  BookOpen,
  Briefcase,
  Target,
  Compass,
  Check,
  Zap,
  Users
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PageBanner from "@/components/shared/PageBanner";
import { skillVerticalData, sampleSkillPrograms } from "@/data/skills";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Global Skill Opportunities | All Skill Programmes & Formats",
  description:
    "One comprehensive platform for all world skill programmes. Explore Technology & Digital, Professional Development, Vocational Careers, pathways for students and institutions, and flexible training formats.",
};

export default function SkillOpportunitiesSinglePage() {
  const formats = [
    { title: "One-Day Intensive Workshops", duration: "6 to 8 Hours", desc: "Fast-track orientation on modern software, AI tools, or interview readiness." },
    { title: "Weekly Training Modules", duration: "12 to 16 Hours", desc: "Structured weekend or semester modules with practical assignments." },
    { title: "Monthly Skill Accelerators", duration: "30 to 40 Hours", desc: "In-depth project-driven courses building demonstrable portfolio assets." },
    { title: "Three-Month Certifications", duration: "80 to 120 Hours", desc: "Comprehensive semester integration for career transitioning and domain mastery." },
    { title: "Vocational & Trade Labs", duration: "Practical On-Site", desc: "Hands-on apprenticeship programs aligned with regional trade standards." },
    { title: "Online & Hybrid Masterclasses", duration: "Self-Paced + Live", desc: "Flexible digital learning paired with live mentor Q&A cohorts." },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <PageBanner
        title="Global Skill Opportunities"
        subtitle={skillVerticalData.tagline}
        description="SRD Edu Corporation identifies, researches, curates, and facilitates access to transformative skill programs across technology, behavioral leadership, and practical vocational trades. Explore all categories, student benefits, campus modules, and training formats unified on this single page."
        breadcrumbs={[{ label: "Skill Opportunities" }]}
      >
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href="#all-programs"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <span>Explore All Programmes</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
          >
            <span>Partner or Enrol</span>
          </a>
        </div>
      </PageBanner>

      {/* 2. Section: All Skill Programmes Overview & Framework */}
      <section id="all-programs" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Global Skill Epicentre"
            title="The Complete Skill Ecosystem"
            subtitle="Bridging academic curriculum with real-world workplace expectations through structured curation and delivery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F5F0] p-6 rounded-2xl border border-gray-200 hover:border-[#F8D481] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-[#F8D481]" />
              </div>
              <h3 className="text-lg font-bold text-[#29252A] font-['Poppins'] mb-2">Global Opportunity Discovery</h3>
              <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                Handpicked, high-impact programs from across the international skill landscape aligned with emerging market demand.
              </p>
            </div>

            <div className="bg-[#F8F5F0] p-6 rounded-2xl border border-gray-200 hover:border-[#F8D481] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-[#F8D481]" />
              </div>
              <h3 className="text-lg font-bold text-[#29252A] font-['Poppins'] mb-2">Multi-Format Delivery</h3>
              <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                From 1-day immersive bootcamps to semester-long credit modules and live on-campus lab workshops.
              </p>
            </div>

            <div className="bg-[#F8F5F0] p-6 rounded-2xl border border-gray-200 hover:border-[#F8D481] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#F8D481]" />
              </div>
              <h3 className="text-lg font-bold text-[#29252A] font-['Poppins'] mb-2">Employment Linkage</h3>
              <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                Direct integration with SRD Edu Corporation’s placement network, corporate recruiting drives, and employer pools.
              </p>
            </div>
          </div>

          {/* 5-Step Process */}
          <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#29252A] font-['Poppins'] mb-6 text-center">
              Our 5-Stage Skill Curation & Execution Model
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {skillVerticalData.process.map((step) => (
                <div key={step.step} className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                  <span className="text-xs font-bold text-[#521D27] bg-[#F8D481]/30 px-2.5 py-0.5 rounded-full inline-block">
                    Step {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#29252A] font-['Poppins']">{step.title}</h4>
                  <p className="text-xs text-[#63595C] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Technology & Digital Programs */}
      <section id="tech-digital" className="py-16 sm:py-20 bg-[#F8F5F0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#F8D481]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/40 px-2.5 py-0.5 rounded">
                Category 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] font-['Poppins'] mt-1">
                Technology & Digital Programs
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#63595C] max-w-3xl leading-relaxed">
            Equipping students and professionals with foundational to advanced software tools, computational thinking, and emerging AI technologies dominating modern global enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillVerticalData.categories[0].items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#F8D481] hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#521D27]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#521D27]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#29252A] block">{item}</span>
                  <span className="text-[11px] text-gray-500">Hands-on Lab & Capstone Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: Professional Development Programs */}
      <section id="professional-dev" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
              <Award className="w-6 h-6 text-[#F8D481]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/40 px-2.5 py-0.5 rounded">
                Category 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] font-['Poppins'] mt-1">
                Professional Development Programs
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#63595C] max-w-3xl leading-relaxed">
            Developing high-value human competencies, verbal confidence, interview presence, and collaborative leadership skills demanded by top employers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillVerticalData.categories[1].items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8F5F0] border border-gray-200 hover:border-[#F8D481] hover:bg-white hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#521D27]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#521D27]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#29252A] block">{item}</span>
                  <span className="text-[11px] text-gray-500">Interactive Boot Camp & Evaluation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: Vocational & Career Programs */}
      <section id="vocational-career" className="py-16 sm:py-20 bg-[#F8F5F0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#F8D481]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/40 px-2.5 py-0.5 rounded">
                Category 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#29252A] font-['Poppins'] mt-1">
                Vocational & Career Programs
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#63595C] max-w-3xl leading-relaxed">
            Practical trade and service capabilities designed for immediate workplace integration across accounting, healthcare support, hospitality, technical crafts, and modern agro-enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillVerticalData.categories[2].items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#F8D481] hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#521D27]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#521D27]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-[#29252A] block">{item}</span>
                  <span className="text-[11px] text-gray-500">Trade Practicum & Apprenticeship</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Pathways for Students & Institutions */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Target Engagement"
            title="Tailored Pathways for Learners & Campuses"
            subtitle="Whether you are an ambitious student or an institutional leader, SRD provides the ideal model for skill integration."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Students & Aspirants */}
            <div id="for-students" className="bg-[#F8F5F0] p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#F8D481] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#F8D481]" />
                </div>
                <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/40 px-2.5 py-0.5 rounded">
                  Aspirants & Graduates
                </span>
                <h3 className="text-2xl font-bold text-[#29252A] font-['Poppins']">
                  For Students & Aspirants
                </h3>
                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  Step beyond conventional textbook memorization. Build practical capability in AI copilots, programming, spoken English fluency, and industry-standard accounting to stand out decisively during campus placements.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-gray-200 text-xs sm:text-sm text-[#29252A]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Verified completion certificates from accredited industry bodies</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Capstone project development for demonstrable resume portfolios</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Direct referrals to SRD pooled institutional placement drives</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>One-on-one interview coaching & mock panel assessments</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <a
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#521D27] hover:bg-[#6b2533] text-white text-xs font-bold py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Enrol as Student / Aspirant</span>
                  <ArrowRight className="w-4 h-4 text-[#F8D481]" />
                </a>
              </div>
            </div>

            {/* For Institutions */}
            <div id="for-institutions" className="bg-[#F8F5F0] p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#F8D481] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#521D27] text-white flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#F8D481]" />
                </div>
                <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/40 px-2.5 py-0.5 rounded">
                  Campuses & Trustees
                </span>
                <h3 className="text-2xl font-bold text-[#29252A] font-['Poppins']">
                  For Schools, Colleges & Universities
                </h3>
                <p className="text-xs sm:text-sm text-[#63595C] leading-relaxed">
                  Empower your student body with credit-aligned skill modules, on-campus computer lab workshops, and expert visiting trainers without disrupting regular semester academic timetables.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-gray-200 text-xs sm:text-sm text-[#29252A]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Turnkey syllabus, courseware, and trainer deployment</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Measurable student learning outcome metrics for NAAC / NBA</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Joint institutional branding, workshops & convocation ceremonies</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#521D27] shrink-0" />
                    <span>Flexible timetables: weekend, vacation, or semester-embedded models</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <a
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F8D481] hover:bg-[#e6c06b] text-[#29252A] text-xs font-bold py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Request Institutional Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section: Six Structured Training Formats */}
      <section id="training-formats" className="py-16 sm:py-20 bg-[#F8F5F0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Flexible Delivery"
            title="Six Structured Training Formats"
            subtitle="Adapted to institutional schedules, student availability, and pedagogical objectives."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#F8D481] hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#521D27] uppercase tracking-wider bg-[#F8D481]/30 px-2.5 py-0.5 rounded border border-[#F8D481]/40">
                    Format 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#521D27] bg-[#521D27]/10 px-2 py-0.5 rounded">
                    {fmt.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#29252A] font-['Poppins']">
                  {fmt.title}
                </h4>
                <p className="text-xs text-[#63595C] leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Section: Curated Sample Programmes Directory */}
      <section id="curated-directory" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Featured Catalog"
            title="Selected High-Impact Programmes"
            subtitle="Browse flagship skill tracks available for immediate campus workshop booking or aspirant registration."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleSkillPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#F8F5F0] rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#F8D481] hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#521D27] px-2.5 py-1 rounded border border-gray-200">
                      {prog.category}
                    </span>
                    <span className="text-xs font-semibold text-[#521D27] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#29252A] font-['Poppins']">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-[#63595C] leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Key Topics:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.topics.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-white text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">{prog.format}</span>
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#521D27] hover:text-[#e6c06b] transition-colors"
                  >
                    <span>Request Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Form Section */}
      <section id="enquiry" className="py-16 sm:py-20 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner With Us"
            title="Skill Program Consultation & Campus Booking"
            subtitle="Submit your requirements to discuss workshop schedules, custom courseware, or individual enrolment."
            align="center"
          />
          <div className="mt-8">
            <EnquiryForm
              initialService="Global Skill Opportunities & Campus Workshops"
              sourceContext="Skill Opportunities Master Page"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
