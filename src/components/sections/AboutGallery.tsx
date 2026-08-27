import InfiniteImageCarousel from "@/components/sections/InfiniteImageCarousel";
import { aboutImages } from "@/data/aboutImages";

export default function AboutGallery() {
  return (
    <section
      id="about-gallery"
      className="relative w-full bg-zinc-50 py-8 md:py-12 border-t border-zinc-200 dark:bg-zinc-950 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      <InfiniteImageCarousel images={aboutImages} />
    </section>
  );
}
