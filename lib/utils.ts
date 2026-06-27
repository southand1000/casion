import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * TailwindのclassNameを安全に結合するユーティリティ
 *
 * 使用例:
 * cn(
 *   "rounded-lg bg-white",
 *   isActive && "border-primary",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 日本円フォーマット
 *
 * 2500 → ¥2,500
 */
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * 日付フォーマット
 *
 * 2026-07-15 → 2026/07/15
 */
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));
}

/**
 * 今日との差(日数)
 *
 * 期限管理で使用
 */
export function daysUntil(date: string | Date) {
  const target = new Date(date).getTime();
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const diff = target - today.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * 納期カラー判定
 *
 * <=0 : 赤
 * <=3 : オレンジ
 * <=7 : 黄
 * >7 : グレー
 */
export function getDeadlineColor(days: number) {
  if (days <= 0) return "text-destructive";
  if (days <= 3) return "text-orange-500";
  if (days <= 7) return "text-yellow-500";

  return "text-muted-foreground";
}

/**
 * ステータスカラー
 */
export function getStatusColor(status: string) {
  switch (status) {
    case "相談":
      return "bg-gray-100 text-gray-700";

    case "提案":
      return "bg-primary/10 text-primary";

    case "作業":
      return "bg-orange-100 text-orange-600";

    case "納品":
      return "bg-green-100 text-green-600";

    case "アーカイブ":
      return "bg-purple-100 text-purple-600";

    default:
      return "bg-muted text-muted-foreground";
  }
}