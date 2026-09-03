"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getService } from "@/lib/data/services";

export default function ServiceOrbit() {
  const orbitKeys = [
    "flights",
    "hotels",
    "transfers",
    "visa",
    "insurance",
    "visa-change",
    "ticketing",
    "custom-trips",
  ] as const;

  const orbitNodes = orbitKeys
    .map((key) => getService(key))
    .filter(Boolean) as NonNullable<ReturnType<typeof getService>>[];

  // 8 items, 45 degrees apart. Start at top (270 degrees or -90)
  // To match typical layout: top is index 0.
  // 0: top, 1: top-right, 2: right, 3: bottom-right, 4: bottom, 5: bottom-left, 6: left, 7: top-left
  const positions = [
    { top: 10, left: 50 }, // 0 - Top
    { top: 21.72, left: 78.28 }, // 1 - TR
    { top: 50, left: 90 }, // 2 - R
    { top: 78.28, left: 78.28 }, // 3 - BR
    { top: 90, left: 50 }, // 4 - B
    { top: 78.28, left: 21.72 }, // 5 - BL
    { top: 50, left: 10 }, // 6 - L
    { top: 21.72, left: 21.72 }, // 7 - TL
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[450px] aspect-square flex items-center justify-center">
      {/* Connecting lines SVG */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {positions.map((pos, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${pos.left}%`}
            y2={`${pos.top}%`}
            stroke={hoveredIndex === i ? "#c91c3c" : "#e2e8f0"}
            strokeWidth={hoveredIndex === i ? "2" : "1"}
            className="transition-colors duration-300"
            strokeDasharray={hoveredIndex === i ? "none" : "4 4"}
          />
        ))}
      </svg>

      {/* Center Logo */}
      <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center">
        <Image
          src="/images/branding/logo.jpg"
          alt="Green Sky Travels"
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Orbit Items */}
      {orbitNodes.map((service, i) => {
        const Icon = service.icon;
        const pos = positions[i];

        return (
          <Link
            key={service.key}
            href={service.href}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`absolute z-20 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-md transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group ${
              hoveredIndex === i ? "scale-125 shadow-xl shadow-[#c91c3c]/20 border-[#c91c3c]" : "hover:scale-110"
            }`}
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
          >
            <Icon
              className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-300 ${
                hoveredIndex === i ? "text-[#c91c3c]" : "text-slate-600"
              }`}
            />

            {/* Tooltip */}
            <div
              className={`absolute top-full mt-3 px-3 py-1.5 bg-[#092f42] text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-all duration-300 opacity-0 scale-95 origin-top ${
                hoveredIndex === i ? "opacity-100 scale-100 -translate-y-1" : ""
              }`}
            >
              {service.shortTitle}
              {/* Tooltip triangle */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-x-4 border-x-transparent border-b-4 border-b-[#092f42]" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
