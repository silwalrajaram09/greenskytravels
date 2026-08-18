// Central source of truth for packages, destinations, and navigation.
// JSON files in `data/packages/*.json` hold the detailed content; this catalog
// provides the lightweight metadata (slug, title, destination, price, heroImage)
// used across the navbar, footer, homepage, and listing pages.

export interface PackageMeta {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  featured?: boolean;
  category: string;
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

// ---------------------------------------------------------------------------
// Featured / trending packages shown on the homepage
// ---------------------------------------------------------------------------
export const featuredPackages: PackageMeta[] = [
  {
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    destination: "Nepal",
    duration: "15 Days",
    price: "$1,499",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1522198797945-3a0595306cd1?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    category: "Nepal Tours",
  },
  {
    slug: "highlights-of-dubai-tour-5-days",
    title: "Dubai Premium Desert Safari & City Tour",
    destination: "Dubai",
    duration: "5 Days",
    price: "$899",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
    category: "Dubai Classic Tours",
  },
  {
    slug: "short-nepal-tour-package",
    title: "Short Nepal Heritage Tour",
    destination: "Nepal",
    duration: "3 Days",
    price: "$299",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1588667500585-71cb3cbcc92c?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    category: "Nepal Tours",
  },
];

// ---------------------------------------------------------------------------
// Popular destinations shown on the homepage & destinations listing
// ---------------------------------------------------------------------------
export const popularDestinations: DestinationMeta[] = [
  {
    name: "Nepal",
    slug: "nepal",
    toursCount: 12,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop",
  },
  {
    name: "Japan",
    slug: "japan",
    toursCount: 8,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Georgia",
    slug: "georgia",
    toursCount: 5,
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Dubai",
    slug: "dubai",
    toursCount: 10,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
];

// ---------------------------------------------------------------------------
// Destination navigation groups (used by navbar mega menu)
// ---------------------------------------------------------------------------
export const destinationNavGroups: DestinationNavGroup[] = [
  {
    country: "Nepal",
    link: "/destinations/nepal",
    packages: [
      {
        name: "Short Nepal Tour Package - 3 days",
        link: "/packages/short-nepal-tour-package",
      },
      {
        name: "Everest Base Camp Trek - 15 days",
        link: "/packages/everest-base-camp-trek",
      },
      {
        name: "Everest Panorama Trek - 10 days",
        link: "/packages/everest-panorama-trek",
      },
      // {
      //   name: "Everest Base Camp Trek - 15 days",
      //   link: "/packages/everest-base-camp-trek",
      // },

    ],
  },
  {
    country: "Japan",
    link: "/destinations/japan",
    packages: [
      {
        name: "Short and Sweet Japan Tour - 5 days",
        link: "/packages/short-and-sweet-japan-tour-5-days",
      },
      {
        name: "Glimpse of Japan Tour - 7 days",
        link: "/packages/glimpse-of-japan-tour-7-days",
      },
    ],
  },
  {
    country: "Georgia",
    link: "/destinations/georgia",
    packages: [
      {
        name: "Short and Sweet Tour of Georgia - 4 days",
        link: "/packages/short-and-sweet-tour-of-georgia-4-days",
      },
      {
        name: "Best Georgia Holidays - 7 days",
        link: "/packages/best-georgia-holidays-7-days",
      },
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/packages/baku-tbilisi-yerevan-tour-9-days",
      },
    ],
  },
  {
    country: "Oman",
    link: "/destinations/oman",
    packages: [
      {
        name: "Short Oman Tour - 4 days",
        link: "/packages/short-oman-tour-4-days",
      },
      {
        name: "Salalah Tour Package from Dubai - 4 days",
        link: "/packages/salalah-tour-package-from-dubai-4-days",
      },
    ],
  },
  {
    country: "Tanzania",
    link: "/destinations/tanzania",
    packages: [
      {
        name: "Glimpse of Tanzania Tour - 6 Days",
        link: "/packages/glimpse-of-tanzania-tour-6-days",
      },
      {
        name: "Short Tanzania Safari - 5 days",
        link: "/packages/short-tanzania-safari-5-days",
      },
      {
        name: "Best Tanzania and Zanzibar Tour - 10 days",
        link: "/packages/best-tanzania-and-zanzibar-tour-10-days",
      },
    ],
  },
  {
    country: "Azerbaijan",
    link: "/destinations/azerbaijan",
    packages: [
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/packages/baku-tbilisi-yerevan-tour-9-days",
      },
    ],
  },
  {
    country: "Jordan",
    link: "/destinations/jordan",
    packages: [
      {
        name: "Jordan Tour Package - 4 days",
        link: "/packages/jordan-tour-package-4-days",
      },
    ],
  },
  {
    country: "Armenia",
    link: "/destinations/armenia",
    packages: [
      {
        name: "Baku, Tbilisi & Yerevan Tour Package - 9 days",
        link: "/packages/baku-tbilisi-yerevan-tour-9-days",
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
    link: "/destinations/dubai",
    packages: [
      {
        name: "Highlights of Dubai Tour - 5 days",
        link: "/packages/highlights-of-dubai-tour-5-days",
      },
      {
        name: "Dubai, Abu Dhabi & East Coast Tour - 10 days",
        link: "/packages/dubai-abu-dhabi-east-coast-tour-10-days",
      },
      {
        name: "Dubai Tour With Extra Activities - 8 days",
        link: "/packages/dubai-tour-with-extra-activities-8-days",
      },
      {
        name: "Dubai, Abu Dhabi & Sharjah Tour - 6 days",
        link: "/packages/dubai-abu-dhabi-sharjah-tour-6-days",
      },
      {
        name: "Dubai and Abu Dhabi Tour - 6 days",
        link: "/packages/dubai-and-abu-dhabi-tour-6-days",
      },
      
    ],
  },
  {
    category: "Dubai Adventure Tours",
    link: "/destinations/dubai",
    packages: [
      {
        name: "Dubai Adventure Tour - 5 days",
        link: "/packages/dubai-adventure-tour-5-days",
      },
      {
        name: "The Grand Dubai Adventure Tour - 8 days",
        link: "/packages/the-grand-dubai-adventure-tour-8-days",
      },
      {
        name: "Dubai and Abu Dhabi Adventure Tour - 9 days",
        link: "/packages/dubai-and-abu-dhabi-adventure-tour-9-days",
      },
      {
        name: "Ultimate Dubai Adventure Escape - 10 days",
        link: "/packages/ultimate-dubai-adventure-escape-10-days",
      },
      {
        name: "Epic Dubai Adventure Escape - 10 days",
        link: "/packages/epic-dubai-adventure-escape-10-days",
      },
      {
        name: "Short Thrill Dubai Adventure Tour - 6 days",
        link: "/packages/short-thrill-dubai-adventure-tour-6-days",
      },
      {
        name: "Epic Dubai Adventure Tour - 6 days",
        link: "/packages/epic-dubai-adventure-tour-6-days",
      },
    ],
  },
  {
    category: "Dubai Premium Tours",
    link: "/destinations/dubai",
    packages: [
      {
        name: "Premium Dubai Escape - 4 days",
        link: "/packages/premium-dubai-escape-4-days",
      },
      {
        name: "Dubai & Abu Dhabi Premium Tour - 5 days",
        link: "/packages/dubai-abu-dhabi-premium-tour-5-days",
      },
      {
        name: "Dubai & Abu Dhabi Deluxe Escape - 6 days",
        link: "/packages/dubai-abu-dhabi-deluxe-escape-6-days",
      },
      {
        name: "Premium UAE Escape | Dubai, Sharjah & Abu Dhbai | Green Sky Travels- 7 days",
        link: "/packages/premium-uae-escape-7-days",
      },
      {
        name: "Dubai Premium Experience Tour - 8 days",
        link: "/packages/dubai-premium-experience-tour-8-days",
      },
      {
        name: "Premium Dubai Grand Experience - 9 days",
        link: "/packages/premium-dubai-grand-experience-9-days",
      },
      {
        name: "Ultimate Dubai Premium Tour - 10 days",
        link: "/packages/ultimate-dubai-premium-tour-10-days",
      },
    ],
  },
  {
    category: "Dubai Luxury Tours",
    link: "/destinations/dubai",
    packages: [
      {
        name: "Short Dubai Luxury Tour - 4 days",
        link: "/packages/short-dubai-luxury-tour-4-days",
      },
      {
        name: "Dubai & Abu Dhabi Luxury Tour - 5 days",
        link: "/packages/dubai-abu-dhabi-luxury-tour-5-days",
      },
      {
        name: "Dubai & Abu Dhabi Luxury Escape Tour - 6 days",
        link: "/packages/dubai-abu-dhabi-luxury-escape-tour-6-days",
      },
      {
        name: "Elite Dubai Luxury Escape - 7 days",
        link: "/packages/elite-dubai-luxury-escape-7-days",
      },
      {
        name: "Ultimate Dubai Luxury Experience - 8 days",
        link: "/packages/ultimate-dubai-luxury-experience-8-days",
      },
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


//company services 
export const serviceLinks: NavLink[]=[
  {name:"Visa services",link:"/visa-services"},
  { name: "Customize Your Trip", link: "/customize-your-trip" },
  {name:"Ticketing", link:"/ticketing"}

];