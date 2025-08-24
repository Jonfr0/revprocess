'use client';

import Script from 'next/script';

interface VideoPlayerProps {
  className?: string;
}

export default function VideoPlayer({ className = '' }: VideoPlayerProps) {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/7l1vax6fpp.js" strategy="afterInteractive" />
      
      <div className={`relative w-full ${className}`}>
        <style jsx>{`
          :global(wistia-player[media-id='7l1vax6fpp']:not(:defined)) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7l1vax6fpp/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top: 56.25%; 
          }
        `}</style>
        {/* @ts-expect-error: Custom element from Wistia */}
        <wistia-player media-id="7l1vax6fpp" aspect="1.7777777777777777"></wistia-player>
      </div>
    </>
  );
}