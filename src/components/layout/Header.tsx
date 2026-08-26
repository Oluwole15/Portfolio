"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();
  const activeLinkEffective = pathname?.startsWith("/projects")
    ? "Projects"
    : pathname?.startsWith("/about")
      ? "About Me"
      : pathname?.startsWith("/contact")
        ? "Contact Us"
        : activeLink;

  useEffect(() => {
    // Determine the initial theme from the document's class list
    const isDark = document.documentElement.classList.contains("dark");
    const initialTheme = isDark ? "dark" : "light";
    const timer = setTimeout(() => {
      setTheme(initialTheme);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "Projects", href: "/projects", icon: "lucide:briefcase" },
    { name: "About Me", href: "/about", icon: "lucide:user" },
    { name: "Contact Us", href: "/contact", icon: "lucide:mail" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 md:px-6">
      {/* Pill Navigation Container */}
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-3 py-2 sm:px-4 shadow-2xl relative transition-all duration-300">
        
        {/* Profile Info Section (Far Left) — Clickable → Home */}
        <Link
          href="/"
          onClick={() => setActiveLink("Home")}
          className="flex items-center gap-2.5 sm:gap-3 select-none min-w-0 rounded-full pr-2 -mr-2 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors duration-200"
        >
          {/* Circular profile image with outline */}
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-full border-2 border-indigo-500/80 shadow-md">
            <Image
              src="/profile.jpg"
              alt="Nelson Oluwole"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 44px, 48px"
              priority
            />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none truncate">
              Nelson Oluwole
            </span>
            <span className="hidden sm:block text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1 leading-none truncate">
              Founder and Senior Product Designer
            </span>
            <span className="sm:hidden text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 leading-none truncate">
              Product Designer
            </span>
          </div>
        </Link>

        {/* Navigation and Actions (Far Right) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-xs sm:text-sm font-medium transition-colors py-1 ${
                  activeLinkEffective === link.name
                    ? "text-zinc-950 dark:text-white font-bold"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                {link.name}
                {activeLinkEffective === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="h-4 w-px bg-zinc-200 dark:bg-white/10" />

          {/* Clickable Sun Icon Theme Switcher (Desktop) */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-300"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <Icon
              icon="lucide:sun"
              className={`h-5 w-5 transition-all duration-500 ${
                theme === "light"
                  ? "text-amber-500 rotate-180 scale-110"
                  : "text-zinc-400 rotate-0"
              }`}
            />
          </button>

          <Link
            href="/contact"
            className="rounded-full bg-zinc-950 dark:bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-md dark:shadow-white/5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1.5">
          {/* Clickable Sun Icon Theme Switcher (Mobile) */}
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <Icon
              icon="lucide:sun"
              className={`h-5 w-5 transition-all duration-500 ${
                theme === "light"
                  ? "text-amber-500 rotate-180 scale-110"
                  : "text-zinc-400 rotate-0"
              }`}
            />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeLinkEffective === link.name
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 font-bold"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  <Icon icon={link.icon} className="h-4 w-4 shrink-0" />
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px bg-zinc-200 dark:bg-white/10" />
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-zinc-950 dark:bg-white py-3 text-sm font-semibold text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
