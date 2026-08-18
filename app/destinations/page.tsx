import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { popularDestinations, destinationNavGroups } from "@/lib/data/packageData";

export const metadata = {
  title: "Destinations | Green Sky Travels",
  description:
    "Explore our top travel destinations across the globe — Nepal, Dubai, Japan, Georgia, Oman, Tanzania, and more.",
};

export default function DestinationsPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <Image
          src="/images/branding/greenskytravaleslogo.jpg"
          alt="Green Sky Travels Destinations"
          fill
          priority
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 to-[#020617]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-emerald-400">
            Where to next?
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium text-white md:text-6xl">
            Our Destinations
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
            From the Himalayas to the Arabian Gulf, discover curated travel
            experiences worldwide.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Popular destinations grid */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="mb-1 flex items-center gap-2 text-2xl font-bold text-white">
                    {dest.name}
                  </h3>
                  <p className="flex items-center gap-1 text-sm text-gray-200">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    {dest.toursCount} Tours Available
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All destinations with package lists */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            All Destinations
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {destinationNavGroups.map((group) => (
              <div
                key={group.country}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <Link
                  href={group.link}
                  className="mb-4 flex items-center justify-between"
                >
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-emerald-600">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    {group.country}
                  </h3>
                  <span className="text-sm font-medium text-emerald-600">
                    View all →
                  </span>
                </Link>
                <ul className="space-y-2">
                  {group.packages.map((p) => (
                    <li key={p.link}>
                      <Link
                        href={p.link}
                        className="text-sm text-gray-600 transition-colors hover:text-emerald-600"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
