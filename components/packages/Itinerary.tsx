"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/lib/packages/types";

interface ItineraryProps {
  days: ItineraryDay[];
}

export function Itinerary({ days }: ItineraryProps) {
  const [openDay, setOpenDay] = useState<number>(days[0]?.day ?? 1);

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {days.map((entry) => {
        const isOpen = openDay === entry.day;
        return (
          <div key={entry.day}>
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? -1 : entry.day)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-emerald-50/50 px-2 -mx-2 rounded-md"
            >
              <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-sm text-emerald-600 pt-0.5">
                {String(entry.day).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-medium text-[#020617]">{entry.title}</span>
                {isOpen && (
                  <span className="mt-2 block text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                    {entry.description}
                  </span>
                )}
              </span>
              <svg
                className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}
