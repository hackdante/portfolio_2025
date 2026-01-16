"use client";

import { MainLogoUI } from "./interface";
import { mainLogoToken } from "./mainLogoToken";

export function MainLogo({
  path,
  size = "md",
  altText = "Kensai Soluciones Integrales",
  lightModeColor,
  darkModeColor,
}: MainLogoUI) {
  if (!path?.toLowerCase().endsWith(".svg")) return null;

  const currentWidth = mainLogoToken.widths[size];
  const colorLight = lightModeColor ?? mainLogoToken.defaultColors.light;
  const colorDark = darkModeColor ?? mainLogoToken.defaultColors.dark;

  return (
    <div className="flex w-full items-center justify-center p-2">
      <div
        role="img"
        aria-label={altText}
        className="main-logo-render"
        style={{
          width: currentWidth,
          aspectRatio: "3/1",
          // Definición de variables CSS personalizadas
          "--l-c-l": colorLight,
          "--l-c-d": colorDark,
          // Máscara simplificada
          WebkitMaskImage: `url(${path})`,
          maskImage: `url(${path})`,
        } as React.CSSProperties} // Solo se permite si no hay otra forma de tipar variables custom en style
      />

      <style jsx>{`
        .main-logo-render {
          background-color: var(--l-c-l);
          mask-repeat: no-repeat;
          WebkitMaskRepeat: no-repeat;
          mask-size: contain;
          WebkitMaskSize: contain;
          mask-position: center;
          WebkitMaskPosition: center;
          transition: background-color 0.4s ease-in-out;
        }

        :global([data-theme="dark"]) .main-logo-render {
          background-color: var(--l-c-d);
        }
      `}</style>
    </div>
  );
}