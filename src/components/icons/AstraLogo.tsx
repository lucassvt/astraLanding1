const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface AstraLogoProps {
  className?: string;
  showText?: boolean;
}

export function AstraLogo({ className = "", showText = true }: AstraLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/images/logo-astra.svg`}
        alt="ASTRA Logo"
        className="h-9 w-auto"
      />
      {showText && (
        <span className="text-xl font-bold tracking-wider gradient-text-astra">
          ASTRA
        </span>
      )}
    </div>
  );
}
