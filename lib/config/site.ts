export const siteConfig = {
  name: "Green Sky Travels",
  shortName: "Green Sky",
  legalName: "Green Sky Travel and Tourism LLC",
  establishedYear: 2013,
  baseCity: "Dubai",
  country: "United Arab Emirates",
  registeredIn: ["Dubai", "Abu Dhabi"],
  url: "https://greenskytravels.com",
  email: "info@greenskytravels.com",
  phone: "+971 2 236 7315",
  telephone: "+971 4 570 2868",
  whatsappDisplay: "+971 50 214 2541",
  whatsappNumber: "971502142541",
  serviceWhatsappNumber: "971585032337",
  serviceWhatsappDisplay: "+971 58 503 2337",
  address:
    "Salim Building, Al Souq Al Kabeer, near Mena Bazar, BurDubai, Dubai, United Arab Emirates",
  openingHours: "Monday to Saturday · 9:00 AM – 7:00 PM",
} as const;

export type WhatsAppChannel = "general" | "services";

export function getWhatsAppNumber(channel: WhatsAppChannel = "general") {
  return channel === "services"
    ? siteConfig.serviceWhatsappNumber
    : siteConfig.whatsappNumber;
}

export function getWhatsAppUrl(
  message?: string,
  channel: WhatsAppChannel = "general",
) {
  const number = getWhatsAppNumber(channel);
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

export function getViberUrl(number: string = siteConfig.whatsappNumber) {
  return `viber://chat?number=${number}`;
}

export function getTelUrl(phone: string = siteConfig.phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getMailtoUrl(email: string = siteConfig.email) {
  return `mailto:${email}`;
}
