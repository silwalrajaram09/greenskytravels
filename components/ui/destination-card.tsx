import Link from "next/link";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  image: string;
  toursCount: number;
}

export default function DestinationCard({ title, image, toursCount }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${title.toLowerCase().replace(/ /g, "-")}`} className="group relative block overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-gray-200 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MapPin className="w-4 h-4 text-primary" /> {toursCount} Tours Available
        </p>
      </div>
    </Link>
  );
}
