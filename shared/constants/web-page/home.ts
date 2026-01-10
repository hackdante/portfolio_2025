import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import {
  HiOutlineCube,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { InteractiveCardUI } from "@/shared/components/composite";
import { CardTextUI } from "@/shared/components/base";

import { HomeSeoUI } from "./interface";

export const HOME_FEATURES: readonly CardTextUI[] = [
  {
    icon: FiCode,
    title: "Desarrollamos software a medida enfocado en",
    description:
      "escalabilidad, rendimiento y calidad técnica para productos digitales modernos.",
  },
  {
    icon: FiLayers,
    title: "Construimos",
    description:
      "experiencias interactivas 3D y UX/UI que conectan usuarios con interfaces claras y funcionales.",
  },
  {
    icon: FiZap,
    title: "Integramos",
    description:
      "estrategia digital y tecnología moderna para impulsar resultados medibles y crecimiento sostenible.",
  },
];

export const HOME_SEO_DATA: HomeSeoUI = {
  hero: {
    title: "ACTIVOS DIGITALES DE ALTO RENDIMIENTO",
    description:
      "Transformamos procesos corporativos complejos en interfaces interactivas que aceleran decisiones críticas y generan ingresos medibles.",
  },
  portfolio: {
    title: "CATÁLOGO DE SOLUCIONES ESTRATÉGICAS",
    subtitle: "Interacción diseñada para decidir, no solo para visualizar.",
    description:
      "Superamos los dashboards tradicionales. Implementamos herramientas donde el usuario interactúa con la información para cerrar ventas y reducir costos operativos.",
  },
  stack: {
    title: "KENSAI ONBOARDING: EFICIENCIA OPERATIVA",
    description:
      "Plataformas gamificadas que reducen hasta un 50% el tiempo de entrenamiento y optimizan la retención de conocimiento desde el primer día.",
  },
  authority: {
    title: "INGENIERÍA SIN FRICCIÓN",
    description:
      "Tecnología Web Spatial de carga instantánea. Sin instalaciones, sin dependencias. Solo activos digitales escalables y rentables.",
  },
};

export const BUSINESS_SOLUTIONS_CARD: InteractiveCardUI[] = [
  {
    id: "config",
    icon: HiOutlineCube,
    title: "KENSAI CONFIG",
    tagline: "Conversión Comercial 3D",
    description:
      "Visualización y configuración de productos en tiempo real para acelerar cierres de venta en e-commerce y real estate.",
    benefit:
      "Reduce la incertidumbre del comprador y aumenta la tasa de cierre en preventa.",
    cta: "Optimizar Ventas",
    onAction: () => console.warn("Calculating ROI"),
  },
  {
    id: "onboarding",
    icon: HiOutlineAcademicCap,
    title: "KENSAI ONBOARDING",
    tagline: "Eficiencia en RRHH",
    description:
      "Plataformas de capacitación gamificada que reducen hasta un 50% el tiempo de entrenamiento.",
    benefit:
      "Corta drásticamente los costos de formación y mejora la retención operativa.",
    cta: "Reducir Costos",
    onAction: () => console.warn("Calculating ROI"),
  },
  {
    id: "data",
    icon: HiOutlineChartBar,
    title: "KENSAI DATA",
    tagline: "Toma de Decisiones",
    description:
      "Ingeniería de visualización para identificar cuellos de botella y riesgos operativos de forma inmediata.",
    benefit:
      "Convierte flujos complejos en representaciones espaciales para decisiones ejecutivas rápidas.",
    cta: "Acelerar Decisiones",
    onAction: () => console.warn("Calculating ROI"),
  },
  {
    id: "deployment",
    icon: HiOutlineRocketLaunch,
    title: "KENSAI LAUNCH",
    tagline: "Go-to-Market Acelerado",
    description:
      "Despliegue de MVPs interactivos en ciclos cortos con métricas claras de impacto económico.",
    benefit:
      "Elimina el desperdicio de capital en desarrollos largos sin validación de mercado.",
    cta: "Lanzar Activo",
    onAction: () => console.warn("Calculating ROI"),
  },
  {
    id: "optimization",
    icon: HiOutlineShieldCheck,
    title: "KENSAI CORE",
    tagline: "Rendimiento de Élite",
    description:
      "Optimización de activos digitales existentes para garantizar velocidad, SEO y accesibilidad multiplataforma.",
    benefit:
      "Garantiza adopción real mediante experiencias sin fricción técnica ni instalaciones.",
    cta: "Asegurar Rendimiento",
    onAction: () => console.warn("Calculating ROI"),
  },
];
