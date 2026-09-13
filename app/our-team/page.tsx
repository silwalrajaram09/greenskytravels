import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Compass, Heart, Sparkles, Users } from "lucide-react";
import TeamTabs from "./TeamTabs";

export default function OurTeamPage() {
  return (
    <main className="bg-[#f7faf5] text-[#173c1c]">
      <section className="relative overflow-hidden bg-[#eef8e9]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[28px] border-[#dcefd3]" />
        <div className="absolute bottom-0 left-0 hidden h-full w-[13%] bg-[#63ab43] [clip-path:polygon(0_0,100%_0,58%_50%,100%_100%,0_100%,42%_50%)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-24">
          <div className="lg:pl-12">
            <div className="mb-6 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#5a9b42]"><span className="h-0.5 w-12 bg-[#d47f80]" /> The people behind the journeys</div>
            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.03] tracking-tight text-[#123516] sm:text-6xl">Meet the team<br /><span className="text-[#63a844]">behind Green Sky.</span></h1>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#647264] sm:text-xl">
              Travel feels different when it is planned by people who genuinely care. Our specialists bring local knowledge, thoughtful advice, and a personal touch to every itinerary.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#team"
                className="inline-flex items-center gap-2 rounded-md bg-[#62ad43] px-6 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#4d9635]"
              >
                Meet our people <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-[#b7d3ac] bg-white/60 px-6 py-3.5 font-serif font-bold text-[#315d2c] transition-colors hover:bg-white"
              >
                Talk to our team
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 -rotate-3 rounded-2xl bg-[#cfe8c5]" />
            <div className="relative overflow-hidden rounded-2xl bg-[#173c1c] p-8 shadow-[0_18px_50px_rgba(42,76,38,0.15)] sm:p-10">
              <Sparkles className="mb-14 h-9 w-9 text-[#a8d997]" />
              <p className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                “The best journeys are shaped by people who listen.”
              </p>
              <div className="mt-10 h-px bg-white/20" />
              <div className="mt-5 flex items-center justify-between font-sans text-xs uppercase tracking-[0.16em] text-[#a8d997]">
                <span>{siteConfig.name}</span>
                <span>Since {siteConfig.establishedYear}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6eee2] bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e6eee2] px-5 sm:grid-cols-4 sm:px-8 lg:px-12"><div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-3xl font-bold text-[#173c1c]">10+</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Years of experience</p></div><div className="px-3 py-6 text-center sm:py-8"><p className="font-serif text-3xl font-bold text-[#173c1c]">25+</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Countries explored</p></div><div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-3xl font-bold text-[#173c1c]">1</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Team, worldwide</p></div><div className="hidden px-3 py-6 text-center sm:block sm:py-8"><p className="font-serif text-3xl font-bold text-[#173c1c]">∞</p><p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#81917f]">Memories created</p></div></div></section>

      <section id="team" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="mb-10 max-w-2xl"><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">Our specialists</span><h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#173c1c] sm:text-5xl">Different expertise.<br />One shared purpose.</h2><p className="mt-5 font-serif text-lg leading-relaxed text-[#647264]">From the first conversation to the moment you return home, our team is here to make your travel experience easy, considered, and memorable.</p></div><TeamTabs /></section>

      <section className="bg-white py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12"><div><span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#62ad43]">What guides us</span><h2 className="mt-3 max-w-md font-serif text-4xl font-bold tracking-tight text-[#173c1c]">Care is our competitive advantage.</h2></div><div className="grid gap-6 sm:grid-cols-3"><div className="rounded-xl border border-[#e2ecdf] p-6"><Heart className="h-7 w-7 text-[#62ad43]" /><h3 className="mt-5 font-serif text-xl font-bold text-[#244622]">Genuine care</h3><p className="mt-2 font-serif text-sm leading-relaxed text-[#647264]">We listen closely and make every traveler feel looked after.</p></div><div className="rounded-xl border border-[#e2ecdf] p-6"><Compass className="h-7 w-7 text-[#62ad43]" /><h3 className="mt-5 font-serif text-xl font-bold text-[#244622]">Deep expertise</h3><p className="mt-2 font-serif text-sm leading-relaxed text-[#647264]">We bring practical, first-hand knowledge to every recommendation.</p></div><div className="rounded-xl border border-[#e2ecdf] p-6"><Users className="h-7 w-7 text-[#62ad43]" /><h3 className="mt-5 font-serif text-xl font-bold text-[#244622]">Personal service</h3><p className="mt-2 font-serif text-sm leading-relaxed text-[#647264]">You get a real person, thoughtful guidance, and support throughout.</p></div></div></div></section>

      <section className="bg-[#173c1c] px-5 py-14 sm:px-8"><div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-left"><div><p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#a8d997]">Let’s plan something memorable</p><h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">Have a destination in mind?</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#62ad43] px-7 py-3.5 font-serif font-bold text-white transition-colors hover:bg-[#78bd5a]">Start a conversation <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
