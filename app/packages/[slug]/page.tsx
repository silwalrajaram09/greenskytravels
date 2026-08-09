import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fraunces } from "@/app/lib/fonts";
import { getAllPackageSlugs, getPackageBySlug } from "@/app/lib/packages/get-package";
import { ElevationProfile } from "@/components/packages/ElevationProfile";
import { Itinerary } from "@/components/packages/Itinerary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Green Sky Travels`,
    description: pkg.overview.slice(0, 155),
  };
}

const quickFacts = (pkg: NonNullable<Awaited<ReturnType<typeof getPackageBySlug>>>) => [
  { label: "Duration", value: pkg.duration },
  { label: "Destination", value: pkg.destination },
  { label: "Group Size", value: pkg.groupSize },
  { label: "Meals", value: pkg.meals },
  { label: "Accommodation", value: pkg.accommodation },
];

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) notFound();

  const startingPrice = pkg.prices.reduce(
    (min, p) => (p.price < min ? p.price : min),
    pkg.prices[0]?.price ?? 0
  );

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-16">
          <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-emerald-400">
            {pkg.destination} &middot; {pkg.category}
          </p>
          <h1
            className={`${fraunces.className} max-w-3xl text-4xl font-medium leading-[1.05] text-white md:text-6xl`}
          >
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-5 md:px-16">
          {quickFacts(pkg).map((fact) => (
            <div key={fact.label}>
              <p className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</p>
              <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-sm text-[#020617]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-16">
        {/* Overview + sticky booking card */}
        <section className="grid grid-cols-1 gap-12 py-14 md:grid-cols-[1fr_320px]">
          <div>
            <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{pkg.overview}</p>

            <h3 className={`${fraunces.className} mt-10 text-xl font-medium text-[#020617]`}>
              Why This Trek
            </h3>
            <ul className="mt-4 space-y-3">
              {pkg.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10.5L8 14.5L16 6"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 md:sticky md:top-6">
            <p className="text-xs uppercase tracking-wide text-slate-400">Starting from</p>
            <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-3xl text-[#020617]">
              ${startingPrice.toLocaleString()}
              <span className="text-sm font-normal text-slate-400"> / person</span>
            </p>
            <dl className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500">Duration</dt>
                <dd className="text-[#020617]">{pkg.duration}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Group size</dt>
                <dd className="text-[#020617]">{pkg.groupSize}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-emerald-600 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Request This Trek
            </button>
          </aside>
        </section>

        {/* Elevation profile — signature element */}
        <section className="border-t border-slate-200 py-14">
          <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
            The Route, By Elevation
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            From Lukla to Everest Base Camp and the Kala Patthar viewpoint — plotted from
            the actual trail distances and altitudes.
          </p>
          <div className="mt-8">
            <ElevationProfile segments={pkg.distanceAndAltitude} />
          </div>
        </section>

        {/* Gallery */}
        {pkg.gallery?.length > 0 && (
          <section className="border-t border-slate-200 py-14">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {pkg.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Extra narrative sections from JSON */}
        {pkg.sections?.map((section) => (
          <section key={section.title} className="border-t border-slate-200 py-14">
            <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Itinerary */}
        <section className="border-t border-slate-200 py-14">
          <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
            Day-by-Day Itinerary
          </h2>
          <div className="mt-8">
            <Itinerary days={pkg.itinerary} />
          </div>
        </section>

        {/* Distance & altitude table */}
        <section className="border-t border-slate-200 py-14">
          <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
            Distance &amp; Altitude
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                  <th className="py-3 font-normal">Route</th>
                  <th className="py-3 font-normal">Distance</th>
                  <th className="py-3 font-normal">Duration</th>
                  <th className="py-3 font-normal">Altitude</th>
                </tr>
              </thead>
              <tbody className="font-[family-name:var(--font-geist-mono)]">
                {pkg.distanceAndAltitude.map((seg) => (
                  <tr key={seg.route} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-[family-name:var(--font-geist-sans)]">
                      {seg.route}
                    </td>
                    <td className="py-3 pr-4 text-slate-600">{seg.distance}</td>
                    <td className="py-3 pr-4 text-slate-600">{seg.duration}</td>
                    <td className="py-3 text-slate-600">{seg.altitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Included / excluded */}
        <section className="grid grid-cols-1 gap-10 border-t border-slate-200 py-14 md:grid-cols-2">
          <div>
            <h3 className={`${fraunces.className} text-xl font-medium text-[#020617]`}>
              What&rsquo;s Included
            </h3>
            <ul className="mt-4 space-y-2">
              {pkg.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-1 text-emerald-600">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`${fraunces.className} text-xl font-medium text-[#020617]`}>
              Not Included
            </h3>
            <ul className="mt-4 space-y-2">
              {pkg.excluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-1 text-red-500">&#10005;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-slate-200 py-14">
          <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
            Group Pricing
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {pkg.prices.map((tier) => (
              <div key={tier.label} className="rounded-xl border border-slate-200 p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">{tier.label}</p>
                <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-xl text-[#020617]">
                  ${tier.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Good to know */}
        <section className="border-t border-slate-200 py-14">
          <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
            Good to Know
          </h2>
          <ul className="mt-6 space-y-4">
            {pkg.goodToKnow.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-slate-200 py-16 text-center">
          <h2 className={`${fraunces.className} text-3xl font-medium text-[#020617]`}>
            Ready for {pkg.title}?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Our team will help you plan every detail, from permits to porters.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-emerald-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Contact Green Sky Travels
          </button>
        </section>
      </div>
    </main>
  );
}
