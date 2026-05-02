"use client";
import { useMemo } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { EarthquakeFeature } from "@/types/earthquake";
import { format } from "date-fns";

interface Props { features: EarthquakeFeature[]; }

export function FrequencyTimeline({ features }: Props) {
  const data = useMemo(() => {
    const counts = new Map<string, number>();
    features.forEach((f) => {
      const day = format(new Date(f.properties.time), "MMM dd");
      counts.set(day, (counts.get(day) ?? 0) + 1);
    });
    return Array.from(counts.entries())
      .map(([date, count]) => ({ date, count }))
      .slice(-14);
  }, [features]);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#378ADD" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#378ADD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.1)" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 9 }}
          tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value) => [`${value} earthquakes`, "Count"]}
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
        />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#378ADD"
          strokeWidth={2}
          fill="url(#colorCount)"
          dot={{ r: 3, fill: "#378ADD" }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}