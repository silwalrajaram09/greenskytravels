import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinationSlug } from "@/lib/content/catalog";
import {
  Star,
  Lock,
  Clock,
  Users,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Mountain,
  Coffee,
  Bed,
  Plane,
  Eye,
  Heart,
} from "lucide-react";
import { fraunces } from "@/lib/fonts";
import {
  getAllPackageSlugs,
  getPackageBySlug,
  getAllPackages,
} from "@/lib/packages/get-package";
import { ElevationProfile } from "@/components/packages/ElevationProfile";
import { Itinerary } from "@/components/packages/Itinerary";
import { BookingWidget } from "@/components/packages/BookingWidget";
import { ReviewCarousel } from "@/components/packages/ReviewCarousel";
import { GalleryLightbox } from "@/components/packages/GalleryLightbox";
import { TabNavigation } from "@/components/packages/TabNavigation";
import { PackageHeader } from "@/components/packages/PackageHeader";
import { p } from "framer-motion/client";

interface PageProps {
  params: Promise<{ slug: string; package_slug: string }>;
}

export async function generateStaticParams() {
  const packages = await getAllPackages();
  return packages.map((pkg) => ({
    slug: destinationSlug(pkg.destination),
    package_slug: pkg.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { package_slug } = await params;
  const pkg = await getPackageBySlug(package_slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Green Sky Travels`,
    description: pkg.overview.slice(0, 155),
    keywords: [pkg.destination, pkg.category, pkg.title].filter(Boolean),
    openGraph: {
      title: `${pkg.title} | Green Sky Travels`,
      description: pkg.overview.slice(0, 155),
      images: pkg.heroImage ? [{ url: pkg.heroImage }] : [],
      type: "website",
    },
  };
}

const quickFacts = (
  pkg: NonNullable<Awaited<ReturnType<typeof getPackageBySlug>>>,
) => [
  { label: "Destination", value: pkg.destination, icon: MapPin },
  { label: "Duration", value: pkg.duration, icon: Clock },
  { label: "Activities", value: pkg.activities, icon: Mountain },
  { label: "Accommodation", value: pkg.accommodation, icon: Bed },
  { label: "Group Size", value: pkg.groupSize, icon: Users },
  { label: "Meals", value: pkg.meals, icon: Coffee },
];

export default async function PackagePage({ params }: PageProps) {
  const { package_slug } = await params;
  const pkg = await getPackageBySlug(package_slug);
  if (!pkg) notFound();

  const startingPrice = pkg.prices.reduce(
    (min, p) => (p.price < min ? p.price : min),
    pkg.prices[0]?.price ?? 0,
  );

  const reviews = pkg.reviews ?? [];

  const allPackages = await getAllPackages();
  const related = allPackages
    .filter((p) => p.slug !== pkg.slug)
    .filter(
      (p) => p.destination === pkg.destination || p.category === pkg.category,
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: pkg.overview,
    image: pkg.heroImage,
    brand: { "@type": "Brand", name: "Green Sky Travels" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: startingPrice,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}

      <PackageHeader pkg={pkg} />

      {/* Quick facts strip */}
      <section className="border-b border-slate-200 bg-white">
        {/* <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-justify font-bold text-[#020617]">{pkg.title}</h1>
        </div> */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {quickFacts(pkg).map((fact) => (
            <div key={fact.label} className="flex items-center gap-3">
              <fact.icon className="h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {fact.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#020617]">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <TabNavigation pkg={pkg} />

      {/* Main Content with Sticky Booking */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2
                className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
              >
                Trip Overview
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {pkg.overview}
              </p>
            </section>

            {/* Highlights */}
            <section id="highlights">
              <h3
                className={`${fraunces.className} text-xl font-medium text-[#020617]`}
              >
                Trip Highlights
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {pkg.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                  >
                    <Star className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-600 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Extra Sections */}
            {pkg.sections?.map((section) => {
              const [intro, ...points] = section.paragraphs ?? [];

              return (
                <section
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-28"
                >
                  <h2
                    className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                  >
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {/* Intro paragraph */}
                    {intro && (
                      <p className="leading-relaxed text-slate-600">
                        {intro}
                      </p>
                    )}

                    {/* Bullet points */}
                    {points.length > 0 && (
                      <ul className="space-y-4">
                        {points.map((point, index) => (
                          <li
                            key={`${section.title}-${index}`}
                            className="flex items-start gap-4 text-base leading-7 text-slate-700 md:text-lg"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-3 w-3 shrink-0 rounded-full border-[3px] border-[#65a943]"
                            />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              );
            })}

            {/* Gallery */}
            {pkg.gallery?.length > 0 && (
              <section id="gallery">
                <h2
                  className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                >
                  Tour Photos ({pkg.gallery.length})
                </h2>
                <GalleryLightbox images={pkg.gallery} />
              </section>
            )}

            {/* Distance & Altitude Table */}
            {pkg.distanceAndAltitude?.length > 0 && (
              <section id="distance">
                <h2
                  className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                >
                  Distance & Altitude Coverage
                </h2>
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr className="text-xs uppercase tracking-wide text-slate-500">
                        <th className="px-4 py-3 font-medium">
                          Trekking Route
                        </th>
                        <th className="px-4 py-3 font-medium">Distance</th>
                        <th className="px-4 py-3 font-medium">Duration</th>
                        <th className="px-4 py-3 font-medium">Altitude</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {pkg.distanceAndAltitude.map((seg) => (
                        <tr key={seg.route}>
                          <td className="px-4 py-3 font-medium text-slate-700">
                            {seg.route}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {seg.distance}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {seg.duration}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {seg.altitude}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Itinerary */}
            {pkg.itinerary?.length > 0 && (
              <section id="itinerary">
                <h2
                  className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                >
                  Trip Itinerary
                </h2>
                <div className="mt-6">
                  <Itinerary days={pkg.itinerary} />
                </div>
              </section>
            )}

            {/* Included / Excluded */}
            <section
              id="included"
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              <div>
                <h3
                  className={`${fraunces.className} text-xl font-medium text-[#020617]`}
                >
                  Included
                </h3>
                <ul className="mt-4 space-y-2">
                  {pkg.included.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-1 text-emerald-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className={`${fraunces.className} text-xl font-medium text-[#020617]`}
                >
                  Excluded
                </h3>
                <ul className="mt-4 space-y-2">
                  {pkg.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-1 text-red-500">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Good to Know */}
            {pkg.goodToKnow?.length > 0 && (
              <section id="good-to-know">
                <h2
                  className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                >
                  Good to Know
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {pkg.goodToKnow.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-200 p-4"
                    >
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Reviews */}
            {reviews.length > 0 && (
              <section id="reviews">
                <h2
                  className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
                >
                  Traveller Reviews
                </h2>
                <div className="mt-6">
                  <ReviewCarousel reviews={reviews} />
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sticky Booking Widget */}
          <aside className="relative lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Lock className="h-3.5 w-3.5" />
                 {pkg.tripType}
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <span className="flex items-center gap-1 font-bold text-[#020617]">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {reviews.length > 0
                      ? (
                          reviews.reduce((acc, r) => acc + r.rating, 0) /
                          reviews.length
                        ).toFixed(1)
                      : "5.0"}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>

              {/* Interactive Booking Widget */}
              <BookingWidget packageTitle={pkg.title} />

              {/* Payment Methods */}
              <div className="mt-6 pt-1">
                <Image
                  src="/images/payment/cards-light.svg"
                  alt="Visa, Mastercard, American Express, UnionPay and other accepted payment cards"
                  width={262}
                  height={35}
                  className="h-auto w-full max-w-[262px]"
                />
              </div>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        {related.length > 0 && (
          <section className="border-t border-slate-200 py-12">
            <h2
              className={`${fraunces.className} text-2xl font-medium text-[#020617]`}
            >
              You May Also Like
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/destinations/${destinationSlug(p.destination)}/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#020617] group-hover:text-emerald-600">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {p.duration} · from US${" "}
                      {Math.min(...p.prices.map((x) => x.price))}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="border-t border-slate-200 py-12 text-center">
          <h2
            className={`${fraunces.className} text-3xl font-medium text-[#020617]`}
          >
            Ready for {pkg.title}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Our team will help you plan every detail of your journey.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-emerald-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Contact Green Sky Travels
          </Link>
        </section>
      </div>
    </main>
  );
}
