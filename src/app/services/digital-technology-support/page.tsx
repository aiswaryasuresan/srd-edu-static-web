import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { digitalTechnologyData } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital & Technology Support | SRD Edu Corporation",
  description: digitalTechnologyData.shortDescription,
};

export default function DigitalTechnologySupportPage() {
  return <ServicePageTemplate data={digitalTechnologyData} />;
}
