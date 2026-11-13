interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 ${
            isDark
              ? "bg-[#F5C64D]/15 text-[#F5C64D] border border-[#F5C64D]/30"
              : "bg-[#FFF7E6] text-[#B8821B] border border-[#F5C64D]/30"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C64D]" />
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-['Poppins'] ${
          isDark ? "text-white" : "text-[#241E20]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-white/70" : "text-[#63595C]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
