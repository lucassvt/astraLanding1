"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { REGISTER_URL } from "@/lib/constants";
import { ArrowRight, ShieldCheck, CreditCard, Truck } from "lucide-react";

const trustSignals = [
  { icon: ShieldCheck, label: "Sin compromiso" },
  { icon: CreditCard, label: "Inversión desde $100K" },
  { icon: Truck, label: "Envío gratis" },
];

export function CTASection() {
  return (
    <section
      id="registrarse"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-astra-bg-card/50 border border-astra-accent/20 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-astra-accent/5 to-astra-cyan/5" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-astra-accent/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-astra-cyan/10 rounded-full blur-[100px]" />

          <div className="relative text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            >
              ¿Listo para comenzar{" "}
              <span className="gradient-text-astra">tu carrera</span>?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-astra-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Unite a ASTRA y empezá a ganar vendiendo productos para mascotas.
              Sin horarios, sin jefes, con respaldo real.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-10">
              <GradientButton href={REGISTER_URL} size="lg">
                Comenzá ahora! <ArrowRight className="w-5 h-5" />
              </GradientButton>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {trustSignals.map((ts) => (
                <div
                  key={ts.label}
                  className="flex items-center gap-2 text-sm text-astra-text-muted"
                >
                  <ts.icon className="w-4 h-4 text-astra-accent" />
                  {ts.label}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
