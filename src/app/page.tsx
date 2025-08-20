import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="w-full bg-background pt-6 pb-4 sm:pb-5 md:pb-6 lg:pb-[18px]">
        <div className="mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative h-[72px] sm:h-[84px] md:h-[92px] w-[220px] sm:w-[280px] md:w-[320px] lg:w-[344px]">
              <Image
                src="/images/logo-6af508.png"
                alt="REVPROCESS"
                fill
                className="object-contain logo-light"
                priority
              />
              <Image
                src="/images/logo-6af509.png"
                alt="REVPROCESS"
                fill
                className="object-contain logo-dark"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-4 max-w-[1160px]">
        {/* Hero Section */}
        <section className="w-full pt-6 sm:pt-7 md:pt-7 lg:pt-[28px] pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8">
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full">
                <h1 className="font-inter font-bold max-[374px]:text-[32px] max-[420px]:text-[38px] max-[480px]:text-[40px] text-[44px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-foreground text-center">
                  <span className="block">
                    Scale Your Brand or Business Beyond 6-Figures Using
                  </span>
                </h1>
                <div className="w-full flex justify-center items-center">
                  <div className="relative font-inter font-extrabold italic text-center">
                    {/* Shadow layer */}
                    <div className="absolute inset-0 text-black opacity-15" style={{transform: 'translate(0px, 4px)', filter: 'blur(4px)'}}>
                      <span className="inline-block align-middle max-[374px]:text-[32px] max-[420px]:text-[38px] max-[480px]:text-[40px] text-[44px] sm:text-[48px] md:text-[56px] lg:text-[68px] leading-[0.9] px-3 sm:px-4">
                        The Backend Secret
                      </span>
                    </div>
                    {/* Gradient text layer */}
                    <div className="relative">
                      <span className="inline-block align-middle max-[374px]:text-[32px] max-[420px]:text-[38px] max-[480px]:text-[40px] text-[44px] sm:text-[48px] md:text-[56px] lg:text-[68px] leading-[0.9] bg-clip-text text-transparent px-3 sm:px-4" style={{backgroundImage: 'linear-gradient(90deg, #FDBC01 0%, #FFAE00 50%, #FFA300 100%)'}}>
                        The Backend Secret
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-inter font-medium text-foreground text-center w-full max-w-[1074px] lg:text-[28px] md:text-[26px] sm:text-[22px] text-[18px] max-[374px]:text-[16px] leading-[1.25]">
                Discover how creators with tiny audiences are quietly making 10x more than their competitors... while you're grinding 12-hour days for scraps.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="max-w-[1120px] mx-auto w-full">
            <VideoPlayer />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center pb-14 sm:pb-16 md:pb-16 lg:pb-20">
          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
            <p className="font-inter font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-foreground text-center">
              Ready to focus 100% on content?
            </p>
            <button className="w-[248px] h-[60px] bg-black text-white border-2 border-white rounded-none font-dm-sans font-[900] text-[20px] leading-[33.6px] hover:bg-white hover:text-black hover:border-black transition-colors duration-200 flex items-center justify-center cursor-pointer">
              Book Our Call
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-border-gray py-6 sm:py-8">
        <div className="mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-3 sm:space-y-4">
            {/* Disclaimer */}
            <p className="text-xs text-text-gray max-w-3xl mx-auto leading-relaxed">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way.
            </p>

            {/* Footer Links */}
            <nav aria-label="Footer" className="flex flex-col items-center gap-2">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-text-gray text-xs sm:text-sm leading-6">
                <li className="inline-flex items-center h-6">© 2025 RevProcess</li>
                <li className="inline-flex items-center h-6">All rights reserved</li>
                <li className="inline-flex items-center h-6"><Link href="/privacy" className="inline-flex items-center h-6 min-h-0 min-w-0 hover:text-black transition-colors">Privacy Policy</Link></li>
                <li className="inline-flex items-center h-6"><Link href="/terms" className="inline-flex items-center h-6 min-h-0 min-w-0 hover:text-black transition-colors">Terms of Service</Link></li>
              </ul>
              <div className="mt-3">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
