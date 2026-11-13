"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUp,
  ChevronRight
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { primaryServices } from "@/data/services";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#241E20] text-white/80 border-t border-[#4A1525]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#F5C64D]/30 shadow">
                <Image
                  src="/images/logo/srd-logo.jpg"
                  alt="SRD Edu Corporation Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide font-['Poppins']">
                  SRD EDU CORPORATION
                </h3>
                <p className="text-xs text-[#F5C64D] font-semibold tracking-wider uppercase">
                  {companyInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              The Complete Educational Services Partner. Empowering schools, colleges, universities, students, educators, and enterprise employers through integrated research, talent placement, HR staffing, branding, and regulatory documentation solutions.
            </p>

            {/* Social SVGs */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#330B17] flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#330B17] flex items-center justify-center transition-colors text-white"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#330B17] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#330B17] flex items-center justify-center transition-colors text-white"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Business Verticals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Poppins'] border-b border-white/10 pb-2">
              Core Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              {primaryServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#F5C64D] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#F5C64D] text-[10px]">▸</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/skill-opportunities"
                  className="hover:text-[#F5C64D] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F5C64D] text-[10px]">▸</span>
                  <span>Global Skill Directory</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Poppins'] border-b border-white/10 pb-2">
              Explore SRD
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F5C64D] transition-colors">
                  About SRD Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F5C64D] transition-colors">
                  All 12 Service Divisions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#F5C64D] transition-colors">
                  Sectors We Serve
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#F5C64D] transition-colors">
                  Institutional Portfolio
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-[#F5C64D] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#F5C64D] transition-colors">
                  Blogs & Perspectives
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#F5C64D] transition-colors">
                  Educational Resources & Dossiers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#F5C64D] transition-colors">
                  Careers & Job Enquiries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5C64D] transition-colors">
                  Contact & Institutional Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Poppins'] border-b border-white/10 pb-2">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5C64D] shrink-0 mt-0.5" />
                <span className="text-white/70">
                  {companyInfo.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5C64D] shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#F5C64D] transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5C64D] shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-[#F5C64D] transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-white/50 border-t border-white/5">
                <p>{companyInfo.contact.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="bg-[#171214] border-t border-white/5 py-4 px-4 text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-center sm:text-left">
            <span>
              © 2026 <strong>SRD Edu Corporation</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>
              Developed by{" "}
              <a
                href="https://nichedesignz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C64D] hover:text-white hover:underline font-medium transition-colors"
              >
                Niche Designz
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F5C64D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F5C64D] transition-colors">
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F5C64D] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
