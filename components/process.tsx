"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-neutral-500 tracking-wider uppercase mb-3">
            Metodologia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            Como trabajamos
          </h2>
          <p className="text-neutral-400 mt-3 max-w-xl">
            No improvisamos. Cada proyecto sigue un proceso probado que
            minimiza riesgo y maximiza velocidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-px bg-neutral-800 z-0" />
              )}

              <div className="font-mono text-4xl font-bold text-neutral-800 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                {step.description}
              </p>
              <span className="font-mono text-xs text-neutral-600">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
