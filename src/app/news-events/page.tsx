import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Megaphone,
  Tag,
  CheckCircle2,
  Users
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "News & Events | Announcements, Summits & Press Releases",
  description:
    "Explore upcoming educational summits, campus placement drives, statutory accreditation bulletins, and corporate press releases from SRD Edu Corporation.",
};

export default function NewsAndEventsPage() {
  const upcomingEvents = [
    {
      id: "ev-1",
      title: "All-India Higher Education Leadership Summit 2026",
      category: "Conferences & Summits",
      date: "March 24-25, 2026",
      time: "9:30 AM - 5:30 PM IST",
      location: "Bengaluru International Exhibition Centre & Hybrid Live",
      badge: "Flagship Event",
      description:
        "Bringing together 200+ college chancellors, university principals, and corporate HR directors to discuss credit-aligned AI skill modules and next-generation accreditation readiness.",
      status: "Registrations Open",
    },
    {
      id: "ev-2",
      title: "Global Talent & Corporate Recruiter Conclave",
      category: "Placement & Hiring",
      date: "April 18, 2026",
      time: "10:00 AM - 4:00 PM IST",
      location: "Virtual Corporate Auditorium",
      badge: "Exclusive Drive",
      description:
        "Connecting collegiate placement cells with 75+ verified domestic and overseas hiring partners across IT, automotive, finance, and industrial engineering.",
      status: "Campus Slot Booking Active",
    },
    {
      id: "ev-3",
      title: "Academic Accreditation & Statutory Compliance Workshop",
      category: "Regulatory Guidance",
      date: "May 10, 2026",
      time: "11:00 AM - 3:00 PM IST",
      location: "SRD Corporate Advisory Suite & Webcast",
      badge: "Trustee Masterclass",
      description:
        "Practical dossier preparation clinic for school and collegiate trusts preparing for annual affiliation renewals, land title audits, and statutory safety filings.",
      status: "Limited Institutional Seats",
    },
  ];

  const newsItems = [
    {
      id: "news-1",
      title: "SRD Edu Corporation Announces Nationwide Skill Integration Initiative",
      category: "Press Release",
      date: "November 2026",
      source: "Corporate Communications",
      summary:
        "Inaugurating short-cycle, hands-on certification modules across Artificial Intelligence, prompt engineering, and modern vocational trades across 50 partner campuses.",
      highlights: [
        "Curated by national industry practitioners",
        "Zero disruption to standard degree timetables",
        "Demonstrable capstone project portfolio for students",
      ],
    },
    {
      id: "news-2",
      title: "Statutory Affiliation & Inspection Advisory for 2026-27 Academic Cycle",
      category: "Regulatory Notice",
      date: "October 2026",
      source: "Compliance & Legal Division",
      summary:
        "Comprehensive guidelines issued to affiliated trusts on transitioning to digitized inspection records, fire safety renewals, and AICTE/CBSE submission protocols.",
      highlights: [
        "Statutory gap audit checklist",
        "Mandatory fire & structural safety certificate timeline",
        "Affidavit & trustee resolution templates",
      ],
    },
    {
      id: "news-3",
      title: "SRD Expands Corporate Recruitment Network to Southeast Asia & Middle East",
      category: "Global Placement",
      date: "September 2026",
      source: "Placement Desk",
      summary:
        "Signing bilateral placement partnerships facilitating verified employment pathways for Indian vocational and technical graduates in emerging international markets.",
      highlights: [
        "Verified international employer rosters",
        "Pre-departure orientation & interview coaching",
        "Transparent visa and compliance facilitation",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Uniform Campus Banner */}
      <PageBanner
        title="News & Events"
        subtitle="CORPORATE INTELLIGENCE & CONFERENCES"
        description="Stay informed with official press releases, institutional milestones, statutory compliance advisories, and upcoming academic summits curated by SRD Edu Corporation."
        backgroundImage="/images/banner/services-banner.jpg"
        badge={{
          icon: Sparkles,
          label: "Corporate Announcements & Calendar",
        }}
        breadcrumbs={[{ label: "News & Events" }]}
      >
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href="#events"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <span>Explore Upcoming Events</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact?intent=register"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
          >
            <span>Register for an Event</span>
          </Link>
        </div>
      </PageBanner>

      {/* 2. Upcoming Events Section */}
      <section id="events" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Upcoming Summits & Workshops"
            title="Conferences & Institutional Forums"
            subtitle="Engage directly with educational leaders, regulatory experts, and global talent acquisition managers."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#F8F7F5] rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#EFC269] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#521D27]/10 text-[#521D27] px-2.5 py-1 rounded-md">
                      {evt.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-1 rounded-md border border-[#EFC269]/40">
                      {evt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] leading-snug group-hover:text-[#521D27] transition-colors">
                    {evt.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-[#63595C]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B8821B] shrink-0" />
                      <span className="font-medium text-[#29252A]">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B8821B] shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#B8821B] shrink-0 mt-0.5" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-[13px] text-[#63595C] leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#521D27]">
                    {evt.status}
                  </span>
                  <Link
                    href={`/contact?intent=register&event=${encodeURIComponent(evt.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#521D27] hover:text-[#B8821B] transition-colors"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Press Releases & Corporate Notices Section */}
      <section className="py-16 sm:py-20 bg-[#FAF7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Official Bulletins"
            title="Press Releases & Regulatory Notices"
            subtitle="Authoritative dispatches on corporate milestones, policy analyses, and institutional accreditation advisories."
            align="left"
          />

          <div className="space-y-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#EFC269] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold uppercase tracking-wider bg-[#521D27] text-[#EFC269] px-2.5 py-1 rounded text-[10px]">
                      {news.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="font-medium text-[#63595C]">{news.source}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-[#B8821B]" />
                    {news.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] font-['Poppins'] leading-snug">
                  {news.title}
                </h3>

                <p className="mt-3 text-sm text-[#63595C] leading-relaxed">
                  {news.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {news.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#29252A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8821B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media & Partnership Inquiries CTA */}
      <section className="py-14 bg-gradient-to-r from-[#521D27] to-[#3D1623] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-[#EFC269]">
            <Megaphone className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins']">
            Media Inquiries & Event Partnerships
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            Are you hosting an educational convention, seeking keynote speakers from our advisory council, or looking to feature SRD Edu Corporation in an academic publication?
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=register"
              className="bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Register as Partner / Delegate
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Contact Press Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
