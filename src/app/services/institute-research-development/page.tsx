import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { instituteResearchData } from "@/data/services";

export const metadata: Metadata = {
  title: "Institute Research & Development | SRD Edu Corporation",
  description: instituteResearchData.shortDescription,
};

export default function InstituteResearchPage() {
  return <ServicePageTemplate data={instituteResearchData} />;
}
