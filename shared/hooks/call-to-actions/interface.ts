export interface WhatsAppUI {
  readonly phone: string;
  readonly message: string;
}

export interface WhatsAppHookUI {
  readonly handleWhatsAppClick: () => void;
}
