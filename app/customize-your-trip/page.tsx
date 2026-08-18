"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const DESTINATIONS = [
  "Nepal", "Dubai / UAE", "Bhutan", "India", "Azerbaijan", "Georgia",
  "Armenia", "Thailand", "Singapore", "Japan", "Tanzania", "Oman", "Jordan", "Other"
];

const TRIP_TYPES = [
  "Family Holiday", "Honeymoon", "Couple Trip", "Solo Travel",
  "Friends / Group Trip", "Corporate / Business Trip",
  "Adventure / Trekking", "Luxury Travel", "Cultural & Heritage", "Other"
];

const TRAVELERS = [
  "1", "2", "3–5", "6–10", "11–20", "20+"
];

const DURATIONS = [
  "1–3 Days", "4–6 Days", "7–10 Days", "11–15 Days", "16–20 Days", "20+ Days"
];

const ACCOMMODATIONS = [
  "Budget", "Standard", "Premium", "Luxury", "Not Sure"
];

const BUDGETS = [
  "Under US$500", "US$500–1,000", "US$1,000–2,000", "US$2,000–5,000", "US$5,000+", "Not Sure"
];

const SERVICES = [
  { label: "Hotel", icon: "🏨" },
  { label: "Airport Transfer", icon: "🚐" },
  { label: "Sightseeing", icon: "🗺️" },
  { label: "Private Vehicle", icon: "🚗" },
  { label: "Tour Guide", icon: "🧭" },
  { label: "Flights", icon: "✈️" },
  { label: "Activities / Experiences", icon: "🎟️" },
  { label: "Meals", icon: "🍽️" },
  { label: "Travel Insurance", icon: "🛡️" },
];

export default function CustomizeYourTripPage() {
  const [formData, setFormData] = useState({
    destination: "",
    customDestination: "",
    tripType: "",
    customTripType: "",
    travelers: "",
    duration: "",
    travelDate: "",
    accommodation: "",
    budget: "",
    specialRequests: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const minDate = new Date().toISOString().split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const resolvedDestination =
      formData.destination === "Other"
        ? formData.customDestination || "Other (not specified)"
        : formData.destination;

    const resolvedTripType =
      formData.tripType === "Other"
        ? formData.customTripType || "Other (not specified)"
        : formData.tripType;

    let message = `Hello Green Sky Travels!\n\nI would like to customize a trip.\n\n`;
    message += `Destination: ${resolvedDestination || "Not specified"}\n`;
    message += `Trip Type: ${resolvedTripType || "Not specified"}\n`;
    message += `Travelers: ${formData.travelers || "Not specified"}\n`;
    message += `Duration: ${formData.duration || "Not specified"}\n`;
    message += `Travel Date: ${formData.travelDate || "Not specified"}\n`;

    if (formData.accommodation) message += `Accommodation: ${formData.accommodation}\n`;
    if (formData.budget) message += `Budget: ${formData.budget}\n`;

    if (selectedServices.length > 0) {
      message += `\nI would like:\n`;
      selectedServices.forEach((s) => {
        message += `- ${s}\n`;
      });
    }

    if (formData.specialRequests) {
      message += `\nSpecial Requests:\n${formData.specialRequests}\n`;
    }

    message += `\nPlease help me create the best itinerary.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971585032337?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#092f42] text-white py-24 px-4 text-center overflow-hidden">
        {/* Decorative background accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#092f42] via-[#0c3b52] to-[#092f42]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#61a447]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#61a447]/10 blur-3xl" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-6">
          <span className="inline-block text-[#8fd171] text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            Tailor-Made Journeys
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            Customize Your Trip
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            Tell us what you&apos;re looking for and let us create a personalized journey
            designed around your preferences.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden mt-6">
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center border-b border-slate-100 pb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#092f42] font-serif mb-3">
                Plan Your Perfect Trip
              </h2>
              <p className="text-slate-500 font-medium text-base max-w-xl mx-auto">
                Share a few details about your travel plans and our travel experts will help
                you create the perfect itinerary.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1 — Core Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#61a447] text-white text-xs font-bold shrink-0">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-[#092f42] uppercase tracking-wide">
                    Trip Basics
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Destination *
                    </label>
                    <select
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Destination</option>
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>

                    {/* Shown only when "Other" is selected */}
                    {formData.destination === "Other" && (
                      <input
                        type="text"
                        name="customDestination"
                        required
                        value={formData.customDestination}
                        onChange={handleInputChange}
                        placeholder="Please type your destination (e.g. Turkey, Maldives, Vietnam...)"
                        className="mt-3 w-full px-4 py-3 rounded-lg border border-[#61a447]/40 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-[#f4faf1] text-slate-700 placeholder:text-slate-400 transition-shadow animate-[fadeIn_0.2s_ease-in]"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Trip Type *
                    </label>
                    <select
                      name="tripType"
                      required
                      value={formData.tripType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Trip Type</option>
                      {TRIP_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>

                    {formData.tripType === "Other" && (
                      <input
                        type="text"
                        name="customTripType"
                        required
                        value={formData.customTripType}
                        onChange={handleInputChange}
                        placeholder="Please describe your trip type"
                        className="mt-3 w-full px-4 py-3 rounded-lg border border-[#61a447]/40 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-[#f4faf1] text-slate-700 placeholder:text-slate-400 transition-shadow"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Number of Travelers *
                    </label>
                    <select
                      name="travelers"
                      required
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Travelers</option>
                      {TRAVELERS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Trip Duration *
                    </label>
                    <select
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Duration</option>
                      {DURATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Preferred Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      required
                      min={minDate}
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Step 2 — Preferences */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#61a447] text-white text-xs font-bold shrink-0">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-[#092f42] uppercase tracking-wide">
                    Preferences
                    <span className="text-slate-400 font-medium normal-case ml-2">(Optional)</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Accommodation Preference
                    </label>
                    <select
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Option</option>
                      {ACCOMMODATIONS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#092f42] mb-2">
                      Estimated Budget Per Person
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 transition-shadow"
                    >
                      <option value="">Select Budget</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Step 3 — Services */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#61a447] text-white text-xs font-bold shrink-0">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-[#092f42] uppercase tracking-wide">
                    Services / Experiences
                    <span className="text-slate-400 font-medium normal-case ml-2">(Optional)</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {SERVICES.map(({ label, icon }) => {
                    const isChecked = selectedServices.includes(label);
                    return (
                      <label
                        key={label}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all select-none ${
                          isChecked
                            ? "border-[#61a447] bg-[#f4faf1] ring-1 ring-[#61a447]"
                            : "border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceToggle(label)}
                          className="w-4 h-4 text-[#61a447] focus:ring-[#61a447] border-gray-300 rounded cursor-pointer"
                        />
                        <span className="text-base leading-none">{icon}</span>
                        <span className="text-sm font-medium text-slate-700">{label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 4 — Special Requests */}
              <div>
                <label className="block text-sm font-bold text-[#092f42] mb-2">
                  Special Requests <span className="text-slate-400 font-normal ml-1">(Optional)</span>
                </label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Tell us about any specific places you want to visit, dietary requirements, or other preferences..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 resize-y transition-shadow"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-[#61a447] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#4a8035] active:scale-[0.98] transition-all uppercase tracking-wide w-full md:w-auto shadow-lg shadow-[#61a447]/20 text-sm"
                >
                  Customize My Trip
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="mt-3 text-xs text-slate-400">
                  You&apos;ll be redirected to WhatsApp to send your request to our team.
                </p>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61a447]"></span> Best Price Guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61a447]"></span> Expert Local Guides
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61a447]"></span> 24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}