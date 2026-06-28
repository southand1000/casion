"use client";

import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";
import { Badge } from "@/app/components/ui/Badge";

export default function ProjectDetailPage() {
  return (
    <>
      <Header title="案件詳細" subtitle="Project Detail" />

      <main className="space-y-5 p-5 pb-28">

        {/* 基本情報 */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-bold">KING</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            クライアント：〇〇様
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>ボカロ</Badge>
            <Badge>フルコーラス</Badge>
            <Badge>デュエット</Badge>
          </div>
        </section>

        {/* ステータス */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-3 font-semibold">ステータス</h3>

          <select
            className="w-full rounded-xl border border-border p-3"
            defaultValue="working"
          >
            <option value="consult">相談</option>
            <option value="proposal">提案</option>
            <option value="working">作業中</option>
            <option value="delivered">納品</option>
          </select>
        </section>

        {/* 金額 */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-3 font-semibold">金額</h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">提示価格</p>
              <p className="text-lg font-bold">¥2,000</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">実収入</p>
              <p className="text-lg font-bold">¥1,700</p>
            </div>
          </div>
        </section>

        {/* 日付 */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-3 font-semibold">スケジュール</h3>

          <div className="space-y-2 text-sm">
            <p>受注日：2026/7/1</p>
            <p>納品予定日：2026/7/10</p>
            <p>更新日：2026/7/4</p>
          </div>
        </section>

        {/* 作業内容 */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-3 font-semibold">作業内容</h3>

          <div className="space-y-2">

            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              ピッチ補正
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              タイミング補正
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" readOnly />
              ハモリ生成
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              ノイズ除去
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              空間処理
            </label>

          </div>
        </section>

        {/* 備考 */}
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-3 font-semibold">備考</h3>

          <p className="text-sm text-muted-foreground">
            クライアント希望で自然な補正。
            リバーブ控えめ。
          </p>
        </section>

      </main>

      <BottomNav />
    </>
  );
}