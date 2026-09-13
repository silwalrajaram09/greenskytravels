import { author } from "@/lib/content/authors";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/lib/content/travel-guide/blog.json";
import { User, Globe } from "lucide-react";

export function generateStaticParams() {
  return [{ slug: author.name.toLowerCase().replace(/ /g, '-') }];
}

export default function AuthorDetailPage({ params }: { params: { slug: string } }) {
  // In a real app we'd fetch the author by slug, but here we just use the data/author.ts
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-16 lg:w-9/12 max-w-5xl">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#092f42] font-serif mb-8">
            {author.name}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left: Avatar */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-sm">
              <Image 
                src={author.image} 
                alt={author.name} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Bio */}
          <div className="flex-1 space-y-6 text-lg text-[#092f42] leading-relaxed">
            {author.bio.map((paragraph, index) => (
              index === 1 ? (
                <div key={index} className="mt-8 text-lg leading-[2.2]">
                  <span 
                    className="bg-[#61a447] text-white px-1 py-[2px]" 
                    style={{boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}
                  >
                    {paragraph}
                  </span>
                </div>
              ) : (
                <p key={index} className="text-lg text-[#092f42] leading-relaxed">
                  {paragraph}
                </p>
              )
            ))}
          </div>

        </div>
        <div className="mt-14">
            <h2 className="font-serif text-xl font-semibold text-[#61a447]">Recent Blog By {author.name}</h2>
            <div className="mt-2 h-[2px] w-16 bg-red-600 mb-8" />
            
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {blogData.blog
                .filter((post: any) => post.author === author.name)
                .map((post: any, index: number) => {
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
                              href="#"
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
            
            {blogData.blog.filter((post: any) => post.author === author.name).length === 0 && (
              <p className="mt-4 text-lg text-gray-600">
                  No blog posts found for this author.
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
