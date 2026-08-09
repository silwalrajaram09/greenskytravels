const reviews = [
  {
    initial: "B",
    name: "Bishnu Pokhrel",
    location: "Kathmandu, Nepal",
    date: "Sep 2024",
    title: "Reliable and Affordable Travel Services",
    text: "Booked a trip through Green Sky Travels and the whole experience was great. The team was professional, friendly, and helpful from start to finish, with good package prices and smooth arrangements throughout.",
    source: "TripAdvisor",
  },
  {
    initial: "T",
    name: "Tara R.",
    location: "Dubai, UAE",
    date: "Dec 2024",
    title: "Nice Travel Company in Dubai",
    text: "The staff were friendly and capable. Sightseeing, a desert safari, and a hike were all arranged well, and the guide was polite and attentive from beginning to end of the trip.",
    source: "TripAdvisor",
  },
  {
    initial: "S",
    name: "Sagar K.",
    location: "Dubai, UAE",
    date: "Jan 2025",
    title: "Highly Experienced Staff",
    text: "The staff were friendly and knowledgeable. A desert safari, a cruise, and sightseeing all went exactly as expected, and the whole trip is easy to recommend.",
    source: "TripAdvisor",
  },
];

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16">
        <div className="max-w-5xl px-2 pl-20">
          <h1 className="text-2xl font-bold mx-auto text-center text-black">
            Read Reviews
          </h1>
          <h2 className="text-black font-bold text-sm">
            Hear from Our Happy Travelers
          </h2>
          <p className="text-black">
            At Green Sky Travels, customer satisfaction is our top priority.
            We&rsquo;re proud to have served travelers from all over the
            world, creating unforgettable journeys and exceptional
            experiences. Here&rsquo;s what our clients have to say about
            their adventures with us.
          </p>
          <span className="text-black text-xl font-bold">
            Why traveller loves us?
          </span>
          <ul className="list-disc list-inside space-y-2 text-black">
            <li>
              <span className="font-bold text-l">Seamless planning: </span>
              From start to finish, we make travel effortless.
            </li>
            <li>
              <span className="font-bold text-l">Personalized Service: </span>
              Each trip is tailored to your unique preferences.
            </li>
            <li>
              <span className="font-bold text-l">Expert Guidance: </span>
              Our team&rsquo;s local and global expertise ensures
              unforgettable experiences.
            </li>
            <li>
              <span className="font-bold text-l">
                Customer-Centric Approach:{" "}
              </span>
              Your satisfaction is our priority.
            </li>
          </ul>
          <span className="text-black text-xl font-bold">
            Share your experience
          </span>
          <p className="text-black">
            Have you traveled with Green Sky Travels? We would love to hear
            about your journey! Share your testimonials and inspire others
            to embark on their next adventure with us.
          </p>
          <p className="text-black">
            Contact Us Today to plan your next trip and become part of the
            Green Sky Travels family.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-5xl px-2 pl-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-black font-bold text-xl">5.0</span>
            <span className="text-amber-500 text-sm">★★★★★</span>
            <span className="text-black text-sm">
              based on {reviews.length} verified reviews on TripAdvisor
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div
                key={review.title}
                className="border-t border-gray-200 pt-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-black font-bold text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {review.location} &middot; {review.date}
                    </p>
                  </div>
                </div>
                <h3 className="text-black font-bold text-lg mb-2">
                  {review.title}
                </h3>
                <p className="text-black text-sm mb-2">{review.text}</p>
                <p className="text-gray-400 text-xs">
                  Sourced from {review.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}