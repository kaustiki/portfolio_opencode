"use client";

import { motion } from "framer-motion";
import { Section } from "@/components";
import { fineArts } from "@/data/portfolio";

const artIcons: Record<string, JSX.Element> = {
  dance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="4" r="1.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8.5c1-.5 2-.7 3-.5 1 .2 2 .5 2.5 1.5M9 8.5L7 14m2-5.5l2 5 2-3 2 4M7 14l-1.5 4m1.5-4h3" />
    </svg>
  ),
  music: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  martial: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  chess: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-5.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M8 12h8m-4-4v8m-5 4h2a1 1 0 001-1v-1H8m8 0h2a1 1 0 001-1v-1h-3" />
    </svg>
  ),
};

interface ArtItemProps {
  name: string;
  type?: string;
  delay: number;
}

function ArtItem({ name, type, delay }: ArtItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3"
    >
      <span className="text-accent">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
      <div>
        <span className="text-text font-medium">{name}</span>
        {type && <span className="text-text-muted text-sm ml-2">({type})</span>}
      </div>
    </motion.div>
  );
}

export default function FineArts() {
  return (
    <Section id="fine-arts" title="Fine Arts">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className="bg-background border border-border rounded-lg p-6 text-center hover:border-accent transition-colors"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
            {artIcons.dance}
          </div>
          <h3 className="text-lg font-semibold text-primary mb-4">Dance</h3>
          <div className="space-y-2">
            {fineArts.dance.map((item, index) => (
              <ArtItem key={item} name={item} delay={0.1 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background border border-border rounded-lg p-6 text-center hover:border-accent transition-colors"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
            {artIcons.music}
          </div>
          <h3 className="text-lg font-semibold text-primary mb-4">Music</h3>
          <div className="space-y-2">
            {fineArts.music.map((item, index) => (
              <ArtItem key={item.name} name={item.name} type={item.type} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background border border-border rounded-lg p-6 text-center hover:border-accent transition-colors"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
            {artIcons.martial}
          </div>
          <h3 className="text-lg font-semibold text-primary mb-4">Martial Arts</h3>
          <div className="space-y-2">
            {fineArts.martialArts.map((item, index) => (
              <ArtItem key={item} name={item} delay={0.3 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-background border border-border rounded-lg p-6 text-center hover:border-accent transition-colors"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
            {artIcons.chess}
          </div>
          <h3 className="text-lg font-semibold text-primary mb-4">Chess</h3>
          <div className="mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Enthusiast
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
