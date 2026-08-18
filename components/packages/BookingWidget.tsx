"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

interface BookingWidgetProps {
  packageTitle: string;
}

export function BookingWidget({ packageTitle }: BookingWidgetProps) {
  const [pax, setPax] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const minDate = new Date().toISOString().split("T")[0];

  const whatsappMessage = encodeURIComponent(
    `Hello! I am interested in booking the "${packageTitle}" package.\n\n` +
      `Booking Details:\n` +
      `- Date: ${selectedDate || "Not selected yet"}\n` +
      `- Travelers: ${pax}\n\n` +
      `Could you please provide the available options and pricing?`
  );

  return (
    <div className="mt-5 space-y-4">
      {/* Date Picker */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Pick a Travel Date
        </label>

        <div className="relative mt-1">
          <input
            type="date"
            min={minDate}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />

          <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Pax Selector */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Number of Pax
        </label>

        <div className="mt-1 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPax(Math.max(1, pax - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-lg font-medium hover:bg-slate-50"
          >
            -
          </button>

          <span className="w-12 text-center text-lg font-bold">
            {pax}
          </span>

          <button
            type="button"
            onClick={() => setPax(Math.min(20, pax + 1))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-lg font-medium hover:bg-slate-50"
          >
            +
          </button>

          <span className="ml-2 text-sm text-slate-500">
            max 20
          </span>
        </div>
      </div>

      {/* Book Button */}
      <a
        href={`https://wa.me/971502142541?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg bg-emerald-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        Book This Trip
      </a>

      {/* Trust Information */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="flex items-center gap-1 text-slate-500">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Book Instantly Directly with Provider
        </span>

        <span className="text-slate-400">
          Fully Customizable
        </span>
      </div>
    </div>
  );
}