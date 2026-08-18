"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const productSaleAndMarketingTeam = [
  {
    name: "Santosh Aryal",
    role: "Business Development Manager",
    image: "images/ourTeam/santosh-aryal.jpg",
  },
  {
    name: "Ghimire Bandhu",
    role: "Operations Manager & Key Account Manager (Himalayan Tourism)",
    image: "images/ourTeam/ghimire-bandhu.jpg",
  },
  {
    name: "Athul Kishan",
    role: "Sales Manager",
    image: "images/ourTeam/athul-kishan.jpg",
  },
];

const operationsAndLogisticsTeam = [
  {
    name: "Ghimire Bandhu",
    role: "Operations Manager & Key Account Manager (Himalayan Tourism)",
    image: "images/ourTeam/ghimire-bandhu.jpg",
  },
  {
    name: "Sobha Kadaria",
    role: "Customer care Executive",
    image: "images/ourTeam/shobha-kadaria.jpg",
  },
  {
    name: "Manoj Kumar",
    role: "Visa Desk & Documentation Head",
    image: "images/ourTeam/manoj-kumar.jpg",
  },
];

export default function TeamTabs() {
  const [activeTab, setActiveTab] = useState<"marketing" | "operations">(
    "marketing",
  );

  const currentTeam =
    activeTab === "marketing"
      ? productSaleAndMarketingTeam
      : operationsAndLogisticsTeam;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button
          onClick={() => setActiveTab("marketing")}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${activeTab === "marketing" ? "bg-primary text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Product Sale and Marketing Department
        </button>
        <button
          onClick={() => setActiveTab("operations")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "operations" ? "bg-primary text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Operations and Logistics Department
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {currentTeam.map((member, idx) => {
          const slug = member.name.toLowerCase().replace(/ /g, "-");
          return (
            <Link
              href={`/our-team/${slug}`}
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group block"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={`/${member.image}`}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
