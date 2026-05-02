"use client";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { EarthquakeFeature } from "@/types/earthquake";

interface Props {
  features: EarthquakeFeature[];
}

const BINS = [
  { label: "4.5–5.0", min: 4.5, max: 5.0, color: "#85B7EB" },
  { label: "5.0–5.5", min: 5.0, max: 5.5, color: "#378ADD" },
  { label: "5.5–6.0", min: 5.5, max: 6.0, color: "#185FA5" },
  { label: "6.0–6.5", min: 6.0, max: 6.5, color: "#BA7517" },
  { label: "6.5–7.0", min: 6.5, max: 7.0, color: "#854F0B" },
  { label: "7.0+", min: 7.0, max: 99, color: "#E24B4A" },
];

export function MagnitudeHistogram({ features }: Props) {
  const data = useMemo(() => {
    return BINS.map((bin) => ({
      label: bin.label,
      count: features.filter(
        (f) => f.properties.mag >= bin.min && f.properties.mag < bin.max,
      ).length,
      color: bin.color,
    }));
  }, [features]);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.1)" />
        <XAxis dataKey="label" tick={{ fontSize: 10 }} tickLine={false} />
        <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value) => [`${value} events`, "Count"]}
          contentStyle={{ fontSize: 12, borderRadius: 8 }}
        />
        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
