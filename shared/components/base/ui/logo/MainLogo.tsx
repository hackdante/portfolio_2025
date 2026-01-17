"use client";

import Image from "next/image";
import { MainLogoUI } from "./interface";
import { mainLogoToken } from "./mainLogoToken";

export function MainLogo({
  path,
  size = "sm",
  altText = "Kensai Soluciones Integrales",
}: MainLogoUI) {
  if (!path?.toLowerCase().endsWith(".svg")) return null;

  const currentSize = mainLogoToken.widths[size];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 mb-8 xxs:mr-5">
        <div className="w-[90%] md:w-full 2xl:w-[60%] min-w-[280px]">
          <div className={`relative inline-block ${currentSize}  }`}>
            <Image
              src={path}
              alt={altText}
              width={300}
              height={100}
              className="invisible block w-full h-auto"
              priority
            />

            <div
              className="absolute inset-0 bg-black dark:bg-white transition-colors"
              style={{
                maskImage: `url(${path})`,
                WebkitMaskImage: `url(${path})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
