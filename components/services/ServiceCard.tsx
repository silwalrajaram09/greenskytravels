import Link from "next/link";

import type { ServiceDefinition } from "@/lib/data/services";

interface ServiceCardProps {
  service: ServiceDefinition;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c91c3c]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <div className="mb-5 flex items-center justify-center">
        <Icon className="h-10 w-10 text-[#c91c3c]" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-bold text-[#092f42] mb-3">{service.title}</h2>
      <p className="flex-1 text-sm leading-relaxed text-slate-500">{service.description}</p>
    </Link>
  );
}
