"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = [
  { label: "AI & ML", items: skills.aiMl },
  { label: "Frameworks", items: skills.frameworks },
  { label: "MLOps & Cloud", items: skills.mlops },
  { label: "Programming", items: skills.programming },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-mono mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-white/80 bg-white/5 border border-border hover:border-accent transition-colors rounded px-3 py-1"
                  >
                    {skill}
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
