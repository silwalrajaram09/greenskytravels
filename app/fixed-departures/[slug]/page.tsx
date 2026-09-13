import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Bed,
  Calendar,
  Check,
  Clock,
  Coffee,
  FileText,
  Lock,
  MapPin,
  Mountain,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import { fraunces } from "@/lib/fonts";
import {
  fixedDepartures,
  getFixedDeparture,
} from "@/lib/content/fix-departures";
import { PackageHeader } from "@/components/fix-departures/Header";
import { TabNavigation } from "@/components/packages/TabNavigation";
import { Itinerary } from "@/components/packages/Itinerary";
import { BookingWidget } from "@/components/packages/BookingWidget";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const brochurePaths: Record<string, string> = {
  "echoes-of-baku": "/content/fix-departures/baku.pdf",
  "georgian-delight": "/content/fix-departures/gerogia-trails.pdf",
  "discover-armenia": "/content/fix-departures/armenia.pdf",
  "salalah-by-bus-from-uae": "/content/fix-departures/salalah.pdf",
  "smart-musandam-day-trip": "/content/fix-departures/MUSANDAM%20ITINERARY.pdf",
};

export function generateStaticParams() {
  return fixedDepartures.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const departure = getFixedDeparture(slug);
  if (!departure) return {};
  return {
    title: `${departure.title} | Green Sky Travels`,
    description: departure.overview,
    keywords: [
      departure.destination,
      departure.title,
      "fixed departure",
      "group tour",
    ],
  };
}

export default async function FixedDepartureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const departure = getFixedDeparture(slug);
  if (!departure) notFound();

  const packageView = {
    title: departure.title,
    destination: departure.destination,
    duration: departure.duration,
    activities: `${departure.highlights.length} experiences`,
    accommodation: "Selected hotels",
    groupSize: "Group departure",
    meals: departure.itinerary.filter((day) => day.meals).length
      ? "As mentioned in itinerary"
      : "As per itinerary",
    heroImage: departure.heroImage,
    gallery: [],
    pdf: brochurePaths[departure.slug],
    pdfLabel: "View",
  };

  const quickFacts = [
    { label: "Destination", value: departure.destination, icon: MapPin },
    { label: "Duration", value: departure.duration, icon: Clock },
    { label: "Activities", value: packageView.activities, icon: Mountain },
    { label: "Accommodation", value: packageView.accommodation, icon: Bed },
    { label: "Group Size", value: packageView.groupSize, icon: Users },
    { label: "Meals", value: packageView.meals, icon: Coffee },
  ];

  return (
    <main className="bg-white text-slate-900">
      <PackageHeader pkg={packageView} />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {quickFacts.map((fact) => (
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

      <TabNavigation pkg={packageView} />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-12">
            <section id="overview">
              <SectionTitle>Trip Overview</SectionTitle>
              <p className="mt-4 leading-relaxed text-slate-600">
                {departure.overview}
              </p>
            </section>

            <section id="highlights">
              <SectionTitle>Trip Highlights</SectionTitle>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {departure.highlights.map((item) => (
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

            {/* <section id="gallery">
              <SectionTitle>Tour Information</SectionTitle>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={<Calendar />}
                  label="Fixed departure"
                  value={departure.date}
                />
                <InfoCard
                  icon={<FileText />}
                  label="Brochure"
                  value="Download the original itinerary PDF"
                  href={packageView.pdf}
                />
              </div>
            </section> */}

            <section id="itinerary">
              <SectionTitle>Trip Itinerary</SectionTitle>
              <div className="mt-6">
                <Itinerary days={departure.itinerary} />
              </div>
            </section>

            <section
              id="included"
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              <InfoList
                title="Included"
                items={departure.inclusions}
                positive
              />
              <InfoList title="Excluded" items={departure.exclusions} />
            </section>

            <section id="info">
              <SectionTitle>Good to Know</SectionTitle>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {departure.notes.map((item) => (
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

            <section id="departures">
              <SectionTitle>Departure Details</SectionTitle>
              <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-sm leading-7 text-slate-600">
                {/* <p>
                  <strong className="text-[#092f42]">Fixed departure:</strong>{" "}
                  {departure.date}
                </p> */}
                <p>
                  <strong className="text-[#092f42]">Destination:</strong>{" "}
                  {departure.destination}
                </p>
                <p>
                  Contact our team to confirm availability, pricing, visa
                  requirements and pickup details.
                </p>
              </div>
            </section>
          </div>

          <aside className="relative h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Lock className="h-3.5 w-3.5" />
                  Fixed Departure
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-[#020617]">5.0</span>
                </div>
              </div>
              <BookingWidget packageTitle={departure.title} />
              <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                <TrustLine
                  icon={<ShieldCheck />}
                  text="Verified travel support"
                />
                {/* <TrustLine icon={<Calendar />} text={departure.date} /> */}
                <TrustLine icon={<Users />} text="Group departure" />
                <TrustLine icon={<Clock />} text={departure.duration} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`${fraunces.className} text-2xl font-medium text-[#020617]`}>
      {children}
    </h2>
  );
}
function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
      <span className="text-emerald-600 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-slate-400">
          {label}
        </span>
        <span className="mt-1 block text-sm font-medium text-[#020617]">
          {value}
        </span>
      </span>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:border-emerald-400"
    >
      {content}
    </a>
  ) : (
    content
  );
}
function TrustLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <span className="text-emerald-600 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      {text}
    </div>
  );
}
function InfoList({
  title,
  items,
  positive = false,
}: {
  title: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div>
      <h3
        className={`${fraunces.className} text-xl font-medium text-[#020617]`}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-slate-600">
            <span
              className={`mt-1 ${positive ? "text-emerald-600" : "text-red-500"}`}
            >
              {positive ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
