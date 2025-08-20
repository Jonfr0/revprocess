import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center self-stretch gap-[42px] py-6 md:py-10 mb-8 md:mb-12">
          {/* Logo */}
          <div className="relative h-[52px] w-[345px] md:h-[64px] md:w-[420px]">
            <Image
              src="/images/logo-6af508.png"
              alt="REVPROCESS"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Content Frame */}
          <div className="flex flex-col items-center gap-[38px] w-full max-w-[1074px]">
            {/* Headline Frame */}
            <div className="flex flex-col items-center gap-[12px] h-[120px] md:h-[204px]">
              {/* Main Headline */}
              <div className="w-full max-w-[921px]">
                <h1 className="font-inter font-bold text-[32px] sm:text-[48px] md:text-[64px] leading-[1.031] text-black text-center" style={{textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}>
                  Scale Your Brand or Business 
                  Beyond 6-Figures Using
                </h1>
              </div>
              
              {/* Backend Secret Frame */}
              <div className="w-full max-w-[922px] flex justify-center items-center gap-[10px]">
                <div className="relative w-full max-w-[750px]">
                  {/* Shadow layer */}
                  <div className="absolute font-inter font-extrabold italic text-[38px] sm:text-[54px] md:text-[68px] leading-[0.824] text-center text-black w-full" style={{transform: 'translate(0px, 4px)', filter: 'blur(4px)', opacity: 0.15}}>
                    The Backend Secret
                  </div>
                  {/* Main gradient text */}
                  <div className="relative font-inter font-extrabold italic text-[38px] sm:text-[54px] md:text-[68px] leading-[0.824] text-center bg-gradient-to-r from-[#FFB429] via-[#FFA600E6] to-[#FFC300] bg-clip-text text-transparent w-full">
                    The Backend Secret
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subheadline Frame */}
            <div className="flex justify-stretch items-stretch self-stretch gap-[10px] w-full">
              <p className="font-inter font-normal text-[20px] sm:text-[24px] md:text-[28px] leading-[1.214] text-black text-center w-full">
                Discover how creators with tiny audiences are quietly making 10x more than their competitors... while you're grinding 12-hour days for scraps.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-6 md:mb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full flex justify-center py-6 md:py-8 mb-12 md:mb-16 px-4">
          <div className="flex flex-col items-center gap-[18px] md:gap-[20px] w-full max-w-4xl">
            <p className="font-inter font-semibold text-[20px] md:text-[22px] leading-[1.527] text-black text-center w-full">
              Ready to focus 100% on content?
            </p>
            <button className="w-[240px] md:w-[248px] h-[56px] md:h-[60px] bg-white border-2 border-black rounded-none font-dm-sans font-black text-[18px] md:text-[20px] leading-[1.68] text-black hover:bg-black hover:text-white transition-colors duration-300 px-[40px] md:px-[50px] py-[8px] md:py-[9px]">
              Book Our Call
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white py-6 md:py-8">
        <div className="flex flex-col items-center gap-[12px] md:gap-[15px] w-full max-w-[1076px] mx-auto px-4">
          {/* Separator Line */}
          <div className="w-full h-[1px] bg-black"></div>
          
          {/* Footer Content */}
          <div className="flex flex-col items-center self-stretch gap-[8px] md:gap-[9px] w-full">
            {/* Disclaimer */}
            <p className="font-inter text-[10px] md:text-[11px] leading-[1.222] text-black text-center w-full max-w-[600px] md:max-w-none">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way.
            </p>
            
            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-[12px] md:gap-[15px]">
              <span className="font-inter text-[14px] md:text-base leading-[1.5] text-black text-center">© 2025 RevProcess</span>
              <span className="font-inter text-[14px] md:text-base leading-[1.5] text-black text-center">All rights reserved</span>
              <a href="/privacy" className="font-inter text-[14px] md:text-base leading-[1.5] text-black text-left hover:text-gray-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="font-inter text-[14px] md:text-base leading-[1.5] text-black text-left hover:text-gray-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
