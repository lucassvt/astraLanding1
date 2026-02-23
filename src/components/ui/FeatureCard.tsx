"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import {
  BarChart3,
  CalendarClock,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  CalendarClock,
  BookOpen,
  GraduationCap,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const Icon = iconMap[icon] || BarChart3;

  return (
    <motion.div
      variants={fadeInUp}
      className="group p-6 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 transition-all duration-300 hover:border-astra-accent/30 hover:shadow-[0_0_30px_rgba(0,168,126,0.1)] hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-astra-accent/10 flex items-center justify-center mb-4 group-hover:bg-astra-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-astra-accent" />
      </div>
      <h3 className="text-lg font-bold text-astra-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-astra-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
