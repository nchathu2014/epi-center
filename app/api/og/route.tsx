import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const total = searchParams.get("total") ?? "1,284";
  const strongest = searchParams.get("strongest") ?? "M 7.2";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#0a0a0f",
          padding: "60px 80px",
          color: "white",
        }}
      >
        <p style={{ fontSize: 20, opacity: 0.6, margin: "0 0 16px" }}>
          USGS · Real-time Seismic Data
        </p>
        <h1 style={{ fontSize: 56, fontWeight: 700, margin: "0 0 40px" }}>
          Earthquake Analytics Explorer
        </h1>
        <div style={{ display: "flex", gap: 40 }}>
          <div>
            <p style={{ fontSize: 16, opacity: 0.6, margin: "0 0 8px" }}>
              Total events
            </p>
            <p style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>{total}</p>
          </div>
          <div>
            <p style={{ fontSize: 16, opacity: 0.6, margin: "0 0 8px" }}>
              Strongest
            </p>
            <p style={{ fontSize: 40, fontWeight: 700, margin: 0, color: "#E24B4A" }}>
              {strongest}
            </p>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}