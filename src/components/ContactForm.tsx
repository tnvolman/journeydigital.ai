"use client";

import { useActionState } from "react";
import {
  submitConsultation,
  type ConsultationActionState,
} from "@/app/actions/consultation";
import { Reveal } from "@/components/Reveal";

const initial: ConsultationActionState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitConsultation, initial);

  return (
    <section id="contact" className="relative py-[110px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px] md:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            <span className="font-medium text-fog">05</span> Start a project
          </div>
          <h2 className="mb-5 font-serif text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream">
            Let&apos;s build something that lasts.
          </h2>
          <p className="max-w-[40ch] text-[17px] text-fog">
            Tell us about your church and what you&apos;re hoping for. We&apos;ll
            reach out within a day — no pressure, no sales pitch.
          </p>
        </Reveal>

        <Reveal>
          <form action={action} className="grid gap-5">
            <Field
              id="name"
              name="name"
              label="Your name"
              placeholder="Pastor John Smith"
              autoComplete="name"
              required
            />
            <Field
              id="church"
              name="church"
              label="Church name"
              placeholder="Grace Community Church"
              required
            />
            <Field
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@church.org"
              autoComplete="email"
              required
            />
            <Field
              id="phone"
              name="phone"
              type="tel"
              label="Phone (optional)"
              placeholder="(252) 000-0000"
              autoComplete="tel"
            />

            <button
              type="submit"
              disabled={pending}
              className="bg-accent px-[17px] py-[17px] text-[15px] font-semibold tracking-[0.02em] text-[#141414] transition hover:bg-cream disabled:cursor-wait disabled:opacity-80"
            >
              {pending ? "Sending…" : "Request a free consultation"}
            </button>

            {state.message ? (
              <p
                className={`text-[14.5px] ${state.ok ? "text-ok" : "text-err"}`}
                role="status"
                aria-live="polite"
              >
                {state.message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold tracking-[0.1em] text-fog uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-[3px] border border-line bg-panel px-[18px] py-[15px] text-[15px] text-cream outline-none transition-[border-color] placeholder:text-[#5e5b58] focus:border-accent"
      />
    </div>
  );
}
