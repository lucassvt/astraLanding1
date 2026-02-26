"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";
import {
  BarChart3,
  CalendarClock,
  Target,
  Gift,
  CheckCircle2,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const tools = [
  { icon: BarChart3, label: "Dashboard" },
  { icon: CalendarClock, label: "CRM" },
  { icon: Target, label: "Objetivos" },
  { icon: Gift, label: "Recompensas" },
];

const checkmarks = [
  "Todo integrado",
  "Todo sincronizado",
  "Todo en tiempo real",
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
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: tools list */}
            <motion.div variants={fadeInLeft}>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div
                    key={tool.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-astra-bg-card/50 border border-astra-border/60 hover:border-astra-accent/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-astra-accent/10 flex items-center justify-center shrink-0">
                      <tool.icon className="w-5 h-5 text-astra-accent" />
                    </div>
                    <span className="font-semibold text-astra-text-primary">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: catalog screenshot */}
            <motion.div variants={fadeInRight}>
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
          </div>

          {/* Checkmarks */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 sm:mt-14"
          >
            {checkmarks.map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-astra-accent shrink-0" />
                <span className="text-sm sm:text-base font-medium text-astra-text-primary">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
