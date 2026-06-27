"use client";

import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";
import ProjectCard from "@/app/projects/ProjectCard";

const dummyProjects = [
  {
    id: 1,
    title: "KING",
    client: "〇〇様",
    price: 2000,
    status: "working" as const,
    dueDate: "2026-07-10",
    tags: ["フル", "ボカロ"],
  },
  {
    id: 2,
    title: "青と夏",
    client: "△△様",
    price: 1500,
    status: "proposal" as const,
    dueDate: "2026-07-12",
    tags: ["ワンコーラス"],
  },
  {
    id: 3,
    title: "少女レイ",
    client: "□□様",
    price: 3000,
    status: "consult" as const,
    dueDate: "",
    tags: ["デュエット"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header title="案件管理" subtitle="Projects" />

      <main className="space-y-4 p-5 pb-28">
        {dummyProjects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </main>

      <BottomNav />
    </>
}