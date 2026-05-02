"use client";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { useEarthquakeStats } from "@/hooks/useEarthquakeStats";
import { Card, CardContent } from "@/components/ui/card";

export function KPICards() {
  const { data, isLoading } = useEarthquakes();
  const stats = useEarthquakeStats(data?.features ?? []);

  const cards = [
    {
      label: "Total earthquakes",
      value: stats.total.toLocaleString(),
      sub: `${stats.majorCount} major (M6+)`,
    },
    {
      label: "Strongest magnitude",
      value: `M ${stats.strongestMag.toFixed(1)}`,
      sub: stats.strongestPlace,
    },
    {
      label: "Average magnitude",
      value: `M ${stats.avgMagnitude.toFixed(1)}`,
      sub: "across all events",
    },
    {
      label: "Average depth",
      value: `${stats.avgDepth} km`,
      sub: stats.avgDepth < 70 ? "mostly shallow" : "intermediate",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-muted animate-pulse rounded-lg h-20" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {cards.map((card) => (
        <div key={card.label} className="bg-muted rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
          <p className="text-2xl font-medium">{card.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}
