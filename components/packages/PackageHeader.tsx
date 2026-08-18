"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  FileText,
  Camera,
} from "lucide-react";

interface PackageHeaderProps {
  pkg: any;
}

export function PackageHeader({ pkg }: PackageHeaderProps) {
  const images: string[] = [
    pkg.heroImage,
    ...(pkg.gallery?.map((item: any) =>
      typeof item === "string" ? item : item.url || item.image,
    ) || []),
  ].filter(Boolean);

  const totalImages = images.length;
  const hasMultipleImages = totalImages > 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(totalImages - 1, i + 1));

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: pkg.title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.log("Error sharing", error);
    }
  };

  const handleBrochure = () => {
    if (pkg.brochure || pkg.pdf) {
      window.open(pkg.brochure || pkg.pdf, "_blank");
    } else {
      alert("Brochure is currently being updated for this package.");
    }
  };

  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-[#020617]">{pkg.title}</h1>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-6 md:flex">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 font-semibold text-[#020617]"
              >
                <Share2 className="h-5 w-5 text-gray-500" />
                Share
              </button>

              <button
                type="button"
                onClick={handleBrochure}
                className="inline-flex items-center gap-2 font-semibold text-[#020617]"
              >
                <FileText className="h-5 w-5 text-gray-500" />
                Get Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!hasMultipleImages ? (
            <>
              {/* Desktop - single image */}
              <div className="hidden md:block">
                <div className="relative h-[420px] w-full overflow-hidden rounded-xl lg:h-[490px]">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover rounded-2xl"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Mobile - single image */}
              <div className="md:hidden">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[350px]">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover rounded-2xl"
                    draggable={false}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <DesktopCarousel
                images={images}
                currentIndex={currentIndex}
                onPrevious={goPrevious}
                onNext={goNext}
                title={pkg.title}
              />
              <MobileCarousel
                images={images}
                currentIndex={currentIndex}
                onPrevious={goPrevious}
                onNext={goNext}
                title={pkg.title}
              />
            </>
          )}

          {/* TOUR PHOTOS */}
          <div className="mt-4">
            <button
              type="button"
              onClick={scrollToGallery}
              className="inline-flex items-center gap-2 font-semibold text-[#020617] underline underline-offset-2 hover:text-[#5da33d] transition-colors"
            >
              <Camera className="h-5 w-5 text-[#5da33d]" />
              Tour Photos ({images.length})
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function DesktopCarousel({
  images,
  currentIndex,
  onPrevious,
  onNext,
  title,
}: {
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  title: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setViewportWidth(entry.contentRect.width);
    });
    observer.observe(el);
    setViewportWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const gap = 12;
  const slideWidth = viewportWidth > 0 ? viewportWidth * 0.795 : 0;
  const peek = viewportWidth > 0 ? (viewportWidth - slideWidth) / 2 : 0;

  const getWidth = (i: number) => {
    if (i === 0 || i === images.length - 1) return slideWidth + peek;
    return slideWidth;
  };

  const getLocalX = (index: number) => {
    if (index === 0) return 0;
    let x = slideWidth + peek + gap;
    if (index > 1) {
      x += (index - 1) * (slideWidth + gap);
    }
    return x;
  };

  const baseOffset = currentIndex === 0 ? 0 : peek - getLocalX(currentIndex);

  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsDragging(true);
    setStartX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50 && currentIndex > 0) {
      onPrevious();
    } else if (dragOffset < -50 && currentIndex < images.length - 1) {
      onNext();
    }
    setDragOffset(0);
  };

  const finalOffset = baseOffset + (isDragging ? dragOffset : 0);

  return (
    <div
      ref={viewportRef}
      className="hidden rounded-2xl relative w-full h-[420px]  overflow-hidden md:block lg:h-[490px] touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className={`flex h-full ${!isDragging ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${finalOffset}px)`, gap: `${gap}px` }}
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            className="relative h-full shrink-0 overflow-hidden rounded-2xl"
            style={{ width: slideWidth > 0 ? `${getWidth(i)}px` : "70%" }}
          >
            <Image
              src={src}
              alt={i === currentIndex ? title : `${title} image ${i + 1}`}
              fill
              priority={Math.abs(i - currentIndex) <= 1}
              sizes="70vw"
              className={`object-cover rounded-2xl ${isDragging ? "pointer-events-none" : ""}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex > 0) onPrevious();
        }}
        style={{ left: '1.5rem' }}
        aria-label="Previous image"
        className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 select-none items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 ${
          currentIndex > 0 ? 'hover:scale-110 cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="h-6 w-6 text-[#5da33d]" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex < images.length - 1) onNext();
        }}
        style={{ right: '1.5rem' }}
        aria-label="Next image"
        className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 select-none items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 ${
          currentIndex < images.length - 1 ? 'hover:scale-110 cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <ChevronRight className="h-6 w-6 text-[#5da33d]" />
      </button>
    </div>
  );
}

function MobileCarousel({
  images,
  currentIndex,
  onPrevious,
  onNext,
  title,
}: {
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  title: string;
}) {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsDragging(true);
    setStartX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50 && currentIndex > 0) {
      onPrevious();
    } else if (dragOffset < -50 && currentIndex < images.length - 1) {
      onNext();
    }
    setDragOffset(0);
  };

  const transformStyle = isDragging
    ? `calc(-${currentIndex * 100}% - ${currentIndex * 12}px + ${dragOffset}px)`
    : `calc(-${currentIndex * 100}% - ${currentIndex * 12}px)`;

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:hidden touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className={`flex h-full ${!isDragging ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${transformStyle})`, gap: "12px" }}
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            className="relative h-full w-full shrink-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={i === currentIndex ? title : `${title} image ${i + 1}`}
              fill
              priority={Math.abs(i - currentIndex) <= 1}
              sizes="100vw"
              className={`object-cover rounded-2xl ${isDragging ? "pointer-events-none" : ""}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex > 0) onPrevious();
        }}
        aria-label="Previous image"
        className={`absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 select-none items-center justify-center rounded-full bg-white/95 shadow-lg transition-all duration-200 ${
          currentIndex > 0 ? 'hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="h-5 w-5 text-[#5da33d]" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex < images.length - 1) onNext();
        }}
        aria-label="Next image"
        className={`absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 select-none items-center justify-center rounded-full bg-white/95 shadow-lg transition-all duration-200 ${
          currentIndex < images.length - 1 ? 'hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <ChevronRight className="h-5 w-5 text-[#5da33d]" />
      </button>
    </div>
  );
}
