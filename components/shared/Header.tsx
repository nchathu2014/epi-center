export function Header() {
  return (
    <nav className="bg-gray-50 shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center p-3">
          <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            EpiCenter
          </h1>
          <p>Earthquake Analytics Explorer </p>
        </div>
      </div>
    </nav>
  );
}
