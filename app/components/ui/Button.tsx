"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fab?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fab = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyle = {
      primary:
        "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.97]",

      secondary:
        "border border-border bg-card hover:bg-muted active:scale-[0.97]",

      ghost:
        "hover:bg-muted active:scale-[0.97]",

      danger:
        "bg-destructive text-white hover:opacity-90 active:scale-[0.97]",
    };

    const sizeStyle = {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-5 text-sm",
      lg: "h-14 px-6 text-base",
    };

    if (fab) {
      return (
        <button
          ref={ref}
          disabled={disabled || loading}
          className={cn(
            "fixed bottom-24 right-5 z-50",
            "flex h-16 w-16 items-center justify-center",
            "rounded-full bg-primary text-primary-foreground",
            "shadow-lg transition-all duration-200",
            "hover:scale-105 active:scale-95",
            "disabled:pointer-events-none disabled:opacity-50",
            className
          )}
          {...props}
        >
          {loading ? (
            <svg
              className="h-6 w-6 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                opacity=".2"
              />
              <path
                d="M22 12a10 10 0 00-10-10"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          ) : (
            children
          )}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-xl font-medium",
          "transition-all duration-200",
          "disabled:pointer-events-none disabled:opacity-50",
          variantStyle[variant],
          sizeStyle[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                opacity=".2"
              />
              <path
                d="M22 12a10 10 0 00-10-10"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>

            <span>読み込み中...</span>
          </>
        ) : (
          <>
            {leftIcon}

            {children}

            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };