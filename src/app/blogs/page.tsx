import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  User,
  Share2,
  Bookmark
} from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import SectionHeading from "@/components/shared/SectionHeading";
import { resourceArticles } from "@/data/resources";

export const metadata: Metadata = {
  title: "Blogs & Perspectives | Educational Insights & Thought Leadership",
  description:
    "Read comprehensive blogs and thought leadership articles on college affiliation, AI in higher education, institutional storytelling, and faculty management from SRD Edu Corporation.",
};

export default function BlogsPage() {
  const extendedBlogPosts = [
    ...resourceArticles.map((art, idx) => ({
      ...art,
      author: idx === 0 ? "Dr. K. Ramanathan, Head of Regulatory Affairs" : idx === 1 ? "Ananya Verma, Director of Skill Initiatives" : "Siddharth Menon, Chief Strategy Officer",
      tags: idx === 0 ? ["Compliance", "CBSE / UGC", "Audits"] : idx === 1 ? ["AI", "EdTech", "Curriculum"] : ["Branding", "Admissions", "Marketing"]
    })),
    {
      id: "blog-4",
      slug: "faculty-retention-and-academic-excellence",
      title: "Attracting & Retaining Top Academic Talent: A 2026 Faculty Framework",
      category: "HR & Staffing",
      date: "April 2026",
      readTime: "8 min read",
      author: "Pooja Nair, Academic Staffing Lead",
      tags: ["Talent", "Faculty", "Leadership"],
      summary:
        "Why standard recruitment models fail contemporary universities, and how competitive compensation benchmarking, research fellowships, and transparent career tracks build lasting institutional prestige.",
      content: [
        "In the competitive higher education landscape, institutional ranking is inextricably linked with faculty caliber and research output.",
        "Institutions must move past ad-hoc contract hiring toward structured academic development programs that provide research funding, conference sabbaticals, and performance-linked incentives.",
        "SRD's Human Resource Management division assists institutions in auditing talent pipelines, restructuring departmental hierarchies, and recruiting doctoral talent nationwide."
      ]
    },
    {
      id: "blog-5",
      slug: "building-high-impact-placement-cells",
      title: "Transforming College Placement Cells into Proactive Career Hubs",
      category: "Placement & Careers",
      date: "May 2026",
      readTime: "6 min read",
      author: "Vikram Sengupta, Corporate Relations Director",
      tags: ["Placement", "Careers", "Industry"],
      summary:
        "Moving beyond annual campus placement drives toward year-round industry immersion, recruiter conclaves, and verified competency assessments.",
      content: [
        "Modern corporate recruiters prioritize verifiable student problem-solving skills over conventional academic transcripts.",
        "To maximize Tier-1 corporate participation, placement departments must facilitate summer micro-internships, mock technical interview boards, and continuous employer feedback loops.",
        "Through SRD's Global Placement network, colleges gain access to 150+ verified corporate recruiters with structured hiring calendars."
      ]
    },
    {
      id: "blog-6",
      slug: "sustainable-school-infrastructure-planning",
      title: "Designing Campus Infrastructure for Experiential & Vocational Learning",
      category: "Institutional Development",
      date: "June 2026",
      readTime: "7 min read",
      author: "Advisory Council Editorial",
      tags: ["Infrastructure", "Campus", "Vocational"],
      summary:
        "How forward-thinking educational trusts are reallocating campus footprints to accommodate practical robotics labs, design studios, and collaborative auditoriums.",
      content: [
        "Rigid lecture halls are increasingly being augmented by multi-use interactive learning zones that support team projects and industry workshops.",
        "Strategic campus planning ensures space compliance with statutory norms while providing versatile facilities for corporate executive training.",
        "SRD Edu Corporation provides comprehensive institutional development, architectural layout advisory, and capital planning support for upcoming campuses."
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Uniform Campus Banner */}
      <PageBanner
        title="Blogs & Perspectives"
        subtitle="THOUGHT LEADERSHIP & EDUCATIONAL RESEARCH"
        description="Explore authoritative commentary, practical statutory guides, pedagogical case studies, and corporate perspectives curated by the academic leaders at SRD Edu Corporation."
        badge={{
          icon: BookOpen,
          label: "Insights & Industry Analysis",
        }}
        breadcrumbs={[{ label: "Blogs" }]}
      >
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <span>Read Featured Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact?intent=register"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
          >
            <span>Subscribe / Register</span>
          </Link>
        </div>
      </PageBanner>

      {/* 2. Featured Lead Article */}
      <section id="featured" className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Editor's Pick"
            title="Featured Thought Leadership"
            subtitle="Deep-dive analyses shaping educational administration and institutional strategy across India."
            align="left"
          />

          <div className="mt-10 bg-gradient-to-br from-[#FAF7F5] to-[#FFFDF5] rounded-3xl border border-[#EFC269]/40 p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-bold uppercase tracking-wider bg-[#521D27] text-[#EFC269] px-3 py-1 rounded-md text-[10px]">
                    {extendedBlogPosts[0].category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1 text-gray-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#B8821B]" />
                    {extendedBlogPosts[0].date}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1 text-gray-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#B8821B]" />
                    {extendedBlogPosts[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] font-['Poppins'] leading-tight">
                  {extendedBlogPosts[0].title}
                </h2>

                <p className="text-sm sm:text-base text-[#63595C] leading-relaxed">
                  {extendedBlogPosts[0].summary}
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs text-[#521D27] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#B8821B]" />
                    {extendedBlogPosts[0].author}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-md space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#521D27] font-['Poppins']">
                  Key Takeaways
                </h3>
                <ul className="space-y-2.5 text-xs text-[#63595C]">
                  {extendedBlogPosts[0].content.map((para, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#EFC269] font-bold text-sm">✓</span>
                      <span className="leading-relaxed">{para}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Blog Grid */}
      <section className="py-16 sm:py-20 bg-[#FAF7F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Latest Publications"
            title="All Articles & Guides"
            subtitle="Explore our ongoing library of research papers, regulatory checklists, and institutional models."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedBlogPosts.slice(1).map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#EFC269] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7E6] text-[#B8821B] px-2.5 py-1 rounded border border-[#EFC269]/40">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#B8821B]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] font-['Poppins'] leading-snug group-hover:text-[#521D27] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#63595C] leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B8821B]" />
                    {blog.date}
                  </span>
                  <Link
                    href={`/contact?intent=register&topic=${encodeURIComponent(blog.title)}`}
                    className="inline-flex items-center gap-1 font-bold text-[#521D27] group-hover:text-[#B8821B] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation & Registration CTA */}
      <section className="py-14 bg-gradient-to-r from-[#521D27] to-[#3D1623] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-[#EFC269]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins']">
            Contribute to Our Thought Leadership Council
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            Are you an academic leader, chancellor, or corporate HR executive interested in publishing research or co-authoring whitepapers with SRD Edu Corporation?
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=register"
              className="bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Register with SRD
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
