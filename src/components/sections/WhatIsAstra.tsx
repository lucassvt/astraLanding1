"use client";

import { motion } from "framer-motion";
import { Rocket, Shield, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import { RANKS } from "@/lib/constants";
import { Star } from "lucide-react";

const bullets = [
  {
    icon: Rocket,
    title: "Sin jefes, sin horarios",
    description: "Vos ponés el ritmo. Vendé desde donde quieras, cuando quieras.",
  },
  {
    icon: Shield,
    title: "Respaldo empresarial real",
    description: "22 sucursales, importación propia y producción de marca propia.",
  },
  {
    icon: TrendingUp,
    title: "Márgenes crecientes",
    description: "Del 29% al 48% en alimentos, del 43% al 67% en accesorios.",
  },
];

export function WhatIsAstra() {
  return (
    <section
      id="que-es-astra"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* Text column */}
          <div>
            <SectionHeading
              badge="Sobre ASTRA"
              title="Tu carrera como reseller, gamificada"
              subtitle="Vendé productos para mascotas como en un videojuego: cada venta suma XP, subís de rango y desbloqueás mejores márgenes."
              centered={false}
            />

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-astra-text-secondary leading-relaxed mb-4">
                ASTRA es un programa de reventa de productos para mascotas
                respaldado por una empresa con 22 sucursales, importaciones propias
                y producción de marca propia.
              </p>
              <p className="text-astra-accent font-semibold">
                Acá no ganás plata por &quot;meter gente&quot;. Ganás plata vendiendo
                productos.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-astra-accent/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-astra-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-astra-text-primary">
                      {b.title}
                    </h3>
                    <p className="text-sm text-astra-text-secondary">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual column - rank progression */}
          <motion.div
            variants={fadeInRight}
            className="relative p-6 md:p-8 rounded-2xl bg-astra-bg-card/30 border border-astra-border/40"
          >
            <h3 className="text-sm font-medium text-astra-text-muted mb-6 uppercase tracking-wider">
              Progresión de Rangos
            </h3>
            <div className="space-y-4">
              {RANKS.map((rank, i) => (
                <div key={rank.id} className="flex items-center gap-2 sm:gap-4">
                  {/* Stars */}
                  <div className="flex gap-0.5 w-14 sm:w-20 justify-end">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-3 h-3"
                        fill={si < rank.level ? rank.color : "transparent"}
                        stroke={si < rank.level ? rank.color : "#2a2a4a"}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  {/* Name */}
                  <span
                    className="text-xs sm:text-sm font-semibold w-16 sm:w-24"
                    style={{ color: rank.color }}
                  >
                    {rank.name}
                  </span>
                  {/* Progress bar */}
                  <div className="flex-1 h-3 bg-astra-border/30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${20 + i * 20}%`,
                        backgroundColor: rank.color,
                        boxShadow: `0 0 8px ${rank.color}60`,
                      }}
                    />
                  </div>
                  {/* Markup */}
                  <span className="text-xs text-astra-text-muted w-16 text-right">
                    {rank.foodMarkup}-{rank.accessoryMarkup}%
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-astra-accent/10 rounded-full blur-[80px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
