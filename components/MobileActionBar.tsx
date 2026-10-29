"use client";

import { useRouter } from "next/navigation";
import { PHONE_TEL } from "@/lib/site";

export default function MobileActionBar() {
  const router = useRouter();

  function goToQuote(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("quote");
    e.preventDefault();
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
    } else {
      router.push("/contact#quote");
    }
  }

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-stone-950/95 backdrop-blur border-t border-stone-800 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 bg-white text-stone-900 font-bold py-3 rounded-lg"
        >
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Billy
        </a>
        <a
          href="#quote"
          onClick={goToQuote}
          className="flex items-center justify-center bg-amber-500 active:bg-amber-600 text-white font-bold py-3 rounded-lg"
        >
          Free Quote
        </a>
      </div>
    </div>
  );
}
