"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { REGISTER_URL } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080812] via-[#12121f] to-[#0a1628]" />

      {/* Radial glow behind title */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] bg-astra-accent/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-1 sm:mb-2 tracking-tight"
        >
          <span className="gradient-text-astra">ASTRA</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-xl md:text-2xl text-astra-cyan/80 italic mb-4 sm:mb-6 font-light"
        >
          &quot;Ad Astra Per Aspera&quot;
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-base sm:text-xl md:text-2xl text-astra-text-secondary max-w-3xl mx-auto mb-4 sm:mb-5 leading-relaxed px-2"
        >
          Vendé productos para mascotas. Subí de nivel.{" "}
          <span className="text-astra-text-primary font-semibold">
            Ganá hasta $905.760/mes.
          </span>
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm sm:text-base text-astra-purple/90 font-medium mb-8 sm:mb-10"
        >
          Emprendé en el mercado de las mascotas, el de mayor crecimiento.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <GradientButton href={REGISTER_URL} size="lg">
            Comenzar mi Carrera <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <GradientButton
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .querySelector("#como-funciona")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver cómo funciona
          </GradientButton>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-10"
        >
          {[
            { value: "5 Rangos", label: "Para crecer" },
            { value: "Hasta 70%", label: "Markup" },
            { value: "22", label: "Puntos de retiro" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-astra-text-primary">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-astra-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-astra-text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}
