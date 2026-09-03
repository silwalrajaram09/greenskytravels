"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";
import {
  destinationNavGroups,
  dubaiNavGroups,
  companyLinks,
  serviceLinks,
} from "@/lib/data/packageData";

const CONTACT = {
  phone: "+971 50 214 2541",
  whatsapp: "+971502142541",
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string>("Nepal");
  const [hoveredDubaiCategory, setHoveredDubaiCategory] = useState<string>(
    "Dubai Budget Friendly tour ",);

  return (
    <nav className="relative border-b border-gray-200 shadow-md top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      <div className="hidden  md:block sm:block lg:block bg-green-900 text-white text-center py-2 text-sm font-bold">
        Exclusive Last-Minute Offer: Enjoy 10% Off on{" "}
        <Link
          href="/luxurious-dubai-tour-with-burj-al-arab"
          className="text-white font-bold underline hover:text-primary transition-colors duration-300"
        >
          Luxurious Dubai Tour with Burj!
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
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {/* Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors">
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
                  {destinationNavGroups.map((dest) => (
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
                    {destinationNavGroups
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
                    {destinationNavGroups.find(
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

            {/* Dubai Tour Packages Dropdown */}
            <div className="relative group">
              <Link
                href="/dubai-tour-packages"
                className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Dubai Tour Packages{" "}
                <ChevronDown className="h-4 w-4 text-red-600 stroke-[3] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dubai Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left flex overflow-hidden z-50">
                {/* Left Panel: Categories */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200 py-2">
                  {dubaiNavGroups.map((pkg) => (
                    <div
                      key={pkg.category}
                      onMouseEnter={() => setHoveredDubaiCategory(pkg.category)}
                      className={`px-4 py-3 text-sm transition-colors cursor-pointer border-l-4 ${hoveredDubaiCategory === pkg.category ? "bg-white text-primary font-bold border-primary" : "text-gray-700 border-transparent hover:bg-gray-100 hover:text-primary"}`}
                    >
                      <Link
                        href={pkg.link}
                        className="block font-bold w-full h-full"
                      >
                        {pkg.category}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Right Panel: Packages */}
                <div className="w-2/3 p-6 bg-white min-h-[300px]">
                  <h4 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    {hoveredDubaiCategory}
                  </h4>
                  <div className="grid gap-2">
                    {dubaiNavGroups
                      .find((d) => d.category === hoveredDubaiCategory)
                      ?.packages.map((subPkg, i) => (
                        <Link
                          key={i}
                          href={subPkg.link}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-colors font-medium"
                        >
                          {subPkg.name}
                        </Link>
                      ))}
                    {dubaiNavGroups.find(
                      (d) => d.category === hoveredDubaiCategory,
                    )?.packages.length === 0 && (
                      <span className="text-sm text-gray-400 italic">
                        Coming soon...
                      </span>
                    )}
                  </div>
                </div>
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
            {/* <Link
              href="/travel-guide"
              className="px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors"
            >
              Travel Guide
            </Link> */}
            {/* Contact Us */}
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>

            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Contact details */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/971502142541?text=Hello!%20I%20would%20like%20more%20information%20about%20your%20tours."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 hover:bg-green-100 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                  WhatsApp / Viber
                </span>
                <span className="text-sm font-mono font-bold text-gray-900">
                  {CONTACT.whatsapp}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="p-2 text-gray-600">
              <Search className="w-5 h-5" />
            </button>
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
            {/* Mobile Links Summary... */}
            <div className="font-semibold text-gray-900 px-3 py-2 border-b">
              Destinations
            </div>
            {destinationNavGroups.map((dest, i) => (
              <div key={i} className="mb-1 mt-1">
                <Link
                  href={dest.link}
                  className="block px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary"
                >
                  {dest.country}
                </Link>
                <div className="pl-6 space-y-1">
                  {dest.packages.map((pkg, j) => (
                    <Link
                      key={j}
                      href={pkg.link}
                      className="block px-6 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary"
                    >
                      {pkg.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="font-semibold text-gray-900 px-3 py-2 border-b mt-4">
              Company
            </div>
            {companyLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            <div className="font-semibold text-gray-900 px-3 py-2 border-b mt-4">
              Dubai Packages
            </div>
            {dubaiNavGroups.map((pkg, i) => (
              <div key={i} className="mb-1 mt-1">
                <Link
                  href={pkg.link}
                  className="block px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary"
                >
                  {pkg.category}
                </Link>
                <div className="pl-6 space-y-1">
                  {pkg.packages.map((subPkg, j) => (
                    <Link
                      key={j}
                      href={subPkg.link}
                      className="block px-6 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary"
                    >
                      {subPkg.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="font-semibold text-gray-900 px-3 py-2 border-b mt-4">
              Services
            </div>
            {serviceLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block font-semibold text-gray-900 px-3 py-3 border-b mt-2"
            >
              Contact Us
            </Link>
            {/* <Link
              href="/travel-guide"
              className="block font-semibold text-gray-900 px-3 py-3 border-b"
            >
              Travel Guide
            </Link> */}

            <div className="mt-6 px-3">
              <a
                href="https://wa.me/971502142541?text=Hello!%20I%20would%20like%20more%20information%20about%20your%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100 hover:bg-green-100 transition-colors"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    WhatsApp / Viber
                  </span>
                  <span className="text-base font-mono font-bold text-gray-900">
                    {CONTACT.whatsapp}
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
