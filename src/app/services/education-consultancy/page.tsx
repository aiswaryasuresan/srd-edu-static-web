import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { educationConsultancyData } from "@/data/services";

export const metadata: Metadata = {
  title: "Education Consultancy | SRD Edu Corporation",
  description: educationConsultancyData.shortDescription,
};

export default function EducationConsultancyPage() {
  return <ServicePageTemplate data={educationConsultancyData} />;
}
