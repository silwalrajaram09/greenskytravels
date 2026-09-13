export type PackagePrice = {
  label: string;
  price: number;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description?: string;
};

export type PackageReview = {
  name: string;
  date: string;
  title: string;
  review: string;
  rating: number;
};

export type TravelPackage = {
  slug: string;

  title: string;

  destination: string;

  duration: string;

  activities: string;

  accommodation: string;

  maxElevation?: string;

  groupSize: string;

  vehicle: string;

  meals: string;

  heroImage: string;

  gallery?: string[];

  highlights: string[];

  overview: string;
  tripType: string;

  sections?: {
    title: string;
    paragraphs?: string[];
    items?: string[];
  }[];

  itinerary: ItineraryDay[];

  included: string[];

  excluded: string[];

  prices: PackagePrice[];

  goodToKnow: string[];

  reviews?: PackageReview[];

  featured?: boolean;

  category?: string;
};