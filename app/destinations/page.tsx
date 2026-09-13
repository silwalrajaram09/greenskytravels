import Link from "next/link";
import Image from "next/image";
import { destinationNavGroups, dubaiNavGroups } from "@/lib/content/catalog";

export const metadata = {
  title: "Destinations | Green Sky Travels",
  description:
    "Explore incredible destinations and tailor-made travel experiences with Green Sky Travels.",
};

type DestinationCard = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

const destinations: DestinationCard[] = [
  {
    name: "Maldives",
    slug: "maldives-tour-packages",
    image: "/images/destinations/maldives-tour-packages.avif",
    description: "Crystal-clear water and resort escapes",
  },
  {
    name: "Nepal",
    slug: "nepal-tour-packages",
    image: "/images/destinations/nepal-tour-packages.avif",
    description: "Snow-covered mountains and timeless villages",
  },
  {
    name: "Thailand",
    slug: "thailand-tour-packages",
    image: "/images/destinations/thailand-tour-packages.avif",
    description: "Stunning beaches, islands and vibrant culture",
  },
  {
    name: "Azerbaijan",
    slug: "azerbaijan-tour-packages",
    image: "/images/destinations/azerbaijan-tour-packages.avif",
    description: "Beautiful nights and unforgettable city views",
  },
  {
    name: "Jordan",
    slug: "jordan-tour-packages",
    image: "/images/destinations/jordan-tour-packages.avif",
    description: "Discover Petra and ancient desert landscapes",
  },
  {
    name: "Mauritius",
    slug: "mauritius-tour-packages",
    image: "/images/destinations/mauritius-tour-packages.avif",
    description: "Relax on idyllic beaches and island shores",
  },
  {
    name: "Armenia",
    slug: "armenia-tour-packages",
    image: "/images/destinations/armenia-tour-packages.avif",
    description: "Ancient monasteries, mountains and heritage",
  },
  {
    name: "Georgia",
    slug: "georgia-tour-packages",
    image: "/images/destinations/georgia-tour-packages.avif",
    description: "Panoramic cities, wine country and adventure",
  },
  {
    name: "Egypt",
    slug: "egypt-tour-packages",
    image: "/images/destinations/egypt-tour-packages.avif",
    description: "Explore the Sphinx, pyramids and the Nile",
  },
  {
    name: "Malaysia",
    slug: "malaysia-tour-packages",
    image: "/images/destinations/malaysia-tour-packages.avif",
    description: "From Batu Caves to modern city skylines",
  },
  {
    name: "Oman",
    slug: "oman-tour-packages",
    image: "/images/destinations/oman-tour-packages.avif",
    description: "Dramatic coastlines, forts and desert beauty",
  },
  {
    name: "Vietnam",
    slug: "vietnam-tour-packages",
    image: "/images/destinations/vietnam-tour-packages.avif",
    description: "Wander through the beauty of Ha Long Bay",
  },
  {
    name: "Indonesia",
    slug: "indonesia-tour-packages",
    image: "/images/destinations/indonesia-tour-packages.avif",
    description: "Temples, tropical islands and rich traditions",
  },
  {
    name: "Dubai",
    slug: "dubai-tour-packages",
    image: "/images/destinations/dubai-tour-packages.avif",
    description: "Luxury, desert adventures and iconic landmarks",
  },
  {
    name: "Seychelles",
    slug: "seychelles-tour-packages",
    image: "/images/destinations/mauritius-tour-packages.avif",
    description: "Unwind among pristine beaches and blue lagoons",
  },
  {
    name: "India",
    slug: "india-tour-packages",
    image: "/images/destinations/india-tour-package.avif",
    description: "Colourful culture, heritage and Himalayan views",
  },
  {
    name: "Qatar",
    slug: "qatar-tour-packages",
    image: "/images/destinations/qatar-tour-package.avif",
    description: "Modern Doha, desert experiences and warm hospitality",
  },
  {
    name: "Turkey",
    slug: "turkey-tour-packages",
    image: "/images/destinations/turkey-tour-package.avif",
    description: "A crossroads of history, coastlines and cuisine",
  },
  {
    name: "Kenya",
    slug: "kenya-tour-packages",
    image: "/images/destinations/kenya-tour-package.avif",
    description: "Wildlife safaris and wide-open African landscapes",
  },
  {
    name: "Tanzania",
    slug: "tanzania-tour-packages",
    image: "/images/destinations/tanzania-tour-package.avif",
    description: "Safari adventures and the beaches of Zanzibar",
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia-tour-packages",
    image: "/images/destinations/saudi-arabia-tour-package.avif",
    description: "Discover ancient history and contemporary Riyadh",
  },
  {
    name: "Bhutan",
    slug: "bhutan-tour-packages",
    image: "/images/destinations/bhutan-tour-package.avif",
    description: "Peaceful valleys, monasteries and mountain air",
  },
  {
    name: "Japan",
    slug: "japan-tour-packages",
    image: "/images/destinations/japan-tour-packages.avif",
    description: "Experience Tokyo, Kyoto and Mount Fuji",
  },
  {
    name: "Korea",
    slug: "korea-tour-packages",
    image: "/images/destinations/korea-tour-packages.avif",
    description: "A lively blend of tradition, food and innovation",
  },
  {
    name: "Tibet",
    slug: "tibet-tour-packages",
    image: "/images/destinations/tibet-tour-packages.avif",
    description: "High-altitude landscapes and spiritual journeys",
  },
];

const packageCounts = new Map<string, number>(
  [...destinationNavGroups, ...dubaiNavGroups.map((group) => ({
    country: "Dubai",
    packages: group.packages,
  }))].map((group) => [group.country.toLowerCase(), group.packages.length]),
);

export default function DestinationsPage() {
  return (
    <main className="bg-[#fafaf8] text-slate-700">
      <section className="relative h-[46vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/destinations/thailand-tour-packages.avif"
          alt="Stunning Thailand coastline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d18]/80 via-[#061d18]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-12 sm:px-10 lg:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Explore the world
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl font-medium text-white md:text-7xl">
            Destinations
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <section>
            {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#61a447]">
              Green Sky Travels
            </p> */}
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium leading-tight text-[#0b3300] md:text-4xl">
              Discover Incredible Destinations with Green Sky Travels
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              At Green Sky Travels, we bring the world closer to you. From the
              vibrant cities of the UAE to breathtaking international locations,
              we offer unforgettable travel experiences tailored to your needs.
            </p>
          </section>

          <section className="border-l-2 border-[#61a447]/30 pl-6 lg:mt-2">
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-[#0b3300]">
              Why Choose Green Sky Travels?
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
              <p><strong className="text-slate-800">Expert Guidance:</strong> We curate trips to the world&apos;s most sought-after destinations.</p>
              <p><strong className="text-slate-800">Personalized Packages:</strong> Customizable tours to match your preferences and budget.</p>
              <p><strong className="text-slate-800">Comprehensive Services:</strong> From visa assistance to guided tours, we handle it all.</p>
            </div>
          </section>
        </div>

        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#61a447]">Activities</p>
              <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-medium text-[#0b3300] md:text-4xl">
                Start Exploring Today
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Explore our destinations and let Green Sky Travels turn your travel dreams into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((destination) => {
              const tours = packageCounts.get(destination.name.toLowerCase()) ?? 0;
              return (
                <Link
                  key={destination.slug}
                  href={`/destinations/${destination.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 transition-colors duration-500 group-hover:bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center transition-all duration-500 ease-out group-hover:bottom-1/2 group-hover:translate-y-1/2">
                    <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-white transition-transform duration-500 group-hover:scale-105">
                      {destination.name}
                    </h3>
                    {tours > 0 && (
                      <p className="mt-2 max-h-0 overflow-hidden text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 opacity-0 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100">
                        {String(tours).padStart(2, "0")} Tour{tours === 1 ? "" : "s"}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
