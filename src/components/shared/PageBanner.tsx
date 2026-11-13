import Link from "next/link";
import Image from "next/image";
import { ChevronRight, LucideIcon } from "lucide-react";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  badge?: {
    icon?: LucideIcon;
    label?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  description,
  badge,
  breadcrumbs = [],
  children,
  backgroundImage = "/images/banner/campus-banner.jpg",
}: PageBannerProps) {
  return (
    <section className="relative w-full bg-[#521D27] overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-[#EFC269]/20">
      {/* 1. Full-Width Background Imagery (HD Campus Architecture) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt={typeof title === "string" ? title : "SRD Edu Corporation Modern Campus & Educational Institution Facility"}
          fill
          sizes="100vw"
          quality={100}
          unoptimized
          priority
          className="object-cover object-right sm:object-center"
        />
      </div>

      {/* 2. Full Image Uniform Burgundy Colour Overlay (#521D27 at 60% opacity) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: "rgba(82, 29, 39, 0.60)",
        }}
      />

      {/* 3. Main Text Content Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-white/75 mb-6 drop-shadow-sm flex-wrap"
          >
            <Link
              href="/"
              className="hover:text-[#EFC269] transition-colors font-medium"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                  {isLast || !crumb.href ? (
                    <span className="text-[#EFC269] font-semibold">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#EFC269] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          {/* Eyebrow / Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFC269]/15 border border-[#EFC269]/30 text-[#EFC269] text-xs font-bold uppercase tracking-wider drop-shadow-sm font-['Poppins']">
              {badge.icon && <badge.icon className="w-3.5 h-3.5" />}
              <span>{badge.label}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Poppins'] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] leading-[1.15]">
            {title}
          </h1>

          {/* Subtitle / Tagline */}
          {subtitle && (
            <p className="text-sm sm:text-base text-[#EFC269] font-semibold tracking-wide font-['Poppins'] drop-shadow-sm">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-1 max-w-2xl font-normal drop-shadow-sm">
              {description}
            </p>
          )}

          {children && <div className="pt-2">{children}</div>}
        </div>
      </div>
    </section>
  );
}
