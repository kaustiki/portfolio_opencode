"use client";

import { motion } from "framer-motion";
import { Section, Card } from "@/components";
import Timeline, { TimelineItem } from "@/components/Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem key={edu.institution} date={edu.period}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="ml-0 sm:ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-medium">{edu.institution}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </Card>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
