"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-astra-border/60 rounded-xl overflow-hidden transition-colors duration-300 hover:border-astra-accent/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-astra-bg-card/30 hover:bg-astra-bg-card/50 transition-colors"
      >
        <span className="text-base md:text-lg font-medium text-astra-text-primary pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-astra-accent shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-astra-text-secondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
