import { getWhatsAppUrl, WhatsAppChannel } from "@/lib/config/site";

export interface WhatsAppField {
  label: string;
  value?: string | number | null;
}

export function buildWhatsAppMessage(
  title: string,
  fields: WhatsAppField[],
  closing = "Please share the available options and pricing.",
) {
  const details = fields
    .filter(({ value }) => value !== undefined && value !== null && String(value).trim())
    .map(({ label, value }) => `- ${label}: ${value}`)
    .join("\n");

  return [
    `Hello Green Sky Travels!`,
    "",
    `I would like help with ${title}.`,
    details ? `\n${details}` : "",
    "",
    closing,
  ]
    .filter(Boolean)
    .join("\n");
}

export function getServiceWhatsAppUrl(
  title: string,
  fields: WhatsAppField[],
  closing?: string,
) {
  return getWhatsAppUrl(
    buildWhatsAppMessage(title, fields, closing),
    "services",
  );
}

export function getGeneralWhatsAppUrl(message?: string, channel: WhatsAppChannel = "general") {
  return getWhatsAppUrl(message, channel);
}
