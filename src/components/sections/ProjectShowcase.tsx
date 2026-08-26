"use client";

import { useEffect, useState } from "react";
import { projects } from "@/components/sections/ProjectsGallery";

interface Position {
  x: number;
  y: number;
  scale: number;
  rotate: number;
  opacity: number;
}

interface Layout {
  cardW: number;
  cardH: number;
  near: Position;
  far: Position;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function getLayout(vw: number): Layout {
  if (vw >= 1280) {
    return {
      cardW: 640,
      cardH: 400,
      near: { x: 410, y: 50, scale: 0.75, rotate: 7, opacity: 1 },
      far: { x: 700, y: 170, scale: 0.46, rotate: 12, opacity: 0.42 },
    };
  }
  if (vw >= 768) {
    return {
      cardW: 500,
      cardH: 310,
      near: { x: 300, y: 40, scale: 0.74, rotate: 6, opacity: 1 },
      far: { x: 430, y: 120, scale: 0.42, rotate: 10, opacity: 0.22 },
    };
  }
  const cardW = Math.min(0.85 * vw, 340);
  const nearX = Math.min(0.42 * vw, 150);
  return {
    cardW,
    cardH: Math.round(cardW * 0.62),
    near: { x: nearX, y: 16, scale: 0.6, rotate: 5, opacity: 0.55 },
    far: { x: nearX + 120, y: 60, scale: 0.42, rotate: 8, opacity: 0 },
  };
}

export default function ProjectShowcase() {
  const [vw, setVw] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % projects.length),
      1800,
    );
    return () => clearInterval(id);
  }, []);

  const layout = vw > 0 ? getLayout(vw) : getLayout(1280);
  const count = projects.length;
  const containerH =
    layout.cardH + layout.far.y + (layout.far.scale * layout.cardH) / 2 + 28;

  const transformFor = (d: number) => {
    if (d === 0) {
      return "translate(-50%, -50%) translate(0px, 0px) scale(1) rotate(0deg)";
    }
    if (Math.abs(d) === 1) {
      const dir = d < 0 ? -1 : 1;
      return `translate(-50%, -50%) translate(${dir * layout.near.x}px, ${layout.near.y}px) scale(${layout.near.scale}) rotate(${dir * layout.near.rotate}deg)`;
    }
    const dir = d < 0 ? -1 : 1;
    return `translate(-50%, -50%) translate(${dir * layout.far.x}px, ${layout.far.y}px) scale(${layout.far.scale}) rotate(${dir * layout.far.rotate}deg)`;
  };

  const opacityFor = (d: number) => {
    if (d === 0) return 1;
    if (Math.abs(d) === 1) return layout.near.opacity;
    if (Math.abs(d) === 2) return layout.far.opacity;
    return 0;
  };

  const zIndexFor = (d: number) => {
    if (d === 0) return 30;
    if (Math.abs(d) === 1) return 20;
    return 10;
  };

  return (
    <div
      className="relative mx-auto mt-0 select-none"
      style={{ width: layout.cardW, height: containerH }}
    >
      {projects.map((project, index) => {
        const raw = ((index - active) % count + count) % count;
        const d = raw > count / 2 ? raw - count : raw;
        return (
          <div
            key={project.title}
            className="absolute left-1/2 top-1/2 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 shadow-2xl shadow-black/40 will-change-transform dark:border-white/10"
            style={{
              width: layout.cardW,
              height: layout.cardH,
              transform: transformFor(d),
              opacity: opacityFor(d),
              zIndex: zIndexFor(d),
              transition: `transform 700ms ${EASE}, opacity 700ms ${EASE}`,
            }}
          >
            <div className="h-full w-full">{project.cover}</div>
          </div>
        );
      })}
    </div>
  );
}
