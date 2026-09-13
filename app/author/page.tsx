import Link from "next/link";
import { author } from "@/lib/content/authors";
import Image from "next/image";

export const metadata = {
  title: "Author | Green Sky Travels",
  description: "At Green Sky Travels, our blog and website content is crafted by a passionate travel writer...",
};

export default function AuthorPage() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-4 py-12 lg:w-9/12 max-w-5xl">
      
        <h1 className="text-4xl md:text-5xl font-bold text-[#092f42] mb-8 font-serif">
          Author
        </h1>
        
        <p className="text-[#092f42] text-lg mb-16 max-w-4xl leading-relaxed">
          At Green Sky Travels, our blog and website content is crafted by a passionate travel writer dedicated to inspiring your journeys and sharing the world's most incredible destinations.
        </p>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href={`/author/${author.name.toLowerCase().replace(/ /g, '-')}`} className="group flex flex-col items-center">
            <div className="rounded-full border border-red-500 p-1 mb-4 transition-transform group-hover:scale-105">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
                <Image 
                  src={author.image} 
                  alt={author.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#092f42] font-serif">
              {author.name}
            </h2>
            <p className="text-sm text-gray-500 font-bold mt-1">
              1 News & Articles
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
