import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Star } from "lucide-react";
import { getHomepageReviews } from "@/lib/content/review";

const stars = Array.from({ length: 5 });

function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {stars.map((_, index) => (
        <Star key={index} className={`${size} ${index < rating ? "fill-[#f4bf12] text-[#f4bf12]" : "text-[#dce7d9]"}`} />
      ))}
    </span>
  );
}

export default async function GoogleReviews() {
  const reviews = await getHomepageReviews();
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : "5.0";
  const fiveStarCount = reviews.filter((review) => review.rating === 5).length;
  const fiveStarPercent = reviews.length ? Math.round((fiveStarCount / reviews.length) * 100) : 100;

  return (
    <main className="bg-[#f7faf5] text-[#173c1c]">
      <section className="relative overflow-hidden bg-[#eef8e9]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-[#dcefd3] opacity-70" />
        <div className="absolute bottom-0 left-0 hidden h-full w-[13%] bg-[#63ab43] [clip-path:polygon(0_0,100%_0,58%_50%,100%_100%,0_100%,42%_50%)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-24">
          <div className="lg:pl-12">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#5a9b42]"><span className="h-0.5 w-12 bg-[#d47f80]" /> Traveler stories</div>
            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.03] tracking-tight text-[#123516] sm:text-6xl">
              Real journeys.<br />
              <span className="text-[#63a844]">Real words.</span>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#647264] sm:text-xl">
              The best part of travel is coming home with stories worth sharing. See why travelers trust Green Sky Travel to make every journey feel effortless.
            </p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="#reviews" className="inline-flex items-center gap-2 rounded-md bg-[#62ad43] px-6 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#4d9635]">Read traveler reviews <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="inline-flex items-center rounded-md border border-[#b7d3ac] bg-white/60 px-6 py-3.5 font-serif font-bold text-[#315d2c] transition-colors hover:bg-white">Plan your journey</Link></div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-serif text-sm text-[#587057]"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#62ad43]" /> Verified Google feedback</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#62ad43]" /> 100% traveler focused</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-3 rotate-3 rounded-2xl bg-[#cfe8c5]" /><div className="relative rounded-2xl bg-white p-7 shadow-[0_18px_50px_rgba(42,76,38,0.12)] sm:p-9"><div className="flex items-center justify-between"><div><p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#81917f]">Google rating</p><div className="mt-3 flex items-end gap-3"><span className="font-serif text-6xl font-bold leading-none text-[#173c1c]">{average}</span><div className="pb-1"><Stars rating={5} size="h-5 w-5" /><p className="mt-1 font-sans text-xs text-[#81917f]">Based on recent feedback</p></div></div></div><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f8ef] text-3xl font-bold text-[#4285f4]">G</div></div><div className="my-7 h-px bg-[#edf2ea]" /><div className="space-y-3 font-sans text-sm"><div className="flex items-center gap-3"><span className="w-12 text-[#71806f]">5 star</span><div className="h-2 flex-1 rounded-full bg-[#edf2ea]"><div className="h-2 rounded-full bg-[#f4bf12]" style={{ width: `${fiveStarPercent}%` }} /></div><span className="w-10 text-right text-[#71806f]">{fiveStarPercent}%</span></div><div className="flex items-center gap-3"><span className="w-12 text-[#71806f]">4 star</span><div className="h-2 flex-1 rounded-full bg-[#edf2ea]"><div className="h-2 w-[4%] rounded-full bg-[#f4bf12]" /></div><span className="w-10 text-right text-[#71806f]">{100 - fiveStarPercent}%</span></div></div><div className="mt-7 flex items-center justify-between rounded-lg bg-[#f7faf5] px-4 py-3"><span className="font-sans text-sm text-[#647264]">Positive experiences</span><span className="font-serif text-lg font-bold text-[#4e9537]">{reviews.length}+ stories</span></div></div></div>
        </div>
      </section>

      <section className="border-b border-[#e6eee2] bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e6eee2] px-5 sm:grid-cols-4 sm:px-8 lg:px-12"><div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-2xl font-bold text-[#173c1c] sm:text-3xl">{average}/5</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Average rating</p></div><div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-2xl font-bold text-[#173c1c] sm:text-3xl">{reviews.length}+</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Published reviews</p></div><div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-2xl font-bold text-[#173c1c] sm:text-3xl">5 star</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Most common rating</p></div><div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-2xl font-bold text-[#173c1c] sm:text-3xl">100%</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Personal service</p></div></div></section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">From our travelers</span><h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#173c1c] sm:text-5xl">Kind words, shared freely.</h2></div><p className="max-w-sm font-serif text-base leading-relaxed text-[#647264] sm:text-right">Every review is a reminder of why we do what we do: creating journeys people remember.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{reviews.map((review, index) => <article key={review.id} className="group flex min-h-[300px] flex-col rounded-xl border border-[#e2ecdf] bg-white p-7 shadow-[0_8px_24px_rgba(42,76,38,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(42,76,38,0.1)]"><div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f5f5] font-serif text-xl font-bold text-[#66ae48]">{review.name.charAt(0).toUpperCase()}</div><div><h3 className="font-serif text-lg font-bold text-[#244622]">{review.name}</h3><p className="font-sans text-xs text-[#81917f]">{review.date}</p></div></div><span className="font-serif text-4xl leading-none text-[#dcefd3]">&ldquo;</span></div><div className="mt-5"><Stars rating={review.rating} /></div><h4 className="mt-4 font-serif text-xl font-bold leading-tight text-[#244622]">{review.title}</h4><p className="mt-3 font-serif text-base leading-relaxed text-[#647264]">{review.content}</p><div className="mt-auto flex items-center justify-between pt-6"><span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#9aaa98]">Google review {index + 1}</span><Link href={review.link} target="_blank" rel="noreferrer" aria-label={`View ${review.name}'s review on Google`} className="text-[#62ad43] opacity-0 transition-opacity group-hover:opacity-100"><ExternalLink className="h-4 w-4" /></Link></div></article>)}</div></section>

      <section className="bg-[#173c1c] px-5 py-14 sm:px-8"><div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left"><div><p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#a8d997]">Your next story starts here</p><h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Ready to make your own memories?</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#62ad43] px-7 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#78bd5a]">Talk to our team <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
