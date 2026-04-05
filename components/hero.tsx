"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/sigilo_logo.png"
            alt="Sigilo"
            width={72}
            height={72}
            className="mx-auto mb-8 rounded-xl"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-foreground leading-[1.05] uppercase">
            Sigilo
          </h1>
          <p className="font-display text-sm text-muted tracking-wider uppercase mt-4">
            Software & Sistemas de gestión
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted leading-relaxed italic">
            &ldquo;El tipo más exitoso que conozco me dijo que las cosas mejor
            hechas son las que no hacen ruido — que lo verdaderamente bueno
            opera en <em className="not-italic font-semibold text-foreground">sigilo</em>.&rdquo;
          </p>
          <p className="text-sm text-muted mt-4">Me quedé con eso.</p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-colors text-sm"
          >
            Iniciar proyecto
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 border border-border-strong text-muted font-medium rounded-lg hover:border-foreground hover:text-foreground transition-colors text-sm"
          >
            Ver proyectos
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-sm text-muted"
        >
          Salamanca, Gto. — Disponible para proyectos en todo México
        </motion.p>
      </div>
    </section>
  );
}
