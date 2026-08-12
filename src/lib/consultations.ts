import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";

export type ConsultationInput = {
  name: string;
  church: string;
  email: string;
  phone?: string;
};

export type ConsultationResult = {
  ok: true;
  id: string;
  emailed: boolean;
};

function dataDir() {
  return path.join(process.cwd(), ".data", "consultations");
}

/** Persist a submission as JSONL (local/dev). Falls back to console log on read-only/ephemeral FS. */
export async function persistConsultation(
  input: ConsultationInput,
): Promise<{ id: string; stored: "file" | "log" }> {
  const id = `c_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const record = {
    id,
    receivedAt: new Date().toISOString(),
    ...input,
  };

  try {
    const dir = dataDir();
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "submissions.jsonl");
    await appendFile(file, `${JSON.stringify(record)}\n`, "utf8");
    return { id, stored: "file" };
  } catch (err) {
    console.info("[consultation] file persist unavailable; logging submission", {
      id,
      err: err instanceof Error ? err.message : String(err),
    });
    console.info("[consultation] submission", JSON.stringify(record));
    return { id, stored: "log" };
  }
}

/** Send via Resend when configured. Never throws for missing email config. */
export async function emailConsultation(
  input: ConsultationInput,
  id: string,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Journey Digital <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.info(
      "[consultation] email not configured (set RESEND_API_KEY and CONTACT_TO_EMAIL); submission still received",
      { id },
    );
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const phoneLine = input.phone?.trim()
      ? `Phone: ${input.phone.trim()}`
      : "Phone: (not provided)";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: input.email,
      subject: `Consultation request — ${input.church}`,
      text: [
        "New consultation request from journeydigital.ai",
        "",
        `ID: ${id}`,
        `Name: ${input.name}`,
        `Church: ${input.church}`,
        `Email: ${input.email}`,
        phoneLine,
      ].join("\n"),
    });

    if (error) {
      console.error("[consultation] Resend error", { id, error });
      return false;
    }

    return true;
  } catch (err) {
    console.error("[consultation] email send failed", {
      id,
      err: err instanceof Error ? err.message : String(err),
    });
    return false;
  }
}
