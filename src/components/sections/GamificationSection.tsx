"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupplyBoxCard } from "@/components/ui/SupplyBoxCard";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { SUPPLY_BOXES, STARS, LEAGUES } from "@/lib/constants";
import { Trophy, Users } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function GamificationSection() {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionHeading
            badge="Gamificación"
            title="No es solo vender, es una aventura"
            subtitle="Cajas de recompensa, logros, ligas y un avatar que evoluciona con vos."
            gradient
          />

          {/* Supply Boxes */}
          <motion.div variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl font-bold text-astra-text-primary mb-2 text-center">
              Cajas de Suministros
            </h3>
            <p className="text-xs sm:text-sm text-astra-text-secondary text-center mb-6 sm:mb-8 max-w-xl mx-auto">
              Completá metas semanales, mensuales o desafíos especiales para ganar cajas con productos reales.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {SUPPLY_BOXES.map((box) => (
                <SupplyBoxCard key={box.rarity} {...box} />
              ))}
            </div>
            <p className="text-xs text-astra-text-muted text-center mt-4">
              Sistema de Piedad: tras 9 cajas sin premio Épico+, la 10ma garantiza Épico mínimo.
            </p>
          </motion.div>

          {/* Stars / Achievements */}
          <motion.div variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl font-bold text-astra-text-primary mb-2 text-center">
              Estrellas y Logros
            </h3>
            <p className="text-xs sm:text-sm text-astra-text-secondary text-center mb-6 sm:mb-8">
              8 estrellas que reconocen tu excelencia en diferentes áreas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {STARS.map((star) => (
                <div
                  key={star.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-astra-bg-card/30 border border-astra-border/40 hover:border-astra-cyan/30 transition-colors"
                >
                  <span className="text-xl">{star.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-astra-cyan">
                      {star.name}
                    </p>
                    <p className="text-xs text-astra-text-muted">
                      {star.criterion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leagues */}
          <motion.div variants={fadeInUp} className="mb-12 sm:mb-16">
            <h3 className="text-xl font-bold text-astra-text-primary mb-2 text-center">
              Ligas Dinámicas
            </h3>
            <p className="text-sm text-astra-text-secondary text-center mb-8">
              Competí bimestralmente con ~50 resellers de tu nivel.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {LEAGUES.map((league) => (
                <div
                  key={league.name}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 transition-all hover:-translate-y-0.5"
                  style={{ borderTopColor: league.color, borderTopWidth: "3px" }}
                >
                  <Trophy
                    className="w-8 h-8 shrink-0"
                    style={{ color: league.color }}
                  />
                  <div>
                    <h4
                      className="font-bold text-base"
                      style={{ color: league.color }}
                    >
                      Liga {league.name}
                    </h4>
                    <p className="text-xs text-astra-text-muted">
                      {league.criterion}
                    </p>
                    <p className="text-xs text-astra-text-secondary mt-1">
                      Top 3: {league.reward}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community — avatar pyramid layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-astra-purple/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-astra-purple" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Comunidad de Resellers
                </h3>
              </div>
              <p className="text-base text-astra-text-secondary leading-relaxed mb-6">
                Conectá con otros resellers, mirá quién visitó tu perfil,
                enviá felicitaciones y competí en las ligas dinámicas. Tu avatar
                evoluciona con tu rango.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Perfiles visibles", "Rankings en vivo", "Avatares 3D", "Felicitaciones"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-astra-purple/10 text-astra-purple border border-astra-purple/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              {/* Pyramid layout: 1 top center, 2 bottom */}
              <div className="flex flex-col items-center gap-4">
                {/* Top */}
                <div className="relative w-48 sm:w-56">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-astra-cyan/60 via-astra-purple/40 to-astra-accent/60 blur-md opacity-80" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/images/profile-1.webp`}
                    alt="Perfil vendedor 1"
                    className="relative rounded-2xl w-full h-auto border border-astra-cyan/30 shadow-lg shadow-astra-cyan/20"
                  />
                </div>
                {/* Bottom row */}
                <div className="flex gap-4">
                  <div className="relative w-40 sm:w-48">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-astra-purple/60 via-astra-accent/40 to-astra-cyan/40 blur-md opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${basePath}/images/profile-2.webp`}
                      alt="Perfil vendedor 2"
                      className="relative rounded-2xl w-full h-auto border border-astra-purple/30 shadow-lg shadow-astra-purple/20"
                    />
                  </div>
                  <div className="relative w-40 sm:w-48">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-astra-accent/60 via-astra-cyan/40 to-astra-purple/40 blur-md opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${basePath}/images/profile-3.webp`}
                      alt="Perfil vendedor 3"
                      className="relative rounded-2xl w-full h-auto border border-astra-accent/30 shadow-lg shadow-astra-accent/20"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
