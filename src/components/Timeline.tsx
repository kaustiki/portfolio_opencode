import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  children: ReactNode;
}

export function TimelineItem({ date, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12">
      <div className="absolute left-0 sm:left-3 top-0 w-6 h-6 -translate-x-1/2 sm:translate-x-0 bg-accent rounded-full border-4 border-background shadow-sm" />
      <div className="absolute left-[11px] sm:left-[19px] top-6 w-0.5 h-full bg-border" />
      <div className="relative">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-accent bg-accent/10 rounded-full">
          {date}
        </span>
        {children}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="space-y-8">{children}</div>;
}
