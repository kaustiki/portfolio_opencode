"use client";

import { motion, type Variants } from "framer-motion";
import { experience, projects } from "@/data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.h2>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-mono mb-8">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                className="card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-semibold text-white">{job.role}</h4>
                    <p className="text-accent text-sm mt-0.5">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-text-muted text-xs font-mono">{job.period}</p>
                    <p className="text-text-muted text-xs mt-0.5">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {job.responsibilities.slice(0, 3).map((r, j) => (
                    <li key={j} className="text-sm text-text-muted flex gap-2">
                      <span className="text-accent mt-1 shrink-0">›</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-mono mb-8">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className={`card flex flex-col ${project.featured ? "border-accent/40" : ""}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="text-base font-semibold text-white leading-snug">
                    {project.title}
                  </h4>
                  {project.featured && (
                    <span className="shrink-0 text-[10px] font-mono tracking-wider text-accent border border-accent/40 rounded px-2 py-0.5">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-accent/70 bg-accent/10 rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
