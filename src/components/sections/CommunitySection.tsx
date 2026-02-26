"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import { Users } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function CommunitySection() {
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
            badge="Comunidad"
            title="Comunidad ASTRA"
            subtitle="ASTRA organiza el rendimiento en rangos, niveles y ligas dinámicas."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-astra-purple/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-astra-purple" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Comunidad de Sellers
                </h3>
              </div>
              <p className="text-base text-astra-text-secondary leading-relaxed mb-6">
                Compará tu desempeño, seguí tu evolución y posicionate entre los
                mejores de la red. Conectá con otros sellers y mirá quién visitó
                tu perfil.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Perfiles visibles",
                  "Rankings en vivo",
                  "Avatares 3D",
                  "Ligas dinámicas",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-astra-purple/10 text-astra-purple border border-astra-purple/20"
                  >
                    {tag}
                  </span>
                ))}
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
