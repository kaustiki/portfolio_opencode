"use client";

import { motion } from "framer-motion";
import { aboutHighlights, education } from "@/data/portfolio";

export default function About() {
  const topTwo = education.slice(0, 2);

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-text-muted leading-relaxed text-base mb-8">
              I&apos;m a Computer Science engineer with hands-on experience building ML pipelines,
              NLP systems, and backend APIs. Currently pursuing an M.Tech in AI &amp; ML at BITS
              Pilani (CGPA 9.51), I thrive at the intersection of research and engineering —
              turning model prototypes into reliable, deployed systems.
            </p>
            <ul className="space-y-3">
              {aboutHighlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-muted"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — education */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-mono mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {topTwo.map((edu) => (
                <div key={edu.institution} className="card">
                  <p className="text-accent text-xs font-mono mb-1">{edu.grade}</p>
                  <h4 className="text-white text-sm font-semibold leading-snug">{edu.degree}</h4>
                  <p className="text-text-muted text-sm mt-1">{edu.institution}</p>
                  <p className="text-text-muted text-xs mt-1 font-mono">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
