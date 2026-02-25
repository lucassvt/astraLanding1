"use client";

import { useState } from "react";
import { RANKS, AVG_TICKET } from "@/lib/constants";

export function IncomeCalculator() {
  const [salesPerWeek, setSalesPerWeek] = useState(20);
  const [rankIndex, setRankIndex] = useState(4);

  const rank = RANKS[rankIndex];
  const monthlyIncome = Math.round(
    salesPerWeek * 4 * rank.earningsPerSale
  );

  return (
    <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-astra-bg-card/50 border border-astra-border/60">
      <h3 className="text-lg font-bold text-astra-text-primary mb-6">
        Calculadora de Ingresos
      </h3>

      {/* Sales per week slider */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-sm text-astra-text-secondary">
            Ventas por semana
          </label>
          <span className="text-sm font-bold text-astra-accent">
            {salesPerWeek}
          </span>
        </div>
        <input
          type="range"
          min={5}
          max={30}
          step={1}
          value={salesPerWeek}
          onChange={(e) => setSalesPerWeek(Number(e.target.value))}
          className="w-full h-2.5 bg-astra-border/30 rounded-full appearance-none cursor-pointer touch-none accent-astra-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-astra-accent [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,168,126,0.4)] sm:[&::-webkit-slider-thumb]:w-5 sm:[&::-webkit-slider-thumb]:h-5"
        />
        <div className="flex justify-between text-xs text-astra-text-muted mt-1">
          <span>5</span>
          <span>15</span>
          <span>30</span>
        </div>
      </div>

      {/* Rank selector */}
      <div className="mb-8">
        <label className="text-sm text-astra-text-secondary block mb-2">
          Tu rango
        </label>
        <div className="flex gap-2 flex-wrap">
          {RANKS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setRankIndex(i)}
              className={`px-3 py-2 text-sm rounded-lg border transition-all min-h-[40px] ${
                i === rankIndex
                  ? "border-transparent font-semibold"
                  : "border-astra-border/40 text-astra-text-muted hover:border-astra-border"
              }`}
              style={
                i === rankIndex
                  ? {
                      backgroundColor: `${r.color}20`,
                      color: r.color,
                      borderColor: `${r.color}40`,
                    }
                  : undefined
              }
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="p-5 rounded-xl bg-astra-accent/5 border border-astra-accent/20">
        <p className="text-sm text-astra-text-secondary mb-1">
          Ingreso mensual estimado
        </p>
        <p className="text-3xl md:text-4xl font-bold text-astra-accent">
          ${monthlyIncome.toLocaleString("es-AR")}
          <span className="text-base font-normal text-astra-text-muted">
            /mes
          </span>
        </p>
        <p className="text-xs text-astra-text-muted mt-2">
          Basado en ticket promedio de ${AVG_TICKET.toLocaleString("es-AR")} |
          Mark-up promedio ~{rank.avgMarkup}% | {salesPerWeek} ventas/sem × 4 sem
        </p>
      </div>
    </div>
  );
}
