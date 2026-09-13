import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { getWhatsAppUrl, siteConfig } from "@/lib/config/site";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BLCvezQjh/?mibextid=LQQJ4d",
    icon: FaFacebook,
    color: "bg-[#1877f2]",
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaTwitter,
    color: "bg-[#1da1f2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/greenskytravels?igsh=MXdhdWlrMXI4MTJ2cQ==",
    icon: FaInstagram,
    color: "bg-[#e4405f]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/green-sky-travels/",
    icon: FaLinkedin,
    color: "bg-[#0a66c2]",
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
    color: "bg-[#cd201f]",
  },
  {
    label: "Pinterest",
    href: "https://pin.it/3PBXYc0el",
    icon: FaPinterest,
    color: "bg-[#bd081c]",
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
    color: "bg-black",
  },
];

const enquiryFields = [
  { label: "Full name", placeholder: "Your full name", type: "text" },
  { label: "Email address", placeholder: "you@example.com", type: "email" },
  { label: "Travellers", placeholder: "Number of travellers", type: "number" },
];

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Green Sky Travels! I would like help planning my next trip.",
  );

  return (
    <main className="min-h-screen bg-[#f7faf8] text-[#092f42]">
      <section className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            {/* <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#61a447]">
              <span className="h-px w-10 bg-[#61a447]" />
              Green Sky Travels
            </p> */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#092f42] sm:text-5xl lg:text-6xl">
              Let&apos;s plan a journey you&apos;ll remember.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Tell us where you want to go, and our travel specialists will take care of the details—from tours and visas to flights and custom itineraries.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-[#f7faf8] p-5 shadow-sm sm:p-7" aria-label="Travel route illustration">
            <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-[#eaf5e6]" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#61a447]">Your journey</p>
                  <p className="mt-1 text-lg font-bold text-[#092f42]">Starts with a conversation</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-hidden="true">✈</span>
              </div>

              <div className="relative mt-8 h-36">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 145" fill="none" aria-hidden="true">
                  <path d="M34 108C90 18 154 22 191 73C227 122 278 125 328 43" stroke="#61a447" strokeWidth="2.5" strokeDasharray="7 8" />
                  <path d="M34 108C90 18 154 22 191 73C227 122 278 125 328 43" stroke="#61a447" strokeOpacity=".12" strokeWidth="12" />
                </svg>
                <RouteStop className="absolute bottom-2 left-1" city="Dubai" country="UAE" active />
                <RouteStop className="absolute left-[43%] top-10" city="Nepal" country="Himalayas" />
                <RouteStop className="absolute right-0 top-0" city="Japan" country="Asia" />
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-500">
                <span>Custom tours</span>
                <span>Visas</span>
                <span>Flights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 md:grid-cols-3">
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            eyebrow="Visit us"
            title="Dubai office"
            detail={siteConfig.address}
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            eyebrow="Call us"
            title={siteConfig.phone}
            detail="Monday to Saturday · 9:00 AM – 7:00 PM"
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          />
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            eyebrow="Write to us"
            title={siteConfig.email}
            detail="We usually reply within one business day"
            href={`mailto:${siteConfig.email}`}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#61a447]">Start a conversation</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#092f42] sm:text-4xl">
            How can we help with your next trip?
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Share a few details and our team will get back to you with thoughtful recommendations. No pressure, no complicated booking process—just helpful travel advice.
          </p>

          <div className="mt-9 rounded-2xl bg-[#eaf5e6] p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#61a447] text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#092f42]">Need an instant answer?</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Our WhatsApp team can help with availability, visa questions, fares, and custom trips.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#4f8d39] hover:text-[#092f42]">
                  Message the team <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-7">
            <p className="text-sm font-bold text-[#092f42]">Follow our journeys</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:-translate-y-1 hover:shadow-lg ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#61a447]">Enquiry form</p>
              <h2 className="mt-2 text-2xl font-bold text-[#092f42]">Tell us about your plans</h2>
            </div>
            <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#eaf5e6] text-[#61a447] sm:flex">
              <Send className="h-5 w-5" />
            </div>
          </div>
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {enquiryFields.slice(0, 2).map((field) => (
                <label key={field.label} className="block">
                  <span className="text-sm font-bold text-slate-700">{field.label} <span className="text-[#61a447]">*</span></span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10"
                  />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Number of travellers <span className="text-[#61a447]">*</span></span>
              <input
                type="number"
                min="1"
                placeholder="How many people are travelling?"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">How can we help? <span className="text-[#61a447]">*</span></span>
              <textarea
                rows={6}
                placeholder="Tell us your destination, dates, or what you need help with..."
                required
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10"
              />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#61a447] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#61a447]/15 transition hover:bg-[#4f8d39] active:scale-[0.99]">
              Send enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs leading-5 text-slate-400">Your details are used only to respond to your enquiry.</p>
          </form>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white pt-4">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#61a447]">Find us in Dubai</p>
              <h2 className="mt-2 text-2xl font-bold text-[#092f42]">Come say hello</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">{siteConfig.address}</p>
          </div>
          <div className="h-[360px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:h-[430px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.248679781636!2d55.288695676529045!3d25.26221867766913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43d74724c093%3A0x88a17c8213c7a3d9!2sGreen%20Sky%20Travels!5e0!3m2!1sen!2snp!4v1742124155703!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Sky Travels Dubai office map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function RouteStop({
  city,
  country,
  active = false,
  className,
}: {
  city: string;
  country: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className={`flex h-7 w-7 items-center justify-center rounded-full border-4 border-white shadow-sm ${active ? "bg-[#61a447]" : "bg-[#092f42]"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      <span className="rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
        <span className="block text-xs font-bold text-[#092f42]">{city}</span>
        <span className="block text-[10px] font-medium text-slate-400">{country}</span>
      </span>
    </div>
  );
}

function ContactCard({
  icon,
  eyebrow,
  title,
  detail,
  href,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  detail: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5e6] text-[#61a447]">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{eyebrow}</p>
        <p className="mt-1 break-words font-bold text-[#092f42]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-500">{detail}</p>
      </div>
    </>
  );

  return href ? (
    <a href={href} className="flex gap-4 border-b border-slate-100 p-6 transition hover:bg-[#f7faf8] md:border-b-0 md:border-r">
      {content}
    </a>
  ) : (
    <div className="flex gap-4 border-b border-slate-100 p-6 md:border-b-0 md:border-r">{content}</div>
  );
}
