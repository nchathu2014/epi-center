export default function TechStackPage() {
  return (
    <div className="overflow-x-auto rounded-xl border m-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">
              Category
            </th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">
              Tech
            </th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              category: "Framework",
              tech: "Next.js 16",
              purpose: "App Router, metadata, OG images",
            },
            {
              category: "Language",
              tech: "TypeScript",
              purpose: "Full type safety across the project",
            },
            {
              category: "Styling",
              tech: "TailwindCSS",
              purpose: "Utility-first styling",
            },
            {
              category: "Data Fetching",
              tech: "TanStack Query",
              purpose: "Fetch, cache, auto-refetch USGS API",
            },
            {
              category: "Client State",
              tech: "Zustand",
              purpose: "Filters, UI state management",
            },
            {
              category: "Map",
              tech: "D3.js",
              purpose: "World map with bubble markers",
            },
            {
              category: "Charts",
              tech: "Recharts",
              purpose: "Histogram, timeline, scatter plot",
            },
            {
              category: "UI Components",
              tech: "shadcn/ui",
              purpose: "Cards, badges, select, table",
            },
            { category: "Icons", tech: "Lucide React", purpose: "UI icons" },
            {
              category: "Dates",
              tech: "date-fns",
              purpose: "Date formatting and calculations",
            },
            {
              category: "Notifications",
              tech: "Sonner",
              purpose: "Toast notifications",
            },
            {
              category: "Data Source",
              tech: "USGS API",
              purpose: "Free real-time earthquake data",
            },
            {
              category: "Deployment",
              tech: "Vercel",
              purpose: "Free, zero config deployment",
            },
          ].map((row, index) => (
            <tr
              key={row.tech}
              className={`border-b last:border-0 hover:bg-muted/50 transition-colors ${
                index % 2 === 0 ? "bg-background" : "bg-muted/20"
              }`}
            >
              <td className="px-4 py-3 text-muted-foreground text-xs uppercase tracking-wide">
                {row.category}
              </td>
              <td className="px-4 py-3 font-medium font-mono text-sm">
                {row.tech}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
