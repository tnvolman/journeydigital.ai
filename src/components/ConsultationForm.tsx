"use client";

import { FormEvent, useState, type ReactNode } from "react";

type FormState = "idle" | "sending" | "ok" | "err";

const inputClass =
  "w-full rounded-[3px] border border-line bg-panel px-[18px] py-[15px] text-[15px] text-ink placeholder:text-[#5e5b58] transition-colors focus:border-accent focus:outline-none";

export function ConsultationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      churchName: String(data.get("churchName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong.");
      }

      form.reset();
      setState("ok");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Email hello@journeydigital.ai and we will make it right.",
      );
      setState("err");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <Field label="Your name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Pastor John Smith"
          className={inputClass}
        />
      </Field>

      <Field label="Church name" htmlFor="churchName">
        <input
          id="churchName"
          name="churchName"
          type="text"
          required
          placeholder="Grace Community Church"
          className={inputClass}
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@church.org"
          className={inputClass}
        />
      </Field>

      <Field label="Phone (optional)" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(252) 000-0000"
          className={inputClass}
        />
      </Field>

      <Field label="What are you hoping for?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your church, timeline, or what a good website would unlock…"
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </Field>

      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-[3px] bg-accent px-[17px] py-[17px] text-[15px] font-semibold tracking-[0.02em] text-[#141414] transition-colors hover:bg-accent-soft disabled:cursor-wait disabled:opacity-70"
      >
        {state === "sending" ? "Sending…" : "Request a free consultation"}
      </button>

      {state === "ok" && (
        <p className="text-[14.5px] text-ok" role="status">
          Thank you. We will be in touch within a day.
        </p>
      )}
      {state === "err" && (
        <p className="text-[14.5px] text-err" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2.5 block text-xs font-semibold tracking-[0.1em] text-fog uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
