"use client";

import { MotionConfig } from "framer-motion";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function MotionProvider({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
