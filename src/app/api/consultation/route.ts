import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appendLeadFallback, type ConsultationLead } from "@/lib/leads";

export const runtime = "nodejs";

type ConsultationBody = {
  name?: string;
  churchName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ConsultationBody;

  try {
    body = (await request.json()) as ConsultationBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const churchName = body.churchName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() || undefined;
  const message = body.message?.trim() ?? "";

  if (!name || !churchName || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        error: "Name, church name, email, and message are required.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const lead: ConsultationLead = {
    name,
    churchName,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL || "hello@journeydigital.ai";
  const from =
    process.env.CONSULTATION_FROM_EMAIL ||
    "Journey Digital <onboarding@resend.dev>";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Consultation: ${churchName} — ${name}`,
        text: [
          "New consultation request from journeydigital.ai",
          "",
          `Name: ${name}`,
          `Church: ${churchName}`,
          `Email: ${email}`,
          `Phone: ${phone || "(not provided)"}`,
          "",
          "Message / hopes:",
          message,
          "",
          `Received: ${lead.receivedAt}`,
        ].join("\n"),
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          {
            success: false,
            error: "Could not send email. Please try again or email us directly.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({ success: true, delivery: "email" });
    } catch (err) {
      console.error("Resend send failed:", err);
      return NextResponse.json(
        {
          success: false,
          error: "Could not send email. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }
  }

  // Dev / unset: persist locally so the form still works without Resend.
  try {
    await appendLeadFallback(lead);
    return NextResponse.json({
      success: true,
      delivery: "local",
      note: "RESEND_API_KEY is not set. Lead saved to data/leads.json.",
    });
  } catch (err) {
    console.error("Local lead write failed:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "Lead could not be saved. Set RESEND_API_KEY or check data/ write permissions.",
      },
      { status: 500 },
    );
  }
}
