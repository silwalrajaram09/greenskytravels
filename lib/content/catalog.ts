// Central source of truth for packages, destinations, and navigation.
// JSON files in `lib/content/packages/*.json` hold the detailed content; this catalog
// provides the lightweight metadata (slug, title, destination, price, heroImage)
// used across the navbar, footer, homepage, and listing pages.

export interface PackageMeta {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price?: string;
  rating: number;
  image: string;
  featured?: boolean;
  category: string;
  type?: string;
}

export interface DestinationMeta {
  name: string;
  slug: string;
  toursCount: number;
  image: string;
}

export interface NavLink {
  name: string;
  link: string;
}

export interface DestinationNavGroup {
  country: string;
  link: string;
  packages: NavLink[];
}
//featured packages on homepage 
export const featuredPackages: PackageMeta[] = [
  {
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    destination: "Nepal",
    duration: "15 Days",
    // price: "$1,499",
    rating: 4.9,
    image:"/images/packages/everestBaseCamp/ev3.jpg",
      
    featured: true,
    type: "Group Tours",
    category: "Nepal Tours",
  },
  {
    slug: "highlights-of-dubai-tour-5-days",
    title: "Dubai Premium Desert Safari & City Tour",
    destination: "Dubai",
    duration: "5 Days",
    rating: 4.8,
    image:"/images/destinations/dubai-tour-packages.avif",
    featured: true,
     type: "Budget Friendly", 
    category: "Dubai Classic Tours",
  },
  {
    slug: "short-nepal-tour-package",
    title: "Short Nepal Tour",
    destination: "Nepal",
    duration: "3 Days",
    // price: "$299",
    rating: 4.7,
    image:
      "/images/destinations/explore-kathmandu.avif",
    featured: true,
    type: "On sale",
    category: "Nepal Tours",
  },
];


// Popular destinations shown on the homepage & destinations listing

export const popularDestinations: DestinationMeta[] = [
  {
    name: "Nepal",
    slug: "nepal-tour-packages",
    toursCount: 12,
    image:
      "/images/destinations/nepal-tour-packages.avif"
  },
  {
    name: "Japan",
    slug: "japan-tour-packages",
    toursCount: 8,
    image:
      "/images/destinations/japan-tour-packages.avif"
  },
  {
    name: "Georgia",
    slug: "georgia-tour-packages",
    toursCount: 5,
    image:
      "/images/destinations/georgia-tour-packages.avif"
  },
  {
    name: "Dubai",
    slug: "dubai-tour-packages",
    toursCount: 10,
    image:
      "/images/destinations/dubai-tour-packages.avif"
  },
 
];


// Destination navigation groups (used by navbar mega menu)

export const destinationNavGroups: DestinationNavGroup[] = [
  {
    country: "Nepal",
    link: "/destinations/nepal-tour-packages",
    packages: [
      {
        name: "Short Nepal Tour Package - 3 days",
        link: "/destinations/nepal-tour-packages/short-nepal-tour-package",
      },
      {
        name: "Everest Base Camp Trek - 15 days",
        link: "/destinations/nepal-tour-packages/everest-base-camp-trek",
      },
      {
        name: "Everest Panorama Trek - 10 days",
        link: "/destinations/nepal-tour-packages/everest-panorama-trek",
      },
      // {
      //   name: "Everest Base Camp Trek - 15 days",
      //   link: "/destinations/nepal-tour-packages/everest-base-camp-trek",
      // },

    ],
  },
  {
    country: "Japan",
    link: "/destinations/japan-tour-packages",
    packages: [
      {
        name: "Short and Sweet Japan Tour - 5 days",
        link: "/destinations/japan-tour-packages/short-and-sweet-japan-tour-5-days",
      },
      {
        name: "Glimpse of Japan Tour - 7 days",
        link: "/destinations/japan-tour-packages/glimpse-of-japan-tour-7-days",
      },
    ],
  },
  {
    country: "Georgia",
    link: "/destinations/georgia-tour-packages",
    packages: [
      {
        name: "Short and Sweet Tour of Georgia - 4 days",
        link: "/destinations/georgia-tour-packages/short-and-sweet-tour-of-georgia-4-days",
      },
      {
        name: "Best Georgia Holidays - 7 days",
        link: "/destinations/georgia-tour-packages/best-georgia-holidays-7-days",
      },
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/destinations/georgia-tour-packages/baku-tbilisi-yerevan-tour-9-days",
      },
    ],
  },
  {
    country: "Oman",
    link: "/destinations/oman-tour-packages",
    packages: [
      {
        name: "Short Oman Tour - 4 days",
        link: "/destinations/oman-tour-packages/short-oman-tour-4-days",
      },
      {
        name: "Salalah Tour Package from Dubai - 4 days",
        link: "/destinations/oman-tour-packages/salalah-tour-package-from-dubai-4-days",
      },
    ],
  },
  {
    country: "Tanzania",
    link: "/destinations/tanzania-tour-packages",
    packages: [
      {
        name: "Glimpse of Tanzania Tour - 6 Days",
        link: "/destinations/tanzania-tour-packages/glimpse-of-tanzania-tour-6-days",
      },
      {
        name: "Short Tanzania Safari - 5 days",
        link: "/destinations/tanzania-tour-packages/short-tanzania-safari-5-days",
      },
      {
        name: "Best Tanzania and Zanzibar Tour - 10 days",
        link: "/destinations/tanzania-tour-packages/best-tanzania-and-zanzibar-tour-10-days",
      },
    ],
  },
  {
    country: "Azerbaijan",
    link: "/destinations/azerbaijan-tour-packages",
    packages: [
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/destinations/azerbaijan-tour-packages/baku-tbilisi-yerevan-tour-9-days",
      },
    ],
  },
  {
    country: "Jordan",
    link: "/destinations/jordan-tour-packages",
    packages: [
      {
        name: "Jordan Tour Package - 4 days",
        link: "/destinations/jordan-tour-packages/jordan-tour-package-4-days",
      },
    ],
  },
  {
    country: "Armenia",
    link: "/destinations/armenia-tour-packages",
    packages: [
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/destinations/armenia-tour-packages/baku-tbilisi-yerevan-tour-9-days",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Dubai package categories (used by navbar mega menu)
// ---------------------------------------------------------------------------
export const dubaiNavGroups = [
  {
    category: "Dubai Budget Friendly tour ",
    link: "/dubai-tour-packages#dubai-budget-friendly-tour",
    packages: [
      {
        name: "Highlights of Dubai Tour - 5 days",
        link: "/destinations/dubai-tour-packages/highlights-of-dubai-tour-5-days",
      },
      // {
      //   name: "Dubai, Abu Dhabi & East Coast Tour - 10 days",
      //   link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-east-coast-tour-10-days",
      // },
      // {
      //   name: "Dubai Tour With Extra Activities - 8 days",
      //   link: "/destinations/dubai-tour-packages/dubai-tour-with-extra-activities-8-days",
      // },
      // {
      //   name: "Dubai, Abu Dhabi & Sharjah Tour - 6 days",
      //   link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-sharjah-tour-6-days",
      // },
      // {
      //   name: "Dubai and Abu Dhabi Tour - 6 days",
      //   link: "/destinations/dubai-tour-packages/dubai-and-abu-dhabi-tour-6-days",
      // },
      
    ],
  },
  {
    category: "Dubai Adventure Tours",
    link: "/dubai-tour-packages#dubai-adventure-tours",
    packages: [
      {
        name: "Dubai Adventure Tour - 5 days",
        link: "/destinations/dubai-tour-packages/dubai-adventure-tour-5-days",
      },
      {
        name: "The Grand Dubai Adventure Tour - 8 days",
        link: "/destinations/dubai-tour-packages/the-grand-dubai-adventure-tour-8-days",
      },
      // {
      //   name: "Dubai and Abu Dhabi Adventure Tour - 9 days",
      //   link: "/destinations/dubai-tour-packages/dubai-and-abu-dhabi-adventure-tour-9-days",
      // },
      // {
      //   name: "Ultimate Dubai Adventure Escape - 10 days",
      //   link: "/destinations/dubai-tour-packages/ultimate-dubai-adventure-escape-10-days",
      // },
      // {
      //   name: "Epic Dubai Adventure Escape - 10 days",
      //   link: "/destinations/dubai-tour-packages/epic-dubai-adventure-escape-10-days",
      // },
      // {
      //   name: "Short Thrill Dubai Adventure Tour - 6 days",
      //   link: "/destinations/dubai-tour-packages/short-thrill-dubai-adventure-tour-6-days",
      // },
      // {
      //   name: "Epic Dubai Adventure Tour - 6 days",
      //   link: "/destinations/dubai-tour-packages/epic-dubai-adventure-tour-6-days",
      // },
    ],
  },
  {
    category: "Dubai Premium Tours",
    link: "/dubai-tour-packages#dubai-premium-tours",
    packages: [
      {
        name: "Premium Dubai Escape - 4 days",
        link: "/destinations/dubai-tour-packages/premium-dubai-escape-4-days",
      },
      {
        name: "Dubai & Abu Dhabi Premium Tour - 5 days",
        link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-premium-tour-5-days",
      },
      // {
      //   name: "Dubai & Abu Dhabi Deluxe Escape - 6 days",
      //   link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-deluxe-escape-6-days",
      // },
      // {
      //   name: "Premium UAE Escape | Dubai, Sharjah & Abu Dhbai | Green Sky Travels- 7 days",
      //   link: "/destinations/dubai-tour-packages/premium-uae-escape-7-days",
      // },
      // {
      //   name: "Dubai Premium Experience Tour - 8 days",
      //   link: "/destinations/dubai-tour-packages/dubai-premium-experience-tour-8-days",
      // },
      // {
      //   name: "Premium Dubai Grand Experience - 9 days",
      //   link: "/destinations/dubai-tour-packages/premium-dubai-grand-experience-9-days",
      // },
      // {
      //   name: "Ultimate Dubai Premium Tour - 10 days",
      //   link: "/destinations/dubai-tour-packages/ultimate-dubai-premium-tour-10-days",
      // },
    ],
  },
  {
    category: "Dubai Luxury Tours",
    link: "/dubai-tour-packages#dubai-luxury-tours",
    packages: [
      {
        name: "Short Dubai Luxury Tour - 4 days",
        link: "/destinations/dubai-tour-packages/short-dubai-luxury-tour-4-days",
      },
      // {
      //   name: "Dubai & Abu Dhabi Luxury Tour - 5 days",
      //   link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-luxury-tour-5-days",
      // },
      // {
      //   name: "Dubai & Abu Dhabi Luxury Escape Tour - 6 days",
      //   link: "/destinations/dubai-tour-packages/dubai-abu-dhabi-luxury-escape-tour-6-days",
      // },
      // {
      //   name: "Elite Dubai Luxury Escape - 7 days",
      //   link: "/destinations/dubai-tour-packages/elite-dubai-luxury-escape-7-days",
      // },
      // {
      //   name: "Ultimate Dubai Luxury Experience - 8 days",
      //   link: "/destinations/dubai-tour-packages/ultimate-dubai-luxury-experience-8-days",
      // },
    ],
  },
];

// ---------------------------------------------------------------------------
// Company links (used by navbar)
// ---------------------------------------------------------------------------
export const companyLinks: NavLink[] = [
  { name: "About us", link: "/about-us" },
  { name: "Read Reviews", link: "/review" },
  { name: "Our Team", link: "/our-team" },
  { name: "FAQs", link: "/faqs" },
];

// Helper to build a slug from a title (kept for consistency with DB/JSON).
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Canonical destination URL used by cards, navigation, breadcrumbs, and package pages.
export function destinationSlug(destination: string): string {
  return `${slugify(destination)}-tour-packages`;
}


// Public service navigation links. Detailed service definitions live in
// `lib/content/services.ts`; these links keep the existing navbar lightweight.
export const serviceLinks: NavLink[] = [
  { name: "All Services", link: "/services" },
  { name: "Flight Requests", link: "/services/flights" },
  { name: "Visa Services", link: "/services/visa-services" },
  { name: "Air Ticketing", link: "/services/ticketing" },
  { name: "Hotel Reservations", link: "/services/hotels" },
  { name: "Customize Your Trip", link: "/customize-your-trip" },
];
