"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { operationsAndLogisticsTeam, productSaleAndMarketingTeam } from "@/lib/content/team";

const departments = {
  marketing: { label: "Sales & marketing", members: productSaleAndMarketingTeam },
  operations: { label: "Operations & logistics", members: operationsAndLogisticsTeam },
} as const;

export default function TeamTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof departments>("marketing");
  const department = departments[activeTab];
  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Team departments">
        {(Object.keys(departments) as Array<keyof typeof departments>).map((key) => <button key={key} type="button" role="tab" aria-selected={activeTab === key} onClick={() => setActiveTab(key)} className={`rounded-full px-5 py-3 font-sans text-sm font-bold transition-all ${activeTab === key ? "bg-[#173c1c] text-white shadow-lg" : "border border-[#dce8d8] bg-white text-[#587057] hover:border-[#9fc893] hover:text-[#315d2c]"}`}>{departments[key].label}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {department.members.map((member) => <Link href={`/our-team/${member.slug}`} key={member.slug} className="group overflow-hidden rounded-xl border border-[#e2ecdf] bg-white shadow-[0_8px_24px_rgba(42,76,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(42,76,38,0.1)]"><div className="relative aspect-[4/4.5] overflow-hidden bg-[#e9f1e6]"><Image src={`/${member.image}`} alt={member.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#173c1c]/45 to-transparent" /></div><div className="flex items-start justify-between gap-4 p-6"><div><h3 className="font-serif text-2xl font-bold text-[#244622]">{member.name}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-[#62a34b]">{member.role}</p></div><span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef8e9] text-[#62ad43] transition-colors group-hover:bg-[#62ad43] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span></div></Link>)}
      </div>
    </div>
  );
}
