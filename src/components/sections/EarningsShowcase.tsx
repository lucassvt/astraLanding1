"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { IncomeCalculator } from "@/components/ui/IncomeCalculator";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { DollarSign, Clock } from "lucide-react";

const scenarios = [
  {
    label: "Part-time",
    detail: "10 ventas/semana",
    icon: Clock,
    minIncome: 322920,
    maxIncome: 452880,
    description: "Ideal para complementar tus ingresos. Unas horas al día, a tu ritmo.",
  },
  {
    label: "Dedicación activa",
    detail: "20 ventas/semana",
    icon: DollarSign,
    minIncome: 645840,
    maxIncome: 905760,
    description: "Para quienes quieren hacer de ASTRA su actividad principal.",
  },
];

export function EarningsShowcase() {
  return (
    <section
      id="ganancias"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionHeading
            badge="Ganancias"
            title="¿Cuánto podés ganar?"
            subtitle="Datos reales basados en más de 100,000 transacciones."
            gradient
          />

          {/* Income cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {scenarios.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="p-6 md:p-8 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 hover:border-astra-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-astra-accent/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-astra-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-astra-text-primary">{s.label}</h3>
                    <p className="text-sm text-astra-text-muted">{s.detail}</p>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-astra-text-primary mb-1">
                  <AnimatedCounter target={s.minIncome} prefix="$" />
                  <span className="text-astra-text-muted mx-1">-</span>
                  <AnimatedCounter target={s.maxIncome} prefix="$" />
                  <span className="text-sm sm:text-base font-normal text-astra-text-muted">
                    /mes
                  </span>
                </div>

                <p className="text-sm text-astra-text-secondary mt-2">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Interactive calculator */}
          <motion.div variants={fadeInUp}>
            <IncomeCalculator />
          </motion.div>

          {/* Context note */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm text-astra-text-muted mt-8"
          >
            Ticket promedio: $32,404 | Mix: 70% alimentos, 20% accesorios, 10% salud |
            Rango del Nivel 1 al 5
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
