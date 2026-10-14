import { headers } from "next/headers";
import type { ConsultationInput } from "@/lib/consultations";

/**
 * Railway (the-forge) owns lead handling: Postgres insert, Twilio owner SMS,
 * and the sales@ email. We forward to its POST /contact (JSON: name, church,
 * email, phone, hope). Rate limit there: 10/hour keyed by first X-Forwarded-For.
 *
 * NOTE: the-forge host-guards /contact to journeydigital.ai hosts. Before the
 * apex points at Vercel, set CONTACT_FORWARD_URL to a Railway-only hostname
 * that the-forge accepts (see PR description) — otherwise this would loop back
 * to Vercel.
 */
const DEFAULT_FORWARD_URL = "https://journeydigital.ai/contact";

export async function forwardLeadToRailway(
  input: ConsultationInput,
): Promise<boolean> {
  const url = process.env.CONTACT_FORWARD_URL || DEFAULT_FORWARD_URL;
  const h = await headers();
  const clientIp =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(clientIp ? { "X-Forwarded-For": clientIp } : {}),
      },
      body: JSON.stringify({
        name: input.name,
        church: input.church,
        email: input.email,
        phone: input.phone ?? "",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    const data = (await res.json().catch(() => null)) as {
      success?: boolean;
    } | null;
    if (!res.ok || !data?.success) {
      console.error("[consultation] railway forward failed", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error(
      "[consultation] railway forward error",
      err instanceof Error ? err.message : String(err),
    );
    return false;
  }
}
