"use client";

import { useState, useEffect } from "react";
import { Package, Map, List, CheckCircle, XCircle, Calendar, Info, Star } from "lucide-react";

interface TabNavigationProps {
  pkg: any;
}

export function TabNavigation({ pkg }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Trip", icon: Package },
    { id: "itinerary", label: "Itinerary", icon: Map },
    { id: "included", label: "Includes/Excludes", icon: List },
    { id: "departures", label: "Departures", icon: Calendar },
    { id: "info", label: "Trip Info", icon: Info },
    { id: "reviews", label: "Reviews", icon: Star },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setActiveTab(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id));
      let currentSection = activeTab;
      
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = tabs[index].id;
          }
        }
      });
      
      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}