"use client";

import { Icon } from "@iconify/react";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

export default function Hero() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-8 pb-0 md:pt-12 transition-colors duration-300">

      {/* Background radial soft light gradient glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-[100px] animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-500/5 dark:bg-purple-600/15 blur-[120px] animate-pulse duration-[10000ms]" />

      <div className="mx-auto max-w-5xl text-center flex flex-col items-center">

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl max-w-5xl leading-[1.2] text-balance" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          I Design Digital Products Users<br className="hidden md:block" /> <span className="italic text-indigo-400">Understand</span> &amp; <span className="italic text-indigo-400">Return</span> To
        </h1>

        {/* Supporting Subtext */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance">
          I transform complex challenges into intuitive experiences that reduce friction, improve key metrics and create measurable value for users and businesses.
        </p>

        {/* Call to Actions */}
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/oluwolenelson15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-95 sm:w-56"
          >
            Book a Call
          </a>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-semibold text-zinc-700 transition-all hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-white/15 dark:text-zinc-200 dark:hover:text-indigo-400 sm:w-56"
          >
            <Icon icon="simple-icons:telegram" className="h-4 w-4" />
            Send a Message
          </a>
        </div>

        {/* Project Showcase (Infinite 3D coverflow) */}
        <ProjectShowcase />
      </div>
    </section>
  );
}
