"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Gift } from "lucide-react";

interface SupplyBoxCardProps {
  rarity: string;
  chance: number;
  color: string;
  glowColor: string;
  examples: string;
}

export function SupplyBoxCard({
  rarity,
  chance,
  color,
  glowColor,
  examples,
}: SupplyBoxCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative p-5 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{
        borderColor: `${color}30`,
        boxShadow: `0 0 20px ${glowColor}`,
      }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}, transparent 70%)`,
        }}
      />

      <div className="relative">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
          style={{ backgroundColor: `${color}20` }}
        >
          <Gift className="w-5 h-5" style={{ color }} />
        </div>

        <h3 className="text-base font-bold mb-1" style={{ color }}>
          {rarity}
        </h3>
        <p className="text-2xl font-bold text-astra-text-primary mb-2">
          {chance}%
        </p>
        <p className="text-xs text-astra-text-muted leading-relaxed">
          {examples}
        </p>
      </div>
    </motion.div>
  );
}
