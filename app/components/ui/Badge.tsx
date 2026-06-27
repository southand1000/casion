import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "consult"
    | "proposal"
    | "working"
    | "delivered"
    | "archive"
    | "danger";
}

const styles = {
  default:
    "bg-muted text-muted-foreground",

  consult:
    "bg-gray-100 text-gray-700",

  proposal:
    "bg-sky-100 text-sky-700",

  working:
    "bg-orange-100 text-orange-700",

  delivered:
    "bg-green-100 text-green-700",

  archive:
    "bg-purple-100 text-purple-700",

  danger:
    "bg-red-100 text-red-700",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "px-3 py-1",
        "text-xs font-semibold",
        "transition-colors duration-200",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}