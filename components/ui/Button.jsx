'use client';

export default function Button({
  children,
  href,
  onClick,
  variant = 'white', 
  className = '',
  icon: Icon,
  ...props
}) {
  // Base style button
  const baseStyles =
    'inline-flex items-center justify-center gap-2 h-11 sm:h-12 w-full sm:w-auto px-7 font-medium rounded-xl backdrop-blur-md transition-all text-sm sm:text-base shadow-lg hover:scale-[1.02] active:scale-95';

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