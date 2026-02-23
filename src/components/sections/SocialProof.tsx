"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { MapPin, Users, TrendingUp } from "lucide-react";

// TODO: Replace with real testimonials when available
const testimonials = [
  {
    name: "María L.",
    rank: "Avanzado",
    rankColor: "#3b82f6",
    quote:
      "Empecé como algo extra y ahora es mi ingreso principal. Las herramientas te hacen todo más fácil.",
    location: "Tucumán",
  },
  {
    name: "Carlos R.",
    rank: "Iniciado",
    rankColor: "#22c55e",
    quote:
      "Combino las entregas con mis viajes de Uber. Genero casi $400K extra al mes sin esfuerzo.",
    location: "San Miguel de Tucumán",
  },
  {
    name: "Ana S.",
    rank: "Experto",
    rankColor: "#a855f7",
    quote:
      "Lo mejor es el CRM. Me avisa cuándo contactar a cada cliente. Nunca pierdo una recompra.",
    location: "Yerba Buena",
  },
];

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Resellers activos" },
  { icon: MapPin, value: 22, suffix: "", label: "Puntos de retiro" },
  { icon: TrendingUp, value: 100000, suffix: "+", label: "Transacciones" },
];

export function SocialProof() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-astra-bg-primary/50" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionHeading
            badge="Comunidad"
            title="Ellos ya empezaron su carrera"
          />

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60"
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-astra-accent/10 flex items-center justify-center text-sm font-bold text-astra-accent">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-astra-text-primary text-sm">
                      {t.name}
                    </p>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${t.rankColor}20`,
                        color: t.rankColor,
                      }}
                    >
                      {t.rank}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-astra-text-secondary leading-relaxed mb-3">
                  &quot;{t.quote}&quot;
                </p>
                <p className="text-xs text-astra-text-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {t.location}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-astra-accent" />
                  <span className="text-2xl md:text-3xl font-bold text-astra-text-primary">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-sm text-astra-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
