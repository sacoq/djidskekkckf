import { Shield, Globe, Zap, Lock, Gift } from "lucide-react";

const VPNBanner = () => {
  return (
    <div className="banner-container w-full max-w-[1200px] mx-auto p-6 md:p-8 rounded-2xl relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-banner-dark via-banner-mid to-banner-dark" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-banner-glow rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-banner-accent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,200,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left section - Main message */}
        <div className="flex-1 text-center lg:text-left">
          {/* Pain point */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
            <span className="text-2xl">🔇</span>
            <p className="text-banner-muted text-lg font-medium">Интернет снова заглушили?</p>
          </div>

          {/* Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="relative">
              <Shield className="w-12 h-12 text-banner-primary" />
              <div className="absolute inset-0 blur-lg bg-banner-primary opacity-50" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-banner-primary">xanka</span>
              <span className="text-white">VPN</span>
            </h1>
          </div>

          <p className="text-white text-xl md:text-2xl font-semibold mb-2">
            Ваш стабильный доступ без границ
          </p>
        </div>

        {/* Center section - Features */}
        <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <p className="text-banner-primary font-semibold mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> Включено в подписку:
          </p>
          <ul className="space-y-2 text-white/90 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-banner-primary flex-shrink-0" />
              <span>Обход глушилок и белых списков</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-banner-primary flex-shrink-0" />
              <span>26 серверов по всему миру</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-banner-primary flex-shrink-0" />
              <span>Высокая скорость, безлимит</span>
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-banner-primary flex-shrink-0" />
              <span>Защита и анонимность</span>
            </li>
          </ul>
        </div>

        {/* Right section - CTA */}
        <div className="flex-shrink-0 text-center">
          {/* Free trial */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-banner-accent" />
            <span className="text-banner-accent font-bold text-lg">7 дней бесплатно</span>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-banner-primary to-banner-glow text-banner-dark font-bold text-xl md:text-2xl px-6 py-3 rounded-xl mb-3 shadow-lg shadow-banner-primary/30">
            от 69₽/мес
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Zap className="w-4 h-4 text-banner-accent" />
              <span>Подключение за минуту</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-banner-primary/50 rounded-lg px-4 py-2 hover:bg-banner-primary/20 transition-all cursor-pointer group">
              <span className="text-banner-primary font-mono text-lg group-hover:text-white transition-colors">
                ➡️ @xankaVPN_bot
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNBanner;
