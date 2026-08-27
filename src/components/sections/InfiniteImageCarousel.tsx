"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { GalleryImage } from "@/data/aboutImages";

const GAP = 20;

const widthClasses: Record<GalleryImage["width"], string> = {
  portrait: "w-[260px] md:w-[340px] lg:w-[380px]",
  large: "w-[260px] md:w-[340px] lg:w-[380px]",
  medium: "w-[260px] md:w-[340px] lg:w-[380px]",
};

interface InfiniteImageCarouselProps {
  images: GalleryImage[];
}

export default function InfiniteImageCarousel({ images }: InfiniteImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeItems = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let speed = 0;
    let setWidth = 0;
    let pxPerFrame = 0;
    let raf = 0;
    let last = performance.now();

    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      setWidth = (card.offsetWidth + GAP) * images.length;
      pxPerFrame = setWidth / 45 / 60;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.666, 3);
      last = now;
      speed += (pxPerFrame - speed) * Math.min(0.08 * dt, 1);
      x -= speed * dt;
      if (setWidth > 0 && -x >= setWidth) x += setWidth;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    measure();
    window.addEventListener("resize", measure);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [images.length]);

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="overflow-hidden py-8">
        <div ref={trackRef} className="flex w-max will-change-transform">
          {marqueeItems.map((image, index) => (
            <figure
              key={`${image.id}-${index}`}
              data-card
              className={`group relative mr-5 flex h-[300px] md:h-[440px] shrink-0 overflow-hidden rounded-[20px] ${widthClasses[image.width]}`}
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${image.gradient}`}
                >
                  <Icon icon={image.icon} className="h-10 w-10 text-white/90" />
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
