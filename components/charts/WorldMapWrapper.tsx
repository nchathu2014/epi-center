// Each chart needs a client wrapper that reads from TanStack Query
// and passes data down to the chart component.
// The pattern is identical for all four charts.


"use client";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { WorldMap } from "./WorldMap";
import { Loader2 } from "lucide-react";

export function WorldMapWrapper() {
  const { data, isLoading, isError } = useEarthquakes();

  if (isLoading) return (
    <div className="flex items-center justify-center h-48">
      <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
    </div>
  );

  if (isError) return (
    <p className="text-sm text-destructive text-center py-8">
      Failed to load earthquake data
    </p>
  );

  return <WorldMap features={data?.features ?? []} />;
}

// Repeat the same pattern for:
// MagnitudeHistogramWrapper → passes features to MagnitudeHistogram
// FrequencyTimelineWrapper  → passes features to FrequencyTimeline
// DepthScatterWrapper       → passes features to DepthScatter
// All Recharts charts receive features as a prop and compute their
// own data internally via useMemo — no useEffect or useRef needed ✅