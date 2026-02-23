interface AstraLogoProps {
  className?: string;
  showText?: boolean;
}

export function AstraLogo({ className = "", showText = true }: AstraLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="astra-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a87e" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>
        </defs>
        {/* Outer circle */}
        <circle cx="18" cy="18" r="17" stroke="url(#astra-grad)" strokeWidth="1.5" fill="none" opacity="0.3" />
        {/* Star/rocket shape */}
        <path
          d="M18 4L20.5 14L28 10L22 17L32 18L22 19L28 26L20.5 22L18 32L15.5 22L8 26L14 19L4 18L14 17L8 10L15.5 14L18 4Z"
          fill="url(#astra-grad)"
          opacity="0.9"
        />
        {/* Inner circle */}
        <circle cx="18" cy="18" r="4" fill="#080812" />
        <circle cx="18" cy="18" r="2.5" fill="url(#astra-grad)" opacity="0.6" />
      </svg>
      {showText && (
        <span className="text-xl font-bold tracking-wider gradient-text-astra">
          ASTRA
        </span>
      )}
    </div>
  );
}
