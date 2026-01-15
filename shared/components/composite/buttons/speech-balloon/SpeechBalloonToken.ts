import { SpeechBalloonTokenUI } from "./interface";

export const SPEECH_BALLOON_TOKEN_DEFAULT: SpeechBalloonTokenUI = {
  colors: {
    background: "var(--color-black-87)",
    text: "var(--color-white)",
    border: "var(--color-primary)",
    accent: "var(--color-accent)",
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
  "...",
  "mmmm...",
 "¿Dónde está el cuello de botella hoy?",
  "La fricción comercial te está costando dinero.",
  "¿Configurar, capacitar o decidir? Elige un frente.",
  "Menos renders estáticos, más activos rentables.",
  "El 3D decorativo es un gasto. Esto es una inversión.",
  "¿Listo para reducir tiempos de cierre?",
  "Hablemos de ROI, no de estética."
];