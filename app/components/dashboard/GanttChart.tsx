"use client";

interface GanttItem {
  id: number;
  title: string;
  start: number;
  end: number;
  status: "consult" | "proposal" | "working" | "delivered";
}

interface GanttChartProps {
  items: GanttItem[];
}

const colors = {
  consult: "bg-gray-400",
  proposal: "bg-sky-500",
  working: "bg-orange-500",
  delivered: "bg-green-500",
};

export default function GanttChart({
  items,
}: GanttChartProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        作業スケジュール
      </h2>

      <div className="overflow-x-auto">
        <div className="min-w-[700px] space-y-4">

          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[140px_1fr] items-center gap-4"
            >
              <div className="truncate text-sm font-medium">
                {item.title}
              </div>

              <div className="relative h-8 rounded-full bg-muted">

                <div
                  className={`absolute h-8 rounded-full ${colors[item.status]}`}
                  style={{
                    left: `${item.start}%`,
                    width: `${item.end - item.start}%`,
                  }}
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}