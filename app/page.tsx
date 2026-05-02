import { KPICards } from "@/components/dashboard/KPICards";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { RecentEventsTable } from "@/components/dashboard/RecentEventsTable";
import { WorldMap } from "@/components/charts/WorldMap";
import { MagnitudeHistogram } from "@/components/charts/MagnitudeHistogram";
import { FrequencyTimeline } from "@/components/charts/FrequencyTimeline";
import { DepthScatter } from "@/components/charts/DepthScatter";
import { WorldMapWrapper } from "@/components/charts/WorldMapWrapper";
import { MagnitudeHistogramWrapper } from "@/components/charts/MagnitudeHistogramWrapper";
import { FrequencyTimelineWrapper } from "@/components/charts/FrequencyTimelineWrapper";
import { DepthScatterWrapper } from "@/components/charts/DepthScatterWrapper";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Total earthquakes",
  description: "Real-time global seismic data visualization powered by USGS",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <header className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-muted-foreground">USGS · real-time feed</p>
          <h1 className="text-2xl font-medium">
            Earthquake analytics explorer
          </h1>
        </div>
        <span className="text-xs text-muted-foreground ml-auto">
          Auto-refreshes every 5 minutes
        </span>
      </header>

      <KPICards />
      <FilterBar />

      <div className="rounded-xl border p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium mb-3">
          Global seismic activity · bubble size = magnitude · color = depth
        </p>
        <WorldMapWrapper />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="rounded-xl border p-4 shadow-sm">
          <p className="text-sm font-medium mb-3">Magnitude distribution</p>
          <MagnitudeHistogramWrapper />
        </div>
        <div className="rounded-xl border p-4 shadow-sm">
          <p className="text-sm font-medium mb-3">Daily frequency</p>
          <FrequencyTimelineWrapper />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="rounded-xl border p-4 shadow-sm">
          <p className="text-sm font-medium mb-3">Depth vs magnitude</p>
          <DepthScatterWrapper />
        </div>
        <div className="rounded-xl border p-4 shadow-sm">
          <p className="text-sm font-medium mb-3">Recent significant events</p>
          <RecentEventsTable />
        </div>
      </div>
    </DashboardShell>
  );
}
