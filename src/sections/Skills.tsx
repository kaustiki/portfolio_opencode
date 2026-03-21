"use client";

import { motion } from "framer-motion";
import { Section, Card } from "@/components";
import { skills } from "@/data/portfolio";

interface SkillCategoryProps {
  title: string;
  items: string[];
  delay: number;
}

function SkillCategory({ title, items, delay }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-background-muted text-text text-sm rounded-md border border-border hover:border-accent transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const categories = [
    { title: "AI & Machine Learning", items: skills.aiMl, delay: 0 },
    { title: "Frameworks & Libraries", items: skills.frameworks, delay: 0.1 },
    { title: "MLOps & Cloud", items: skills.mlops, delay: 0.2 },
    { title: "Programming", items: skills.programming, delay: 0.3 },
  ];

  return (
    <Section id="skills" title="Skills" className="bg-background/60 backdrop-blur-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <Card>
          <h3 className="text-lg font-semibold text-primary mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
