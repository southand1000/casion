"use client";

import { useState } from "react";

import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";
import ProjectCard from "@/app/projects/ProjectCard";
import ProjectModal from "@/app/projects/ProjectModal";

const dummyProjects = [
  // ...
];

export default function ProjectsPage() {

  // ←ここです！！
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header title="案件管理" subtitle="Projects" />

      {/* この位置に追加ボタン */}
      <div className="px-5 pt-4">
        <button
          onClick={() => setOpen(true)}
          className="w-full rounded-2xl bg-primary py-4 font-semibold text-primary-foreground shadow"
        >
          ＋ 案件を追加
        </button>
      </div>

      <main className="space-y-4 p-5 pb-28">
        {dummyProjects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </main>

      {/* この位置にモーダル */}
      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />

      <BottomNav />
    </>
  );
}