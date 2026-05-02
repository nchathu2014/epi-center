import { useQuery } from "@tanstack/react-query";
import { EarthquakeCollection } from "@/types/earthquake";
import { useFilterStore } from "@/store/filter-store";
import { format, subDays } from "date-fns";

const BASE_URL = process.env.NEXT_PUBLIC_USGS_API;

export function useEarthquakes() {
  const { minMagnitude, maxMagnitude, days, minDepth, maxDepth } =
    useFilterStore();

  const starttime = format(subDays(new Date(), days), "yyyy-MM-dd");
  const endtime = format(new Date(), "yyyy-MM-dd");

  return useQuery<EarthquakeCollection>({
    queryKey: ["earthquakes", minMagnitude, maxMagnitude, days, minDepth, maxDepth],
    queryFn: async () => {
      const params = new URLSearchParams({
        format: "geojson",
        starttime,
        endtime,
        minmagnitude: minMagnitude.toString(),
        maxmagnitude: maxMagnitude.toString(),
        mindepth: minDepth.toString(),
        maxdepth: maxDepth.toString(),
        orderby: "time",
        limit: "1000",
      });

      const res = await fetch(`${BASE_URL}?${params}`);
      if (!res.ok) throw new Error("Failed to fetch earthquake data");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}