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
  BsShieldCheck,
  BsJoystick,
  BsRocketTakeoff,
  BsCpu,
  BsBarChartSteps,
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
    title: "RENTABILIDAD INTERACTIVA",
    subtitle: "PARA OPERACIONES CRÍTICAS",
    header: "DEJE DE MOSTRAR DATOS. EMPIECE A GENERAR DECISIONES.",
    description:
      "Convertimos la fricción operativa y comercial en activos digitales que aceleran el cierre de ventas y eliminan cuellos de botella mediante tecnología Spatial Web de alto impacto.",
    icon: BsLightningCharge,
  },
  portfolio: {
    title: "SOLUCIONES",
    subtitle: "CON ROI INMEDIATO",
    header: "HERRAMIENTAS DISEÑADAS PARA ACORTAR CICLOS DE VENTA.",
    description:
      "Sustituimos presentaciones estáticas por configuradores y visualizadores 3D de alta conversión. Reducimos la duda del cliente final para asegurar el cierre del negocio hoy mismo.",
    icon: BsGraphUpArrow,
  },
  gamification: {
    title: "SIMULACIÓN",
    subtitle: "DE ALTO IMPACTO",
    header: "CAPACITACIÓN DONDE EL ERROR NO CUESTA DINERO.",
    description:
      "No es juego, es competencia técnica verificable. Simulamos entornos de riesgo y venta para que su equipo demuestre capacidad antes de tocar un activo real o un cliente potencial.",
    icon: BsJoystick,
  },
  stack: {
    title: "AHORRO OPERATIVO",
    subtitle: "KENSAI ONBOARDING",
    header: "REDUZCA EL TIEMPO DE ENTRENAMIENTO EN UN 50%.",
    description:
      "Elimine costos de instructores y detenciones de planta. Nuestras plataformas garantizan retención de conocimiento inmediata y eliminan el error humano desde el día uno.",
    icon: BsCrosshair2,
  },
  authority: {
    title: "DESPLIEGUE",
    subtitle: "SIN BARRERAS TÉCNICAS",
    header: "TECNOLOGÍA WEB: SIN INSTALACIONES, SIN EXCUSAS.",
    description:
      "Arquitectura de carga instantánea que elimina la fricción de IT. Compatible con cualquier dispositivo móvil, garantizando que su fuerza de ventas tenga la herramienta disponible en cualquier lugar.",
    icon: BsShieldCheck,
  },
};

export const BUSINESS_SOLUTIONS_CARD: BusinessGridCardUI[] = [
  {
    id: "config",
    icon: HiOutlineCube,
    title: "KENSAI CONFIG",
    tagline: "Cuando las ventas se estancan por dudas del comprador",
    description:
      "Si el cliente no logra visualizar el producto final, el ciclo de venta se alarga, la preventa se enfría y las oportunidades se pierden.",
    benefit:
      "Elimina la incertidumbre del comprador y acelera decisiones de compra en procesos de alto valor.",
    cta: "Resolver Bloqueo Comercial",
    onAction: () => console.warn("Calculating ROI"),
  },

  {
    id: "onboarding",
    icon: HiOutlineAcademicCap,
    title: "KENSAI ONBOARDING",
    tagline: "Cuando capacitar cuesta demasiado tiempo y dinero",
    description:
      "Procesos de formación largos generan errores operativos, baja retención de conocimiento y costos ocultos en RRHH.",
    benefit:
      "Reduce hasta un 50% el tiempo de entrenamiento y corta el desperdicio operativo desde el día uno.",
    cta: "Eliminar Ineficiencias",
    onAction: () => console.warn("Calculating ROI"),
  },

  {
    id: "data",
    icon: HiOutlineChartBar,
    title: "KENSAI DATA",
    tagline: "Cuando decidir tarde sale caro",
    description:
      "Dashboards pasivos no revelan dependencias, cuellos de botella ni riesgos críticos a tiempo.",
    benefit:
      "Permite detectar riesgos operativos y tomar decisiones ejecutivas antes de que impacten resultados.",
    cta: "Reducir Riesgo",
    onAction: () => console.warn("Calculating ROI"),
  },

  {
    id: "deployment",
    icon: HiOutlineRocketLaunch,
    title: "KENSAI LAUNCH",
    tagline: "Cuando lanzar lento quema capital",
    description:
      "Desarrollos largos sin validación consumen presupuesto antes de demostrar retorno real.",
    benefit:
      "Permite validar activos interactivos en ciclos cortos con métricas claras de impacto económico.",
    cta: "Validar sin Desperdicio",
    onAction: () => console.warn("Calculating ROI"),
  },

  {
    id: "optimization",
    icon: HiOutlineShieldCheck,
    title: "KENSAI CORE",
    tagline: "Cuando la tecnología no se adopta",
    description:
      "Activos digitales lentos o inaccesibles generan abandono, fricción y pérdida directa de inversión.",
    benefit:
      "Garantiza adopción real mediante rendimiento, SEO y accesibilidad sin fricción técnica ni instalaciones.",
    cta: "Asegurar Adopción",
    onAction: () => console.warn("Calculating ROI"),
  },
];

export const HOME_INITIAL_CARDS: CardTextUI[] = [
  {
    title: "KENSAI CONFIG",
    subtitle: "ACELERA EL CIERRE COMERCIAL",
    description:
      "Sustituimos renders estáticos por configuradores 3D de alta conversión. El cliente visualiza, decide y compra sin dudas técnicas.",
    label: "Acelerar Ventas",
    icon: BsRocketTakeoff,
    blurIntensity: "md",
    callToAction: () => (window.location.href = "#portfolio-title"),
  },
  {
    title: "KENSAI ONBOARDING",
    subtitle: "REDUCE COSTOS OPERATIVOS",
    description:
      "Simuladores web que reducen el tiempo de entrenamiento en un 50%. Capacita a tu equipo sin detener la operación ni arriesgar activos.",
    label: "Reducir Costos",
    icon: BsCpu,
    blurIntensity: "md",
    callToAction: () => (window.location.href = "#onboarding"),
  },
  {
    title: "KENSAI DATA",
    subtitle: "MITIGA RIESGOS CRÍTICOS",
    description:
      "Visualización espacial de datos para detectar cuellos de botella antes de que afecten el EBITDA. Información para decidir, no solo para ver.",
    label: "Ver Diagnóstico",
    icon: BsBarChartSteps,
    blurIntensity: "md",
    callToAction: () => (window.location.href = "#data"),
  },
];
