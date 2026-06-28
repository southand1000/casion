"use client";

import Link from "next/link";

import { Project } from "@/types/project";
import { getClientName } from "@/lib/client";

interface Props {
  project: Project;
}

const statusMap = {
  consult: {
    label: "相談",
    color: "bg-slate-200 text-slate-700",
  },
  proposal: {
    label: "提案",
    color: "bg-amber-100 text-amber-700",
  },
  working: {
    label: "作業",
    color: "bg-cyan-100 text-cyan-700",
  },
  delivered: {
    label: "納品",
    color: "bg-emerald-100 text-emerald-700",
  },
};

export default function ProjectCard({
  project,
}: Props) {

  const status = statusMap[project.status];
  const clientName = getClientName(project.clientId);

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-5
          shadow-sm
          transition-all
          hover:shadow-md
          hover:-translate-y-0.5
          cursor-pointer
        "
      >
        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {clientName}
            </p>

          </div>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-medium
              ${status.color}
            `}
          >
            {status.label}
          </span>

        </div>

        <div className="mt-5 flex items-center justify-between">

          <div>

            <p className="text-xs text-muted-foreground">
              提示価格
            </p>

            <p className="font-bold">
              ¥{project.price.toLocaleString()}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              納期
            </p>

            <p className="font-medium">
              {project.deliveryDate || "-"}
            </p>

          </div>

        </div>

        {project.tags.length > 0 && (

          <div className="mt-4 flex flex-wrap gap-2">

            {project.tags.map((tag) => (

              <span
                key={tag}
                className="
                  rounded-full
                  bg-secondary
                  px-2
                  py-1
                  text-xs
                "
              >
                #{tag}
              </span>

            ))}

          </div>

        )}

      </div>
    </Link>
  );
}