import { useState, useEffect } from "react";
import cigaretteLogo from "@/assets/cigarette-clean.png";

const VPNBanner = () => {
  const [showSecondState, setShowSecondState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondState((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper w-[1920px] h-[1080px] relative overflow-hidden bg-banner-dark shadow-2xl shadow-black/50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-banner-dark via-banner-mid to-banner-dark animate-gradient-shift" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-orange-500/15 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-banner-primary/50 to-transparent animate-scan-line" />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex items-center px-24">
        {/* First State - Diagonal modern layout */}
        <div
          className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
            showSecondState
              ? "opacity-0 scale-95 blur-sm"
              : "opacity-100 scale-100 blur-0"
          }`}
        >
          {/* Logo on the left with glow */}
          <div className="relative flex-shrink-0 ml-24">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse-glow" />
            <img
              src={cigaretteLogo}
              alt="xanka VPN"
              className="h-72 w-auto object-contain relative z-10 animate-float-slow drop-shadow-[0_0_40px_rgba(255,80,30,0.6)]"
            />
          </div>

          {/* Text in diagonal arrangement */}
          <div className="ml-20 flex flex-col items-start relative">
            <div className="overflow-hidden">
              <h1 className="text-9xl font-black tracking-tighter animate-slide-up">
                <span className="text-banner-primary drop-shadow-[0_0_20px_hsl(var(--banner-primary)/0.5)]">xanka</span>
                <span className="text-white ml-4 font-light">VPN</span>
              </h1>
            </div>
            
            <div className="overflow-hidden mt-4">
              <p className="text-banner-accent font-bold text-5xl animate-slide-up-delayed tracking-wide">
                <span className="inline-block animate-text-shimmer bg-gradient-to-r from-banner-accent via-white to-banner-accent bg-[length:200%_100%] bg-clip-text text-transparent">
                  7 дней бесплатно
                </span>
              </p>
            </div>
          </div>

          <div className="absolute right-24 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="w-32 h-1 bg-gradient-to-r from-banner-primary to-transparent animate-extend" />
            <div className="w-24 h-1 bg-gradient-to-r from-banner-accent to-transparent animate-extend-delayed" />
            <div className="w-16 h-1 bg-gradient-to-r from-white/50 to-transparent animate-extend-more-delayed" />
          </div>
        </div>

        {/* Second State - Dynamic CTA */}
        <div
          className={`absolute inset-0 flex items-center justify-center px-24 transition-all duration-700 ease-out ${
            showSecondState
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-105 blur-sm"
          }`}
        >
          <div className="text-center relative">
            {/* Glowing background for text */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-r from-transparent via-banner-primary/10 to-transparent rounded-lg animate-pulse-subtle" />
            
            <div className="overflow-hidden">
              <p className="text-white text-7xl font-bold leading-tight animate-words-slide">
                <span className="inline-block animate-word-1">Кликай</span>
                <span className="inline-block ml-4 text-banner-primary animate-word-2">на баннер</span>
                <span className="inline-block ml-4 animate-word-3">под трансляцией</span>
              </p>
            </div>
            
            <div className="overflow-hidden mt-6">
              <p className="text-4xl font-semibold animate-fade-up-delayed">
                <span className="text-banner-accent">и забирай</span>
                <span className="text-white ml-4 animate-text-shimmer bg-gradient-to-r from-white via-banner-accent to-white bg-[length:200%_100%] bg-clip-text text-transparent font-bold">
                  7 дней подписки
                </span>
                <span className="text-banner-accent ml-4">бесплатно</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 border border-banner-primary/20 pointer-events-none" />
      <div className="absolute inset-0 animate-border-glow pointer-events-none" />
    </div>
  );
};

export default VPNBanner;
