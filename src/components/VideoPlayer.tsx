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
        className="relative w-full h-[605px] bg-border-gray cursor-pointer group overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video placeholder */}
        <div className="absolute inset-0 bg-border-gray flex items-center justify-center">
          <div className="text-center">
            <div className="text-text-gray text-lg mb-4">Video Placeholder</div>
            <div className="text-text-gray text-sm">Wistia video will be embedded here</div>
          </div>
        </div>
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`
              w-20 h-20 bg-black bg-opacity-60 rounded-full flex items-center justify-center
              transition-all duration-300 transform
              ${isHovered ? 'scale-110 bg-opacity-80' : 'scale-100'}
            `}
          >
            <div 
              className="w-0 h-0 ml-1 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}