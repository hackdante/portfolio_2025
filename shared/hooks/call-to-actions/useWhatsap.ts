"use client";

import { WhatsAppUI, WhatsAppHookUI } from "./interface";


export function useWhatsApp(props: WhatsAppUI): WhatsAppHookUI {
  const { phone, message } = props;

  const handleWhatsAppClick = (): void => {
    const encodedMessage: string = encodeURIComponent(message);
    const url: string = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return {
    handleWhatsAppClick,
  };
}