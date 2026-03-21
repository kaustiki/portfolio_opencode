"use client";

import { motion } from "framer-motion";
import { Section, Card } from "@/components";
import { certifications, internships } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Internships">
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="text-center hover:border-accent">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1">{cert.name}</h3>
              <p className="text-accent font-medium mb-2">{cert.issuer}</p>
              <p className="text-text-muted text-sm">{cert.period}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-6">Internships</h3>
        <div className="flex flex-wrap gap-4">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg hover:border-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">{internship.name}</p>
                <p className="text-xs text-text-muted">{internship.issuer} · {internship.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
