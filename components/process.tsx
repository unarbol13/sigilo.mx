"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  return (
    <section id="proceso" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-accent-dark tracking-wider uppercase mb-3">
            Metodología
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cómo trabajamos
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            Cada producto que construimos nace de un problema real que nadie está
            resolviendo bien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-border-strong z-0" />
              )}

              <div className="font-mono text-5xl font-bold text-border-strong mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {step.description}
              </p>
              <span className="font-mono text-xs text-accent-dark">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
