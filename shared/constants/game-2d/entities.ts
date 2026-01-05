import { EntityInstanceUI, PlayerTokensUI, PortfolioAssetsUI } from "@/shared/types";

export const PLAYER_CONTROLLER_TOKENS: PlayerTokensUI = {
  GRAVITY: 0.8,
  FRICTION: 0.15,
  WORLD_FLOOR_Y: 62,
  WORLD_WIDTH: 3000,
  TERMINAL_VELOCITY: -12,
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
    x: 1000,
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
    x: 1600,
    y: 65,
    type: "solid",
    isActive: true,
    isFloor: true,
    maskUrl: "/images/game-2d/hit/rock_wall_mask.jpg",
    collisionWidth: 121,
    collisionHeight: 38,
  },
];


export const PROJECTS_PORTFOLIO: readonly PortfolioAssetsUI[] = [{
  uid: 1,
  imag: '/images/projects/kensai_prj.png',
  title: 'KENSAI | Sitio web',
  description: 'Proyecto que combina la parte interactiva, con la parte web, sin afectacion del SEO.',
  url: 'https://portfolio-2025-umber-xi.vercel.app/',
  stack: 'React.js | Next.js | Typescript | React Fiber (R3F) | Three.js | GSAP'
},

{
  uid: 2,
  imag: '/images/projects/kensai_prj.png',
  title: 'KENSAI 2 | Sitio web',
  description: 'Proyecto que combina la parte interactiva, con la parte web, sin afectacion del SEO.',
  url: 'https://portfolio-2025-umber-xi.vercel.app/',
  stack: 'React.js | Next.js | Typescript | React Fiber (R3F) | Three.js | GSAP'
},
{
  uid: 3,
  imag: '/images/projects/kensai_prj.png',
  title: 'KENSAI 3 | Sitio web',
  description: 'Proyecto que combina la parte interactiva, con la parte web, sin afectacion del SEO.',
  url: 'https://portfolio-2025-umber-xi.vercel.app/',
  stack: 'React.js | Next.js | Typescript | React Fiber (R3F) | Three.js | GSAP'
}
]