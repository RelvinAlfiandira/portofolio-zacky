'use client';

import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'white',
  className = '',
  icon: Icon,
  ...props
}) {
  // Varian Flow Button dengan efek ekspansi lingkaran & animasi panah
  if (variant === 'flow') {
  const flowClasses = `group relative flex items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 px-7 h-11 sm:h-12 w-full sm:w-auto text-sm sm:text-base font-medium text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-zinc-950 active:scale-[0.95] ${className}`;

  const content = (
  <span className="relative inline-flex items-center justify-center gap-2">
    {/* Text */}
    <span className="relative z-[1] transition-all duration-[800ms] ease-out">
      {children}
    </span>

    {/* Expanding circle background */}
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:w-[350px] group-hover:h-[350px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none" />

    {/* Arrow */}
    <ArrowRight
      className="relative z-[9] w-4 h-4 shrink-0 stroke-white fill-none group-hover:stroke-zinc-950 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    />
  </span>
);


    if (href) {
      return (
        <a href={href} className={flowClasses} {...props}>
          {content}
        </a>
      );
    }
    return (
      <button onClick={onClick} className={flowClasses} {...props}>
        {content}
      </button>
    );
  }

  // Varian standar lainnya
  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center gap-2 h-11 sm:h-12 w-full sm:w-auto px-7 font-medium rounded-xl backdrop-blur-md transition-all text-sm sm:text-base shadow-lg hover:scale-[1.02] active:scale-95';

  const variants = {
    white:
      'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    blue:
      'bg-[#15405f]/40 hover:bg-[#15405f]/60 text-sky-200 border border-[#15405f]/60',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.white} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}