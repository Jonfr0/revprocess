'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  className?: string;
}

export default function VideoPlayer({ className = '' }: VideoPlayerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <div 
        className="relative w-full h-[220px] sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[605px] bg-border-gray cursor-pointer overflow-hidden rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video placeholder */}
        <div className="absolute inset-0 bg-border-gray flex items-center justify-center" aria-hidden="true" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`
              w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-black/60 rounded-full flex items-center justify-center
              transition-transform duration-200
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          >
            <div 
              className="w-0 h-0 ml-0.5 sm:ml-1 border-t-[8px] border-b-[8px] border-l-[12px] sm:border-t-[10px] sm:border-b-[10px] sm:border-l-[16px] lg:border-t-[12px] lg:border-b-[12px] lg:border-l-[20px] border-t-transparent border-b-transparent border-l-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}