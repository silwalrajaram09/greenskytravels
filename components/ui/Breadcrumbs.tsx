"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const labels: Record<string, string> = {
  about: "About Us",
  contact: "Contact Us",
  destinations: "Destinations",
  packages: "Packages",
  team: "Our Team",
  reviews: "Reviews",
  faq: "FAQs",
  "travel-guide": "Travel Guide",
  "visa-services": "Visa Services",
};

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-gray-100 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 sm:px-6 lg:px-8">
        {/* Home */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-emerald-600"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>

        {segments.map((segment, index) => {
          const href =
            "/" + segments.slice(0, index + 1).join("/");

          const isLast = index === segments.length - 1;

          const label =
            labels[segment] || formatSegment(segment);

          return (
            <div
              key={href}
              className="flex min-w-0 items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />

              {isLast ? (
                <span className="truncate text-sm font-medium text-gray-900">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="truncate text-sm text-gray-500 transition-colors hover:text-emerald-600"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}