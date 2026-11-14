"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, UserCheck } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import TopBar from "@/components/layout/TopBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar - Matches Reference UI */}
      <div className={`transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}>
        <TopBar />
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#521D27]/95 backdrop-blur-md shadow-lg border-b border-[#EFC269]/20 py-2.5"
            : "bg-transparent py-3 sm:py-3.5 border-none"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Official SRD Logo Directly on Transparent Navbar */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group py-1"
          aria-label="SRD Edu Corporation Home"
        >
          <div className="relative h-10 sm:h-12 w-36 sm:w-44 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo/srd-logo-transparent.png"
              alt="SRD Edu Corporation"
              fill
              sizes="(max-width: 640px) 150px, 180px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar with White Text and Gold Underline for Active Link */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4 px-2 flex-nowrap">
          {mainNavItems.map((item) => {
            const isServicesCategory = item.title === "Services";
            const isActive = isServicesCategory
              ? pathname.startsWith("/services")
              : item.href === "/"
              ? pathname === "/"
              : Boolean(item.href && item.href !== "#" && pathname.startsWith(item.href));

            if (item.children) {
              return (
                <div
                  key={item.title}
                  className="relative group shrink-0"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.title ? null : item.title
                      )
                    }
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "text-[#EFC269] border-b-2 border-[#EFC269]"
                        : "text-white hover:text-[#EFC269]"
                    }`}
                    aria-expanded={activeDropdown === item.title}
                    aria-haspopup="true"
                  >
                    <span className="whitespace-nowrap">{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:rotate-180 shrink-0" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-80 xl:w-96 transition-all duration-200 ${
                      activeDropdown === item.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#521D27]/98 backdrop-blur-xl rounded-xl shadow-2xl border border-[#EFC269]/30 p-2.5 overflow-hidden text-white">
                      <div className="px-3 py-2 mb-1 border-b border-white/10 bg-black/20 rounded-lg">
                        <p className="text-xs font-semibold text-[#EFC269] uppercase tracking-wider font-['Poppins']">
                          {item.title}
                        </p>
                      </div>
                      <div className="max-h-[380px] overflow-y-auto space-y-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/sub flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#EFC269] mt-1.5 shrink-0" />
                            <div className="flex-1">
                              <span className="text-xs font-semibold text-white group-hover/sub:text-[#EFC269] transition-colors whitespace-nowrap">
                                {sub.title}
                              </span>
                              {sub.description && (
                                <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5 font-normal">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-[#EFC269] border-b-2 border-[#EFC269] pb-1"
                    : "text-white hover:text-[#EFC269]"
                }`}
              >
                <span className="whitespace-nowrap">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Gold Register CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact?intent=register"
            className="inline-flex items-center gap-1.5 xl:gap-2 bg-[#EFC269] hover:bg-[#dfb055] text-[#29252A] font-bold text-xs xl:text-sm tracking-wide px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <UserCheck className="w-4 h-4 text-[#29252A] shrink-0" />
            <span className="whitespace-nowrap">Register</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <Link
            href="/contact?intent=register"
            className="bg-[#EFC269] text-[#29252A] text-xs font-bold px-3 py-1.5 rounded-md sm:inline-flex hidden whitespace-nowrap"
          >
            Register
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:text-[#EFC269] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#521D27]/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-2 shadow-2xl text-white">
          {mainNavItems.map((item) => (
            <div key={item.title} className="border-b border-white/10 pb-2">
              {item.children ? (
                <div className="text-xs font-bold text-[#EFC269] uppercase tracking-wider py-1 font-['Poppins']">
                  {item.title}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-white hover:text-[#EFC269] py-1"
                >
                  {item.title}
                </Link>
              )}
              {item.children && (
                <div className="pl-2 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-white/85 hover:text-[#EFC269] py-0.5"
                    >
                      • {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact?intent=register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-[#EFC269] text-[#29252A] font-bold text-xs py-2.5 rounded-lg whitespace-nowrap"
            >
              Register
            </Link>
          </div>

          {/* Social Links in Mobile Drawer */}
          <div className="pt-3 pb-1 border-t border-white/10 flex items-center justify-center gap-6 text-white/80">
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFC269] transition-colors p-1"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a
              href={companyInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFC269] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.4 9.74v-8.37H5.06v8.37z" />
              </svg>
            </a>
            <a
              href={companyInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFC269] transition-colors p-1"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={companyInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFC269] transition-colors p-1"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
