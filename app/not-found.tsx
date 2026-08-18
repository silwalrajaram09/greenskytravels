import Link from "next/link";
import { Compass } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Green Sky Travels",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-4 py-16 text-center overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Image 
          src="/images/branding/logo.svg" 
          alt="Green Sky Travels Background" 
          width={800} 
          height={800} 
          className="object-contain"
        />
      </div>

      <div className="relative z-10">
        <Compass className="w-24 h-24 text-greensky-green/20 absolute -top-10 -left-10 animate-spin" />
        <h1 className="text-8xl md:text-9xl font-bold text-greensky-black drop-shadow-md">
          404
        </h1>
      </div>
      
      <div className="mt-8 space-y-4 max-w-lg z-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Oops! Looks like you wandered off the map.
        </h2>
        <p className="text-lg text-slate-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      <div className="mt-10 z-10">
        <Link 
          href="/" 
          className="inline-flex items-center justify-center bg-greensky-green hover:bg-[#519638] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg shadow-green-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
