import Image from "next/image";
import { Icon } from "@iconify/react";
import ContactForm from "@/components/sections/ContactForm";

const TELEGRAM_URL = "https://t.me/The_uiux_guy";

export default function ContactUs() {
  return (
    <section className="relative w-full overflow-hidden border-t border-zinc-200 bg-zinc-50 px-6 pt-16 pb-24 transition-colors duration-300 dark:border-white/5 dark:bg-zinc-950 md:pt-20 md:pb-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        {/* Top profile area */}
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-zinc-200 shadow-md dark:border-white/10">
            <Image
              src="/profile.jpg"
              alt="Nelson Oluwole"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Nelson Oluwole
          </p>
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
            🌍 Based in Lagos, working globally
          </p>
        </div>

        {/* Main heading */}
        <h1
          className="mt-8 text-center text-4xl font-extrabold tracking-tight leading-[1.1] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Reach Out to Me
        </h1>
        <p className="mt-5 flex items-center gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for freelance / fulltime
        </p>

        {/* Contact form */}
        <div className="mt-10 w-full">
          <ContactForm />
        </div>

        {/* Alternative contact divider */}
        <div className="mt-14 flex w-full items-center gap-5">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            OR
          </span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
        </div>

        {/* Direct message card */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 flex w-full flex-col items-center justify-between gap-8 rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
              <Image
                src="/profile.jpg"
                alt="Nelson Oluwole"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-base font-bold text-zinc-950 dark:text-white sm:text-lg">
                Discuss with Nelson
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                Quickest way to reach me directly
              </p>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 group-hover:shadow-lg group-hover:shadow-indigo-600/25">
            <Icon icon="simple-icons:telegram" className="h-4 w-4" />
            Send a Message
          </span>
        </a>
      </div>
    </section>
  );
}
