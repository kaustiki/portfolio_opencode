import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({
  id,
  children,
  className = "",
  title,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <h2 className="section-title">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
