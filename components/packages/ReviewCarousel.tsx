"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  name: string;
  date: string;
  rating: number;
  title: string;
  review?: string;
  content?: string;
  platform?: "Tripadvisor" | "Google";
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getPlatformBadge = (platform?: string) => {
    if (platform === "Tripadvisor") {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="text-emerald-600">★</span> Tripadvisor
        </span>
      );
    }
    if (platform === "Google") {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <span className="text-blue-600">G</span> Google
        </span>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      {/* Rating Summary */}
      <div className="mb-6 flex items-center gap-8 rounded-xl bg-slate-50 p-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#020617]">
            {reviews.length > 0 
              ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
              : "5.0"}
          </div>
          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="text-xs text-slate-500">{reviews.length} reviews</div>
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-16 text-slate-500">5 star</span>
            <div className="h-1.5 flex-1 rounded-full bg-slate-200">
              <div className="h-1.5 w-4/5 rounded-full bg-amber-400" />
            </div>
            <span className="text-xs text-slate-500">80%</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-16 text-slate-500">4 star</span>
            <div className="h-1.5 flex-1 rounded-full bg-slate-200">
              <div className="h-1.5 w-1/5 rounded-full bg-amber-400" />
            </div>
            <span className="text-xs text-slate-500">20%</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => {
            const reviewContent = review.content ?? review.review ?? "";

            return (
            <div key={index} className="w-full flex-shrink-0 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#020617]">{review.name}</h4>
                      <p className="text-xs text-slate-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    {getPlatformBadge(review.platform)}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-slate-200" />
              </div>

              <h5 className="mt-4 font-semibold text-[#020617]">{review.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {expandedIndex === index
                  ? reviewContent
                  : `${reviewContent.slice(0, 120)}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                {expandedIndex === index ? "Read less -" : "Read more +"}
              </button>
            </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        {reviews.length > 1 && (
          <>
            <button
              onClick={prevReview}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-4 bg-emerald-600"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}