"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Star } from "lucide-react";

interface RankCardProps {
  name: string;
  level: number;
  xpRequired: number;
  foodMarkup: number;
  accessoryMarkup: number;
  color: string;
  description: string;
}

export function RankCard({
  name,
  level,
  xpRequired,
  foodMarkup,
  accessoryMarkup,
  color,
  description,
}: RankCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex flex-col items-center p-5 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 min-w-[200px] snap-center transition-all duration-300 hover:-translate-y-1"
      style={{
        borderTopColor: color,
        borderTopWidth: "3px",
        boxShadow: `0 4px 20px ${color}15`,
      }}
    >
      {/* Level stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5"
            fill={i < level ? color : "transparent"}
            stroke={i < level ? color : "#2a2a4a"}
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Rank name */}
      <h3 className="text-lg font-bold mb-1" style={{ color }}>
        {name}
      </h3>

      {/* XP */}
      <p className="text-sm text-astra-text-muted mb-4">
        {xpRequired > 0 ? `${xpRequired.toLocaleString("es-AR")} XP` : "Inicio"}
      </p>

      {/* Markups */}
      <div className="flex gap-3 mb-3">
        <div className="text-center">
          <div className="text-xs text-astra-text-muted mb-1">Alimentos</div>
          <div
            className="text-lg font-bold px-3 py-1 rounded-lg"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {foodMarkup}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-astra-text-muted mb-1">Accesorios</div>
          <div
            className="text-lg font-bold px-3 py-1 rounded-lg"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {accessoryMarkup}%
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-astra-text-muted text-center">{description}</p>
    </motion.div>
  );
}
