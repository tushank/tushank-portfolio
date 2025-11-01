"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 1.11, 0.81, 0.99],
        opacity: { duration: 0.5 },
        scale: { duration: 0.7 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
