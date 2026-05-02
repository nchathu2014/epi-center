"use client";
import { useMemo } from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ZAxis,
} from "recharts";
import { EarthquakeFeature } from "@/types/earthquake";

interface Props { features: EarthquakeFeature[]; }

export function DepthScatter({ features }: Props) {
  const data = useMemo(() => {
    return features.slice(0, 300).map((f) => ({
      depth: Math.round(f.geometry.coordinates[2]),
      magnitude: f.properties.mag,
      place: f.properties.place,
    }));
  }, [features]);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.1)" />
        <XAxis
          dataKey="depth"
          name="Depth"
          unit=" km"
          tick={{ fontSize: 10 }}
          tickLine={false}
          label={{ value: "depth (km)", position: "insideBottom", offset: -10, fontSize: 10 }}
        />
        <YAxis
          dataKey="magnitude"
          name="Magnitude"
          tick={{ fontSize: 10 }}
          tickLine={false}
          axisLine={false}
          label={{ value: "magnitude", angle: -90, position: "insideLeft", fontSize: 10 }}
        />
        <ZAxis range={[20, 20]} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          content={({ payload }) => {
            if (!payload?.length) return null;
            const d = payload[0].payload;
            return (
              <div style={{
                background: "white",
                border: "0.5px solid rgba(0,0,0,0.1)",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: 12,
              }}>
                <p style={{ margin: 0, fontWeight: 500 }}>M {d.magnitude}</p>
                <p style={{ margin: "2px 0 0", color: "#888" }}>Depth: {d.depth} km</p>
              </div>
            );
          }}
        />
        <Scatter data={data} fill="#378ADD" fillOpacity={0.5} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}