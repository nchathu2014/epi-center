"use client";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { DepthScatter } from "./DepthScatter";
import { Loader2 } from "lucide-react";

export function DepthScatterWrapper() {
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

  return <DepthScatter features={data?.features ?? []} />;
}