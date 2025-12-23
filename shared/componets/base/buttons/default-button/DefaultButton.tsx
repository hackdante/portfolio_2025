import React from "react";
import { DefaultButtonUI } from "@/shared/componets/base";

export const DefaultButton: React.FC<DefaultButtonUI> = ({
  label,
  variant = "default",
  size = "md",
  theme = "light",
  type = "button",
  isDisabled = false,
  onClick,
  onMouseEnter,
}) => {
  // En v4 podemos usar estas clases semánticas directamente
  const sizeMap: Record<string, string> = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4.5 text-lg",
  };

  const variantMap: Record<string, string> = {
    default: "bg-ui-foreground text-ui-background hover:opacity-90",
    success: "bg-semantic-success text-white hover:brightness-110",
    error: "bg-semantic-error text-white hover:brightness-110",
    info: "bg-semantic-info text-white hover:brightness-110",
    warning: "bg-semantic-warning text-black hover:brightness-110",
    disabled: "bg-semantic-disabled text-zinc-500 cursor-not-allowed",
    active:
      "bg-ui-foreground text-ui-background ring-2 ring-ui-border ring-offset-2",
  };

  return (
    <div data-theme={theme} className="inline-block">
      <button
        type={type}
        disabled={isDisabled || variant === "disabled"}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`
          inline-flex items-center justify-center 
          rounded-button font-semibold transition-all duration-300
          active:scale-95
          ${sizeMap[size]} 
          ${variantMap[variant]}
        `}
      >
        {label}
      </button>
    </div>
  );
};
