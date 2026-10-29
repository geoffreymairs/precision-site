// Google Ads conversion targets.
// Form conversion is the existing live action that was already firing on /thank-you.
// [REPLACE] AW-XXXXXXX/XXXXXXX with the "AW-ID/label" of a phone-call-click conversion from Google Ads > Goals > Conversions.
export const FORM_CONVERSION_SEND_TO = "AW-18156586677/s-AcCKj23awcELWN3tFD";
export const CALL_CONVERSION_SEND_TO = "AW-XXXXXXX/XXXXXXX";

type Gtag = (command: "event", action: string, params: Record<string, unknown>) => void;

export function trackConversion(sendTo: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: sendTo });
  }
}
