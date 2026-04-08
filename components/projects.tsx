"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { PROJECTS, type Project, type ProjectStatus, type ProjectFocus } from "@/lib/data";

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: {
    label: "En operación",
    dot: "bg-status-live",
    text: "text-status-live-text",
  },
  development: {
    label: "En desarrollo",
    dot: "bg-status-dev",
    text: "text-status-dev-text",
  },
  design: {
    label: "En diseño",
    dot: "bg-status-design",
    text: "text-status-design-text",
  },
  concept: {
    label: "Concepto",
    dot: "bg-status-concept",
    text: "text-status-concept-text",
  },
};

const FOCUS_CONFIG: Record<ProjectFocus, { label: string; description: string }> = {
  business: {
    label: "Software para Negocios",
    description: "Apps, plataformas y sistemas de gestión para empresas.",
  },
  civictech: {
    label: "Civic Tech & Impacto Social",
    description: "Tecnología para transparencia, participación ciudadana y causas sociales.",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  const href = project.mockupsUrl ?? project.url;

  const inner = (
    <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full min-w-[320px] max-w-[380px] shrink-0 snap-start">
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

      <p className="text-sm text-muted leading-relaxed">
        {project.tagline}
      </p>

      {project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="text-xs text-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}

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

function ProjectRow({ focus, projects }: { focus: ProjectFocus; projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const config = FOCUS_CONFIG[focus];

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{config.label}</h3>
          <p className="text-sm text-muted mt-1">{config.description}</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full border border-border-strong flex items-center justify-center text-muted-strong hover:border-accent hover:text-accent transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-sm"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full border border-border-strong flex items-center justify-center text-muted-strong hover:border-accent hover:text-accent transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-sm"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const businessProjects = PROJECTS.filter((p) => p.focus === "business");
  const civictechProjects = PROJECTS.filter((p) => p.focus === "civictech");

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ProjectRow focus="business" projects={businessProjects} />
          <ProjectRow focus="civictech" projects={civictechProjects} />
        </motion.div>
      </div>
    </section>
  );
}
