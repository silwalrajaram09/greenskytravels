import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/lib/data/travel-guide/blog.json";
import { author as defaultAuthor } from "@/lib/data/author";


export function generateStaticParams() {
  return blogData.blog.map((post) => {
    const slug = post.slug.replace(/^\/travel-guide\//, "");
    return { slug };
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postIndex = blogData.blog.findIndex((p) => p.slug.replace(/^\/travel-guide\//, "") === resolvedParams.slug);
  const post = blogData.blog[postIndex];

  if (!post) {
    notFound();
  }

  const image = post.image;

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src={image} 
          alt={post.title} 
          fill 
          className="object-cover"
          priority
        />
      </section>

      <div className="container mx-auto px-4 lg:w-8/12 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 lg:p-14 border border-slate-100">
          
          {/* Breadcrumb & Header */}
          <div className="mb-10">
            <div className="text-xs font-bold text-gray-400 mb-6 uppercase tracking-wide flex items-center flex-wrap gap-2">
              <Link href="/" className="hover:text-[#61a447] transition">Home</Link>
              <span>&gt;</span>
              <Link href="/travel-guide" className="hover:text-[#61a447] transition">Travel Guide</Link>
              <span>&gt;</span>
              <span className="text-[#61a447]">{post.title}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092f42] font-serif leading-tight">
              {post.title}
            </h1>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-500">
              <span>By <Link href={`/author/${post.author.toLowerCase().replace(/ /g, '-')}`} className="text-[#61a447] hover:underline">{post.author}</Link></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none text-slate-700 prose-headings:font-serif prose-headings:text-[#092f42] prose-a:text-[#61a447]">
            {post.subtitle && <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#092f42]">{post.subtitle}</h3>}
            
            {/* Format 1 */}
            {post.introduction && <p className="leading-relaxed mb-8">{post.introduction}</p>}
            
            {post.sections && post.sections.map((section: any, idx: number) => (
              <div key={idx} className="mb-8">
                <h4 className="text-lg font-bold text-[#092f42] mb-3">{section.number ? `${section.number}. ` : ''}{section.title}</h4>
                <p className="leading-relaxed">{section.content}</p>
              </div>
            ))}
            
            {post.conclusion && <p className="leading-relaxed mt-8 mb-8">{post.conclusion}</p>}
            
            {post.contact && !post.content && (
              <div className="bg-gray-50 p-6 rounded-lg mt-8 text-sm">
                <p className="font-bold mb-2">📍 {post.contact.company}</p>
                <p>📞 Phone: {post.contact.phone}</p>
                <p>📱 Hotline: {post.contact.hotline}</p>
                <p>📧 Email: <a href={`mailto:${post.contact.email}`}>{post.contact.email}</a></p>
                <p>🌍 Website: <a href={`http://${post.contact.website}`}>{post.contact.website}</a></p>
              </div>
            )}

            {/* Format 2 */}
            {post.content && post.content.map((block: any, idx: number) => {
              if (block.type === "paragraph") {
                return <p key={idx} className="leading-relaxed mb-6">{block.text}</p>;
              }
              if (block.type === "section") {
                return (
                  <div key={idx} className="mb-8">
                    <h4 className="text-lg font-bold text-[#092f42] mb-4">{block.title}</h4>
                    {block.paragraphs && block.paragraphs.map((p: string, i: number) => <p key={`p-${i}`} className="mb-3 leading-relaxed">{p}</p>)}
                    {block.items && (
                      <ul className="list-disc pl-5 space-y-2 mb-4 leading-relaxed">
                        {block.items.map((item: string, i: number) => <li key={`li-${i}`}>{item}</li>)}
                      </ul>
                    )}
                    {block.paragraphs_after && block.paragraphs_after.map((p: string, i: number) => <p key={`pa-${i}`} className="mb-3 leading-relaxed">{p}</p>)}
                  </div>
                );
              }
              if (block.type === "contact") {
                return (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg mt-8 text-sm">
                    {block.items.map((item: string, i: number) => (
                      <p key={i} className={i === 0 ? "font-bold mb-2" : "mb-1"}>{item}</p>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </article>

          {/* Author Box */}
          <div className="mt-16 pt-10 border-t-2 border-[#092f42]/10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md">
                <Image src={defaultAuthor.image} alt={post.author} fill className="object-cover" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#092f42] font-serif mb-4">
                <Link href={`/author/${post.author.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#61a447] transition-colors">
                  {post.author}
                </Link>
              </h3>
              <div className="text-gray-600 leading-relaxed text-sm space-y-3">
                {defaultAuthor.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>

          {/* Social Share (Placeholder UI) */}
          <div className="mt-12 pt-8 border-t border-gray-100 text-center relative">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#092f42]/10 -translate-y-px"></div>
            <span className="block text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider bg-white inline-block px-4 relative -top-11">Share with your Friends</span>
            <div className="flex justify-center gap-2 -mt-4">
              <a href="#" className="w-9 h-9 rounded bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold">f</a>
              <a href="#" className="w-9 h-9 rounded bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold">t</a>
              <a href="#" className="w-9 h-9 rounded bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold">in</a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="mt-16 bg-white border border-gray-100 p-6 md:p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#092f42] font-serif mb-6">Make an Enquiry</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="Full Name*" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#61a447]" />
              </div>
              <div>
                <input type="email" placeholder="E-mail*" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#61a447]" />
              </div>
              <div className="md:col-span-2">
                <input type="number" min="1" placeholder="No of Travellers*" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#61a447]" />
              </div>
              <div className="md:col-span-2">
                <textarea rows={5} placeholder="Message*" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#61a447] resize-none"></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <button type="button" className="bg-[#61a447] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#4a8035] transition-colors uppercase tracking-wide w-full md:w-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}