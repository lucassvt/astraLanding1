"use client";

import { motion } from "framer-motion";
import { Rocket, Wallet, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const mainBenefits = [
  {
    icon: Rocket,
    title: "Sin jefes, sin horarios",
    description:
      "Vos ponés el ritmo. Vendé desde donde quieras, cuando quieras.",
  },
  {
    icon: Wallet,
    title: "Cobrá rápido y con control",
    description: "Elegí cuándo retirar tus ganancias.",
  },
  {
    icon: TrendingUp,
    title: "Márgenes crecientes",
    description: "Rentabilidad real.",
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
        >
          <SectionHeading
            badge="Sobre ASTRA"
            title="Tu carrera de seller"
            subtitle="Vendé productos para mascotas y sumá XP. Subí de rango, desbloqueá beneficios y mejorá tus márgenes en cada nivel."
          />

          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-14">
            <p className="text-astra-text-secondary leading-relaxed mb-2 max-w-2xl mx-auto">
              ASTRA es un programa de reventa de productos para mascotas.
            </p>
            <p className="text-astra-accent font-semibold">
              Activá ingresos en tu tiempo libre
            </p>
          </motion.div>

          {/* 3 main benefits - Uber-style row */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            {mainBenefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-astra-bg-card/30 border border-astra-border/40 hover:border-astra-accent/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-astra-accent/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-astra-accent" />
                </div>
                <h3 className="text-lg font-bold text-astra-text-primary mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-astra-text-secondary leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* "Conocer más beneficios" link */}
          <motion.div variants={fadeInUp} className="text-center">
            <a
              href="#beneficios"
              className="inline-flex items-center gap-2 text-astra-accent font-semibold hover:underline transition-colors"
            >
              Conocer más beneficios
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
