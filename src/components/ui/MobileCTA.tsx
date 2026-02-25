"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero section
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-astra-bg-deep/90 backdrop-blur-lg border-t border-astra-border/30 md:hidden"
        >
          <a
            href={REGISTER_URL}
            className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-astra-purple to-astra-cyan text-white active:scale-[0.98] transition-transform"
          >
            Comenzá ahora! <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
