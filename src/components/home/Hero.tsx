"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Users,
  Layers,
  Building2,
  FileCheck2
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "institutional-education",
      tag: "THE COMPLETE EDUCATIONAL SERVICES PARTNER",
      headlineLine1: "Build Stronger",
      headlineLine2: "Educational",
      headlineLine3: "Institutions",
      subtitle:
        "Integrated solutions for institutional development, branding, staffing, skill programs, compliance and growth.",
      primaryCta: { label: "Explore Our Services", href: "#services" },
      secondaryCta: { label: "Get in Touch", href: "/contact" },
      image: "/images/banner/image01.png",
      imageAlt: "Indian university student smiling warmly in modern classroom lecture hall with laptop"
    },
    {
      id: "global-placement",
      tag: "GLOBAL PLACEMENT & RECRUITMENT",
      headlineLine1: "Connecting Right",
      headlineLine2: "Talent With Right",
      headlineLine3: "Opportunities",
      subtitle:
        "Connecting students, graduates, and professionals with verified national and global employer networks.",
      primaryCta: { label: "Explore Our Services", href: "/services/placement-assistance" },
      secondaryCta: { label: "Get in Touch", href: "/contact" },
      image: "/images/banner/image02.png",
      imageAlt: "Professional corporate recruitment and talent placement network"
    },
    {
      id: "skill-development",
      tag: "GLOBAL SKILL OPPORTUNITIES",
      headlineLine1: "The Epicentre Of",
      headlineLine2: "World Skill",
      headlineLine3: "Programmes",
      subtitle:
        "Curating transformative global skill development across Artificial Intelligence, software, and vocational trades.",
      primaryCta: { label: "Explore Our Services", href: "/skill-opportunities" },
      secondaryCta: { label: "Get in Touch", href: "/contact" },
      image: "/images/banner/image03.png",
      imageAlt: "Future-ready technology and vocational skill development"
    }
  ];

  // 5 Square Cards Overlapping the Hero Banner Bottom (Matching Reference Mockup)
  const squareCards = [
    {
      icon: GraduationCap,
      title: "Institutional Development",
      description: "End-to-end guidance for building future-ready, compliant academic institutions.",
      href: "#services"
    },
    {
      icon: Users,
      title: "Talent & Placement",
      description: "Connecting students and graduates with verified national and global career opportunities.",
      href: "/services/placement-assistance"
    },
    {
      icon: Layers,
      title: "Skill Development",
      description: "Industry-aligned training programs, vocational trades, and advanced technology accelerators.",
      href: "/skill-opportunities"
    },
    {
      icon: Building2,
      title: "Institutional Growth",
      description: "Strategic branding, student admission outreach, and long-term reputation architecture.",
      href: "/services/branding-marketing"
    },
    {
      icon: FileCheck2,
      title: "Compliance Support",
      description: "Regulatory documentation, university affiliation, accreditation, and legal governance.",
      href: "/services/documentation-legal"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Reliable auto-slide every 5 seconds across both mobile and desktop
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = slides[currentSlide];

  return (
    <div className="relative w-full bg-white">
      {/* 1. Main Hero Banner Section */}
      <section
        className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] bg-[#521D27] overflow-hidden flex flex-col justify-between"
      >
        {/* Full-Width Background Imagery with Maximum High Quality */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="100vw"
              quality={100}
              unoptimized
              priority={idx === 0}
              className="object-cover object-right"
            />
          </div>
        ))}

        {/* Full Image Uniform Burgundy Colour Overlay (#521D27 at 60% opacity) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: "rgba(82, 29, 39, 0.60)",
          }}
        />

        {/* Right Arrow Navigation Button - Hidden on mobile view, visible on sm+ */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/65 text-white/90 hover:text-white items-center justify-center transition-all backdrop-blur-sm shadow-xl border border-white/10 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Main Text Content Section with generous top padding away from header/logo */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex-1 flex flex-col justify-center pt-44 sm:pt-52 lg:pt-60 xl:pt-64 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-5">
            
            {/* Eyebrow / Overline with Gold Horizontal Line Accent */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.18em] uppercase text-white/95 font-['Poppins']">
                {current.tag}
              </span>
              <span className="w-14 sm:w-16 h-[2px] bg-[#EFC269] inline-block shadow-sm" />
            </div>

            {/* Bold 3-Line Heading: Line 1 White, Line 2 & 3 Gold */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight leading-[1.1] font-['Poppins']">
              <span className="text-white block">{current.headlineLine1}</span>
              <span className="text-[#EFC269] block">{current.headlineLine2}</span>
              <span className="text-[#EFC269] block">{current.headlineLine3}</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base lg:text-[16px] text-white/90 leading-relaxed max-w-xl font-normal pt-1">
              {current.subtitle}
            </p>

            {/* Two Action Buttons Side-by-Side: Gold Primary + Transparent Outlined Secondary */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <Link
                href={current.primaryCta.href}
                className="inline-flex items-center gap-2 bg-[#F5C754] hover:bg-[#e6b947] text-[#521D27] font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{current.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#521D27]" />
              </Link>

              <Link
                href={current.secondaryCta.href}
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/80 transition-all duration-200"
              >
                <span>{current.secondaryCta.label}</span>
              </Link>
            </div>

          </div>
        </div>

        {/* 3 Slider Pagination Dots Centered at Bottom of Banner (above floating cards) */}
        <div className="relative z-30 flex items-center justify-center gap-2.5 pb-20 sm:pb-24 lg:pb-28">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-8 sm:w-9 h-2.5 bg-[#F5C754] rounded-full shadow-md"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80 rounded-full"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 2. 5 Floating Square Feature Cards Overlapping Hero Banner Bottom (Matching Reference Mockup) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 lg:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {squareCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-stone-200/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-pointer"
              >
                {/* Centered Top Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#521D27]/8 group-hover:bg-[#521D27] flex items-center justify-center text-[#521D27] group-hover:text-[#EFC269] transition-all duration-300 shadow-sm mb-3">
                  <Icon className="w-7 h-7 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1C1917] font-['Poppins'] leading-snug group-hover:text-[#521D27] transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-[#63595C] leading-relaxed mt-2 font-normal line-clamp-3">
                  {card.description}
                </p>

                {/* Card Bottom CTA Link */}
                <div className="mt-4 pt-3 border-t border-stone-100 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#521D27] group-hover:text-[#EFC269] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
