import type { Metadata } from "next";
import ServicePageShell from "@/components/services/ServicePageShell";
import VisaChangeForm from "@/components/services/VisaChangeForm";
import { getService } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Visa Change Packages | Green Sky Travels",
  description: "Request Bus-to-Bus and Flight-to-Flight (A2A) visa change packages.",
};

export default function VisaChangePage() {
  const service = getService("visa-change");
  if (!service) return null;

  return (
    <ServicePageShell
      service={service}
      benefits={[
        "Choose between Bus-to-Bus or Flight-to-Flight (A2A).",
        "Fast and hassle-free processing.",
        "Get instant guidance on requirements and pricing on WhatsApp.",
        "No payment is collected on this website.",
      ]}
    >
      <VisaChangeForm />
    </ServicePageShell>
  );
}
