export const siteConfig = {
  name: "Green Sky Travels",
  shortName: "Green Sky",
  email: "info@greenskytravels.com",
  phone: "+971 4 570 2868",
  whatsappDisplay: "+971 50 214 2541",
  whatsappNumber: "971502142541",
  serviceWhatsappNumber: "971585032337",
  address:
    "Salim Building, Al Souq Al Kabeer, near Mena Bazar, BurDubai, Dubai, United Arab Emirates",
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
