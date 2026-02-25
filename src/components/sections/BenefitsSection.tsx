"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wallet,
  TrendingUp,
  Package,
  LayoutDashboard,
  Globe,
  Truck,
  BookOpen,
  Award,
  Calculator,
  CreditCard,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const benefits = [
  {
    icon: Zap,
    title: "Trabajo on demand",
    description: "Sin horarios, sin jefes, sin límites. Vos decidís cuándo, cuánto y qué tan seguido vender.",
  },
  {
    icon: Wallet,
    title: "Cobrá rápido y con control",
    description: "Elegí cuándo retirar tus ganancias.",
  },
  {
    icon: TrendingUp,
    title: "Márgenes crecientes",
    description: "Rentabilidad real: hasta 70% en accesorios y 50% en alimento.",
  },
  {
    icon: Package,
    title: "Productos importados y fabricación propia",
    description: "Competitividad y buenos precios de mercado gracias a importación y producción propia.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestión online",
    description: "Controlá tus ingresos y tu productividad desde cualquier lugar.",
  },
  {
    icon: Globe,
    title: "Tu propia tienda web",
    description: "Tu link de venta para WhatsApp, redes y clientes frecuentes.",
  },
  {
    icon: Truck,
    title: "Dropshipping opcional",
    description: "Vos vendés por encargo, ASTRA entrega.",
  },
  {
    icon: Calculator,
    title: "Simplificación financiera",
    description: "Tenés claro cuánto vendés, cuánto comprás y cuánto ganás.",
  },
  {
    icon: CreditCard,
    title: "Ofrecé cuotas a tus clientes",
    description: "Más ventas cerradas con opciones de pago flexibles para tus compradores.",
  },
  {
    icon: BookOpen,
    title: "Capacitaciones guiadas",
    description: "Herramientas simples y prácticas para emprender y avanzar a tu ritmo.",
  },
  {
    icon: Award,
    title: "Reconocimientos",
    description: "Premios y beneficios por tus logros y tu crecimiento.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
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
            badge="Beneficios"
            title="Todo lo que ganás siendo parte"
            subtitle="Un programa diseñado para que crezcas a tu manera."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="flex gap-4 items-start p-5 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60 transition-all duration-300 hover:border-astra-accent/30 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-astra-accent/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-astra-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-astra-text-primary mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-astra-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
