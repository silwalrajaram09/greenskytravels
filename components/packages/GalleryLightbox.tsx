"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.slice(0, 5).map((src, index) => (
          <button
            key={src}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[4/5] bg-slate-100">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {index === 4 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-2xl font-bold text-white">
                  +{images.length - 5}
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-auto max-w-[80vw]">
              <Image
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm text-white">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}