import Image from "next/image";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center px-0 pt-[120px] pb-20"
      style={{
        background:
          "radial-gradient(900px 600px at 78% 20%, rgba(255,255,255,.10), transparent 60%), radial-gradient(700px 500px at 10% 90%, rgba(255,255,255,.04), transparent 55%), var(--bg)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[60px]">
        <div className="text-center lg:text-left">
          <span className="mb-7 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.24em] text-accent uppercase before:block before:h-px before:w-7 before:bg-accent">
            A church web studio
          </span>
          <h1 className="font-serif text-[clamp(44px,6.4vw,82px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
            Digital presence.
            <em className="mt-1 block font-serif font-semibold not-italic text-accent">
              Kingdom purpose.
            </em>
          </h1>
          <p className="mx-auto mt-7 mb-10 max-w-[46ch] text-[clamp(17px,1.9vw,20px)] text-fog lg:mx-0">
            We design and build digital homes for the Church — sleek, fast, and
            made to be found. Agency-grade craft, built with AI, priced to serve
            ministry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center bg-accent px-7 py-4 text-[15px] font-semibold text-[#141414] transition hover:-translate-y-0.5 hover:bg-cream"
            >
              Request a consultation
            </a>
            <a
              href="#work"
              className="inline-flex items-center border border-line px-7 py-4 text-[15px] font-semibold text-cream transition hover:-translate-y-0.5 hover:border-fog"
            >
              View our work
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="absolute h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.16),transparent_68%)] blur-[18px]"
          />
          <Image
            src="/brand/journeydigital_logo_grey.svg"
            alt="Journey Digital — church website design studio"
            width={380}
            height={380}
            className="hero-rise relative w-[min(380px,80%)] drop-shadow-[0_24px_60px_rgba(0,0,0,.6)]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
