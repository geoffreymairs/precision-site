export default function TopBar() {
  return (
    <div className="bg-stone-950 border-b border-stone-800 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-sm">
        <p className="text-stone-400 hidden sm:block">
          <span className="text-amber-400 font-semibold">Fully equipped & ready to work</span>
        </p>
        <a
          href="tel:0226491618"
          className="flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors ml-auto sm:ml-0"
        >
          <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call: 022 649 1618
        </a>
      </div>
    </div>
  );
}
