import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { destinationNavGroups, dubaiNavGroups } from "@/lib/data/packageData";
import { getAllPackages } from "@/lib/packages/get-package";

export const metadata = {
  title: "Travel Packages | Green Sky Travels",
  description:
    "Explore our curated travel packages across Nepal, Dubai, Japan, Georgia, and more. Find the perfect adventure with Green Sky Travels.",
};

// Build a unique list of packages from the nav catalog + any JSON-backed ones.
function buildPackageList() {
  const seen = new Set<string>();
  const list: { title: string; link: string; destination: string }[] = [];

  const add = (title: string, link: string, destination: string) => {
    if (!seen.has(link)) {
      seen.add(link);
      list.push({ title, link, destination });
    }
  };

  destinationNavGroups.forEach((g) =>
    g.packages.forEach((p) => add(p.name, p.link, g.country)),
  );
  dubaiNavGroups.forEach((g) =>
    g.packages.forEach((p) => add(p.name, p.link, "Dubai")),
  );

  return list;
}

export default async function PackagesPage() {
  const catalogPackages = buildPackageList();
  const jsonPackages = await getAllPackages();

  // Group by destination for a nicer layout
  const byDestination = new Map<string, { title: string; link: string }[]>();
  catalogPackages.forEach((p) => {
    if (!byDestination.has(p.destination)) byDestination.set(p.destination, []);
    byDestination.get(p.destination)!.push({ title: p.title, link: p.link });
  });

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/branding/greenskytravaleslogo.jpg"
          alt="Green Sky Travels Packages"
          fill
          priority
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 to-[#020617]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-emerald-400">
            Explore
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium text-white md:text-6xl">
            All Travel Packages
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
            From Everest treks to Dubai luxury escapes, discover handcrafted
            itineraries for every kind of traveler.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Trending packages from JSON */}
        {jsonPackages.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
              Trending Packages
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {jsonPackages.map((pkg) => (
                <Link
                  key={pkg.slug}
                  href={`/packages/${pkg.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={pkg.heroImage}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-bold text-emerald-600 backdrop-blur">
                      <Star className="h-4 w-4 fill-emerald-600" />
                      4.9
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-emerald-600">
                      <MapPin className="h-3.5 w-3.5" /> {pkg.destination}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-emerald-600">
                      {pkg.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-emerald-600" />
                        {pkg.groupSize}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <span className="text-sm text-gray-500">From</span>
                        <div className="text-xl font-bold text-emerald-600">
                          $
                          {Math.min(
                            ...pkg.prices.map((p) => p.price),
                          ).toLocaleString()}
                        </div>
                      </div>
                      <span className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-emerald-600">
                        Explore
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Browse by destination */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Browse by Destination
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from(byDestination.entries()).map(
              ([destination, packages]) => (
                <div
                  key={destination}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    {destination}
                  </h3>
                  <ul className="space-y-2">
                    {packages.slice(0, 6).map((p) => (
                      <li key={p.link}>
                        <Link
                          href={p.link}
                          className="text-sm text-gray-600 transition-colors hover:text-emerald-600"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                    {packages.length > 6 && (
                      <li className="text-sm font-medium text-emerald-600">
                        +{packages.length - 6} more
                      </li>
                    )}
                  </ul>
                </div>
              ),
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-emerald-600 p-10 text-center text-white md:p-16">
          <h2 className="text-2xl font-bold md:text-4xl">
            Can&rsquo;t find what you&rsquo;re looking for?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-50">
            Let us customize a perfect itinerary tailored to your preferences,
            budget, and travel dates.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            Customize Your Trip
          </Link>
        </section>
      </div>
    </main>
  );
}
