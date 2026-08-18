import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, User, Globe } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

import blogData from "@/lib/data/travel-guide/blog.json";

export default function TravelGuidePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
   {/* <Breadcrumbs /> */}

      <div className="container mx-auto px-4 py-8 lg:w-9/12">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Travel Guide
          </h1>
        </div>

        <article className="prose prose-slate max-w-none mb-12 text-slate-700">
          <p className="font-bold text-slate-900">Welcome to the Green Sky Travels Blog</p>
          <p>
            Your ultimate travel inspiration hub is here! The Green Sky Travels
            Blog is dedicated to helping you explore the world with curated
            travel insights, expert tips, and detailed guides. Whether you&apos;re
            planning a trip within the UAE or dreaming of an exotic getaway, our
            blog has everything you need to make your journey unforgettable.
          </p>
          <p className="mt-6 font-bold text-slate-900">Explore Our Blog Categories</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Dubai and UAE Travel</li>
            <li>Worldwide Destinations</li>
            <li>Travel Tips and Tricks</li>
            <li>How to Pack Smart for Your Next Adventure</li>
            <li>Visa Assistance Tips</li>
            <li>Budget Travel Hacks for Luxury Experiences</li>
            <li>Cultural Insights and more</li>
          </ul>
          <p className="mt-6">
            Navigate the world of travel effortlessly with our practical advice
            and insider tips. From packing hacks to visa application guides,
            make your trips stress-free and enjoyable.
          </p>
          <p className="mt-6 font-bold text-slate-900">Why Read Our Blog?</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Expert Insights</li>
            <li>Comprehensive Guides</li>
            <li>Inspiration for All Travelers</li>
            <li>Stay Updated</li>
            <li>Featured Blogs</li>
          </ul>
          <p className="mt-6">
            <strong className="font-bold text-slate-900">
              Visa Tips for Travelers
            </strong>
            <br />
            Learn how to navigate the visa process for popular travel
            destinations.
          </p>
          <p className="mt-6">
            <strong className="font-bold text-slate-900">
              Join the Green Sky Travels Community
            </strong>
            <br />
            We invite you to share your travel stories and experiences with us.
            Comment on our blogs, share your favorite articles, and inspire
            others to explore the world.
          </p>
          <p className="mt-6">
            Ready to plan your next adventure? Browse our blog and let Green Sky
            Travels guide you every step of the way!
          </p>
        </article>

        <div className="border-t border-slate-200 pt-6 mb-8">
          <h4 className="text-[1.125rem] mb-4 font-bold text-emerald-600 uppercase flex items-center">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Sort By Category
          </h4>
          <ul className="flex flex-wrap gap-3">
            {[
              "Dubai & UAE Travel Insights",
              "Nepal Travel Hacks",
              "Everything You Should Know About Georgia",
              "Travel Blogs about Turkey",
              "Bhutan Travel Guide",
            ].map((category) => (
              <li key={category}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <label
                    className="ms-2 text-sm font-medium text-slate-700"
                    htmlFor={category}
                  >
                    {category}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <button className="text-xs shadow bg-emerald-600 hover:bg-emerald-700 transition-colors px-4 py-1.5 text-white rounded-md uppercase font-bold inline-block">
              + more
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {blogData.blog.map((post: any, index: number) => {
            const dateParts = post.date ? post.date.split(" ") : ["01", "Jan"];
            const day = dateParts[0];
            const month = dateParts.length > 1 ? dateParts[1].replace(",", "") : "Jan";
            const category = post.category || "Travel Guide";
            const image = post.image || "/images/placeholder.jpg";
            const href = post.slug.startsWith('/') ? post.slug : `/travel-guide/${post.slug}`;

            return (
              <div
                key={post.slug || index}
                className="group rounded-xl overflow-hidden bg-white border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <figure className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <Link href={href}>
                    {post.image ? (
                      <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </Link>
                  <div className="bg-white absolute top-4 left-4 z-10 font-bold text-sm text-center rounded overflow-hidden shadow-sm">
                    <span className="bg-emerald-600 text-white px-3 py-1 block">
                      {day}
                    </span>
                    <span className="text-xs py-1 block px-3">
                      {month}
                    </span>
                  </div>
                </figure>
                <figcaption className="p-5">
                  <h3 className="text-[1.125rem] font-bold text-slate-900 leading-tight mb-4 line-clamp-2">
                    <Link
                      href={href}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <ul className="flex items-center flex-wrap gap-4 font-medium text-xs text-slate-500">
                    <li>
                      <Link
                        href={`/author/${post.author.toLowerCase().replace(/ /g, '-')}`}
                        className="hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <User className="h-4 w-4" />
                        {post.author}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        {category}
                      </Link>
                    </li>
                  </ul>
                </figcaption>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="text-base font-bold rounded-lg px-6 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
