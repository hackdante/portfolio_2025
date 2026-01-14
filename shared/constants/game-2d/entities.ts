import {
  EntityInstanceUI,
  PlayerTokensUI,
  PortfolioAssetsUI,
} from "@/shared/types";

export const PLAYER_CONTROLLER_TOKENS: PlayerTokensUI = {
 GRAVITY: 0.6,             
  FRICTION: 0.15,
  WORLD_FLOOR_Y: 62,
  WORLD_HEIGHT: 500,
  WORLD_WIDTH: 3000,
  TERMINAL_VELOCITY: -10,   
  BODY_OFFSET_X: 15,
  BODY_OFFSET_Y: 25,
  GROUND_CHECK_PADDING: 20,
};

export const STONE_ENTITIES: EntityInstanceUI[] = [
  {
    id: "stone-1",
    x: 400,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-2",
    x: 800,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-3",
    x: 1200,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-4",
    x: 1600,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-5",
    x: 2000,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-6",
    x: 2400,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
  {
    id: "stone-7",
    x: 2800,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
];

export const PROJECTS_PORTFOLIO: readonly PortfolioAssetsUI[] = [
  {
    uid: 1,
    imag: "/images/projects/kensai_prj.jpg",
    title: "KENSAI | R3F Experience",
    description:
      "Experiencia inmersiva 3D con alto rendimiento en SEO y animaciones fluidas mediante GSAP y Next.js.",
    url: "https://portfolio-2025-umber-xi.vercel.app",
    stack:
      "React.js | Next.js | Typescript | React Fiber (R3F) | Three.js | GSAP | Vercel",
  },
  {
    uid: 2,
    imag: "/images/projects/schedule_basic_prj.jpg",
    title: "CALENDAR | Directorio",
    description:
      "Sistema ágil de gestión de directorios y agendas corporativas desarrollado con arquitectura VueX.",
    url: "https://companiescheddules.web.app",
    stack: "Vue.js | VueX.js | Javascript",
  },
  {
    uid: 3,
    imag: "/images/projects/limpi_app_prj.jpg",
    title: "LIMPIAPP | Agendamiento",
    description:
      "Plataforma de servicios domésticos con gestión de citas en tiempo real y persistencia en Firebase.",
    url: "https://limpiapp-5928f.web.app/ingreso",
    stack:
      "Vue.js | VueX.js | Typescript | Javascript | Firebase | Node Actions",
  },
  {
    uid: 4,
    imag: "/images/projects/territorio_prj.jpg",
    title: "VIRTUAL | CRUD Manager",
    description:
      "Herramienta administrativa para gestión de datos complejos con flujos de trabajo en Node Actions.",
    url: "https://territorio-virtual.web.app",
    stack:
      "Vue.js | VueX.js | Typescript | Javascript | Firebase | Node Actions",
  },
  {
    uid: 5,
    imag: "/images/projects/my_conextion_prj.jpg",
    title: "MY CONEXTION | Web 3D",
    description:
      "Landing page interactiva que fusiona renderizado de Three.js con una robusta base de datos NoSQL.",
    url: "https://myconextion.web.app",
    stack: "React.js | Three.js | GSAP | Saas | Firebase | Node Actions",
  },
  {
    uid: 6,
    imag: "/images/projects/schedules_base_prj.jpg",
    title: "SCHEDULES | Citas",
    description:
      "Aplicación escalable para el control de turnos y reservas con autenticación segura y tipos estrictos.",
    url: "https://miscitas-a6489.web.app/login",
    stack:
      "Vue.js | VueX.js | Typescript | Javascript | Firebase | Node Actions",
  },
  {
    uid: 7,
    imag: "/images/projects/dalog_prj.jpg",
    title: "DALOG | Data Dashboard",
    description:
      "Panel de análisis de datos optimizado para la toma de decisiones con despliegue continuo en Vercel.",
    url: "https://dalog-tech-test.vercel.app/login",
    stack: "React.js | Next.js | Typescript | Vercel",
  },
];
