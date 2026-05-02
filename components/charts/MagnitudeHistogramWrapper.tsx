"use client";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { MagnitudeHistogram } from "./MagnitudeHistogram";
import { Loader2 } from "lucide-react";

export function MagnitudeHistogramWrapper() {
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

  return <MagnitudeHistogram features={data?.features ?? []} />;
}