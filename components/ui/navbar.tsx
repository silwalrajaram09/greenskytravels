"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Phone, Menu, X, PlaneTakeoff } from "lucide-react";

const destinationsData = [
  {
    country: "Nepal",
    link: "/destinations/nepal",
    packages: [
      { name: "Short Nepal Tour Package - 3 days", link: "/packages/short-nepal-tour-package-3-days" },
      { name: "Everest Base Camp Trek - 15 days", link: "/packages/everest-base-camp-trek-15-days" },
      { name: "Everest Panorama Trek - 10 days", link: "/packages/everest-panorama-trek-10-days" },
      { name: "Everest Base Camp View Trek - 14 days", link: "/packages/everest-base-camp-view-trek-14-days" },
    ],
  },
  {
    country: "Japan",
    link: "/destinations/japan",
    packages: [
      { name: "Short and sweet japan tour - 5 days", link: "/packages/short-and-sweet-japan-tour-5-days" },
      { name: "Glimpse of Japan Tour - 7 days", link: "/packages/glimpse-of-japan-tour-7-days" },
    ],
  },
  {
    country: "Georgia",
    link: "/destinations/georgia",
    packages: [
      { name: "Short and Sweet Tour of Georgia - 4 days", link: "/packages/short-and-sweet-tour-of-georgia-4-days" },
      { name: "Best Georgia Holidays - 7 days", link: "/packages/best-gerogia-holidays-7-days" },
      { name: "Baku, Tbilisi & Yerevan Tour Package - 9 days", link: "/packages/baku-tbilisi-yerevan-tour-9-days" },
    ],
  },
  {
    country: "Oman",
    link: "/destinations/oman",
    packages: [
      { name: "short Oman tour -4 days ", link: "/packages/short-oman-tour-4-days" },
      { name: "salalah tour package from dubai - 4 days", link: "/packages/salalah-tour-package-from-dubai-4-days" },
    ],
  },
  {
    country: "Tanzania",
    link: "/destinations/tanzania",
    packages: [
      { name: "Glimpse of Tanzania Tour -6 Days", link: "/packages/glimpse-of-tanzania-tour-6-days" },
      { name: "Short Tanzania Safari - 5 days", link: "/packages/short-tanzania-safari-5-days" },
      {name: "Best Tanzania and Zanzibar Tour -10 days", link: "/packages/best-tanzania-and-zanibar-tour-10-days"},
      
    ],
  },
  {
    country: "Azerbaijan",
    link: "/destinations/azerbaijan",
    packages: [
      { name: "Baku, Tbilisi & Yerevan Tour Package - 9 days", link: "/packages/baku-tbilisi-yerevan-tour-9-days" },
     
    ],
  },
  {
    country: "Jordan",
    link: "/destinations/jordan",
    packages: [
      { name: "Jordajn Tour Package - 4 days", link: "/packages/jordan-tour-package-4-days" },
     
    ],
  },
  {
    country: "Armenia",
    link: "/destinations/armenia",
    packages: [
      { name: "Baku, Tbilisi & Yerevan Tour Package - 9 days", link: "/packages/baku-tbilisi-yerevan-tour-9-days" },
     
    ],
  },
];

const companyLinks = [
  "About us",
  "Read Reviews",
  "Our Team",
  "FAQs",
  "Customize Your Trip",
];

const dubaiPackages = [
  {
    category: "Dubai Classic Tours",
    link: "/destinations/dubai",
    packages: [
      { name: "Highlights of Dubai Tour - 5 days", link: "/packages/highlights-of-dubai-tour-5-days" },
      { name: "Dubai, Abu Dhabi & East Coast Tour - 10 days", link: "/packages/dubai-abu-dhabi-east-coast-tour-10-days" },
      { name: "Dubai Tour With Extra Activities - 8 days", link: "/packages/dubai-tour-with-extra-activities-8-days" },
      { name: "Dubai, Abu Dhabi & Sharjah Tour - 6 days", link: "/packages/dubai-abu-dhabi-sharjah-tour-6-days" },
      { name: "Dubai And Abu Dhabi Tour - 6 days", link: "/packages/dubai-and-abu-dhabi-tour-6-days" },
      { name: "Short Thrill Dubai Adventure Tour - 6 days", link: "/packages/short-thrill-dubai-adventure-tour-6-days" },
      { name: "Epic Dubai Adventure Tour - 6 days", link: "/packages/epic-dubai-adventure-tour-6-days" },
    ]
  },
  {
    category: "Dubai Adventure Tours",
    link: "/destinations/dubai",
    packages: [
      { name: "Dubai Adventure Tour - 5 days", link: "/packages/dubai-adventure-tour-5-days" },
      { name: "The Grand Dubai Adventure Tour: Action-Packed  - 8 days", link: "/packages/the-grand-dubai-adventure-tour-8-days" },
      { name: "Dubai And Abu Dhabi Adventure Tour - 9 days", link: "/packages/dubai-and-abu-dhabi-adventure-tour-9-days" },
      { name: "Ultimate Dubai Adventure Escape - 10 days", link: "/packages/ultimate-dubai-adventure-escape-10-days" },
      { name: "Epic Dubai Adventure Escape - 10 days", link: "/packages/epic-dubai-adventure-escape-10-days" },
    ]
  },
  {
    category: "Dubai Premium Tours",
    link: "/destinations/dubai",
    packages: [
      { name: "Premium Dubai Escape - 4 days", link: "/packages/premium-dubai-escape-4-days" },
      { name: "Dubai & Abu Dhabi Premium Tour - 5 days", link: "/packages/dubai-abu-dhabi-premium-tour-5-days" },
      { name: "Dubai & Abu Dhbai Deluxe Escape - 6 days", link: "/packages/dubai-abu-dhabi-deluxe-escape-6-days" },
      { name: "Premium UAE Escape | Dubai, Sharjah & Abu Dhbai | Green Sky Travels - 7 days", link: "/packages/premium-uae-escape-7-days" },
      { name: "Dubai Premium Experience Tour - 8 days", link: "/packages/dubai-premium-experience-tour-8-days" },
      { name: "Premium Dubai Grand Experience - 9 Days / 8 Nights - 9 days", link: "/packages/premium-dubai-grand-experience-9-days" },
      { name: "Ultimate Dubai Premium Tour - 10 days", link: "/packages/ultimate-dubai-premium-tour-10-days" },
    ]
  },
  {
    category: "Dubai Luxury Tours",
    link: "/destinations/dubai",
    packages: [
      { name: "Short Dubai Luxury Tour : A Luxury Escape - 4 days", link: "/packages/short-dubai-luxury-tour-4-days" },
      { name: "Dubai & Abu Dhbai Luxury Tour - Exclusive luxury and Culture - 5 days", link: "/packages/dubai-abu-dhabi-luxury-tour-5-days" },
      { name: "Dubai & Abu Dhabi Luxury Escape Tour - 6 days", link: "/packages/dubai-abu-dhabi-luxury-escape-tour-6-days" },
      { name: "Elite Dubai Luxury Escape : Unrivaled Elegebnce & Adventure - 7 days", link: "/packages/elite-dubai-luxury-escape-7-days" },
      { name: "Ultimate Dubai Luxury Expereince - 8 days", link: "/packages/ultimate-dubai-luxury-experience-8-days" },
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string>("Nepal");
  const [hoveredDubaiCategory, setHoveredDubaiCategory] = useState<string>("Dubai Classic Tours");

  return (
    <nav className="fixed border-b border-gray-200 shadow-md top-0 left-0 right-0 z-50 bg-white backdrop-blur-md ">
      <div className="bg-green-900 text-white text-center py-2 text-sm font-bold" >
      Exclusive Last-Minute Offer: Enjoy 10% Off on <Link href="/dubai-tour-" className="text-white font-bold underline hover:text-primary transition-colors duration-300"> Luxurious Dubai Tour with Burj!</Link>  
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer ">
            <Link href="/" className="flex items-center gap-2 bg-transparent">
               
               <Image src="/images/branding/logo.jpg" alt="Logo" height={60} width={110}  />
              {/* <span className="font-bold text-xl tracking-tight">
                <span className="text-primary">Greensky</span>{" "}
                <span className="text-secondary">Travels</span>
              </span> */}
            </Link>
          </div>

          {/* Middle: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-4">
            
            {/* Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Destinations <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left flex overflow-hidden z-50">
                {/* Left Panel: Countries */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200 py-2">
                  {destinationsData.map((dest) => (
                    <div 
                      key={dest.country}
                      onMouseEnter={() => setHoveredCountry(dest.country)}
                      className={`px-4 py-3 text-sm transition-colors cursor-pointer border-l-4 ${hoveredCountry === dest.country ? 'bg-white text-primary font-bold border-primary' : 'text-gray-700 border-transparent hover:bg-gray-100 hover:text-primary'}`}
                    >
                      <Link href={dest.link} className="block w-full h-full">
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
                    {destinationsData.find(d => d.country === hoveredCountry)?.packages.map((pkg, i) => (
                      <Link
                        key={i}
                        href={pkg.link}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-colors font-medium"
                      >
                        {pkg.name}
                      </Link>
                    ))}
                    {destinationsData.find(d => d.country === hoveredCountry)?.packages.length === 0 && (
                      <span className="text-sm text-gray-400 italic">Coming soon...</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
             {/* Dubai Tour Packages Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Dubai Tour Packages <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dubai Mega Menu Dropdown */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left flex overflow-hidden z-50">
                {/* Left Panel: Categories */}
                <div className="w-1/3 bg-gray-50 border-r border-gray-200 py-2">
                  {dubaiPackages.map((pkg) => (
                    <div 
                      key={pkg.category}
                      onMouseEnter={() => setHoveredDubaiCategory(pkg.category)}
                      className={`px-4 py-3 text-sm transition-colors cursor-pointer border-l-4 ${hoveredDubaiCategory === pkg.category ? 'bg-white text-primary font-bold border-primary' : 'text-gray-700 border-transparent hover:bg-gray-100 hover:text-primary'}`}
                    >
                      <Link href={pkg.link} className="block w-full h-full">
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
                    {dubaiPackages.find(d => d.category === hoveredDubaiCategory)?.packages.map((subPkg, i) => (
                      <Link
                        key={i}
                        href={subPkg.link}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-colors font-medium"
                      >
                        {subPkg.name}
                      </Link>
                    ))}
                    {dubaiPackages.find(d => d.category === hoveredDubaiCategory)?.packages.length === 0 && (
                      <span className="text-sm text-gray-400 italic">Coming soon...</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Company <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="p-2 grid gap-1">
                  {companyLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>

            {/* Travel Guide */}
            <Link
              href="/travel-guide"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Travel Guide
            </Link>

           {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Contact details */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">WhatsApp / Viber</span>
                <span className="text-sm font-bold text-gray-900">+977-1234567890</span>
              </div>
            </div>
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
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {/* Mobile Links Summary... */}
            <div className="font-semibold text-gray-900 px-3 py-2 border-b">Destinations</div>
            {destinationsData.map((dest, i) => (
              <div key={i} className="mb-1 mt-1">
                <Link href={dest.link} className="block px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary">
                  {dest.country}
                </Link>
                <div className="pl-6 space-y-1">
                  {dest.packages.map((pkg, j) => (
                    <Link key={j} href={pkg.link} className="block px-6 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary">
                      {pkg.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="font-semibold text-gray-900 px-3 py-2 border-b mt-4">Company</div>
            {companyLinks.map((link, i) => (
              <Link key={i} href={`/${link.toLowerCase().replace(/ /g, "-")}`} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">
                {link}
              </Link>
            ))}

            <div className="font-semibold text-gray-900 px-3 py-2 border-b mt-4">Dubai Packages</div>
            {dubaiPackages.map((pkg, i) => (
              <div key={i} className="mb-1 mt-1">
                <Link href={pkg.link} className="block px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:text-primary">
                  {pkg.category}
                </Link>
                <div className="pl-6 space-y-1">
                  {pkg.packages.map((subPkg, j) => (
                    <Link key={j} href={subPkg.link} className="block px-6 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary">
                      {subPkg.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/contact" className="block font-semibold text-gray-900 px-3 py-3 border-b mt-2">
              Contact Us
            </Link>
            <Link href="/travel-guide" className="block font-semibold text-gray-900 px-3 py-3 border-b">
              Travel Guide
            </Link>
            
            <div className="mt-6 px-3">
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp / Viber</span>
                  <span className="text-base font-bold text-gray-900">+977-1234567890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}