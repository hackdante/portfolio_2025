"use client";

import { MainLogoStylesUI, MainLogoUI } from "./interface";
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

  const containerStyles: MainLogoStylesUI = {
    width: currentWidth,
    aspectRatio: "3/1",
    "--l-c-l": colorLight,
    "--l-c-d": colorDark,
    WebkitMaskImage: `url(${path})`,
    maskImage: `url(${path})`,
  };

  return (
    <div className="flex w-full items-center justify-center p-2">
      <div
        role="img"
        aria-label={altText}
        className="main-logo-render"
        style={containerStyles}
      />

      <style jsx>{`
        .main-logo-render {
          background-color: var(--l-c-l);
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-position: center;
          -webkit-mask-position: center;
          transition: background-color 0.4s ease-in-out;
          display: block;
        }

        :global([data-theme="dark"]) .main-logo-render {
          background-color: var(--l-c-d);
        }
      `}</style>
    </div>
  );
}