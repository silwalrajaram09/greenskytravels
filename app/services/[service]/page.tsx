import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageShell from "@/components/services/ServicePageShell";
import type { InquiryField } from "@/components/services/ServiceInquiryForm";
import { getService, type ServiceKey } from "@/lib/data/services";

type SupportedService = "hotels" | "transfers" | "insurance" | "corporate";

const serviceFields: Record<SupportedService, InquiryField[]> = {
  hotels: [
    { name: "destination", label: "Destination", placeholder: "City or area", required: true },
    { name: "checkIn", label: "Check-in", type: "date", required: true },
    { name: "checkOut", label: "Check-out", type: "date", required: true },
    { name: "rooms", label: "Rooms", type: "select", options: ["1", "2", "3", "4+"], required: true },
    { name: "guests", label: "Guests", type: "select", options: ["1", "2", "3–5", "6–10", "11+"], required: true },
    { name: "hotelCategory", label: "Hotel category", type: "select", options: ["Budget", "Standard", "Premium", "Luxury", "Not sure"] },
    { name: "notes", label: "Additional requirements", type: "textarea", placeholder: "Breakfast, location, room type, or special requests", fullWidth: true },
  ],
  transfers: [
    { name: "pickup", label: "Pickup location", placeholder: "Airport, hotel, or address", required: true },
    { name: "dropoff", label: "Drop-off location", placeholder: "Airport, hotel, or address", required: true },
    { name: "date", label: "Transfer date", type: "date", required: true },
    { name: "time", label: "Pickup time", type: "text", placeholder: "e.g. 14:30", required: true },
    { name: "flightNumber", label: "Flight number", placeholder: "Optional" },
    { name: "passengers", label: "Passengers", type: "select", options: ["1", "2", "3–5", "6–10", "11+"], required: true },
    { name: "notes", label: "Additional requirements", type: "textarea", placeholder: "Child seats, luggage, or accessibility requests", fullWidth: true },
  ],
  insurance: [
    { name: "destination", label: "Destination", placeholder: "Country or countries", required: true },
    { name: "departureDate", label: "Departure date", type: "date", required: true },
    { name: "returnDate", label: "Return date", type: "date", required: true },
    { name: "travelers", label: "Number of travelers", type: "select", options: ["1", "2", "3–5", "6–10", "11+"], required: true },
    { name: "coverage", label: "Coverage needs", type: "select", options: ["Basic travel cover", "Medical cover", "Schengen requirement", "Not sure"] },
    { name: "notes", label: "Additional details", type: "textarea", placeholder: "Traveler ages or specific requirements", fullWidth: true },
  ],
  corporate: [
    { name: "company", label: "Company name", required: true },
    { name: "contactPerson", label: "Contact person", required: true },
    { name: "travelers", label: "Number of travelers", placeholder: "Estimated group size", required: true },
    { name: "destinations", label: "Destinations", placeholder: "One or more destinations", required: true },
    { name: "travelDates", label: "Expected travel dates", placeholder: "Flexible or specific dates", required: true },
    { name: "notes", label: "Requirements", type: "textarea", placeholder: "Recurring travel, group fares, reporting, or other requirements", fullWidth: true },
  ],
};

const benefits: Record<SupportedService, string[]> = {
  hotels: [
    "Share your destination and dates in one place.",
    "Tell us your room, guest, and hotel-category preferences.",
    "Request options that match your budget and trip style.",
    "Receive availability and pricing directly on WhatsApp.",
  ],
  transfers: [
    "Provide pickup and drop-off details for an accurate quote.",
    "Include flight information when airport pickup is required.",
    "Mention luggage, child seat, or accessibility needs.",
    "Our team will confirm vehicle and driver availability.",
  ],
  insurance: [
    "Share your destination and complete travel period.",
    "Tell us the level of cover you are looking for.",
    "Ask for help with destination-specific requirements.",
    "Compare suitable options with our travel team.",
  ],
  corporate: [
    "Explain your company’s travel requirements.",
    "Request group, recurring, or business travel support.",
    "Share destinations and estimated traveler numbers.",
    "Build a communication process that works for your team.",
  ],
};

export function generateStaticParams() {
  return Object.keys(serviceFields).map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug as ServiceKey);
  return {
    title: service ? `${service.title} | Green Sky Travels` : "Travel Service | Green Sky Travels",
    description: service?.description,
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  if (!(slug in serviceFields)) notFound();

  const service = getService(slug as ServiceKey);
  if (!service) notFound();
  const key = slug as SupportedService;

  return <ServicePageShell service={service} fields={serviceFields[key]} benefits={benefits[key]} />;
}
