"use client";

import { useState } from "react";
import type { RouteSegment } from "@/lib/packages/types";
import { parseAltitudeMeters, parseDistanceKm } from "@/lib/packages/get-package";

interface ElevationProfileProps {
  segments: RouteSegment[];
}

const WIDTH = 1000;
const HEIGHT = 280;
const PAD_X = 24;
const PAD_TOP = 40;
const PAD_BOTTOM = 40;

export function ElevationProfile({ segments }: ElevationProfileProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!segments?.length) return null;

  // Build cumulative distance + parsed altitude for each leg, starting
  // the walk at Lukla (the trek's actual first stop).
  const points = segments.reduce<{ x: number; alt: number; label: string }[]>(
    (acc, seg, i) => {
      const prevDistance = i === 0 ? 0 : acc[i].x;
      const dist = parseDistanceKm(seg.distance);
      acc.push({
        x: prevDistance + dist,
        alt: parseAltitudeMeters(seg.altitude),
        label: seg.route.split(" to ")[1] ?? seg.route,
      });
      return acc;
    },
    [{ x: 0, alt: parseAltitudeMeters(segments[0].altitude), label: segments[0].route.split(" to ")[0] }]
  );

  const totalDistance = points[points.length - 1].x || 1;
  const minAlt = Math.min(...points.map((p) => p.alt));
  const maxAlt = Math.max(...points.map((p) => p.alt));
  const altRange = maxAlt - minAlt || 1;

  const toX = (dist: number) => PAD_X + (dist / totalDistance) * (WIDTH - PAD_X * 2);
  const toY = (alt: number) =>
    HEIGHT - PAD_BOTTOM - ((alt - minAlt) / altRange) * (HEIGHT - PAD_TOP - PAD_BOTTOM);

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.x).toFixed(1)} ${toY(p.alt).toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L ${toX(points[points.length - 1].x).toFixed(1)} ${HEIGHT - PAD_BOTTOM} L ${toX(0)} ${HEIGHT - PAD_BOTTOM} Z`;

  const peakIndex = points.reduce(
    (best, p, i, arr) => (p.alt > arr[best].alt ? i : best),
    0
  );

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label="Elevation profile of the Everest Base Camp trek route"
      >
        <defs>
          <linearGradient id="elevationFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line
          x1={PAD_X}
          y1={HEIGHT - PAD_BOTTOM}
          x2={WIDTH - PAD_X}
          y2={HEIGHT - PAD_BOTTOM}
          stroke="#cbd5e1"
          strokeWidth={1}
        />

        <path d={areaPath} fill="url(#elevationFill)" />
        <path d={linePath} fill="none" stroke="#10b981" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

        {points.map((p, i) => (
          <g
            key={`${p.label}-${i}`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            className="cursor-pointer"
          >
            <circle
              cx={toX(p.x)}
              cy={toY(p.alt)}
              r={activeIndex === i || i === peakIndex ? 6 : 4}
              fill={i === peakIndex ? "#ef4444" : "#020617"}
              stroke="#f8fafc"
              strokeWidth={2}
            />
            {(activeIndex === i || i === peakIndex || i === 0 || i === points.length - 1) && (
              <text
                x={toX(p.x)}
                y={toY(p.alt) - 14}
                textAnchor="middle"
                className="fill-[#020617] text-[11px] font-[family-name:var(--font-geist-mono)]"
              >
                {Math.round(p.alt)}m
              </text>
            )}
          </g>
        ))}
      </svg>

      <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs text-slate-500 font-[family-name:var(--font-geist-mono)]">
        <span>{points[0].label}</span>
        <span className="text-[#ef4444] font-medium">
          Peak — {points[peakIndex].label} ({Math.round(points[peakIndex].alt)}m)
        </span>
        <span>{points[points.length - 1].label}</span>
      </div>

      {activeIndex !== null && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-[#020617] px-3 py-1.5 text-xs text-white shadow-lg pointer-events-none">
          <span className="font-medium">{points[activeIndex].label}</span>
          <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-emerald-400">
            {Math.round(points[activeIndex].alt)}m
          </span>
        </div>
      )}
    </div>
  );
}
