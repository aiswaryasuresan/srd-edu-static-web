import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Users,
  Target,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  HeartHandshake,
  Compass,
  Laptop,
  FileCheck2,
  Megaphone,
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Human Resource Management Services | SRD Edu Corporation",
  description:
    "Building the Right Team for Educational Excellence. We connect educational institutions with qualified faculties, school management professionals, competitive exam trainers, skill trainers, counsellors, and operational staff.",
};

const catalogueImages = {
  heroTeam: "/images/SRD%20HRM%20Catalouge/1.png",
  deskHR: "/images/SRD%20HRM%20Catalouge/8.png",
  blocks: "/images/SRD%20HRM%20Catalouge/9.png",
  campus: "/images/SRD%20HRM%20Catalouge/38.png",
  billboard: "/images/SRD%20HRM%20Catalouge/44.png",
  pos1_management: "/images/SRD%20HRM%20Catalouge/29.png",
  pos2_faculty: "/images/SRD%20HRM%20Catalouge/30.png",
  pos3_competitive: "/images/SRD%20HRM%20Catalouge/31.png",
  pos4_counsellor: "/images/SRD%20HRM%20Catalouge/32.jpg",
  pos5_skill: "/images/SRD%20HRM%20Catalouge/35.png",
  pos6_operations: "/images/SRD%20HRM%20Catalouge/34.png",
  pos7_admin: "/images/SRD%20HRM%20Catalouge/37.png",
  pos8_media: "/images/SRD%20HRM%20Catalouge/36.png",
  pos9_marketing: "/images/SRD%20HRM%20Catalouge/33.png",
};

export default function HumanResourceManagementPage() {
  return (
    <div className="bg-white">

      {/* =========================================================================
          1. PAGE HERO SECTION (Standard PageBanner matching all service pages)
      ========================================================================= */}
      <PageBanner
        title="Human Resource Management"
        subtitle="Building the Right Team for Educational Excellence"
        description="We help educational institutions build capable teams by connecting them with qualified faculties, school management professionals, educators, trainers, counsellors, mentors and operational support staff."
        badge={{
          icon: Sparkles,
          label: "SRD EDU CORPORATION | HUMAN RESOURCE SOLUTIONS",
        }}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Human Resource Management" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#our-services"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Explore Our HR Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contact?intent=register"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            <span>Partner With SRD</span>
          </Link>
        </div>
      </PageBanner>


      {/* =========================================================================
          2. ABOUT OUR HR SERVICES
      ========================================================================= */}
      <section id="about-hr" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={catalogueImages.heroTeam}
                    alt="SRD Human Resource Management - Academic and Institutional Professionals"
                    fill
                    sizes="(max-width: 640px) 100vw, 450px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#501C29]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#EFC269]">
                      Institutional Partner
                    </span>
                    <h4 className="text-lg font-bold font-['Poppins'] mt-1">
                      Right People. Right Roles. Greater Impact.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7E6] border border-[#F5C64D]/40 text-[#B8821B] text-xs font-bold uppercase tracking-wider">
                ABOUT OUR HR SERVICES
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] leading-tight">
                Your Trusted Partner in Educational HR Solutions
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  <strong>SRD Edu Corporation</strong> provides comprehensive Human Resource Management solutions designed specifically for educational institutions.
                </p>
                <p>
                  We support schools, colleges, universities and educational organizations by connecting them with qualified and experienced professionals across academic, management, training, counselling and operational functions.
                </p>
                <p>
                  Our talent network includes <strong>school management experts</strong>, <strong>faculties</strong>, <strong>educators</strong>, <strong>competitive exam trainers</strong>, <strong>skill trainers</strong>, <strong>counsellors</strong> and <strong>mentors</strong>.
                </p>
                <p>
                  Beyond academic staffing, we also support institutions with <strong>marketing experts</strong>, <strong>media management teams</strong> and dedicated <strong>institutional working staff</strong>.
                </p>
                <p>
                  Our objective is to help institutions build skilled, committed and capable teams that contribute to academic excellence and sustainable institutional growth.
                </p>
              </div>

              {/* Highlight callout box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF7E6] border-l-4 border-[#B8821B] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#B8821B] uppercase tracking-wider block">
                    SRD Core Philosophy
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#501C29] font-['Poppins'] mt-0.5">
                    Right People. Right Roles. Greater Impact.
                  </p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#B8821B] shrink-0" />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. OUR HR SERVICES
      ========================================================================= */}
      <section id="our-services" className="py-16 sm:py-24 bg-[#FAF7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              OUR HR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              Comprehensive HR Solutions for Educational Institutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We provide professional staffing and human resource support across multiple institutional functions.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 5 Service Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 01. Teaching & Academic Staff */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins']">
                  Teaching & Academic Staff
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Qualified and experienced faculty members, educators and subject experts to support teaching and academic requirements across different educational levels.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-bold text-[#B8821B]">
                Academic Excellence
              </div>
            </div>

            {/* 02. Management & Leadership */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins']">
                  Management & Leadership
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  School management experts and administrative professionals to support institutional operations, planning and leadership requirements.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-bold text-[#B8821B]">
                Institutional Governance
              </div>
            </div>

            {/* 03. Training & Development */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins']">
                  Training & Development
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Competitive exam trainers, skill trainers and professional development experts to support learning and capacity building.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-bold text-[#B8821B]">
                Capability Building
              </div>
            </div>

            {/* 04. Counselling & Mentoring */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    04
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins']">
                  Counselling & Mentoring
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Career counsellors, student mentors and psychological support professionals for student guidance and institutional support.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-bold text-[#B8821B]">
                Student Well-Being
              </div>
            </div>

            {/* 05. Support & Operations */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    05
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins']">
                  Support & Operations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Marketing experts, media management teams, HR and operations professionals and dedicated institutional working staff.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-bold text-[#B8821B]">
                Operational Backbone
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. KEY POSITIONS WE PROVIDE (with Catalogue Photography)
      ========================================================================= */}
      <section id="positions" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              KEY POSITIONS WE PROVIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              For a Stronger Educational Ecosystem
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              SRD supports institutional staffing requirements across academic, management and operational functions.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 9 Positions Grid with Official Brochure Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Position 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos1_management}
                    alt="School Management Experts"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 01
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    School Management Experts
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Institutional leadership and management professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Leadership & Governance
                </span>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos2_faculty}
                    alt="Faculty"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 02
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Faculty
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Qualified teaching professionals and educators.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Teaching & Academics
                </span>
              </div>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos3_competitive}
                    alt="Subject Experts for Competitive Exams"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 03
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Subject Experts for Competitive Exams
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Specialized subject trainers and examination experts.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  JEE | NEET | Olympiads
                </span>
              </div>
            </div>

            {/* Position 4 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos4_counsellor}
                    alt="Counsellors & Mentors"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 04
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Counsellors & Mentors
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Student guidance, counselling and mentoring professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Guidance & Mentoring
                </span>
              </div>
            </div>

            {/* Position 5 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos5_skill}
                    alt="Skill Trainers"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 05
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Skill Trainers
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Professional and employability skill trainers.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Vocational & Practical
                </span>
              </div>
            </div>

            {/* Position 6 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos6_operations}
                    alt="HR & Operations Support Team"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 06
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    HR & Operations Support Team
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Human resources and institutional operations support.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Operations & People
                </span>
              </div>
            </div>

            {/* Position 7 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos7_admin}
                    alt="Administrative & Support Staff"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 07
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Administrative & Support Staff
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Administrative and institutional support professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Campus Administration
                </span>
              </div>
            </div>

            {/* Position 8 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.pos8_media}
                    alt="Media & Technical Experts"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 08
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Media & Technical Experts
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Media, digital and technical professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Media & Broadcast
                </span>
              </div>
            </div>

            {/* Position 9 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={catalogueImages.billboard}
                    alt="Marketing Professionals"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#501C29] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 09
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#501C29] transition-colors">
                    Marketing Professionals
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Marketing and institutional communication professionals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <span className="inline-block text-xs font-semibold text-[#B8821B] bg-[#FFF7E6] px-2.5 py-1 rounded">
                  Admissions & Outreach
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. WHY CHOOSE SRD?
      ========================================================================= */}
      <section id="why-choose-srd" className="py-16 sm:py-24 bg-[#FAF7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              WHY CHOOSE SRD?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              More Than Recruitment – A Long-Term Partnership
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We focus on helping institutions find suitable professionals while supporting their long-term academic and organizational development.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 6 Advantage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 01. Verified & Qualified Professionals */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">01.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                Verified & Qualified Professionals
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Carefully selected and background-checked professionals.
              </p>
            </div>

            {/* 02. Customized Solutions */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">02.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                Customized Solutions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Staffing solutions tailored to your institution&apos;s unique requirements.
              </p>
            </div>

            {/* 03. End-to-End Support */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">03.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                End-to-End Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Support extending from hiring to training and development.
              </p>
            </div>

            {/* 04. Focus on Excellence */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">04.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                Focus on Excellence
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Committed to academic and institutional growth.
              </p>
            </div>

            {/* 05. Timely Placement */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">05.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                Timely Placement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Quick and efficient support for institutional hiring requirements.
              </p>
            </div>

            {/* 06. Long-Term Partnership */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#B8821B] font-['Poppins']">06.</span>
              <h3 className="text-lg font-bold text-[#501C29] font-['Poppins'] mt-1 mb-2">
                Long-Term Partnership
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building lasting professional relationships with educational institutions.
              </p>
            </div>

          </div>

          {/* Highlight Callout */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#501C29] text-[#EFC269] text-base sm:text-lg font-bold font-['Poppins'] px-8 py-3.5 rounded-2xl shadow-lg border border-[#EFC269]/30">
              Better Teams Build Better Institutions.
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. OUR RECRUITMENT PROCESS
      ========================================================================= */}
      <section id="process" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              OUR RECRUITMENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              Simple. Transparent. Effective.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Our structured recruitment process helps institutions communicate their staffing requirements and identify suitable professionals.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 5-Step Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            
            {/* Step 01 */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#EFC269] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-[#1C1917] font-['Poppins']">
                  Requirement Analysis
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Understanding your institution&apos;s staffing needs, roles and expectations.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#EFC269] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-[#1C1917] font-['Poppins']">
                  Sourcing & Screening
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Identifying and evaluating potential candidates according to the requirements.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#EFC269] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-[#1C1917] font-['Poppins']">
                  Interviews & Evaluation
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Assessing candidate skills, attitude, qualifications and suitability.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#EFC269] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-[#1C1917] font-['Poppins']">
                  Selection & Offer
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Supporting the selection process to help identify the right match.
                </p>
              </div>
            </div>

            {/* Step 05 */}
            <div className="bg-[#FAF7F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#EFC269] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#501C29] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
                  05
                </div>
                <h3 className="text-base font-bold text-[#1C1917] font-['Poppins']">
                  Onboarding
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Supporting smooth joining and ongoing assistance.
                </p>
              </div>
            </div>

          </div>

          {/* Closing Statement */}
          <div className="mt-12 text-center">
            <p className="text-sm sm:text-base font-extrabold text-[#501C29] font-['Poppins'] tracking-wide">
              Quality Hiring &nbsp;|&nbsp; Better Performance &nbsp;|&nbsp; Lasting Success
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          7. OUR COMMITMENT
      ========================================================================= */}
      <section id="commitment" className="py-16 sm:py-24 bg-[#501C29] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFC269]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFC269] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] mt-3">
              Your Growth. Our Responsibility.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              Together, we build better institutions through quality talent and long-term professional support.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 4 Commitment Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#EFC269] text-[#2A0A14] flex items-center justify-center font-bold mb-4 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">
                Quality Talent
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Skilled and experienced professionals.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#EFC269] text-[#2A0A14] flex items-center justify-center font-bold mb-4 shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">
                Institution Growth
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Building stronger and sustainable institutions.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#EFC269] text-[#2A0A14] flex items-center justify-center font-bold mb-4 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">
                Academic Excellence
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Supporting better learning outcomes.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#EFC269] text-[#2A0A14] flex items-center justify-center font-bold mb-4 shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Poppins'] mb-2">
                Long-Term Partnership
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Growing together for a brighter future.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          8. OUR OTHER SERVICES
      ========================================================================= */}
      <section id="other-services" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              OUR OTHER SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#501C29] font-['Poppins'] mt-3">
              Beyond Human Resource Management
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              SRD Edu Corporation offers a broader educational services ecosystem to support institutional development and growth.
            </p>
            <div className="w-16 h-1 bg-[#EFC269] rounded-full mx-auto mt-4" />
          </div>

          {/* 8 Other Service Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Research and Development */}
            <Link
              href="/services/institute-research-development"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Research and Development
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Institutional research policy, publications & innovation.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 2. IT and Data Management */}
            <Link
              href="/services/data-analytics"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  IT and Data Management
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  SIS architecture, analytics & digital campus infrastructure.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 3. Media and Branding */}
            <Link
              href="/services/branding-marketing"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Media and Branding
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Brand identity, admission campaigns & PR outreach.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 4. Skill Training Programs */}
            <Link
              href="/services/skill-development-project"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Skill Training Programs
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Credit-aligned vocational skills, labs & youth training.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 5. Competitive Exam Programs */}
            <Link
              href="/services/competitive-exam-support"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Competitive Exam Programs
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Integrated school JEE, NEET, Olympiads & Foundation.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 6. Infrastructure and Investment */}
            <Link
              href="/services/infrastructure-finance-support"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Infrastructure and Investment
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Campus master planning, capital modeling & project finance.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 7. Documentation and Policy Making */}
            <Link
              href="/services/document-legal-support"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Documentation and Policy Making
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Affiliation paperwork, statutory approvals & bylaws.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* 8. Global Placement Services */}
            <Link
              href="/services/placement-assistance"
              className="group p-6 rounded-2xl bg-[#FAF7F5] border border-gray-200 hover:border-[#EFC269] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#501C29]/10 text-[#501C29] group-hover:bg-[#501C29] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#501C29] transition-colors font-['Poppins'] mb-1">
                  Global Placement Services
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Campus recruitment drives, employer tie-ups & hiring.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B8821B] mt-4 pt-3 border-t border-gray-100">
                <span>View Service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================================
          9. FINAL CALL-TO-ACTION SECTION
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#501C29] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            {/* Background aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFC269]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              
              <span className="inline-block px-3.5 py-1 bg-[#EFC269] text-[#2A0A14] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                FINAL CALL-TO-ACTION
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins'] leading-tight">
                Let&apos;s Build Your Team Together
              </h2>

              <p className="text-lg sm:text-xl text-[#EFC269] font-bold font-['Poppins']">
                Your Success. Our Mission.
              </p>

              <div className="text-sm sm:text-base text-white/90 leading-relaxed space-y-2">
                <p>
                  Partner with SRD for reliable, professional and result-oriented HR solutions.
                </p>
                <p className="font-semibold text-white">
                  Build a capable team. Strengthen your institution. Create a brighter future with SRD Edu Corporation.
                </p>
              </div>

              {/* Service Highlights */}
              <div className="pt-2 pb-2">
                <p className="text-xs uppercase tracking-widest text-[#EFC269] font-bold mb-2">
                  Service Highlights:
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white/90">
                  Recruitment &nbsp;|&nbsp; Staffing &nbsp;|&nbsp; Training &nbsp;|&nbsp; Development &nbsp;|&nbsp; Support
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact?intent=register"
                  className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#2A0A14] font-bold text-xs sm:text-sm px-7 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Partner With SRD</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#contact-info"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-7 py-4 rounded-xl border border-white/25 transition-all duration-200"
                >
                  <span>Contact Our Team</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          10. CONTACT INFORMATION & ENQUIRY FORM
      ========================================================================= */}
      <section id="contact-info" className="py-16 sm:py-24 bg-[#FAF7F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Official Contact Card */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
                  CONTACT INFORMATION
                </span>
                <h3 className="text-2xl font-black text-[#501C29] font-['Poppins'] mt-3">
                  SRD EDU CORPORATION
                </h3>
                <p className="text-xs font-bold text-[#B8821B] uppercase tracking-wider mt-1">
                  Research | Education | Placement
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  The Complete Educational Services Partner.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4 pt-2 border-t border-gray-100 text-sm text-gray-700">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#501C29]/10 text-[#501C29] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Phone</span>
                    <a href="tel:+919876543210" className="font-semibold text-[#1C1917] hover:text-[#501C29] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#501C29]/10 text-[#501C29] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Email</span>
                    <a href="mailto:srdecducorp@gmail.com" className="font-semibold text-[#1C1917] hover:text-[#501C29] transition-colors">
                      srdecducorp@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#501C29]/10 text-[#501C29] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Website</span>
                    <a href="https://srdeducorp.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1C1917] hover:text-[#501C29] transition-colors">
                      srdeducorp.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#501C29]/10 text-[#501C29] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Address</span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      DF Creations, #122, 3rd Floor,<br />
                      Opposite Brigade Tower,<br />
                      Brigade Road, Woodstreet,<br />
                      Bangalore – 560025.
                    </p>
                  </div>
                </div>

              </div>

              {/* Final Tagline Callout */}
              <div className="pt-4 border-t border-gray-100">
                <div className="p-4 rounded-xl bg-[#FFF7E6] border border-[#F5C64D]/40 text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-[#501C29] font-['Poppins']">
                    &ldquo;Qualified People. Strong Institutions. Brighter Future.&rdquo;
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Institutional Staffing Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
                  STAFFING INQUIRY
                </span>
                <h3 className="text-2xl font-bold text-[#501C29] font-['Poppins'] mt-2">
                  Request an Institutional HR Consultation
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Tell us about your faculty, management, training, or operational staffing needs. Our educational HR advisory team will contact you promptly.
                </p>
              </div>

              <EnquiryForm initialService="Human Resource & Faculty Staffing" sourceContext="HR Management Service Page" />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
