"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  open,
  onClose,
}: Props) {
  const [client, setClient] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">

      <div className="w-full rounded-t-3xl bg-background p-6">

        <h2 className="mb-5 text-xl font-bold">
          案件追加
        </h2>

        <div className="space-y-4">

          <input
            placeholder="クライアント名"
            value={client}
            onChange={(e)=>setClient(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            placeholder="曲名"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

          <input
            placeholder="提示価格"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div className="mt-8 flex gap-3">

          <button
            className="flex-1 rounded-xl border py-3"
            onClick={onClose}
          >
            キャンセル
          </button>

          <button
            className="flex-1 rounded-xl bg-primary py-3 text-primary-foreground"
          >
            保存
          </button>

        </div>

      </div>

    </div>
  );
}