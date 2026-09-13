import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";
import { fixedDepartures } from "@/lib/content/fix-departures";

export const metadata = {
  title: "Fixed Departures | Green Sky Travels",
  description: "Explore Green Sky Travels fixed departure tours from the UAE.",
};

export default function FixedDeparturesPage() {
  const [featured, ...remaining] = fixedDepartures;

  return (
    <main className="min-h-screen bg-[#fbfcfa] text-[#092f42]">
      <section className="relative overflow-hidden bg-[#092f42]">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-44 left-1/3 h-96 w-96 rounded-full border border-[#a9d68f]/15" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:pb-20 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a9d68f]/30 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#cbeab9]">
              <Sparkles className="h-4 w-4" />
              Curated group journeys
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
              Go further together.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Fixed-date escapes from the UAE, thoughtfully planned with guided
              experiences, comfortable stays and a team that takes care of the
              details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/80">
              <span className="rounded-full bg-white/10 px-4 py-2">
                Fixed dates
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Guided tours
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2">
                Easy WhatsApp booking
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a9d68f]">
              Why fixed departures?
            </p>
            <p className="mt-4 text-lg font-semibold leading-8 text-white">
              Less planning. More discovering.
            </p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <p className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#a9d68f]" />
                Join a ready-made itinerary
              </p>
              <p className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#a9d68f]" />
                Travel with experienced local teams
              </p>
              <p className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#a9d68f]" />
                Get one clear plan from start to finish
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#61a447]">
              Choose your escape
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Upcoming departures
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 sm:block">
            Every journey is built for memorable days and straightforward
            booking.
          </p>
        </div>
        <Link
          href={`/fixed-departures/${featured.slug}`}
          className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[390px]">
            <Image
              src={featured.heroImage}
              alt={featured.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-6 top-6 rounded-full bg-[#a9d68f] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#092f42]">
              Featured journey
            </div>
            <div className="absolute bottom-7 left-6 right-6 text-white sm:left-8 sm:right-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#cbeab9]">
                <MapPin className="h-4 w-4" />
                {featured.destination}
              </p>
              <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                {featured.title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-9">
            <div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-[#61a447]" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-[#61a447]" />
                  {featured.duration}
                </span>
              </div>
              <p className="mt-6 leading-8 text-slate-600">
                {featured.overview}
              </p>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                {featured.highlights.slice(0, 4).map((highlight) => (
                  <div key={highlight} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#61a447]" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#61a447]">
              Explore this journey{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {remaining.map((departure) => (
            <DepartureCard key={departure.slug} departure={departure} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DepartureCard({
  departure,
}: {
  departure: (typeof fixedDepartures)[number];
}) {
  return (
    <Link
      href={`/fixed-departures/${departure.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={departure.heroImage}
          alt={departure.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-[#cbeab9]">
            <MapPin className="h-4 w-4" />
            {departure.destination}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-white">
            {departure.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wide text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-[#61a447]" />
            {departure.date}
          </span>
          <span>{departure.duration}</span>
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-7 text-slate-600">
          {departure.overview}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#61a447]">
          View itinerary{" "}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
