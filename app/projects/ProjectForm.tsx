"use client";

import { useState } from "react";

export interface ProjectFormData {
  client: string;
  title: string;
  referenceUrl: string;
  status: "consult" | "proposal" | "working" | "delivered";
  orderDate: string;
  deliveryDate: string;
  price: string;
  income: string;
  memo: string;

  works: {
    pitch: boolean;
    timing: boolean;
    noise: boolean;
    harmony: boolean;
    space: boolean;
  };

  tags: string[];
}

interface Props {
  initialData?: Partial<ProjectFormData>;
  onSubmit: (data: ProjectFormData) => void;
  submitLabel?: string;
}

export default function ProjectForm({
  initialData,
  onSubmit,
  submitLabel = "保存",
}: Props) {

  const [form, setForm] = useState<ProjectFormData>({
    client: initialData?.client ?? "",
    title: initialData?.title ?? "",
    referenceUrl: initialData?.referenceUrl ?? "",
    status: initialData?.status ?? "consult",
    orderDate: initialData?.orderDate ?? "",
    deliveryDate: initialData?.deliveryDate ?? "",
    price: initialData?.price ?? "",
    income: initialData?.income ?? "",
    memo: initialData?.memo ?? "",

    works: {
      pitch: initialData?.works?.pitch ?? false,
      timing: initialData?.works?.timing ?? false,
      noise: initialData?.works?.noise ?? false,
      harmony: initialData?.works?.harmony ?? false,
      space: initialData?.works?.space ?? false,
    },

    tags: initialData?.tags ?? [],
  });

  function update<K extends keyof ProjectFormData>(
    key: K,
    value: ProjectFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="space-y-5">

      <input
        className="w-full rounded-xl border p-3"
        placeholder="クライアント名"
        value={form.client}
        onChange={(e)=>update("client",e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="曲名"
        value={form.title}
        onChange={(e)=>update("title",e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="参考URL"
        value={form.referenceUrl}
        onChange={(e)=>update("referenceUrl",e.target.value)}
      />

      <select
        className="w-full rounded-xl border p-3"
        value={form.status}
        onChange={(e)=>update("status",e.target.value as ProjectFormData["status"])}
      >
        <option value="consult">相談</option>
        <option value="proposal">提案</option>
        <option value="working">作業中</option>
        <option value="delivered">納品</option>
      </select>

      <div className="grid grid-cols-2 gap-3">

        <input
          type="date"
          className="rounded-xl border p-3"
          value={form.orderDate}
          onChange={(e)=>update("orderDate",e.target.value)}
        />

        <input
          type="date"
          className="rounded-xl border p-3"
          value={form.deliveryDate}
          onChange={(e)=>update("deliveryDate",e.target.value)}
        />

      </div>

      <div className="grid grid-cols-2 gap-3">

        <input
          type="number"
          className="rounded-xl border p-3"
          placeholder="提示価格"
          value={form.price}
          onChange={(e)=>update("price",e.target.value)}
        />

        <input
          type="number"
          className="rounded-xl border p-3"
          placeholder="実収入"
          value={form.income}
          onChange={(e)=>update("income",e.target.value)}
        />

      </div>

      <div>

        <p className="mb-3 font-semibold">
          作業内容
        </p>

        <div className="space-y-2">

          {[
            ["pitch","ピッチ補正"],
            ["timing","タイミング補正"],
            ["noise","ノイズ除去"],
            ["harmony","ハモリ生成"],
            ["space","空間処理"],
          ].map(([key,label])=>(

            <label
              key={key}
              className="flex items-center gap-2"
            >

              <input
                type="checkbox"
                checked={form.works[key as keyof typeof form.works]}
                onChange={(e)=>{

                  setForm(prev=>({

                    ...prev,

                    works:{
                      ...prev.works,
                      [key]:e.target.checked
                    }

                  }));

                }}
              />

              {label}

            </label>

          ))}

        </div>

      </div>

      <textarea
        className="h-28 w-full rounded-xl border p-3"
        placeholder="備考"
        value={form.memo}
        onChange={(e)=>update("memo",e.target.value)}
      />

      <button
        onClick={()=>onSubmit(form)}
        className="
          w-full
          rounded-xl
          bg-primary
          py-3
          font-semibold
          text-primary-foreground
        "
      >
        {submitLabel}
      </button>

    </div>
  );
}