import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FilterStore {
  minMagnitude: number;
  maxMagnitude: number;
  days: number;
  minDepth: number;
  maxDepth: number;
  region: string;
  setMinMagnitude: (v: number) => void;
  setMaxMagnitude: (v: number) => void;
  setDays: (v: number) => void;
  setMinDepth: (v: number) => void;
  setMaxDepth: (v: number) => void;
  setRegion: (v: string) => void;
  resetFilters: () => void;
}

const defaults = {
  minMagnitude: 4.5,
  maxMagnitude: 10,
  days: 7,
  minDepth: 0,
  maxDepth: 700,
  region: "all",
};

export const useFilterStore = create<FilterStore>()(
  devtools(
    (set) => ({
      ...defaults,
      setMinMagnitude: (v) => set({ minMagnitude: v }),
      setMaxMagnitude: (v) => set({ maxMagnitude: v }),
      setDays: (v) => set({ days: v }),
      setMinDepth: (v) => set({ minDepth: v }),
      setMaxDepth: (v) => set({ maxDepth: v }),
      setRegion: (v) => set({ region: v }),
      resetFilters: () => set(defaults),
    }),
    { name: "filter-store" },
  ),
);
