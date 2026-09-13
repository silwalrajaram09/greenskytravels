import type { Metadata } from "next";
import ServicePageShell from "@/components/services/ServicePageShell";
import FlightSearchForm from "@/components/services/FlightSearchForm";
import { getService } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Flight Requests | Green Sky Travels",
  description: "Request flight options and fares from Green Sky Travels through WhatsApp.",
};

export default function FlightServicePage() {
  const service = getService("flights");
  if (!service) return null;

  return (
    <ServicePageShell
      service={service}
      benefits={[
        "Search One Way, Round Trip, or Multi City flights.",
        "Share your preferred route, dates, and passenger details.",
        "Ask for multiple airline and fare options in one conversation.",
        "No payment is collected on this website.",
      ]}
    >
      <FlightSearchForm />
    </ServicePageShell>
  );
}
