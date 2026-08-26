"use client";

import { Icon } from "@iconify/react";

export default function Contact() {
  const contactInfo = [
    { icon: "lucide:mail", label: "Email", val: "hello@example.com", href: "mailto:hello@example.com" },
    { icon: "lucide:map-pin", label: "Location", val: "San Francisco, CA", href: "#" },
    { icon: "lucide:clock", label: "Availability", val: "Available for freelance / full-time", href: "#" },
  ];

  return (
    <section id="contact" className="relative w-full bg-zinc-50 dark:bg-zinc-950 px-6 py-24 border-t border-zinc-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 -z-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px] animate-pulse duration-[8000ms]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Text Left */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Get in Touch</span>
            <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white sm:text-4xl mt-2 leading-tight">
              Let&apos;s create something extraordinary together.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed max-w-md">
              Whether you have a fully-fledged design system ready to build or just a seed of an idea, feel free to drop a message.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/[0.01] p-4 hover:bg-zinc-50 dark:hover:bg-white/[0.03] hover:border-zinc-300 dark:hover:border-white/10 transition-all group shadow-sm dark:shadow-none"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                    <Icon icon={info.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500">{info.label}</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{info.val}</p>
                  </div>
                  {info.href !== "#" && (
                    <Icon icon="lucide:arrow-up-right" className="h-4 w-4 text-zinc-500 ml-auto group-hover:text-white transition-colors" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 md:p-10 backdrop-blur-md shadow-xl dark:shadow-none">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="h-12 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/40 px-4 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/40 px-4 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hey, I'd love to discuss a project..."
                  className="rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/40 p-4 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 transition-all hover:scale-[1.01] shadow-lg shadow-indigo-600/25 active:scale-95"
              >
                <span>Send Message</span>
                <Icon icon="lucide:send" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
