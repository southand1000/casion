"use client";

import { AlertTriangle, Clock3 } from "lucide-react";

export interface DeadlineItem {
  id: number;
  title: string;
  client: string;
  dueIn: number;
}

interface DeadlineCardProps {
  projects: DeadlineItem[];
}

export default function DeadlineCard({
  projects,
}: DeadlineCardProps) {
  const getStyle = (day: number) => {
    if (day < 0) {
      return {
        bg: "bg-red-50",
        border: "border-red-300",
        badge: "bg-red-500",
        text: "text-red-700",
        label: `${Math.abs(day)}日超過`,
      };
    }

    if (day === 0) {
      return {
        bg: "bg-orange-50",
        border: "border-orange-300",
        badge: "bg-orange-500",
        text: "text-orange-700",
        label: "今日まで",
      };
    }

    if (day <= 2) {
      return {
        bg: "bg-yellow-50",
        border: "border-yellow-300",
        badge: "bg-yellow-500",
        text: "text-yellow-700",
        label: `あと${day}日`,
      };
    }

    return {
      bg: "bg-green-50",
      border: "border-green-300",
      badge: "bg-green-500",
      text: "text-green-700",
      label: `あと${day}日`,
    };
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Clock3 size={20} />
        <h2 className="text-lg font-semibold">
          納期が近い案件
        </h2>
      </div>

      <div className="space-y-3">
        {projects.length === 0 && (
          <div className="rounded-xl bg-muted p-6 text-center text-sm text-muted-foreground">
            納期が近い案件はありません
          </div>
        )}

        {projects.slice(0, 5).map((project) => {
          const style = getStyle(project.dueIn);

          return (
            <button
              key={project.id}
              className={`w-full rounded-xl border p-4 text-left transition hover:scale-[1.01] active:scale-[0.99] ${style.bg} ${style.border}`}
            >
              <div className="flex items-start justify-between">

                <div>

                  <p className="font-semibold">
                    {project.title}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.client}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold text-white ${style.badge}`}
                >
                  {style.label}
                </span>

              </div>

              {project.dueIn < 0 && (
                <div className="mt-3 flex items-center gap-2 text-sm text-red-700">
                  <AlertTriangle size={16} />
                  納期を過ぎています
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}