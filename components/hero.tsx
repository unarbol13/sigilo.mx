"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-neutral-500 tracking-wider uppercase mb-6">
            Estudio de software
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1]">
            Construimos software
            <br />
            <span className="text-neutral-500">a la velocidad</span>
            <br />
            <span className="text-neutral-500">de tu negocio</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Apps moviles, sistemas de gestion, automatizacion.
          <br className="hidden md:block" />
          Entendemos tu operacion y la convertimos en tecnologia que funciona.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-100 text-neutral-950 font-medium rounded-lg hover:bg-white transition-colors text-sm"
          >
            Iniciar proyecto
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-neutral-300 font-medium rounded-lg hover:border-neutral-500 hover:text-neutral-100 transition-colors text-sm"
          >
            Ver proyectos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "10+", label: "Proyectos" },
            { value: "4", label: "Sectores" },
            { value: "2-8", label: "Semanas" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-2xl md:text-3xl font-bold text-neutral-100">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
