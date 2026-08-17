import { clientLogos } from "./site-data";

export function TrustedBy() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-ink-gradient py-16">
      <div className="section-x">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold text-ink-foreground sm:text-[32px]">
          2500+ top companies in India trust Pazcare for their Employee Insurance &amp; Benefits
        </h2>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="marquee-track items-center gap-14">
          {row.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={`${logo.name} logo`}
              className="h-8 w-auto max-w-[150px] shrink-0 object-contain opacity-90"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}