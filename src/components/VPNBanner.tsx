import { useState, useEffect } from "react";
import cigaretteLogo from "@/assets/cigarette-clean.png";

const VPNBanner = () => {
  const [showSecondState, setShowSecondState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondState((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper w-full max-w-[900px] h-[120px] mx-auto rounded-xl relative overflow-hidden bg-banner-dark shadow-2xl shadow-black/50">
      {/* Animated glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 bg-red-500/30 rounded-full blur-[60px] animate-glow" />
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] animate-glow-delayed" />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        {/* First State - Logo + Name + 7 days free */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-6 transition-all duration-700 ease-out ${
            showSecondState
              ? "opacity-0 transform -translate-x-full"
              : "opacity-100 transform translate-x-0"
          }`}
        >
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <img
              src={cigaretteLogo}
              alt="xanka VPN"
              className="h-28 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,80,30,0.8)] animate-pulse-slow"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-banner-primary">xanka</span>
              <span className="text-white"> VPN</span>
            </h1>
            <p className="text-banner-accent font-semibold text-lg mt-1 flex items-center gap-2">
              🎁 7 дней бесплатно
            </p>
          </div>
        </div>

        {/* Second State - CTA */}
        <div
          className={`absolute inset-0 flex items-center justify-center px-8 transition-all duration-700 ease-out ${
            showSecondState
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          <div className="text-center">
            <p className="text-white text-2xl md:text-3xl font-bold leading-tight">
              <span className="text-banner-primary">Кликай</span> на баннер под трансляцией
            </p>
            <p className="text-banner-accent text-xl md:text-2xl font-semibold mt-1">
              и забирай <span className="text-white">7 дней подписки</span> бесплатно! 🎁
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border glow */}
      <div className="absolute inset-0 rounded-xl border border-banner-primary/30 pointer-events-none" />
    </div>
  );
};

export default VPNBanner;
