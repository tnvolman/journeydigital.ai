"use server";

import {
  emailConsultation,
  persistConsultation,
  type ConsultationInput,
} from "@/lib/consultations";

export type ConsultationActionState = {
  ok: boolean;
  message: string;
};

function validate(input: ConsultationInput): string | null {
  if (!input.name.trim()) return "Please share your name.";
  if (!input.church.trim()) return "Please share your church name.";
  if (!input.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return "Please share a valid email.";
  }
  return null;
}

export async function submitConsultation(
  _prev: ConsultationActionState,
  formData: FormData,
): Promise<ConsultationActionState> {
  const input: ConsultationInput = {
    name: String(formData.get("name") ?? ""),
    church: String(formData.get("church") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
  };

  const error = validate(input);
  if (error) {
    return { ok: false, message: error };
  }

  const { id } = await persistConsultation({
    name: input.name.trim(),
    church: input.church.trim(),
    email: input.email.trim(),
    phone: input.phone?.trim() || undefined,
  });

  await emailConsultation(
    {
      name: input.name.trim(),
      church: input.church.trim(),
      email: input.email.trim(),
      phone: input.phone?.trim() || undefined,
    },
    id,
  );

  // Always warm for the visitor — email config status stays in server logs only.
  return {
    ok: true,
    message: "Thank you. We will be in touch within a day.",
  };
}
