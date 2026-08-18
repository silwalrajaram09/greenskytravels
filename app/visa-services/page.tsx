"use client";

import { useMemo, useState } from "react";
import visaData, { VisaCategory, VisaItem } from "@/lib/data/visa";

const WHATSAPP_NUMBER = "971585032337";

const COUNTRY_ICONS: Record<string, string> = {
  "UAE VISA": "🇦🇪",
  "SAUDI VISA": "🇸🇦",
  "OMAN VISA": "🇴🇲",
  "BAHRAIN VISA": "🇧🇭",
  "GLOBAL VISA": "🌍",
};

/** "48 HOURS DUBAI TRANSIT VISA" -> "48 Hours Dubai Transit Visa", preserving acronyms */
const ACRONYMS = new Set(["uae", "usa", "uk", "saarc", "covid", "e-visa"]);

function formatVisaName(name: string): string {
  return name
    .toLowerCase()
    .split(" ")
    .map((raw) => {
      const leading = raw.match(/^\(*/)?.[0] ?? "";
      const trailing = raw.match(/\)*$/)?.[0] ?? "";
      const core = raw.slice(leading.length, raw.length - trailing.length);
      if (!core) return raw;
      if (ACRONYMS.has(core)) return leading + core.toUpperCase() + trailing;
      if (/^[0-9]/.test(core)) return leading + core + trailing;
      return leading + core.charAt(0).toUpperCase() + core.slice(1) + trailing;
    })
    .join(" ");
}

function formatCountryName(country: string): string {
  return country
    .replace(/ VISA$/i, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function whatsAppLink(country: string, visa: VisaItem): string {
  const message =
    `Hello Green Sky Travels! I'd like more details about the ` +
    `${formatVisaName(visa.name)} (${formatCountryName(country)}). ` +
    `Could you share the requirements, documents, and price?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.68 4.56 1.86 6.42L4 29l7.77-1.83A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.64 28 15S22.64 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.6 1.08 1.1-4.48-.25-.4A9.6 9.6 0 0 1 6.3 15c0-5.36 4.36-9.72 9.72-9.72S25.74 9.64 25.74 15s-4.36 9.7-9.72 9.7Zm5.32-7.28c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35Z" />
    </svg>
  );
}

export default function VisaPage() {
  const [activeCountry, setActiveCountry] = useState<string>(
    visaData[0]?.country ?? "",
  );
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = query.trim().toLowerCase();
    return visaData
      .map((category) => ({
        country: category.country,
        visas: category.visas.filter((v) => v.name.toLowerCase().includes(q)),
      }))
      .filter((category) => category.visas.length > 0);
  }, [query, isSearching]);

  const activeCategory: VisaCategory | undefined = visaData.find(
    (c) => c.country === activeCountry,
  );

  return (
    <main className="bg-slate-50  pb-16">
      {/* Hero */}
      <section className="relative bg-white text-black py-10 px-4 text-justify overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto ">
          <span className="inline-block text-black text-3xl font-bold tracking-[0.2em] uppercase mb-4 bg-white/5 border border-white/10 rounded-full ">
            Visa Services
          </span>
          <h1 className="text-xl md:text-xl  mb-5 leading-tight">
            Visa Assistance, Sorted for You
          </h1>
          <p className="text-black text-base md:text-lg leading-relaxed max-w-7xl mx-auto mb-8">
            From a 48-hour Dubai transit visa to a UK visitor visa, our team
            handles the paperwork so you don&rsquo;t have to. Pick a visa below
            to ask us directly on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Green Sky Travels! I'd like help figuring out which visa I need.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#61a447] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#4a8035] active:scale-[0.98] transition-all uppercase tracking-wide text-sm shadow-lg shadow-[#61a447]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Not sure which visa? Ask us
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto md:mx-0">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a country or visa type..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#61a447] focus:border-transparent bg-slate-50 text-slate-700 text-sm transition-shadow"
                />
              </div>
            </div>

            {/* Category tabs — hidden while searching */}
            {!isSearching && (
              <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1 scrollbar-hide">
                {visaData.map((category) => {
                  const isActive = category.country === activeCountry;
                  return (
                    <button
                      key={category.country}
                      type="button"
                      onClick={() => setActiveCountry(category.country)}
                      className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-colors border ${
                        isActive
                          ? "bg-[#092f42] border-[#092f42] text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:border-[#61a447]/50 hover:text-[#092f42]"
                      }`}
                    >
                      <span>{COUNTRY_ICONS[category.country] ?? "🛂"}</span>
                      {formatCountryName(category.country)}
                      <span
                        className={`text-xs font-normal ${
                          isActive ? "text-white/70" : "text-slate-400"
                        }`}
                      >
                        {category.visas.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Results */}
            {isSearching ? (
              searchResults.length > 0 ? (
                <div className="space-y-10">
                  {searchResults.map((category) => (
                    <div key={category.country}>
                      <h2 className="flex items-center gap-2 text-sm font-bold text-[#092f42] uppercase tracking-wide mb-4">
                        <span>{COUNTRY_ICONS[category.country] ?? "🛂"}</span>
                        {formatCountryName(category.country)}
                      </h2>
                      <VisaGrid
                        country={category.country}
                        visas={category.visas}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-slate-400 mb-4">
                    No visa matching &ldquo;{query}&rdquo; — but our team
                    probably still knows the answer.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello Green Sky Travels! I couldn't find a "${query}" visa on your site — could you help me out?`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#61a447] font-bold text-sm hover:underline"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Ask us on WhatsApp
                  </a>
                </div>
              )
            ) : activeCategory ? (
              <VisaGrid
                country={activeCategory.country}
                visas={activeCategory.visas}
              />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

function VisaGrid({ country, visas }: { country: string; visas: VisaItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {visas.map((visa) => (
        <div
          key={visa.name}
          className="flex flex-col justify-between p-5 rounded-xl border border-slate-200 hover:border-[#61a447]/40 hover:bg-[#f4faf1] transition-colors"
        >
          <div className="mb-4">
            <h3 className="font-bold text-[#092f42] text-sm leading-snug mb-2">
              {formatVisaName(visa.name)}
            </h3>
            {visa.processingTime ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {visa.processingTime}
              </span>
            ) : (
              <span className="inline-flex items-center text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                Contact for timeline
              </span>
            )}
          </div>

          <a
            href={whatsAppLink(country, visa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#61a447] hover:bg-[#4a8035] active:scale-[0.98] transition-all rounded-lg px-4 py-2.5 uppercase tracking-wide"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            More details 
          </a>
        </div>
      ))}
    </div>
  );
}
