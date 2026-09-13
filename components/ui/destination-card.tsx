import Link from "next/link";
import Image from "next/image";

interface DestinationCardProps {
  title: string;
  slug: string;
  image: string;
  toursCount: number;
}

export default function DestinationCard({
  title,
  slug,
  image,
  toursCount,
}: DestinationCardProps) {
  const imageSrc = image.startsWith("/") || image.startsWith("http://") || image.startsWith("https://")
    ? image
    : `/${image}`;

  return (
    <Link
      href={`/destinations/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden border border-slate-200/80 bg-slate-100 shadow-lg"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="absolute inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 transition-colors duration-500 group-hover:bg-black/50" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-center transition-all duration-500 ease-out group-hover:bottom-1/2 group-hover:translate-y-1/2">
        <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-white transition-transform duration-500 group-hover:scale-105">
          {title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 opacity-0 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100">
          {String(toursCount).padStart(2, "0")} Tour{toursCount === 1 ? "" : "s"}
        </p>
      </div>
    </Link>
  );
}
