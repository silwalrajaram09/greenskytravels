"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/lib/packages/types";
import { Clock, ChevronDown } from "lucide-react";

interface ItineraryProps {
  days: ItineraryDay[];
}

export function Itinerary({ days }: ItineraryProps) {
  const [openDays, setOpenDays] = useState<Set<number>>(
    new Set([days[0]?.day ?? 1]),
  );

  const toggleDay = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
      }
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
      {/* Expand / Collapse Action */}
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={toggleAll}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#61a447]/40 bg-[#61a447]/5 px-3 py-1.5 text-xs font-semibold text-[#61a447] transition-colors hover:bg-[#61a447]/10 hover:border-[#61a447] sm:text-sm"
        >
          {allExpanded ? "Collapse All −" : "Expand All +"}
        </button>
      </div>

      {/* Timeline List */}
      <div className="space-y-0">
        {days.map((entry, index) => {
          const isOpen = openDays.has(entry.day);

          return (
            <div key={entry.day} className="group flex items-stretch gap-4 sm:gap-5">
              {/* Timeline column */}
              <div className="relative flex w-6 shrink-0 flex-col items-center">
                {index !== days.length - 1 && (
                  <div className="absolute top-[32px] bottom-[-32px] left-1/2 z-0 w-px -translate-x-1/2 border-l-[1.5px] border-dashed border-[#61a447]" />
                )}

                <div className="relative z-10 mt-[22px] h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#61a447] bg-white ring-4 ring-white" />
              </div>

              {/* Content box */}
              <div className="flex-1 border-b border-slate-200/80 py-4 sm:py-5 group-last:border-b-0">
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleDay(entry.day)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 text-left transition-colors"
                >
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    <span className="font-bold text-[#61a447]">
                      Day {String(entry.day).padStart(2, "0")}:
                    </span>{" "}
                    <span className="text-slate-900 hover:text-[#61a447] transition-colors">
                      {entry.title}
                    </span>
                  </h3>

                  {/* Chevron Icon */}
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all sm:h-8 sm:w-8 ${
                      isOpen
                        ? "border-[#61a447] bg-[#61a447]/10 text-[#61a447]"
                        : "border-slate-300 bg-white text-slate-400 group-hover:border-[#61a447] group-hover:text-[#61a447]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Itinerary Details */}
                {isOpen && (
                  <div className="mt-4 space-y-4 pr-2 text-sm leading-relaxed text-slate-600 sm:text-base md:pr-6">
                    {/* Main Description */}
                    {Array.isArray(entry.description) ? (
                      entry.description.map((desc, dIdx) => (
                        <p key={dIdx} className="leading-relaxed text-slate-600">
                          {desc}
                        </p>
                      ))
                    ) : entry.description ? (
                      <p className="leading-relaxed text-slate-600">
                        {entry.description}
                      </p>
                    ) : null}

                    {/* Highlights Points */}
                    {entry.highlights && entry.highlights.length > 0 && (
                      <ul className="space-y-3 pt-1">
                        {entry.highlights.map((highlight, hIdx) => {
                          const isObj =
                            typeof highlight === "object" && highlight !== null;
                          const title = isObj ? highlight.title : highlight;
                          const desc = isObj ? highlight.description : null;

                          return (
                            <li key={hIdx} className="flex items-start gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#61a447] bg-white"
                              />

                              <p className="leading-relaxed text-slate-600">
                                {desc ? (
                                  <>
                                    <strong className="font-semibold text-slate-900">
                                      {title}:
                                    </strong>{" "}
                                    {desc}
                                  </>
                                ) : (
                                  title
                                )}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {/* Ending Paragraph */}
                    {entry.ending && (
                      <p className="leading-relaxed text-slate-600 pt-1">
                        {entry.ending}
                      </p>
                    )}

                    {/* Duration Badge */}
                    {entry.duration && (
                      <div className="inline-flex items-center gap-2 rounded-lg border border-[#61a447]/20 bg-[#61a447]/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700">
                        <Clock className="h-4 w-4 text-[#61a447]" />
                        <span>
                          Duration:{" "}
                          <strong className="font-semibold text-slate-900">
                            {entry.duration}
                          </strong>
                        </span>
                      </div>
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
