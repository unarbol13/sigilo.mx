"use client";

import { motion } from "framer-motion";
import { SERVICES, CASE_STUDIES } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Services — compact grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-accent-dark tracking-wider uppercase mb-3">
            Capacidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Qué construimos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl px-6 py-5 hover:border-border-strong transition-colors"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {service.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Case studies — implementations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-accent-dark tracking-wider uppercase mb-3">
            Implementaciones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sistemas de gestión
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            Sistemas a la medida para empresas que necesitan control sobre su
            operación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-border-strong hover:shadow-lg transition-all duration-300"
            >
              <p className="font-mono text-xs text-accent-dark uppercase tracking-wider mb-3">
                {cs.sector}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {cs.client}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {cs.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-mono text-muted">
                  {cs.modules}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
