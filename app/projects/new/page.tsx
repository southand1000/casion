import Header from "@/app/components/layout/Header";
import ProjectForm from "@/app/projects/ProjectForm";

export default function NewProjectPage() {
  function handleSubmit(data: any) {
    console.log("新規追加", data);

    // 次回 Supabase保存
  }

  return (
    <>
      <Header
        title="案件追加"
        subtitle="New Project"
      />

      <main className="p-5 pb-28">

        <ProjectForm
          onSubmit={handleSubmit}
          submitLabel="案件を追加"
        />

      </main>
    </>
  );
}