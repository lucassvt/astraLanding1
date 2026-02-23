"use client";

import { motion } from "framer-motion";
import { Package, Zap, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RankCard } from "@/components/ui/RankCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { RANKS } from "@/lib/constants";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "Conseguí tu Starter Pack",
    description:
      "$100,000 en productos de alta rotación. Envío gratis a tu domicilio. También podés empezar con dropshipping.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Vendé y ganá XP",
    description:
      "Cada $1,000 vendidos = 1 XP. Usá el CRM inteligente para fidelizar clientes y nunca perder una recompra.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Subí de rango, ganá más",
    description:
      "5 rangos con márgenes crecientes. Accesorios de 43% a 67% de ganancia. Logros, cajas y ligas competitivas.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-astra-bg-primary/50" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionHeading
            badge="Cómo funciona"
            title="Tres pasos para empezar"
            subtitle="Arrancá tu carrera ASTRA en minutos. Sin complicaciones."
          />

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative p-6 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 transition-all duration-300 hover:border-astra-accent/30 hover:-translate-y-1 group"
              >
                {/* Step number */}
                <span className="text-5xl font-bold text-astra-accent/10 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-astra-accent/10 flex items-center justify-center mb-4 group-hover:bg-astra-accent/20 transition-colors">
                    <step.icon className="w-6 h-6 text-astra-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-astra-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-astra-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rank system */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Sistema de Rangos
            </h3>
            <p className="text-astra-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Tu nivel determina tu rentabilidad. A mayor rango, mayor margen de ganancia.
            </p>
          </motion.div>

          {/* Rank cards - horizontal scroll on mobile */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0">
            {RANKS.map((rank) => (
              <RankCard
                key={rank.id}
                name={rank.name}
                level={rank.level}
                xpRequired={rank.xpRequired}
                foodMarkup={rank.foodMarkup}
                accessoryMarkup={rank.accessoryMarkup}
                color={rank.color}
                description={rank.description}
              />
            ))}
          </div>

          {/* XP conversion note */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm text-astra-text-muted mt-8"
          >
            Factor de conversión: <span className="text-astra-accent font-medium">$1,000 vendidos = 1 XP</span> |
            Mark-up aplicado sobre el costo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
