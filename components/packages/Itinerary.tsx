"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/lib/packages/types";

interface ItineraryProps {
  days: ItineraryDay[];
}

export function Itinerary({ days }: ItineraryProps) {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([days[0]?.day ?? 1]));

  const toggleDay = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const allExpanded = openDays.size === days.length && days.length > 0;
  const toggleAll = () => {
    if (allExpanded) {
      setOpenDays(new Set());
    } else {
      setOpenDays(new Set(days.map((d) => d.day)));
    }
  };

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <button
          onClick={toggleAll}
          className="text-sm font-semibold text-[#5da33d] underline underline-offset-4 hover:text-emerald-700"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="space-y-0">
        {days.map((entry, index) => {
          const isOpen = openDays.has(entry.day);

          return (
            <div key={entry.day} className="group flex items-stretch gap-5">
              {/* Timeline Column */}
              <div className="relative flex w-6 shrink-0 flex-col items-center">
                {/* Vertical connecting dashed line */}
                {index !== days.length - 1 && (
                  <div className="absolute top-[37px] bottom-[-37px] left-1/2 -translate-x-1/2 w-px border-l-[1.5px] border-dashed border-[#5da33d] z-0" />
                )}

                {/* Day Number Empty Circle */}
                <div className="relative z-10 mt-[30px] h-[14px] w-[14px] shrink-0 rounded-full border-[2px] border-[#5da33d] bg-white" />
              </div>

              {/* Content Column */}
              <div className="flex-1 border-b border-slate-200 py-6 group-last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleDay(entry.day)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between text-left"
                >
                  <h3 className="text-sm pr-4 -mt-1">
                    <span className="font-bold text-[#5da33d]">
                      Day {String(entry.day).padStart(2, "0")}:
                    </span>{" "}
                    <span className="font-bold text-slate-900">
                      {entry.title}
                    </span>
                  </h3>

                  {/* Circular Chevron Arrow */}
                  <div
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-[#5da33d] text-[#5da33d]"
                        : "border-slate-300 text-slate-400 group-hover:border-[#5da33d] group-hover:text-[#5da33d]"
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "" : "rotate-180"
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M15 12.5L10 7.5L5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expanded Description */}
                {isOpen && entry.description && (
                  <div className="mt-3 space-y-3 pr-8 text-base leading-relaxed text-slate-700">
                    {Array.isArray(entry.description) ? (
                      entry.description.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{entry.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
