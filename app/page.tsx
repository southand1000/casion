import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";
import StatsCard from "@/app/components/dashboard/StatsCard";
import StatusCard from "@/app/components/dashboard/StatusCard";
import { Wallet } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header title="ダッシュボード" />

      <main className="space-y-4 p-5 pb-28">

        <StatsCard
          title="過去30日の実収入"
          value="¥18,500"
          icon={<Wallet size={24} />}
        />

        <StatusCard
          consult={3}
          proposal={2}
          working={6}
          delivered={8}
        />

      </main>

      <BottomNav projectBadge={6} />
    </>
  );
}