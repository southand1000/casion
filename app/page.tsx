"use client";

import { useState } from "react";

import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";

import ProjectCard from "@/app/projects/ProjectCard";
import ProjectModal from "@/app/projects/ProjectModal";

import { projects } from "@/lib/mock/projects";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header
        title="案件管理"
        subtitle="Projects"
      />

      <div className="px-5 pt-4">
        <button
          onClick={() => setOpen(true)}
          className="
            w-full
            rounded-2xl
            bg-primary
            py-4
            font-semibold
            text-primary-foreground
            shadow-sm
          "
        >
          ＋ 案件を追加
        </button>
      </div>

      <main className="space-y-4 p-5 pb-28">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </main>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />

      <BottomNav />
    </>
  );
}