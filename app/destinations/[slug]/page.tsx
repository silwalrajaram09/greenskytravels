import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Users, MapPin, Star } from "lucide-react";
import {
  popularDestinations,
  destinationNavGroups,
  dubaiNavGroups,
} from "@/lib/content/catalog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const title = slug
    .replace(/-tour-packages$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `${title} Tour Packages | Green Sky Travels`,
    description: `Explore ${title} tour packages with Green Sky Travels.`,
  };
}

// Flatten nav data into a destination → packages map.
function getDestinationPackages(slug: string) {
  const normalized = slug.toLowerCase();
  const groups = [
    ...destinationNavGroups,
    ...dubaiNavGroups.map((d) => ({
      country: "Dubai",
      link: d.link,
      packages: d.packages,
    })),
  ];

  const found = groups.find((g) => {
    const groupSlug = g.link.split("/").pop()?.toLowerCase();
    return groupSlug === normalized || g.country.toLowerCase() === normalized;
  });
  if (found) {
    return {
      name: found.country,
      packages: found.packages,
      toursCount: found.packages.length,
    };
  }
  return null;
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const title = slug
    .replace(/-tour-packages$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const destination = getDestinationPackages(slug);

  if (!destination) {
    notFound();
  }

  const destMeta = popularDestinations.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase(),
  );

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[42vh] min-h-[300px] w-full overflow-hidden">
        {destMeta ? (
          <Image
            src={destMeta.image}
            alt={destination.name}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16">
          <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-emerald-400">
            Destination
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-4xl font-medium leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-200">
            <MapPin className="h-4 w-4 text-emerald-400" />
            {destination.toursCount} tour package
            {destination.toursCount !== 1 ? "s" : ""} available
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
          {destination.name} Tour Packages
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destination.packages.map((pkg) => (
            <Link
              key={pkg.link}
              href={pkg.link}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                {destMeta && (
                  <Image
                    src={destMeta.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-bold text-emerald-600 backdrop-blur">
                  <Star className="h-4 w-4 fill-emerald-600" />
                  4.8
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600">
                  {pkg.name}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    Flexible
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-emerald-600" />
                    All sizes
                  </span>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <span className="inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-emerald-600">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-emerald-600 p-10 text-center text-white md:p-14">
          <h2 className="text-2xl font-bold md:text-3xl">
            Planning a trip to {destination.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-50">
            Our travel experts can customize the perfect itinerary for you.
            Reach out today!
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}
