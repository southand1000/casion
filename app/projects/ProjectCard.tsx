"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/app/components/ui/Badge";
import { useRouter } from "next/navigation";

export type ProjectStatus =
  | "consult"
  | "proposal"
  | "working"
  | "delivered";

interface ProjectCardProps {
  id: number;
  title: string;
  client: string;
  price: number;
  status: ProjectStatus;
  dueDate?: string;
  tags?: string[];
}

const statusStyle = {
  consult: "bg-gray-100 text-gray-700",
  proposal: "bg-sky-100 text-sky-700",
  working: "bg-orange-100 text-orange-700",
  delivered: "bg-green-100 text-green-700",
};

const statusLabel = {
  consult: "相談",
  proposal: "提案",
  working: "作業中",
  delivered: "納品",
};

export default function ProjectCard({
  id,
  title,
  client,
  price,
  status,
  dueDate,
  tags = [],
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${id}`)}
      className="
        rounded-2xl border border-border bg-card p-4 shadow-sm
        transition hover:scale-[1.01] active:scale-[0.99]
        cursor-pointer
      "
    >
      {/* ヘッダー */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-base font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">{client}</p>
        </div>

        <span className={cn("rounded-full px-3 py-1 text-xs font-bold", statusStyle[status])}>
          {statusLabel[status]}
        </span>
      </div>

      {/* 金額 */}
      <div className="mt-3 text-lg font-bold">
        ¥{price.toLocaleString()}
      </div>

      {/* 期限 */}
      {dueDate && (
        <p className="mt-1 text-xs text-muted-foreground">
          納期：{dueDate}
        </p>
      )}

      {/* タグ */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}