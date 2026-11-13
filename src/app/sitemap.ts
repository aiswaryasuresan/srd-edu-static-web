import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.srdedu.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/institute-research-development",
    "/services/data-analytics",
    "/services/academic-programmes-systems",
    "/services/human-resource-management",
    "/services/skill-development-project",
    "/services/competitive-exam-support",
    "/services/branding-marketing",
    "/services/digital-technology-support",
    "/services/education-consultancy",
    "/services/document-legal-support",
    "/services/infrastructure-finance-support",
    "/services/placement-assistance",
    "/services/global-placement",
    "/services/hr-management",
    "/services/skill-opportunities",
    "/services/documentation-legal",
    "/news-events",
    "/blogs",
    "/skill-opportunities",
    "/industries",
    "/portfolio",
    "/resources",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
