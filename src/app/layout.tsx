import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SRD Edu Corporation",
    default: "SRD Edu Corporation — The Complete Educational Services Partner",
  },
  description:
    "SRD Edu Corporation empowers institutions, students, and professionals through research, educational services, global placement, institutional branding, HR management, skill development, and regulatory documentation.",
  keywords: [
    "SRD Edu Corporation",
    "Educational Services Partner",
    "Global Placement Services",
    "Institution Branding and Marketing",
    "Academic Faculty Staffing",
    "Global Skill Opportunities",
    "Educational Documentation and Legal Assistance",
    "College Campus Recruitment",
    "Institutional Development",
  ],
  authors: [{ name: "SRD Edu Corporation" }],
  creator: "SRD Edu Corporation",
  metadataBase: new URL("https://www.srdedu.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.srdedu.com",
    title: "SRD Edu Corporation — The Complete Educational Services Partner",
    description:
      "Empowering Institutions. Enriching Lives. Connecting institutions, students, professionals, and opportunities through integrated educational solutions.",
    siteName: "SRD Edu Corporation",
    images: [
      {
        url: "/images/logo/srd-logo.jpg",
        width: 800,
        height: 800,
        alt: "SRD Edu Corporation Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRD Edu Corporation — The Complete Educational Services Partner",
    description: "RESEARCH | EDUCATION | PLACEMENT — Empowering Institutions. Enriching Lives.",
    images: ["/images/logo/srd-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#29252A] antialiased selection:bg-[#F8D481] selection:text-[#29252A]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
