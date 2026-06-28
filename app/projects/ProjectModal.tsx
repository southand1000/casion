"use client";

import ProjectForm, {
  ProjectFormData,
} from "@/app/projects/ProjectForm";

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: Partial<ProjectFormData>;
  mode?: "create" | "edit";
}

export default function ProjectModal({
  open,
  onClose,
  initialData,
  mode = "create",
}: Props) {

  if (!open) return null;

  function handleSubmit(data: ProjectFormData) {
    console.log(data);

    // 次回ここでSupabase保存

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">

      <div
        className="
          max-h-[92vh]
          w-full
          overflow-y-auto
          rounded-t-3xl
          bg-background
          p-6
        "
      >

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            {mode === "create"
              ? "案件追加"
              : "案件編集"}
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-lg
              px-3
              py-2
              text-sm
              hover:bg-muted
            "
          >
            ✕
          </button>

        </div>

        <ProjectForm
          initialData={initialData}
          onSubmit={handleSubmit}
          submitLabel={
            mode === "create"
              ? "案件を追加"
              : "変更を保存"
          }
        />

      </div>

    </div>
  );
}