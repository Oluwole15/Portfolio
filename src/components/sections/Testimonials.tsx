"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Nelson turns complex products into clear, intuitive experiences. His product thinking, collaboration, and openness to feedback significantly improved our UX — any startup would be fortunate to have him.",
    name: "Hassen Mouffok",
    role: "CEO, Clareefai",
    avatar: "/testimonials/hassen-mouffok.jpg",
  },
  {
    quote:
      "Nelson combines creativity, professionalism, and a deep understanding of user-centered design. He transformed complex requirements into intuitive experiences and collaborated seamlessly with developers and stakeholders.",
    name: "David Kitenge",
    role: "Founder, Kilimox",
    avatar: "/testimonials/justice-israel.jpg",
  },
  {
    quote:
      "Nelson blends creativity with functionality and understands user needs deeply. His precision, problem-solving mindset, and ability to adapt to feedback consistently delivered high-quality results.",
    name: "Justice Israel",
    role: "CEO, Ogaticket",
    avatar: "/testimonials/david-kitenge.jpg",
  },
  {
    quote:
      "Nelson brings fresh thinking, honest feedback, and a thoughtful approach to UI design. He evaluates ideas carefully, challenges assumptions, and offers practical alternatives that strengthen the final outcome.",
    name: "Venkatesh Siddi",
    role: "CEO, Zysec",
    avatar: "/testimonials/venkatesh-siddi.jpg",
  },
  {
    quote:
      "Working with Nelson was a smooth and collaborative experience. His designs were thoughtful, well-structured, and easy to implement. He communicated clearly, considered technical constraints, and is the kind of product designer every developer enjoys working with.",
    name: "David Bilson",
    role: "Senior Software Engineer",
    avatar: "/testimonials/david-bilson.png",
  },
  {
    quote:
      "Working with Nelson was a smooth and thoughtful experience. He took the time to understand the product, simplify complex requirements, and turn them into an interface that felt both intuitive and polished.",
    name: "Moris Kakengi",
    role: "Founder, ChapBuy",
    avatar: "/testimonials/moris-kakengi.jpg",
  },
];

const avatarGradients = [
  "from-indigo-500 to-purple-600",
  "from-teal-500 to-emerald-600",
  "from-amber-500 to-orange-600",
  "from-sky-500 to-indigo-600",
  "from-rose-500 to-pink-600",
  "from-zinc-600 to-zinc-800",
];

const GAP = 20;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeItems = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let speed = 0;
    let half = 0;
    let raf = 0;
    let last = performance.now();
    const baseSpeed = 0.55;

    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      half = (card.offsetWidth + GAP) * testimonials.length;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 16.666, 3);
      last = now;
      speed += (baseSpeed - speed) * Math.min(0.08 * dt, 1);
      x -= speed * dt;
      if (half > 0 && -x >= half) x += half;
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
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-zinc-50 dark:bg-zinc-950 py-8 md:py-12 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center px-6 mb-6 md:mb-8">
        <h2
          className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl md:text-5xl leading-[1.1]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          What Clients Say
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Feedback from founders and teams I&apos;ve had the pleasure of working with.
        </p>
      </div>

      {/* Marquee */}
        <div
          className="px-4 md:px-8 lg:px-12"
        >
          <div className="overflow-hidden py-6">
            <div ref={trackRef} className="flex w-max will-change-transform">
              {marqueeItems.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  data-card
                  className="group mr-5 flex w-[300px] shrink-0 flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5 dark:border-white/10 dark:bg-zinc-900 dark:hover:border-white/25 dark:hover:shadow-[0_18px_45px_-18px_rgba(129,140,248,0.4)] sm:w-[320px] md:w-[340px] md:p-7 lg:w-[320px] xl:w-[380px] 2xl:w-[460px]"
                >
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3.5 border-t border-zinc-100 pt-5 dark:border-white/10">
                  {testimonial.avatar ? (
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${avatarGradients[index % avatarGradients.length]}`}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-zinc-950 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="truncate text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
