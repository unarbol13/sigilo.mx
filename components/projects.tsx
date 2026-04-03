"use client";

import { motion } from "framer-motion";
import { PROJECTS, type Project, type ProjectStatus } from "@/lib/data";

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "En produccion", dot: "bg-emerald-400", text: "text-emerald-400" },
  development: { label: "En desarrollo", dot: "bg-blue-400", text: "text-blue-400" },
  design: { label: "En diseno", dot: "bg-amber-400", text: "text-amber-400" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];
  const href = project.mockupsUrl ?? project.url;

  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-neutral-500 mt-0.5">
            {project.type} · {project.sector}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          <span className={`text-xs font-mono ${status.text}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 leading-relaxed flex-1">
        {project.tagline}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link indicator */}
      {href && (
        <div className="mt-4 pt-4 border-t border-neutral-800">
          <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
            {project.mockupsUrl ? "Ver mockups →" : "Visitar sitio →"}
          </span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {Card}
      </a>
    );
  }

  return Card;
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neutral-500 tracking-wider uppercase mb-3">
            Portafolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            Proyectos
          </h2>
          <p className="text-neutral-400 mt-3 max-w-xl">
            Apps, plataformas y sistemas que operan en produccion o estan en
            construccion activa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
