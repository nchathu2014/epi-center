"use client";
import { useEarthquakes } from "@/hooks/useEarthquakes";
import { EarthquakeFeature } from "@/types/earthquake";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

function getMagnitudeBadge(mag: number) {
  if (mag >= 7.0)
    return { label: "major", className: "bg-red-100 text-red-800" };
  if (mag >= 6.0)
    return { label: "strong", className: "bg-orange-100 text-orange-800" };
  if (mag >= 5.0)
    return { label: "moderate", className: "bg-blue-100 text-blue-800" };
  return { label: "light", className: "bg-green-100 text-green-800" };
}

function getDepthLabel(depth: number) {
  if (depth < 70) return { label: "shallow", className: "text-red-500" };
  if (depth < 300)
    return { label: "intermediate", className: "text-amber-500" };
  return { label: "deep", className: "text-purple-500" };
}

export function RecentEventsTable() {
  const { data, isLoading, isError } = useEarthquakes();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );

  if (isError)
    return (
      <p className="text-sm text-destructive text-center py-8">
        Failed to load earthquake data
      </p>
    );

  // Top 10 by magnitude
  const topEvents = [...(data?.features ?? [])]
    .sort((a, b) => b.properties.mag - a.properties.mag)
    .slice(0, 10);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-xs text-muted-foreground">
            <th className="text-left py-2 px-3 font-medium">Location</th>
            <th className="text-left py-2 px-3 font-medium">Magnitude</th>
            <th className="text-left py-2 px-3 font-medium">Depth</th>
            <th className="text-left py-2 px-3 font-medium">When</th>
            <th className="text-left py-2 px-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {topEvents.map((event: EarthquakeFeature) => {
            const mag = event.properties.mag;
            const depth = event.geometry.coordinates[2];
            const badge = getMagnitudeBadge(mag);
            const depthLabel = getDepthLabel(depth);

            return (
              <tr
                key={event.id}
                className="border-b hover:bg-muted/50 transition-colors"
              >
                {/* Location */}
                <td className="py-2 px-3 max-w-[200px] truncate">
                  {event.properties.place ?? "Unknown location"}
                </td>

                {/* Magnitude */}
                <td className="py-2 px-3 font-mono font-medium">
                  M {mag.toFixed(1)}
                </td>

                {/* Depth */}
                <td className="py-2 px-3">
                  <span className={`font-mono text-xs ${depthLabel.className}`}>
                    {Math.round(depth)} km
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    ({depthLabel.label})
                  </span>
                </td>

                {/* When */}
                <td className="py-2 px-3 text-xs text-muted-foreground whitespace-nowrap">
                  {formatDistanceToNow(new Date(event.properties.time), {
                    addSuffix: true,
                  })}
                </td>

                {/* Status badge */}
                <td className="py-2 px-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
