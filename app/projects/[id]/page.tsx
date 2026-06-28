import Header from "@/app/components/layout/Header";
import { projects } from "@/lib/mock/projects";
import { getClientName } from "@/lib/client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const statusLabel = {
  consult: "相談",
  proposal: "提案",
  working: "作業中",
  delivered: "納品",
};

export default function ProjectDetailPage({
  params,
}: Props) {

  const project = projects.find(
    (p) => p.id === Number(params.id)
  );

  if (!project) {
    notFound();
  }

  const clientName = getClientName(project.clientId);

  return (
    <>
      <Header
        title={project.title}
        subtitle="案件詳細"
      />

      <main className="space-y-6 p-5 pb-28">

        <section className="rounded-2xl border bg-card p-5">

          <h2 className="mb-4 text-lg font-bold">
            基本情報
          </h2>

          <div className="space-y-3">

            <Row
              label="クライアント"
              value={clientName}
            />

            <Row
              label="ステータス"
              value={statusLabel[project.status]}
            />

            <Row
              label="提示価格"
              value={`¥${project.price.toLocaleString()}`}
            />

            <Row
              label="実収入"
              value={`¥${project.income.toLocaleString()}`}
            />

            <Row
              label="受注日"
              value={project.orderDate || "-"}
            />

            <Row
              label="納品日"
              value={project.deliveryDate || "-"}
            />

          </div>

        </section>

        <section className="rounded-2xl border bg-card p-5">

          <h2 className="mb-4 text-lg font-bold">
            タグ
          </h2>

          <div className="flex flex-wrap gap-2">

            {project.tags.map((tag) => (

              <span
                key={tag}
                className="
                  rounded-full
                  bg-secondary
                  px-3
                  py-1
                  text-sm
                "
              >
                #{tag}
              </span>

            ))}

          </div>

        </section>

        <section className="rounded-2xl border bg-card p-5">

          <h2 className="mb-4 text-lg font-bold">
            作業内容
          </h2>

          <div className="space-y-2">

            {Object.entries(project.works).map(
              ([key, value]) => (

                <Row
                  key={key}
                  label={key}
                  value={value ? "✓" : "-"}
                />

              )
            )}

          </div>

        </section>

        <section className="rounded-2xl border bg-card p-5">

          <h2 className="mb-4 text-lg font-bold">
            メモ
          </h2>

          <p className="whitespace-pre-wrap text-sm">
            {project.memo || "メモはありません"}
          </p>

        </section>

      </main>

    </>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-2">

      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}