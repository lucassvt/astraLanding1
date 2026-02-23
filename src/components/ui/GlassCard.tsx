import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowColor?: string;
}

export function GlassCard({
  children,
  className = "",
  hoverable = true,
  glowColor,
}: GlassCardProps) {
  const hoverStyles = hoverable
    ? "hover:border-astra-accent/30 hover:shadow-[0_0_30px_rgba(0,168,126,0.1)] hover:-translate-y-1"
    : "";

  const customGlow = glowColor
    ? { borderColor: glowColor, boxShadow: `0 0 15px ${glowColor}` }
    : undefined;

  return (
    <div
      className={`bg-astra-bg-card/50 border border-astra-border/60 rounded-2xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
      style={customGlow}
    >
      {children}
    </div>
  );
}
