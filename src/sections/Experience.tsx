"use client";

import { motion } from "framer-motion";
import { Section, Card } from "@/components";
import Timeline, { TimelineItem } from "@/components/Timeline";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-background/60 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <Timeline>
          {experience.map((job, index) => (
            <TimelineItem key={job.company} date={job.period}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="ml-0 sm:ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {job.role}
                      </h3>
                      <p className="text-accent font-medium">{job.company}</p>
                      <p className="text-text-muted text-sm mt-1">
                        <svg
                          className="inline w-4 h-4 mr-1 -mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-text">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
