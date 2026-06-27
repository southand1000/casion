"use client";

import { ReactNode } from "react";
import { ArrowLeft, Bell, Plus } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;

  showBack?: boolean;
  onBack?: () => void;

  showAdd?: boolean;
  onAdd?: () => void;

  showNotification?: boolean;
  onNotification?: () => void;

  rightSlot?: ReactNode;

  className?: string;
}

export default function Header({
  title,
  subtitle,
  showBack = false,
  onBack,
  showAdd = false,
  onAdd,
  showNotification = false,
  onNotification,
  rightSlot,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40",
        "border-b border-border",
        "bg-background/90 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-5">

        <div className="flex items-center gap-3">

          {showBack && (
            <button
              onClick={onBack}
              className="rounded-xl p-2 transition hover:bg-muted"
            >
              <ArrowLeft size={22} />
            </button>
          )}

          <div>
            <h1 className="text-lg font-bold">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xs text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>

        </div>

        <div className="flex items-center gap-2">

          {rightSlot}

          {showNotification && (
            <button
              onClick={onNotification}
              className="rounded-xl p-2 transition hover:bg-muted"
            >
              <Bell size={20} />
            </button>
          )}

          {showAdd && (
            <Button
              size="sm"
              leftIcon={<Plus size={18} />}
              onClick={onAdd}
            >
              追加
            </Button>
          )}

        </div>

      </div>
    </header>
  );
}