"use client";

import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

const BEHANCE_URL = "https://www.behance.net/nelsonyolemi";

const tabs = ["All", "Mobile Apps", "Websites", "Dashboards", "Case study"] as const;
type Category = (typeof tabs)[number];
type ProjectCategory = Exclude<Category, "All">;

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  alsoIn?: ProjectCategory[];
  href: string;
  cover: ReactNode;
}

/* ── Projects ───────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: "Designed the SEECH Micro-App Ecosystem",
    description: "A collection of lightweight digital products designed to solve focused user needs within one connected ecosystem.",
    category: "Mobile Apps",
    alsoIn: ["Websites", "Dashboards"],
    href: "https://seech.app",
    cover: <Image src="/projects/seech.jpg" alt="SEECH Micro-App Ecosystem" fill className="object-contain" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Gadgetra Mobile App",
    description: "Designed an e-commerce mobile app for discovering and purchasing consumer gadgets.",
    category: "Mobile Apps",
    href: "https://www.behance.net/gallery/234514033/E-commerce-Gadget-Mobile-App",
    cover: <Image src="/projects/gadgetra.png" alt="Gadgetra Mobile App" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Finova Fintech SaaS Landing Page",
    description: "Designed a conversion-focused landing page for a modern financial platform.",
    category: "Websites",
    href: "https://www.behance.net/gallery/233147601/SAAS-Responsive-Landing-Page",
    cover: <Image src="/projects/finova.png" alt="Finova Fintech SaaS Landing Page" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Finwise Finance Dashboard",
    description: "Designed a clear dashboard for monitoring balances, transactions, and financial insights.",
    category: "Dashboards",
    href: "https://www.behance.net/gallery/207281477/Finance-Dashboard-UIUX-Design",
    cover: <Image src="/projects/finwise-dashboard.png" alt="Finwise Finance Dashboard" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Job Finder Mobile App",
    description: "Designed a mobile app that helps job seekers discover and apply for relevant opportunities with ease.",
    category: "Mobile Apps",
    href: "https://www.behance.net/gallery/164963245/UI-DESIGN-JOB-FINDER-APP",
    cover: <Image src="/projects/jobfinder.png" alt="Job Finder Mobile App" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Finwise Landing Page",
    description: "Designed a responsive fintech experience focused on saving, investing, and money management.",
    category: "Websites",
    href: "https://www.behance.net/gallery/184394137/FINANCE-Responsive-Landing-Page",
    cover: <Image src="/projects/finwise-landing.png" alt="Finwise Landing Page" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Roqqu Mobile App Redesign Case Study",
    description: "Redesigning a crypto user experience for simpler and more intuitive transactions.",
    category: "Mobile Apps",
    alsoIn: ["Case study"],
    href: "https://www.behance.net/gallery/163520225/Roqqu-Mobile-App-Redesign",
    cover: <Image src="/projects/roqqu.png" alt="Roqqu Mobile App Redesign Case Study" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Finwise UX Case Study",
    description: "Worked on a UX case study focused on simplifying savings, investments, and personal finance management.",
    category: "Case study",
    alsoIn: ["Mobile Apps"],
    href: "https://www.behance.net/gallery/171354021/UX-CASE-STUDY-FINANCE-MANAGEMENT-APP",
    cover: <Image src="/projects/finwise-case.png" alt="Finwise UX Case Study" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "MedPal Health UX Case Study",
    description: "A UX case study focused on simplifying healthcare appointments and access to medical professionals.",
    category: "Case study",
    alsoIn: ["Mobile Apps"],
    href: "https://www.behance.net/gallery/155649951/MedPal-Health-(App-Responsive-Website)-Case-Study",
    cover: <Image src="/projects/medpal.png" alt="MedPal Health UX Case Study" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Publeecity AI Ads Landing Page",
    description: "Designed a responsive platform showcasing AI-powered advertising and creative generation.",
    category: "Websites",
    href: "https://www.behance.net/gallery/226160189/Responsive-AI-ad-Creative-Landing-Page",
    cover: <Image src="/projects/publeecity.png" alt="Publeecity AI Ads Landing Page" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "MetricHub Finance Dashboard",
    description: "A financial dashboard for tracking spending, budgets, and financial performance.",
    category: "Dashboards",
    href: "https://www.behance.net/gallery/185395357/DASHBOARD-FINANCE-MANAGEMENT",
    cover: <Image src="/projects/metrichub-dash.png" alt="MetricHub Finance Dashboard" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Upgrade E-Learning App",
    description: "Worked on a e-learning mobile app designed to make course discovery and education more accessible.",
    category: "Mobile Apps",
    href: "https://www.behance.net/gallery/167912293/UI-DESIGN-E-LEARNING-APP",
    cover: <Image src="/projects/upgrade.png" alt="Upgrade E-Learning App" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "MetricHub SaaS Landing Page",
    description: "Designed a responsive SaaS experience for managing business activities in one place.",
    category: "Websites",
    href: "https://www.behance.net/gallery/229658687/SAAS-Responsive-Landing-Page",
    cover: <Image src="/projects/metrichub-saas.png" alt="MetricHub SaaS Landing Page" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "TaskMinder Dashboard",
    description: "Designed a task management workspace for organising projects, teams, and daily activities.",
    category: "Dashboards",
    href: "https://www.behance.net/gallery/174768201/DASHBOARD-DESIGN-TASK-MANAGEMENT",
    cover: <Image src="/projects/taskminder.png" alt="TaskMinder Dashboard" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Pricing Hub UX Case Study",
    description: "A team UX case study I led, focused on simplifying gadget price comparison across e-commerce stores.",
    category: "Case study",
    alsoIn: ["Mobile Apps"],
    href: "https://www.behance.net/gallery/183701143/UX-CASE-STUDY-E-COMMERCE-WEB-APPLICATION",
    cover: <Image src="/projects/pricinghub.png" alt="Pricing Hub UX Case Study" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
  {
    title: "Foody Kitchen UX Case Study",
    description: "Worked on a UX/UI case study focused on creating a simple and enjoyable food ordering experience.",
    category: "Case study",
    alsoIn: ["Mobile Apps"],
    href: "https://www.behance.net/gallery/151127819/Foody-Kitchen-UXUI-Case-Study",
    cover: <Image src="/projects/foody.png" alt="Foody Kitchen UX Case Study" fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw" />,
  },
];

/* ── Gallery ────────────────────────────────────────────── */

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProjects = useMemo(() => {
    const base =
      activeTab === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeTab || project.alsoIn?.includes(activeTab)
          );

    if (activeTab !== "Mobile Apps") return base;

    const caseStudies: typeof base = [];
    const others: typeof base = [];
    for (const project of base) {
      const isCaseStudy =
        project.category === "Case study" || project.alsoIn?.includes("Case study");
      (isCaseStudy ? caseStudies : others).push(project);
    }
    return [...others, ...caseStudies];
  }, [activeTab]);

  const handleTabSwitch = (tab: Category) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 220);
  };

  return (
    <section className="w-full bg-background px-6 pt-8 pb-24 transition-colors duration-300 md:pt-10 md:pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2
            className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl md:text-5xl leading-[1.1]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Selected Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            A selection of product design work across mobile, web, dashboards, and UX case studies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 p-1 dark:border-white/10 dark:bg-white/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabSwitch(tab)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                  activeTab === tab
                    ? "bg-white text-zinc-900 shadow-md dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Behance */}
        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Looking for more projects?{" "}
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 decoration-zinc-400 transition-colors duration-300 hover:text-indigo-600 dark:decoration-zinc-600 dark:hover:text-indigo-400"
          >
            Check out my Behance
          </a>
        </p>

        {/* Grid */}
        <div
          className={`mt-12 transition-all duration-300 ease-out ${
            isTransitioning ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-sm transition-all duration-500 ease-out group-hover:border-zinc-300 group-hover:shadow-xl group-hover:shadow-zinc-950/5 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:shadow-black/30">
                  <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                    {project.cover}
                  </div>
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-zinc-950 underline-offset-4 transition-colors duration-300 group-hover:text-indigo-600 group-hover:underline dark:text-white dark:group-hover:text-indigo-400 sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
