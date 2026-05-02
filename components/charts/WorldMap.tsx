// components/charts/WorldMap.tsx
"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { FeatureCollection, Geometry } from "geojson"; // ✅ add this import
import { EarthquakeFeature } from "@/types/earthquake";

interface Props {
  features: EarthquakeFeature[];
}

function depthColor(depth: number): string {
  if (depth < 70) return "#E24B4A";
  if (depth < 300) return "#BA7517";
  return "#534AB7";
}

export function WorldMap({ features }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 700;
    const height = 380;

    const proj = d3
      .geoNaturalEarth1()
      .scale(120)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath(proj);

    const rScale = d3.scaleSqrt().domain([4.5, 8.5]).range([3, 18]);

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    ).then((world: any) => {
      // ✅ cast to FeatureCollection — fixes the build error
      // ✅ cast through unknown first
      const countries = topojson.feature(
        world,
        world.objects.countries,
      ) as unknown as FeatureCollection<Geometry>;

      svg
        .append("g")
        .selectAll("path")
        .data(countries.features) // ✅ no error
        .join("path")
        .attr("d", path as any)
        .attr("fill", "#e8e8e8")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.4);

      svg
        .append("g")
        .selectAll("circle")
        .data(features.sort((a, b) => b.properties.mag - a.properties.mag))
        .join("circle")
        .attr("cx", (d) => {
          const p = proj([
            d.geometry.coordinates[0],
            d.geometry.coordinates[1],
          ]);
          return p ? p[0] : -999;
        })
        .attr("cy", (d) => {
          const p = proj([
            d.geometry.coordinates[0],
            d.geometry.coordinates[1],
          ]);
          return p ? p[1] : -999;
        })
        .attr("r", (d) => rScale(d.properties.mag))
        .attr("fill", (d) => depthColor(d.geometry.coordinates[2]))
        .attr("fill-opacity", 0.7)
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.5)
        .append("title")
        .text(
          (d) =>
            `${d.properties.place}\nM ${d.properties.mag} · Depth: ${d.geometry.coordinates[2]} km`,
        );
    });
  }, [features]);

  return (
    <div>
      <svg
        ref={svgRef}
        width="100%"
        viewBox="0 0 700 380"
        preserveAspectRatio="xMidYMid meet"
      />
      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          Shallow (0–70 km)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
          Intermediate (70–300 km)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-purple-700 inline-block" />
          Deep (300+ km)
        </span>
      </div>
    </div>
  );
}
