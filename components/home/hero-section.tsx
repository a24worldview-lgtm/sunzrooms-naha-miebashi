"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
      aria-label="ヒーロー"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="SUNZROOMS ゲストハウスの外観"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl font-bold tracking-[0.2em] text-cream md:text-6xl lg:text-7xl">
            SUNZ ROOMS.
          </h1>
          <p className="mt-2 text-xs tracking-[0.3em] text-cream/70 md:text-sm">
            naha miebashi
          </p>
        </div>


      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <a
          href="#concept"
          aria-label="コンテンツへスクロール"
          className="flex flex-col items-center gap-2 text-cream/50 transition-colors hover:text-cream/80"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
