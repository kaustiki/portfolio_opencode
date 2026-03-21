"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components";
import { projects } from "@/data/portfolio";

const tabLabel: Record<string, string> = {
  "violence-detection": "Violence Detection",
  "image-captioning": "Image Captioning",
  "sentiment-analysis": "Sentiment Analysis",
  "ageing-signs": "Ageing Signs",
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <Section id="projects" title="Projects">
      {/* Tab bar */}
      <div className="flex flex-wrap border-b border-border mb-10">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(i)}
            className={`relative px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
              activeIndex === i
                ? "text-accent"
                : "text-text-muted hover:text-text"
            }`}
          >
            {tabLabel[project.id] ?? project.title}
            {activeIndex === i && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Active project panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.22 }}
          className="max-w-2xl"
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {active.featured && (
              <span className="px-2.5 py-0.5 bg-accent text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
            <span className="text-text-muted text-sm">{active.type}</span>
            {active.institution && (
              <>
                <span className="text-border select-none">·</span>
                <span className="text-text-muted text-sm">{active.institution}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            {active.title}
          </h3>

          {/* Period */}
          <p className="text-text-muted text-sm mb-6 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {active.period}
          </p>

          {/* Description */}
          <p className="text-text leading-relaxed text-base mb-8">
            {active.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {active.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm border border-border text-text-muted rounded-md hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot progress indicators */}
      <div className="flex gap-2 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-8 bg-accent"
                : "w-2 bg-border hover:bg-text-muted"
            }`}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
