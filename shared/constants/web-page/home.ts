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
import { IoInformationCircle } from "react-icons/io5";

import { CardTextUI, MiniCardUI } from "@/shared/components/base";

import { HomeSeoUI } from "./interface";
import { BusinessGridCardUI } from "@/shared/components/composite";
import { getWhatsAppUrl } from "@/shared/utils";

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
    title: "KENSAI OPS-TRAINING",
    tagline: "Corta el costo de error operativo a la mitad",
    description:
      "Los manuales no detienen accidentes. Simuladores espaciales que garantizan que el operario sabe qué hacer antes de tocar la máquina real.",
    benefit:
      "Aumenta la retención de entrenamiento al 90% y reduce paradas de planta por error humano.",
    cta: "Eliminar Errores de Planta",
    onAction: () => console.warn("Calculating Training ROI"),
  },

  {
    id: "data",
    icon: HiOutlineChartBar,
    title: "KENSAI DIGITAL TWIN",
    tagline: "Visualiza el riesgo antes de que cueste dinero",
    description:
      "Los datos en 2D ocultan dependencias críticas. Visualiza tu operación en tiempo real para detectar cuellos de botella antes de que afecten el EBITDA.",
    benefit:
      "Detección preventiva de riesgos y optimización de flujos operativos en tiempo real.",
    cta: "Proteger mi Margen",
    onAction: () => console.warn("Calculating Operational ROI"),
  },

  {
    id: "deployment",
    icon: HiOutlineRocketLaunch,
    title: "KENSAI VALIDATOR",
    tagline: "Vende antes de fabricar",
    description:
      "Lanzar productos sin validación visual es quemar capital. Prototipado interactivo web para medir intención de compra real sin mover un solo gramo de materia prima.",
    benefit:
      "Valida el mercado en semanas, no meses, con métricas de interacción reales.",
    cta: "Validar Mercado Ya",
    onAction: () => console.warn("Calculating Launch ROI"),
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

export const CARD_SERVICES: MiniCardUI[] = [
  {
    id: "modernizacion-catalogos-3d",
    title: "Modernización de Catálogos: De PDF Estático a Activo 3D",
    description:
      "Tus clientes ya no quieren leer folletos. Transforma tu catálogo de productos en una librería interactiva donde cada pieza se puede inspeccionar, despiezar y configurar en tiempo real.",
    icon: IoInformationCircle,
    cta: {
      label: "Quieres reducir costos ahora?",
      href: getWhatsAppUrl(
        "Hola KENSAI, me interesa modernizar mis catálogos a 3D.",
      ),
    },
  },
  {
    id: "showrooms-inmobiliarios-virtuales",
    title: "Showrooms Inmobiliarios: Venta en Preventa sin Pisos Piloto",
    description:
      "Elimina el costo de construcción de apartamentos modelo. Moderniza tu sala de ventas con recorridos virtuales ligeros que permiten cambiar acabados y mobiliario al instante.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, quiero información sobre Showrooms Inmobiliarios.",
      ),
    },
  },
  {
    id: "simuladores-configuracion-productos",
    title: "Simuladores de Configuración: Personalización Masiva de Productos",
    description:
      "Permite que el usuario diseñe su propio producto con visualización instantánea de precios y materiales. Reduce el ciclo de consulta comercial y automatiza la preventa.",
    icon: IoInformationCircle,
    cta: {
      label: "Quieres reducir costos ahora?",
      href: getWhatsAppUrl(
        "Hola KENSAI, me interesa un simulador de configuración.",
      ),
    },
  },
  {
    id: "formacion-hse-industrial",
    title: "Formación HSE 4.0: Entrenamiento en Entornos de Riesgo",
    description:
      "Moderniza la seguridad industrial con simulacros web de identificación de peligros. Reduce accidentes reales y costos de primas de seguros en entornos controlados.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, necesito modernizar mi formación HSE.",
      ),
    },
  },
  {
    id: "visualizacion-big-data-3d",
    title: "Visualización de Big Data: Cuadros de Mando Espaciales",
    description:
      "Deja atrás los gráficos planos. Moderniza tu toma de decisiones con dashboards 3D que permiten navegar por los datos detectando cuellos de botella de forma intuitiva.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, me interesan los Dashboards 3D para Big Data.",
      ),
    },
  },
  {
    id: "edtech-laboratorios-virtuales",
    title: "Educación y EdTech: Laboratorios Virtuales Interactivos",
    description:
      "Moderniza la enseñanza de conceptos complejos. Crea laboratorios donde los estudiantes interactúan con elementos que en el mundo real serían costosos o peligrosos.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, información sobre Laboratorios Virtuales.",
      ),
    },
  },
  {
    id: "ecommerce-espacial-futuro",
    title: "E-commerce Espacial: La Tienda del Futuro en la Web",
    description:
      "Rompe la barrera de las fotos 2D. Implementa tiendas virtuales donde el usuario camina, descubre productos y los añade al carrito en una experiencia fluida.",
    icon: IoInformationCircle,
    cta: {
      label: "Quieres reducir costos ahora?",
      href: getWhatsAppUrl(
        "Hola KENSAI, quiero llevar mi E-commerce al espacio 3D.",
      ),
    },
  },
  {
    id: "gemelos-digitales-procesos",
    title: "Gemelos Digitales de Procesos: Auditoría Remota 24/7",
    description:
      "Moderniza la supervisión de tus líneas de producción. Visualiza el flujo de trabajo y el rendimiento de cada operario mediante un gemelo digital centralizado.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, me interesa implementar Gemelos Digitales.",
      ),
    },
  },
  {
    id: "arquitectura-marca-stands",
    title: "Arquitectura de Marca: Stand Virtual para Ferias Globales",
    description:
      "Moderniza tu branding con un stand permanente en la web que recibe visitas de todo el mundo y recolecta datos sin gastos de logística.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, necesito un Stand Virtual para mi marca.",
      ),
    },
  },
  {
    id: "museografia-patrimonio-digital",
    title: "Museografía y Cultura: Patrimonio Digitalizado e Interactivo",
    description:
      "Moderniza la conservación de piezas históricas. Crea museos virtuales donde el usuario puede manipular objetos invaluables con detalle microscópico.",
    icon: IoInformationCircle,
    cta: {
      label: "Llama y consulta",
      href: getWhatsAppUrl(
        "Hola KENSAI, me interesa la digitalización de patrimonio.",
      ),
    },
  },
];
