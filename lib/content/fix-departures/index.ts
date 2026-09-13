export type FixedDepartureDay = {
  day: number;
  title: string;
  description: string[];
  meals?: string;
};

export type FixedDeparture = {
  slug: string;
  title: string;
  destination: string;
  date: string;
  duration: string;
  overview: string;
  heroImage: string;
  highlights: string[];
  itinerary: FixedDepartureDay[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  bookingMessage: string;
};

export const fixedDepartures: FixedDeparture[] = [
  {
    slug: "echoes-of-baku",
    title: "Echoes of Baku",
    destination: "Azerbaijan",
    date: "28 Nov – 02 Dec",
    duration: "5 days / 4 nights",
    overview:
      "Explore Baku’s historic streets, Caspian waterfront, ancient rock carvings, mud volcanoes, fire temples, Guba and the mountain landscapes of Shahdag.",
    heroImage: "/images/destinations/azerbaijan-tour-packages.avif",
    highlights: [
      "Baku Old City and Boulevard",
      "Gobustan National Park",
      "Mud Volcanoes",
      "Quba and Candy Cane Mountains",
      "Shahdag Mountain Resort",
      "Absheron Peninsula and Ateshgah Fire Temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Baku City Tour",
        description: [
          "Airport transfer to the hotel.",
          "Explore Baku Old City, Maiden Tower, Shirvanshahs’ Palace, Nizami Street and Fountain Square.",
          "Walk along Baku Boulevard and Little Venice, then visit the Heydar Aliyev Center.",
          "Overnight in Baku.",
        ],
        meals: "Nil",
      },
      {
        day: 2,
        title: "Ancient Art and Mud Volcanoes",
        description: [
          "Visit Highland Park for views of Baku and the Flame Towers.",
          "Explore Gobustan National Park and its ancient petroglyphs.",
          "Continue to the unusual lunar landscapes of the Mud Volcanoes before returning to Baku.",
        ],
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Baku to Shahdag via Quba",
        description: [
          "Transfer to Shahdag through the scenic Quba region.",
          "Visit Qechresh Forest, Candy Cane Mountains, Red Village and Chanlibel Lake.",
          "Overnight in Shahdag.",
        ],
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Shahdag Mountain Resort",
        description: [
          "Enjoy a full day at Shahdag Mountain Resort.",
          "Take a cable car ride or choose seasonal activities such as hiking, biking and adventure rides.",
          "Discover the surrounding nature and waterfalls.",
        ],
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Fire Wonders and Departure",
        description: [
          "Return to Baku from Shahdag.",
          "Visit Yanar Dag and the Ateshgah Fire Temple.",
          "Enjoy free time before the airport transfer for departure.",
        ],
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "Return Air Arabia airfare with 20 kg check-in and 10 kg hand baggage",
      "Two nights in Baku and two nights in Shahdag",
      "Four-star accommodation with breakfast",
      "Airport transfers, city tours and English-speaking guide",
      "Travel insurance",
    ],
    exclusions: [
      "Meals not mentioned",
      "Monument and activity entrance tickets",
      "Tourist visa fee",
      "Items not mentioned in the inclusions",
    ],
    notes: [
      "Full payment is due 30 days before departure.",
      "Passport and Emirates ID are required for booking and travel.",
      "Hotels may change to a similar category subject to availability.",
      "The itinerary sequence may change for operational reasons.",
    ],
    bookingMessage:
      "I would like to enquire about the Echoes of Baku fixed departure from 28 Nov to 02 Dec.",
  },
  {
    slug: "georgian-delight",
    title: "Georgian Delight",
    destination: "Georgia",
    date: "28 Nov – 02 Dec",
    duration: "5 days / 4 nights",
    overview:
      "Discover Tbilisi’s old streets, Mtskheta’s heritage, the Ananuri Fortress, Gudauri and the dramatic landscapes of the Greater Caucasus.",
    heroImage: "/images/destinations/georgia-tour-packages.avif",
    highlights: [
      "Tbilisi Old City",
      "Mtskheta and Jvari Monastery",
      "Ananuri Fortress and Zhinvali Reservoir",
      "Gudauri and Kazbegi",
      "Gergeti Trinity Church",
      "Chronicles of Georgia",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Tbilisi Old City",
        description: [
          "Airport arrival, visa-on-arrival assistance and hotel transfer.",
          "Visit Holy Trinity Cathedral and explore Old Tbilisi, Narikala Fortress, Abanotubani, Bridge of Peace and Meidan Square.",
          "Overnight in Tbilisi.",
        ],
        meals: "Nil",
      },
      {
        day: 2,
        title: "Tbilisi, Mtskheta and Ananuri",
        description: [
          "See Tbilisi’s city highlights before travelling to Mtskheta.",
          "Visit Svetitskhoveli Cathedral and Jvari Monastery.",
          "Continue to Ananuri Fortress and Zhinvali Reservoir, then check in at Gudauri.",
        ],
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Gudauri and Kazbegi",
        description: [
          "Enjoy Gudauri views and travel to Stepantsminda.",
          "Visit Gergeti Trinity Church with Mount Kazbek as the backdrop.",
          "Return to Gudauri for leisure and an overnight stay. Shared 4x4 jeep ride is payable locally.",
        ],
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Chronicles of Georgia and Tbilisi",
        description: [
          "Travel back to Tbilisi and visit the Chronicles of Georgia and Tbilisi Sea.",
          "Explore local markets, Dry Bridge Market and the charming Old Town streets.",
          "Overnight in Tbilisi.",
        ],
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Airport Departure",
        description: [
          "Breakfast and hotel check-out.",
          "Transfer to Tbilisi International Airport for departure.",
        ],
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "Return Air Arabia airfare with 20 kg check-in and 10 kg hand baggage",
      "Two nights in Tbilisi and two nights in Gudauri",
      "Four-star accommodation with breakfast",
      "Airport transfers, sightseeing tours and English-speaking guide",
      "Travel insurance",
    ],
    exclusions: [
      "Meals not mentioned",
      "Monument, cable car and activity tickets",
      "Tourist visa fee",
      "Items not mentioned in the inclusions",
    ],
    notes: [
      "Full payment is due 30 days before departure.",
      "A shared Kazbegi 4x4 jeep ride is payable locally.",
      "Hotels may change to a similar category subject to availability.",
      "The itinerary sequence may change for operational reasons.",
    ],
    bookingMessage:
      "I would like to enquire about the Georgian Delight fixed departure from 28 Nov to 02 Dec.",
  },
  {
    slug: "discover-armenia",
    title: "A Land of Timeless Beauty",
    destination: "Armenia",
    date: "28 Nov – 02 Dec",
    duration: "5 days / 4 nights",
    overview:
      "Experience Yerevan, Lake Sevan, Tsaghkadzor, Dilijan, Garni, Geghard, Amberd Fortress and the spectacular mountain scenery of Armenia.",
    heroImage: "/images/destinations/armenia-tour-packages.avif",
    highlights: [
      "Yerevan city tour",
      "Lake Sevan and Sevanavank",
      "Tsaghkadzor and Dilijan",
      "Garni Temple and Symphony of Stones",
      "Geghard Monastery",
      "Amberd Fortress and Lake Kari",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Yerevan City Tour",
        description: [
          "Airport transfer and hotel check-in.",
          "Visit Republic Square, Cascade Complex, Northern Avenue, Tsitsernakaberd, Mother Armenia and the Opera Theatre.",
          "Overnight in Yerevan.",
        ],
        meals: "Nil",
      },
      {
        day: 2,
        title: "Lake Sevan, Tsaghkadzor and Dilijan",
        description: [
          "Visit Lake Sevan and Sevanavank Monastery.",
          "Enjoy Tsaghkadzor Ropeway views and visit Kecharis Monastery.",
          "Explore Dilijan Old Town and Haghartsin Monastery before returning to Yerevan.",
        ],
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Garni and Geghard",
        description: [
          "Visit Charents’ Arch and enjoy views of Mount Ararat.",
          "Explore Garni Pagan Temple, the Symphony of Stones and Geghard Monastery.",
          "Return to Yerevan.",
        ],
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Armenian Alphabet, Amberd and Lake Kari",
        description: [
          "Visit the Armenian Alphabet Monument and Saghmosavank Monastery.",
          "Explore Amberd Fortress and continue to Lake Kari on Mount Aragats.",
          "Return to Yerevan.",
        ],
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Leisure, Shopping and Departure",
        description: [
          "After check-out, enjoy free time and visit Vernissage Market.",
          "Transfer to Zvartnots International Airport for departure.",
        ],
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "Return Air Arabia airfare with 20 kg check-in and 10 kg hand baggage",
      "Four nights’ accommodation in a four-star hotel with breakfast",
      "Yerevan, Garni, Geghard, Lake Sevan, Tsaghkadzor, Dilijan and Lake Kari tours",
      "English-speaking guide and travel insurance",
    ],
    exclusions: [
      "Meals not mentioned",
      "Monument and activity entrance tickets",
      "Tourist visa fee",
      "Items not mentioned in the inclusions",
    ],
    notes: [
      "Full payment is due 30 days before departure.",
      "Passport and Emirates ID are required for booking and travel.",
      "Hotels may change to a similar category subject to availability.",
      "The itinerary sequence may change for operational reasons.",
    ],
    bookingMessage:
      "I would like to enquire about the Discover Armenia fixed departure from 28 Nov to 02 Dec.",
  },
  {
    slug: "salalah-by-bus-from-uae",
    title: "Salalah by Bus Tour Package from UAE",
    destination: "Oman",
    date: "Fixed departure",
    duration: "5 days / 2 nights",
    overview:
      "Travel by luxury bus from the UAE to Salalah and discover Mughsail Beach, Wadi Darbat, Jabal Samhan, Ayn Razat, Salalah’s markets and cultural landmarks.",
    heroImage: "/images/destinations/oman-tour-packages.avif",
    highlights: [
      "Luxury bus transfer from the UAE",
      "Mughsail Beach",
      "Wadi Darbat and Jabal Samhan",
      "Tawi Atair Sinkhole and Ayn Razat",
      "Sultan Qaboos Grand Mosque",
      "Traditional fruit market and Souq Al Haffa",
    ],
    itinerary: [
      {
        day: 1,
        title: "UAE to Salalah",
        description: [
          "Pick-up from Dubai at Stadium Lulu at 4:00 PM.",
          "Pick-up from Al Ain at Barari Mall at 6:00 PM.",
          "Complete UAE exit and Oman entry formalities, with dinner stop at Ibri at your own cost.",
        ],
        meals: "Nil",
      },
      {
        day: 2,
        title: "Salalah Arrival and Mughsail Beach",
        description: [
          "Arrive in Salalah and transfer to the hotel.",
          "Check in, enjoy buffet lunch and free time.",
          "Visit Mughsail Beach, then return for buffet dinner and overnight stay.",
        ],
        meals: "Lunch and dinner",
      },
      {
        day: 3,
        title: "Wadi Darbat and Jabal Samhan",
        description: [
          "Visit Wadi Darbat, Jabal Samhan viewpoint, Tawi Atair Sinkhole, Location of Gravity, Ayn Razat and Imran Nabi Tomb.",
          "Enjoy packed lunch, return to the hotel, buffet dinner and overnight stay.",
        ],
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Salalah Tour and Departure",
        description: [
          "Visit Sultan Qaboos Grand Mosque, Cheraman Perumal Tomb, the traditional fruit market and Souq Al Haffa.",
          "Enjoy lunch before the departure transfer to Dubai. Dinner at Haima is at your own cost.",
        ],
        meals: "Breakfast and lunch",
      },
      {
        day: 5,
        title: "UAE Arrival",
        description: ["Arrive in Dubai at approximately 6:00 AM."],
        meals: "Nil",
      },
    ],
    inclusions: [
      "Two nights’ accommodation in Salalah",
      "UAE–Oman–UAE luxury bus transportation",
      "Travel insurance and visa/border assistance",
      "Full-time tour manager and guided sightseeing",
      "Full-board meals and daily bottled water",
    ],
    exclusions: [
      "UAE border exit fee of AED 35",
      "Entrance fees",
      "Meals not mentioned",
      "Additional sightseeing vehicle",
      "Guaranteed early check-in or late check-out",
    ],
    notes: [
      "Passport must be valid for six months and Emirates ID for three months.",
      "Oman visa approval depends on nationality and immigration authorities.",
      "Once confirmed and paid, the package is non-transferable and non-refundable.",
      "The itinerary may change due to operational or force-majeure reasons.",
    ],
    bookingMessage:
      "I would like to enquire about the Salalah by Bus Tour Package from UAE.",
  },
  {
    slug: "smart-musandam-day-trip",
    title: "Smart Musandam Day Trip",
    destination: "Oman",
    date: "Available dates on request",
    duration: "Full-day trip",
    overview:
      "Enjoy a full-day Dibba Musandam dhow cruise with beach activities, snorkeling, banana boat, kayaking, fishing, mountain cave visits and buffet lunch on board.",
    heroImage: "/images/destinations/oman-tour-packages.avif",
    highlights: [
      "Dibba Musandam dhow cruise",
      "Snorkeling and swimming",
      "Banana boat and kayaking",
      "Buffet lunch on board",
      "Mountain cave visit",
      "Pick-up and drop-off with guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibba Musandam Dhow Cruise",
        description: [
          "Guest pick-up from the selected location at approximately 6:30 AM.",
          "Border entry assistance at 9:00 AM and dhow reporting with welcome drink at 10:00 AM.",
          "Cruise to the beach for snorkeling, swimming, fishing, kayaking and banana boat activities.",
          "Enjoy buffet lunch on board, leisure time, a mountain cave visit and fishing subject to sea conditions.",
          "Return to the harbor at 4:00 PM and transfer back.",
        ],
        meals: "Buffet lunch, drinks, fruit and snacks",
      },
    ],
    inclusions: [
      "Pick-up and drop-off on SIC basis with guide",
      "Five to six hours dhow cruise",
      "Guest relations crew and English-speaking guide",
      "Buffet lunch, soft drinks, mineral water, fruit and snacks",
      "Banana boat, speed boat, fishing, kayaking and snorkeling",
    ],
    exclusions: [
      "Personal expenses",
      "Items not mentioned in the inclusions",
      "Costs caused by changes to the requested date",
    ],
    notes: [
      "Passport must be valid for six months and Emirates ID for three months.",
      "UAE residents must hold a valid permit to enter Dibba, Musandam.",
      "Family members on sponsored visas must be accompanied by their sponsor.",
      "The trip is subject to weather and maritime conditions; confirmed bookings are non-refundable.",
    ],
    bookingMessage:
      "I would like to enquire about the Smart Musandam Day Trip.",
  },
];

export function getFixedDeparture(slug: string) {
  return fixedDepartures.find((departure) => departure.slug === slug) ?? null;
}
