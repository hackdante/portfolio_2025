'use client';

import { JSX } from "react";
import { ButtonDefaultUI } from "./interface";
import { SizesType, StatusType } from "@/shared/types";

const VARIANT_MAPS: Record<Exclude<StatusType, 'hover' | 'active'>, string> = {
  default: "btn-variant-default",
  info: "btn-variant-info",
  success: "btn-variant-success",
  warning: "btn-variant-warning",
  error: "btn-variant-error",
  disable: "btn-variant-disable opacity-50 grayscale pointer-events-none",
};

const SIZE_MAPS: Record<SizesType, string> = {
  sm: "btn-size-sm",
  md: "btn-size-md",
  lg: "btn-size-lg",
  xl: "btn-size-xl",
};

export const ButtonDefault = ({
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
}: ButtonDefaultUI): JSX.Element => {
  
  const isButtonDisabled = variant === "disable" || isLoading;

  const buttonClasses = [
    "btn-base",
    VARIANT_MAPS[variant as keyof typeof VARIANT_MAPS] || VARIANT_MAPS.default,
    SIZE_MAPS[size] || SIZE_MAPS.md,
    fullWidth ? "flex w-full" : "inline-flex w-auto",
    isLoading ? "btn-state-loading" : "",
  ].filter(Boolean).join(" ");

  return (
    <button
      id={id}
      type={type}
      className={buttonClasses}
      onClick={!isButtonDisabled ? onClick : undefined}
      disabled={isButtonDisabled}
      aria-busy={isLoading}
    >
      {/* State Layer Overlay (opcional para un brillo extra) */}
      <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors pointer-events-none" />

      {/* Loader / Icono Izquierdo */}
      <div className="relative flex items-center justify-center shrink-0">
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          leftIcon && <span className="text-[1.25rem] leading-none">{leftIcon}</span>
        )}
      </div>

      {/* Label Texto */}
      <span className="relative truncate flex-1 text-center leading-none">
        {children}
      </span>

      {/* Icono Derecho */}
      {!isLoading && rightIcon && (
        <div className="relative flex items-center justify-center shrink-0">
          <span className="text-[1.25rem] leading-none">{rightIcon}</span>
        </div>
      )}
    </button>
  );
};