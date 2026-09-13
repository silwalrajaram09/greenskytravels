import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import DestinationCard from "@/components/ui/destination-card";
import PackageCard from "@/components/ui/package-card";
import {
  featuredPackages,
  popularDestinations,
  slugify,
} from "@/lib/content/catalog";
import HeroSection from "@/components/ui/herosection";
import HomeServiceCards from "@/components/services/HomeServiceCards";
import HomeGateway from "@/components/home/HomeGateway";
import HomeReviews from "@/components/home/HomeReviews";
import { getHomepageReviews } from "@/lib/content/review";
export default async function Home() {
  const homepageReviews = await getHomepageReviews();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Beautiful travel destination"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Discover Your Next <span className="text-primary">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Explore the world&rsquo;s most breathtaking destinations with
            Greensky Travels. Unforgettable experiences await you.
          </p>

         
          <div className="bg-white p-2 md:p-4 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 md:gap-4 max-w-4xl mx-auto">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 md:border-r border-gray-200 w-full">
              <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 md:border-r border-gray-200 w-full">
              <Calendar className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="When?"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <Users className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Guests"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
            <button className="bg-primary hover:bg-green-600 text-white p-4 md:px-8 rounded-full transition-colors w-full md:w-auto flex items-center justify-center gap-2 font-semibold shadow-lg shadow-green-500/30">
              <Search className="w-5 h-5" />
              <span className="md:hidden">Search</span>
            </button>
          </div>
        </div>
      </section> */}

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              From the highest peaks of Nepal to the ultra-modern skyline of
              Dubai, explore our most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {popularDestinations.map((dest, index) => (
              <div
                key={dest.slug}
                className={index % 2 === 1 ? "translate-y-11" : ""}
              >
                <DestinationCard
                  title={dest.name}
                  slug={dest.slug}
                  image={dest.image}
                  toursCount={dest.toursCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Gateway Section */}
      <HomeGateway />
      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className=" mb-4 block h-[1px] w-15 bg-[#c91c3c]" />

              <h2 className=" text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
                Our Services
              </h2>
              <p className="text-gray-500 max-w-2xl">
                From booking flights to arranging visas, we handle all your
                travel needs to ensure a smooth and hassle-free journey.
              </p>
            </div>
            <Link
              href="/services"
              className="text-primary font-semibold hover:text-green-700 flex items-center gap-1 group"
            >
              View All Services{" "}
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <HomeServiceCards />
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className=" mb-4 block h-[1px] w-15 bg-[#c91c3c]" />

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trending Packages
              </h2>
              <p className="text-gray-500 max-w-2xl">
                Carefully curated travel packages designed to give you the best
                experience for your time and budget.
              </p>
            </div>
            <Link
              href="/destinations"
              className="text-primary font-semibold hover:text-green-700 flex items-center gap-1 group"
            >
              View All Packages{" "}
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                title={pkg.title}
                image={pkg.image}
                duration={pkg.duration}
                groupSize="Flexible"
                price={pkg.price ?? ""}
                rating={pkg.rating}
                href={`/destinations/${slugify(pkg.destination)}/${pkg.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <HomeReviews reviews={homepageReviews} />
      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=2074&auto=format&fit=crop"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact our travel experts today and let us customize the perfect
            itinerary for your next adventure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-lg shadow-green-500/20"
          >
            Plan Your Trip Now
          </Link>
        </div>
      </section>
    </div>
  );
}
