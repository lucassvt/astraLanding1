"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupplyBoxCard } from "@/components/ui/SupplyBoxCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SUPPLY_BOXES, STARS, LEAGUES } from "@/lib/constants";
import { Trophy, Swords, Users } from "lucide-react";

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
          <motion.div variants={fadeInUp}>
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

          {/* Social + Avatar mention */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-2 gap-4"
          >
            <div className="p-5 rounded-2xl bg-astra-bg-card/30 border border-astra-border/40 flex items-start gap-4">
              <Users className="w-6 h-6 text-astra-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-astra-text-primary mb-1">
                  Interacción Social
                </h4>
                <p className="text-sm text-astra-text-secondary">
                  Perfiles visibles, &quot;Quién te vió&quot;, felicitaciones y choques de puños. Competí y conectá con otros resellers.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-astra-bg-card/30 border border-astra-border/40 flex items-start gap-4">
              <Swords className="w-6 h-6 text-astra-purple shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-astra-text-primary mb-1">
                  Avatar Evolutivo
                </h4>
                <p className="text-sm text-astra-text-secondary">
                  Tu avatar evoluciona con tu rango. Estilo 3D estilizado desde ropa civil hasta armadura legendaria con aura.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
