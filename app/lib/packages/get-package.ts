import fs from "node:fs/promises";
import path from "node:path";
import type { TravelPackage } from "./types";

// Swap this for a CMS/API fetch later — the page component below
// doesn't care where the JSON comes from, only that it matches
// the TravelPackage shape.
const PACKAGES_DIR = path.join(process.cwd(), "data", "packages");

export async function getAllPackageSlugs(): Promise<string[]> {
  const files = await fs.readdir(PACKAGES_DIR);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

export async function getAllPackages(): Promise<TravelPackage[]> {
  const slugs = await getAllPackageSlugs();
  const packages = await Promise.all(slugs.map((slug) => getPackageBySlug(slug)));
  return packages.filter((pkg): pkg is TravelPackage => pkg !== null);
}

export async function getPackageBySlug(slug: string): Promise<TravelPackage | null> {
  try {
    const filePath = path.join(PACKAGES_DIR, `${slug}.json`);
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as TravelPackage;
  } catch {
    return null;
  }
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
