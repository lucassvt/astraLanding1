import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  size?: "md" | "lg";
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  size = "md",
}: GradientButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-6 py-4 text-base sm:px-8 sm:text-lg min-h-[52px]"
      : "px-5 py-3 text-sm sm:px-6 sm:text-base min-h-[48px]";

  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto ${sizeClasses} ${className}`;

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-astra-accent to-astra-cyan text-white hover:shadow-[0_0_30px_rgba(0,168,126,0.4)] hover:-translate-y-0.5"
      : "border border-astra-accent/40 text-astra-accent hover:bg-astra-accent/10 hover:border-astra-accent/60";

  const classes = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
