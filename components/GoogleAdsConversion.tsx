"use client";

import { useEffect } from "react";
import { FORM_CONVERSION_SEND_TO, trackConversion } from "@/lib/tracking";

export default function GoogleAdsConversion() {
  useEffect(() => {
    trackConversion(FORM_CONVERSION_SEND_TO);
  }, []);

  return null;
}
