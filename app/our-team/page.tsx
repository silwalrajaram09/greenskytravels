import Link from "next/link";
import { Users, Target, Heart, Mail, Phone } from "lucide-react";

import TeamTabs from "./TeamTabs";

export const metadata = {
  title: "Meet the Team | Green Sky Travels Experts",
  description: "Get to know the passionate and experienced team behind Green Sky Travels. Meet the travel experts who make your adventures extraordinary.",
};

export default function OurTeamPage() {
  return (
    <div className="bg-white min-h-screen  ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-justify ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet Our <span className="text-primary">Expert Team</span>
        </h1>
        <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />

            <span className="h-[3px] w-4 bg-red-500" />
          </div>
        <p className="text-lg text-gray-600  leading-relaxed">
          At Green Sky Travels, our team is the heart of what we do. With a shared passion for travel and a commitment to excellence, our professionals work tirelessly to create unforgettable experiences for our clients. From local experts in Dubai and Abu Dhabi to global travel specialists, each member brings their unique expertise to ensure your journey is seamless and memorable.
        </p>
        <span className="text-2xl font-bold text-gray-900 my-6">Why Choose Us?</span>
        <ul className="list-disc list-inside space-y-2 text-gray-600  leading-relaxed">
          <li>Passion for Travel: Every team member is a travel enthusiast, committed to making your journey exceptional.</li>
          <li>Expert Knowledge: With years of experience, our team brings unmatched expertise to the table.</li>
          <li>Personalized Service: We focus on understanding your needs and preferences to create tailored travel experiences.</li>
        </ul>
        <span className="text-2xl font-bold text-gray-900 my-6">Join The Green Sky Travels Family</span>
        <p className="text-lg text-gray-600  leading-relaxed">When you travel with Green Sky Travels, you’re not just a client-you’re part of our family. Our team is dedicated to turning your travel dreams into reality and ensuring that every trip is filled with joy, discovery, and unforgettable memories.</p>
        <div className="flex flex-row space-x-4 mt-8">
          <a href="mailto:[EMAIL_ADDRESS]" className="flex items-center space-x-2 text-primary hover:underline font-semibold">
            <Mail className="w-5 h-5" />
            <span>info@greenskytravel.com</span>
          </a>
          <a href="tel:+971502374555" className="flex items-center space-x-2 text-primary hover:underline font-semibold">
            <Phone className="w-5 h-5" />
            <span>+971 50 237 4555</span>
          </a>
        </div>

      </div>
      

      {/* Team Members Tabs and Grid */}
      <TeamTabs />

      {/* Why Choose Us */}
      <div className="bg-white py-16 mb-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion for Travel</h3>
              <p className="text-gray-600">
                Every team member is a travel enthusiast, committed to making your journey exceptional.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                With years of experience, our team brings unmatched expertise to the table.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We focus on understanding your needs and preferences to create tailored travel experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Family */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-green-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Join the Green Sky Travels Family</h2>
          <p className="text-green-50 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            When you travel with Green Sky Travels, you’re not just a client—you’re part of our family. Our team is dedicated to turning your travel dreams into reality and ensuring that every trip is filled with joy, discovery, and unforgettable memories.
          </p>
          <Link href="/contact" className="inline-block bg-white text-green-900 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
