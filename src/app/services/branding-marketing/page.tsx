import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  CheckCircle2,
  Award,
  Layers,
  Compass,
  Megaphone,
  Palette,
  Newspaper,
  Monitor,
  Headphones,
  Video,
  Tv,
  Eye,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  MessageSquare,
  Users,
  ShieldCheck,
  Building2,
  Share2,
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Institution Branding & Marketing Services | SRD Edu Corporation",
  description:
    "Build Your Identity. Reach the Right Audience. Grow Your Institution. Comprehensive branding and marketing solutions for schools, colleges, and universities across India.",
};

const catalogueImages = {
  buildingFacade: "/images/SRD%20Branding%20%20catalogue/1.png",
  creativeTablet: "/images/SRD%20Branding%20%20catalogue/5.png",
  studioMac: "/images/SRD%20Branding%20%20catalogue/8.png",
  campusBillboard: "/images/SRD%20Branding%20%20catalogue/15.png",
  campaignOutdoor: "/images/SRD%20Branding%20%20catalogue/6.png",
  brochureShowcase: "/images/SRD%20Branding%20%20catalogue/3.png",
  digitalMedia: "/images/SRD%20Branding%20%20catalogue/10.png",
  displayScreen: "/images/SRD%20Branding%20%20catalogue/12.png",
  eventOutreach: "/images/SRD%20Branding%20%20catalogue/13.png",
  admissionsDesign: "/images/SRD%20Branding%20%20catalogue/14.png",
  brandIdentity: "/images/SRD%20Branding%20%20catalogue/7.png",
};

export default function BrandingMarketingPage() {
  return (
    <div className="bg-white">
      {/* =========================================================================
          1. PAGE HERO SECTION (Standard PageBanner matching all service pages)
      ========================================================================= */}
      <PageBanner
        title="Branding & Marketing"
        subtitle="Build Your Identity. Reach the Right Audience. Grow Your Institution."
        description="We help educational institutions build strong brands, improve visibility, connect with prospective students and create meaningful growth through integrated branding and marketing solutions."
        badge={{
          icon: Sparkles,
          label: "SRD EDU CORPORATION | BRANDING & MARKETING",
        }}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Branding & Marketing" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#core-services"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Explore Our Services</span>
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
          2. ABOUT OUR SERVICE
      ========================================================================= */}
      <section id="about-service" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-[#521D27] to-[#802D3C]">
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src={catalogueImages.buildingFacade}
                    alt="SRD Edu Corporation - Educational Branding Campus Facade"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                </div>

                {/* Floating Highlight Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#521D27]/90 backdrop-blur-md border border-[#EFC269]/40 text-white shadow-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#EFC269]" />
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#EFC269]">
                      Core Philosophy
                    </span>
                  </div>
                  <p className="text-sm font-semibold italic text-stone-100">
                    &ldquo;Helping educational institutions build strong brands and reach the right audience.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15">
                <Compass className="w-4 h-4 text-[#521D27]" />
                <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                  About Our Service
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29252A] leading-tight font-serif">
                Strategic Branding. Meaningful Marketing. Institutional Growth.
              </h2>

              <p className="text-base sm:text-lg text-[#4B464E] leading-relaxed">
                SRD Edu Corporation provides comprehensive branding and marketing services for educational institutions.
              </p>

              <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
                We support schools, colleges, universities, training institutions and educational organisations in building a strong institutional identity, improving visibility, communicating their strengths and reaching the right audiences.
              </p>

              <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
                Our services combine strategic branding, creative design, offline promotion, digital marketing, admissions marketing and enquiry management to support institutional growth.
              </p>

              <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
                Every institution is different. We understand the institution, its programmes, objectives, target audience and market before developing a suitable marketing strategy.
              </p>

              {/* Service Highlights Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-3">
                  Service Highlights
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Branding",
                    "Marketing",
                    "Admissions",
                    "Digital",
                    "Creative",
                    "Outreach",
                  ].map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#521D27]/15 text-xs font-bold text-[#521D27]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89E37]" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#521D27] mt-4">
                <p className="text-sm font-semibold text-[#521D27]">
                  Helping educational institutions build strong brands and reach the right audience.
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  The Complete Educational Services Partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE SRD EDU CORPORATION?
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15 mb-4">
              <Award className="w-4 h-4 text-[#521D27]" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                Why Choose SRD?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29252A] leading-tight font-serif mb-4">
              More Than Marketing. A Strategic Growth Partnership.
            </h2>
            <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
              We empower educational institutions to stand out with authority, craft authentic narratives, and establish sustainable admission pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Education-Focused Expertise",
                desc: "Our services are designed around the unique requirements of educational institutions.",
                icon: Building2,
              },
              {
                num: "02",
                title: "Customised Strategies",
                desc: "Marketing strategies developed according to institutional goals, programmes and target audiences.",
                icon: Target,
              },
              {
                num: "03",
                title: "Integrated Marketing",
                desc: "Online, offline, branding and admissions marketing working together as one coordinated approach.",
                icon: Layers,
              },
              {
                num: "04",
                title: "End-to-End Support",
                desc: "From strategy and creative development to campaign implementation and monitoring.",
                icon: ShieldCheck,
              },
              {
                num: "05",
                title: "Data-Informed Approach",
                desc: "Campaign data guides performance evaluation and future improvements.",
                icon: BarChart3,
              },
              {
                num: "06",
                title: "Creative & Innovative",
                desc: "Contemporary and professional visual communication solutions.",
                icon: Sparkles,
              },
              {
                num: "07",
                title: "Long-Term Support",
                desc: "Building lasting institutional marketing capabilities rather than focusing only on one-time campaigns.",
                icon: TrendingUp,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 relative group flex flex-col justify-between ${
                    idx === 6 ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-white via-white to-[#FAF8F5]" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#521D27]/25 group-hover:text-[#521D27]/40 transition-colors font-mono">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#521D27]/5 text-[#521D27] flex items-center justify-center group-hover:bg-[#521D27] group-hover:text-[#EFC269] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#29252A] mb-2 group-hover:text-[#521D27] transition-colors font-serif">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4B464E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#521D27] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Strategic Institutional Advantage</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR CORE SERVICES
      ========================================================================= */}
      <section id="core-services" className="py-16 sm:py-24 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15 mb-4">
              <Megaphone className="w-4 h-4 text-[#521D27]" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29252A] leading-tight font-serif mb-4">
              Comprehensive Branding & Marketing Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
              From establishing an institutional identity to reaching prospective students, SRD provides coordinated marketing support across multiple channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 01. INSTITUTION BRANDING SERVICES */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    01
                  </span>
                  <Palette className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  INSTITUTION BRANDING SERVICES
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Build a Strong Institutional Identity
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We help educational institutions establish a distinctive and consistent brand identity that communicates their values, strengths and vision.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Brand Strategy & Positioning",
                      "Logo Design & Visual Identity",
                      "Brand Guidelines",
                      "Campus Branding",
                      "Brochures & Prospectus Design",
                      "Institution Profile Development",
                      "Brand Story Development",
                      "Digital Brand Identity",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 02. OFFLINE MARKETING SERVICES */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    02
                  </span>
                  <Newspaper className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  OFFLINE MARKETING SERVICES
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Create Local Visibility & Reach
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We design and coordinate traditional promotional activities to help educational institutions build awareness and connect with their target communities.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Newspaper & Magazine Advertising",
                      "Flyers & Leaflets",
                      "Posters & Banners",
                      "Prospectus Printing",
                      "School/College Outreach",
                      "Education Fairs & Exhibitions",
                      "Seminars & Workshops",
                      "Open-Day Promotions",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 03. ONLINE & DIGITAL MARKETING */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    03
                  </span>
                  <Monitor className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  ONLINE & DIGITAL MARKETING
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Reach the Right Audience Online
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We support institutions in developing a strong digital presence and communicating effectively with prospective students and stakeholders.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Website Design & Development",
                      "Search Engine Optimization (SEO)",
                      "Social Media Marketing",
                      "Facebook & Instagram Campaigns",
                      "Google & YouTube Advertising",
                      "Online Admission Campaigns",
                      "Email & WhatsApp Campaigns",
                      "Lead Generation",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 04. CREATIVE DESIGN & CONTENT CREATION (With Photo Showcase) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
              <div>
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden">
                  <Image
                    src={catalogueImages.creativeTablet}
                    alt="Creative Design and Content Creation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                      04
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EFC269]">
                      Creative Studio
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  CREATIVE DESIGN & CONTENT CREATION
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Powerful Designs. Stronger Communication.
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We create visual communication materials that help educational institutions present their identity, programmes and achievements professionally.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Poster & Banner Design",
                      "Hoarding Designs",
                      "Social Media Graphics",
                      "Admission Creatives",
                      "Presentation Designs",
                      "Course Promotion Materials",
                      "Event Branding",
                      "Campaign Creatives",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 05. ADMISSION SUPPORT MARKETING */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    05
                  </span>
                  <Users className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  ADMISSION SUPPORT MARKETING
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Turn Interest into Admissions
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We support educational institutions in reaching prospective students and strengthening their admission communication and promotional activities.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Targeted Admission Campaigns",
                      "Course-wise Promotional Campaigns",
                      "Student Counselling Coordination",
                      "Parent Communication",
                      "Application Support Systems",
                      "Student Engagement Campaigns",
                      "Alumni Stories & Testimonials",
                      "Admission Follow-up Strategies",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 06. CALL CENTRE & ENQUIRY MANAGEMENT */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    06
                  </span>
                  <Headphones className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  CALL CENTRE & ENQUIRY MANAGEMENT
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Turn Enquiries into Meaningful Conversations
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We support institutions with structured enquiry-management processes for admission and promotional campaigns.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Inbound Enquiry Handling",
                      "Outbound Follow-up Support",
                      "Admission Guidance Support",
                      "Lead Tracking & Documentation",
                      "Parent Communication Support",
                      "Enquiry Conversion Tracking",
                      "Multi-Channel Support (Phone, WhatsApp, Email)",
                      "Daily & Weekly Reporting",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 07. DIGITAL CREATIVE PRODUCTION (With Photo Showcase) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
              <div>
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden">
                  <Image
                    src={catalogueImages.studioMac}
                    alt="Digital Creative Production Studio"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                      07
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EFC269]">
                      Media Lab & Production
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  DIGITAL CREATIVE PRODUCTION
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Engaging Digital Visuals for Modern Audiences
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We produce engaging multimedia content to support institutional branding, admission campaigns and digital communication.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Promotional Videos",
                      "Campus Showcase Videos",
                      "Faculty & Student Testimonials",
                      "Reels & Short-Form Videos",
                      "Animation & Motion Graphics",
                      "Event Coverage Videos",
                      "Digital Screen Displays",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 08. TV SCREEN & DIGITAL DISPLAY PROMOTION */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                    08
                  </span>
                  <Tv className="w-6 h-6 text-[#521D27]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  TV SCREEN & DIGITAL DISPLAY PROMOTION
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  Promote Inside & Beyond Your Campus
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We design dynamic digital display content for institutional screens and public digital displays.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Campus Digital Notice Boards",
                      "Admission Announcement Displays",
                      "Achievement Showcases",
                      "Event Promotion Screens",
                      "Digital Signage Creatives",
                      "Interactive Screen Content",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 09. OUTDOOR BRANDING & PROMOTION (With Billboard Photo Showcase) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 hover:shadow-xl hover:border-[#521D27]/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
              <div>
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden">
                  <Image
                    src={catalogueImages.campusBillboard}
                    alt="Outdoor Campus Billboard and Signage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#521D27] text-[#EFC269]">
                      09
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#EFC269]">
                      High-Impact Outdoor
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#29252A] mb-1 font-serif group-hover:text-[#521D27] transition-colors">
                  OUTDOOR BRANDING & PROMOTION
                </h3>
                <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mb-3">
                  High-Impact Visual Presence in Key Locations
                </p>
                <p className="text-sm text-[#4B464E] mb-5 leading-relaxed">
                  We plan and design impactful outdoor advertising to maximize local and regional visibility.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Services Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29252A]">
                    {[
                      "Highway & City Hoardings",
                      "Gantry Advertising",
                      "Bus Shelter Displays",
                      "Transit & Vehicle Branding",
                      "Kiosk & Stall Branding",
                      "Mall & Public Space Displays",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89E37] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR MARKETING APPROACH
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#29252A] via-[#3D141C] to-[#1C0B10] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Compass className="w-4 h-4 text-[#EFC269]" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#EFC269]">
                Our Marketing Approach
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight font-serif mb-2">
              A Strategy Designed Around Your Institution
            </h2>
            <p className="text-sm font-semibold tracking-wider uppercase text-[#EFC269] mb-4">
              Strategy | Creativity | Technology | Results
            </p>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              We approach marketing with a clear structure to ensure campaigns are aligned with institutional goals and deliver measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                name: "UNDERSTAND",
                desc: "Understanding the institution, courses, strengths and admission goals.",
                icon: Search,
              },
              {
                step: "02",
                name: "IDENTIFY",
                desc: "Defining prospective students, parents and target regions.",
                icon: Target,
              },
              {
                step: "03",
                name: "CREATE",
                desc: "Developing relevant messaging, visual designs and marketing materials.",
                icon: Palette,
              },
              {
                step: "04",
                name: "EXECUTE",
                desc: "Deploying coordinated campaigns across digital and offline channels.",
                icon: Megaphone,
              },
              {
                step: "05",
                name: "MEASURE & IMPROVE",
                desc: "Reviewing responses, evaluating campaign reach and refining strategies for better results.",
                icon: TrendingUp,
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#EFC269]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#EFC269] font-mono">
                        {st.step}
                      </span>
                      <Icon className="w-5 h-5 text-stone-400 group-hover:text-[#EFC269] transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide mb-2">
                      {st.name}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#EFC269]/60">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR WORK PROCESS
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15 mb-4">
              <Layers className="w-4 h-4 text-[#521D27]" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                Implementation Framework
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29252A] leading-tight font-serif mb-4">
              A Simple Process. Powerful Results.
            </h2>
            <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
              Our structured approach ensures clear communication, efficient execution and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "CONSULT & UNDERSTAND",
                desc: "Discussing institutional goals, target courses and marketing requirements.",
                icon: MessageSquare,
              },
              {
                step: "02",
                title: "PLAN & DEVELOP STRATEGY",
                desc: "Designing customized marketing campaigns and selecting suitable channels.",
                icon: Target,
              },
              {
                step: "03",
                title: "DESIGN & CREATE",
                desc: "Preparing creatives, messages, brochures and promotional materials.",
                icon: Palette,
              },
              {
                step: "04",
                title: "IMPLEMENT CAMPAIGNS",
                desc: "Launching campaigns across selected offline and online platforms.",
                icon: Megaphone,
              },
              {
                step: "05",
                title: "MONITOR & REVIEW",
                desc: "Tracking enquiries, engagement and overall campaign performance.",
                icon: BarChart3,
              },
              {
                step: "06",
                title: "IMPROVE & SCALE",
                desc: "Optimising marketing efforts based on data and institutional feedback.",
                icon: TrendingUp,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#521D27]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#521D27]/30 font-mono group-hover:text-[#521D27]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-[#521D27] flex items-center justify-center group-hover:bg-[#521D27] group-hover:text-[#EFC269] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#29252A] mb-2 font-serif group-hover:text-[#521D27] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4B464E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. OUR GOAL
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15">
                <Target className="w-4 h-4 text-[#521D27]" />
                <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                  Mission & Objectives
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#29252A] leading-tight font-serif">
                Helping Educational Institutions Build Strong Brands and Reach the Right Audience.
              </h2>

              <p className="text-base text-[#4B464E] leading-relaxed">
                Our objective is to support educational institutions in communicating their strengths, reaching prospective students and establishing a respected presence in the education sector.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Increase Institutional Visibility",
                  "Attract the Right Students",
                  "Communicate Institutional Values Clearly",
                  "Build Long-Term Brand Equity",
                  "Deliver Measurable Marketing Impact",
                ].map((goal) => (
                  <div key={goal} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-[#29252A]">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight Statement Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#521D27] to-[#732736] text-white shadow-xl mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#EFC269]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EFC269]">
                    Institutional Creed
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold font-serif text-white">
                  &ldquo;Education First. Visibility Always. Growth Together.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={catalogueImages.campaignOutdoor}
                    alt="Educational Branding Outdoor Showcase"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EFC269]">
                      Measurable Reach
                    </span>
                    <p className="text-base font-bold mt-1">
                      Connecting Campuses with Communities Across India
                    </p>
                  </div>
                </div>

                {/* Floating Stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#521D27] text-[#EFC269] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-[#29252A] font-serif">100% Focused</div>
                    <div className="text-xs text-stone-500 font-medium">Dedicated to Education Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CALL-TO-ACTION SECTION
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#3D141C] via-[#521D27] to-[#230B10] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EFC269_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-4 h-4 text-[#EFC269]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#EFC269]">
              Let’s Build a Stronger Institutional Brand Together
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight">
            Your Institution. A Stronger Identity. A Bigger Tomorrow.
          </h2>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            Whether you are launching new programmes, expanding your campus, or strengthening admission outreach, SRD Edu Corporation provides the strategic branding and marketing support you need.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?intent=register"
              className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-sm px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Partner With SRD</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              <span>Contact Our Team</span>
            </a>
          </div>

          {/* Closing Tagline */}
          <div className="pt-6 border-t border-white/15">
            <p className="text-sm sm:text-base font-semibold text-[#EFC269] tracking-wider uppercase">
              More Visibility. Better Communication. Stronger Institutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CONTACT INFORMATION & INQUIRY FORM
      ========================================================================= */}
      <section id="contact-section" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#521D27]/5 border border-[#521D27]/15 mb-4">
                  <Phone className="w-4 h-4 text-[#521D27]" />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#521D27]">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29252A] font-serif mb-3">
                  Connect With Our Marketing Team
                </h2>
                <p className="text-sm sm:text-base text-[#4B464E] leading-relaxed">
                  Ready to strengthen your institution&apos;s brand and reach more students? Speak with our marketing team to discuss tailored solutions for your institution.
                </p>
              </div>

              {/* Institution Title Card */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#521D27] tracking-wider uppercase font-serif">
                    SRD EDU CORPORATION PVT. LTD.
                  </h3>
                  <p className="text-xs font-bold text-[#C89E37] uppercase tracking-wider mt-0.5">
                    THE COMPLETE EDUCATIONAL SERVICES PROVIDER
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#4B464E] pt-2 border-t border-stone-200">
                  {/* City Office */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#521D27] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#29252A] block">City Office:</strong>
                      <span>Opposite to HP Petrol Pump, Aranthangi Road, Pattukkottai – 614601, Thanjavur (DT), Tamil Nadu.</span>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-[#521D27] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#29252A] block">Head Office:</strong>
                      <span>189/3, S.R. Building, Trichy Main Road, Thiruvanaikoil, Trichy – 620005, Tamil Nadu.</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#521D27] shrink-0" />
                    <div>
                      <strong className="text-[#29252A] mr-2">Phone:</strong>
                      <a href="tel:+919789745369" className="hover:text-[#521D27] font-semibold text-[#29252A]">
                        +91 97897 45369
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#521D27] shrink-0" />
                    <div>
                      <strong className="text-[#29252A] mr-2">Email:</strong>
                      <a href="mailto:srdeducorporation@gmail.com" className="hover:text-[#521D27] font-semibold text-[#29252A]">
                        srdeducorporation@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#521D27] shrink-0" />
                    <div>
                      <strong className="text-[#29252A] mr-2">Website:</strong>
                      <a href="https://srdeducorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#521D27] font-semibold text-[#29252A]">
                        srdeducorp.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Final Tagline */}
                <div className="pt-3 border-t border-stone-200">
                  <p className="text-xs font-bold text-[#521D27] italic">
                    Shaping Brands. Connecting Communities. Inspiring Growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-stone-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#29252A] font-serif">
                    Request a Branding & Marketing Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B464E] mt-1">
                    Fill out the form below and our institutional branding specialists will connect with you within 24 hours.
                  </p>
                </div>

                <EnquiryForm
                  initialService="Institution Branding & Marketing"
                  sourceContext="Branding & Marketing Service Page"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
