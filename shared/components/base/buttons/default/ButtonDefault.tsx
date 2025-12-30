"use client";

import { JSX } from "react";
import { ButtonDefaultUI } from "./interface";

export function ButtonDefault({
  children,
  variant = "default",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  type = "button",
  id,
}: ButtonDefaultUI): JSX.Element {
  const isBtnDisabled = variant === "disable" || isLoading;

  return (
    <button
      id={id}
      type={type}
      onClick={!isBtnDisabled ? onClick : undefined}
      disabled={isBtnDisabled}
      className={`
        btn-base 
        btn-size-${size} 
        btn-variant-${variant}
        ${isLoading ? "btn-state-loading" : ""}
        ${fullWidth ? "w-full" : ""}
        ${isBtnDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {isLoading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {!isLoading && leftIcon && (
        <span className="flex items-center">{leftIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {!isLoading && rightIcon && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
}
