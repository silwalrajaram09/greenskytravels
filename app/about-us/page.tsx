import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import {
  ArrowRight,
  Check,
  Compass,
  Globe2,
  HeartHandshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";


export default function AboutUsPage() {
  return (
    <main className="bg-[#f7faf5] text-[#173c1c]">
      <section className="relative overflow-hidden bg-[#eef8e9]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[28px] border-[#dcefd3]" />
        <div className="absolute bottom-0 left-0 hidden h-full w-[13%] bg-[#63ab43] [clip-path:polygon(0_0,100%_0,58%_50%,100%_100%,0_100%,42%_50%)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-24">
          <div className="lg:pl-12">
            <div className="mb-6 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#5a9b42]">
              <span className="h-0.5 w-12 bg-[#d47f80]" />
              The Green Sky story
            </div>
            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.03] tracking-tight text-[#123516] sm:text-6xl">
              Travel should feel
              <br />
              <span className="text-[#63a844]">personal.</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#647264] sm:text-xl">
              Green Sky Travels is a Dubai-based travel company built around one simple belief: the best journeys are thoughtfully planned and genuinely cared for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/destinations" className="inline-flex items-center gap-2 rounded-md bg-[#62ad43] px-6 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#4d9635]">
                Explore destinations <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-md border border-[#b7d3ac] bg-white/60 px-6 py-3.5 font-serif font-bold text-[#315d2c] transition-colors hover:bg-white">
                Talk to our team
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rotate-3 rounded-2xl bg-[#cfe8c5]" />
            <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-[0_18px_50px_rgba(42,76,38,0.14)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/travel-guide/ultimate-guide.avif" alt={`A beautiful destination discovered with ${siteConfig.name}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173c1c]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div><p className="font-sans text-xs uppercase tracking-[0.2em] text-[#cfe8c5]">Our point of view</p><p className="mt-1 font-serif text-2xl font-bold">See more. Feel more.</p></div>
                  <Globe2 className="h-8 w-8 text-[#a8d997]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6eee2] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e6eee2] px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
          <div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-3xl font-bold">{siteConfig.establishedYear}</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Our beginning</p></div>
          <div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-3xl font-bold">2</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">UAE registrations</p></div>
          <div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-3xl font-bold">25+</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Countries covered</p></div>
          <div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-3xl font-bold">1</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Travel partner</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
        <div><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">Who we are</span><h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#173c1c] sm:text-5xl">Local roots.<br />A world of reach.</h2></div>
        <div className="font-serif text-lg leading-relaxed text-[#647264]"><p>Welcome to {siteConfig.name}, the trusted brand name of {siteConfig.legalName}. Based in {siteConfig.baseCity} and registered in {siteConfig.registeredIn.join(" and ")}, we create exceptional travel experiences for individuals, families, and groups from around the world.</p><p className="mt-6">Our roots are in the UAE. We know its deserts, cities, coastlines, and hidden corners—and we bring that same care to journeys across Asia, Europe, Africa, the Middle East, the Americas, and Oceania.</p><p className="mt-6">From the first idea to the final detail, our team combines practical expertise with a personal approach, so you can spend less time worrying about logistics and more time enjoying the journey.</p></div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="mb-10 max-w-2xl"><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">What we do</span><h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#173c1c] sm:text-5xl">Everything you need<br />for a smoother journey.</h2></div><div className="grid gap-6 md:grid-cols-3"><div className="rounded-xl border border-[#e2ecdf] p-7"><MapPin className="h-8 w-8 text-[#62ad43]" /><h3 className="mt-6 font-serif text-2xl font-bold text-[#244622]">UAE experiences</h3><p className="mt-3 font-serif leading-relaxed text-[#647264]">Dubai, Abu Dhabi, desert adventures, luxury escapes, and thoughtfully designed local tours.</p></div><div className="rounded-xl border border-[#e2ecdf] p-7"><Compass className="h-8 w-8 text-[#62ad43]" /><h3 className="mt-6 font-serif text-2xl font-bold text-[#244622]">Worldwide holidays</h3><p className="mt-3 font-serif leading-relaxed text-[#647264]">Tailored packages across the world, built around your pace, preferences, and purpose.</p></div><div className="rounded-xl border border-[#e2ecdf] p-7"><ShieldCheck className="h-8 w-8 text-[#62ad43]" /><h3 className="mt-6 font-serif text-2xl font-bold text-[#244622]">Visa assistance</h3><p className="mt-3 font-serif leading-relaxed text-[#647264]">Clear, reliable support for UAE and international visa applications and documentation.</p></div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">Our promise</span><h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#173c1c] sm:text-5xl">Why travelers choose Green Sky.</h2></div><div className="grid gap-5">{[
        ["Local expertise", "Deep knowledge of Dubai, Abu Dhabi, and the wider UAE means better recommendations and fewer surprises."],
        ["Global reach", "Our network spans destinations across continents, giving you more ways to see the world with confidence."],
        ["Personalized service", "We listen to your needs and tailor each itinerary instead of forcing you into a one-size-fits-all package."],
        ["Complete support", "From tour planning to visa processing, we coordinate the details so your trip feels seamless."],
      ].map(([title, description]) => <div key={title} className="flex gap-4 rounded-xl bg-white p-5 ring-1 ring-[#e2ecdf]"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef8e9] text-[#62ad43]"><Check className="h-4 w-4" /></span><div><h3 className="font-serif text-xl font-bold text-[#244622]">{title}</h3><p className="mt-1 font-serif leading-relaxed text-[#647264]">{description}</p></div></div>)}</div></div></section>

      <section className="bg-[#173c1c] px-5 py-14 sm:px-8"><div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left"><div><p className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#a8d997]"><HeartHandshake className="h-4 w-4" /> Your journey starts here</p><h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Tell us where you want to go.</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#62ad43] px-7 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#78bd5a]">Start planning <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
