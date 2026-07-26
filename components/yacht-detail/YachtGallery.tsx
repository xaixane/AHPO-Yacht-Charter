"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

interface YachtGalleryProps {
  images: string[];
  yachtName: string;
}

export function YachtGallery({ images, yachtName }: YachtGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <div className="space-y-4">
      {/* 4-Tile Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[420px] md:h-[500px]">
        {/* Main Cover Image */}
        <div
          onClick={() => openLightbox(0)}
          className="relative md:col-span-2 h-full overflow-hidden cursor-pointer border border-[#E4E2DC] group bg-[#F7F6F3]"
        >
          <Image
            src={images[0] || "/assets/hero-yacht.jpg"}
            alt={`${yachtName} main exterior deck`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Exterior Deck View</span>
          </div>
        </div>

        {/* Side Thumbnails */}
        {images.slice(1, 4).map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx + 1)}
            className="relative h-full overflow-hidden cursor-pointer border border-[#E4E2DC] group bg-[#F7F6F3] hidden md:block"
          >
            <Image
              src={img}
              alt={`${yachtName} interior view ${idx + 1}`}
              fill
              className="object-cover"
            />

            {idx === 2 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white z-10 text-sm tracking-widest uppercase">
                +{images.length - 4} Photos
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gallery Button */}
      <div className="flex justify-end">
        <button
          onClick={() => openLightbox(0)}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E4E2DC] text-[#0F0F0E] text-xs font-semibold uppercase tracking-wider hover:border-[#0F0F0E] transition-colors"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>View All Gallery Photos ({images.length})</span>
        </button>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image
              src={images[lightboxIndex]}
              alt={`${yachtName} photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 text-white text-xs tracking-widest border border-white/20">
              {lightboxIndex + 1} / {images.length} • {yachtName}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
