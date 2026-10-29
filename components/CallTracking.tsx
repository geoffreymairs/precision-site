"use client";

import { useEffect } from "react";
import { CALL_CONVERSION_SEND_TO, trackConversion } from "@/lib/tracking";

export default function CallTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) trackConversion(CALL_CONVERSION_SEND_TO);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
