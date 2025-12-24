import { TechItemUI } from "@/shared/componets/composite";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
} from "react-icons/si";
import { TbHexagon3D } from "react-icons/tb";

export const CORE_STACK: readonly TechItemUI[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Three.js",
    icon: TbHexagon3D,
  },
  {
    name: "GSAP",
    icon: SiGreensock,
  },
];
