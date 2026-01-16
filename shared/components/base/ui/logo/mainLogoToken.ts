import { MainLogoTokenUI } from "./interface";

export const mainLogoToken: MainLogoTokenUI = {
  widths: {
    xs: "clamp(80px, 10vw, 100px)",
    sm: "clamp(100px, 12vw, 120px)",
    md: "clamp(150px, 15vw, 240px)",
    lg: "clamp(240px, 20vw, 480px)",
    xl: "clamp(400px, 25vw, 620px)",
    "2xl": "clamp(500px, 30vw, 720px)",
  },
  defaultColors: {
    light: "var(--color-black-87)",
    dark: "var(--color-white)",
  },
};