import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";

export default function Home() {
  return (
    <>
      <Header
        title="ダッシュボード"
        subtitle="ようこそ"
      />

      <main className="p-5 pb-28">
        テスト
      </main>

      <BottomNav projectBadge={3} />
    </>
  );
}