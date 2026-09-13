"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { useState } from "react";
import { Star } from "lucide-react";
import type { HomepageReview } from "@/lib/content/review";

interface HomeReviewsProps { reviews: HomepageReview[]; }
const stars = Array.from({ length: 5 });

function PlatformMark({ platform }: { platform: HomepageReview["platform"] | "Tripadvisor" }) {
  if (platform === "Google") return <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.7rem] font-bold tracking-tight shadow-sm"><span className="bg-gradient-to-br from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span></span>;
  return <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16d394] text-lg font-black text-white">◉</span>;
}

export default function HomeReviews({ reviews }: HomeReviewsProps) {
  const [page, setPage] = useState(0);
  const pageSize = 2;
  const pageCount = Math.max(1, Math.ceil(reviews.length / pageSize));
  const visibleReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : "5.0";
  const previous = () => setPage((current) => (current - 1 + pageCount) % pageCount);
  const next = () => setPage((current) => (current + 1) % pageCount);

  return (
    <section className="relative overflow-hidden bg-[#eef8e9] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-y-0 left-0 hidden w-[11%] bg-[#63ab43] [clip-path:polygon(0_0,100%_0,52%_50%,100%_100%,0_100%,48%_50%)] lg:block" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center lg:gap-16 lg:px-12">
        <div className="max-w-xl lg:pl-12">
          <span className="mb-5 block h-0.5 w-16 bg-[#d47f80]" />
          <h2 className="max-w-md font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#123516] sm:text-5xl">Don&apos;t just take our word for it</h2>
          <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-[#647264] sm:text-xl">Discover what hundreds of fellow travelers are saying about their experiences with {siteConfig.shortName} Travel.</p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <div className="flex items-center gap-3"><PlatformMark platform="Tripadvisor" /><div><p className="font-serif text-lg font-bold text-[#264b27]">Tripadvisor</p><div className="flex items-center gap-1.5"><span className="font-serif text-lg font-bold text-[#264b27]">4.8</span><div className="flex gap-0.5 text-[#36aa79]">{stars.map((_, index) => <span key={index}>●</span>)}</div></div></div></div>
            <div className="flex items-center gap-3"><PlatformMark platform="Google" /><div><p className="font-serif text-lg font-bold text-[#264b27]">Google</p><div className="flex items-center gap-1.5"><span className="font-serif text-lg font-bold text-[#264b27]">{average}</span><div className="flex gap-0.5 text-[#f1bd16]">{stars.map((_, index) => <span key={index}>★</span>)}</div></div></div></div>
          </div>
          <Link href="/review" className="mt-9 flex h-14 w-full max-w-md items-center justify-center rounded-md bg-[#62ad43] px-6 font-serif text-lg font-bold text-white transition-colors hover:bg-[#4d9635]">Read All Review</Link>
        </div>
        <div className="min-w-0">
          <div className="mb-5 flex items-center justify-end gap-3 font-serif text-lg font-bold text-[#254b28]"><button type="button" onClick={previous} aria-label="Previous reviews" className="text-[#9bc78b] transition-colors hover:text-[#4f9b37]">◀ <span className="hidden sm:inline">Prev</span></button><span className="text-[#c7d3c5]">|</span><button type="button" onClick={next} aria-label="Next reviews" className="transition-colors hover:text-[#4f9b37]"><span className="hidden sm:inline">Next</span> ▶</button></div>
          <div className="grid gap-6 md:grid-cols-2">
            {visibleReviews.map((review) => <article key={review.id} className="flex min-h-[266px] flex-col bg-white p-7 shadow-[0_8px_22px_rgba(42,76,38,0.04)] sm:p-8"><div className="flex items-start gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f5f5] font-serif text-xl font-bold text-[#66ae48]">{review.name.charAt(0).toUpperCase()}</div><div><h3 className="font-serif text-lg font-bold text-[#244622]">{review.name}</h3><p className="font-serif text-sm text-[#68736b]">{review.date}</p></div></div><div className="mt-5 flex gap-1">{stars.map((_, index) => <Star key={index} className={`h-4 w-4 ${index < review.rating ? "fill-[#f4bf12] text-[#f4bf12]" : "text-[#dfe6dc]"}`} />)}</div><h4 className="mt-3 font-serif text-xl font-bold leading-tight text-[#244622]">{review.title}</h4><Link href={review.link} target="_blank" rel="noreferrer" className="mt-auto pt-6 font-serif text-base font-bold text-[#6ba454] underline decoration-1 underline-offset-2 hover:text-[#3f7e32]">Read more +</Link></article>)}
          </div>
          {pageCount > 1 && <div className="mt-5 flex justify-center gap-2 md:hidden">{Array.from({ length: pageCount }).map((_, index) => <button key={index} type="button" aria-label={`Show review page ${index + 1}`} onClick={() => setPage(index)} className={`h-2 rounded-full transition-all ${index === page ? "w-7 bg-[#62ad43]" : "w-2 bg-[#bad6b1]"}`} />)}</div>}
        </div>
      </div>
    </section>
  );
}
