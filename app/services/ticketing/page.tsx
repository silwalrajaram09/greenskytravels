import type { Metadata } from "next";
import ServicePageShell from "@/components/services/ServicePageShell";
import type { InquiryField } from "@/components/services/ServiceInquiryForm";
import { getService } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Air Ticketing | Green Sky Travels",
  description: "Request new tickets, changes, cancellations, refunds, and ticketing support through WhatsApp.",
};

const fields: InquiryField[] = [
  {
    name: "requestType",
    label: "How can we help?",
    type: "select",
    options: ["New ticket", "Rebooking or date change", "Cancellation", "Refund request", "Name correction", "Baggage or seat support", "Existing booking support"],
    required: true,
  },
  { name: "bookingReference", label: "Booking reference", placeholder: "Optional for a new ticket" },
  { name: "from", label: "From", placeholder: "City or airport", required: true },
  { name: "to", label: "To", placeholder: "City or airport", required: true },
  { name: "travelDate", label: "Travel date", type: "date", required: true },
  {
    name: "passengers",
    label: "Passengers",
    type: "select",
    options: ["1", "2", "3–5", "6–10", "11–20", "20+"],
    required: true,
  },
  { name: "airline", label: "Airline", placeholder: "Optional" },
  {
    name: "notes",
    label: "Additional details",
    type: "textarea",
    placeholder: "Tell us about your ticket or the support you need",
    fullWidth: true,
  },
];

export default function TicketingServicePage() {
  const service = getService("ticketing");
  if (!service) return null;

  return (
    <ServicePageShell
      service={service}
      fields={fields}
      benefits={[
        "Choose the exact ticketing support you need.",
        "Include your booking reference when you already have a reservation.",
        "Share route and passenger details for a new ticket request.",
        "Our team will confirm availability, price, and next steps on WhatsApp.",
      ]}
    />
  );
}
