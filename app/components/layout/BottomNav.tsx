"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  projectBadge?: number;
}

export default function BottomNav({
  projectBadge = 0,
}: BottomNavProps) {
  const pathname = usePathname();

  const items = [
    {
      href: "/",
      label: "ダッシュボード",
      icon: LayoutDashboard,
    },
    {
      href: "/projects",
      label: "案件",
      icon: FolderKanban,
      badge: projectBadge,
    },
    {
      href: "/clients",
      label: "顧客",
      icon: Users,
    },
    {
      href: "/settings",
      label: "設定",
      icon: Settings,
    },
  ];

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-border
        bg-card/95
        backdrop-blur
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="grid grid-cols-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center py-3 transition",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">

                <Icon size={22} />

                {!!item.badge && (
                  <span
                    className="
                      absolute
                      -right-3
                      -top-2
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-destructive
                      px-1
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    {item.badge}
                  </span>
                )}

              </div>

              <span className="mt-1 text-[11px] font-medium">
                {item.label}
              </span>

              {active && (
                <div
                  className="
                    absolute
                    top-0
                    h-1
                    w-10
                    rounded-full
                    bg-primary
                  "
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}