"use client";

import { MessageCircle, Send, Wrench, CheckCircle2 } from "lucide-react";

interface StatusCardProps {
  consult: number;
  proposal: number;
  working: number;
  delivered: number;
}

export default function StatusCard({
  consult,
  proposal,
  working,
  delivered,
}: StatusCardProps) {
  const items = [
    {
      title: "相談",
      value: consult,
      color: "text-gray-600",
      bg: "bg-gray-100",
      icon: <MessageCircle size={20} />,
    },
    {
      title: "提案",
      value: proposal,
      color: "text-sky-600",
      bg: "bg-sky-100",
      icon: <Send size={20} />,
    },
    {
      title: "作業",
      value: working,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: <Wrench size={20} />,
    },
    {
      title: "納品",
      value: delivered,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <CheckCircle2 size={20} />,
    },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        ステータス別件数
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-background p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <p className={`mt-2 text-2xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              </div>

              <div className={`rounded-xl p-3 ${item.bg}`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}