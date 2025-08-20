'use client';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ children, onClick, className = '' }: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Replace with booking link when available
      console.log('CTA button clicked - redirect to booking');
    }
  };

  return (
    <button
      className={`
        w-[200px] sm:w-[220px] md:w-[240px] lg:w-[248px]
        h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px]
        bg-black text-white border-2 border-white rounded-none
        font-dm-sans font-black text-base sm:text-lg lg:text-xl dark:text-foreground
        transition-colors duration-200
        hover:bg-white hover:text-black hover:border-black dark:hover:bg-white dark:hover:text-black
        active:opacity-90
        focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2
        cursor-pointer
        ${className}
      `}
      onClick={handleClick}
      aria-label="Book Our Call"
    >
      <span className="flex items-center justify-center h-full">
        {children}
      </span>
    </button>
  );
}