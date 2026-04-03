"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neutral-500 tracking-wider uppercase mb-3">
            Capacidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">
            Que construimos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs px-2.5 py-1 rounded-full border border-neutral-700 text-neutral-400"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
