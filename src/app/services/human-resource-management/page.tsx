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
        description="We help educational institutions build capable teams by connecting them with qualified faculties, school management professionals, educators, trainers, counsellors, mentors and operational support staff."
        descriptionColor="gold"
        backgroundImage="/images/banner/service-hr-banner.jpg"
        breadcrumbs={[
          { label: "Services" },
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#521D27]/90 via-transparent to-transparent flex items-end p-6">
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

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#521D27] font-['Poppins'] leading-tight">
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
                  <p className="text-base sm:text-lg font-bold text-[#521D27] font-['Poppins'] mt-0.5">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#521D27] font-['Poppins'] mt-3">
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
                  <div className="w-12 h-12 rounded-xl bg-[#521D27]/10 text-[#521D27] group-hover:bg-[#521D27] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins']">
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
                  <div className="w-12 h-12 rounded-xl bg-[#521D27]/10 text-[#521D27] group-hover:bg-[#521D27] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins']">
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
                  <div className="w-12 h-12 rounded-xl bg-[#521D27]/10 text-[#521D27] group-hover:bg-[#521D27] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins']">
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
                  <div className="w-12 h-12 rounded-xl bg-[#521D27]/10 text-[#521D27] group-hover:bg-[#521D27] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    04
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins']">
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
                  <div className="w-12 h-12 rounded-xl bg-[#521D27]/10 text-[#521D27] group-hover:bg-[#521D27] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full font-['Poppins']">
                    05
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#521D27] transition-colors font-['Poppins']">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#521D27] font-['Poppins'] mt-3">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 01
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 02
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 03
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 04
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 05
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 06
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 07
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 08
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
                  <div className="absolute top-3 left-3 bg-[#521D27] text-[#EFC269] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Position 09
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] mb-2 group-hover:text-[#521D27] transition-colors">
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
          6. OUR RECRUITMENT PROCESS
      ========================================================================= */}
      <section id="process" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8821B] bg-[#FFF7E6] px-3 py-1 rounded-full border border-[#EFC269]/40">
              OUR RECRUITMENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#521D27] font-['Poppins'] mt-3">
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
                <div className="w-11 h-11 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
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
                <div className="w-11 h-11 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
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
                <div className="w-11 h-11 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
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
                <div className="w-11 h-11 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
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
                <div className="w-11 h-11 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center font-black text-sm font-['Poppins'] shadow-sm">
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
            <p className="text-sm sm:text-base font-extrabold text-[#521D27] font-['Poppins'] tracking-wide">
              Quality Hiring &nbsp;|&nbsp; Better Performance &nbsp;|&nbsp; Lasting Success
            </p>
          </div>

        </div>
      </section>





      {/* =========================================================================
          7. CONTACT INFORMATION (Direct Contact & Email Only)
      ========================================================================= */}
      <section id="contact-info" className="py-16 sm:py-24 bg-[#FAF7F5] border-t border-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/10 border border-[#521D27]/20 mb-4">
              <Phone className="w-4 h-4 text-[#521D27]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#521D27]">
                Connect With Our HR Advisory Team
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#521D27] font-['Poppins'] mb-3">
              Let&apos;s Build Your Team Together
            </h2>

            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with SRD for reliable, professional, and result-oriented educational HR solutions. Reach out directly to our institutional staffing desk.
            </p>

            {/* Direct Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              {/* Phone */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Phone / WhatsApp</span>
                  <a
                    href="tel:+919036041206"
                    className="font-bold text-base text-[#521D27] hover:underline"
                  >
                    +91 90360 41206
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Official Email</span>
                  <a
                    href="mailto:srdecducorp@gmail.com"
                    className="font-bold text-sm text-[#521D27] hover:underline block truncate max-w-[200px]"
                  >
                    srdecducorp@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Website</span>
                  <a
                    href="https://srdeducorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-[#521D27] hover:underline"
                  >
                    srdeducorp.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px] font-bold uppercase">Office Address</span>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    DF Creations, #122, 3rd Floor, Opposite Brigade Tower, Brigade Road, Woodstreet, Bangalore – 560025.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: Call & Email */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919036041206"
                className="inline-flex items-center gap-2 bg-[#521D27] hover:bg-[#3d141f] text-[#EFC269] font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>

              <a
                href="mailto:srdecducorp@gmail.com"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#521D27] font-bold text-sm px-7 py-3.5 rounded-xl border border-stone-300 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Our Team</span>
              </a>
            </div>

            {/* Final Tagline Callout */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs sm:text-sm font-bold text-[#521D27] italic font-serif">
                &ldquo;Your Success, Our Mission — Qualified People • Strong Institutions • Brighter Future&rdquo;
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
