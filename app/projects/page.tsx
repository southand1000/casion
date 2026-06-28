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

      <main className="space-y-5 p-5 pb-28">

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
            transition
            hover:opacity-90
          "
        >
          ＋ 案件を追加
        </button>

        <section className="space-y-4">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </section>

      </main>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />

      <BottomNav />
    </>
  );
}