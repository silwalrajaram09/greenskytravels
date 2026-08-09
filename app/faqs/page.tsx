export default function FAQPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-left">
          <span className="font-serif text-xl font-semibold text-[#61a447]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <div className="mt-3 h-[2px] w-16 bg-red-500" />

          <h1 className="mt-5 font-serif text-3xl font-bold text-[#092f42] md:text-3xl">
            FAQs
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600">
            We understand that planning your next adventure may come with
            questions. Here, we’ve compiled answers to the most common queries
            to make your experience with Green Sky Travels as seamless as
            possible. If you have additional questions, feel free to contact
            us directly.
          </p>
        </div>
      </section>
    </main>
  );
}