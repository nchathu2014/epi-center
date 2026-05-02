export interface EarthquakeFeature {
  type: "Feature";
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    status: string;
    type: string;
    depth?: number;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number, number]; // [longitude, latitude, depth]
  };
  id: string;
}

export interface EarthquakeCollection {
  type: "FeatureCollection";
  features: EarthquakeFeature[];
  metadata: {
    count: number;
    title: string;
  };
}

export interface EarthquakeStats {
  total: number;
  strongestMag: number;
  strongestPlace: string;
  avgMagnitude: number;
  avgDepth: number;
  majorCount: number;
}

export interface FilterState {
  minMagnitude: number;
  maxMagnitude: number;
  days: number;
  minDepth: number;
  maxDepth: number;
  region: string;
}
