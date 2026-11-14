"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#521D27] text-white/85 border-t border-[#EFC269]/25">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-7 space-y-4">
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

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
              The Complete Educational Services Partner. Empowering schools, colleges, universities, students, educators, and enterprise employers through integrated research, talent placement, HR staffing, branding, and regulatory documentation solutions.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#521D27] flex items-center justify-center transition-colors text-white"
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#521D27] flex items-center justify-center transition-colors text-white"
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#521D27] flex items-center justify-center transition-colors text-white"
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C64D] hover:text-[#521D27] flex items-center justify-center transition-colors text-white"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us (Renamed from Contact Desk; Core Verticals & Explore SRD removed) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Poppins'] border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5C64D] shrink-0 mt-0.5" />
                <span className="text-white/80 leading-relaxed">
                  {companyInfo.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5C64D] shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#F5C64D] transition-colors font-semibold text-white"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5C64D] shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-[#F5C64D] transition-colors font-semibold text-white"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-white/50 border-t border-white/10">
                <p>{companyInfo.contact.workingHours}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="bg-black/30 border-t border-white/10 py-4 px-4 text-xs text-white/70">
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
