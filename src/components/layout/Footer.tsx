import Image from "next/image";
import { Icon } from "@iconify/react";

const contactItems = [
  {
    label: "Email",
    icon: "lucide:mail",
    href: "mailto:oluwolenelson15@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "skill-icons:linkedin",
    href: "https://www.linkedin.com/in/nelson-oluwole-8147b6220/",
  },
  {
    label: "Twitter",
    icon: "simple-icons:x",
    href: "https://x.com/nelsonyolemi1?s=11&t=vhC5P_PKnlxuJ2-6MzRblA",
  },
  {
    label: "Behance",
    icon: "cib:behance",
    href: "https://www.behance.net/nelsonyolemi",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-zinc-200 bg-zinc-50 px-6 py-16 transition-colors duration-300 dark:border-white/10 dark:bg-black md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top profile area */}
        <div className="flex flex-col items-center">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-zinc-200 shadow-md dark:border-white/10">
            <Image
              src="/profile.jpg"
              alt="Nelson Oluwole"
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance / fulltime
          </p>
        </div>

        {/* Main headline */}
        <h2
          className="mx-auto mt-10 max-w-3xl text-2xl font-extrabold tracking-tight leading-[1.1] text-zinc-950 dark:text-white sm:text-3xl md:text-4xl"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Let&apos;s think carefully, move deliberately, and build something
          distinctive.
        </h2>

        {/* CTA buttons */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
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

        {/* Social / Contact icon buttons */}
        <div className="mt-16 flex items-center justify-center gap-4">
          {contactItems.map((item) => {
            const isExternal =
              item.href.startsWith("http") || item.href.startsWith("https");
            return (
              <a
                key={item.label}
                href={item.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={item.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-zinc-400 hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white"
              >
                <Icon icon={item.icon} className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
