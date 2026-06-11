"use client";

import { useEffect } from "react";

export default function GoogleAdsConversion() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: "AW-18156586677/s-AcCKj23awcELWN3tFD",
      });
    }
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `gtag('event','conversion',{'send_to':'AW-18156586677/s-AcCKj23awcELWN3tFD'});`,
      }}
    />
  );
}
