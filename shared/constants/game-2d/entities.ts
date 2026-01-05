import { EntityInstanceUI, PlayerTokensUI } from "@/shared/types";

 export const STONE_ENTITIES: EntityInstanceUI[] = [
   {
     id: "stone-1",
     x: 400,
     y: 65,
     type: "solid",
     isActive: true,
     isFloor: true,
   },
   {
     id: "stone-2",
     x: 1000,
     y: 65,
     type: "solid",
     isActive: true,
     isFloor: true,
   },
   {
     id: "stone-3",
     x: 1600,
     y: 65,
     type: "solid",
     isActive: true,
     isFloor: true,
   },
 ];
 
 export const PLAYER_CONTROLLER_TOKENS : PlayerTokensUI = {
   GRAVITY: 0.8,
   FRICTION: 0.15,
   WORLD_FLOOR_Y: 62,
   WORLD_WIDTH: 3000,
   TERMINAL_VELOCITY: -12,
   COLLISION_OFFSET: 25, 
 };