"use client";
import { useFilterStore } from "@/store/filter-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  const { minMagnitude, days, setMinMagnitude, setDays, resetFilters } =
    useFilterStore();

  return (
    <div className="flex flex-wrap gap-3 items-center mb-6">
      <Select
        value={minMagnitude.toString()}
        onValueChange={(v) => setMinMagnitude(Number(v))}
      >
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Min magnitude" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2.5">M 2.5+</SelectItem>
          <SelectItem value="4.5">M 4.5+</SelectItem>
          <SelectItem value="5.0">M 5.0+</SelectItem>
          <SelectItem value="6.0">M 6.0+</SelectItem>
          <SelectItem value="7.0">M 7.0+</SelectItem>
        </SelectContent>
      </Select>

      <Select value={days.toString()} onValueChange={(v) => setDays(Number(v))}>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Last 24 hours</SelectItem>
          <SelectItem value="7">Last 7 days</SelectItem>
          <SelectItem value="30">Last 30 days</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" onClick={resetFilters}>
        Reset
      </Button>

      {/* <span className="text-xs text-muted-foreground ml-auto">
        Auto-refreshes every 5 minutes
      </span> */}
    </div>
  );
}
