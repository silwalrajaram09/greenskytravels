import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  rating: number;
  href: string;
}

export default function PackageCard({
  title,
  image,
  duration,
  groupSize,
  price,
  rating,
  href,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary flex items-center gap-1 shadow-sm">
          <Star className="w-4 h-4 fill-primary" /> {rating.toFixed(1)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" /> {groupSize}
          </span>
        </div>
        <Link href={href}>
          <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <div className="text-xl font-bold text-primary">{price}</div>
          </div>
          <Link
            href={href}
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-primary transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
