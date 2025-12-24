import gsap from "gsap";
import { HorizontalLoopTimelineUI, HorizontalLoopUI } from "@/shared/utils";


export function horizontalLoop(
  items: HTMLElement[],
  config: HorizontalLoopUI
): HorizontalLoopTimelineUI {
  const itemsArray = gsap.utils.toArray(items) as HTMLElement[];
  
  // Inicialización de la Timeline base
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  const { length } = itemsArray;
  const startX = itemsArray[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(Number(config.snap) || 1);
  let curIndex = 0;

  // Configuración inicial de posiciones
  gsap.set(itemsArray, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          (gsap.getProperty(el, "xPercent") as number)
      );
      return xPercents[i];
    },
  });

  gsap.set(itemsArray, { x: 0 });

  const totalWidth =
    itemsArray[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    itemsArray[length - 1].offsetWidth * (gsap.getProperty(itemsArray[length - 1], "scaleX") as number) +
    (parseFloat(String(config.paddingRight)) || 0);

  // Construcción de la animación por cada item
  for (let i = 0; i < length; i++) {
    const item = itemsArray[i];
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(item, {
      xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
      duration: distanceToLoop / pixelsPerSecond,
    }, 0)
    .fromTo(item, { 
      xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) 
    }, {
      xPercent: xPercents[i],
      duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
      immediateRender: false,
    }, distanceToLoop / pixelsPerSecond)
    .add("label" + i, distanceToStart / pixelsPerSecond);
    
    times[i] = distanceToStart / pixelsPerSecond;
  }

  // Lógica interna para navegación por índice
  function toIndex(index: number, vars: gsap.TweenVars = {}) {
    let targetIndex = index;
    if (Math.abs(targetIndex - curIndex) > length / 2) {
      targetIndex += targetIndex > curIndex ? -length : length;
    }
    const newIndex = gsap.utils.wrap(0, length, targetIndex);
    let time = times[newIndex];
    if (time > tl.time() !== targetIndex > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (targetIndex > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  /**
   * SOLUCIÓN DE ERRORES:
   * 1. Definimos los métodos en un objeto separado.
   * 2. Usamos Object.defineProperties o asignación directa previa al cast 
   * para satisfacer las restricciones de Readonly.
   */
  const loop = tl as unknown as HorizontalLoopTimelineUI;

  // Asignación de métodos sin violar restricciones de solo lectura
  Object.assign(loop, {
    next: (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars),
    prev: (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars),
    current: () => curIndex,
    toIndex: (index: number, vars?: gsap.TweenVars) => toIndex(index, vars),
    times: times
  });

  tl.progress(1, true).progress(0, true);
  
  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }

  return loop;
}