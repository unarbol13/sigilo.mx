"use client";

import { motion } from "framer-motion";

const STACK = [
  "Next.js",
  "React Native",
  "Python",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Figma",
];

export function TechStack() {
  return (
    <section className="py-12 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {STACK.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm text-muted tracking-wide"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
