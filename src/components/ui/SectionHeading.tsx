"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-8 sm:mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium rounded-full bg-astra-accent/10 text-astra-accent border border-astra-accent/20">
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${
          gradient ? "gradient-text-astra" : "text-astra-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-astra-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
