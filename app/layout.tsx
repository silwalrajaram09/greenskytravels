import type { Metadata } from "next";
import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Your premier travel partner providing unforgettable experiences across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />

        {/* <Breadcrumbs /> */}

        <main className="flex-grow">{children}</main>

        <FloatingWhatsApp />

        <Footer />
      </body>
    </html>
  );
}
