export interface PackagePrice {
  label: string;
  price: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface RouteSegment {
  route: string;
  distance: string;
  duration: string;
  altitude: string;
}

export interface PackageSection {
  title: string;
  paragraphs: string[];
}

export interface TravelPackage {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  activities: string;
  accommodation: string;
  groupSize: string;
  meals: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  overview: string;
  sections: PackageSection[];
  distanceAndAltitude: RouteSegment[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  prices: PackagePrice[];
  goodToKnow: string[];
  featured: boolean;
  category: string;
}
