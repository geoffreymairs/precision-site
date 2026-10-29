// Google Ads conversion targets.
// Form conversion is the existing live action that was already firing on /thank-you.
// Call conversion fires on every tel: link click via the global listener in components/CallTracking.tsx.
export const FORM_CONVERSION_SEND_TO = "AW-18156586677/s-AcCKj23awcELWN3tFD";
export const CALL_CONVERSION_SEND_TO = "AW-18156586677/SjdVCNqw4a0dELWN3tFD";

type Gtag = (command: "event", action: string, params: Record<string, unknown>) => void;

export function trackConversion(sendTo: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: sendTo });
  }
}
