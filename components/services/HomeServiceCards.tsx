import Link from "next/link";
import React from "react";

const HomeServiceCards = () => {
  const customServices = [
    {
      id: "airline-tickets",
      title: "Airline Tickets",
      description: "Book domestic and international flights with the best deals and flexible options.",
      href: "/services/flights",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"transform="rotate(90 12 12)" />
        </svg>
      ),
    },
    {
      id: "hotel-bookings",
      title: "Hotel Bookings",
      description: "Reserve accommodations worldwide, from budget to luxury hotels.",
      href: "/services/hotels",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
        </svg>
      ),
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description: "Reliable transportation to and from airports around the globe.",
      href: "/services/transfers",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
        </svg>
      ),
    },
    {
      id: "visa-assistance",
      title: "Visa Assistance",
      description: "Support for visa applications to make your travel seamless.",
      href: "/services/visa-services",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M19 2H5c-1.11 0-2 .9-2 2v16c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1.6 6.31L8.79 12l1.61-2.31L12 9.42l1.6 2.27 1.61 2.31-1.61 2.27L12 14.58l-1.6-.27z" />
        </svg>
      ),
    },
    {
      id: "travel-insurance",
      title: "Travel Insurance",
      description: "Coverage for medical emergencies, trip cancellations, and more.",
      href: "/services/insurance",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },
    {
      id: "visa-change",
      title: "Visa Change",
      description: "Convenient A2A and B2B visa change packages tailored to your needs.",
      href: "/services/visa-change",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#c91c3c]">
          <path d="M17 10h-2V6H9V4h8v6zM7 14h2v4h8v2H7v-6zM15 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 20V4h14v16H5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {customServices.map((service) => (
        <Link
          href={service.href}
          key={service.id}
          className="group flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-10 transition duration-300 hover:-translate-y-1 hover:border-[#c91c3c]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
          <div className="mb-6 flex items-center justify-center">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-[#092f42] mb-3">{service.title}</h3>
          <p className="text-[15px] leading-relaxed text-slate-500">{service.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomeServiceCards;
