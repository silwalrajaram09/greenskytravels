import { siteConfig } from "@/lib/config/site";

const faqs = [
  {
    question: "How do I book a tour package?",
    answer:
      "You can book directly through our website by clicking 'Request This Tour' on any package page, or by contacting our team via phone, WhatsApp, or email. Our travel experts will confirm availability and guide you through the booking process within 24 hours.",
  },
  {
    question: "Can I customize a tour package?",
    answer:
      "Absolutely! Every Green Sky Travels package can be tailored to your preferences — change the duration, add destinations, adjust accommodation, or include extra activities. Contact us with your requirements and we'll craft the perfect itinerary for you.",
  },
  {
    question: "What is included in the tour price?",
    answer:
      "Each package page lists exactly what's included and excluded. In general, our packages include accommodation, transportation, guided tours, and select meals as specified. Details vary by package, so please review the 'What's Included' section on each tour page.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes. Green Sky Travels offers expert visa assistance for the UAE and international destinations. Our documentation team handles the entire process, ensuring your applications are accurate and compliant with the latest regulations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit/debit cards, and cash. Once your booking is confirmed, our team will provide you with secure payment instructions. A deposit is typically required to secure your reservation.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation policies vary by package and booking date. Please contact our team for the specific policy applicable to your booking. We always aim to be flexible and accommodate changes wherever possible.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Travel insurance is not included in our package prices but is strongly recommended, especially for adventure treks and high-altitude activities. We can help you arrange suitable coverage if needed.",
  },
  {
    question: "How do I contact you for support during my trip?",
    answer: `Our team is available 24/7 to assist you. You can reach us by phone at ${siteConfig.phone} or ${siteConfig.whatsappDisplay}, or by email at ${siteConfig.email}.`,
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#092f42] py-16 text-center text-white">
        <p className="font-serif text-lg font-semibold text-[#7fba5d]">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold md:text-5xl">FAQs</h1>
        <p className="mx-auto mt-5 max-w-2xl px-4 text-gray-300">
          We understand that planning your next adventure may come with
          questions. Here, we&rsquo;ve compiled answers to the most common
          queries to make your experience with Green Sky Travels as seamless as
          possible.
        </p>
      </section>

      {/* FAQ List */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-serif text-lg font-semibold text-[#092f42]">
                {faq.question}
                <span className="text-[#61a447] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl bg-[#61a447] p-8 text-center text-white">
          <h2 className="font-serif text-2xl font-bold">
            Still have questions?
          </h2>
          <p className="mt-2 text-emerald-50">
            Our team is here to help. Reach out to us anytime.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-[#61a447] transition-colors hover:bg-emerald-50"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
