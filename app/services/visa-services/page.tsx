"use client";

import { useMemo, useState } from "react";
import visaData, { VisaCategory, VisaItem } from "@/lib/content/visa";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config/site";

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

function whatsAppLink(country: string, visaName: string, nationality: string): string {
  const message =
    `Hello Green Sky Travels! I'd like more details about the ` +
    `${formatVisaName(visaName)} (${formatCountryName(country)}). ` +
    `My nationality is ${nationality}. ` +
    `Could you share the requirements, documents, and price?`;
  return getWhatsAppUrl(message, "services");
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.68 4.56 1.86 6.42L4 29l7.77-1.83A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.64 28 15S22.64 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.6 1.08 1.1-4.48-.25-.4A9.6 9.6 0 0 1 6.3 15c0-5.36 4.36-9.72 9.72-9.72S25.74 9.64 25.74 15s-4.36 9.7-9.72 9.7Zm5.32-7.28c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35Z" />
    </svg>
  );
}

export default function VisaPage() {
  const [activeCountry, setActiveCountry] = useState<string>(visaData[0]?.country ?? "");
  const [query, setQuery] = useState("");

  // CTA form state
  const [ctaCountry, setCtaCountry] = useState<string>(visaData[0]?.country ?? "");
  const ctaAvailableVisas = useMemo(() => {
    const category = visaData.find((c) => c.country === ctaCountry);
    return category?.visas ?? [];
  }, [ctaCountry]);
  
  const [ctaVisa, setCtaVisa] = useState<string>(ctaAvailableVisas[0]?.name ?? "");
  const [ctaNationality, setCtaNationality] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setCtaCountry(newCountry);
    const category = visaData.find((c) => c.country === newCountry);
    if (category && category.visas.length > 0) {
      setCtaVisa(category.visas[0].name);
    }
  };

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

  const activeCategory: VisaCategory | undefined = visaData.find((c) => c.country === activeCountry);

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaCountry || !ctaVisa || !ctaNationality.trim()) return;
    window.open(
      whatsAppLink(ctaCountry, ctaVisa, ctaNationality.trim()),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold text-slate-900">Visa Services</span>
        </nav>
        <div className="mt-8 mb-12">
          <h1 className="text-3xl font-bold text-[#092f42] sm:text-4xl">Visa Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            From a 48-hour Dubai transit visa to a UK visitor visa, our team handles the paperwork so you don&apos;t have to. Check out our supported countries below.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          
          {/* Search */}
          <div className="mb-8 max-w-lg">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a country or visa type..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm outline-none transition focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10"
              />
            </div>
          </div>

          {/* Category tabs — hidden while searching */}
          {!isSearching && (
            <div className="flex gap-3 overflow-x-auto pb-4 mb-8 -mx-1 px-1 scrollbar-hide">
              {visaData.map((category) => {
                const isActive = category.country === activeCountry;
                return (
                  <button
                    key={category.country}
                    type="button"
                    onClick={() => setActiveCountry(category.country)}
                    className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                      isActive
                        ? "bg-[#092f42] border-[#092f42] text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:border-[#61a447]/50 hover:bg-[#61a447]/5"
                    }`}
                  >
                    <span className="text-base">{COUNTRY_ICONS[category.country] ?? "🛂"}</span>
                    {formatCountryName(category.country)}
                    <span
                      className={`ml-1 text-xs px-1.5 py-0.5 rounded-md ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
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
              <div className="space-y-12">
                {searchResults.map((category) => (
                  <div key={category.country}>
                    <h2 className="flex items-center gap-2 text-sm font-bold text-[#092f42] uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">
                      <span className="text-lg">{COUNTRY_ICONS[category.country] ?? "🛂"}</span>
                      {formatCountryName(category.country)}
                    </h2>
                    <VisaGrid visas={category.visas} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-[#092f42] mb-2">No visas found for &quot;{query}&quot;</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">
                  We might still be able to help. Our team processes dozens of visa types not listed here.
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Hello Green Sky Travels! I couldn't find a "${query}" visa on your site — could you help me out?`,
                    "services"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#61a447] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#4a8035]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Ask us on WhatsApp
                </a>
              </div>
            )
          ) : activeCategory ? (
            <div className="animate-in fade-in duration-300">
              <VisaGrid visas={activeCategory.visas} />
            </div>
          ) : null}
        </div>

        {/* Global CTA Form */}
        <div className="mt-16 rounded-2xl bg-[#092f42] overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#61a447]/20 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#114b69]/40 blur-3xl" aria-hidden="true" />
          
          <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">Ready to start your visa process?</h2>
              <p className="text-[#a4b8c3] text-lg mb-8 md:mb-0 max-w-md">
                Select your required visa type below and connect instantly with our processing experts on WhatsApp.
              </p>
            </div>
            
            <form onSubmit={handleCtaSubmit} className="md:w-1/2 bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#a4b8c3] uppercase tracking-wider mb-2">Select Country</label>
                  <div className="relative">
                    <select
                      value={ctaCountry}
                      onChange={handleCountryChange}
                      className="w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#61a447] focus:ring-2 focus:ring-[#61a447]/20 transition-all [&>option]:text-slate-800"
                    >
                      {visaData.map((category) => (
                        <option key={category.country} value={category.country}>
                          {COUNTRY_ICONS[category.country]} {formatCountryName(category.country)}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#a4b8c3] uppercase tracking-wider mb-2">Select Visa Type</label>
                  <div className="relative">
                    <select
                      value={ctaVisa}
                      onChange={(e) => setCtaVisa(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#61a447] focus:ring-2 focus:ring-[#61a447]/20 transition-all [&>option]:text-slate-800"
                    >
                      {ctaAvailableVisas.map((visa) => (
                        <option key={visa.name} value={visa.name}>
                          {formatVisaName(visa.name)}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="cta-nationality" className="block text-xs font-bold text-[#a4b8c3] uppercase tracking-wider mb-2">
                    Nationality <span className="text-[#61a447]">*</span>
                  </label>
                  <input
                    id="cta-nationality"
                    type="text"
                    value={ctaNationality}
                    onChange={(e) => setCtaNationality(e.target.value)}
                    placeholder="Enter your nationality"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#61a447] focus:ring-2 focus:ring-[#61a447]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#61a447] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#61a447]/20 transition-all hover:bg-[#4a8035] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Ask about this
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}

function VisaGrid({ visas }: { visas: VisaItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {visas.map((visa) => (
        <div
          key={visa.name}
          className="group flex flex-col justify-center p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-[#61a447]/30 hover:bg-[#f4faf1] hover:shadow-sm transition-all"
        >
          <h3 className="font-bold text-[#092f42] text-sm leading-snug mb-2 group-hover:text-[#61a447] transition-colors">
            {formatVisaName(visa.name)}
          </h3>
          {visa.processingTime ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {visa.processingTime}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
               <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Contact for timeline
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
