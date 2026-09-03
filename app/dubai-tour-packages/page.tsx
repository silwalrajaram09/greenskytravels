import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import PackageCard from "@/components/ui/package-card";
import { dubaiNavGroups, popularDestinations } from "@/lib/data/packageData";
import { getAllPackages } from "@/lib/packages/get-package";
import type { TravelPackage } from "@/lib/packages/types";

export const metadata: Metadata = {
  title: "Dubai Tour Packages | Green Sky Travels",
  description:
    "Explore budget-friendly, adventure, premium, and luxury Dubai tour packages with Green Sky Travels.",
};

export default async function DubaiTourPackagesPage() {
  const allPackages = await getAllPackages();
  const packageMap = new Map(allPackages.map((pkg) => [pkg.slug, pkg]));
  const dubaiImage = popularDestinations.find(
    (destination) => destination.slug === "dubai-tour-packages",
  )?.image;

  const categories = dubaiNavGroups.map((group) => ({
    ...group,
    packages: group.packages
      .map((link) => {
        const slug = link.link.split("/").pop();
        return slug ? packageMap.get(slug) : undefined;
      })
      .filter((pkg): pkg is TravelPackage => Boolean(pkg)),
  }));

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="relative isolate overflow-hidden bg-[#092f42]">
        {dubaiImage && (
          <Image
            src={dubaiImage}
            alt="Dubai skyline"
            fill
            priority
            className="object-cover opacity-35"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#092f42] via-[#092f42]/85 to-[#092f42]/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="font-semibold text-white">Dubai Tour Packages</span>
          </nav>
          <div className="max-w-3xl py-20 sm:py-28">
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              United Arab Emirates
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              Dubai tour packages for every kind of traveller
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Choose from carefully planned budget-friendly, adventure, premium,
              and luxury packages. Select a tour to view its complete itinerary
              and request your booking through our travel team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
                City experiences
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
                Flexible durations
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
                Customizable support
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            Find your Dubai experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#092f42] sm:text-4xl">
            Explore our four package categories
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Browse each category below. Every package opens its own detailed
            page with the itinerary, inclusions, photos, reviews, and booking
            request options.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.category} id={category.category.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-600">
                    Dubai collection
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[#092f42] sm:text-3xl">
                    {category.category.trim()}
                  </h2>
                </div>
                <span className="text-sm font-medium text-slate-500">
                  {category.packages.length} package{category.packages.length === 1 ? "" : "s"}
                </span>
              </div>

              {category.packages.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.packages.map((pkg) => (
                    <PackageCard
                      key={`${category.category}-${pkg.slug}`}
                      title={pkg.title}
                      image={pkg.heroImage}
                      duration={pkg.duration}
                      groupSize={pkg.groupSize}
                      price={pkg.prices[0] ? `$${pkg.prices[0].price.toLocaleString()}` : "Request a quote"}
                      rating={pkg.reviews?.length ? pkg.reviews.reduce((sum, review) => sum + review.rating, 0) / pkg.reviews.length : 5}
                      href={`/destinations/dubai-tour-packages/${pkg.slug}`}
                    />
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
                  Packages for this category will be available soon.
                </p>
              )}
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-emerald-600 p-8 text-white sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-100">
                Need help choosing?
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Build your ideal Dubai holiday with our team.
              </h2>
              <p className="mt-4 leading-7 text-emerald-50">
                Tell us your dates, interests, and budget. We can recommend a
                package or customize an itinerary around your plans.
              </p>
            </div>
            <Link
              href="/customize-your-trip"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              Customize your trip
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
