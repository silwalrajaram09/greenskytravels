"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Plane } from "lucide-react";
import { airports, type Airport } from "@/lib/content/airports";

interface AirportSelectProps {
  label: string;
  value: Airport | null;
  onChange: (airport: Airport | null) => void;
  placeholder?: string;
  required?: boolean;
}

export default function AirportSelect({
  label,
  value,
  onChange,
  placeholder = "Search airport, city, or code...",
  required,
}: AirportSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAirports = useMemo(() => {
    if (!query) return airports;
    const lowerQuery = query.toLowerCase();
    return airports.filter(
      (a) =>
        a.name.toLowerCase().includes(lowerQuery) ||
        a.city.toLowerCase().includes(lowerQuery) ||
        a.country.toLowerCase().includes(lowerQuery) ||
        a.iata.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const displayValue = value
    ? `${value.city} (${value.iata}) - ${value.name}`
    : "";

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-[#61a447]">*</span>}
      </label>
      
      <div 
        className="relative flex items-center w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus-within:border-[#61a447] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#61a447]/10 cursor-text"
        onClick={() => setIsOpen(true)}
      >
        <Plane className="mr-3 h-4 w-4 text-slate-400" aria-hidden="true" />
        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
          placeholder={placeholder}
          value={isOpen ? query : displayValue}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            if (value) onChange(null); // Clear value if user starts typing a new search
          }}
          onFocus={() => setIsOpen(true)}
          required={required && !value} // Ensure HTML required validation works if nothing is selected
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl shadow-slate-900/10">
          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport) => (
              <button
                key={airport.iata}
                type="button"
                className="flex w-full flex-col items-start px-4 py-2.5 text-left transition hover:bg-[#61a447]/10 focus:bg-[#61a447]/10 outline-none"
                onClick={() => {
                  onChange(airport);
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#092f42]">{airport.city}</span>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500 border border-slate-200">
                    {airport.iata}
                  </span>
                </div>
                <span className="text-xs text-slate-500 mt-0.5 truncate w-full">
                  {airport.name}, {airport.country}
                </span>
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-slate-500">
              No airports found matching &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
