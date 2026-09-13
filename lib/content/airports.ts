export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
}

export const airports: Airport[] = [
  // Middle East
  { iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { iata: "SHJ", name: "Sharjah International Airport", city: "Sharjah", country: "United Arab Emirates" },
  { iata: "AUH", name: "Zayed International Airport", city: "Abu Dhabi", country: "United Arab Emirates" },
  { iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  { iata: "MCT", name: "Muscat International Airport", city: "Muscat", country: "Oman" },
  { iata: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain" },
  { iata: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait" },
  { iata: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia" },
  { iata: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia" },

  // South Asia
  { iata: "KTM", name: "Tribhuvan International Airport", city: "Kathmandu", country: "Nepal" },
  { iata: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India" },
  { iata: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India" },
  { iata: "COK", name: "Cochin International Airport", city: "Kochi", country: "India" },
  { iata: "CCJ", name: "Calicut International Airport", city: "Kozhikode", country: "India" },
  { iata: "DAC", name: "Hazrat Shahjalal International Airport", city: "Dhaka", country: "Bangladesh" },
  { iata: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan" },
  { iata: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan" },
  { iata: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka" },

  // Europe
  { iata: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
  { iata: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { iata: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },

  // Southeast Asia
  { iata: "SIN", name: "Changi Airport", city: "Singapore", country: "Singapore" },
  { iata: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { iata: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { iata: "CGK", name: "Soekarno-Hatta International Airport", city: "Jakarta", country: "Indonesia" },
  { iata: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },

  // East Asia
  { iata: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong" },
  { iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
  { iata: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },

  // North America
  { iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States" },
  { iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States" },
  { iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
];
