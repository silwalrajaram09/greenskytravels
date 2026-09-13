"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Headphones, Menu, Phone, X } from "lucide-react";
import {
  destinationNavGroups,
  dubaiNavGroups,
  companyLinks,
  serviceLinks,
} from "@/lib/content/catalog";
import { fixedDepartures } from "@/lib/content/fix-departures";
import { getWhatsAppUrl, siteConfig } from "@/lib/config/site";
import TravelSearch from "@/components/layout/TravelSearch";

const destinationMenuGroups = [
  ...destinationNavGroups,
  {
    country: "Dubai",
    link: "/destinations/dubai-tour-packages",
    packages: dubaiNavGroups.flatMap((group) => group.packages),
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string>("Nepal");
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileDestination, setMobileDestination] = useState<string | null>(
    null,
  );

  return (
    <nav className="relative border-b border-gray-200 shadow-md top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      <div className="hidden  md:block sm:block lg:block bg-green-900 text-white text-center py-2 text-sm font-bold">
        Exclusive Dashain Offer: Enjoy 10% Off on{" "}
        <Link
          href="/destinations"
          className="text-white font-bold underline hover:text-primary transition-colors duration-300"
        >
          All Packages
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2 bg-transparent">
              <Image
                src="/images/branding/logo.jpg"
                alt="Greensky Travels Logo"
                height={60}
                width={110}
              />
            </Link>
          </div>

          {/* Middle: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-1">
            {/* Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center  px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                Destinations{" "}
                <ChevronDown className="h-4 w-4 text-red-600 stroke-[3] transition-transform duration-200 group-hover:rotate-180" />
                {/* <span
                  className="mt-1 h-0 w-0 transition-transform duration-200 group-hover:rotate-180"
                  style={{
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid #ef1c24",
                  }}
                /> */}
              </button>

              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left flex overflow-hidden z-50">
                {/* Left Panel: Countries */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200 py-2">
                  {destinationMenuGroups.map((dest) => (
                    <div
                      key={dest.country}
                      onMouseEnter={() => setHoveredCountry(dest.country)}
                      className={`px-4 py-3 text-sm transition-colors cursor-pointer border-l-4 ${hoveredCountry === dest.country ? "bg-white text-primary font-bold border-primary" : "text-gray-700 border-transparent hover:bg-gray-100 hover:text-primary"}`}
                    >
                      <Link
                        href={dest.link}
                        className="block font-bold w-full h-full"
                      >
                        {dest.country}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Right Panel: Packages */}
                <div className="w-2/3 p-6 bg-white min-h-[300px]">
                  <h4 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    {hoveredCountry} Packages
                  </h4>
                  <div className="grid gap-2">
                    {destinationMenuGroups
                      .find((d) => d.country === hoveredCountry)
                      ?.packages.map((pkg, i) => (
                        <Link
                          key={i}
                          href={pkg.link}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-colors font-medium"
                        >
                          {pkg.name}
                        </Link>
                      ))}
                    {destinationMenuGroups.find(
                      (d) => d.country === hoveredCountry,
                    )?.packages.length === 0 && (
                      <span className="text-sm text-gray-400 italic">
                        Coming soon...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Departures Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                Fixed Departures{" "}
                <ChevronDown className="h-4 w-4 text-red-600 stroke-[3] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-72 rounded-xl border border-gray-100 bg-white p-2 shadow-xl opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/fixed-departures"
                  className="mb-1 block rounded-lg px-4 py-3 text-sm font-bold text-[#092f42] hover:bg-green-50 hover:text-primary"
                >
                  All Fixed Departures
                </Link>
                {fixedDepartures.map((departure) => (
                  <Link
                    key={departure.slug}
                    href={`/fixed-departures/${departure.slug}`}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-primary"
                  >
                    {departure.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors">
                Company{" "}
                <ChevronDown className="h-4 w-4 text-red-600 stroke-[3] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="p-2 grid gap-1">
                  {companyLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.link}
                      className="block px-4 py-2 text-sm text-gray-900 hover:text-primary hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* visa Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors">
                Services{" "}
                <ChevronDown className="h-4 w-4 text-red-600 stroke-[3] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="p-2 grid gap-1">
                  {serviceLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.link}
                      className="block px-4 py-2 text-sm text-gray-900 hover:text-primary hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Travel Guide */}
            <Link
              href="/travel-guide"
              className="px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors"
            >
              Travel Guide
            </Link>
            {/* Contact Us */}
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            
           
            
  
          </div>

          {/* Right: Travel expert contact */}
          <div className="hidden lg:flex items-center gap-5">

  {/* Search */}
  <TravelSearch />

  {/* Travel Expert */}
  {/* <a
    href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
    className="group flex items-center gap-3"
  >
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        bg-[#61a447]/10
        text-[#61a447]
        transition-all duration-300
        group-hover:bg-[#61a447]
        group-hover:text-white
      "
    >
      <Headphones className="h-4 w-4" />
    </div>

    <div className="hidden xl:flex flex-col leading-tight">
      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        Travel assistance
      </span>

      <span className="text-[13px] font-semibold text-[#073047]">
        {siteConfig.telephone}
      </span>
    </div>
  </a> */}

  {/* WhatsApp Book Now */}
  <a
    href={getWhatsAppUrl(
      "Hello Green Sky Travels! I would like to book a trip. Please help me with the available packages and details."
    )}
    target="_blank"
    rel="noopener noreferrer"
    className="
      
      bg-[#61a447]
      px-5 py-2.5
      text-xs font-bold uppercase tracking-wider
      text-white
      shadow-sm
      transition-all duration-300
      hover:bg-[#073047]
      hover:-translate-y-0.5
      hover:shadow-lg
      active:translate-y-0
    "
  >
    Book Now
  </a>

</div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <TravelSearch compact />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {/* Mobile accordion navigation: collapsed by default */}
            <button
              type="button"
              onClick={() =>
                setMobileSection(
                  mobileSection === "destinations" ? null : "destinations",
                )
              }
              className="flex w-full items-center justify-between border-b px-3 py-3 text-left font-semibold text-gray-900"
            >
              Destinations
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${mobileSection === "destinations" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "destinations" &&
              destinationMenuGroups.map((dest) => (
                <div
                  key={dest.country}
                  className="border-b border-gray-100 py-1"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={dest.link}
                      className="block flex-1 px-6 py-2 text-sm font-semibold text-gray-800 hover:text-primary"
                    >
                      {dest.country}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Show ${dest.country} packages`}
                      onClick={() =>
                        setMobileDestination(
                          mobileDestination === dest.country
                            ? null
                            : dest.country,
                        )
                      }
                      className="p-2 text-gray-500 hover:text-primary"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileDestination === dest.country ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileDestination === dest.country && (
                    <div className="space-y-1 pb-2 pl-6">
                      {dest.packages.map((pkg) => (
                        <Link
                          key={pkg.link}
                          href={pkg.link}
                          className="block px-6 py-1.5 text-xs text-gray-600 hover:text-primary"
                        >
                          {pkg.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            <button
              type="button"
              onClick={() =>
                setMobileSection(mobileSection === "company" ? null : "company")
              }
              className="mt-3 flex w-full items-center justify-between border-b px-3 py-3 text-left font-semibold text-gray-900"
            >
              Company
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${mobileSection === "company" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "company" &&
              companyLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

            <button
              type="button"
              onClick={() =>
                setMobileSection(
                  mobileSection === "departures" ? null : "departures",
                )
              }
              className="mt-3 flex w-full items-center justify-between border-b px-3 py-3 text-left font-semibold text-gray-900"
            >
              Fixed Departures
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${mobileSection === "departures" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "departures" && (
              <>
                <Link
                  href="/fixed-departures"
                  className="block px-6 py-2 text-sm font-semibold text-gray-800 hover:text-primary"
                >
                  All Fixed Departures
                </Link>
                {fixedDepartures.map((departure) => (
                  <Link
                    key={departure.slug}
                    href={`/fixed-departures/${departure.slug}`}
                    className="block px-6 py-1.5 text-xs text-gray-600 hover:text-primary"
                  >
                    {departure.title}
                  </Link>
                ))}
              </>
            )}

            <button
              type="button"
              onClick={() =>
                setMobileSection(
                  mobileSection === "services" ? null : "services",
                )
              }
              className="mt-3 flex w-full items-center justify-between border-b px-3 py-3 text-left font-semibold text-gray-900"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSection === "services" &&
              serviceLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="block px-6 py-2 text-sm text-gray-600 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
              href="/travel-guide"
              className="block font-semibold text-gray-900 px-3 py-3 border-b"
            >
              Travel Guide
            </Link>
            <Link
              href="/contact"
              className="block font-semibold text-gray-900 px-3 py-3 border-b mt-2"
            >
              Contact Us
            </Link>
            

            <div className="mt-6 px-3">
              <a
                href={getWhatsAppUrl(
                  "Hello! I would like more information about your tours.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100 hover:bg-green-100 transition-colors"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Travel assistance
                  </span>
                  <span className="text-base font-mono font-bold text-gray-900">
                    {siteConfig.whatsappDisplay}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
