"use client";

import { useState } from "react";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/sigilo_logo_oscuro.png"
            alt="Sigilo"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-display text-sm font-bold tracking-wider text-foreground uppercase">
            Sigilo
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#proyectos"
            className="text-sm text-muted-strong hover:text-accent transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#servicios"
            className="text-sm text-muted-strong hover:text-accent transition-colors"
          >
            Servicios
          </a>
          <a
            href="#proceso"
            className="text-sm text-muted-strong hover:text-accent transition-colors"
          >
            Proceso
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-background bg-accent px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Iniciar proyecto
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">

          <button
            onClick={() => setOpen(!open)}
            className="text-muted p-2 text-xl"
            aria-label="Menu"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <a
            href="#proyectos"
            onClick={() => setOpen(false)}
            className="text-sm text-muted"
          >
            Proyectos
          </a>
          <a
            href="#servicios"
            onClick={() => setOpen(false)}
            className="text-sm text-muted"
          >
            Servicios
          </a>
          <a
            href="#proceso"
            onClick={() => setOpen(false)}
            className="text-sm text-muted"
          >
            Proceso
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-background bg-accent px-4 py-2 rounded-lg text-center hover:bg-accent-hover transition-colors"
          >
            Iniciar proyecto
          </a>
        </div>
      )}
    </nav>
  );
}
