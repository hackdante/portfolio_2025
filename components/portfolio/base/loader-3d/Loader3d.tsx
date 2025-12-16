"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Loader3dUI {
  progress?: number;
  isConnecting?: boolean;
}

export function Loader3d({ progress, isConnecting = false }: Loader3dUI) {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  const LogoContent = (
    <div className="mb-4">
      <Image
        src="/images/light--logo-md.png"
        width={120}
        height={120}
        priority
        ref={logoRef}
        alt={`Kensai | Software`}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );

  if (isConnecting) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/90">
        <div className="flex flex-col items-center gap-4 text-white">
          {LogoContent}
          <span className="text-xl">Conectando con el servidor...</span>
        </div>
      </div>
    );
  }

  const displayProgress = progress ?? 0;

  return (
    <div className="w-full h-full flex items-center justify-center bg-black/90">
      <div className="flex flex-col items-center gap-4 text-white">
        {LogoContent}
        <span className="text-xl">Cargando experiencia 3D...</span>

        <div className="w-48 h-3 bg-white/20 rounded-full">
          <div
            className="h-full bg-white transition-all duration-200"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        <span className="text-sm opacity-80">
          {Math.floor(displayProgress)}%
        </span>
      </div>
    </div>
  );
}
