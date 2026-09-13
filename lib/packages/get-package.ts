import type { TravelPackage } from "./types";

import everestBaseCampTrek from "@/lib/content/packages/everest-base-camp-trek.json";
import highlightsOfDubaiTour5Days from "@/lib/content/packages/highlights-of-dubai-tour-5-days.json";
import shortNepalTourPackage from "@/lib/content/packages/short-nepal-tour-package.json";
import shortAndSweetJapanTour5Days from "@/lib/content/packages/short-and-sweet-japan-tour-5-days.json";
import glimpseOfJapanTour7Days from "@/lib/content/packages/glimpse-of-japan-tour-7-days.json";
import shortAndSweetTourOfGeorgia4Days from "@/lib/content/packages/short-and-sweet-tour-of-georgia-4-days.json";
import bestGeorgiaHolidays7Days from "@/lib/content/packages/best-georgia-holidays-7-days.json";
import bakuTbilisiYerevanTour9Days from "@/lib/content/packages/baku-tbilisi-yerevan-tour-9-days.json";
import shortOmanTour4Days from "@/lib/content/packages/short-oman-tour-4-days.json";
import salalahTourPackageFromDubai4Days from "@/lib/content/packages/salalah-tour-package-from-dubai-4-days.json";
import glimpseOfTanzaniaTour6Days from "@/lib/content/packages/glimpse-of-tanzania-tour-6-days.json";
import shortTanzaniaSafari5Days from "@/lib/content/packages/short-tanzania-safari-5-days.json";
import bestTanzaniaAndZanzibarTour10Days from "@/lib/content/packages/best-tanzania-and-zanzibar-tour-10-days.json";
import jordanTourPackage4Days from "@/lib/content/packages/jordan-tour-package-4-days.json";
import dubaiAbuDhabiEastCoastTour10Days from "@/lib/content/packages/dubai-abu-dhabi-east-coast-tour-10-days.json";
import dubaiTourWithExtraActivities8Days from "@/lib/content/packages/dubai-tour-with-extra-activities-8-days.json";
import dubaiAbuDhabiSharjahTour6Days from "@/lib/content/packages/dubai-abu-dhabi-sharjah-tour-6-days.json";
import dubaiAndAbuDhabiTour6Days from "@/lib/content/packages/dubai-and-abu-dhabi-tour-6-days.json";
import shortThrillDubaiAdventureTour6Days from "@/lib/content/packages/short-thrill-dubai-adventure-tour-6-days.json";
import epicDubaiAdventureTour6Days from "@/lib/content/packages/epic-dubai-adventure-tour-6-days.json";
import dubaiAdventureTour5Days from "@/lib/content/packages/dubai-adventure-tour-5-days.json";
import theGrandDubaiAdventureTour8Days from "@/lib/content/packages/the-grand-dubai-adventure-tour-8-days.json";
import dubaiAndAbuDhabiAdventureTour9Days from "@/lib/content/packages/dubai-and-abu-dhabi-adventure-tour-9-days.json";
import ultimateDubaiAdventureEscape10Days from "@/lib/content/packages/ultimate-dubai-adventure-escape-10-days.json";
import epicDubaiAdventureEscape10Days from "@/lib/content/packages/epic-dubai-adventure-escape-10-days.json";
import premiumDubaiEscape4Days from "@/lib/content/packages/premium-dubai-escape-4-days.json";
import dubaiAbuDhabiPremiumTour5Days from "@/lib/content/packages/dubai-abu-dhabi-premium-tour-5-days.json";
import dubaiAbuDhabiDeluxeEscape6Days from "@/lib/content/packages/dubai-abu-dhabi-deluxe-escape-6-days.json";
import premiumUaeEscape7Days from "@/lib/content/packages/premium-uae-escape-7-days.json";
import dubaiPremiumExperienceTour8Days from "@/lib/content/packages/dubai-premium-experience-tour-8-days.json";
import premiumDubaiGrandExperience9Days from "@/lib/content/packages/premium-dubai-grand-experience-9-days.json";
import ultimateDubaiPremiumTour10Days from "@/lib/content/packages/ultimate-dubai-premium-tour-10-days.json";
import shortDubaiLuxuryTour4Days from "@/lib/content/packages/short-dubai-luxury-tour-4-days.json";
import dubaiAbuDhabiLuxuryTour5Days from "@/lib/content/packages/dubai-abu-dhabi-luxury-tour-5-days.json";
import dubaiAbuDhabiLuxuryEscapeTour6Days from "@/lib/content/packages/dubai-abu-dhabi-luxury-escape-tour-6-days.json";
import eliteDubaiLuxuryEscape7Days from "@/lib/content/packages/elite-dubai-luxury-escape-7-days.json";
import ultimateDubaiLuxuryExperience8Days from "@/lib/content/packages/ultimate-dubai-luxury-experience-8-days.json";

// Central registry of all package JSON files.
const packageRegistry: Record<string, TravelPackage> = {
  "everest-base-camp-trek": everestBaseCampTrek as TravelPackage,
  "highlights-of-dubai-tour-5-days":
    highlightsOfDubaiTour5Days as TravelPackage,
  "short-nepal-tour-package":
    shortNepalTourPackage as unknown as TravelPackage,
  "short-and-sweet-japan-tour-5-days":
    shortAndSweetJapanTour5Days as TravelPackage,
  "glimpse-of-japan-tour-7-days": glimpseOfJapanTour7Days as TravelPackage,
  "short-and-sweet-tour-of-georgia-4-days":
    shortAndSweetTourOfGeorgia4Days as TravelPackage,
  "best-georgia-holidays-7-days": bestGeorgiaHolidays7Days as TravelPackage,
  "baku-tbilisi-yerevan-tour-9-days":
    bakuTbilisiYerevanTour9Days as TravelPackage,
  "short-oman-tour-4-days": shortOmanTour4Days as TravelPackage,
  "salalah-tour-package-from-dubai-4-days":
    salalahTourPackageFromDubai4Days as TravelPackage,
  "glimpse-of-tanzania-tour-6-days":
    glimpseOfTanzaniaTour6Days as TravelPackage,
  "short-tanzania-safari-5-days": shortTanzaniaSafari5Days as TravelPackage,
  "best-tanzania-and-zanzibar-tour-10-days":
    bestTanzaniaAndZanzibarTour10Days as TravelPackage,
  "jordan-tour-package-4-days": jordanTourPackage4Days as TravelPackage,
  "dubai-abu-dhabi-east-coast-tour-10-days":
    dubaiAbuDhabiEastCoastTour10Days as TravelPackage,
  "dubai-tour-with-extra-activities-8-days":
    dubaiTourWithExtraActivities8Days as TravelPackage,
  "dubai-abu-dhabi-sharjah-tour-6-days":
    dubaiAbuDhabiSharjahTour6Days as TravelPackage,
  "dubai-and-abu-dhabi-tour-6-days": dubaiAndAbuDhabiTour6Days as TravelPackage,
  "short-thrill-dubai-adventure-tour-6-days":
    shortThrillDubaiAdventureTour6Days as TravelPackage,
  "epic-dubai-adventure-tour-6-days":
    epicDubaiAdventureTour6Days as TravelPackage,
  "dubai-adventure-tour-5-days": dubaiAdventureTour5Days as TravelPackage,
  "the-grand-dubai-adventure-tour-8-days":
    theGrandDubaiAdventureTour8Days as TravelPackage,
  "dubai-and-abu-dhabi-adventure-tour-9-days":
    dubaiAndAbuDhabiAdventureTour9Days as TravelPackage,
  "ultimate-dubai-adventure-escape-10-days":
    ultimateDubaiAdventureEscape10Days as TravelPackage,
  "epic-dubai-adventure-escape-10-days":
    epicDubaiAdventureEscape10Days as TravelPackage,
  "premium-dubai-escape-4-days": premiumDubaiEscape4Days as TravelPackage,
  "dubai-abu-dhabi-premium-tour-5-days":
    dubaiAbuDhabiPremiumTour5Days as TravelPackage,
  "dubai-abu-dhabi-deluxe-escape-6-days":
    dubaiAbuDhabiDeluxeEscape6Days as TravelPackage,
  "premium-uae-escape-7-days": premiumUaeEscape7Days as TravelPackage,
  "dubai-premium-experience-tour-8-days":
    dubaiPremiumExperienceTour8Days as TravelPackage,
  "premium-dubai-grand-experience-9-days":
    premiumDubaiGrandExperience9Days as TravelPackage,
  "ultimate-dubai-premium-tour-10-days":
    ultimateDubaiPremiumTour10Days as TravelPackage,
  "short-dubai-luxury-tour-4-days": shortDubaiLuxuryTour4Days as TravelPackage,
  "dubai-abu-dhabi-luxury-tour-5-days":
    dubaiAbuDhabiLuxuryTour5Days as TravelPackage,
  "dubai-abu-dhabi-luxury-escape-tour-6-days":
    dubaiAbuDhabiLuxuryEscapeTour6Days as TravelPackage,
  "elite-dubai-luxury-escape-7-days":
    eliteDubaiLuxuryEscape7Days as TravelPackage,
  "ultimate-dubai-luxury-experience-8-days":
    ultimateDubaiLuxuryExperience8Days as TravelPackage,
};

// Alias map: some links use suffixed slugs (e.g. "-15-days") while the JSON
// slug is shorter. This maps those display slugs to the canonical JSON slug.
const SLUG_ALIASES: Record<string, string> = {};

export async function getAllPackageSlugs(): Promise<string[]> {
  return Object.keys(packageRegistry);
}

export async function getAllPackages(): Promise<TravelPackage[]> {
  return Object.values(packageRegistry);
}

export async function getPackageBySlug(
  slug: string,
): Promise<TravelPackage | null> {
  const canonical = SLUG_ALIASES[slug] ?? slug;
  return packageRegistry[canonical] ?? null;
}

// Parses strings like "5,364 m" or "5364 meters" into a plain number.
export function parseAltitudeMeters(value: string): number {
  const match = value.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function parseDistanceKm(value: string): number {
  const match = value.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}
