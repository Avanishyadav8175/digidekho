'use client';

export default function Logo({ 
  size = 'md', 
  variant = 'default', 
  showText = true, 
  className = '',
  href = '/',
  animated = false
}) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const variants = {
    default: {
      container: `relative group logo-hover-effect ${animated ? 'logo-float' : ''}`,
      image: 'rounded-xl object-cover shadow-lg transition-all duration-300 group-hover:shadow-xl logo-glow',
      overlay: 'absolute inset-0 logo-overlay-medium rounded-xl transition-all duration-300 group-hover:logo-overlay-strong',
      text: 'font-bold text-gray-900'
    },
    admin: {
      container: 'relative group logo-hover-effect',
      image: 'rounded-xl object-cover shadow-md transition-all duration-300 group-hover:shadow-lg',
      overlay: 'absolute inset-0 logo-overlay-light rounded-xl transition-all duration-300 group-hover:logo-overlay-medium',
      text: 'font-bold text-gray-900'
    },
    footer: {
      container: 'relative group logo-hover-effect',
      image: 'rounded-xl object-cover shadow-lg transition-all duration-300 group-hover:shadow-xl',
      overlay: 'absolute inset-0 logo-overlay-strong rounded-xl transition-all duration-300 group-hover:brand-gradient group-hover:opacity-40',
      text: 'font-bold text-white'
    },
    hero: {
      container: `relative group logo-hover-effect ${animated ? 'logo-float' : ''}`,
      image: 'rounded-2xl object-cover shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:scale-105 logo-glow',
      overlay: 'absolute inset-0 brand-gradient opacity-25 rounded-2xl transition-all duration-300 group-hover:opacity-35',
      text: 'font-bold text-gray-900'
    },
    minimal: {
      container: 'relative group',
      image: 'rounded-lg object-cover transition-all duration-300 group-hover:opacity-90',
      overlay: 'absolute inset-0 logo-overlay-light rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100',
      text: 'font-bold text-gray-900'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={currentVariant.container}>
        <img 
          src="/logo.jpg" 
          alt="Digital Dekho Logo" 
          className={`${sizes[size]} ${currentVariant.image}`}
        />
        <div className={currentVariant.overlay}></div>
      </div>
      {showText && (
        <span className={`${textSizes[size]} ${currentVariant.text}`}>
          Digital Dekho
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-90">
        <LogoContent />
      </a>
    );
  }

  return <LogoContent />;
}