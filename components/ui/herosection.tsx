"use client";

import Image from "next/image";
import Link from "next/link";

type HeroStat = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: HeroStat[];
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_STATS: HeroStat[] = [
  { value: "8,849m", label: "Everest Base Camp Trek" },
  { value: "15+", label: "Curated Nepal Itineraries" },
];

export default function HeroSection({
  eyebrow = "Himalayan Journeys",
  title = "Walk Toward the Roof of the World",
  subtitle:
    subtitleProp = "From Kathmandu's temples to Everest Base Camp — treks and cultural journeys through Nepal, planned around you, not a brochure.",
  primaryCta = { label: "Customize My Trip", href: "/customize-your-trip" },
  secondaryCta = { label: "Explore Tours ", href: "/destinations" },
  stats = DEFAULT_STATS,
  imageSrc = "/images/packages/everestBaseCamp/ev2.jpg",
  imageAlt = "Alpenglow over the Himalayan range with a trekker and prayer flags in silhouette",
}: HeroSectionProps) {
  const subtitle = subtitleProp;

  return (
    <section
      aria-label="Hero"
      className="relative h-[640px] md:h-[760px] w-full overflow-hidden bg-[#0f1730]"
    >
      {/* Background artwork — subject sits right, left field stays clear for text */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />

      {/* Legibility scrim — reinforced on the left where the headline sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f22]/80 via-[#0a0f22]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f22]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="flex h-full flex-col justify-center max-w-xl">
          <span className="inline-block w-fit text-[#8fd171] text-xs font-bold tracking-[0.2em] uppercase mb-5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-serif leading-[1.08] text-white mb-5">
            {title}
          </h1>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 bg-[#61a447] text-white font-bold px-8 py-3.5 rounded-lg hover:bg-[#4a8035] active:scale-[0.98] transition-all uppercase tracking-wide text-sm shadow-lg shadow-[#61a447]/25"
            >
              {primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all uppercase tracking-wide text-sm backdrop-blur-sm"
            >
              {secondaryCta.label}
            </Link>
          </div>

          {stats.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold font-serif text-[#8fd171] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/65 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.15em]">Scroll</span>
        <span className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}