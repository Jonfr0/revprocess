'use client';

import { useEffect, useState } from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ children, onClick, className = '' }: CTAButtonProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Replace with booking link when available
      console.log('CTA button clicked - redirect to booking');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[248px] h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px] bg-gray-300 animate-pulse rounded-none" />
    );
  }

  if (isDark) {
    // Dark mode button: white border, black background, white text
    // Hover: white background, black text
    return (
      <button
        className={`
          w-[200px] sm:w-[220px] md:w-[240px] lg:w-[248px]
          h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px]
          rounded-none
          font-dm-sans font-black text-base sm:text-lg lg:text-xl
          transition-colors duration-200
          cursor-pointer
          border-2 border-white
          bg-black text-white
          hover:bg-white hover:text-black
          active:opacity-90
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
  } else {
    // Light mode button: black border, white background, black text
    // Hover: black background, white text
    return (
      <button
        className={`
          w-[200px] sm:w-[220px] md:w-[240px] lg:w-[248px]
          h-[48px] sm:h-[52px] md:h-[56px] lg:h-[60px]
          rounded-none
          font-dm-sans font-black text-base sm:text-lg lg:text-xl
          transition-colors duration-200
          cursor-pointer
          border-2 border-black
          bg-white text-black
          hover:bg-black hover:text-white
          active:opacity-90
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
}