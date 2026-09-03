import type { Metadata } from "next";
import Link from "next/link";

import { ChevronRight, ArrowRight, MessageCircle, Phone } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceOrbit from "@/components/services/ServiceOrbit";
import { services } from "@/lib/data/services";
import { getWhatsAppUrl, siteConfig } from "@/lib/config/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Travel Services | Green Sky Travels",
  description:
    "Request flights, visas, ticketing, hotels, transfers, and customized trips from Green Sky Travels.",
};

export default function ServicesPage() {
  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hello Green Sky Travels! I would like to know more about your travel services.",
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-8">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold text-slate-900">Services</span>
        </nav>

        <div className=" grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left Content */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold leading-tight text-[#092f42] sm:text-5xl lg:text-5xl">
              Everything you need for your next journey.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Choose a service, share a few details, and continue the
              conversation with our team on WhatsApp. No online payment or
              complicated booking system required.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#61a447] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#4a8035] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask us on WhatsApp
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call our team
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <ServiceOrbit />
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-t border-slate-200 pt-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#61a447]">
              What we handle
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#092f42] sm:text-4xl">
              Travel services for every step
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#61a447] hover:text-[#4a8035]"
          >
            Contact details{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#61a447]/20 bg-[#61a447]/5 p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-2xl font-bold text-[#092f42]">
              Not sure which service you need?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Send us your travel plan in your own words and our team will guide
              you to the right option.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Green Sky Travels! I am not sure which travel service I need. Please guide me.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#092f42] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0c435c] sm:mt-0"
          >
            Start a conversation{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
