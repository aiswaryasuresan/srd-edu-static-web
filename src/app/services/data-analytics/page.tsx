import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { dataAnalyticsData } from "@/data/services";

export const metadata: Metadata = {
  title: "Data & Analytics | SRD Edu Corporation",
  description: dataAnalyticsData.shortDescription,
};

export default function DataAnalyticsPage() {
  return <ServicePageTemplate data={dataAnalyticsData} />;
}
