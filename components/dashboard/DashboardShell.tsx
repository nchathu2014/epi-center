export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav
      <nav className="border-b px-6 py-3 flex items-center justify-between sticky top-0 bg-background z-10">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            Epi<span className="text-red-500">Center</span>
          </span>
          <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">
            beta
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Data: USGS Earthquake Hazards Program</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <span>Live</span>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>

      {/* Footer */}
      {/* <footer className="border-t px-6 py-4 text-center text-xs text-muted-foreground">
        <p>
          Powered by{" "}
          <a
            href="https://earthquake.usgs.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            USGS Earthquake Hazards Program
          </a>.Built with Next.js, D3.js, Recharts
        </p>
      </footer> */}
    </div>
  );
}
