import { Fraunces } from "next/font/google";

// Display face used only for headings — an alpine-guidebook, journal
// quality that reads as "expedition record" rather than generic travel-site type.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
