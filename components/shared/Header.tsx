export function Header() {
  return (
    <nav className="bg-gray-50 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center p-3">
          <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Epi<span className="text-red-500">Center</span>
          </h1>
          <div>
            <p>Earthquake Analytics Explorer </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>
                Data:
                <a
                  href="https://earthquake.usgs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  USGS Earthquake Hazards Program
                </a>
              </span>
            </div>
            <div className="text-xs">
              <span className="mr-1 w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

{
  /* Top Nav */
}
// <nav className="border-b px-6 py-3 flex items-center justify-between sticky top-0 bg-background z-10">
//   <div className="flex items-center gap-2">
//     <span className="text-lg font-semibold tracking-tight">
//       Epi<span className="text-red-500">Center</span>
//     </span>
//     <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">
//       beta
//     </span>
//   </div>
//   <div className="flex items-center gap-3 text-xs text-muted-foreground">
//     <span>Data: USGS Earthquake Hazards Program</span>
//     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
//     <span>Live</span>
//   </div>
// </nav>
