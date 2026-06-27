import Header from "@/app/components/layout/Header";
import BottomNav from "@/app/components/layout/BottomNav";

import StatsCard from "@/app/components/dashboard/StatsCard";
import StatusCard from "@/app/components/dashboard/StatusCard";
import DeadlineCard from "@/app/components/dashboard/DeadlineCard";
import GanttChart from "@/app/components/dashboard/GanttChart";

import { Wallet, Package, ClipboardList } from "lucide-react";

import { dashboardData } from "@/lib/mockData";

export default function Home() {
  return (
    <>
      <Header
        title="ダッシュボード"
        subtitle="Casion"
      />

      <main className="space-y-5 p-5 pb-28">

        <section className="grid grid-cols-1 gap-4">

          <StatsCard
            title="過去30日の実収入"
            value={`¥${dashboardData.stats.revenue30.toLocaleString()}`}
            icon={<Wallet size={24} />}
          />

          <StatsCard
            title="過去30日の受注件数"
            value={dashboardData.stats.orders30}
            icon={<ClipboardList size={24} />}
          />

          <StatsCard
            title="過去30日の納品件数"
            value={dashboardData.stats.delivered30}
            icon={<Package size={24} />}
          />

        </section>

        <StatusCard
          {...dashboardData.status}
        />

        <DeadlineCard
          projects={dashboardData.deadlines}
        />

        <GanttChart
          items={dashboardData.gantt}
        />

      </main>

      <BottomNav
        projectBadge={dashboardData.status.working}
      />
    </>
  );
}