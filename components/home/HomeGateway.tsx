"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import {
  Award,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mountain,
  ShieldCheck,
  Sparkles,
  Tags,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Award-winning agency",
    text: "Your trusted, award-winning partner for unforgettable journeys.",
  },
  {
    icon: Sparkles,
    title: "Luxury travel experiences",
    text: "Experience unparalleled elegance with thoughtfully curated journeys.",
  },
  {
    icon: Mountain,
    title: "Adventure & outdoor tours",
    text: "Unleash your adventurous spirit with thrilling outdoor experiences.",
  },
  {
    icon: Tags,
    title: "Best price guarantee",
    text: "Get the most value from your trip without compromising on care.",
  },
];

export default function HomeGateway() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#f0f2f1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col items-start">
          <span className="mb-3 h-0.5 w-11 bg-[#d47f80]" />
          <h2 className="font-serif text-4xl font-bo     ading-[1.08] tracking-tight text-[#173c1c] sm:text-[46px]">
            Your gateway to unforgettable Dubai adventures and Beyond
          </h2>
        </div>

        <div className="font-serif text-[15px] leading-[1.7] text-[#263d2a] sm:text-base">
          <p>
            {siteConfig.name}, the trusted brand name of {siteConfig.legalName}, is your premier tour operator based in Dubai, United
            Arab Emirates. Registered in Dubai and Abu Dhabi, we specialize in
            crafting unforgettable travel experiences catering to your unique
            preferences. Whether you&apos;re a resident of the UAE looking for
            your next getaway or a traveler from across the globe planning a
            dream vacation, we are here to make your journey seamless,
            memorable, and extraordinary.
          </p>

          <h3 className="mt-7 font-serif text-xl font-bold text-[#173c1c] sm:text-2xl">
            Your Go-To Dubai Based Local Tour Operator
          </h3>
          <p className="mt-1">
            Explore the wonders of Dubai, Abu Dhabi, and all other emirates with
            our curated tour packages. From exhilarating desert safaris and
            iconic Burj Khalifa tours to cultural city experiences and luxurious
            yacht cruises, we offer everything you need to immerse yourself in
            the UAE&apos;s beauty. As a local tour operator, we understand the
            region&apos;s essence, enabling us to provide authentic and
            personalized tours for individuals, families, and groups.
          </p>

          {!expanded && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="mt-3 inline-flex items-center gap-1 font-serif text-base font-bold text-[#173c1c] underline decoration-1 underline-offset-4 transition-colors hover:text-[#62ad43]"
            >
              Read More
              <ChevronDown className="h-4 w-4" />
            </button>
          )}

          {expanded && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <h3 className="mt-7 font-serif text-xl font-bold text-[#173c1c] sm:text-2xl">
                Customized Holiday Packages from Dubai
              </h3>
              <p className="mt-1">
                At Green Sky Travels, our expertise extends far beyond the UAE.
                We design bespoke holiday packages tailored to your preferences,
                covering destinations across Asia, Europe, Africa, the Middle
                East, the Americas, and Australia &amp; Oceania.
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "Asia: Nepal, India, Bhutan, Maldives, Thailand, Malaysia, and more.",
                  "Middle East: UAE, Armenia, Azerbaijan, Georgia, and more.",
                  "Africa: Kenya, Tanzania, Rwanda, and beyond.",
                  "Europe: all major European destinations.",
                  "Americas: iconic landscapes and cities across North and South America.",
                  "Australia & Oceania: Australia, New Zealand, and nearby islands.",
                ].map((destination) => (
                  <li key={destination} className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#62ad43]" />
                    <span>{destination}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 font-serif text-xl font-bold text-[#173c1c] sm:text-2xl">
                Hassle-Free Visa Assistance
              </h3>
              <p className="mt-1">
                Need help obtaining a visa? Our dedicated team assists with UAE
                and international visa applications, ensuring a stress-free
                process so you can focus on your travel plans.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/services/visa-services"
                  className="inline-flex items-center gap-2 font-serif font-bold text-[#4e9537] underline underline-offset-4"
                >
                  <ShieldCheck className="h-4 w-4" /> Explore visa assistance
                </Link>
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="font-serif font-bold text-[#173c1c] underline underline-offset-4"
                >
                  Show Less
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-[#d8dfda] pt-10">
          <h3 className="font-serif text-2xl font-bold text-[#173c1c] sm:text-3xl">
            Why Choose {siteConfig.name}?
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 bg-white p-5 shadow-[0_3px_10px_rgba(42,76,38,0.05)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#63ab43] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#173c1c]">
                    {title}
                  </h4>
                  <p className="mt-1 font-serif text-sm leading-relaxed text-[#647264]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/about-us"
              className="font-serif font-bold text-[#4e9537] underline underline-offset-4"
            >
              Read more about us
            </Link>
            <Link
              href={siteConfig.url + "/contact"}
              className="inline-flex items-center gap-2 rounded-md bg-[#62ad43] px-5 py-3 font-serif font-bold text-white transition-colors hover:bg-[#4d9635]"
            >
              <HeartHandshake className="h-4 w-4" /> WhatsApp Us · +971 58 503
              2337
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
