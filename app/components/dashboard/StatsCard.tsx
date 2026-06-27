"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
  color?: "primary" | "green" | "orange" | "red";
}

const colorStyle = {
  primary: "text-primary",
  green: "text-green-600",
  orange: "text-orange-500",
  red: "text-red-500",
};

export default function StatsCard({
  title,
  value,
  icon,
  description,
  color = "primary",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2
            className={cn(
              "mt-2 text-3xl font-bold",
              colorStyle[color]
            )}
          >
            {value}
          </h2>

          {description && (
            <p className="mt-2 text-xs text-muted-foreground">
              {description}
            </p>
          )}

        </div>

        {icon && (
          <div className="rounded-xl bg-muted p-3">
            {icon}
          </div>
        )}

      </div>
    </div>
  );
}