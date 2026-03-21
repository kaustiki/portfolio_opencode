import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-background border border-border rounded-lg p-6 shadow-sm transition-all duration-200 hover:border-accent ${className}`}
      style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
    >
      {children}
    </div>
  );
}
