import React from "react";

export type ServiceKey =
  | "flights"
  | "visa"
  | "ticketing"
  | "hotels"
  | "transfers"
  | "custom-trips"
  | "insurance"
  | "visa-change";

export interface ServiceDefinition {
  key: ServiceKey;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  accent: string;
  fields: string[];
}

// Custom Icons to match the requested design style
const PlaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"  transform="rotate(90 12 12)"/>
  </svg>
);

const HotelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
);

const TicketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-1.99 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-6-2h-3V5h3v3zm0 4h-3v-3h3v3zm0 4h-3v-3h3v3z" />
  </svg>
);

const PassportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 2H5c-1.11 0-2 .9-2 2v16c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1.6 6.31L8.79 12l1.61-2.31L12 9.42l1.6 2.27 1.61 2.31-1.61 2.27L12 14.58l-1.6-.27z" />
  </svg>
);

const BusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
  </svg>
);

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
  </svg>
);

// const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
//   </svg>
// );

const VisaChangeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17 10h-2V6H9V4h8v6zM7 14h2v4h8v2H7v-6zM15 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 20V4h14v16H5z" />
  </svg>
);

export const services: ServiceDefinition[] = [
  {
    key: "flights",
    title: "Flight Requests",
    shortTitle: "Flights",
    description: "Share your route and travel dates and receive flight options directly on WhatsApp.",
    href: "/services/flights",
    icon: PlaneIcon,
    accent: "from-sky-500 to-blue-700",
    fields: [
      "Trip type",
      "From",
      "To",
      "Departure date",
      "Return date",
      "Passengers",
      "Cabin class",
    ],
  },
  {
    key: "visa",
    title: "Visa Services",
    shortTitle: "Visa",
    description: "Get guidance on visa requirements, documents, pricing, and application support.",
    href: "services/visa-services",
    icon: PassportIcon,
    accent: "from-emerald-500 to-green-700",
    fields: [
      "Destination",
      "Nationality",
      "Visa type",
      "Travel date",
      "Applicants",
    ],
  },
  {
    key: "ticketing",
    title: "Air Ticketing",
    shortTitle: "Ticketing",
    description: "Request new tickets, rebooking, cancellations, refunds, baggage, and existing booking support.",
    href: "/services/ticketing",
    icon: TicketIcon,
    accent: "from-violet-500 to-purple-700",
    fields: [
      "Request type",
      "Booking reference",
      "From",
      "To",
      "Travel date",
      "Passengers",
    ],
  },
  {
    key: "hotels",
    title: "Hotel Reservations",
    shortTitle: "Hotels",
    description: "Tell us your destination, dates, room needs, and preferred hotel category.",
    href: "/services/hotels",
    icon: HotelIcon,
    accent: "from-amber-500 to-orange-700",
    fields: [
      "Destination",
      "Check-in",
      "Check-out",
      "Rooms",
      "Guests",
      "Hotel category",
    ],
  },
  {
    key: "transfers",
    title: "Airport Transfers",
    shortTitle: "Transfers",
    description: "Arrange reliable airport pickup and drop-off for your journey.",
    href: "/services/airport-transfers",
    icon: BusIcon,
    accent: "from-cyan-500 to-teal-700",
    fields: [
      "Pickup",
      "Drop-off",
      "Date",
      "Time",
      "Flight number",
      "Passengers",
    ],
  },
  {
    key: "custom-trips",
    title: "Customize Your Trip",
    shortTitle: "Custom Trips",
    description: "Build a personalized itinerary around your dates, interests, and budget.",
    href: "/customize-your-trip",
    icon: MapIcon,
    accent: "from-rose-500 to-red-700",
    fields: [
      "Destination",
      "Trip type",
      "Travel dates",
      "Travelers",
      "Budget",
      "Interests",
    ],
  },
  {
    key: "insurance",
    title: "Travel Insurance",
    shortTitle: "Insurance",
    description: "Request travel insurance guidance for your destination and travel period.",
    href: "/services/insurance",
    icon: ShieldIcon,
    accent: "from-indigo-500 to-blue-800",
    fields: ["Destination", "Travel dates", "Travelers", "Coverage needs"],
  },
  
  {
    key: "visa-change",
    title: "Visa Change Packages",
    shortTitle: "Visa Change",
    description: "Explore our Bus-to-Bus and Flight-to-Flight (A2A) visa change packages.",
    href: "/services/visa-change",
    icon: VisaChangeIcon,
    accent: "from-pink-500 to-rose-700",
    fields: ["Visa type", "Last date", "Nationality", "Service"],
  },
];

export function getService(key: ServiceKey) {
  return services.find((service) => service.key === key);
}
