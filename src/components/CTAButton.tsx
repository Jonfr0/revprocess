'use client';

import { useState } from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ children, onClick, className = '' }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could be a calendar booking link
      console.log('CTA button clicked - redirect to booking');
    }
  };

  return (
    <button
      className={`
        w-[248px] h-[60px] bg-white border-2 border-black rounded-lg
        font-dm-sans font-black text-xl text-black
        transition-all duration-300 transform
        hover:bg-black hover:text-white hover:scale-105
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="flex items-center justify-center h-full">
        {children}
      </span>
    </button>
  );
}