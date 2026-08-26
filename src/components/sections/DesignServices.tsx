"use client";

import { Icon } from "@iconify/react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Tool {
  name: string;
  icon: string;
  height?: number;
  color?: string;
}

export default function DesignServices() {
  const services: Service[] = [
    {
      icon: "lucide:pen-tool",
      title: "Product & User Experience Design",
      description:
        "I design intuitive SaaS, mobile, and dashboard experiences — from early concepts and user flows to polished, scalable interfaces.",
    },
    {
      icon: "lucide:mouse-pointer-click",
      title: "High-Converting Web Experiences",
      description:
        "I create strategic landing pages and marketing websites for fintech, AI, SaaS, and digital products, with a strong focus on clarity, storytelling, and conversion.",
    },
    {
      icon: "lucide:blocks",
      title: "No-Code & Frontend Execution",
      description:
        "I bring designs to life using modern no-code and frontend tools, creating responsive, accessible, and production-ready experiences.",
    },
  ];

  const tools: Tool[] = [
    { name: "Figma", icon: "logos:figma", height: 32 },
    { name: "Claude", icon: "logos:claude-icon", height: 28 },
    { name: "Canva", icon: "devicon:canva", height: 28 },
    { name: "Antigravity", icon: "thesvg-color:antigravity-google", height: 28 },
    { name: "OpenAI", icon: "logos:openai-icon", height: 28, color: "text-white" },
  ];

  return (
    <section
      id="services"
      className="w-full bg-background px-6 py-8 md:py-12 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl md:text-5xl leading-[1.1]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Design Services
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Designing intuitive digital products that solve real problems, simplify complexity, and create measurable value for users and businesses.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.02] p-8 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-300 dark:hover:border-white/20 hover:shadow-xl hover:shadow-zinc-950/5 dark:hover:shadow-black/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-indigo-400 transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:border-indigo-300/60 dark:group-hover:border-indigo-500/40">
                <Icon icon={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-7 text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
            Tools I Use
          </h3>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            A focused stack for designing and shipping.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex min-w-[104px] flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-7 py-6 dark:border-white/10 dark:bg-white/[0.02] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-zinc-300 dark:hover:border-white/20 hover:shadow-lg hover:shadow-zinc-950/5 dark:hover:shadow-black/40"
              >
                <Icon
                  icon={tool.icon}
                  height={tool.height ?? 28}
                  className={`transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 ${
                    tool.color ?? ""
                  }`}
                />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors duration-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
