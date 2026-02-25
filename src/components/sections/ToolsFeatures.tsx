"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";
import { FEATURES } from "@/lib/constants";
import {
  BarChart3,
  CalendarClock,
  BookOpen,
  GraduationCap,
  Target,
  Gift,
  ShoppingCart,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  CalendarClock,
  BookOpen,
  GraduationCap,
  Target,
  Gift,
};

const cardColors = [
  { border: "hover:border-astra-cyan/40", icon: "text-astra-cyan", bg: "bg-astra-cyan/10" },
  { border: "hover:border-astra-accent/40", icon: "text-astra-accent", bg: "bg-astra-accent/10" },
  { border: "hover:border-astra-purple/40", icon: "text-astra-purple", bg: "bg-astra-purple/10" },
  { border: "hover:border-astra-gold/40", icon: "text-astra-gold", bg: "bg-astra-gold/10" },
  { border: "hover:border-astra-cyan/40", icon: "text-astra-cyan", bg: "bg-astra-cyan/10" },
  { border: "hover:border-astra-purple/40", icon: "text-astra-purple", bg: "bg-astra-purple/10" },
];

export function ToolsFeatures() {
  return (
    <section
      id="herramientas"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-astra-bg-primary/50" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionHeading
            badge="Herramientas"
            title="Todo lo que necesitás, en un lugar"
            subtitle="Para vender más y mejor."
          />

          {/* Colored feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
            {FEATURES.map((feature, i) => {
              const Icon = iconMap[feature.icon] || BarChart3;
              const colors = cardColors[i % cardColors.length];
              return (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <div
                    className={`glass rounded-2xl p-5 sm:p-6 h-full border border-astra-border/40 ${colors.border} transition-all hover:-translate-y-1`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-base font-bold text-astra-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-astra-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Catálogo Inteligente showcase */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <div className="relative rounded-2xl overflow-hidden border border-astra-cyan/20 shadow-lg shadow-astra-cyan/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/screenshot-catalog.png`}
                  alt="ASTRA Catálogo - Productos para mascotas"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-astra-bg-deep/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-astra-cyan/15 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-astra-cyan" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Catálogo Inteligente
                </h3>
              </div>
              <p className="text-base text-astra-text-secondary leading-relaxed mb-6">
                +134 productos organizados por categoría. Ves tu precio de costo,
                tu ganancia por producto y el stock en tiempo real. Modo vendedor
                y modo cliente para compartir sin mostrar tus márgenes.
              </p>
              <div className="flex flex-wrap gap-3">
                {["134+ productos", "Vista vendedor/cliente", "Filtros inteligentes", "Stock en vivo"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-astra-cyan/10 text-astra-cyan border border-astra-cyan/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
