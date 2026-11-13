import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { placementAssistanceData } from "@/data/services";

export const metadata: Metadata = {
  title: "Placement Assistance | SRD Edu Corporation",
  description: placementAssistanceData.shortDescription,
};

export default function PlacementAssistancePage() {
  return <ServicePageTemplate data={placementAssistanceData} />;
}
