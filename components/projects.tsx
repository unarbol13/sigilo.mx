"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECTS, type Project, type ProjectStatus } from "@/lib/data";

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: {
    label: "En operación",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
  },
  development: {
    label: "En desarrollo",
    dot: "bg-blue-500",
    text: "text-blue-700",
  },
  design: {
    label: "En diseño",
    dot: "bg-amber-500",
    text: "text-amber-700",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  const href = project.mockupsUrl ?? project.url;

  const inner = (
    <div className="group bg-card border border-border rounded-2xl p-6 hover:border-border-strong hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full min-w-[320px] max-w-[380px] shrink-0 snap-start">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-dark transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-muted mt-0.5">
            {project.type} · {project.sector}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className={`w-2 h-2 rounded-full ${status.dot}`} />
          <span className={`text-xs font-mono ${status.text}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">
        {project.tagline}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link indicator */}
      {href && (
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs text-muted group-hover:text-foreground transition-colors font-medium">
            {project.mockupsUrl ? "Ver mockups →" : "Visitar sitio →"}
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <p className="font-mono text-sm text-accent-dark tracking-wider uppercase mb-3">
              Portafolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proyectos
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Apps, plataformas y sistemas que operan en producción o están en
              construcción activa.
            </p>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-foreground hover:bg-surface transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border-strong flex items-center justify-center text-foreground hover:bg-surface transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
