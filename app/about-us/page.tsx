import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Banner Section */}
      <section className="relative h-[30vh] min-h-[250px] w-full overflow-hidden after:absolute after:inset-0 after:bg-black/25 after:z-10">
        <Image
          src="https://fis-api.greenskytravels.com/media/page/banner/about-us.jpg"
          alt="About Us Banner"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* <Breadcrumbs /> */}

      <div className="container mx-auto px-4 py-8 lg:w-9/12">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About us
          </h1>
          <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-4 bg-red-500" />
          </div>
        </div>

        <article className="prose prose-slate max-w-none text-slate-700">
          <p>
            Welcome to <strong>Green Sky Travels</strong>, the trusted brand
            name of Green Sky Travel and Tourism LLC. Based in Dubai, United
            Arab Emirates, and registered in both Dubai and Abu Dhabi, we are a
            leading travel and tour company dedicated to creating exceptional
            travel experiences for individuals, families, and groups from all
            over the world.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Who We Are
          </h3>
          <p>
            As a Dubai-based local tour operator, Green Sky Travels takes pride
            in our deep-rooted knowledge of the UAE. Our expertise extends
            beyond the borders of the Emirates, offering personalized holiday
            packages to some of the most sought-after destinations worldwide.
            From the shimmering sands of Dubai&apos;s deserts to the pristine
            beaches of the Maldives and the historic wonders of Europe, we are
            committed to turning your travel dreams into reality.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            What We Offer
          </h3>
          <p>
            At Green Sky Travels, we provide a comprehensive range of services
            to ensure a seamless and memorable journey:
          </p>

          <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">
            UAE Tour Packages:
          </h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Dubai Tour Packages</strong>
            </li>
            <li>
              <strong>Abu Dhabi Tours</strong>
            </li>
            <li>
              <strong>Adventure Tours in the UAE</strong>
            </li>
            <li>
              <strong>Luxury Tours in Dubai and Beyond</strong>
            </li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">
            Worldwide Holiday Packages:
          </h4>
          <p>We specialize in creating tailored travel packages for:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Asia:</strong> Nepal, India, Bhutan, Sri Lanka, Maldives,
              Thailand, Malaysia, and more.
            </li>
            <li>
              <strong>Europe:</strong> Unforgettable tours across all European
              countries.
            </li>
            <li>
              <strong>Africa:</strong> Kenya, Tanzania, Rwanda, and beyond.
            </li>
            <li>
              <strong>Americas:</strong> Iconic destinations in North and South
              America.
            </li>
            <li>
              <strong>Middle East:</strong> Explore the rich culture of Armenia,
              Azerbaijan, Georgia, and others.
            </li>
            <li>
              <strong>Oceania:</strong> Australia, New Zealand, and nearby
              islands.
            </li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">
            Visa Assistance Services:
          </h4>
          <p>
            Our dedicated team offers expert assistance in obtaining visas for
            the UAE and international destinations, ensuring a hassle-free
            travel experience for both residents of the UAE and global
            travelers.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Why Choose us?
          </h3>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Local Expertise:</strong> With a strong presence in Dubai
              and Abu Dhabi, we offer unparalleled insights into UAE tourism.
            </li>
            <li>
              <strong>Global Reach:</strong> From Middle Eastern destinations to
              Europe, Asia, Africa, and beyond, our packages cover a vast range
              of travel interests.
            </li>
            <li>
              <strong>Personalized Service:</strong> We tailor every package to
              suit your preferences, ensuring a unique and unforgettable
              journey.
            </li>
            <li>
              <strong>Comprehensive Travel Solutions:</strong> From visa
              processing to tour planning, we handle every detail so you can
              travel stress-free.
            </li>
          </ol>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Our Mission
          </h3>
          <p>
            At Green Sky Travels, our mission is to inspire, connect, and
            deliver exceptional travel experiences. We strive to combine
            professionalism with passion, offering unparalleled service to every
            client.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Our Vision
          </h3>
          <p>
            We envision becoming the leading tour operator in the UAE and a
            globally recognized name for exceptional travel services. Our goal
            is to consistently exceed expectations by providing innovative and
            sustainable travel solutions.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Let&apos;s Plan Your Next Adventure
          </h3>
          <p>
            Discover the world with Green Sky Travels. Whether you&apos;re
            exploring the vibrant cities of the UAE or embarking on an
            international journey, we are here to guide you every step of the
            way. Experience the difference with a team that genuinely cares
            about your travel aspirations.
          </p>
          <p className="mt-4">
            Contact us today to start planning your next adventure. Your journey
            begins here.
          </p>
        </article>
      </div>
    </div>
  );
}
