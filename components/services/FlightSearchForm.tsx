"use client";

import { useState, type FormEvent } from "react";
import { Search, Plus, Trash2, MessageCircle } from "lucide-react";
import AirportSelect from "@/components/ui/AirportSelect";
import type { Airport } from "@/lib/data/airports";
import { getWhatsAppUrl } from "@/lib/config/site";

type TripType = "One Way" | "Round Trip" | "Multi City";

interface FlightSegment {
  id: string;
  from: Airport | null;
  to: Airport | null;
  date: string;
}

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>("Round Trip");
  
  // Single/Round Trip state
  const [singleFrom, setSingleFrom] = useState<Airport | null>(null);
  const [singleTo, setSingleTo] = useState<Airport | null>(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Multi City state
  const [segments, setSegments] = useState<FlightSegment[]>([
    { id: "1", from: null, to: null, date: "" },
    { id: "2", from: null, to: null, date: "" },
  ]);

  // Passenger state
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [infants, setInfants] = useState("0");

  const minDate = new Date().toISOString().split("T")[0];

  const handleAddSegment = () => {
    setSegments((prev) => [
      ...prev,
      { id: Date.now().toString(), from: null, to: null, date: "" },
    ]);
  };

  const handleRemoveSegment = (id: string) => {
    if (segments.length > 2) {
      setSegments((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const updateSegment = (id: string, field: keyof FlightSegment, value: string | Airport | null) => {
    setSegments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const passengersText = `${adults} Adult${parseInt(adults) > 1 ? "s" : ""}${
      parseInt(children) > 0 ? `, ${children} Children` : ""
    }${parseInt(infants) > 0 ? `, ${infants} Infant${parseInt(infants) > 1 ? "s" : ""}` : ""}`;

    let detailsText = "";

    if (tripType === "Multi City") {
      const segmentsText = segments
        .map(
          (s, i) =>
            `${i + 1}. ${s.from?.city} (${s.from?.iata}) to ${s.to?.city} (${s.to?.iata}) — ${s.date}`
        )
        .join("\n");

      detailsText = `Trip Type: ${tripType}\nSegments:\n${segmentsText}\nPassengers: ${passengersText}`;
    } else {
      detailsText = `Route: ${singleFrom?.city} (${singleFrom?.iata}) to ${singleTo?.city} (${singleTo?.iata})\nTrip Type: ${tripType}\nDeparture Date: ${departureDate}`;
      if (tripType === "Round Trip") {
        detailsText += `\nReturn Date: ${returnDate}`;
      }
      detailsText += `\nPassengers: ${passengersText}`;
    }

    const text = `I am looking for a flight ticket with the following details:\n\n${detailsText}\n\nKindly check and provide the best available fare and flight options. Thank you.`;

    const url = getWhatsAppUrl(text, "services");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10";
  const labelClasses = "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="mb-2 flex items-start gap-3 border-b border-slate-100 pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#61a447]/10 text-[#61a447]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-[#092f42]">Search Flights</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Tell us your route and dates, and our team will provide the best fares on WhatsApp.
          </p>
        </div>
      </div>

      {/* Trip Type Selector */}
      <div className="flex flex-wrap gap-4">
        {(["One Way", "Round Trip", "Multi City"] as TripType[]).map((type) => (
          <label
            key={type}
            className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              tripType === type
                ? "border-[#092f42] bg-[#092f42] text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#61a447]/50 hover:bg-[#61a447]/5"
            }`}
          >
            <input
              type="radio"
              name="tripType"
              value={type}
              checked={tripType === type}
              onChange={(e) => setTripType(e.target.value as TripType)}
              className="hidden"
            />
            {type}
          </label>
        ))}
      </div>

      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-6">
        {tripType === "Multi City" ? (
          <div className="flex flex-col gap-6">
            {segments.map((segment, index) => (
              <div key={segment.id} className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#092f42] uppercase tracking-wider">Flight {index + 1}</h3>
                  {segments.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSegment(segment.id)}
                      className="flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <AirportSelect
                    label="From"
                    value={segment.from}
                    onChange={(val) => updateSegment(segment.id, "from", val)}
                    required
                  />
                  <AirportSelect
                    label="To"
                    value={segment.to}
                    onChange={(val) => updateSegment(segment.id, "to", val)}
                    required
                  />
                  <div>
                    <label className={labelClasses}>Date <span className="text-[#61a447]">*</span></label>
                    <input
                      type="date"
                      required
                      min={minDate}
                      value={segment.date}
                      onChange={(e) => updateSegment(segment.id, "date", e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSegment}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-dashed border-[#61a447] bg-[#61a447]/5 px-4 py-3 text-sm font-bold text-[#61a447] transition hover:bg-[#61a447]/10"
            >
              <Plus className="h-4 w-4" /> Add another city/flight
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <AirportSelect
              label="From"
              value={singleFrom}
              onChange={setSingleFrom}
              required
            />
            <AirportSelect
              label="To"
              value={singleTo}
              onChange={setSingleTo}
              required
            />
            <div>
              <label className={labelClasses}>Departure Date <span className="text-[#61a447]">*</span></label>
              <input
                type="date"
                required
                min={minDate}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className={inputClasses}
              />
            </div>
            {tripType === "Round Trip" && (
              <div>
                <label className={labelClasses}>Return Date <span className="text-[#61a447]">*</span></label>
                <input
                  type="date"
                  required={tripType === "Round Trip"}
                  min={departureDate || minDate}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className={inputClasses}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClasses}>Adults (12+ yrs)</label>
          <select value={adults} onChange={(e) => setAdults(e.target.value)} className={inputClasses}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses}>Children (2-11 yrs)</label>
          <select value={children} onChange={(e) => setChildren(e.target.value)} className={inputClasses}>
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses}>Infants (0-2 yrs)</label>
          <select value={infants} onChange={(e) => setInfants(e.target.value)} className={inputClasses}>
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          Clicking Search Flights will open WhatsApp with your details prefilled.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#61a447] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#4a8035] active:scale-[0.98]"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search Flights
        </button>
      </div>
    </form>
  );
}
