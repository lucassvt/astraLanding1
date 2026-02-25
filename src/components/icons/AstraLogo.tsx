import { Rocket } from "lucide-react";

interface AstraLogoProps {
  className?: string;
  showText?: boolean;
}

export function AstraLogo({ className = "", showText = true }: AstraLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-astra-purple to-astra-cyan flex items-center justify-center shadow-[0_0_15px_rgba(90,79,207,0.4)]">
        <Rocket className="w-5 h-5 text-white" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-wider gradient-text-astra">
          ASTRA
        </span>
      )}
    </div>
  );
}
