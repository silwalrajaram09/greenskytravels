"use client";
import { div } from "framer-motion/client";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const REVIEWS = [
  {
    initial: "L",
    name: "Liam Andersen",
    date: "6th Feb, 2025",
    title: "Perfect Blend of Luxury and Adventure",
    slug: "perfect-blend-of-luxury-and-adventure",
    excerpt:
      "From the thrilling desert safari to the luxury of Dubai Marina, Green Sky Travels curated an exceptional experience. The guide's storytelling and the driver's impeccable service made every moment unforgettable. A big thank you to the entire team!",
  },
  {
    initial: "L",
    name: "Lucas Garcia",
    date: "4th Feb, 2025",
    title: "Simply Paradise",
    slug: "simply-paradise",
    excerpt:
      "The Seychelles tour was everything I imagined and more! The crystal-clear waters and stunning beaches were beyond beautiful. Green Sky Travels organized everything perfectly. The whole experience was seamless, and I felt completely taken care of.",
  },
  {
    initial: "O",
    name: "Oliver Grant",
    date: "20th Jan, 2025",
    title: "An Exceptional Luxury Tour!",
    slug: "an-exceptional-luxury-tour",
    excerpt:
      "Green Sky Travels exceeded our expectations! From the Burj Al Arab's grandeur to the smooth desert safari, everything was perfect. Special thanks to our guide, Layla, for her warmth and our driver, Hassan, for his impeccable driving",
  },
  {
    initial: "E",
    name: "Emma Johnson",
    date: "15th Jan, 2025",
    title: "An Unforgettable Experience",
    slug: "an-unforgettable-experience",
    excerpt:
      "What an incredible experience! The Short & Sweet Seychelles Escape exceeded my expectations in every way. The crystal-clear waters, lush greenery, and private tours were the highlights. Green Sky Travels made everything so easy, and I felt well taken care of.",
  },
  {
    initial: "C",
    name: "Charlotte Walker",
    date: "6th Jan, 2025",
    title: "A Truly Mesmerizing Dubai Experience",
    slug: "a-truly-mesmerizing-dubai-experience",
    excerpt:
      "The Highlights of Dubai Tour exceeded all expectations! From the stunning Burj Khalifa views to the magical Dubai Fountain, every stop was perfectly organized. Our guide's in-depth knowledge made the experience rich and engaging, and the driver ensured smooth and timely travel. A wonderful team effort",
  },
  {
    initial: "J",
    name: "Jack Spencer",
    date: "5th Jan, 2025",
    title: "Unparalleled Service!",
    slug: "unparalleled-service",
    excerpt:
      "I couldn't have asked for a better Dubai tour! The team at Green Sky Travels was incredibly organized. Ahmed, our guide, was fantastic, and our driver ensured every trip was relaxing. Highly recommended!",
  },
];

const INITIAL_VISIBLE = 6;

export default function ReviewPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const hasMore = visibleCount < REVIEWS.length;

  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="py-1  mx-auto max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        <div className="justify-start">
          <h1 className="text-2xl font-bold text-[#092f42]">Read Reviews</h1>

          <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />

            <span className="h-[3px] w-4 bg-red-500" />
          </div>
          <p className="py-2 text-[#092f42] text-base">
            At Green Sky Travels, customer satisfaction is our top priority.
            We’re proud to have served travelers from all over the world,
            creating unforgettable journeys and exceptional experiences. Here’s
            what our clients have to say about their adventures with us.
          </p>

          <span className="text-xl font-semibold font-serif">
            Why Travelers Love Us
          </span>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className=" h-3 w-3 shrink-0 rounded-full border-[3px] border-[#61a447]" />
              <p className="text-l  text-[#092f42]">
                <strong>Seamless Planning:</strong> From start to finish, we
                make travel effortless.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className=" h-3 w-3 shrink-0 rounded-full border-[3px] border-[#61a447]" />
              <p className="text-l  text-[#092f42]">
                <strong>Personalized Service:</strong> Each trip is tailored to
                your unique preferences.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className=" h-3 w-3 shrink-0 rounded-full border-[3px] border-[#61a447]" />
              <p className="text-l  text-[#092f42]">
                <strong>Expert Guidance:</strong> Our team’s local and global
                expertise ensures unforgettable experiences.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="h-3 w-3 shrink-0 rounded-full border-[3px] border-[#61a447]" />
              <p className="text-l text-[#092f42]">
                <strong>Customer-Centric Approach:</strong> Your satisfaction is
                our priority.
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          {REVIEWS.slice(0, visibleCount).map((review) => (
            <div
              key={review.slug}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
            >
              <div className="col-span-1">
                <h2 className="text-2xl font-bold">{review.name}</h2>
                <p className="text-sm text-muted">{review.date}</p>
              </div>
              <div className="col-span-2">
                <p className="text-base text-muted">{review.excerpt}</p>
              </div>
            </div>
          ))}
          {hasMore && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-300 text-sm font-medium shadow-lg"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
