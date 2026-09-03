import Link from "next/link";
import { ChevronRight, Check, MessageCircle } from "lucide-react";
import ServiceInquiryForm, { type InquiryField } from "@/components/services/ServiceInquiryForm";
import type { ServiceDefinition } from "@/lib/data/services";
import React from "react";

interface ServicePageShellProps {
  service: ServiceDefinition;
  fields?: InquiryField[];
  benefits: string[];
  children?: React.ReactNode;
}

export default function ServicePageShell({
  service,
  fields,
  benefits,
  children,
}: ServicePageShellProps) {
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-8">
      {/* Breadcrumbs & Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold text-slate-900">{service.title}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
          <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c91c3c]/10 text-[#c91c3c] shadow-sm`}>
            <Icon className="h-8 w-8" aria-hidden="true" />
          </span>
          <div>
            {/* <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#61a447] mb-2">WhatsApp inquiry</p> */}
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl text-[#092f42]">{service.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-sm">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:sticky lg:top-6 lg:h-fit">
          <div className="flex items-center gap-2 text-sm font-bold text-[#61a447]">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Simple request process
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#092f42]">Tell us the details. We’ll guide you from there.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">This is a request form, not an online payment or instant booking system. Your message will open in WhatsApp for you to send to our team.</p>
          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#61a447]/10 text-[#61a447]">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </aside>

        {/* Render custom children form or default ServiceInquiryForm */}
        {children ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
             {children}
          </div>
        ) : (
          fields && <ServiceInquiryForm serviceTitle={service.title} fields={fields} />
        )}
      </section>
    </main>
  );
}
