import { SpeechBalloonTokenUI } from "./interface";

export const SPEECH_BALLOON_TOKEN_DEFAULT: SpeechBalloonTokenUI = {
  colors: {
    background: "var(--color-black-87)",
    text: "var(--color-white)",
    border: "var(--color-black-87)",
    accent: "var(---color-black-87)",
  },
  animation: {
    duration: 1,
    stagger: 0.1,
    idleDelay: 10000,
  },
  geometry: {
    maxWidth: "220px",
    borderRadius: "12px",
    padding: "0.85rem",
  }
};

export const SPEECH_IDLE_MESSAGES_DEFAULT: string[] = [
"¿Cuánto te cuesta cada día de retraso?",
  "El 3D sin métricas es solo un juguete.",
  "La duda del cliente mata tu rentabilidad.",
  "Tus manuales en PDF nadie los lee hoy.",
  "Vende el doble sin fabricar el primero.",
  "¿Pipeline estancado? Falta claridad visual.",
  "Menos renders, más activos comerciales.",
  "Tu competencia ya está automatizando ventas.",
  "¿Buscas innovación o buscas facturación?",
  "Optimiza el margen, no solo la estética.",
  "Hablemos de ROI, deja el diseño de lado.",
  "¿Listo para recortar tus ciclos de venta?"
];