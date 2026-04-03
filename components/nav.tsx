"use client";

import { useState } from "react";
import Link from "next/link";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-wider text-neutral-100 uppercase"
        >
          Estudio_
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#proyectos" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            Proyectos
          </a>
          <a href="#servicios" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            Servicios
          </a>
          <a href="#proceso" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            Proceso
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-neutral-950 bg-neutral-100 px-4 py-2 rounded-lg hover:bg-white transition-colors"
          >
            Iniciar proyecto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-400 p-2"
          aria-label="Menu"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 flex flex-col gap-4">
          <a href="#proyectos" onClick={() => setOpen(false)} className="text-sm text-neutral-400">
            Proyectos
          </a>
          <a href="#servicios" onClick={() => setOpen(false)} className="text-sm text-neutral-400">
            Servicios
          </a>
          <a href="#proceso" onClick={() => setOpen(false)} className="text-sm text-neutral-400">
            Proceso
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-neutral-950 bg-neutral-100 px-4 py-2 rounded-lg text-center"
          >
            Iniciar proyecto
          </a>
        </div>
      )}
    </nav>
  );
}
