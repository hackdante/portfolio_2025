import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import {
  HiOutlineCube,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import { 
  BsLightningCharge, 
  BsGraphUpArrow, 
  BsCrosshair2, 
  BsShieldCheck 
} from "react-icons/bs";

import { CardTextUI } from "@/shared/components/base";

import { HomeSeoUI } from "./interface";
import { BusinessGridCardUI } from "@/shared/components/composite";

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
    title: "ACTIVOS DIGITALES",
    subtitle: "DE ALTO RENDIMIENTO",
    header: "INTERACCIÓN DISEÑADA PARA DECIDIR, NO SOLO PARA VISUALIZAR.",
    description: "Transformamos procesos corporativos complejos en interfaces interactivas que aceleran decisiones críticas y generan ingresos medibles.",
    icon: BsLightningCharge,
  },
  portfolio: {
    title: "CATÁLOGO DE",
    subtitle: "SOLUCIONES RENTABLES",
    header: "SOLUCIONES DISEÑADAS PARA EL CIERRE COMERCIAL.",
    description: "Superamos los dashboards pasivos. Implementamos herramientas donde el usuario interactúa con la información para cerrar ventas y mitigar riesgos operativos.",
    icon: BsGraphUpArrow 
  },
  stack: {
    title: "EFICIENCIA OPERATIVA",
    subtitle: "KENSAI ONBOARDING",
    header: "REDUZCA COSTOS DE FORMACIÓN DESDE EL PRIMER DÍA.",
    description: "Plataformas interactivas que reducen hasta un 50% el tiempo de entrenamiento, mejorando la retención técnica y eliminando errores operativos costosos.",
    icon: BsCrosshair2 
  },
  authority: {
    title: "INGENIERÍA",
    subtitle: "CERO FRICCIÓN TÉCNICA",
    header: "TECNOLOGÍA WEB SPATIAL DE CARGA INSTANTÁNEA.",
    description: "Sin instalaciones ni dependencias. Desarrollamos activos digitales de alto rendimiento optimizados para carga móvil y estabilidad comercial inmediata.",
    icon: BsShieldCheck
  },
};

export const BUSINESS_SOLUTIONS_CARD: BusinessGridCardUI[] = [
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
