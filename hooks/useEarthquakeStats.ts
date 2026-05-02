import { useMemo } from "react";
import { EarthquakeFeature, EarthquakeStats } from "@/types/earthquake";

export function useEarthquakeStats(
  features: EarthquakeFeature[]
): EarthquakeStats {
  return useMemo(() => {
    if (!features.length) {
      return {
        total: 0,
        strongestMag: 0,
        strongestPlace: "N/A",
        avgMagnitude: 0,
        avgDepth: 0,
        majorCount: 0,
      };
    }

    const strongest = features.reduce((a, b) =>
      a.properties.mag > b.properties.mag ? a : b
    );

    const avgMag =
      features.reduce((sum, f) => sum + f.properties.mag, 0) / features.length;

    const avgDepth =
      features.reduce((sum, f) => sum + f.geometry.coordinates[2], 0) /
      features.length;

    return {
      total: features.length,
      strongestMag: strongest.properties.mag,
      strongestPlace: strongest.properties.place,
      avgMagnitude: Math.round(avgMag * 10) / 10,
      avgDepth: Math.round(avgDepth),
      majorCount: features.filter((f) => f.properties.mag >= 6.0).length,
    };
  }, [features]);
}