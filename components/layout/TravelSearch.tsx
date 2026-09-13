"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, MapPin, Search, X } from "lucide-react";
import { destinationNavGroups, dubaiNavGroups } from "@/lib/content/catalog";

type SearchItem = {
  name: string;
  destination: string;
  link: string;
  days: string;
  kind: "Package" | "Destination";
};

const destinationItems: SearchItem[] = [
  ...destinationNavGroups.map((group) => ({
    name: group.country,
    destination: group.country,
    link: group.link,
    days: "",
    kind: "Destination" as const,
  })),
  {
    name: "Dubai",
    destination: "Dubai",
    link: "/destinations/dubai-tour-packages",
    days: "",
    kind: "Destination",
  },
];

const packageItems: SearchItem[] = [
  ...destinationNavGroups.flatMap((group) =>
    group.packages.map((pkg) => ({
      name: pkg.name,
      destination: group.country,
      link: pkg.link,
      days: pkg.name.match(/\b\d+\s*days?\b/i)?.[0] ?? "",
      kind: "Package" as const,
    })),
  ),
  ...dubaiNavGroups.flatMap((group) =>
    group.packages.map((pkg) => ({
      name: pkg.name,
      destination: "Dubai",
      link: pkg.link,
      days: pkg.name.match(/\b\d+\s*days?\b/i)?.[0] ?? "",
      kind: "Package" as const,
    })),
  ),
];

const searchItems = [...destinationItems, ...packageItems];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export default function TravelSearch({ compact = false }: { compact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return [];
    return searchItems
      .filter((item) => normalize(`${item.name} ${item.destination} ${item.days}`).includes(normalizedQuery))
      .filter((item, index, items) => items.findIndex((candidate) => candidate.link === item.link) === index)
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function openSearch() {
    setIsOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function clearSearch() {
    setQuery("");
    setIsOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search destinations and tour packages"
        aria-expanded={isOpen}
        className={`rounded-full p-2.5 text-slate-700 transition-colors hover:bg-green-50 hover:text-[#61a447] ${isOpen ? "bg-green-50 text-[#61a447]" : ""}`}
      >
        <Search className={compact ? "h-5 w-5" : "h-[18px] w-[18px]"} />
      </button>

      {isOpen && (
        <div className={`absolute top-12 z-[70] w-[min(92vw,390px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ${compact ? "right-0" : "right-0"}`}>
          <div className="border-b border-slate-100 bg-slate-50/80 p-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#61a447] focus-within:ring-2 focus-within:ring-[#61a447]/15">
              <Search className="h-4 w-4 shrink-0 text-[#61a447]" />
              <input
                ref={inputRef}
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search destination or tour package..."
                aria-label="Search destinations and tour packages"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
              {query && (
                <button type="button" aria-label="Clear search" onClick={clearSearch} className="rounded-full p-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {query && results.length > 0 && (
            <div className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
              {results.map((item) => (
                <Link key={`${item.kind}-${item.link}`} href={item.link} onClick={clearSearch} className="group flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-emerald-50">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#61a447] group-hover:bg-white">
                    {item.kind === "Destination" ? <MapPin className="h-4 w-4" /> : <CalendarDays className="h-4 w-4" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-800 group-hover:text-[#61a447]">{item.name}</span>
                    <span className="mt-0.5 flex items-center gap-2 text-xs text-slate-500"><span>{item.kind}</span><span aria-hidden="true">•</span><span>{item.destination}</span>{item.days && <><span aria-hidden="true">•</span><span>{item.days}</span></>}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}

          {query && results.length === 0 && <div className="px-5 py-7 text-center"><MapPin className="mx-auto h-6 w-6 text-slate-300" /><p className="mt-2 text-sm font-semibold text-slate-700">No matching trips found</p><p className="mt-1 text-xs text-slate-400">Try a destination, package name, or number of days.</p></div>}
          {!query && <div className="px-5 py-5 text-center text-xs text-slate-400">Search destinations, packages, or travel durations.</div>}
        </div>
      )}
    </div>
  );
}
