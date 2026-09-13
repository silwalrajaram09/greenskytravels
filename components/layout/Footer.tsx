import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  siteConfig,
  getWhatsAppUrl,
  getViberUrl,
  getTelUrl,
  getMailtoUrl,
} from "@/lib/config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center  w-max"
            >
              <Image
                src="/images/branding/greenskytravaleslogo.jpg"
                alt="Greensky Travels Logo"
                height={180}
                width={200}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Your premier travel partner providing unforgettable experiences
              across the globe. From Everest treks to Dubai luxury tours, we
              make your dream vacations a reality.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={getViberUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on Viber"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7360f2] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 10.4c0-4.9-5-8.9-10-8.9S2 5.5 2 10.4c0 2.2 1 4.1 2.5 5.5v4.6l3.6-1.8c1.2.3 2.5.5 3.9.5 5 0 10-4 10-8.8zm-14.8 2c-.3 0-.6-.3-.6-.6 0-.2.1-.4.2-.5.1-.1.2-.2.4-.2h1c.1 0 .2 0 .2.1.1 0 .1.1.2.2.1.2.2.5.3.8.1.3.1.5.1.7 0 .1 0 .2-.1.3l-.4.6c-.1.1-.1.2-.1.3 0 .1.1.2.2.4.3.4.6.8 1 1.2.3.3.7.6 1 .7.2.1.3.2.4.2h.2c.1-.1.2-.2.3-.4l.5-.6c.1-.1.2-.1.3-.2h.2c.2.1.4.2.6.2l.7.3c.3.1.5.3.8.5.1.1.2.2.2.3.1.2.1.5 0 .8-.1.3-.4.6-.6.6z" />
                </svg>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.265-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.211.049-.39-.025-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36z"></path>
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.46 0 .104 5.339.104 11.94c0 2.114.54 4.184 1.574 6.014L0 24l6.148-1.604c1.769.96 3.78 1.47 5.864 1.47h.005c6.585 0 11.94-5.34 11.94-11.94 0-3.195-1.245-6.18-3.437-8.477zM12.045 21.84h-.005c-1.785 0-3.54-.48-5.085-1.395l-.36-.21-3.78.99.99-3.69-.24-.374a9.927 9.927 0 0 1-1.515-5.34c0-5.505 4.485-9.975 10.02-9.975 2.67 0 5.175 1.05 7.05 2.925a9.932 9.932 0 0 1 2.925 7.05c-.015 5.505-4.5 9.975-10.005 9.975z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-guide"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
              Popular Tours
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/destinations/nepal-tour-packages/everest-base-camp-trek"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Everest Base Camp Trek
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/japan-tour-packages"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Japan Highlights
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/dubai-tour-packages/highlights-of-dubai-tour-5-days"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Dubai Highlights Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/georgia-tour-packages"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Georgia Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/nepal-tour-packages/short-nepal-tour-package"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Short Nepal Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={getTelUrl(siteConfig.phone)}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={getMailtoUrl(siteConfig.email)}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
