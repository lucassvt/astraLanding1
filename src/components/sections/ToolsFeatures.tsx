"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { staggerContainer } from "@/lib/animations";
import { FEATURES } from "@/lib/constants";

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
            subtitle="La app ASTRA te da las herramientas profesionales para vender más y mejor."
          />

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
